# Basic Tab Functional Test Plan

## Application Overview

Comprehensive functional testing of all interactive elements on the Basic tab of the Test Automation Practice Hub, covering text inputs, password fields, dropdowns, radio buttons, checkboxes, buttons, links, and form actions. Tests include happy path scenarios, edge cases, validation, and error handling.

## Test Scenarios

### 1. Basic Elements Functional Testing

**Seed:** `tests/seed.spec.ts`

#### 1.1. Text Input Fields Validation

**File:** `tests/basic-text-inputs.spec.ts`

**Steps:**
  1. Fill 'First Name' textbox with 'John'
    - expect: First Name field accepts alphanumeric characters
    - expect: Field displays entered text
  2. Fill 'Last Name' textbox with 'Doe' and press Tab
    - expect: Last Name field accepts input
    - expect: Tab navigation works
  3. Fill 'Email' textbox with 'john.doe@example.com'
    - expect: Email field accepts valid email format
    - expect: Field is focused after tab
  4. Fill 'Bio (Multi-line)' textbox with multi-line text 'Line 1\nLine 2'
    - expect: Bio field accepts multi-line text
    - expect: Text wraps properly
  5. Leave all text fields empty and attempt to proceed
    - expect: Fields handle empty inputs gracefully
  6. Fill fields with special characters and numbers
    - expect: Fields reject invalid characters if any validation exists

#### 1.2. Password Fields and Strength Indicator

**File:** `tests/basic-passwords.spec.ts`

**Steps:**
  1. Fill 'Password' with 'StrongPass123' and 'Confirm Password' with 'StrongPass123'
    - expect: Password field masks input
    - expect: Confirm Password field matches
  2. Fill password with strong criteria (uppercase, lowercase, number, special char)
    - expect: Password strength indicator shows '🟢 Strong'
  3. Fill password with medium strength (e.g., 'Password1')
    - expect: Strength shows '🟡 Medium'
  4. Fill password with weak criteria (e.g., 'pass')
    - expect: Strength shows '🔴 Weak'
  5. Fill 'Confirm Password' with different value and check for validation
    - expect: Error message appears for mismatch

#### 1.3. Dropdown Selects Functionality

**File:** `tests/basic-dropdowns.spec.ts`

**Steps:**
  1. Click 'Country' dropdown and select 'United States'
    - expect: Country dropdown shows options
    - expect: Selected country is displayed
  2. Verify dropdown closes and selection is retained
    - expect: Dropdown closes after selection
  3. Type 'play' in 'Searchable Select' and select 'Playwright'
    - expect: Searchable select filters options
  4. Type invalid text and check no options or error
    - expect: No selection if invalid search
  5. Test single selection behavior
    - expect: Multi-select if applicable, but appears single

#### 1.4. Radio Buttons Selection

**File:** `tests/basic-radio-buttons.spec.ts`

**Steps:**
  1. Select 'Male' radio button
    - expect: Only one radio button can be selected at a time
  2. Select 'Female' and verify 'Male' is unchecked
    - expect: Previous selection is deselected
  3. Select each option: Male, Female, Other, Prefer not to say
    - expect: All options selectable
  4. Refresh or navigate and check if selection resets (assuming it does)
    - expect: Selection persists

#### 1.5. Checkboxes and Switches

**File:** `tests/basic-checkboxes.spec.ts`

**Steps:**
  1. Check 'Subscribe to newsletter' and then uncheck it
    - expect: Checkbox can be checked and unchecked
  2. Check 'I agree to Terms & Conditions' and verify 'Submit Form' becomes enabled
    - expect: Terms checkbox enables Submit button
  3. Uncheck terms and verify Submit is disabled
    - expect: Unchecking terms disables Submit
  4. Toggle 'Enable notifications' switch on and off
    - expect: Switch toggles notifications
  5. Check both newsletter and terms simultaneously
    - expect: Multiple checkboxes can be selected independently

#### 1.6. Button Interactions

**File:** `tests/basic-buttons.spec.ts`

**Steps:**
  1. Click 'Enabled Button'
    - expect: Enabled Button performs action (e.g., alert or change)
  2. Click 'Secondary Button'
    - expect: Secondary Button works
  3. Click 'Outline Button'
    - expect: Outline Button functions
  4. Click 'Destructive Button'
    - expect: Destructive Button (possibly delete or confirm)
  5. Attempt to click 'Disabled Button'
    - expect: Disabled Button does not respond
  6. Click 'Ghost Button'
    - expect: Ghost Button is clickable
  7. Click 'Dynamic Enable/Disable' and check if it enables/disables itself or another element
    - expect: Dynamic Enable/Disable toggles state

#### 1.7. Links Navigation

**File:** `tests/basic-links.spec.ts`

**Steps:**
  1. Click 'Go to Basic Elements' link
    - expect: Internal link scrolls to section
  2. Click 'Jump to Advanced Features'
    - expect: Another internal link jumps
  3. Click 'Scroll to Top' button
    - expect: Scroll to Top works
  4. Click 'Selenium Documentation ↗'
    - expect: External link opens in new tab
  5. Click 'Playwright Documentation ↗' and 'Cypress Documentation ↗'
    - expect: Other external links work
  6. First select country, then click the dynamic link
    - expect: Dynamic link 'Select country first' becomes active after selecting country
  7. Fill email, then click the dynamic link
    - expect: Dynamic link 'Enter email first' activates after filling email

#### 1.8. Form Submission and Reset

**File:** `tests/basic-form-actions.spec.ts`

**Steps:**
  1. Fill some fields, then click 'Reset Form'
    - expect: Reset Form clears all fields
  2. Verify 'Submit Form' is disabled
    - expect: Submit Form is disabled initially
  3. Check terms, verify Submit enabled
    - expect: Submit enables after checking terms
  4. Click 'Submit Form' with valid data
    - expect: Submit performs action (e.g., success message)
  5. Try submit with empty required fields
    - expect: Submit fails with invalid data if validation
  6. Submit with mismatched passwords or unchecked terms
    - expect: Form handles edge cases
