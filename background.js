chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "4k-image-search",
    title: "Search 4K images of '%s'",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "4k-image-search") {
    const query = encodeURIComponent(info.selectionText);
    const url = `https://www.google.com/search?q=${query}+imagesize:3840x2160&tbm=isch`;
    chrome.tabs.create({ url });
  }
});
