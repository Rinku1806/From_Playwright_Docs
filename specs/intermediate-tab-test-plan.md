# Intermediate Tab Comprehensive Test Plan

## Application Overview

The Intermediate tab of the Test Automation Practice Hub contains advanced interactive elements including drag & drop, sliders, file operations, date pickers, mouse interactions, auto-suggestions, progress indicators, and copy/paste detection. This test plan provides comprehensive coverage of all functionality including happy paths, edge cases, and error scenarios.

## Test Scenarios

### 1. Drag & Drop Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Drag single item from source to drop zone

**File:** `tests/intermediate-tab/drag-drop.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab should be visible and clickable
  2. Click on the Intermediate tab to navigate to it
    - expect: The Intermediate tab should become active
    - expect: The tab content should display the Drag & Drop section
  3. Drag Item 1 from the Source Items section to the Drop Zone
    - expect: Item 1 should visually move to the Drop Zone
    - expect: A confirmation message should appear indicating successful drop
    - expect: Item 1 should no longer be in the Source Items section

#### 1.2. Drag multiple items sequentially

**File:** `tests/intermediate-tab/drag-drop.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Drag Item 1 to the Drop Zone
    - expect: Item 1 should be in the Drop Zone
  3. Drag Item 2 to the Drop Zone
    - expect: Item 2 should be in the Drop Zone
    - expect: Item 1 should still remain in the Drop Zone
    - expect: Both items should be visible in the Drop Zone
  4. Drag Item 3 and Item 4 to the Drop Zone
    - expect: All four items should be in the Drop Zone

#### 1.3. Drag item to wrong location

**File:** `tests/intermediate-tab/drag-drop.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Drag Item 1 to a non-drop zone area (e.g., Sliders section)
    - expect: Item 1 should remain in the Source Items
    - expect: No item should be dropped outside the designated drop zone

#### 1.4. Clear dropped items and reset

**File:** `tests/intermediate-tab/drag-drop.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Drag Item 1 to the Drop Zone
    - expect: Item 1 should be in the Drop Zone
  3. Look for a clear or reset button and click it (if available)
    - expect: The Drop Zone should be cleared
    - expect: Item 1 should return to Source Items
    - expect: Item count in Source Items should be restored

### 2. Slider Interactions

**Seed:** `tests/seed.spec.ts`

#### 2.1. Adjust basic value slider

**File:** `tests/intermediate-tab/sliders.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: The value slider should display initial value of 50%
  2. Click and drag the value slider to set it to 25%
    - expect: The slider should move to the left
    - expect: The value display should update to show 25%
  3. Drag the slider to 75%
    - expect: The slider should move to the right
    - expect: The value display should update to show 75%

#### 2.2. Adjust volume control slider

**File:** `tests/intermediate-tab/sliders.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Drag the Volume Control slider to minimum (0%)
    - expect: The slider should move to the leftmost position
  3. Drag the slider to maximum (100%)
    - expect: The slider should move to the rightmost position
  4. Drag the slider to middle position (50%)
    - expect: The slider should be positioned at the center

#### 2.3. Work with range slider

**File:** `tests/intermediate-tab/sliders.spec.ts`

**Steps:**
  1. -
    - expect: The Range Slider (20-80) should be visible
  2. Drag the minimum slider handle to the left to a lower value
    - expect: The minimum value should decrease
    - expect: The range should expand on the left side
  3. Drag the maximum slider handle to the right to a higher value
    - expect: The maximum value should increase
    - expect: The range should expand on the right side
  4. Attempt to drag the minimum slider beyond the maximum value
    - expect: The minimum slider should stop at or before the maximum value
    - expect: Invalid range should not be allowed

#### 2.4. Verify slider boundary conditions

**File:** `tests/intermediate-tab/sliders.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Drag the value slider all the way to the left (minimum)
    - expect: The value should be 0% or the minimum allowed value
  3. Drag the slider all the way to the right (maximum)
    - expect: The value should be 100% or the maximum allowed value

### 3. File Operations

**Seed:** `tests/seed.spec.ts`

#### 3.1. File upload with valid file

**File:** `tests/intermediate-tab/file-operations.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: The 'Choose File' button should be visible
  2. Click the 'Choose File' button to open file chooser
    - expect: A file chooser dialog should open
  3. Select a valid text or PDF file from the system
    - expect: The file should be selected
    - expect: The file name should display in the upload area or near the button

