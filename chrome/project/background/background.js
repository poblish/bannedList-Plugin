var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28859929-1']);
_gaq.push(['_trackPageview']);

(function() { // See: http://code.google.com/chrome/extensions/tut_analytics.html
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

var g_GlobalTwitterIntervalId = null;

    $(document).ready(function () {
        chrome.extension.onMessage.addListener( function( request, sender, sendResponse) {
            if (request.method == "getOptions") {
                if ( localStorage.length == 0) {    // Set defaults!
                    localStorage["extras.politics.andrew1"] = true;
                }

                if (/http.*twitter.com/.test( sender.tab.url )) {
                    g_GlobalTwitterIntervalId = setInterval( function() {
                        if ( g_GlobalTwitterIntervalId != null) {
                            // console.log('Clearing... ' + g_GlobalTwitterIntervalId);
                            clearInterval(g_GlobalTwitterIntervalId);
                        }
                        sendResponse({method: "getOptions", /* url: sender.tab.url, */ options: localStorage});
                        // console.log('Sending... ' + g_GlobalTwitterIntervalId);
                    }, 2500);
                    return true;  // "Return true from the event listener if you wish to call sendResponse after the event listener returns." @ http://bit.ly/OJge9v
                }
                else /* Non Twitter can update now! */ {
                    sendResponse({method: "getOptions", /* url: sender.tab.url, */ options: localStorage});
                }
            }
            else if (request.method == "notify") {
                var theNotif = webkitNotifications.createNotification('../img/icon48.png', request.heading, request.msg);
                theNotif.show();
            }
            else if (request.method == "setBadge") {
                if ( request.score <= 0) {
                    resetBadge(sender);
                }
                else {
                    if ( request.score <= 3) {
                        chrome.browserAction.setBadgeBackgroundColor({ color: [255,127,0, 255], tabId: sender.tab.id});
                    }
                    else if ( request.score <= 8) {
                        chrome.browserAction.setBadgeBackgroundColor({ color: [255,70,70, 255], tabId: sender.tab.id});
                    }
                    else {
                        chrome.browserAction.setBadgeBackgroundColor({ color: [220,0,0, 255], tabId: sender.tab.id});
                    }

                    localStorage['$stats.' + sender.tab.id + '.score'] = request.score;
                    localStorage['$stats.' + sender.tab.id + '.url'] = request.url;

                    chrome.browserAction.setBadgeText({ text: '' + request.score, tabId: sender.tab.id});
                    chrome.browserAction.setTitle({ title: 'BannedList Score for this page: ' + request.score, tabId: sender.tab.id});
                }
            }
            else if (request.method == "resetBadge") {
                resetBadge(sender);
            }
            else if (request.method == "getDetailsForPopup") {
                sendResponse({method: "detailsForPopupResponse", score: localStorage['$stats.' + request.tabId + '.score'], url: localStorage['$stats.' + request.tabId + '.url']});
            }
            else {
                sendResponse({}); // snub them.
            }
        });

        function clickSubmit( inInfo, inTab) {
	    chrome.tabs.sendMessage( inTab.id, {
	        method: "showSubmitOptions",
	        pageUrl: inInfo.pageUrl,
		phrase: inInfo.selectionText
	    }, function (response) {
	        if ( response == null) {
                    alert('Error, null response!');
                } else if ( response.ok != "true") {
	            alert('Error!');
	        }
	    });
        }

        function submitFallacy( inInfo, inTab) {
            chrome.tabs.sendMessage( inTab.id, {
                method: "showSubmitFallacyOptions",
                pageUrl: inInfo.pageUrl.split('#')[0],
                selection: inInfo.selectionText,
                selectionHash: inInfo.selectionText.hashCode()
            }, function (response) {
                if ( response == null) {
                    alert('Error, null response!');
                } else if ( response.ok != "true") {
                    alert('Error!');
                }
            });
        }

        String.prototype.hashCode = function(){ // See: http://bit.ly/KUqGwI
            var hash = 0;
            if (this.length == 0) return hash;
            var numCharsToCheck = /* (AGR) Restrict to first... */ ( this.length > 200) ? 200 : this.length;
            for (i = 0; i < numCharsToCheck; i++) {
                c = this.charCodeAt(i);
                hash = ((hash<<5)-hash)+c;
                hash = hash & hash; // Convert to 32bit integer
            }
            return hash;
        }

        function resetBadge(inSender) {
            chrome.browserAction.setBadgeText({ text: '', tabId: inSender.tab.id});
            chrome.browserAction.setTitle({ title: 'BannedList Score for this page: 0', tabId: inSender.tab.id});
            localStorage.removeItem('$stats.' + inSender.tab.id + '.score');
            localStorage.removeItem('$stats.' + inSender.tab.id + '.url');
        }

        if ( localStorage['displayTermCount'] == null) {
            localStorage['displayTermCount'] = 'false';
        }

        var theHOVal = localStorage['highlightOptions'];
        var optValues = ['h_all', 'h_first', 'u_all', 'disable'];

        chrome.contextMenus.create({"title": 'Submit phrase "%s"...', "contexts":['selection'], "onclick": clickSubmit});
        chrome.contextMenus.create({"title": 'Submit as Logical Fallacy...', "contexts":['selection'], "onclick": submitFallacy});
        chrome.contextMenus.create({"type": 'separator', "contexts":['page','selection']});
        var firstHighlightMenuId = chrome.contextMenus.create({"title": 'Highlight all matches', "type": 'radio', "checked": (theHOVal === optValues[0]), "contexts":['page','selection'], "onclick": setHighlightOptions});
        chrome.contextMenus.create({"title": 'Highlight first match, underline the rest', "type": 'radio', "checked": (theHOVal == null || theHOVal === optValues[1]), "contexts":['page','selection'], "onclick": setHighlightOptions});
        chrome.contextMenus.create({"title": 'Underline all matches', "type": 'radio', "checked": (theHOVal === optValues[2]), "contexts":['page','selection'], "onclick": setHighlightOptions});
        chrome.contextMenus.create({"title": 'Disable all highlighting', "type": 'radio', "checked": (theHOVal === optValues[3]), "contexts":['page','selection'], "onclick": setHighlightOptions});
//      chrome.contextMenus.create({"type": 'separator', "contexts":['page','selection']});
//      chrome.contextMenus.create({"title": 'Display count for each term?', "type": 'checkbox', "checked": ( localStorage['displayTermCount'] === 'true'), "contexts":['page','selection'], "onclick": toggleDisplayTermCounts});

        function setHighlightOptions( inInfo, inTab) {
            localStorage['highlightOptions'] = optValues[ inInfo.menuItemId - firstHighlightMenuId ];
            chrome.tabs.sendMessage( inTab.id, {method: "getOptions", options: localStorage}, function (response) {});
        }

        function toggleDisplayTermCounts( inInfo, inTab) {
            localStorage['displayTermCount'] = !inInfo.wasChecked;
            chrome.tabs.sendMessage( inTab.id, {method: "getOptions", options: localStorage}, function (response) {});
        }
    });
