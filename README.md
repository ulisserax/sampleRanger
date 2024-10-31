# {CUSTOMER_NAME} Playwright Test Suite
This repository contains Ranger’s automated end-to-end tests for {CUSTOMER_NAME}.

## Overview
These tests are designed to validate critical user journeys and functionality across {CUSTOMER_NAME}'s web applications. The test suite uses Playwright, a modern end-to-end testing framework that enables reliable cross-browser testing.

## Prerequisites
- Node.js version 22 or higher
- npm (usually comes with Node.js)
- Git

## Initial Setup

### 1. Clone the Repository
```bash
git clone {REPOSITORY_URL}
cd {REPOSITORY_NAME}
```

### 2. Install Dependencies
Install the project dependencies:
```bash
npm install
```

### 3. Install Playwright Browsers
Install the required browser executables:
```bash
npx playwright install
```

### 4. Environment Configuration
1. Create a `.env` file in the root directory
2. Copy the contents from `.env.example` to `.env`
3. Update the values in `.env` with your configuration

**Important Notes:**
- The `.env` file is excluded from version control (via `.gitignore`)
- When adding new environment variables, always update `.env.example`
- Never commit sensitive information to the repository

Example `.env` structure:
```plaintext
BASE_URL=https://{CUSTOMER_DOMAIN}
TEST_USERNAME=your-username
TEST_PASSWORD=your-password
```

## Running Tests

### Run All Tests
```bash
npm run test
```

### Run Specific Test File
```bash
npm run test tests/path/to/test.spec.ts
```

### Debug Tests
To debug a specific test:
1. Add `.only` to the test you want to debug:
   ```typescript
   test.only('your test name', async ({ page }) => {
     // test code
   });
   ```
2. Run with debugging enabled:
   ```bash
   npm run test -- --debug
   ```
