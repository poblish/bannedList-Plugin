function showSubmissionDialog( inReq, inSendResponse) {
    var newDialog = $('<div class="modal" id="MenuDialog">\
     	<style type="text/css">\
            a.bannedList,a.bannedList:hover { text-decoration:none !important; }\
            input,label,textarea,a.btn,.modal-header,h3 { font-family:"Helvetica Neue", Helvetica, Arial, sans-serif; }\
            label.bannedList { font-weight: bold; float: left; width: 140px; padding: 5px 8px 0 0;}\
            input.blText { width: 200px; }\
            span.blGrey { color: #999; }\
            div.blLine { color:#333; clear:both; text-align:left; line-height: 18px; }\
            h3.blHeader { color:#333; line-height: 27px; font-size:18px; margin:0; padding:0 }\
    	</style>\
   	<div class="modal-header" style="text-align:left">\
    	    <a class="close bannedList" data-dismiss="modal">×</a>\
    	    <h3 class="blHeader">Submit #BannedList phrase</h3>\
    	</div>\
	<form action="/" class="bannedList modal-body" style="margin-bottom:0;" id="submitPhrase">\
	    <input name="url" type="hidden" value="' + inReq.pageUrl + '" />\
	    <div class="blLine"><label for="name" class="bannedList">Your Name:</label><input id="name" name="name" type="text" class="bannedList blText" value="Andrew Regan" /></div>\
	    <div class="blLine"><label for="email" class="bannedList">Your Email:</label><input id="email" name="email" type="text" class="bannedList blText" value="aregan@gmail.com" /></div>\
	    <div class="blLine"><label for="terms" class="bannedList">Submitted Phrase:</label><input id="terms" name="terms" type="text" class="bannedList" style="width: 280px" value="' + inReq.phrase + '" /></div>\
	    <div class="blLine"><label for="explanation" class="bannedList">Why should we add this? <span class="blGrey">(optional):</span></label><textarea id="explanation" name="explanation" type="text" class="bannedList" style="width: 280px" value="" /></div>\
	</form>\
	<div class="modal-footer">\
	    <a href="#" class="btn bannedList cancelSubmit" style="color: #333">Cancel</a>\
	    <a href="#" class="btn btn-primary bannedList doSubmit" style="color: white">Submit</a>\
	</div>\
    </div>');

    newDialog.modal('show');

    newDialog.on("click", function(event) {
        var theTarget = $(event.target);
        if (theTarget.hasClass('doSubmit') || theTarget.hasClass('cancelSubmit')) {
            if (theTarget.hasClass('doSubmit')) {
                if (!submitPhrase()) {
                    return;
                }
            }

            newDialog.modal('hide');
            newDialog.remove();
            inSendResponse({ok: "true"});
        }
    });
}

function submitPhrase() {
    var theSubmittedPhrase = $("#submitPhrase").serializeArray()[3].value;  // yuk!
    if ( theSubmittedPhrase == '') {
        alert('Phrase may not be blank - please enter one.');
        return false;
    }

    $.post("http://1.bannedlist-stats.appspot.com/newTerms", {inputs: JSON.stringify( $("#submitPhrase").serializeObject() )}, function(inData) {
        alert('Thank you for your submission!');
    }).error( function() { /* Ignore! */ });

    return true;
}

function submitAnonymousStats( ioStats, inStatsScore) {
    if ( ioStats != null && inStatsScore >= 10) {
        getJournalistedInfo( document.URL, /* Got results: */ function(jResults) {
            ioStats['$journalisted'] = jResults;
            doSubmitAnonymousStats(ioStats);
            // alert('success');
        }, /* No results: */ function() {
            doSubmitAnonymousStats(ioStats);
            // alert('FAILURE');
        });
    }
}

function doSubmitAnonymousStats( ioStats ) {
    $.post("http://1.bannedlist-stats.appspot.com/receive", {stats: JSON.stringify(ioStats)}, function(theResponse) { /* Ignore! */ }).error( function() { /* Ignore! */ });
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

function getJournalistedInfo( inURL, inSuccessHandler, inFailureHandler) {
    $.get("http://journalisted.com/api/getArticles", { url: inURL, output: "js" })
//      .success( function(data) { /* Never succeeds */ } )
//      .done( function(data) { /* Never called */ } )
        .error( function(xhr) {
            try {
                if ( xhr.status == 200) {  // Actually fine
                    var theRespObj = jQuery.parseJSON(xhr.responseText);
                    if ( theRespObj.status == 0) {
                        var theResultsObj = theRespObj.results[0];
                        delete theResultsObj.permalink;    // don't need this
                        delete theResultsObj.description;  // don't need this
                        // var theJournoName = theResultsObj.journos[0].prettyname;
                        // console.log( theResultsObj );

                        if ( inSuccessHandler != null) {
                            inSuccessHandler(theResultsObj);
                        }

                        return theResultsObj;
                    }
                }
            } catch (e) { /* Just ignore */ }

            if ( inFailureHandler != null) {
                inFailureHandler();
            }
        });
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
    // FIXME Think we can only support *one* of these DIVs per page!
    return $('div#comments, div#disqus_thread, div#most-popular, div#sidebar, div#all-comments, div#discussion-comments, div#beta');
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
    return /http.*(appengine.google.com*)|(bannedlist-stats*)|(poblish.org\/downloads\/TheList.html)|.github.?|.google.?|.amazon.?|.ebay.?|.bing.?|.facebook.?/;
}

function trimUrlForStats( inURL ) {
    var theNewUrl = inURL.replace(/(([\\?|&]utm_source=)|#).*/, '');
    return theNewUrl;
}

function optDashes(inStr) {
    return replaceAll( inStr, '-', '(-| )');
}

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

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