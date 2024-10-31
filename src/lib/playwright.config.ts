import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: '.',
    testMatch: '**/all.test.ts',
    workers: 1,
    fullyParallel: true,
    retries: 2,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['html', { open: 'never' }],
        ['list'],
        [
            './reporters/SimpleJsonPlaywrightReporter.ts',
            { runId: process.env.RUN_ID?.toString() || '' },
        ],
    ],
    // Enable each test to take 5 minutes, default is 30s
    timeout: 300_000,
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        baseURL: process.env.BASE_URL,
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on',
        // Set the default timeout for each action to 4 minutes
        actionTimeout: 60_000,
        headless: true,
        contextOptions: {
            permissions: ['clipboard-read', 'clipboard-write'],
        },
        screenshot: 'on',
    },
    expect: {
        timeout: 59_000,
    },
    projects: [
        {
            name: 'login',
            testMatch: '**/login.test.ts',
        },
        {
            name: 'chromium',
            testIgnore: ['**/login.test.ts'],
            dependencies: ['login'],
            use: {
                ...devices['Desktop Chrome'],
                storageState: 'src/auth/login.json',
            },
        },
    ],
});
