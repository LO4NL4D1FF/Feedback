# Customer Feedback System - Test Cases Document

**Project Name:** Customer Feedback System
**Version:** 1.0.0
**Date:** November 27, 2025
**Prepared By:** Development Team

---

## Table of Contents

1. [Introduction](#introduction)
2. [Test Environment Setup](#test-environment-setup)
3. [Frontend UI Test Cases](#frontend-ui-test-cases)
4. [Form Validation Test Cases](#form-validation-test-cases)
5. [API Endpoint Test Cases](#api-endpoint-test-cases)
6. [Database Test Cases](#database-test-cases)
7. [Integration Test Cases](#integration-test-cases)
8. [Security Test Cases](#security-test-cases)
9. [Performance Test Cases](#performance-test-cases)
10. [Browser Compatibility Test Cases](#browser-compatibility-test-cases)
11. [Responsive Design Test Cases](#responsive-design-test-cases)

---

## 1. Introduction

This document contains comprehensive test cases for the Customer Feedback System. Each test case includes:
- Test Case ID
- Test Description
- Prerequisites
- Test Steps
- Expected Results
- Actual Results
- Status (Pass/Fail)
- Priority (High/Medium/Low)

---

## 2. Test Environment Setup

### Environment Details

| Component | Specification |
|-----------|---------------|
| Operating System | Windows 10/11, macOS, Linux |
| Node.js Version | v14.x or higher |
| SQL Server Version | SQL Server 2016 or higher |
| Browsers | Chrome 100+, Firefox 95+, Safari 15+, Edge 100+ |
| Screen Resolutions | 1920x1080, 1366x768, 768x1024, 375x667 |

### Prerequisites for Testing

- SQL Server installed and running
- Database created using provided scripts
- Node.js and npm installed
- All dependencies installed (`npm install`)
- Server running on `http://localhost:3000`
- SCSS compiled to CSS

---

## 3. Frontend UI Test Cases

### TC-UI-001: Page Load

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-UI-001 |
| **Priority** | High |
| **Module** | User Interface |
| **Description** | Verify that the feedback form page loads correctly |
| **Prerequisites** | Server is running |
| **Test Steps** | 1. Open browser<br>2. Navigate to `http://localhost:3000`<br>3. Observe page loading |
| **Expected Result** | - Page loads without errors<br>- All CSS styles applied<br>- Form is visible and centered<br>- Logo and header text displayed<br>- No console errors |
| **Actual Result** | |
| **Status** | |

### TC-UI-002: Header Section Display

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-UI-002 |
| **Priority** | Medium |
| **Module** | User Interface |
| **Description** | Verify header section displays correctly |
| **Prerequisites** | Page loaded successfully |
| **Test Steps** | 1. View the header section<br>2. Check logo animation<br>3. Verify title and subtitle |
| **Expected Result** | - Logo displays with floating animation<br>- Title shows gradient effect<br>- Subtitle is readable and centered<br>- Background gradient applied |
| **Actual Result** | |
| **Status** | |

### TC-UI-003: Form Fields Rendering

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-UI-003 |
| **Priority** | High |
| **Module** | User Interface |
| **Description** | Verify all form fields render correctly |
| **Prerequisites** | Page loaded successfully |
| **Test Steps** | 1. Scroll through entire form<br>2. Check all input fields<br>3. Verify labels and placeholders |
| **Expected Result** | - All fields visible<br>- Labels aligned properly<br>- Required fields marked with asterisk<br>- Placeholders show example text<br>- Fields have proper borders and styling |
| **Actual Result** | |
| **Status** | |

### TC-UI-004: Star Rating Display

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-UI-004 |
| **Priority** | High |
| **Module** | User Interface |
| **Description** | Verify star rating component displays and functions |
| **Prerequisites** | Page loaded successfully |
| **Test Steps** | 1. Locate rating section<br>2. Hover over stars<br>3. Click on different stars<br>4. Verify visual feedback |
| **Expected Result** | - 5 stars displayed<br>- Stars change color on hover<br>- Stars scale up on hover<br>- Selected star and previous stars fill with color<br>- Hover effect works from right to left |
| **Actual Result** | |
| **Status** | |

### TC-UI-005: Character Counter

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-UI-005 |
| **Priority** | Medium |
| **Module** | User Interface |
| **Description** | Verify character counter updates in real-time |
| **Prerequisites** | Page loaded successfully |
| **Test Steps** | 1. Locate message textarea<br>2. Type characters<br>3. Observe counter<br>4. Type beyond 750 characters<br>5. Type beyond 900 characters |
| **Expected Result** | - Counter starts at 0<br>- Counter updates as you type<br>- Counter turns orange at 750+ characters<br>- Counter turns red at 900+ characters<br>- Maximum 1000 characters enforced |
| **Actual Result** | |
| **Status** | |

### TC-UI-006: Button States

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-UI-006 |
| **Priority** | Medium |
| **Module** | User Interface |
| **Description** | Verify button hover and active states |
| **Prerequisites** | Page loaded successfully |
| **Test Steps** | 1. Hover over Submit button<br>2. Hover over Reset button<br>3. Click and hold buttons<br>4. Release buttons |
| **Expected Result** | - Submit button elevates on hover<br>- Submit button shows shadow<br>- Reset button changes border color on hover<br>- Buttons depress slightly when clicked<br>- Cursor changes to pointer |
| **Actual Result** | |
| **Status** | |

---

## 4. Form Validation Test Cases

### TC-VAL-001: Required Field Validation - First Name

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-001 |
| **Priority** | High |
| **Module** | Form Validation |
| **Description** | Verify first name field validates correctly |
| **Prerequisites** | Form loaded |
| **Test Steps** | 1. Leave first name empty<br>2. Click Submit<br>3. Enter single character<br>4. Click Submit<br>5. Enter valid name (2+ chars) |
| **Expected Result** | - Empty field shows "First name is required"<br>- Single character shows "First name must be at least 2 characters"<br>- Valid input clears error<br>- Field border turns red on error |
| **Actual Result** | |
| **Status** | |

### TC-VAL-002: Required Field Validation - Last Name

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-002 |
| **Priority** | High |
| **Module** | Form Validation |
| **Description** | Verify last name field validates correctly |
| **Prerequisites** | Form loaded |
| **Test Steps** | 1. Leave last name empty<br>2. Click Submit<br>3. Enter single character<br>4. Click Submit<br>5. Enter valid name |
| **Expected Result** | - Empty field shows error<br>- Single character shows error<br>- 2+ characters accepted<br>- Error styling applied correctly |
| **Actual Result** | |
| **Status** | |

### TC-VAL-003: Email Validation

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-003 |
| **Priority** | High |
| **Module** | Form Validation |
| **Description** | Verify email validation with various formats |
| **Prerequisites** | Form loaded |
| **Test Steps** | 1. Enter "invalid"<br>2. Enter "test@"<br>3. Enter "test@domain"<br>4. Enter "test@domain."<br>5. Enter "test@domain.com" |
| **Expected Result** | - "invalid" rejected<br>- "test@" rejected<br>- "test@domain" rejected<br>- "test@domain." rejected<br>- "test@domain.com" accepted<br>- Proper error messages displayed |
| **Actual Result** | |
| **Status** | |

### TC-VAL-004: Phone Number Validation (Optional)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-004 |
| **Priority** | Medium |
| **Module** | Form Validation |
| **Description** | Verify phone validation when provided |
| **Prerequisites** | Form loaded |
| **Test Steps** | 1. Leave phone empty (should be valid)<br>2. Enter "123"<br>3. Enter "abcdefghij"<br>4. Enter "+1 (555) 123-4567" |
| **Expected Result** | - Empty field accepted (optional)<br>- Less than 10 digits rejected<br>- Letters rejected<br>- Valid format accepted<br>- Various formats accepted (+1, spaces, parentheses) |
| **Actual Result** | |
| **Status** | |

### TC-VAL-005: Category Selection Validation

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-005 |
| **Priority** | High |
| **Module** | Form Validation |
| **Description** | Verify category must be selected |
| **Prerequisites** | Form loaded |
| **Test Steps** | 1. Leave category as default<br>2. Click Submit<br>3. Select a category<br>4. Verify error clears |
| **Expected Result** | - Default "Select a category" shows error<br>- Error message: "Please select a feedback category"<br>- Selecting category clears error |
| **Actual Result** | |
| **Status** | |

### TC-VAL-006: Rating Validation

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-006 |
| **Priority** | High |
| **Module** | Form Validation |
| **Description** | Verify rating must be selected |
| **Prerequisites** | Form loaded |
| **Test Steps** | 1. Do not select any star<br>2. Click Submit<br>3. Select a star<br>4. Verify validation |
| **Expected Result** | - No star selected shows error<br>- Error message: "Please provide a rating"<br>- Selecting star clears error |
| **Actual Result** | |
| **Status** | |

### TC-VAL-007: Subject Validation

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-007 |
| **Priority** | High |
| **Module** | Form Validation |
| **Description** | Verify subject field validation |
| **Prerequisites** | Form loaded |
| **Test Steps** | 1. Leave subject empty<br>2. Enter "test"<br>3. Enter "valid subject" |
| **Expected Result** | - Empty shows "Subject is required"<br>- Less than 5 characters shows error<br>- 5+ characters accepted |
| **Actual Result** | |
| **Status** | |

### TC-VAL-008: Message Validation - Minimum Length

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-008 |
| **Priority** | High |
| **Module** | Form Validation |
| **Description** | Verify message minimum length validation |
| **Prerequisites** | Form loaded |
| **Test Steps** | 1. Leave message empty<br>2. Enter "short"<br>3. Enter "This is a valid message" |
| **Expected Result** | - Empty shows "Feedback message is required"<br>- Less than 10 characters shows error<br>- 10+ characters accepted |
| **Actual Result** | |
| **Status** | |

### TC-VAL-009: Message Validation - Maximum Length

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-009 |
| **Priority** | High |
| **Module** | Form Validation |
| **Description** | Verify message maximum length enforcement |
| **Prerequisites** | Form loaded |
| **Test Steps** | 1. Type exactly 1000 characters<br>2. Try to type more characters<br>3. Verify character count |
| **Expected Result** | - 1000 characters accepted<br>- Cannot type beyond 1000<br>- Character counter shows 1000<br>- Counter turns red |
| **Actual Result** | |
| **Status** | |

### TC-VAL-010: Form Reset Functionality

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-VAL-010 |
| **Priority** | Medium |
| **Module** | Form Validation |
| **Description** | Verify form reset clears all fields and errors |
| **Prerequisites** | Form filled with data and errors |
| **Test Steps** | 1. Fill in all fields<br>2. Create some validation errors<br>3. Click "Clear Form" button<br>4. Verify all fields |
| **Expected Result** | - All text fields cleared<br>- Category reset to default<br>- Stars deselected<br>- Radio buttons reset to default<br>- Checkboxes unchecked<br>- All errors cleared<br>- Character count reset to 0 |
| **Actual Result** | |
| **Status** | |

---

## 5. API Endpoint Test Cases

### TC-API-001: Health Check Endpoint

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-001 |
| **Priority** | High |
| **Module** | API |
| **Description** | Verify health check endpoint returns correct status |
| **Prerequisites** | Server running |
| **Test Steps** | 1. Send GET request to `/api/health`<br>2. Verify response |
| **Expected Result** | - Status code: 200<br>- Response contains: status, timestamp, uptime, environment<br>- status = "OK" |
| **Actual Result** | |
| **Status** | |

### TC-API-002: Submit Valid Feedback

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-002 |
| **Priority** | High |
| **Module** | API |
| **Description** | Verify feedback submission with valid data |
| **Prerequisites** | Server running, database accessible |
| **Test Steps** | 1. Send POST to `/api/feedback` with valid data<br>2. Verify response<br>3. Check database |
| **Expected Result** | - Status code: 201<br>- Response contains feedbackId<br>- success = true<br>- Data inserted in database |
| **Actual Result** | |
| **Status** | |

### TC-API-003: Submit Feedback - Missing Required Fields

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-003 |
| **Priority** | High |
| **Module** | API |
| **Description** | Verify API rejects incomplete data |
| **Prerequisites** | Server running |
| **Test Steps** | 1. Send POST without firstName<br>2. Send POST without email<br>3. Send POST without rating |
| **Expected Result** | - Status code: 400<br>- success = false<br>- Error message describes missing field<br>- No database insert |
| **Actual Result** | |
| **Status** | |

### TC-API-004: Submit Feedback - Invalid Email

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-004 |
| **Priority** | High |
| **Module** | API |
| **Description** | Verify email validation on server side |
| **Prerequisites** | Server running |
| **Test Steps** | 1. Send POST with invalid email format<br>2. Verify response |
| **Expected Result** | - Status code: 400<br>- success = false<br>- Error mentions email validation |
| **Actual Result** | |
| **Status** | |

### TC-API-005: Submit Feedback - Invalid Rating

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-005 |
| **Priority** | High |
| **Module** | API |
| **Description** | Verify rating validation (1-5 only) |
| **Prerequisites** | Server running |
| **Test Steps** | 1. Send POST with rating = 0<br>2. Send POST with rating = 6<br>3. Send POST with rating = "abc" |
| **Expected Result** | - Status code: 400<br>- Error about rating range<br>- Only 1-5 accepted |
| **Actual Result** | |
| **Status** | |

### TC-API-006: Submit Feedback - Invalid Category

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-006 |
| **Priority** | Medium |
| **Module** | API |
| **Description** | Verify category validation |
| **Prerequisites** | Server running |
| **Test Steps** | 1. Send POST with invalid category<br>2. Verify response |
| **Expected Result** | - Status code: 400<br>- Error about valid categories<br>- Only predefined categories accepted |
| **Actual Result** | |
| **Status** | |

### TC-API-007: Get All Feedback

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-007 |
| **Priority** | High |
| **Module** | API |
| **Description** | Verify retrieving all feedback |
| **Prerequisites** | Database has feedback records |
| **Test Steps** | 1. Send GET to `/api/feedback`<br>2. Verify response structure |
| **Expected Result** | - Status code: 200<br>- Array of feedback objects<br>- Pagination info included<br>- Default 10 records per page |
| **Actual Result** | |
| **Status** | |

### TC-API-008: Get Feedback with Pagination

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-008 |
| **Priority** | Medium |
| **Module** | API |
| **Description** | Verify pagination works correctly |
| **Prerequisites** | Database has 20+ records |
| **Test Steps** | 1. GET `/api/feedback?page=1&limit=10`<br>2. GET `/api/feedback?page=2&limit=10`<br>3. Compare results |
| **Expected Result** | - Page 1 shows first 10 records<br>- Page 2 shows next 10 records<br>- No overlap between pages<br>- Pagination metadata correct |
| **Actual Result** | |
| **Status** | |

### TC-API-009: Get Feedback with Filtering

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-009 |
| **Priority** | Medium |
| **Module** | API |
| **Description** | Verify filtering by category and rating |
| **Prerequisites** | Database has varied feedback |
| **Test Steps** | 1. GET with `?category=product_quality`<br>2. GET with `?rating=5`<br>3. GET with both filters |
| **Expected Result** | - Category filter returns only matching records<br>- Rating filter returns only matching records<br>- Combined filters work together<br>- Empty results if no matches |
| **Actual Result** | |
| **Status** | |

### TC-API-010: Get Feedback with Sorting

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-010 |
| **Priority** | Medium |
| **Module** | API |
| **Description** | Verify sorting functionality |
| **Prerequisites** | Database has multiple records |
| **Test Steps** | 1. GET with `?sortBy=Rating&order=DESC`<br>2. GET with `?sortBy=SubmittedAt&order=ASC`<br>3. Verify order |
| **Expected Result** | - Records sorted correctly<br>- DESC shows highest first<br>- ASC shows lowest first<br>- Default sort by SubmittedAt DESC |
| **Actual Result** | |
| **Status** | |

### TC-API-011: Get Specific Feedback by ID

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-011 |
| **Priority** | High |
| **Module** | API |
| **Description** | Verify retrieving specific feedback |
| **Prerequisites** | Know existing feedback ID |
| **Test Steps** | 1. GET `/api/feedback/123` (valid ID)<br>2. Verify response |
| **Expected Result** | - Status code: 200<br>- Returns complete feedback object<br>- Includes all fields including IP and UserAgent |
| **Actual Result** | |
| **Status** | |

### TC-API-012: Get Non-existent Feedback

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-012 |
| **Priority** | Medium |
| **Module** | API |
| **Description** | Verify 404 for non-existent feedback |
| **Prerequisites** | Server running |
| **Test Steps** | 1. GET `/api/feedback/99999` (invalid ID)<br>2. Verify response |
| **Expected Result** | - Status code: 404<br>- success = false<br>- Message: "Feedback not found" |
| **Actual Result** | |
| **Status** | |

### TC-API-013: Get Feedback Statistics

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-API-013 |
| **Priority** | Medium |
| **Module** | API |
| **Description** | Verify statistics endpoint |
| **Prerequisites** | Database has records |
| **Test Steps** | 1. GET `/api/feedback/stats/summary`<br>2. Verify calculations |
| **Expected Result** | - Status code: 200<br>- Returns: TotalFeedback, AverageRating, PositiveFeedback, NegativeFeedback, FollowUpRequests<br>- Calculations are accurate |
| **Actual Result** | |
| **Status** | |

---

## 6. Database Test Cases

### TC-DB-001: Database Connection

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-DB-001 |
| **Priority** | Critical |
| **Module** | Database |
| **Description** | Verify database connection establishes successfully |
| **Prerequisites** | SQL Server running, credentials correct |
| **Test Steps** | 1. Start server<br>2. Check console logs<br>3. Verify connection message |
| **Expected Result** | - Console shows "Database connection successful"<br>- No error messages<br>- Connection pool created |
| **Actual Result** | |
| **Status** | |

### TC-DB-002: Insert Feedback Record

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-DB-002 |
| **Priority** | High |
| **Module** | Database |
| **Description** | Verify feedback inserts correctly |
| **Prerequisites** | Database connected |
| **Test Steps** | 1. Submit feedback via API<br>2. Query database<br>3. Verify data |
| **Expected Result** | - Record inserted with auto-incremented ID<br>- All fields populated correctly<br>- Timestamps set automatically<br>- Status defaults to "New" |
| **Actual Result** | |
| **Status** | |

### TC-DB-003: Verify Constraints

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-DB-003 |
| **Priority** | High |
| **Module** | Database |
| **Description** | Verify database constraints work |
| **Prerequisites** | Database connected |
| **Test Steps** | 1. Try inserting rating = 6<br>2. Try invalid category<br>3. Try invalid status |
| **Expected Result** | - Rating constraint prevents invalid values<br>- Category constraint enforced<br>- Status constraint enforced<br>- Recommend constraint enforced |
| **Actual Result** | |
| **Status** | |

### TC-DB-004: Auto-timestamp Updates

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-DB-004 |
| **Priority** | Medium |
| **Module** | Database |
| **Description** | Verify UpdatedAt timestamp trigger |
| **Prerequisites** | Record exists in database |
| **Test Steps** | 1. Note current UpdatedAt<br>2. Update record status<br>3. Check UpdatedAt again |
| **Expected Result** | - UpdatedAt updates automatically<br>- CreatedAt remains unchanged<br>- Trigger fires on every update |
| **Actual Result** | |
| **Status** | |

### TC-DB-005: Database Indexes

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-DB-005 |
| **Priority** | Low |
| **Module** | Database |
| **Description** | Verify indexes exist for performance |
| **Prerequisites** | Database created |
| **Test Steps** | 1. Query sys.indexes<br>2. Verify index existence |
| **Expected Result** | - Indexes on: Email, Category, Rating, SubmittedAt, Status<br>- Composite index exists<br>- Indexes improve query performance |
| **Actual Result** | |
| **Status** | |

### TC-DB-006: Database Views

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-DB-006 |
| **Priority** | Medium |
| **Module** | Database |
| **Description** | Verify all views return correct data |
| **Prerequisites** | Database has sample data |
| **Test Steps** | 1. SELECT from each view<br>2. Verify data accuracy |
| **Expected Result** | - vw_FeedbackStatistics returns correct aggregates<br>- vw_FeedbackByCategory groups correctly<br>- vw_RecentFeedback filters last 30 days<br>- vw_FollowUpRequired shows only pending<br>- All views execute without errors |
| **Actual Result** | |
| **Status** | |

### TC-DB-007: Stored Procedures

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-DB-007 |
| **Priority** | Medium |
| **Module** | Database |
| **Description** | Verify stored procedures execute correctly |
| **Prerequisites** | Database created |
| **Test Steps** | 1. Execute sp_InsertFeedback<br>2. Execute sp_UpdateFeedbackStatus<br>3. Execute sp_GetFeedbackAnalytics<br>4. Execute sp_SearchFeedback |
| **Expected Result** | - All procedures execute without errors<br>- Return correct result sets<br>- Parameters handled properly<br>- Error handling works |
| **Actual Result** | |
| **Status** | |

---

## 7. Integration Test Cases

### TC-INT-001: End-to-End Feedback Submission

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-INT-001 |
| **Priority** | Critical |
| **Module** | Integration |
| **Description** | Complete feedback submission flow |
| **Prerequisites** | System fully running |
| **Test Steps** | 1. Load page<br>2. Fill all fields<br>3. Submit form<br>4. Verify success message<br>5. Check database |
| **Expected Result** | - Form validates<br>- API accepts data<br>- Database stores record<br>- Success message displays<br>- Form can be reset for new submission |
| **Actual Result** | |
| **Status** | |

### TC-INT-002: Error Handling Flow

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-INT-002 |
| **Priority** | High |
| **Module** | Integration |
| **Description** | Verify error handling across layers |
| **Prerequisites** | System running |
| **Test Steps** | 1. Stop database<br>2. Try submitting feedback<br>3. Observe error handling<br>4. Restart database<br>5. Retry submission |
| **Expected Result** | - Frontend shows connection error<br>- User-friendly error message<br>- No sensitive data exposed<br>- After restart, submission works |
| **Actual Result** | |
| **Status** | |

### TC-INT-003: Concurrent Submissions

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-INT-003 |
| **Priority** | Medium |
| **Module** | Integration |
| **Description** | Verify system handles multiple simultaneous submissions |
| **Prerequisites** | System running |
| **Test Steps** | 1. Open 5 browser tabs<br>2. Fill forms in each<br>3. Submit all simultaneously<br>4. Check database |
| **Expected Result** | - All submissions accepted<br>- No data loss<br>- All IDs unique<br>- No race conditions<br>- Database integrity maintained |
| **Actual Result** | |
| **Status** | |

---

## 8. Security Test Cases

### TC-SEC-001: SQL Injection Prevention

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-SEC-001 |
| **Priority** | Critical |
| **Module** | Security |
| **Description** | Verify SQL injection attacks are prevented |
| **Prerequisites** | System running |
| **Test Steps** | 1. Enter `'; DROP TABLE CustomerFeedback; --` in name field<br>2. Enter SQL commands in message<br>3. Submit and verify |
| **Expected Result** | - SQL not executed<br>- Input treated as text<br>- Parameterized queries protect database<br>- No tables dropped |
| **Actual Result** | |
| **Status** | |

### TC-SEC-002: XSS Prevention

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-SEC-002 |
| **Priority** | Critical |
| **Module** | Security |
| **Description** | Verify XSS attacks are prevented |
| **Prerequisites** | System running |
| **Test Steps** | 1. Enter `<script>alert('XSS')</script>` in fields<br>2. Submit feedback<br>3. Retrieve and display feedback<br>4. Verify script doesn't execute |
| **Expected Result** | - Script tags escaped<br>- No JavaScript execution<br>- Content displayed as text<br>- No popup alerts |
| **Actual Result** | |
| **Status** | |

### TC-SEC-003: Input Sanitization

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-SEC-003 |
| **Priority** | High |
| **Module** | Security |
| **Description** | Verify harmful input is sanitized |
| **Prerequisites** | System running |
| **Test Steps** | 1. Enter HTML tags in message<br>2. Enter special characters<br>3. Submit and verify storage |
| **Expected Result** | - HTML tags handled safely<br>- Special characters allowed but escaped<br>- No code execution |
| **Actual Result** | |
| **Status** | |

### TC-SEC-004: HTTPS Enforcement (Production)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-SEC-004 |
| **Priority** | High |
| **Module** | Security |
| **Description** | Verify HTTPS is enforced in production |
| **Prerequisites** | Production environment |
| **Test Steps** | 1. Access via HTTP<br>2. Verify redirect to HTTPS<br>3. Check certificate |
| **Expected Result** | - HTTP redirects to HTTPS<br>- Valid SSL certificate<br>- Secure connection established |
| **Actual Result** | |
| **Status** | |

### TC-SEC-005: Environment Variables Protection

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-SEC-005 |
| **Priority** | High |
| **Module** | Security |
| **Description** | Verify sensitive data not exposed |
| **Prerequisites** | System running |
| **Test Steps** | 1. Check error messages<br>2. View API responses<br>3. Inspect console logs |
| **Expected Result** | - Database credentials not visible<br>- .env file not served<br>- Error messages don't reveal sensitive info |
| **Actual Result** | |
| **Status** | |

---

## 9. Performance Test Cases

### TC-PERF-001: Page Load Time

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-PERF-001 |
| **Priority** | Medium |
| **Module** | Performance |
| **Description** | Verify page loads within acceptable time |
| **Prerequisites** | System running |
| **Test Steps** | 1. Clear browser cache<br>2. Load page<br>3. Measure load time |
| **Expected Result** | - Page loads in < 2 seconds<br>- CSS and JS load properly<br>- No blocking resources |
| **Actual Result** | |
| **Status** | |

### TC-PERF-002: Form Submission Response Time

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-PERF-002 |
| **Priority** | Medium |
| **Module** | Performance |
| **Description** | Verify quick response to submission |
| **Prerequisites** | System running |
| **Test Steps** | 1. Fill form<br>2. Submit<br>3. Measure time to response |
| **Expected Result** | - Response in < 1 second<br>- Success message appears quickly<br>- No perceivable delay |
| **Actual Result** | |
| **Status** | |

### TC-PERF-003: Database Query Performance

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-PERF-003 |
| **Priority** | Medium |
| **Module** | Performance |
| **Description** | Verify queries execute efficiently |
| **Prerequisites** | Database has 1000+ records |
| **Test Steps** | 1. Query all feedback<br>2. Check execution plan<br>3. Measure query time |
| **Expected Result** | - Queries use indexes<br>- Execution time < 100ms<br>- Pagination limits result set |
| **Actual Result** | |
| **Status** | |

### TC-PERF-004: Concurrent User Load

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-PERF-004 |
| **Priority** | Low |
| **Module** | Performance |
| **Description** | Verify system handles multiple users |
| **Prerequisites** | Load testing tool available |
| **Test Steps** | 1. Simulate 50 concurrent users<br>2. All submit feedback<br>3. Monitor server resources |
| **Expected Result** | - All submissions succeed<br>- Response time acceptable<br>- No server crashes<br>- Database handles load |
| **Actual Result** | |
| **Status** | |

---

## 10. Browser Compatibility Test Cases

### TC-BROWSER-001: Chrome Compatibility

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-BROWSER-001 |
| **Priority** | High |
| **Module** | Compatibility |
| **Description** | Verify full functionality in Chrome |
| **Prerequisites** | Chrome 100+ installed |
| **Test Steps** | 1. Open in Chrome<br>2. Test all features<br>3. Verify display |
| **Expected Result** | - All features work<br>- Styling correct<br>- Animations smooth<br>- No console errors |
| **Actual Result** | |
| **Status** | |

### TC-BROWSER-002: Firefox Compatibility

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-BROWSER-002 |
| **Priority** | High |
| **Module** | Compatibility |
| **Description** | Verify full functionality in Firefox |
| **Prerequisites** | Firefox 95+ installed |
| **Test Steps** | 1. Open in Firefox<br>2. Test all features<br>3. Verify display |
| **Expected Result** | - All features work<br>- Styling matches Chrome<br>- Form submission works<br>- No errors |
| **Actual Result** | |
| **Status** | |

### TC-BROWSER-003: Safari Compatibility

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-BROWSER-003 |
| **Priority** | Medium |
| **Module** | Compatibility |
| **Description** | Verify functionality in Safari |
| **Prerequisites** | Safari 15+ (macOS/iOS) |
| **Test Steps** | 1. Open in Safari<br>2. Test features<br>3. Check for webkit issues |
| **Expected Result** | - Works on Safari<br>- Gradients display correctly<br>- Form validation works<br>- No webkit-specific bugs |
| **Actual Result** | |
| **Status** | |

### TC-BROWSER-004: Edge Compatibility

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-BROWSER-004 |
| **Priority** | Medium |
| **Module** | Compatibility |
| **Description** | Verify functionality in Edge |
| **Prerequisites** | Edge 100+ installed |
| **Test Steps** | 1. Open in Edge<br>2. Test all features<br>3. Verify display |
| **Expected Result** | - Chromium-based Edge works like Chrome<br>- All features functional<br>- No Edge-specific issues |
| **Actual Result** | |
| **Status** | |

---

## 11. Responsive Design Test Cases

### TC-RESP-001: Desktop Display (1920x1080)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-RESP-001 |
| **Priority** | High |
| **Module** | Responsive Design |
| **Description** | Verify display on large desktop screens |
| **Prerequisites** | Browser at 1920x1080 |
| **Test Steps** | 1. Set resolution<br>2. Load page<br>3. Verify layout |
| **Expected Result** | - Form centered<br>- Max width 800px<br>- Proper spacing<br>- Two-column layout for name fields |
| **Actual Result** | |
| **Status** | |

### TC-RESP-002: Laptop Display (1366x768)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-RESP-002 |
| **Priority** | High |
| **Module** | Responsive Design |
| **Description** | Verify display on laptop screens |
| **Prerequisites** | Browser at 1366x768 |
| **Test Steps** | 1. Set resolution<br>2. Load page<br>3. Verify layout |
| **Expected Result** | - Form fits screen<br>- No horizontal scroll<br>- Layout adapts<br>- Readable text |
| **Actual Result** | |
| **Status** | |

### TC-RESP-003: Tablet Display (768x1024)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-RESP-003 |
| **Priority** | High |
| **Module** | Responsive Design |
| **Description** | Verify tablet responsiveness |
| **Prerequisites** | Browser at 768x1024 or iPad |
| **Test Steps** | 1. Set tablet view<br>2. Test portrait and landscape<br>3. Verify form |
| **Expected Result** | - Form fields stack vertically<br>- Touch-friendly controls<br>- No overlapping elements<br>- Readable fonts |
| **Actual Result** | |
| **Status** | |

### TC-RESP-004: Mobile Display (375x667)

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-RESP-004 |
| **Priority** | Critical |
| **Module** | Responsive Design |
| **Description** | Verify mobile responsiveness |
| **Prerequisites** | Browser at 375x667 or iPhone |
| **Test Steps** | 1. Set mobile view<br>2. Test form interaction<br>3. Verify usability |
| **Expected Result** | - Single column layout<br>- Touch-friendly buttons<br>- Stars easily clickable<br>- No horizontal scroll<br>- Keyboard doesn't break layout |
| **Actual Result** | |
| **Status** | |

### TC-RESP-005: Orientation Changes

| Field | Details |
|-------|---------|
| **Test Case ID** | TC-RESP-005 |
| **Priority** | Medium |
| **Module** | Responsive Design |
| **Description** | Verify layout adapts to orientation changes |
| **Prerequisites** | Mobile device or emulator |
| **Test Steps** | 1. Load in portrait<br>2. Fill form partially<br>3. Rotate to landscape<br>4. Verify data preserved |
| **Expected Result** | - Layout adapts smoothly<br>- Form data retained<br>- No layout breaks<br>- Usable in both orientations |
| **Actual Result** | |
| **Status** | |

---

## Test Summary Template

### Overall Test Results

| Category | Total Tests | Passed | Failed | Pass Rate |
|----------|-------------|--------|--------|-----------|
| Frontend UI | 6 | | | |
| Form Validation | 10 | | | |
| API Endpoints | 13 | | | |
| Database | 7 | | | |
| Integration | 3 | | | |
| Security | 5 | | | |
| Performance | 4 | | | |
| Browser Compatibility | 4 | | | |
| Responsive Design | 5 | | | |
| **TOTAL** | **57** | | | |

---

## Notes for Testers

1. **Test Environment**: Ensure clean environment before testing
2. **Data**: Use varied test data to catch edge cases
3. **Documentation**: Document any bugs found with screenshots
4. **Regression**: Retest after bug fixes
5. **Automation**: Consider automating repetitive tests
6. **Performance**: Use browser dev tools for performance metrics
7. **Accessibility**: Test with screen readers and keyboard navigation
8. **Security**: Never use real credentials in test environment

---

## Bug Report Template

When logging bugs, include:
- Bug ID
- Test Case ID
- Severity (Critical/High/Medium/Low)
- Description
- Steps to Reproduce
- Expected Result
- Actual Result
- Screenshots/Logs
- Environment Details
- Assigned To
- Status

---

**Document Version:** 1.0
**Last Updated:** November 27, 2025
**Prepared By:** Development Team
