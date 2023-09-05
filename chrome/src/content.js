let lastTarget = null

// add event listener
addEventListener('contextmenu', (event) =>
  lastTarget = event.target ?? event.relatedTarget)

function copyTarget(target) {
  if (!target) return // return if no target
  const text = target?.textContent?.trim() // get textContent
  if (!text) return // return if no text to copy
  navigator.clipboard.writeText(text) // copy text
}

// listen for messages from the background script
chrome.runtime.onMessage.addListener((message) => {
  if (!message === 'copy-text-content') return
  copyTarget(lastTarget)
})