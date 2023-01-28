let lastTarget = null
addEventListener('contextmenu', (event) =>
  lastTarget = event.target ?? event.relatedTarget)

// listen for messages from the background script
chrome.runtime.onMessage.addListener((message) => {
  if (!message === 'copy-text-content') return
  const text = lastTarget?.textContent
  if (!text) return
  navigator.clipboard.writeText(text)
})