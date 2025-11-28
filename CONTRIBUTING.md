# Contributing to Customer Feedback System

Thank you for your interest in contributing to the Customer Feedback System! This document provides guidelines and instructions for contributing.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Testing Requirements](#testing-requirements)
8. [Documentation](#documentation)

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect differing opinions and experiences

## Getting Started

### Prerequisites

- Node.js v14 or higher
- SQL Server 2016 or higher
- Git
- Code editor (VS Code recommended)

### Setup Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/feedbackSystem.git
   cd feedbackSystem
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. Set up the database:
   - Run SQL scripts in order (01 through 05)
   - Verify connection

6. Start development server:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branching Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/feature-name` - New features
- `bugfix/bug-name` - Bug fixes
- `hotfix/fix-name` - Urgent production fixes

### Creating a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### Making Changes

1. Make your changes
2. Test thoroughly
3. Update documentation if needed
4. Compile SCSS if you changed styles:
   ```bash
   npm run compile-scss
   ```

## Coding Standards

### JavaScript

- Use ES6+ syntax
- Use meaningful variable names
- Add comments for complex logic
- Follow existing code style
- Use async/await for asynchronous code
- Handle errors properly

Example:
```javascript
// Good
async function submitFeedback(formData) {
    try {
        const response = await fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Bad
function submitFeedback(formData) {
    fetch('/api/feedback', {
        method: 'POST',
        body: JSON.stringify(formData)
    }).then(r => r.json());
}
```

### SCSS

- Use variables for colors and spacing
- Nest selectors logically
- Use BEM naming where appropriate
- Keep specificity low
- Mobile-first responsive design

Example:
```scss
// Good
.form-group {
    margin-bottom: $spacing-lg;

    .form-label {
        font-weight: 500;
        color: $text-primary;
    }
}

// Bad
div.form-group > label.form-label {
    font-weight: 500;
    color: #1f2937;
}
```

### SQL

- Use uppercase for SQL keywords
- Indent properly
- Add comments for complex queries
- Use parameterized queries (never string concatenation)
- Name objects descriptively

Example:
```sql
-- Good
SELECT
    FeedbackID,
    FirstName,
    LastName,
    Email
FROM dbo.CustomerFeedback
WHERE Rating >= @minRating
ORDER BY SubmittedAt DESC;

-- Bad
select feedbackid,firstname,lastname,email from customerfeedback where rating>=4
```

### File Organization

```
- Keep files in appropriate directories
- One component per file for large features
- Group related functionality
- Use descriptive file names
```

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(form): add email confirmation field

Added a new email confirmation field to prevent typos.
Users must enter their email twice and they must match.

Closes #123
```

```bash
fix(api): resolve SQL injection vulnerability

Switched from string concatenation to parameterized queries
for all database operations.

BREAKING CHANGE: API query parameter format changed
```

## Pull Request Process

### Before Submitting

1. Update README.md if needed
2. Update API.md for API changes
3. Add test cases
4. Run all tests
5. Compile SCSS
6. Check for console errors
7. Test in multiple browsers

### Submitting a Pull Request

1. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Go to GitHub and create a Pull Request

3. Fill out the PR template:
   - Description of changes
   - Related issues
   - Testing performed
   - Screenshots (if UI changes)

4. Wait for review

### PR Title Format

```
[Type] Brief description

Examples:
[Feature] Add export to CSV functionality
[Fix] Resolve rating validation issue
[Docs] Update installation instructions
```

### Review Process

- At least one approval required
- All CI checks must pass
- No merge conflicts
- Code follows standards
- Tests pass

## Testing Requirements

### Required Tests

1. **Unit Tests**: For new functions
2. **Integration Tests**: For API endpoints
3. **UI Tests**: For form changes
4. **Manual Testing**: Cross-browser testing

### Running Tests

```bash
# Run all tests
npm test

# Run specific test suite
npm test -- --grep "API"

# Run with coverage
npm run test:coverage
```

### Test Coverage

- Aim for 80%+ coverage
- All critical paths tested
- Edge cases covered
- Error handling tested

## Documentation

### Update Documentation For

- New features
- API changes
- Configuration changes
- Breaking changes
- Bug fixes (if significant)

### Documentation Files

- `README.md` - Main documentation
- `docs/API.md` - API documentation
- `docs/TEST_CASES.md` - Test cases
- Code comments - Inline documentation

### Writing Documentation

- Clear and concise
- Include examples
- Use proper markdown formatting
- Add screenshots for UI features
- Keep it up to date

## Database Changes

### Schema Changes

1. Create new migration script
2. Number it sequentially (06_, 07_, etc.)
3. Include rollback script
4. Test on clean database
5. Update ER diagram if needed
6. Document changes in PR

### Example Migration

```sql
-- 06_add_priority_field.sql
USE FeedbackDB;
GO

ALTER TABLE CustomerFeedback
ADD Priority NVARCHAR(20) NULL
CHECK (Priority IN ('Low', 'Medium', 'High', 'Critical'));
GO

-- Set default for existing records
UPDATE CustomerFeedback
SET Priority = CASE
    WHEN Rating <= 2 THEN 'High'
    WHEN Rating = 3 THEN 'Medium'
    ELSE 'Low'
END
WHERE Priority IS NULL;
GO
```

## Adding New Features

### Checklist

- [ ] Feature branch created
- [ ] Code implemented
- [ ] Tests written
- [ ] Documentation updated
- [ ] SCSS compiled
- [ ] Cross-browser tested
- [ ] Security reviewed
- [ ] Performance tested
- [ ] Commits follow guidelines
- [ ] PR created

## Code Review Guidelines

### For Reviewers

- Be constructive and kind
- Explain why changes are needed
- Suggest alternatives
- Approve if standards met
- Test the changes locally

### For Contributors

- Respond to feedback promptly
- Ask questions if unclear
- Make requested changes
- Thank reviewers
- Update PR description if scope changes

## Getting Help

- Check existing documentation
- Search existing issues
- Ask in discussions
- Tag maintainers if urgent

## Recognition

Contributors will be:
- Listed in README.md
- Mentioned in release notes
- Thanked in project updates

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to make this project better!
