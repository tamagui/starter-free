import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load without client-side errors', async ({ page }) => {
    const errors: string[] = []

    // Collect console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    // Collect page errors
    page.on('pageerror', (error) => {
      errors.push(error.message)
    })

    // Navigate to home page
    await page.goto('/')

    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle')

    // Check that the page has loaded
    await expect(page).toHaveTitle(/Tamagui/)

    // Verify no errors occurred
    expect(errors).toEqual([])
  })

  test('should navigate to User page', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    // Look for a link to user page
    const userLink = page.getByRole('link', { name: /user/i })
    if ((await userLink.count()) > 0) {
      await userLink.click()
      await page.waitForLoadState('networkidle')

      // Verify we're on the user page
      await expect(page).toHaveURL(/\/user/)
    }
  })
})
