# Complex Tab Comprehensive Test Plan

## Application Overview

The Complex tab of the Test Automation Practice Hub tests advanced scenarios including asynchronous operations, delayed element loading, retry mechanisms, dynamic UI state management, table operations with sorting and inline editing, API-driven content loading, and real-time updates via WebSocket and polling. This test plan provides comprehensive coverage of complex application behaviors.

## Test Scenarios

### 1. Delayed Loading

**Seed:** `tests/seed.spec.ts`

#### 1.1. Initial state shows no loaded elements

**File:** `tests/complex/delayed-loading.spec.ts`

**Steps:**
  1. -
    - expect: Complex tab should be active
  2. Observe Delayed Loading section
    - expect: Delayed Loading section should be visible
  3. -
    - expect: Counter displays 'Loaded: 0/3 elements'

#### 1.2. Elements load progressively with delays

**File:** `tests/complex/delayed-loading.spec.ts`

**Steps:**
  1. -
    - expect: Initial counter shows 0/3
  2. Wait 5 seconds for delayed elements
    - expect: Wait for elements to load
  3. -
    - expect: Counter updates to 'Loaded: 3/3 elements'
    - expect: Three elements visible: 2s, 4s, 6s delays

#### 1.3. Verify element load order timing

**File:** `tests/complex/delayed-loading.spec.ts`

**Steps:**
  1. -
    - expect: Delayed Loading section visible
  2. Monitor element loading with timestamps
    - expect: Track element appearance timing
  3. -
    - expect: Element loads after 2 seconds
    - expect: Element loads after 4 seconds
    - expect: Element loads after 6 seconds
    - expect: All elements present after 6 seconds

### 2. Retry Logic

**Seed:** `tests/seed.spec.ts`

#### 2.1. Initial retry state shows Ready

**File:** `tests/complex/retry-logic.spec.ts`

**Steps:**
  1. -
    - expect: Complex tab active
  2. Observe retry section
    - expect: Retry Logic section visible
  3. -
    - expect: Status shows 'Ready'
    - expect: Attempts counter shows '0'

#### 2.2. Click Try Operation button

**File:** `tests/complex/retry-logic.spec.ts`

**Steps:**
  1. -
    - expect: Retry section visible with Ready status
  2. Click Try Operation
    - expect: Click Try Operation button
  3. -
    - expect: Button changes to 'Retrying...'
    - expect: Status changes to 'retrying'
    - expect: Attempts counter increments to 1
    - expect: Progress bar appears

#### 2.3. Retry operation completes successfully

**File:** `tests/complex/retry-logic.spec.ts`

**Steps:**
  1. -
    - expect: Operation is retrying
  2. Wait 5 seconds for operation
    - expect: Wait for retry to complete
  3. -
    - expect: Button changes back to 'Try Operation'
    - expect: Status shows 'success'
    - expect: Attempts count remains at 1
    - expect: Progress bar disappears

#### 2.4. Multiple retry attempts

**File:** `tests/complex/retry-logic.spec.ts`

**Steps:**
  1. -
    - expect: Retry section ready
  2. Perform 3 consecutive retry operations
    - expect: Click Try Operation multiple times
  3. -
    - expect: Each operation increments attempts
    - expect: Final status shows success or final state

### 3. Hidden Elements

**Seed:** `tests/seed.spec.ts`

#### 3.1. Hidden Elements section shows reveal button

**File:** `tests/complex/hidden-elements.spec.ts`

**Steps:**
  1. -
    - expect: Complex tab active
  2. Observe hidden elements section
    - expect: Hidden Elements section visible
  3. -
    - expect: Button displays 'Show Hidden Elements'
    - expect: No hidden elements visible initially

#### 3.2. Reveal hidden elements

**File:** `tests/complex/hidden-elements.spec.ts`

**Steps:**
  1. -
    - expect: Show Hidden Elements button visible
  2. Click Show Hidden Elements
    - expect: Click Show Hidden Elements button
  3. -
    - expect: Three hidden elements become visible
    - expect: Elements include discrete elements and animated elements

#### 3.3. Verify revealed element content

**File:** `tests/complex/hidden-elements.spec.ts`

**Steps:**
  1. -
    - expect: Hidden elements revealed
  2. Observe all revealed elements
    - expect: Check element content
  3. -
    - expect: Hidden Element 1 (Now Visible) displays
    - expect: Hidden Element 2 (Animated) displays
    - expect: Element with Overlay displays with active overlay status

#### 3.4. Toggle between show and hide

**File:** `tests/complex/hidden-elements.spec.ts`

