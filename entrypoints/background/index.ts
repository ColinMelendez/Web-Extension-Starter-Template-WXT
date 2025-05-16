export default defineBackground({
  type: 'module',
  persistent: false,
  // Executed when background is loaded, CANNOT BE ASYNC
  main() {
    console.log('Hello background!', { id: browser.runtime.id });
  },
});
