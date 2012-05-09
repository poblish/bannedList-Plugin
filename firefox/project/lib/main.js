const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
Cu.import("resource://gre/modules/AddonManager.jsm");  // Import so we can get the Addon object that allows us to load CSS

const { Trait } = require("traits");
const widgets = require("widget");
const badges = require("BadgedWidget");

const k_WidgetBadgeOpacity = '1';

var self = require("self");
var data = self.data;
var notifications = require("notifications");

AddonManager.getAddonByID( /* Our Id: */ self.id, function(addon) {
    loadStyles( addon, ["bannedList","bootstrap_content.min"]);
});

////////////////////////////////////////////////////////////////////////////////

var contextMenu = require("context-menu");

var theSubmitMenuIten = contextMenu.Item({
    label: "Submit #BannedList phrase...",
    image: data.url("img/icon16.png"),
    // Show this item when a selection exists.
    context: contextMenu.SelectionContext(),
    contentScriptFile: [ data.url("js/jquery-1.7.1.min_plus_highlight.js"), data.url("js/bootstrap.min.js"), /* onClick method is in... */ data.url("js/contentSupport.js") ],
    onMessage: function(inMsg) {
        if ( inMsg.kind == 'submittedNotif') {
	    notifications.notify({ title: "#BannedList says...", text: inMsg.msg, data: "", onClick: function (data) {} });
	}
    }
});

////////////////////////////////////////////////////////////////////////////////

var theResultsPanel = require("panel").Panel({
  width: 430,
  height: 355,
  contentScriptFile: data.url("js/jquery-1.7.1.min_plus_highlight.js"),    // Needed for JQuery '$' to work below.
  contentScript: "self.port.on( 'updatePanel', function(inStats) {" +
		"    if ( inStats.score > 0 && inStats.url != null) {" +
		"         $('a#twitterUrl').attr('href', 'https://twitter.com/intent/tweet?hashtags=' + 'BannedListScore' +" +
		"	        '%2C&source=tweetbutton&text=' + encodeURIComponent('I found a page with a BannedList score of ') + inStats.score + encodeURIComponent(': ') +" +
		"	        inStats.url + encodeURIComponent(' - via') + '&url=' + encodeURIComponent('http://bit.ly/HheIf2'));" +
		"         $('a#twitterUrl').removeClass('disabled');" +    // Remove any 'disabled' class we added in the past
		"         $('a#twitterUrl').off('click');" +		   // Remove any 'preventDefault' handlers we added if disabled in the past
		"     } else {" +
		"         $('a#twitterUrl').addClass('disabled');" +
		"         $('a#twitterUrl').attr( 'title', 'Sorry, no BannedList results to tweet!');" +
		"         $('a#twitterUrl').click( function(e) { e.preventDefault(); });" +  // i.e. do *nothing* when clicked
		"    }" +
		"    $('a').click( function() { self.postMessage('closeButton'); });" +
		"});",
  contentURL: data.url("popup/shareResults.html"),
  onMessage: function(message) {
    if ( message == "closeButton") {
      theResultsPanel.hide();
    }
  }
});

var widget = badges.BadgedWidget({
  id: "bannedListLink",
  label: "#BannedList Highlighter",
  contentURL: data.url("img/icon16.png"),
  panel: theResultsPanel,
  width: 50
});

////////////////////////////////////////////////////////////////////////////////

var ss = require("simple-storage");
ss.storage.tabBadgeData = {};  // Yes (I think...), initialise each time the app starts / FF starts
ss.storage.tabStatsData = {};  // Yes (I think...), initialise each time the app starts / FF starts

////////////////////////////////////////////////////////////////////////////////

var tabs = require("tabs");
tabs.on('activate', function(tab) {
  var theBadgeData = ss.storage.tabBadgeData[ tab.url ];
  var theBadgeDataToUse = ( theBadgeData != null) ? theBadgeData : getEmptyBadgeRecord();
  var theStats = ss.storage.tabStatsData[ tab.url ];
  var theStatsToUse = ( theStats != null) ? theStats : getEmptyStatsRecord();

  // console.log('Tab ' + tab + ' activated, with badge ' + theBadgeDataToUse + ' and stats: ' + theStatsToUse);

  updateBadgeAndPanelForTab( tab.url, theBadgeDataToUse, theStatsToUse);
});

function getEmptyBadgeRecord() {
  return { text: '', color: '', textColor: 'white', opacity: k_WidgetBadgeOpacity };
}

