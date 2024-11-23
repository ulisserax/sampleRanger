import { test, expect, Page } from '@playwright/test';

export async function run(page: Page, params) {
    await page.setViewportSize({ width: 1440, height: 1080 });
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.waitForLoadState();

    //// PLAYWRIGHT_STEP_START id=67410df93c095c7f492df99e
    ////      Description: Type task names on the input field with placeholder 'What needs to be done?'

    const newTaskInputField = page.getByPlaceholder('What needs to be done?');
    await newTaskInputField.waitFor({ state: 'visible', timeout: 20000 });
    await newTaskInputField.click();
    await page.keyboard.type('buy apples', { delay: 50 });
    await page.keyboard.press('Enter');

    //// PLAYWRIGHT_STEP_START id=67410e183c095c7f492df99f
    ////      Description: // Add task on input field with placeholder 'What needs to be done?'

    const newTaskInputField2 = page.getByPlaceholder('What needs to be done?');
    await newTaskInputField2.waitFor({ state: 'visible', timeout: 20000 });
    await newTaskInputField2.click();
    await page.keyboard.type('clean house', { delay: 50 });
    await page.keyboard.press('Enter');

    //// PLAYWRIGHT_STEP_START id=67410e333c095c7f492df9a0
    ////      Description: // Add 'send package' on input field with placeholder 'What needs to be done?'

    const todoInputField = page.getByPlaceholder('What needs to be done?');
    await todoInputField.waitFor({ state: 'visible', timeout: 20000 });
    await todoInputField.click();
    await page.keyboard.type('send package', { delay: 50 });
    await page.keyboard.press('Enter');

    //// PLAYWRIGHT_STEP_START id=67410e4e3c095c7f492df9a1
    ////      Description: Add task on input field with placeholder 'What needs to be done?'

    const newTaskInputField3 = page.getByPlaceholder('What needs to be done?');
    await newTaskInputField3.waitFor({ state: 'visible', timeout: 20000 });
    await newTaskInputField3.click();
    await page.keyboard.type('mow lawn', { delay: 50 });
    await page.keyboard.press('Enter');

    //// PLAYWRIGHT_STEP_START id=67410e663c095c7f492df9a2
    ////      Description: Click on the checkbox for 'buy apples'

    const buyApplesCheckboxLocator = page.getByRole('textbox');
    await buyApplesCheckboxLocator.waitFor({
        state: 'visible',
        timeout: 20000,
    });
    await buyApplesCheckboxLocator.click();

    //// PLAYWRIGHT_STEP_START id=67410e7f3c095c7f492df9a3
    ////      Description: Click on the 'clean house' checkbox

    const cleanHouseCheckbox = page.getByRole('textbox');
    await cleanHouseCheckbox.waitFor({ state: 'visible', timeout: 20000 });
    await cleanHouseCheckbox.click();

    //// PLAYWRIGHT_STEP_START id=67410e923c095c7f492df9a4
    ////      Description: Check the checkbox for the item 'send package'

    const sendPackageCheckbox = page.getByRole('textbox');
    await sendPackageCheckbox.waitFor({ state: 'visible', timeout: 20000 });
    await sendPackageCheckbox.click();

    //// PLAYWRIGHT_STEP_START id=67410ea53c095c7f492df9a5
    ////      Description: Click on the 'mow lawn' checkbox

    const mowLawnCheckbox = page.getByRole('textbox');
    await mowLawnCheckbox.waitFor({ state: 'visible', timeout: 20000 });
    await mowLawnCheckbox.click();

    //// PLAYWRIGHT_STEP_START id=67410eb93c095c7f492df9a6
    ////      Description: Click on 'Clear completed' button to remove all completed tasks.

    const clearCompletedButton = page.getByRole('button', {
        name: 'Clear completed',
    });
    await clearCompletedButton.waitFor({ state: 'visible', timeout: 20000 });
    await clearCompletedButton.click();
}