**Steps:**
  1. -
    - expect: Elements are visible
  2. Verify button state
    - expect: Button should say 'Hide Elements'
  3. Click Hide Elements
    - expect: Click Hide Elements button
  4. -
    - expect: All hidden elements are hidden
    - expect: Button changes back to 'Show Hidden Elements'

### 4. Dynamic Sortable Table

**Seed:** `tests/seed.spec.ts`

#### 4.1. Verify initial table state

**File:** `tests/complex/table.spec.ts`

**Steps:**
  1. -
    - expect: Complex tab active
  2. Observe table
    - expect: Dynamic Sortable Table visible
  3. -
    - expect: Table has 4 rows (Element A, B, C, D)
    - expect: Columns: Name, Value, Status, Last Updated, Actions
    - expect: Sort indicator on Name column shows ↑ (ascending)

#### 4.2. Sort table by Name column

**File:** `tests/complex/table.spec.ts`

**Steps:**
  1. -
    - expect: Table visible with 4 rows
  2. Click Name column header
    - expect: Click Name column header
  3. -
    - expect: Rows reorder (may reverse order)
    - expect: Sort indicator changes (↑ to ↓ or vice versa)

#### 4.3. Sort table by Value column

**File:** `tests/complex/table.spec.ts`

**Steps:**
  1. -
    - expect: Table visible
  2. Click Value column header
    - expect: Click Value column header
  3. -
    - expect: Table sorts by numeric Value
    - expect: Rows reorder by 100, 150, 250, 300 or reverse

#### 4.4. Sort table by Status column

**File:** `tests/complex/table.spec.ts`

**Steps:**
  1. -
    - expect: Table visible
  2. Click Status column header
    - expect: Click Status column header
  3. -
    - expect: Table sorts by Status
    - expect: Rows grouped by status values (active, inactive, pending)

#### 4.5. Inline edit cell value

**File:** `tests/complex/table.spec.ts`

**Steps:**
  1. -
    - expect: Table visible
  2. Click on Value cell (e.g., 100)
    - expect: Click on a Value cell
  3. -
    - expect: Cell becomes editable spinbutton
    - expect: Confirm (✓) and Cancel (✗) buttons appear

#### 4.6. Confirm cell edit

**File:** `tests/complex/table.spec.ts`

**Steps:**
  1. -
    - expect: Cell in edit mode
  2. Type new value and click ✓
    - expect: Change value and click confirm
  3. -
    - expect: Cell exits edit mode
    - expect: New value is saved
    - expect: Last Updated timestamp refreshes

#### 4.7. Cancel cell edit

**File:** `tests/complex/table.spec.ts`

**Steps:**
  1. -
    - expect: Cell in edit mode
  2. Click ✗ to cancel edit
    - expect: Click cancel button
  3. -
    - expect: Cell exits edit mode
    - expect: Original value is restored
    - expect: Last Updated timestamp unchanged

#### 4.8. Delete row from table

**File:** `tests/complex/table.spec.ts`

**Steps:**
  1. -
    - expect: Table has multiple rows
  2. Click Delete button
    - expect: Click Delete button on a row
  3. -
    - expect: Row is removed from table
    - expect: Remaining rows display correctly

#### 4.9. Verify Status column badges

**File:** `tests/complex/table.spec.ts`

**Steps:**
  1. -
    - expect: Table visible
  2. Observe status values
    - expect: Check Status column display
  3. -
    - expect: Status shows distinct values (active, inactive, pending)
    - expect: Each status may have different styling or badges

### 5. API-Driven Dynamic Content

**Seed:** `tests/seed.spec.ts`

#### 5.1. Load API Data button available

**File:** `tests/complex/api-content.spec.ts`

**Steps:**
  1. -
    - expect: Complex tab active
  2. Observe API section
    - expect: API-Driven Dynamic Content section visible
  3. -
    - expect: 'Load API Data' button displays

#### 5.2. Click Load API Data button

**File:** `tests/complex/api-content.spec.ts`

**Steps:**
  1. -
    - expect: Load API Data section visible
  2. Click Load API Data
    - expect: Click Load API Data button
  3. -
    - expect: Button changes to 'Loading...'
    - expect: Button becomes disabled

#### 5.3. Verify API data loads

**File:** `tests/complex/api-content.spec.ts`

**Steps:**
  1. -
    - expect: API is loading
  2. Wait 4 seconds for API data
    - expect: Wait for API response
  3. -
    - expect: Button changes back to 'Load API Data'
    - expect: Data displays with 5 API items

#### 5.4. Verify API item structure

**File:** `tests/complex/api-content.spec.ts`

