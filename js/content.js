var url = new URL(window.location.href);

function checkUrl() {
    var newUrl = new URL(window.location.href);
    if (url.href != newUrl.href) {
        // URL was changed through JS. This means another video in the playlist is now
        // playing. We have to scroll to it. Leave some time for the playlist to be
        // rerendered so that our scrolling won't be lost.
        url = newUrl;
        chrome.storage.sync.get('urlchangescrolldelay', function(obj) {
            setTimeout(main, obj.urlchangescrolldelay);
        });
        return;
    }

    // Loop until URL gets changed.
    chrome.storage.sync.get('urlchangepollinterval', function(obj) {
        setTimeout(checkUrl, obj.urlchangepollinterval);
    });
};

function main() {
    var pl = $("#playlist");
    var items = $(pl).find("iron-list#items");

    var dstIdx = url.searchParams.get("index");

    var firstPos = -1, firstIdx = -1, listElemHeight = -1;
    var currentVideoInList = false;
    $(items).find("ytd-playlist-panel-video-renderer").each(function () {
        var pos = $(this).position().top;
        var idx = $(this).find("#container #index").text();
        if (idx == "▶") {
            idx = dstIdx;
        }
        if (pos < 0) {
            return true;
        }
        listElemHeight = $(this).outerHeight();
        if (firstPos < 0) {
            // Store the position and index of any video to use as a reference point
            // when calculating where to scroll for the current video.
            firstPos = pos;
            firstIdx = idx;
            return false;
        }
    });
    
    var minScroll = 0;
    var maxScroll = $(items).find("div#items").outerHeight() - $(items).outerHeight();
    
    var scroll = firstPos + listElemHeight * (dstIdx - firstIdx);
    scroll = Math.max(minScroll, scroll);
    scroll = Math.min(maxScroll, scroll);
    $(items).scrollTop(scroll);

    // Start listening for URL changes.
    chrome.storage.sync.get('urlchangepollinterval', function(obj) {
        setTimeout(checkUrl, obj.urlchangepollinterval);
    });
};

$(main);
