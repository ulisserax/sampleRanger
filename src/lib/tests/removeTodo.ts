import { test, expect, Page } from '@playwright/test';

export async function run(page: Page, params) {
    await page.setViewportSize({ width: 1440, height: 1080 });
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.waitForLoadState();

    //// PLAYWRIGHT_STEP_START id=674110addbc142f1141d955d
    ////      Description: Type 'buy apples' on input field with placeholder 'What needs to be done?'

    const newTodoInputField = page.getByPlaceholder('What needs to be done?');
    await newTodoInputField.waitFor({ state: 'visible', timeout: 20000 });
    await newTodoInputField.click();
    await page.keyboard.type('buy apples', { delay: 50 });
    await page.keyboard.press('Enter');

    //// PLAYWRIGHT_STEP_START id=674110cadbc142f1141d955e
    ////      Description: Enter 'clean house' in the input field with placeholder 'What needs to be done?'

    const todoInputField = page.getByPlaceholder('What needs to be done?');
    await todoInputField.waitFor({ state: 'visible', timeout: 20000 });
    await todoInputField.click();
    await page.keyboard.type('clean house', { delay: 50 });
    await page.keyboard.press('Enter');

    //// PLAYWRIGHT_STEP_START id=674110e8dbc142f1141d955f
    ////      Description: Enter 'send package' in the input field with placeholder 'What needs to be done?'

    const todoInputField2 = page.getByPlaceholder('What needs to be done?');
    await todoInputField2.waitFor({ state: 'visible', timeout: 20000 });
    await todoInputField2.click();
    await page.keyboard.type('send package', { delay: 50 });
    await page.keyboard.press('Enter');

    //// PLAYWRIGHT_STEP_START id=67411103dbc142f1141d9560
    ////      Description: Enter 'mow lawn' in the input field with placeholder 'What needs to be done?'

    const todoInputField3 = page.getByPlaceholder('What needs to be done?');
    await todoInputField3.waitFor({ state: 'visible', timeout: 20000 });
    await todoInputField3.click();
    await page.keyboard.type('mow lawn', { delay: 50 });
    await page.keyboard.press('Enter');

    //// PLAYWRIGHT_STEP_START id=67411117dbc142f1141d9561
    ////      Description: Click checkbox for 'buy apples' to mark as completed or remove.

    const buyApplesCheckbox = page.getByRole('textbox');
    await buyApplesCheckbox.waitFor({ state: 'visible', timeout: 20000 });
    await buyApplesCheckbox.click();

    //// PLAYWRIGHT_STEP_START id=67411129dbc142f1141d9562
    ////      Description: Click delete button on 'buy apples' todo item

    const deleteBuyApplesButton = page
        .locator("label:has-text('buy apples') + button")
        .first();
    await deleteBuyApplesButton.waitFor({ state: 'visible', timeout: 20000 });
    await deleteBuyApplesButton.click();
}
