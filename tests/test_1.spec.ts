import {test} from '@playwright/test';

test ('login', async ({page})=>{
    await page.goto('https://www.saucedemo.com/v1/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('.btn_action').click();
    await page.waitForTimeout(5000);

});