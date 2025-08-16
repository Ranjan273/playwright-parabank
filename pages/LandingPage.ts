import { Page } from '@playwright/test';
import { BasePage } from './BasePage';


export class LandingPage extends BasePage {

    async navigateToRegister() {
        await this.page.goto('/register.htm');
    }

    async fillRegistrationForm(data: {
        firstName: string;
        lastName: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        phone: string;
        ssn: string;
        username: string;
        password: string;
        confirm: string;
    }) {
        await this.page.fill('input[name="customer.firstName"]', data.firstName);
        await this.page.fill('input[name="customer.lastName"]', data.lastName);
        await this.page.fill('input[name="customer.address.street"]', data.address);
        await this.page.fill('input[name="customer.address.city"]', data.city);
        await this.page.fill('input[name="customer.address.state"]', data.state);
        await this.page.fill('input[name="customer.address.zipCode"]', data.zipCode);
        await this.page.fill('input[name="customer.phoneNumber"]', data.phone);
        await this.page.fill('input[name="customer.ssn"]', data.ssn);
        await this.page.fill('input[name="customer.username"]', data.username);
        await this.page.fill('input[name="customer.password"]', data.password);
        await this.page.fill('input[name="repeatedPassword"]', data.confirm);
    }

    async submitRegistration() {
        await this.page.click('input[value="Register"]');
    }

    constructor(page: Page) {
        super(page);
    }

    readonly registerButton = "a[href='register.htm']";
    readonly titleCopyText = ".title";
    readonly registerInfoCopyText = "div[id='rightPanel'] p";



    async clickRegisterButton() {
        await this.page.click(this.registerButton);
    }


    
}
