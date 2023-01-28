chrome.contextMenus.create({
  "id": "copy-text-content",
  "title": "Copy text content",
  "contexts": ["all"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (!info.menuItemId == "copy-text-content") return
  chrome.tabs.sendMessage(tab.id, 'copy-text-content');
})