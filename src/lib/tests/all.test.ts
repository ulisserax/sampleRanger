import { test } from '@playwright/test';
import { run as addTodos } from './addTodos';
import { run as clearAllTodos } from './clearAllTodos';
import { run as removeTodo } from './removeTodo';
import { run as editTodo } from './editTodo';

test.beforeAll(async () => {});

test.beforeEach(async () => {});

test('Add todos', async ({ page }) => {
    await addTodos(page, {});
});

test.skip('Edit todo', async ({ page }) => {
    await editTodo(page, {});
});

test('Remove todo', async ({ page }) => {
    await removeTodo(page, {});
});

test('Clear all todos', async ({ page }) => {
    await clearAllTodos(page, {});
});
