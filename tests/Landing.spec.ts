import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage';




test.describe('Registration Form', () => {
    let landingPage: LandingPage;

    test.beforeEach(async ({ page }) => {
        landingPage = new LandingPage(page);
        await landingPage.navigate('/');
        await landingPage.clickRegisterButton();
    });

    test('should register a new user successfully', async () => {
        const userData = {
            firstName: 'John',
            lastName: 'Doe',
            address: '123 Main St',
            city: 'Metropolis',
            state: 'CA',
            zipCode: '90001',
            phone: '1234567890',
            ssn: '123-45-6789',
            username: `user${Date.now()}`,
            password: 'Password123!',
            confirm: 'Password123!'
        };
        await landingPage.fillRegistrationForm(userData);
        await landingPage.submitRegistration();
        await expect(landingPage.page.locator('.title')).toContainText('Welcome');
    });
    test('should navigate to registration page when register button is clicked', async () => {
        await landingPage.clickRegisterButton();
        // Add assertions to verify navigation to registration page
        await expect(landingPage.page).toHaveURL(/.*register.htm/);
    });
});


