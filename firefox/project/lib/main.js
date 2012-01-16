const widgets = require("widget");

var data = require('self').data;
// const tabs = require("tabs");


var widget = widgets.Widget({
  id: "bannedListLink",
  label: "#BannedList Highlighter",
  contentURL: data.url("img/icon16.png") /* ,
  onClick: function() {
    tabs.open("http://www.mozilla.org/");
  } */
});

var pageMod = require("page-mod");
pageMod.PageMod({
  include: ['*'],
  contentScriptWhen: "end",
  contentScriptFile: [ data.url("js/jquery-1.7.1.min_plus_highlight.js"), data.url("js/bannedList.js") ],
});