#### 3.2. File upload validation

**File:** `tests/intermediate-tab/file-operations.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Click the 'Choose File' button and attempt to select a file
    - expect: The button should support multiple file types or show acceptable formats
  3. Cancel the file chooser dialog
    - expect: The dialog should close
    - expect: No file should be uploaded

#### 3.3. Download sample file

**File:** `tests/intermediate-tab/file-operations.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: The 'Download Sample' button should be visible
  2. Click the 'Download Sample' button
    - expect: A file download should be triggered
    - expect: The browser should show a download notification

### 4. Date Picker Functionality

**Seed:** `tests/seed.spec.ts`

#### 4.1. Open date picker and select a date

**File:** `tests/intermediate-tab/date-pickers.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: The 'Pick a date' button should be visible
  2. Click the 'Pick a date' button
    - expect: A calendar picker should open
    - expect: The current month and year should be displayed
    - expect: Today's date should be highlighted
  3. Click on a date in the calendar (e.g., March 10)
    - expect: The date should be selected (visually highlighted)
    - expect: The calendar should close or update
    - expect: The selected date should appear in the date field

#### 4.2. Navigate between months in date picker

**File:** `tests/intermediate-tab/date-pickers.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Click the 'Pick a date' button to open the calendar
    - expect: The calendar should open showing current month (March 2026)
  3. Click the next month arrow button
    - expect: The calendar should update to show April 2026
  4. Click the previous month arrow button twice
    - expect: The calendar should navigate back to February 2026
  5. Select a date from February
    - expect: The date should be selected
    - expect: The date field should display the selected date

#### 4.3. Enter date manually in date input field

**File:** `tests/intermediate-tab/date-pickers.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: A Date Input field should be visible
  2. Click on the Date Input field and enter a date (e.g., 03/20/2026)
    - expect: The date should be accepted
    - expect: The field should display the entered date
    - expect: The field should maintain the date format
  3. Enter an invalid date format (e.g., 'invalid')
    - expect: The field should either reject the input or show an error message

#### 4.4. Enter datetime in DateTime input field

**File:** `tests/intermediate-tab/date-pickers.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: A DateTime Input field should be visible
  2. Click on the DateTime Input field and enter a date and time (e.g., 03/20/2026 14:30)
    - expect: The datetime should be accepted
    - expect: The field should display the entered datetime
    - expect: Time component should be properly formatted

#### 4.5. Select today's date from calendar

**File:** `tests/intermediate-tab/date-pickers.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Click the 'Pick a date' button
    - expect: The calendar should open
    - expect: Today's date (17) should be highlighted as active/current day
  3. Click on today's date
    - expect: Today's date should be selected
    - expect: The date field should show today's date

### 5. Mouse Interactions - Hover Effects

**Seed:** `tests/seed.spec.ts`

#### 5.1. Hover over items to trigger hover state

**File:** `tests/intermediate-tab/mouse-interactions.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: Hover Items section should be visible
  2. Hover mouse over Hover Item 1
    - expect: Hover Item 1 should change its appearance or display a hover effect
    - expect: Additional text or icon should appear (e.g., 'Hovered!')
  3. Move mouse away from Hover Item 1
    - expect: The hover effect should disappear
    - expect: The item should return to its original state

#### 5.2. Verify hover effect on multiple items

**File:** `tests/intermediate-tab/mouse-interactions.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Hover over Hover Item 2
    - expect: Item 2 should display hover effect
  3. Move away and hover over Hover Item 3
    - expect: Item 3 should display hover effect
    - expect: Item 2's hover effect should no longer be visible

#### 5.3. Verify right-click context menu

**File:** `tests/intermediate-tab/mouse-interactions.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: Context Menu Items should be visible
  2. Right-click on 'Right-click Item 1 (Right-click me)'
    - expect: A context menu should appear
    - expect: The menu should contain custom options relevant to the item
  3. Click away to close the context menu
    - expect: The context menu should disappear

#### 5.4. Right-click on second context menu item

