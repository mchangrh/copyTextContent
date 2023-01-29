# Copy Text Content
Copies selected element's [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext)

## Why not just Ctrl + C?

Because it's inconsistent between browsers
 - Chrome will observe `text-transform` but FF will not
 - Some sites will hijack and/ or prevent copy events - this might get around that?

[Demo](https://mchangrh.github.io/copyTextContent/)

## Why does it need permission for all sites?

Because chrome is **still** missing methods to get the contextMenu targets [[1]](https://bugs.chromium.org/p/chromium/issues/detail?id=39507) [[2]](https://bugs.chromium.org/p/chromium/issues/detail?id=60758)

## Version Comparison
|  | Firefox | Chrome | Chrome (Lite) |
|---|---|---|---|
| Can copy from any element | ✅ | ✅ | ❌ |
| Can copy from selected elements | ✅ | ✅ | ✅ |
| Needs permission for all sites | ❌ | ✅ | ❌ |

It solves an annoying problem in my life, I hope it helps with yours ❤️

---

Icon by [ionicons](https://ionic.io/ionicons) licenced under MIT