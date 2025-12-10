import { test, expect } from '@playwright/test';

test('output the value name of each item in Selenium dropdown', async ({ page }) => {
  await page.goto('https://www.techlistic.com/');

  await expect(page.getByRole('link', { name: 'Selenium ' })).toBeVisible();
  await page.getByRole('link', { name: 'Selenium ' }).hover();

  await page.waitForTimeout(2000);

  const result = await page.getByText('Selenium with Java Tutorial Selenium with Python Tutorial TestNG Integration').first().allTextContents();

  await page.waitForTimeout(2000);
  
  // result[0] will be
  // [
  //   '\n' +
  //   'Selenium with Java Tutorial \n' +
  //   'Selenium with Python Tutorial\n' +
  //   'TestNG Integration with Selenium\n' +
  //   'Selenium IDE: Complete Tutorial\n' +
  //   '* Practice *\n' +
  //   '25+ Selenium Commands Cheatsheet\n' +
  //   '10 Demo Websites for Practice\n' +
  //   '14 Selenium Coding Exercises\n' +
  //   '* Advanced Trends *\n' +
  //   'AI and ML in Selenium Testing\n' +
  //   '(BDD)Selenium and Cucumber Integration\n' +
  //   'Automate REST APIs with Selenium\n' +
  //   'Perform Visual Testing with Selenium\n' +
  //   'Data Driven Testing with Selenium\n' +
  //   'All Advanced Selenium Concepts\n' +
  //   'View All Blogs\n'
  // ];

  // 1. Took the first (and only) string in 'result' array
  // 2. Split the string into an array of items using newline character as the delimiter
  // 3. Trimmed whitespace from each item and filtered out any empty strings
  // 4. Removed the first item which was only a newline character
  // 5. Logged the final array of items to the console
  let items = result[0]
    .split('\n')
    .map(i => i.trim())
    .filter(i => i.length > 0);

  items = items.slice(0);

  console.log(items);

  page.close();
});
