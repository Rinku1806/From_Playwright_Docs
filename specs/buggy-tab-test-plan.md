# Buggy Tab Functionality Test Plan

## Application Overview

Test coverage for the "Buggy" tab in the Test Automation Practice Hub. This plan validates each anti-pattern scenario (dynamic IDs, stale elements, race conditions, delayed loading, overlapping elements, double-click requirements, hidden inputs, disabled controls, duplicate IDs, elements outside viewport, whitespace/case sensitivity) and ensures automation-friendly behavior and robust selectors.

## Test Scenarios

### 1. Buggy Tab Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Navigate to Buggy tab and validate page structure

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. From the landing page, click the "Buggy" tab in the tab list.
    - expect: The "Buggy" tab becomes selected and the Buggy tab panel is visible.
  2. Confirm the Buggy tab panel contains a heading "Buggy Page" and a list of bug categories (Dynamic IDs, Stale Element Reference, Race Condition, etc.).
    - expect: The page displays a heading "Buggy Page" and the section titles for each bug scenario are visible.

#### 1.2. Dynamic IDs - locate elements by stable attributes, not generated IDs

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, locate the "Username (ID changes each load)" field using a stable locator such as its label text or placeholder.
    - expect: The input field is found regardless of the current ID value shown in the "Current ID" code block.
  2. Read the "Current ID" value and verify it changes after a full page reload or tab re-selection.
    - expect: The "Current ID" value differs from the previous value after reloading the page or switching away and back to the tab.

#### 1.3. Stale Element Reference - handle DOM detachment gracefully

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, type a value into the "Type something" textbox.
    - expect: The typed text appears in the textbox.
  2. Click the "Submit (Causes Detachment)" button.
    - expect: The textbox is removed from the DOM and then re-added. Automation should not throw a stale element exception and should be able to re-acquire the textbox if needed.

#### 1.4. Race Condition - wait for text to stabilize before asserting

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, observe the "Click me!" button.
    - expect: The button text should be visible and may change quickly.
  2. Click the "Click me!" button and wait for the button text to reach a stable expected state (e.g., not changing rapidly).
    - expect: The click completes successfully without flaky failures due to text changing too quickly.

#### 1.5. Delayed Loading - wait for element visibility

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, identify the section where an element loads after 3 seconds (indicated by a "Loading..." paragraph).
    - expect: The loading indicator is shown initially.
  2. Wait for the delayed element to appear (e.g., wait for a specific element or text to become visible) and interact with it once visible.
    - expect: The delayed element becomes visible after ~3 seconds and can be interacted with reliably.

#### 1.6. Overlapping Elements - handle temporary overlay

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, click the "Click Me (Shows Overlay)" button.
    - expect: An overlay appears temporarily covering the button.
  2. Wait for the overlay to disappear and then click the button again to confirm it is clickable after the overlay is gone.
    - expect: The button click succeeds only when the overlay is not blocking the interaction.

#### 1.7. Double Click Required - handle rapid clicks

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, locate the "Click Twice (Count: N)" button.
    - expect: The button is visible with a count displayed in the label.
  2. Perform a double-click on the button (two clicks in quick succession).
    - expect: The button's count increments appropriately, demonstrating that it requires a rapid succession of clicks.

#### 1.8. Hidden Input Field - verify visibility checks before asserting

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, locate the hidden input field labeled "I'm hidden but in the DOM".
    - expect: The input exists in the DOM but is not visible (e.g., has opacity: 0).
  2. Assert that the automation framework treats this input as not visible and does not attempt interactions that require visibility unless explicitly forced.
    - expect: Interactions fail or are skipped unless visibility is confirmed; the input is not considered visible for normal user actions.

#### 1.9. Disabled Button - validate enabled state before interaction

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, locate the button labeled "I Look Normal But I'm Disabled".
    - expect: The button is present but has the disabled attribute, and clicking it does not trigger actions.
  2. Attempt to click the disabled button and verify that no action is performed and no errors occur.
    - expect: The click is ignored, and the automation framework can detect the disabled state before attempting to click.

#### 1.10. Duplicate IDs - select correct element when IDs are not unique

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, locate both inputs under the "Duplicate IDs" section.
    - expect: Two distinct inputs are present even though they may share an ID in the DOM.
  2. Enter different text values into each input using a locator strategy that differentiates them (e.g., by order or label).
    - expect: Each input retains its own value and the automation does not depend on ID-based selectors.

#### 1.11. Element Outside Viewport - scroll before interacting

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, scroll down until the "Hidden Button at Bottom" is visible.
    - expect: The button becomes visible in the viewport after scrolling.
  2. Click the "Hidden Button at Bottom" button once it is in view.
    - expect: The button click succeeds when the element is scrolled into view.

#### 1.12. Whitespace in Text - normalize text before comparison

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, inspect the paragraph with extra whitespace and line breaks.
    - expect: The text is rendered with extra spaces and line breaks.
  2. Normalize whitespace (trim and collapse multiple spaces/newlines) before comparing the text in assertions.
    - expect: Text comparisons succeed even though the raw DOM text contains irregular whitespace.

#### 1.13. Case Sensitivity - use case-insensitive matching for labels and attributes

**File:** `specs/buggy-tab-test-plan.md`

**Steps:**
  1. In the Buggy tab, locate buttons with labels "Action: Submit", "Action: CANCEL", and "Action: delete".
    - expect: All three buttons are visible and have varying case in their labels.
  2. Click each button using a case-insensitive selector or by normalizing the label text.
    - expect: Each button can be clicked reliably regardless of case differences.
