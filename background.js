chrome.runtime.onInstalled.addListener(function() {
    // Set default reminder interval and options when the extension is installed
    chrome.storage.sync.set({
        interval: 30,
        visual: true,
        audio: false,
        customMessage: false,
        customMessageText: ""
    });
});
