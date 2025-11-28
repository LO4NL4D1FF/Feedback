// ========================================
// DOM Elements
// ========================================

const feedbackForm = document.getElementById('feedbackForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const errorAlert = document.getElementById('errorAlert');
const errorText = document.getElementById('errorText');
const closeError = document.getElementById('closeError');
const newFeedbackBtn = document.getElementById('newFeedbackBtn');
const messageTextarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

// ========================================
// Configuration
// ========================================

const MAX_MESSAGE_LENGTH = 1000;

// ========================================
// Character Counter
// ========================================

if (messageTextarea && charCount) {
    messageTextarea.addEventListener('input', function() {
        const currentLength = this.value.length;
        charCount.textContent = currentLength;

        // Update color based on length
        const parentDiv = charCount.parentElement;
        if (currentLength >= MAX_MESSAGE_LENGTH * 0.9) {
            parentDiv.style.color = '#ef4444';
        } else if (currentLength >= MAX_MESSAGE_LENGTH * 0.75) {
            parentDiv.style.color = '#f59e0b';
        } else {
            parentDiv.style.color = '#9ca3af';
        }
    });
}

// ========================================
// Form Validation
// ========================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^[\d\s()+\-\.]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function validateForm() {
    let isValid = true;
    const errors = {};

    // First Name
    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        errors.firstName = 'First name is required';
        isValid = false;
    } else if (firstName.length < 2) {
        errors.firstName = 'First name must be at least 2 characters';
        isValid = false;
    }

    // Last Name
    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        errors.lastName = 'Last name is required';
        isValid = false;
    } else if (lastName.length < 2) {
        errors.lastName = 'Last name must be at least 2 characters';
        isValid = false;
    }

    // Email
    const email = document.getElementById('email').value.trim();
    if (!email) {
        errors.email = 'Email is required';
        isValid = false;
    } else if (!validateEmail(email)) {
        errors.email = 'Please enter a valid email address';
        isValid = false;
    }

    // Phone (optional but validate if provided)
    const phone = document.getElementById('phone').value.trim();
    if (phone && !validatePhone(phone)) {
        errors.phone = 'Please enter a valid phone number';
        isValid = false;
    }

    // Category
    const category = document.getElementById('category').value;
    if (!category) {
        errors.category = 'Please select a feedback category';
        isValid = false;
    }

    // Rating
    const rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        errors.rating = 'Please provide a rating';
        isValid = false;
    }

    // Subject
    const subject = document.getElementById('feedbackSubject').value.trim();
    if (!subject) {
        errors.subject = 'Subject is required';
        isValid = false;
    } else if (subject.length < 5) {
        errors.subject = 'Subject must be at least 5 characters';
        isValid = false;
    }

    // Message
    const message = document.getElementById('message').value.trim();
    if (!message) {
        errors.message = 'Feedback message is required';
        isValid = false;
    } else if (message.length < 10) {
        errors.message = 'Feedback must be at least 10 characters';
        isValid = false;
    } else if (message.length > MAX_MESSAGE_LENGTH) {
        errors.message = `Feedback must not exceed ${MAX_MESSAGE_LENGTH} characters`;
        isValid = false;
    }

    // Display errors
    displayErrors(errors);

    return isValid;
}

function displayErrors(errors) {
    // Clear all previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.textContent = '');

    const inputElements = document.querySelectorAll('.form-input, .form-select, .form-textarea');
    inputElements.forEach(el => el.classList.remove('error'));

    // Display new errors
    Object.keys(errors).forEach(fieldName => {
        const errorElement = document.getElementById(`${fieldName}Error`);
        let inputElement = document.getElementById(fieldName);

        // Handle special case for subject field
        if (fieldName === 'subject') {
            inputElement = document.getElementById('feedbackSubject');
        }

        if (errorElement) {
            errorElement.textContent = errors[fieldName];
        }

        if (inputElement) {
            inputElement.classList.add('error');
        }
    });
}

// ========================================
// Form Submission (Web3Forms)
// ========================================

if (feedbackForm) {
    feedbackForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate form first
        if (!validateForm()) {
            showError('Please correct the errors in the form');
            return;
        }

        // Check if access key is set
        const accessKey = document.querySelector('input[name="access_key"]').value;
        if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
            showError('Please configure your Web3Forms access key. See README.md for instructions.');
            return;
        }

        // Show loading state
        setLoadingState(true);

        try {
            // Get form data
            const formData = new FormData(feedbackForm);

            // Update email subject with rating and category for better organization
            const rating = formData.get('rating');
            const category = formData.get('category');
            const feedbackSubject = formData.get('feedback_subject');
            formData.set('subject', `[${rating}★] ${category} - ${feedbackSubject}`);

            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                // Success
                showSuccess();
            } else {
                // Error from Web3Forms
                showError(data.message || 'Failed to submit feedback. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
            showError('Unable to submit feedback. Please check your internet connection and try again.');
        } finally {
            setLoadingState(false);
        }
    });
}

// ========================================
// Reset Form
// ========================================

if (feedbackForm) {
    feedbackForm.addEventListener('reset', function() {
        // Clear errors
        displayErrors({});

        // Reset character count
        if (charCount) {
            charCount.textContent = '0';
            charCount.parentElement.style.color = '#9ca3af';
        }

        // Hide any alerts
        hideError();
    });
}

// ========================================
// UI Helper Functions
// ========================================

function setLoadingState(loading) {
    if (loading) {
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
    }
}

function showSuccess() {
    feedbackForm.style.display = 'none';
    successMessage.classList.add('show');
    hideError();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showError(message) {
    errorText.textContent = message;
    errorAlert.classList.add('show');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hideError() {
    errorAlert.classList.remove('show');
}

// ========================================
// Event Listeners
// ========================================

// Close error alert
if (closeError) {
    closeError.addEventListener('click', hideError);
}

// New feedback button
if (newFeedbackBtn) {
    newFeedbackBtn.addEventListener('click', function() {
        successMessage.classList.remove('show');
        feedbackForm.style.display = 'block';
        feedbackForm.reset();
        displayErrors({});
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Real-time validation on blur
const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        // Only validate if the field has been touched
        if (this.value.trim()) {
            validateForm();
        }
    });

    // Remove error styling on input
    input.addEventListener('input', function() {
        this.classList.remove('error');
        const errorElement = document.getElementById(`${this.id}Error`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    });
});

// ========================================
// Auto-hide error alert after 10 seconds
// ========================================

let errorTimeout;
const originalShowError = showError;
showError = function(message) {
    originalShowError(message);
    clearTimeout(errorTimeout);
    errorTimeout = setTimeout(hideError, 10000);
};

// ========================================
// Accessibility: Keyboard navigation for stars
// ========================================

const stars = document.querySelectorAll('.rating-container .star');
stars.forEach((star, index) => {
    star.setAttribute('tabindex', '0');
    star.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const radioInput = this.previousElementSibling;
            if (radioInput) {
                radioInput.checked = true;
            }
        }
    });
});

// ========================================
// Log initialization
// ========================================

console.log('Customer Feedback Form initialized successfully');
console.log('Using Web3Forms for email delivery');
