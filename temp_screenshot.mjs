import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox']
});

const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 800 });
await page.goto('http://localhost:3000/vedic-demo-v2.html', { waitUntil: 'networkidle2' });

// Scroll to video section
await page.evaluate(() => {
  document.querySelector('#video').scrollIntoView();
});

await page.waitForTimeout(1000);
await page.screenshot({ path: 'temporary screenshots/screenshot-52-video-detail.png', fullPage: false });

console.log('Video section screenshot taken');
await browser.close();
