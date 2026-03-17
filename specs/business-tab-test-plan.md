# Business Tab Test Plan

## Application Overview

Comprehensive test plan for the Business tab e-commerce functionality.

## Test Scenarios

### 1. User Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login with valid credentials

**File:** `tests/business/login.spec.ts`

**Steps:**
  1. Enter username admin and password password
    - expect: Login form is visible
  2. Click Login button
    - expect: User is logged in with Welcome message

#### 1.2. Logout from session

**File:** `tests/business/login.spec.ts`

**Steps:**
  1. Click Logout button
    - expect: User is logged in
  2. Verify logged out state
    - expect: Cart is empty and login form returns

### 2. Shopping Cart Operations

**Seed:** `tests/seed.spec.ts`

#### 2.1. Add product to cart

**File:** `tests/business/cart.spec.ts`

**Steps:**
  1. Click Add to Cart on a product
    - expect: User is logged in
  2. -
    - expect: Item appears in cart with correct price

#### 2.2. Remove product from cart

**File:** `tests/business/cart.spec.ts`

**Steps:**
  1. Click remove button on item
    - expect: Product is in cart
  2. -
    - expect: Item is removed and total updates

### 3. Product Search and Filtering

**Seed:** `tests/seed.spec.ts`

#### 3.1. Search by product keyword

**File:** `tests/business/search.spec.ts`

**Steps:**
  1. Type Playwright in search box
    - expect: Search field is active
  2. -
    - expect: Only Playwright products display

#### 3.2. Filter by category

**File:** `tests/business/search.spec.ts`

**Steps:**
  1. Click category dropdown and select Training
    - expect: Category dropdown is visible
  2. -
    - expect: Products filter to Training category

#### 3.3. Sort by price

**File:** `tests/business/search.spec.ts`

**Steps:**
  1. Click sort dropdown and select Sort by Price
    - expect: Sort dropdown is available
  2. -
    - expect: Products reorder by price

### 4. Checkout Process

**Seed:** `tests/seed.spec.ts`

#### 4.1. Review cart items in checkout

**File:** `tests/business/checkout.spec.ts`

**Steps:**
  1. Checkout appears automatically
    - expect: Item is in cart
  2. -
    - expect: Step 1 shows order table with products and total

#### 4.2. Enter shipping information

**File:** `tests/business/checkout.spec.ts`

**Steps:**
  1. Fill First Name, Last Name, Address, City, ZIP
    - expect: Step 2 is displayed
  2. -
    - expect: All fields accept input

#### 4.3. Select payment method

**File:** `tests/business/checkout.spec.ts`

**Steps:**
  1. Click credit card radio button
    - expect: Step 3 displays payment options
  2. -
    - expect: Payment form fields appear

### 5. Contact and Support

**Seed:** `tests/seed.spec.ts`

#### 5.1. Submit contact form

**File:** `tests/business/contact.spec.ts`

**Steps:**
  1. -
    - expect: Contact form is visible with Name, Email, Subject, Message fields
  2. Fill contact form with valid data
    - expect: All fields accept input
  3. Click Submit Inquiry button
    - expect: Form submits successfully
