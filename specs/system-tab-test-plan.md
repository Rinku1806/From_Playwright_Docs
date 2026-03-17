# System Tab Comprehensive Test Plan

## Application Overview

The System tab of the Test Automation Practice Hub tests browser-level system features including geolocation services, notifications API, multi-language support, storage management (Local Storage, Session Storage, Cookies), advanced cookie operations, and browser capability detection. This test plan provides comprehensive coverage of system-level functionality.

## Test Scenarios

### 1. Geolocation Services

**Seed:** `tests/seed.spec.ts`

#### 1.1. Request real geolocation

**File:** `tests/system/geolocation.spec.ts`

**Steps:**
  1. -
    - expect: System tab should be active
    - expect: Geolocation section should be visible
  2. Click 'Request Real Location' button
    - expect: Browser requests geolocation permission or timeout occurs
  3. -
    - expect: Latitude and Longitude values should display or error message appears

#### 1.2. Use mock geolocation

**File:** `tests/system/geolocation.spec.ts`

**Steps:**
  1. -
    - expect: System tab should be active
  2. Click 'Use Mock Location' button
    - expect: Mock coordinates should display
  3. -
    - expect: Latitude should show 37.815716 and Longitude should show -122.443500

#### 1.3. Verify geolocation timeout handling

**File:** `tests/system/geolocation.spec.ts`

**Steps:**
  1. -
    - expect: Geolocation section visible
  2. Click 'Request Real Location' button
    - expect: Geolocation request made
  3. -
    - expect: Timeout message appears if request takes too long
    - expect: Page remains functional after timeout

### 2. Notifications API

**Seed:** `tests/seed.spec.ts`

#### 2.1. Enable notifications toggle

**File:** `tests/system/notifications.spec.ts`

**Steps:**
  1. -
    - expect: System tab should be active
    - expect: Notifications section visible
  2. Click the Enable Notifications toggle
    - expect: Toggle should change state to on
  3. -
    - expect: Status should change from Disabled to Enabled

#### 2.2. Send test notification when disabled

**File:** `tests/system/notifications.spec.ts`

**Steps:**
  1. -
    - expect: Notifications should be disabled
  2. Verify Send Test Notification is disabled
    - expect: Send Test Notification button should be disabled
  3. -
    - expect: Button cannot be clicked

#### 2.3. Send test notification when enabled

**File:** `tests/system/notifications.spec.ts`

**Steps:**
  1. -
    - expect: Notifications toggle available
  2. Enable notifications and click Send Test Notification
    - expect: Enable notifications first and click Send Test Notification
  3. -
    - expect: Clicking sends a test notification

#### 2.4. Send push notification

**File:** `tests/system/notifications.spec.ts`

**Steps:**
  1. -
    - expect: Notifications should be enabled
  2. Click Send Push Notification button
    - expect: Send Push Notification button should be enabled
  3. -
    - expect: Push notification appears or is queued

### 3. Multi-Language Support

**Seed:** `tests/seed.spec.ts`

#### 3.1. View all available languages

**File:** `tests/system/language.spec.ts`

**Steps:**
  1. -
    - expect: System tab should be active
    - expect: Language selector should show English
  2. Click language dropdown
    - expect: Dropdown should open with language options
  3. -
    - expect: Languages include: English, Español, Français, Deutsch, 中文

#### 3.2. Switch to Spanish language

**File:** `tests/system/language.spec.ts`

**Steps:**
  1. -
    - expect: Language dropdown should be open
  2. Click on Español option
    - expect: Select Español from dropdown
  3. -
    - expect: Page text changes to Spanish
    - expect: Welcome message shows as ¡Hola, bienvenido a nuestra plataforma!
    - expect: Language indicator shows Español (es)

#### 3.3. Switch to French language

**File:** `tests/system/language.spec.ts`

**Steps:**
  1. -
    - expect: Language dropdown available
  2. Click on Français option
    - expect: Select Français from dropdown
  3. -
    - expect: Page content displays in French
    - expect: Language indicator updates to Français (fr)

#### 3.4. Switch to German language

