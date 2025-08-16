import { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });
const config: PlaywrightTestConfig = {
  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: './tests',

  // The base URL to use in actions like `await page.goto('/')`
  use: {
    baseURL: process.env.BASE_URL,
    headless: false, // Run tests in a headed browser
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000, // 10 seconds
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    /* {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    }, */
  ],

  // Reporter to use. See https://playwright.dev/docs/test-reporters
  reporter: [['html', { open: 'never' }]],
};
export default config;