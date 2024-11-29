import { test, expect, Page } from '@playwright/test';
import { before, beforeEach } from 'node:test';

export async function run(page: Page, params) {

        await page.setViewportSize({ width: 1440, height: 1080 });
        await page.goto('https://demo.playwright.dev/todomvc/#/');
        await page.waitForLoadState();

        //// PLAYWRIGHT_STEP_START id=67410d2f3c095c7f492df998
        ////      Description: Type 'buy apples' on input field with placeholder 'What needs to be done?'
        const todoInputField = page.getByPlaceholder('What needs to be done?');
        await todoInputField.waitFor({ state: 'visible', timeout: 20000 });
        await todoInputField.click();
        await page.keyboard.type('buy apples', { delay: 50 });
        await page.keyboard.press('Enter');
    
    
        //// PLAYWRIGHT_STEP_START id=67410d4c3c095c7f492df999
        ////      Description: Type 'clean house' on input field with placeholder 'What needs to be done?'
        const todoInputField2 = page.getByPlaceholder('What needs to be done?');
        await todoInputField2.waitFor({ state: 'visible', timeout: 20000 });
        await todoInputField2.click();
        await page.keyboard.type('clean house', { delay: 50 });
        await page.keyboard.press('Enter');
  
        //// PLAYWRIGHT_STEP_START id=67410d4c3c095c7f492df999
        ////      Description: Type 'clean house' on input field with placeholder 'What needs to be done?'

        const todoInputField2 = page.getByPlaceholder('What needs to be done?');
        await todoInputField2.waitFor({ state: 'visible', timeout: 20000 });
        await todoInputField2.click();
        await page.keyboard.type('clean house', { delay: 50 });
        await page.keyboard.press('Enter');

        //// PLAYWRIGHT_STEP_START id=67410d693c095c7f492df99a
        ////      Description: Type todo item on input field with placeholder 'What needs to be done?'

        const todoInputField3 = page.getByPlaceholder('What needs to be done?');
        await todoInputField3.waitFor({ state: 'visible', timeout: 20000 });
        await todoInputField3.click();
        await page.keyboard.type('send package', { delay: 50 });
        await page.keyboard.press('Enter');

        //// PLAYWRIGHT_STEP_START id=67410d843c095c7f492df99b
        ////      Description: // Type 'mow lawn' on input field with placeholder 'What needs to be done?'

        const todoInputField4 = page.getByPlaceholder('What needs to be done?');
        await todoInputField4.waitFor({ state: 'visible', timeout: 20000 });
        await todoInputField4.click();
        await page.keyboard.type('mow lawn', { delay: 50 });
        await page.keyboard.press('Enter');
}
