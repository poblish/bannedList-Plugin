// const c = require("chrome");
// var loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"].getService(Components.interfaces.mozIJSSubScriptLoader);
// loader.loadSubScript("chrome://myext/js/jquery-1.7.1.min_plus_highlight.js");

const { Trait } = require("traits");
const widgets = require("widget");
const badges = require("BadgedWidget");

var data = require('self').data;
var contextMenu = require("context-menu");

var theResultsPanel = require("panel").Panel({
  width: 320,
  height: 290,
  /* contentScriptFile: [ data.url("css/bootstrap.min.css") ], */
  contentURL: data.url("popup/shareResults.html")
});

var theSubmitMenuIten = contextMenu.Item({
    label: "Submit #BannedList phrase...",
    image: data.url("img/icon16.png"),
    // Show this item when a selection exists.
    context: contextMenu.SelectionContext(),
    // When this item is clicked, post a message back with the selection
    contentScriptFile: data.url("js/jquery-1.7.1.min_plus_highlight.js"), /* data.url("js/contentSupport.js"), */
    contentScript: 'self.on("click", function () {' +
                   '  var text = window.getSelection().toString();' +
                   '  self.postMessage(text);' +
             //      '  self.port.emit("myEvent", text);' +
                   '});',
    // When we receive a message, look up the item
    onMessage: function (item) {
      submitBannedListEntry(item);
    }
  });

var widget = badges.BadgedWidget({
  id: "bannedListLink",
  label: "#BannedList Highlighter",
  contentURL: data.url("img/icon16.png"),
  panel: theResultsPanel,
  width: 50
});

const k_WidgetBadgeOpacity = '1';

/*
widget.badge = {
  text: '',
  color: 'rgb(220,0,0)',
  textColor: 'white',
  opacity: k_WidgetBadgeOpacity
};
*/

function submitBannedListEntry( inItem ) {
    console.log('looking up "' + inItem + '"');
    try {
        showSubmissionDialog( { pageUrl: '*** FIXME ***'}, {});
    } catch (e) {
        console.log(e); // 'ERROR!');
    }
}

var pageMod = require("page-mod");
pageMod.PageMod({
  include: ['*'],
  contentScriptWhen: "end",
  contentScriptFile: [ data.url("js/jquery-1.7.1.min_plus_highlight.js"), data.url("js/contentSupport.js"), data.url("js/bannedList.js") ],
  onAttach: function onAttach( worker, mod) {
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

	widget.badge = {
	  text: theScoreText,
	  color: theBackColor,
	  textColor: 'white',
	  opacity: k_WidgetBadgeOpacity
	};
    });
  }
});

