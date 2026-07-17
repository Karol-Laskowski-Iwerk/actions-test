import { test, expect } from '@playwright/test';

const pagesToCheck = ['/'];

for (const path of pagesToCheck) {
  test(`page ${path} opens successfully`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(/.*/);
  });
}