chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id,{file: "palantir2.js"},function() {
        if (chrome.runtime.lastError) {	
            console.error(chrome.runtime.lastError.message);
        }
    });
});