function getEmptyStatsRecord() {
  return {score: 0, url: null};
}

function setBadgeDetailsForTab( inUrl, inBadgeData, inStats) {
  ss.storage.tabBadgeData[inUrl] = inBadgeData;
  ss.storage.tabStatsData[inUrl] = inStats;

  updateBadgeAndPanelForTab( inUrl, inBadgeData, inStats);
}

function updateBadgeAndPanelForTab( inUrl, inBadgeData, inStats) {
  // console.log('Updating panel for "' + inUrl + '" to use URL "' + inStats.url + '"');
  widget.badge = inBadgeData;
  theResultsPanel.port.emit( "updatePanel", inStats);
}

////////////////////////////////////////////////////////////////////////////////

var pageMod = require("page-mod");
pageMod.PageMod({
  include: ['*'],
  contentScriptWhen: "end",
  contentScriptFile: [ data.url("js/bl-classes.js"), data.url("js/jquery-1.7.1.min_plus_highlight.js"), data.url("js/contentSupport.js"), data.url("js/bannedList.js"), data.url("js/bootstrap.min.js") ],
  onAttach: function onAttach( worker, mod) {

    worker.port.on("resetBadge", function(inUrl) {
	setBadgeDetailsForTab( inUrl, getEmptyBadgeRecord(), getEmptyStatsRecord());
    });

    worker.port.on("setBadge", function(inStats) {

	var theScoreText = '';
	var theBackColor = '';

	if ( inStats.score > 0) {
		theScoreText = '' + inStats.score;

		if ( inStats.score <= 3) {
			theBackColor = 'rgb(255,127,0)';
		}
                else if ( inStats.score <= 8) {
			theBackColor = 'rgb(255,70,70)';
                }
                else {
			theBackColor = 'rgb(220,0,0)';
                }
	}

        setBadgeDetailsForTab( inStats.url, { text: theScoreText, color: theBackColor, textColor: 'white', opacity: k_WidgetBadgeOpacity }, inStats);
    })
  }
});

/*******************************************************************************
*******************************************************************************/
function loadStyles( addon, styles) {
  let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
  let ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);

  styles.forEach( function(fileName) {
    // console.log('Trying... ' + "css/" + fileName + ".css");
    let resURI = data.url("css/" + fileName + ".css");
    let fileURI = ios.newURI( resURI, null, null);
    // console.log('Loading... ' + fileURI);
    sss.loadAndRegisterSheet( fileURI, sss.USER_SHEET);
    console.log('Loaded ' + resURI + ' OK!');
    unload( function() sss.unregisterSheet( fileURI, sss.USER_SHEET) );
  });
}

/**
 * Save callbacks to run when unloading. Optionally scope the callback to a
 * container, e.g., window. Provide a way to run all the callbacks.
 *
 * @usage unload(): Run all callbacks and release them.
 *
 * @usage unload(callback): Add a callback to run on unload.
 * @param [function] callback: 0-parameter function to call on unload.
 * @return [function]: A 0-parameter function that undoes adding the callback.
 *
 * @usage unload(callback, container) Add a scoped callback to run on unload.
 * @param [function] callback: 0-parameter function to call on unload.
 * @param [node] container: Remove the callback when this container unloads.
 * @return [function]: A 0-parameter function that undoes adding the callback.
 */
function unload(callback, container) {
  // Initialize the array of unloaders on the first usage
  let unloaders = unload.unloaders;
  if (unloaders == null)
    unloaders = unload.unloaders = [];

  // Calling with no arguments runs all the unloader callbacks
  if (callback == null) {
    unloaders.slice().forEach(function(unloader) unloader());
    unloaders.length = 0;
    return;
  }

  // The callback is bound to the lifetime of the container if we have one
  if (container != null) {
    // Remove the unloader when the container unloads
    container.addEventListener("unload", removeUnloader, false);

    // Wrap the callback to additionally remove the unload listener
    let origCallback = callback;
    callback = function() {
      container.removeEventListener("unload", removeUnloader, false);
      origCallback();
    }
  }

  // Wrap the callback in a function that ignores failures
  function unloader() {
    try {
      callback();
    }
    catch(ex) {}
  }
  unloaders.push(unloader);

  // Provide a way to remove the unloader
  function removeUnloader() {
    let index = unloaders.indexOf(unloader);
    if (index != -1)
      unloaders.splice(index, 1);
  }
  return removeUnloader;
}