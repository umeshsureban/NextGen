import puppeteer from 'puppeteer';

const puppeteerPath = 'C:/Users/nateh/AppData/Local/Temp/puppeteer-test/.local-chromium/win64-1331010/chrome-win/chrome.exe';
const cacheDir = 'C:/Users/nateh/.cache/puppeteer/';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: puppeteerPath,
    headless: true,
  });

  const page = await browser.newPage();
  // Set mobile viewport (iPhone SE)
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/vedic-maths2.html');
  
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const time = new Date().toTimeString().split(' ')[0].replace(/:/g, '');
  const filename = `temporary screenshots/screenshot-77-mobile-solution.png`;
  
  await page.screenshot({ path: filename, fullPage: true });
  console.log(`Mobile screenshot saved: ${filename}`);

  await browser.close();
})();
