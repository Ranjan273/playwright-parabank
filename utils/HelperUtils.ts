import { Page } from '@playwright/test';

export class HelperUtils {
	/**
	 * Waits for the page to be fully loaded (readyState === 'complete').
	 */
	static async waitForLoad(page: Page, timeout: number = 10000): Promise<void> {
		await page.waitForFunction(() => document.readyState === 'complete', null, { timeout });
	}
}
