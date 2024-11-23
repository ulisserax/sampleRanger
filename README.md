# Technical Assessment for QA Engineer

## Overview
This is a technical assessment for QA Engineer candidates at Ranger. You'll be working with Playwright tests for a todo application.

Your task is to finish four tests generated for [TodoMVC](https://demo.playwright.dev/todomvc/):
- Adding todos
- Editing a todo
- Removing a todo
- Clearing all todos

You'll have 30 minutes to work on this independently, followed by a code review discussion. You may use the Internet while working on this task.

## Project Structure
```
src/lib/
├── tests/
│   ├── all.test.ts         # Main test suite
│   ├── addTodos.ts         
│   ├── editTodo.ts         
│   ├── removeTodo.ts       
│   └── clearAllTodos.ts    
└── playwright.config.ts    
```

## What We're Looking For
- Fix any flaky locators
- Remove unnecessary steps
- Add meaningful assertions using Playwright's `expect` ([docs](https://playwright.dev/docs/test-assertions))
- Make the tests reliable and maintainable

## Setup

### Requirements
- Node.js v22+
- npm

### Quick Start
```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm run test

# Run a specific test
npm run test tests/[filename].ts

# Debug a test (after adding .only to the test you want to debug)
npm run test -- --debug
```

## Need Help?
If you run into any technical issues during the assessment, let your interviewer know.