**File:** `tests/intermediate-tab/mouse-interactions.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Right-click on 'Right-click Item 2 (Right-click me)'
    - expect: A context menu should appear for Item 2
    - expect: The context menu should contain applicable options

### 6. Auto-suggestions (Autocomplete)

**Seed:** `tests/seed.spec.ts`

#### 6.1. Search and select from suggestions

**File:** `tests/intermediate-tab/auto-suggestions.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: The 'Type to search...' input field should be visible
  2. Click in the search box and type 'Play'
    - expect: The input field should accept the text
    - expect: A dropdown suggestion list should appear
    - expect: Suggestions matching 'Play' should be visible (e.g., 'Playwright')
  3. Click on 'Playwright' from the suggestions
    - expect: 'Playwright' should be selected and filled in the field
    - expect: The suggestions dropdown should close
    - expect: A confirmation message should show 'Selected: Playwright'

#### 6.2. Type multiple characters and see filtered suggestions

**File:** `tests/intermediate-tab/auto-suggestions.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Clear the search field and type 'Sel'
    - expect: Suggestions matching 'Sel' should appear (e.g., 'Selenium')
    - expect: Irrelevant suggestions should not appear
  3. Click on 'Selenium' to select it
    - expect: 'Selenium' should be selected
    - expect: Selected message should update appropriately

#### 6.3. Search with no matching results

**File:** `tests/intermediate-tab/auto-suggestions.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Type a search term that has no matches (e.g., 'xyz123')
    - expect: No suggestions should appear
    - expect: A 'No results' or empty state message might be shown

#### 6.4. Clear search field and verify suggestions disappear

**File:** `tests/intermediate-tab/auto-suggestions.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded with search field
  2. Type 'Play' in the search field
    - expect: Suggestions should appear
  3. Clear the entire search field
    - expect: The suggestions dropdown should close or disappear
    - expect: The field should be empty

### 7. Progress & Loading States

**Seed:** `tests/seed.spec.ts`

#### 7.1. Verify linear progress bar display

**File:** `tests/intermediate-tab/progress-loading.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: A Linear Progress bar should be visible
    - expect: It should show 75% Complete
  2. Observe the linear progress bar
    - expect: The progress bar should visually fill to approximately 75% of the width
    - expect: The percentage text should display '75% Complete'

#### 7.2. Verify dynamic progress bar

**File:** `tests/intermediate-tab/progress-loading.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: A Dynamic Progress bar should be visible with 50% Complete
  2. Observe the dynamic progress bar for any animation or changes
    - expect: The progress bar should display and maintain a smooth visual state
    - expect: The percentage should show 50% or update dynamically if the component animates

#### 7.3. Verify loading button state

**File:** `tests/intermediate-tab/progress-loading.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: A 'Loading...' button should be visible and disabled
  2. Attempt to click the Loading button
    - expect: The button should not be clickable (disabled state)
    - expect: Button styling should indicate it is disabled

### 8. Copy/Paste Detection

**Seed:** `tests/seed.spec.ts`

#### 8.1. Copy text and verify copy action

**File:** `tests/intermediate-tab/copy-paste.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
    - expect: A 'Test automation sample text' should be visible and clickable
  2. Click on the copy text
    - expect: The text should be copied to clipboard
    - expect: A visual feedback (e.g., 'Copied!' message or icon change) should appear

#### 8.2. Paste copied text into paste area

**File:** `tests/intermediate-tab/copy-paste.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Click the copy text to copy it to clipboard
    - expect: The text should be copied
  3. Click in the 'Paste content here...' textbox
    - expect: The text field should be focused
  4. Paste the content (Ctrl+V or Cmd+V)
    - expect: The copied text 'Test automation sample text' should appear in the paste field
    - expect: The field should detect the paste action

#### 8.3. Verify paste detection works correctly

**File:** `tests/intermediate-tab/copy-paste.spec.ts`

**Steps:**
  1. -
    - expect: The Intermediate tab content should be loaded
  2. Click in the paste field and manually type some text
    - expect: The text should appear in the field
    - expect: Normal typing should be supported
  3. Select all text and delete it
    - expect: The field should be cleared
  4. Paste content (if clipboard has data)
    - expect: The pasted content should appear
    - expect: The system should differentiate between typed and pasted content if applicable
