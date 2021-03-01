chrome.contextMenus.create({
    id: "vocab",
    title: "Log Word",
    contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener (() => {
    alert("Hi there");
});