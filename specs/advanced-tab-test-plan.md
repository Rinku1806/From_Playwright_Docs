# Advanced Tab Comprehensive Test Plan

## Application Overview

The Advanced tab of the Test Automation Practice Hub contains complex interactive elements including iFrames, Shadow DOM, multiple windows/tabs, browser dialogs (alerts, confirms, prompts), custom modals, dynamic IDs, toast notifications, charts, canvas drawing, infinite scroll, and hidden elements. This test plan provides comprehensive coverage of all these advanced features including happy paths, edge cases, and error scenarios.

## Test Scenarios

### 1. iFrames and Embedded Content

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify iFrame elements are present and accessible

**File:** `tests/advanced-tab/iframes.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The iFrames section should be visible
  2. Inspect the page to identify iframe elements
    - expect: At least 2 iFrame elements should be detected
    - expect: Each iframe should have a valid src attribute

#### 1.2. Access content within iFrame

**File:** `tests/advanced-tab/iframes.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab content should be loaded
    - expect: iFrame section should be visible
  2. Interact with elements within the iframe (if applicable)
    - expect: The iframe should load and display embedded content
    - expect: Content should be accessible without throwing errors

#### 1.3. Handle cross-origin iFrame restrictions

**File:** `tests/advanced-tab/iframes.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Verify that cross-origin iframes don't cause page errors or crashes
    - expect: The iframe should load successfully
    - expect: Page should handle cross-origin policies gracefully

### 2. Shadow DOM Interactions

**Seed:** `tests/seed.spec.ts`

#### 2.1. Create and verify Shadow DOM element

**File:** `tests/advanced-tab/shadow-dom.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Create Shadow DOM' button should be visible and clickable
  2. Click the 'Create Shadow DOM' button
    - expect: A new Shadow DOM element should be created
    - expect: The element should be visible on the page
  3. Verify that the Shadow DOM is properly encapsulated
    - expect: The Shadow DOM content should not be directly accessible via standard DOM selectors
    - expect: JavaScript console should not show errors

#### 2.2. Access Shadow DOM content using pierceHandler

**File:** `tests/advanced-tab/shadow-dom.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Click the 'Create Shadow DOM' button
    - expect: Shadow DOM element should be created
  3. Use shadow DOM piercing mechanisms to access the hidden content
    - expect: Shadow DOM content should be accessible using special locators
    - expect: The content should display correctly

#### 2.3. Handle multiple Shadow DOM instances

**File:** `tests/advanced-tab/shadow-dom.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Click the 'Create Shadow DOM' button
    - expect: First Shadow DOM element should be created
  3. Click the 'Create Shadow DOM' button again
    - expect: Second Shadow DOM element should be created
    - expect: Both elements should coexist without conflicts

### 3. Browser Dialogs

**Seed:** `tests/seed.spec.ts`

#### 3.1. Trigger and handle Alert dialog

**File:** `tests/advanced-tab/dialogs.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Show Alert' button should be visible
  2. Click the 'Show Alert' button
    - expect: An alert dialog should appear
    - expect: The alert message should display correctly
  3. Accept/OK the alert dialog
    - expect: The alert should be dismissed
    - expect: The page should return to normal state

#### 3.2. Trigger and handle Confirm dialog - Accept

**File:** `tests/advanced-tab/dialogs.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Show Confirm' button should be visible
  2. Click the 'Show Confirm' button
    - expect: A confirm dialog should appear
    - expect: Dialog message should display correctly
  3. Click OK to accept the confirm dialog
    - expect: The dialog should close
    - expect: Page should handle the OK action

#### 3.3. Trigger and handle Confirm dialog - Cancel

**File:** `tests/advanced-tab/dialogs.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Click the 'Show Confirm' button
    - expect: A confirm dialog should appear
  3. Click Cancel to reject the confirm dialog
    - expect: The dialog should close
    - expect: Page should handle the Cancel action

#### 3.4. Trigger and handle Prompt dialog

**File:** `tests/advanced-tab/dialogs.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Show Prompt' button should be visible
  2. Click the 'Show Prompt' button
    - expect: A prompt dialog should appear
    - expect: An input field should be visible
  3. Enter text in the prompt field and click OK
    - expect: The user input should be accepted
    - expect: The dialog should close after input

#### 3.5. Trigger Prompt dialog and cancel