**File:** `tests/system/language.spec.ts`

**Steps:**
  1. -
    - expect: Language dropdown available
  2. Click on Deutsch option
    - expect: Select Deutsch from dropdown
  3. -
    - expect: Content changes to German
    - expect: Language shows Deutsch (de)

#### 3.5. Switch to Chinese language

**File:** `tests/system/language.spec.ts`

**Steps:**
  1. -
    - expect: Language dropdown available
  2. Click on 中文 option
    - expect: Select 中文 from dropdown
  3. -
    - expect: Page displays in Chinese
    - expect: Language indicator shows Current: 中文 (zh)

#### 3.6. Reset to English language

**File:** `tests/system/language.spec.ts`

**Steps:**
  1. -
    - expect: Language currently set to non-English
  2. Click on English option
    - expect: Select English from dropdown
  3. -
    - expect: Page returns to English text
    - expect: Welcome message shows in English

### 4. Storage Management

**Seed:** `tests/seed.spec.ts`

#### 4.1. Set local storage data

**File:** `tests/system/storage.spec.ts`

**Steps:**
  1. -
    - expect: Storage Management section should be visible
  2. Click 'Set Local Data' button
    - expect: Click 'Set Local Data' button
  3. -
    - expect: Timestamp of data storage should display
    - expect: Local Storage shows current date and time

#### 4.2. Set session storage data

**File:** `tests/system/storage.spec.ts`

**Steps:**
  1. -
    - expect: Session Storage section visible
  2. Click 'Set Session Data' button
    - expect: Click 'Set Session Data' button
  3. -
    - expect: Timestamp displays
    - expect: Session data persists for current session duration

#### 4.3. Set cookie data

**File:** `tests/system/storage.spec.ts`

**Steps:**
  1. -
    - expect: Cookies section visible
  2. Click 'Set Cookie Data' button
    - expect: Click 'Set Cookie Data' button
  3. -
    - expect: Cookie is created with timestamp
    - expect: Cookie appears in All Cookies list as 'test-data=...' with timestamp

#### 4.4. Clear all storage data

**File:** `tests/system/storage.spec.ts`

**Steps:**
  1. -
    - expect: Multiple storage items should be set
  2. Click 'Clear All Storage Data' button
    - expect: Click 'Clear All Storage Data' button
  3. -
    - expect: All storage items are cleared
    - expect: All sections show empty or reset state

#### 4.5. Verify local storage persistence

**File:** `tests/system/storage.spec.ts`

**Steps:**
  1. -
    - expect: Local Storage data should be set
  2. Refresh page to test session persistence
    - expect: Close and reopen browser (simulate session end)
  3. -
    - expect: Local Storage data persists across page refresh, Session Storage is cleared

#### 4.6. Verify session storage clears on new session

**File:** `tests/system/storage.spec.ts`

**Steps:**
  1. -
    - expect: Session storage should have data
  2. Verify session expiration behavior
    - expect: Storage should be cleared after session ends
  3. -
    - expect: Session data is no longer available in new session

### 5. Cookie Management

**Seed:** `tests/seed.spec.ts`

#### 5.1. Set session cookie

**File:** `tests/system/cookies.spec.ts`

**Steps:**
  1. -
    - expect: All Cookies section should be visible
  2. Click 'Set Session Cookie' button
    - expect: Click 'Set Session Cookie' button
  3. -
    - expect: Session cookie is created
    - expect: Cookie displays in All Cookies list

#### 5.2. Set persistent cookie

**File:** `tests/system/cookies.spec.ts`

**Steps:**
  1. -
    - expect: Persistent Cookie button should be visible
  2. Click 'Set Persistent Cookie' button
    - expect: Click 'Set Persistent Cookie' button
  3. -
    - expect: Persistent cookie with expiration is created
    - expect: Cookie appears in All Cookies with value 'persistent-value'

#### 5.3. Set secure cookie

**File:** `tests/system/cookies.spec.ts`

**Steps:**
  1. -
    - expect: Secure Cookie button available
  2. Click 'Set Secure Cookie' button
    - expect: Click 'Set Secure Cookie' button
  3. -
    - expect: Secure/HTTPS-only cookie is created
    - expect: Cookie visible in All Cookies list

