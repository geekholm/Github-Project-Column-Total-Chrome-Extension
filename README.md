A very simple chrome extension that sums up float values in a column labeled "Estimate (hours)" in GitHub's new project beta UI. It alerts the total to the user via javascript.

## Caveat

Only works with issues that are visible on the page. Pages outside of the current scroll window are not counted as they are removed from the DOM.

## Testing it out

It’s really easy to test a new extension in Chrome. Type “chrome://extensions” in a tab to bring up the extensions page.

Once on this page, check “Developer mode” to enable loading unpacked extensions. This will allow you to load your extension from a folder. Finally, click “Load unpacked extension” or simply drag the “Github-Project-Column-Total-Chrome-Extension” folder onto the page to load up the extension. You should immediately see the extension show up as a Browser Action with your icon in the toolbar window of the current tab.

To test out the extension, navigate to a page you want to test with. Then, go ahead and click the icon for our extension. When the HTML page comes up, click “Check this page now!” and you should immediately see the request and results from the current page being displayed.

This fork only has a tiny tweak to the originial: The column that is calculated is called simply "h" instead of "Estimate (hours)".
