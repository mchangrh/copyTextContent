browser.menus.create({
  title: "Copy Text Content",
  id: "copy-text-content",
  documentUrlPatterns: ["*://*/*"],
  contexts: ["editable", "link", "page", "selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
  console.log(info.menuItemId)
  if (!info.menuItemId === "copy-text-content") return
  console.log("pre-inject")
  console.log(info)
  browser.scripting.executeScript({
    injectImmediately: true,
    target: { tabId: tab.id },
    args: [info.targetElementId],
    func: (args) => {
      console.log(args)
      const target = browser.menus.getTargetElement(args);
      console.log(target)
      if (!target) return
      const text = target?.textContent
      if (!text) return
      navigator.clipboard.writeText(text)
    }
  });
})