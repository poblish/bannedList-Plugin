function showSubmissionDialog( inReq, inSendResponse) {
    var newDialog = $('<div id="MenuDialog">\
    	<style type="text/css">\
    	  label.blSubmit { font-weight: bold; float: left; width: 120px; padding: 5px 8px 0 0; }\
    	  input.blText { width: 200px; }\
    	  span.blGrey { color: #999; }\
    	</style>\
	<form action="/" id="submitPhrase">\
	  <input name="url" type="hidden" value="' + inReq.pageUrl + '" />\
	  <div><label for="name" class="blSubmit">Your Name:</label><input id="name" name="name" type="text" class="blText" value="Andrew Regan" /></div>\
	  <div><label for="email" class="blSubmit">Your Email:</label><input id="email" name="email" type="text" class="blText" value="aregan@gmail.com" /></div>\
	  <div><label for="terms" class="blSubmit">Submitted Phrase:</label><input id="terms" name="terms" type="text" style="width: 280px" value="' + inReq.phrase + '" /></div>\
	  <div><label for="explanation" class="blSubmit">Why should we add this? <span class="blGrey">(optional):</span></label><textarea id="explanation" name="explanation" type="text" style="width: 280px" value="" /></div>\
	</form>\
    </div>');
    newDialog.dialog({ title: "Submit #BannedList phrase", modal: true, resizable: false, width: 450, height: 230,
	buttons: [
	    {text: "Submit", click: function() { submitPhrase(); $(this).dialog("close"); $(this).remove(); inSendResponse({ok: "true"}); }},
	    {text: "Cancel", click: function() { $(this).dialog("close"); $(this).remove(); inSendResponse({ok: "true"}); }}
	]
    });
}

function submitPhrase() {
    var theSubmittedPhrase = $("#submitPhrase").serializeArray()[3].value;  // yuk!
    if ( theSubmittedPhrase == '') {
        alert('Phrase may not be blank - please enter one.');
        return;
    }

    $.post("http://www.poblish.org/", $("#submitPhrase").serialize(), function(inData) {
        alert('Sorry, changes are not yet submitted properly [' + inData.length + ' bytes].');
    }).error( function() { /* Ignore! */ });
}

function submitAnonymousStats( inStats ) {
    if ( inStats != null && inStats['$meta'].totalMatches >= 2) {
        var theJSON = JSON.stringify(inStats);
	// console.log(theJSON);

        $.post("http://1.bannedlist-stats.appspot.com/receive", {stats: theJSON}, function(theResponse) { /* Ignore! */ }).error( function() { /* Ignore! */ });
    }
}

function callChurnalism( inURL ) {
    var theText = '';
/*
    if (/http.*guardian.co.uk/.test(inURL)) {
        theText = $('#article-body-blocks p').text();
    }
*/
    if ( theText != '' && theText.length >= 15) {
        $.post("http://churnalism.com/api/search/", {text: theText}, function(inData) {
	    if ( inData.success == true) {
	        for ( var i = 0; i < inData.articles.length; i++) {
	            // console.log( inData.articles[i].score, inData.articles[i].source, inData.articles[i].journalisted);
	        }
	    }
        }).error( function() { /* Ignore! */ });
    }
}

function getPageTitle() {
    var theTitles = $('head title');
    if ( theTitles.length > 0) {
        return $.trim(theTitles[0].innerHTML);
    } else {
        return '???';
    }
}

function getContentStatsBlackListFor( inDocURL ) {
    return $('div#comments');
}

function getContentStatsWhiteListFor( inDocURL ) {
/*  if (/http.*guardian.co.uk/.test(inDocURL)) {
        return $('#article-body-blocks p');
    }

    if (/http.*newstatesman.com/.test(inDocURL)) {
        return $('div.article-body');
    }
*/
    return null;
}

function getIgnoreStatsPageFilterRegex() {
    return /http.*(appengine.google.com*)|(bannedlist-stats*)|(poblish.org\/downloads\/TheList.html)|.github.?|.google.?|.ebay.?|.ebay.?|.bing.?|.facebook.?/;
}

function trimUrlForStats( inURL ) {
    var theNewUrl = inURL.replace(/(([\\?|&]utm_source=)|#).*/, '');
    return theNewUrl;
}

function optDashes(inStr) {
    return replaceAll( inStr, '-', '(-| )');
}

function replaceAll(string,text,by) {  // http://www.irt.org/script/771.htm
// Replaces text with by in string
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;

    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;

    var newstr = string.substring(0,i) + by;

    if (i+txtLength < strLength)
        newstr += replaceAll(string.substring(i+txtLength,strLength),text,by);

    return newstr;
}

function optPrefixes() {
    return handlePrefixes( Array.prototype.slice.apply(arguments), true);
}

function reqdPrefixes() {
    return handlePrefixes( Array.prototype.slice.apply(arguments), false);
}

function optSuffixes() {
    return handleSuffixes( Array.prototype.slice.apply(arguments), true);
}

function reqdSuffixes() {
    return handleSuffixes( Array.prototype.slice.apply(arguments), false);
}

function handlePrefixes( inArray, inIsOptional) {  // assume each prefix is word and needs trailing space
    var theStr = '(';

    for ( i = 1; i < inArray.length; i++) {
        if ( i > 1) {
            theStr += '|';
        }

        theStr += inArray[i] + ' ';
    }

    return theStr += ( inIsOptional ? ')?' : ')') + inArray[0];
}

function handleSuffixes( inArray, inIsOptional) {  // assume each prefix is word and needs trailing space
    var theStr = inArray[0] + '(';

    for ( i = 1; i < inArray.length; i++) {
        if ( i > 1) {
            theStr += '|';
        }

        theStr += ' ' + inArray[i];
    }

    return theStr + ( inIsOptional ? ')?' : ')');
}

function someWords( inMinNum, inMaxNum) {
    if ( inMinNum > inMaxNum || inMaxNum <= 0) {
        alert('Error: bad inputs to someWords(<min>,<max>)');
        return '';
    }
    return '( \\S+){' + inMinNum + ',' + inMaxNum + '}';
}