**File:** `tests/advanced-tab/dialogs.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Click the 'Show Prompt' button
    - expect: A prompt dialog should appear
  3. Click Cancel without entering text
    - expect: The dialog should close without submitting input

### 4. Custom Modal Dialogs

**Seed:** `tests/seed.spec.ts`

#### 4.1. Open and close custom modal

**File:** `tests/advanced-tab/modals.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Show Custom Modal' button should be visible
  2. Click the 'Show Custom Modal' button
    - expect: A custom modal should open
    - expect: Modal content should be visible
  3. Click the close button or press Escape
    - expect: The modal should close
    - expect: Page should be in the same state

#### 4.2. Custom modal backdrop interaction

**File:** `tests/advanced-tab/modals.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Click the 'Show Custom Modal' button
    - expect: The custom modal should be open
  3. Click on the modal backdrop
    - expect: The modal should close when backdrop is clicked

#### 4.3. Modal with multiple actions

**File:** `tests/advanced-tab/modals.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Click the 'Show Custom Modal' button
    - expect: The custom modal should be visible with action buttons
  3. Click any action button in the modal
    - expect: The modal should close
    - expect: Appropriate action should be triggered

### 5. Dynamic IDs

**Seed:** `tests/seed.spec.ts`

#### 5.1. Verify dynamic ID changes on regeneration

**File:** `tests/advanced-tab/dynamic-ids.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: Regenerate ID button should be visible
  2. Locate and note the current element ID
    - expect: Element should have an ID attribute
  3. Click the 'Regenerate ID' button
    - expect: Element ID should change to a different value
  4. Interact with the element to verify it works
    - expect: Element should still be functional

#### 5.2. Handle element identification after multiple regenerations

**File:** `tests/advanced-tab/dynamic-ids.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Click the 'Regenerate ID' button multiple times
    - expect: The ID should change each time
  3. Verify the element is still usable
    - expect: Element should remain accessible and functional

#### 5.3. Use alternative locators for dynamic ID elements

**File:** `tests/advanced-tab/dynamic-ids.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Locate the dynamic element using text content or data attributes
    - expect: Element should be found using alternative methods

### 6. Toast Notifications

**Seed:** `tests/seed.spec.ts`

#### 6.1. Trigger success toast notification

**File:** `tests/advanced-tab/toasts.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Success Toast' button should be visible
  2. Click the 'Success Toast' button
    - expect: A success toast notification should appear
  3. Wait for the toast to auto-dismiss
    - expect: The toast should automatically disappear

#### 6.2. Trigger error toast notification

**File:** `tests/advanced-tab/toasts.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Error Toast' button should be visible
  2. Click the 'Error Toast' button
    - expect: An error toast notification should appear
  3. Wait or click to dismiss the error toast
    - expect: The toast should auto-dismiss

#### 6.3. Trigger info toast notification

**File:** `tests/advanced-tab/toasts.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Info Toast' button should be visible
  2. Click the 'Info Toast' button
    - expect: An info toast notification should appear
  3. Wait for the toast to auto-dismiss
    - expect: The toast should disappear

#### 6.4. Multiple toast notifications stacking

**File:** `tests/advanced-tab/toasts.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Click multiple toast buttons in quick succession
    - expect: Multiple toast notifications should appear stacked
  3. Observe the toasts as they appear and disappear
    - expect: All toasts should be visible and auto-dismiss independently

### 7. Charts and Graphs

**Seed:** `tests/seed.spec.ts`

#### 7.1. Verify chart rendering

**File:** `tests/advanced-tab/charts.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: A bar chart section should be visible
  2. Observe the rendered bar chart
    - expect: The bar chart should render without errors
  3. Verify chart data matches expected values
    - expect: Chart should display correct data labels

#### 7.2. Chart interactive features

**File:** `tests/advanced-tab/charts.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
    - expect: Bar chart should be visible
  2. Hover over different bars in the chart
    - expect: Hovering over a bar should show a tooltip

#### 7.3. Chart responsive behavior

**File:** `tests/advanced-tab/charts.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Resize the browser window and verify chart adapts
    - expect: Chart should resize responsively

### 8. Canvas Drawing

**Seed:** `tests/seed.spec.ts`

#### 8.1. Draw on canvas element

