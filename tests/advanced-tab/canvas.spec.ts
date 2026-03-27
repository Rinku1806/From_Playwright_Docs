// spec: specs/advanced-tab-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

function getCanvasPoint(canvasBox : any, offsetX : Number, offsetY : Number) {
  return { x: canvasBox.x + offsetX, y: canvasBox.y + offsetY };
}

test.describe('Canvas Drawing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://gauravkhurana.com/test-automation-play/');
    await page.getByRole('tab', { name: 'Advanced' }).click();
  });

  test('Draw on canvas element', async ({ page }) => {
    // 1. Advanced tab should be active and Canvas Drawing section visible
    await expect(page.getByRole('tab', { name: 'Advanced' })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByText('Canvas Drawing')).toBeVisible();

    const canvas = page.locator('canvas').first();
    await expect(canvas).toBeVisible();

    // 2. Click and drag on the canvas to draw
  //  const box = await canvas.boundingBox();
   // expect(box).not.toBeNull();
   // const start = getCanvasPoint(box, 20, 20);
   // const end = getCanvasPoint(box, 50, 50);

   // await page.mouse.move(start.x, start.y);
   // await page.mouse.down();
    //await page.mouse.move(end.x, end.y);
   // await page.mouse.up();

   const box = await canvas.boundingBox();
  const point = getCanvasPoint(box, 25, 25);  // Canvas-relative → viewport

      // ✅ Move to exact point first
      await page.mouse.move(point.x, point.y);

      // ✅ Down + Up SAME spot = DOT
      await page.mouse.down({ button: 'left' });
      await page.waitForTimeout(50);  // Tiny hold
      await page.mouse.up({ button: 'left' });
await page.getByTestId('drawing-canvas').click({
    position: {
      x: 51,
      y: 35
    }
  });
 /* await page.getByTestId('drawing-canvas').click({
    position: {
      x: 362,
      y: 141
    }
  });*/

    await page.waitForTimeout(5000);  // 10 seconds (milliseconds)

    // 3. Verify the drawing persists by pixel content and points count
    const pointsText = page.getByText(/Points drawn:/);
    await expect(pointsText).not.toHaveText('Points drawn: 0');

    const drawn = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return false;
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;
      const pixel = ctx.getImageData(200, 200, 1, 1).data;
      return pixel[3] > 0;
    });
    expect(drawn).toBe(true);
  });

  test('Clear canvas content', async ({ page }) => {
    // 1. Advanced tab should be loaded and Clear Canvas button visible
    await expect(page.getByText('Clear Canvas')).toBeVisible();

    const canvas = page.locator('canvas').first();
    const box = await canvas.boundingBox();
    expect(box).not.toBeNull();

    // 2. Draw something on the canvas first
    const drawStart = getCanvasPoint(box, 25, 25);
    const drawEnd = getCanvasPoint(box, 75, 75);
    await page.mouse.move(drawStart.x, drawStart.y);
    await page.mouse.down();
    await page.mouse.move(drawEnd.x, drawEnd.y);
    await page.mouse.up();

    await expect(page.getByText(/Points drawn:/)).not.toHaveText('Points drawn: 0');

    // 3. Click the 'Clear Canvas' button and verify cleared
    await page.getByText('Clear Canvas').click();
    await expect(page.getByText('Points drawn: 0')).toBeVisible();

    const cleared = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return false;
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;
      const pixel = ctx.getImageData(60, 60, 1, 1).data;
      return pixel[3] === 0;
    });
    expect(cleared).toBe(true);
  });

  test('Multiple drawings on canvas', async ({ page }) => {
    // 1. Advanced tab should be loaded and canvas cleared
    await page.getByText('Clear Canvas').click();
    await expect(page.getByText('Points drawn: 0')).toBeVisible();

    const canvas = page.locator('canvas').first();
    const box = await canvas.boundingBox();
    expect(box).not.toBeNull();

    // 2. Draw multiple strokes on the canvas
    const firstStrokeStart = getCanvasPoint(box, 30, 30);
    const firstStrokeEnd = getCanvasPoint(box, 90, 30);
    await page.mouse.move(firstStrokeStart.x, firstStrokeStart.y);
    await page.mouse.down();
    await page.mouse.move(firstStrokeEnd.x, firstStrokeEnd.y);
    await page.mouse.up();

    const secondStrokeStart = getCanvasPoint(box, 30, 60);
    const secondStrokeEnd = getCanvasPoint(box, 90, 60);
    await page.mouse.move(secondStrokeStart.x, secondStrokeStart.y);
    await page.mouse.down();
    await page.mouse.move(secondStrokeEnd.x, secondStrokeEnd.y);
    await page.mouse.up();

    // 3. Verify all drawings are displayed together
    await expect(page.getByText(/Points drawn:/)).not.toHaveText('Points drawn: 0');

    const multiDrawn = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return false;
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;
      const pixel1 = ctx.getImageData(60, 30, 1, 1).data;
      const pixel2 = ctx.getImageData(60, 60, 1, 1).data;
      return pixel1[3] > 0 && pixel2[3] > 0;
    });
    expect(multiDrawn).toBe(true);
  });
});

