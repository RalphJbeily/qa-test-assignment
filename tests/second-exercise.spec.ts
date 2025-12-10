import { test, expect } from '@playwright/test';

test('the user is able to checkout the cart successfully', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Locate the cart object and verify it is empty
  await expect(page.getByRole('link', { name: ' Cart' })).toBeVisible();
  await page.getByRole('link', { name: ' Cart' }).click();
  await expect(page.getByText('Cart is empty!')).toBeVisible();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('link', { name: 'here' })).toBeVisible();
  await page.getByRole('link', { name: 'here' }).click();

  await page.waitForTimeout(1000);
  
  // Add the "Premium Polo T-Shirts" to the cart using the seach bar by name
  await expect(page.getByRole('textbox', { name: 'Search Product' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('Premium Polo T-Shirts');
  await expect(page.locator('#submit_search')).toBeVisible();
  await page.locator('#submit_search').click();
  await page.waitForTimeout(1000);
  await expect(page.getByText('Add to cart').nth(1)).toBeVisible();
  await page.getByText('Add to cart').nth(1).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  await page.waitForTimeout(1000);

  // Add the "Soft Stretch Jeans" to the cart using the seach bar by name
  await expect(page.getByRole('textbox', { name: 'Search Product' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('Soft Stretch Jeans');
  await expect(page.locator('#submit_search')).toBeVisible();
  await page.locator('#submit_search').click();
  await page.waitForTimeout(1000);
  await expect(page.getByText('Add to cart').nth(1)).toBeVisible();
  await page.getByText('Add to cart').nth(1).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();

  await page.waitForTimeout(1000);

  // Add the "Stylish Dress" to the cart using the seach bar by name
  await expect(page.getByRole('textbox', { name: 'Search Product' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search Product' }).click();
  await page.getByRole('textbox', { name: 'Search Product' }).fill('Stylish Dress');
  await expect(page.locator('#submit_search')).toBeVisible();
  await page.locator('#submit_search').click();
  await page.waitForTimeout(1000);
  await expect(page.getByText('Add to cart').nth(1)).toBeVisible();
  await page.getByText('Add to cart').nth(1).click();

  await page.waitForTimeout(1000);

  // View the cart, validate that each product is added and proceed to checkout
  await expect(page.getByRole('link', { name: 'View Cart' })).toBeVisible();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.waitForTimeout(1000);
  await expect(page.getByRole('link', { name: 'Premium Polo T-Shirts' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Soft Stretch Jeans' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Stylish Dress' })).toBeVisible();
  await page.getByText('Proceed To Checkout').click();
  await expect(page.getByText(' Checkout Register / Login')).toBeVisible();

  await page.waitForTimeout(1000);

  await page.close();
});