**File:** `tests/advanced-tab/canvas.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: Canvas Drawing section should be visible
  2. Click and drag on the canvas to draw
    - expect: Canvas should accept mouse input
    - expect: A line should be drawn on canvas
  3. Verify the drawing persists
    - expect: The drawn content should remain on canvas

#### 8.2. Clear canvas content

**File:** `tests/advanced-tab/canvas.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
    - expect: Clear Canvas button should be visible
  2. Draw something on the canvas
    - expect: Content should be drawn on canvas
  3. Click the 'Clear Canvas' button
    - expect: Canvas should be cleared
    - expect: All drawn content should be removed

#### 8.3. Multiple drawings on canvas

**File:** `tests/advanced-tab/canvas.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
    - expect: Canvas should be cleared
  2. Draw multiple strokes on the canvas
    - expect: Multiple drawings should appear on canvas
  3. Verify all drawings are displayed
    - expect: All drawn elements should be visible together

### 9. Infinite Scroll

**Seed:** `tests/seed.spec.ts`

#### 9.1. Load initial items in infinite scroll

**File:** `tests/advanced-tab/infinite-scroll.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: Infinite Scroll section should be visible with items
  2. Observe the infinite scroll section
    - expect: Initial items should be displayed

#### 9.2. Trigger infinite scroll by scrolling down

**File:** `tests/advanced-tab/infinite-scroll.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
    - expect: Infinite scroll section should have items
  2. Scroll down within infinite scroll container
    - expect: New items should load dynamically
  3. Wait for new batch of items to load
    - expect: New items should be appended to list

#### 9.3. Continue infinite scroll with multiple loads

**File:** `tests/advanced-tab/infinite-scroll.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Scroll to end of items and continue scrolling
    - expect: Items should continue loading as you scroll
  3. Verify new items appear with each scroll
    - expect: Multiple waves of items should load

#### 9.4. Verify proper item numbering

**File:** `tests/advanced-tab/infinite-scroll.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Scroll through list and check item numbers
    - expect: Items should be numbered sequentially

#### 9.5. Handle end of infinite scroll

**File:** `tests/advanced-tab/infinite-scroll.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Scroll to absolute end of infinite scroll list
    - expect: No more items should load at the end

### 10. Multiple Windows and Tabs

**Seed:** `tests/seed.spec.ts`

#### 10.1. Open new window from button

**File:** `tests/advanced-tab/windows-tabs.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Open New Window' button should be visible
  2. Click the 'Open New Window' button
    - expect: A new browser window should open
  3. Verify context switching works
    - expect: Both windows should be accessible

#### 10.2. Open new tab from button

**File:** `tests/advanced-tab/windows-tabs.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Open New Tab' button should be visible
  2. Click the 'Open New Tab' button
    - expect: A new browser tab should open
  3. Verify context switching works
    - expect: Both tabs should be accessible

#### 10.3. Open new tab with input field

**File:** `tests/advanced-tab/windows-tabs.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: The 'Open Tab with Input' button should be visible
  2. Click the 'Open Tab with Input' button
    - expect: A new tab should open with input field
  3. Interact with elements in new tab
    - expect: New tab elements should be interactive

#### 10.4. Handle window/tab closure

**File:** `tests/advanced-tab/windows-tabs.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
    - expect: A new window or tab should be open
  2. Close the newly opened window or tab
    - expect: Window/tab should close properly
  3. Verify main page is still functional
    - expect: Main page should remain unaffected

### 11. Hidden Elements

**Seed:** `tests/seed.spec.ts`

#### 11.1. Verify hidden element exists in DOM

**File:** `tests/advanced-tab/hidden-elements.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be active
    - expect: Hidden Elements section should be visible
  2. Inspect the page DOM to find hidden elements
    - expect: Hidden elements should exist in page DOM
  3. Verify hidden elements use display:none or similar CSS
    - expect: Hidden elements should remain invisible

#### 11.2. Access hidden element programmatically

**File:** `tests/advanced-tab/hidden-elements.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
    - expect: Hidden elements should exist in DOM
  2. Use JavaScript to access hidden element properties
    - expect: Hidden elements should be accessible via JavaScript
  3. Extract and verify hidden element content
    - expect: Hidden element content should be readable programmatically

#### 11.3. Interaction with hidden elements fails gracefully

**File:** `tests/advanced-tab/hidden-elements.spec.ts`

**Steps:**
  1. -
    - expect: The Advanced tab should be loaded
  2. Try to interact with a hidden element
    - expect: Attempting click on hidden element should fail gracefully
  3. Verify action handles gracefully
    - expect: No page errors should occur
