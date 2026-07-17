import { test, expect } from '@playwright/test';

const pagesToCheck = ['https://google.com'];

for (const path of pagesToCheck) {
  test(`@heartbeat page ${path} opens successfully`, async ({ page }) => {
    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle("Google");
    await expect(page.locator('input[value="I\'m Feeling Lucky"]:not([jsaction])')).toBeVisible();
  });
}