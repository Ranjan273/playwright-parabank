// pages/BasePage.ts
import { Page } from '@playwright/test';

export class BasePage {
  
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string) {
    await this.page.goto(path);
  }
  // Tear down method to close the page/browser
  async tearDown() {
    await this.page.close();
  }
}