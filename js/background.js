chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
        urlchangepollinterval: 1000,
        urlchangescrolldelay: 2500
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostSuffix: 'youtube.com',
                    pathPrefix: '/watch',
                    queryContains: 'list='
                },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});