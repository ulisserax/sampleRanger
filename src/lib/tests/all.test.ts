import { expect, test } from '@playwright/test';
import { run as addTodos } from './addTodos';
import { run as clearAllTodos } from './clearAllTodos';
import { run as removeTodo } from './removeTodo';
import { run as editTodo } from './editTodo';
import exp from 'constants';

test.beforeAll(async () => {});

test.beforeEach(async ({ page, context }) => {
    await page.setViewportSize({ width: 1440, height: 1080 });
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.waitForLoadState();
});

test('Add todos', async ({ page }) => {
    const todoInputField = page.getByPlaceholder('What needs to be done?');
    await todoInputField.waitFor({ state: 'visible', timeout: 20000 });
    await todoInputField.click();
    await page.keyboard.type('buy apples', { delay: 50 });
    await page.keyboard.press('Enter');
    expect(await page.locator('label:has-text("buy apples")').first()).toHaveText('buy apples');

    const todoInputField2 = page.getByPlaceholder('What needs to be done?');
    await todoInputField2.waitFor({ state: 'visible', timeout: 20000 });
    await todoInputField2.click();
    await page.keyboard.type('clean house', { delay: 50 });
    await page.keyboard.press('Enter');
    expect(await page.locator('label:has-text("clean house")').first()).toHaveText('clean house');

    const todoInputField3 = page.getByPlaceholder('What needs to be done?');
    await todoInputField3.waitFor({ state: 'visible', timeout: 20000 });
    await todoInputField3.click();
    await page.keyboard.type('send package', { delay: 50 });
    await page.keyboard.press('Enter');
    expect(await page.locator('label:has-text("send package")').first()).toHaveText('send package');

    const todoInputField4 = page.getByPlaceholder('What needs to be done?');
    await todoInputField4.waitFor({ state: 'visible', timeout: 20000 });
    await todoInputField4.click();
    await page.keyboard.type('mow lawn', { delay: 50 });
    await page.keyboard.press('Enter');
    expect(await page.locator('label:has-text("mow lawn")').first()).toHaveText('mow lawn');

});

test.only('Edit todo', async ({ page }) => {
    //await editTodo(page, {});
    const todoInputField = page.getByPlaceholder('What needs to be done?');
    await todoInputField.waitFor({ state: 'visible', timeout: 20000 });
    await todoInputField.click();
    await page.keyboard.type('buy apples', { delay: 50 });
    await page.keyboard.press('Enter');
    const checklistDeleteElement = await page.locator('label:has-text("buy apples")').first();
    await checklistDeleteElement.dblclick(); 
    await page.keyboard.press('Backspace');
    await page.keyboard.type('buy oranges', { delay: 50 });
    await page.keyboard.press('Enter');
    expect(await page.locator('label:has-text("buy oranges")').first()).toHaveText('buy oranges');

});

test('Remove todo', async ({ page }) => {
    await removeTodo(page, {});
});

test('Clear all todos', async ({ page }) => {
    await clearAllTodos(page, {});
});
