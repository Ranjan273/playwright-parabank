// tests/Login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { VALID_USERNAME, VALID_PASSWORD, INVALID_USERNAME, INVALID_PASSWORD } from '../utils/constants';

test.describe('Login Functionality', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate('/');
  });

  test('should login with valid credentials', async () => {
    await loginPage.login(VALID_USERNAME, VALID_PASSWORD);
    // Add assertions to verify successful login
    await expect(loginPage.page).toHaveURL(/.*overview.htm/);
  });

  test('should show an error message with invalid credentials', async () => {
    await loginPage.login(INVALID_USERNAME, INVALID_PASSWORD);
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('The username and password could not be verified.');
  });
});