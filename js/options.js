let urlchangescrolldelay = document.getElementById('urlchangescrolldelay');
let urlchangepollinterval = document.getElementById('urlchangepollinterval');
let button = document.getElementById('save');
button.addEventListener('click', function() {
    chrome.storage.sync.set({
        urlchangepollinterval: urlchangepollinterval.value,
        urlchangescrolldelay: urlchangescrolldelay.value
    });
});
chrome.storage.sync.get('urlchangepollinterval', function(obj) {
    urlchangepollinterval.value = obj.urlchangepollinterval;
});
chrome.storage.sync.get('urlchangescrolldelay', function(obj) {
    urlchangescrolldelay.value = obj.urlchangescrolldelay;
});
