import { expect, Locator, test } from '@playwright/test';

test.setTimeout(240000);

test('selecting UK from the Line Chart list and getting tooltip info', async ({ page }) => {
  await page.goto('https://ourworldindata.org/explorers/covid');

  // Select the Line chart tab
  // Unselect any pre-selected countries
  // Type "United Kingdom" into the country selector and select it
  await expect(page.getByRole('tab', { name: 'Line' })).toBeVisible();
  await expect(page.locator('[data-test="reject"]')).toBeVisible();
  await page.locator('[data-test="reject"]').click();
  await expect(page.getByRole('tab', { name: 'Line' })).toBeVisible();
  await page.getByRole('tab', { name: 'Line' }).click();
  await expect(page.getByText('Clear selection')).toBeVisible();
  await page.getByText('Clear selection').click();
  await page.getByText('Clear selection').click();
  await page.getByRole('textbox', { name: 'Type to add a country or' }).fill('United Kingdom');
  await page.locator('.input-container').click();
  
  // Select the rectangle (rect) inside the chart.
  // Get its position and dimensions (boundingBox) for mouse operations.
  // Stop the script if the chart isn’t found.
  const rect = page.locator('.Lines > rect');
  const box = await rect.boundingBox();
  if (!box) throw new Error('Chart rect not found');

  // To avoid duplicate tooltip logs.
  const seen = new Set<string>();

  // To control hover resolution across the chart; smaller = more precise but slower.
  const step = 1;

  // To prevent tooltip parsing loop from crashing when some elements are missing.
  const safeText = async (locator: Locator) => {
      if (await locator.count() === 0) return null;
      return (await locator.first().textContent())?.trim() || null;
  }

  // Loops horizontally across the chart rectangle (box) from left (box.x) to right (box.x + box.width).
  // step controls how many pixels the mouse moves each iteration. Smaller step = more precise, slower.
  // x = current horizontal position.
  // y = vertical position, here midway in the chart rectangle (box.y + box.height / 2) — roughly where the line chart is.
  for (let px = box.x; px <= box.x + box.width; px += step) {
    const x = px;
    const y = box.y + box.height / 2;

    // Moves the mouse to (x, y) on the page.
    //Waits 80ms for the tooltip to appear (many charts only show tooltips after a short delay).
    await page.mouse.move(x, y);
    await page.waitForTimeout(80);

    // Selects the tooltip container element.
    // tooltip.isVisible() checks if the tooltip is currently displayed.
    // If it’s not visible, continue skips to the next loop iteration (next pixel).
    const tooltip = page.locator('.tooltip-container .Tooltip');
    if (!(await tooltip.isVisible())) continue;

    // title → usually the date or main label of the point.
    // subtitle → usually the series label or units.
    // ?.trim() || null ensures that missing content returns null instead of throwing errors.
    const title = (await tooltip.locator('.title').textContent())?.trim() || null;
    const subtitle = (await tooltip.locator('.subtitle span').textContent())?.trim() || null;

    // Tooltip may have multiple series in a table.
    //rows locates all <tr> elements (table rows) in the tooltip.
    // rowCount = number of rows to iterate over.
    const rows = tooltip.locator('table.series-list tr');
    const rowCount = await rows.count();

    // Loops over each row in the tooltip table.
    //Uses safeText to safely extract text content
    // Pushes each row’s data into the series array as an object.
    const series = [];
    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);

      const name = await safeText(row.locator('.series-name'));
      const parenthetical = await safeText(row.locator('.parenthetical'));
      const value = await safeText(row.locator('.series-value'));

      series.push({ name, parenthetical, value });
    }

    // To collect all the tooltip information from the current hover point into a single object.
    const result = { title, subtitle, series };

    // To avoid duplicate tooltip logs.
    // Converts each tooltip into a string (key) to track uniqueness in a Set.
    // Only prints new, unique tooltip data to the console.
    const key = JSON.stringify(result);
    if (!seen.has(key)) {
      console.log(result);
      seen.add(key);
    }
  }

  await page.close();
});