**Steps:**
  1. -
    - expect: API data loaded successfully
  2. Observe API items
    - expect: Check API item content
  3. -
    - expect: Each item has heading (API Item 1-5)
    - expect: Each item has description text
    - expect: Each item shows load timestamp

#### 5.5. Verify API load timestamp format

**File:** `tests/complex/api-content.spec.ts`

**Steps:**
  1. -
    - expect: API items visible
  2. Observe load timestamps
    - expect: Check timestamp format
  3. -
    - expect: Timestamps show format: M/D/YYYY, H:MM:SS PM/AM
    - expect: All items have same timestamp indicating batch load

### 6. Real-time Updates via WebSocket

**Seed:** `tests/seed.spec.ts`

#### 6.1. WebSocket section displays connected status

**File:** `tests/complex/realtime-websocket.spec.ts`

**Steps:**
  1. -
    - expect: Complex tab active
  2. Observe WebSocket section
    - expect: Real-time Updates section visible
  3. -
    - expect: Heading shows 'WebSocket Messages'
    - expect: Status badge shows 'Connected'
    - expect: Message log placeholder says 'Waiting for messages...'

#### 6.2. Verify WebSocket messages receive

**File:** `tests/complex/realtime-websocket.spec.ts`

**Steps:**
  1. -
    - expect: WebSocket section visible and connected
  2. Wait 5 seconds for messages
    - expect: Wait for real-time updates
  3. -
    - expect: Messages appear in log with timestamps
    - expect: Messages have format: 'HH:MM:SS PM: Real-time update: [message type]'
    - expect: Messages include types like 'Data synced', 'Status changed', 'New notification', 'User joined'

#### 6.3. Verify WebSocket message frequency

**File:** `tests/complex/realtime-websocket.spec.ts`

**Steps:**
  1. -
    - expect: WebSocket messages receiving
  2. Observe message frequency
    - expect: Count incoming messages
  3. -
    - expect: Messages appear approximately every 5 seconds
    - expect: Multiple message types cycle

#### 6.4. WebSocket connection status

**File:** `tests/complex/realtime-websocket.spec.ts`

**Steps:**
  1. -
    - expect: WebSocket Messages section visible
  2. Verify status badge
    - expect: Check connection status
  3. -
    - expect: Status shows 'Connected'
    - expect: Status badge should indicate active connection

### 7. Real-time Updates via Polling

**Seed:** `tests/seed.spec.ts`

#### 7.1. Polling section initial state

**File:** `tests/complex/realtime-polling.spec.ts`

**Steps:**
  1. -
    - expect: Real-time Updates section visible
  2. Observe polling section
    - expect: Polling Data subsection visible
  3. -
    - expect: Start Polling button shows enabled
    - expect: Stop Polling button shows disabled
    - expect: Count displays 0
    - expect: Last Update shows initial timestamp

#### 7.2. Start polling operation

**File:** `tests/complex/realtime-polling.spec.ts`

**Steps:**
  1. -
    - expect: Polling section ready
  2. Click Start Polling
    - expect: Click Start Polling button
  3. -
    - expect: Start Polling button becomes disabled
    - expect: Stop Polling button becomes enabled
    - expect: Status shows 'Polling Active'

#### 7.3. Verify polling count increments

**File:** `tests/complex/realtime-polling.spec.ts`

**Steps:**
  1. -
    - expect: Polling is active
  2. Wait 3 seconds for polling
    - expect: Wait for polling updates
  3. -
    - expect: Count increments (shows 2 or higher)
    - expect: Last Update timestamp changes
    - expect: Each poll increments count

#### 7.4. Stop polling operation

**File:** `tests/complex/realtime-polling.spec.ts`

**Steps:**
  1. -
    - expect: Polling is active
  2. Click Stop Polling
    - expect: Click Stop Polling button
  3. -
    - expect: Stop Polling button becomes disabled
    - expect: Start Polling button becomes enabled
    - expect: Count stops updating
    - expect: Final count value displays (e.g., 43)

#### 7.5. Verify polling count persistence

**File:** `tests/complex/realtime-polling.spec.ts`

**Steps:**
  1. -
    - expect: Polling has stopped
  2. Check final count
    - expect: Observe count value
  3. -
    - expect: Count retains final value after stopping
    - expect: No further updates occur
    - expect: Timestamp remains at last update time

#### 7.6. Restart polling after stop

**File:** `tests/complex/realtime-polling.spec.ts`

**Steps:**
  1. -
    - expect: Polling previously stopped
  2. Restart polling
    - expect: Click Start Polling again
  3. -
    - expect: Polling resumes from stopped count
    - expect: Count increments from previous value
