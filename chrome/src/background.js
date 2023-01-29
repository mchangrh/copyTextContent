// create context menu
chrome.contextMenus.create({
  title: "Copy Text Content",
  id: "copy-text-content",
  contexts: ["editable", "link", "page", "selection"]
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!info.menuItemId === "copy-text-content") return // check if correct menu item
  chrome.tabs.sendMessage(tab.id, 'copy-text-content')
})