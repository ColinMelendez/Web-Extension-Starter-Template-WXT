export default defineContentScript({
  matches: ['*://*.google.com/*'],
  main() {
    console.log('hello from entrypoints/content/index.ts');
  },
});
