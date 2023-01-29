// create context menu
browser.menus.create({
  title: "Copy Text Content",
  id: "copy-text-content",
  contexts: ["editable", "link", "page", "selection"]
})

function copyTarget(target) {
  if (!target) return // return if no target
  const text = target?.textContent // get textContent
  if (!text) return // return if no text to copy
  navigator.clipboard.writeText(text) // copy text
}

browser.menus.onClicked.addListener((info, tab) => {
  if (!info.menuItemId === "copy-text-content") return
  browser.scripting.executeScript({
    injectImmediately: true,
    target: { tabId: tab.id }, // target the current tab
    args: [info.targetElementId],
    func: (args) => copyTarget(browser.menus.getTargetElement(args))
  })
})