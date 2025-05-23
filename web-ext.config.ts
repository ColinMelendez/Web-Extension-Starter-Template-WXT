import { defineWebExtConfig } from "wxt";

export default defineWebExtConfig({
  // IMPORTANT: install the puppeteer browser binaries and specify the paths here for development
  binaries: {
    chrome: '/path/to/chrome', // Use Chrome For Testing instead of regular Chrome
    firefox: '/path/to/firefox', // Use Firefox Developer Edition instead of regular Firefox
    // ------ other browsers can be included in the same format as above --------
    // edge: '/path/to/edge', // Open MS Edge when running "wxt -b edge"
  },
});