#### 5.4. Simulate HttpOnly cookie

**File:** `tests/system/cookies.spec.ts`

**Steps:**
  1. -
    - expect: HttpOnly Simulation button available
  2. Click 'Simulate HttpOnly' button
    - expect: Click 'Simulate HttpOnly' button
  3. -
    - expect: HttpOnly cookie is simulated
    - expect: Cookie created but not accessible from JavaScript

#### 5.5. Verify multiple cookies display

**File:** `tests/system/cookies.spec.ts`

**Steps:**
  1. -
    - expect: Multiple cookies should be set
  2. Observe All Cookies section
    - expect: Verify all cookies display correctly
  3. -
    - expect: All Cookies section displays all cookies
    - expect: Each cookie shows name=value format

#### 5.6. Verify cookie attributes

**File:** `tests/system/cookies.spec.ts`

**Steps:**
  1. -
    - expect: Cookies are created with different attributes
  2. Inspect cookie characteristics
    - expect: Check cookie properties
  3. -
    - expect: Session cookies lack expiration
    - expect: Persistent cookies have expiration date
    - expect: Secure cookies marked as HTTPS-only
    - expect: HttpOnly cookies not accessible to scripts

### 6. Browser Information and Capabilities

**Seed:** `tests/seed.spec.ts`

#### 6.1. Verify user agent string

**File:** `tests/system/browser-info.spec.ts`

**Steps:**
  1. -
    - expect: System tab should be active
  2. Observe browser information
    - expect: Browser Information section is visible
  3. -
    - expect: User Agent heading displays
    - expect: Current browser user agent string shows (e.g., Chrome/Firefox/Safari)

#### 6.2. Check geolocation support

**File:** `tests/system/browser-info.spec.ts`

**Steps:**
  1. -
    - expect: Browser Features section visible
  2. Observe Browser Features
    - expect: Verify feature list
  3. -
    - expect: Geolocation should show: Supported

#### 6.3. Check notifications support

**File:** `tests/system/browser-info.spec.ts`

**Steps:**
  1. -
    - expect: Browser Features section visible
  2. Observe Browser Features
    - expect: Verify feature list
  3. -
    - expect: Notifications should show: Supported

#### 6.4. Check local storage support

**File:** `tests/system/browser-info.spec.ts`

**Steps:**
  1. -
    - expect: Browser Features section visible
  2. Observe Browser Features
    - expect: Verify feature list
  3. -
    - expect: Local Storage should show: Supported

#### 6.5. Check service workers support

**File:** `tests/system/browser-info.spec.ts`

**Steps:**
  1. -
    - expect: Browser Features section visible
  2. Observe Browser Features
    - expect: Verify feature list
  3. -
    - expect: Service Workers should show: Supported

#### 6.6. Verify screen resolution

**File:** `tests/system/browser-info.spec.ts`

**Steps:**
  1. -
    - expect: Screen Information section visible
  2. Observe Screen Resolution
    - expect: Check resolution value
  3. -
    - expect: Screen Resolution displays as 1280 × 720

#### 6.7. Verify available screen size

**File:** `tests/system/browser-info.spec.ts`

**Steps:**
  1. -
    - expect: Screen Information visible
  2. Observe Available Screen field
    - expect: Check available screen
  3. -
    - expect: Shows available screen dimensions (1280 × 720)
    - expect: Value represents usable screen area

#### 6.8. Verify viewport dimensions

**File:** `tests/system/browser-info.spec.ts`

**Steps:**
  1. -
    - expect: Screen Information visible
  2. Observe Viewport Size field
    - expect: Check viewport size
  3. -
    - expect: Shows current viewport size (1280 × 720)

#### 6.9. Verify color depth

**File:** `tests/system/browser-info.spec.ts`

**Steps:**
  1. -
    - expect: Screen Information visible
  2. Observe Color Depth field
    - expect: Check color depth
  3. -
    - expect: Shows color depth: 32 bits
    - expect: Indicates 32-bit color support
