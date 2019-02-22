# chrome-youtube-playlist-scroll-fix
This plugin calculates the position of a video in a playlist and scrolls the playlist to that position. It then regularly polls the page's URL to detect when another video of the playlist is played. This is necessary because there's usually no page reloads when clicking on another video in a playlist. It's done via AJAX. After the URL changes the plugin scrolls the playlist to the video with a configurable delay (default 2.5s). The poll interval for URL changes is also configurable (default 1s).

Improvements and bugfixes welcome.

https://github.com/t-schroeder/chrome-youtube-playlist-scroll-fix

I wanted to put this on the Chrome Web Store but Google wants a $5 fee to upload stuff there. But I don't see myself paying money to Google to be able to upload a fix for their product. Feel free to upload it yourself if you want.

## install
1. Go to **chrome://extensions**.
2. Enable **Developer mode**.
3. Click **LOAD UNPACKED**.
