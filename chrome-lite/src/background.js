// create context menu
chrome.contextMenus.create({
  title: "Copy Text Content",
  id: "copy-text-content",
  contexts: ["selection"] // only selection since we can only get selection without using content scripts
})

function onClickedListener(info, tab) {
  if (!info.menuItemId === "copy-text-content") return // check if correct menu item
  chrome.scripting.executeScript({
    injectImmediately: true,
    target: { tabId: tab.id }, // target the current tab
    func: () => {
      const target = document.getSelection()?.anchorNode
      if (!target) return // return if no target
      const text = target?.textContent?.trim() // get textContent
      if (!text) return // return if no text to copy
      navigator.clipboard.writeText(text) // copy text
    }
  })
}

chrome.contextMenus.onClicked.addListener(onClickedListener)