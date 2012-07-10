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
	    <div class="blLine"><label for="email" class="bannedList">Your Email:</label><input id="email" name="email" type="text" class="bannedList blText" value="" /></div>\
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

function showSubmitFallacyDialog( inReq, inSendResponse) {
    var theAdjSel = replaceAll( $('<div />').text( trimFallacyString( inReq.selection, 2000) ).html(), '"', '&quot;');
    var newDialog = $('<div class="modal" id="MenuDialog">\
     	<style type="text/css">\
            a.bannedList,a.bannedList:hover { text-decoration:none !important; }\
            input,label,textarea,a.btn,.modal-header,h3 { font-family:"Helvetica Neue", Helvetica, Arial, sans-serif; }\
            label.bannedList { font-weight: bold; float: left; width: 140px; padding: 5px 8px 0 0;}\
            input.blText { width: 200px; }\
            select.fallacyCode { width: 200px; }\
            span.blGrey { color: #999; }\
            div.blLine { color:#333; clear:both; text-align:left; line-height: 18px; }\
            h3.blHeader { color:#333; line-height: 27px; font-size:18px; margin:0; padding:0 }\
    	</style>\
   	<div class="modal-header" style="text-align:left">\
    	    <a class="close bannedList" data-dismiss="modal">×</a>\
    	    <h3 class="blHeader">Submit Logical Fallacy</h3>\
    	</div>\
	<form action="/" class="bannedList modal-body" style="margin-bottom:0;" id="submitFallacy">\
	    <input name="url" type="hidden" value="' + inReq.pageUrl + '" />\
	    <input name="fallacy" type="hidden" value="' + theAdjSel + '" />\
	    <input name="fallacyHash" type="hidden" value="' + inReq.selectionHash + '" />\
	    <div class="blLine"><label for="name" class="bannedList">Your Name:</label><input id="name" name="name" type="text" class="bannedList blText" value="Andrew Regan" /></div>\
	    <div class="blLine"><label for="email" class="bannedList">Your Email:</label><input id="email" name="email" type="text" class="bannedList blText" value="" /></div>\
	    <div class="blLine"><label for="fallacyCode" class="bannedList">Which fallacy:</label><select name="fallacyCode" name="fallacyCode"><option value="5">Ad Hominem</option><option value="11">Ambiguity</option><option value="21">Anecdotal</option><option value="14">Appeal to Authority</option><option value="2">Appeal to Emotion</option><option value="20">Appeal to Nature</option><option value="13">Bandwagon</option><option value="19">Begging The Question</option><option value="18">Black Or White</option><option value="10">Burden Of Proof</option><option value="15">Composition Division</option><option value="1">False Cause</option><option value="17">Genetic</option><option value="9">Loaded Question</option><option value="23">Middle Ground</option><option value="16">No True Scotsman</option><option value="7">Personal Incredulity</option><option value="4">Slippery Slope</option><option value="8">Special Pleading</option><option value="0">Strawman</option><option value="3">The Fallacy Fallacy</option><option value="12">The Gamblers Fallacy</option><option value="22">The Texas Sharpshooter</option><option value="6">Tu Quoque</option></select></div>\
	    <div class="blLine"><label for="comments" class="bannedList">Comments:</label><textarea id="explanation" name="comments" type="text" class="bannedList" style="width: 280px" value="" /></div>\
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
                if (!submitLogicalFallacy()) {
                    return;
                }
            }

            newDialog.modal('hide');
            newDialog.remove();
            inSendResponse({ok: "true"});
        }
    });
}

function submitLogicalFallacy() {
    var theSubmittedSel = $("#submitFallacy").serializeArray()[1].value;  // yuk!
    if ( theSubmittedSel == '') {
        alert('Selection may not be blank - please enter one.');
        return false;
    }

    $.post("http://1.bannedlist-stats.appspot.com/submitFallacy", {inputs: JSON.stringify( $("#submitFallacy").serializeObject() )}, function(inData) {
        alert('Thank you for your submission!');
    }).error( function() { /* Ignore! */ });

    return true;
}

function hilightFallacies( inURL, inNodeToSearch) {
    if (!/guardian\.co\.uk/.test(inURL)) {
        return;
    }

    $.get("http://1.bannedlist-stats.appspot.com/listFallacies?url=" + encodeURIComponent( inURL.split('#')[0] ))
        .error( function(xhr) { /* Anything? */ } )
        .success( function(obj) {
            try {
                if ( obj.results != null) {
                    for ( var i = 0; i < obj.results.length; i++) {
                        var eachRes = obj.results[i];

                        inNodeToSearch.findMultiNodeText(eachRes);
                        // inNodeToSearch.findMultiNodeText('There is, however, a problem tallying this theory with the empirical evidence. A highly inconvenient fact for their thesis, and one that they fully acknowledge, is that over the time-scale under consideration self-esteem as well as anxiety ‘‘showed a very clear long-term upward trend. It looked as if, despite the rising anxiety levels, people were also taking a more positive view of themselves over time’’ (SL, 36). Surely, it would seem, anxiety about status should be reﬂected in lower, not higher, self-esteem. Wilkinson and Pickett’s solution is to distinguish ‘‘healthy’’ self-esteem from the defensive kind found in those prone to violence, racism, and insensitivity to others. This latter kind is fragile and more akin to ‘‘whistling in the dark’’ (SL, 37); we might compare this analysis with Ruth Cigman’s discussion of ‘psychological fraudsters.’’  In the context this looks like a rather desperate strategy');
                    }
                }
            } catch (e) { /* Just ignore */ }
        });
}

function submitAnonymousStats( ioStats, inStatsScore) {
    if ( ioStats != null && inStatsScore >= 10) {

        getSmartIpResults( document.URL, /* Non-intranet IP, or lookup failure: */ function() {

            getJournalistedInfo( document.URL, /* Got results: */ function(jResults) {
                ioStats['$journalisted'] = jResults;
                doSubmitAnonymousStats(ioStats);
                // alert('success');
            }, /* No results: */ function() {
                doSubmitAnonymousStats(ioStats);
                // alert('FAILURE');
            });

        }, /* Was an Intranet IP: */ function(inIP) { /* Skip submission */ });
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

function getSmartIpResults( inURL, inOKIpHandler, inIntranetIpHandler) {
    var theDomain = getHostname( inURL );

    $.get("http://smart-ip.net/geoip-json/" + encodeURIComponent(theDomain))
        .error( function(xhr) { /* OK, ignore and allow submission */ } )
        .success( function(results) {
            try {
                if ( results.host != null && isIntranetIpStr( results.host )) {
                    if ( inIntranetIpHandler != null) {
                        inIntranetIpHandler( results.host );
                    }

                    return results.host;
                }
            } catch (e) { /* Just ignore */ }

            if ( inOKIpHandler != null) {
                inOKIpHandler();
            }
        });
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
    if (/huffingtonpost\.com/.test(inDocURL)) {
        return $('div#top_nav, .footer_nav, .comment_item, .hp-slideshow');
    }

    if (/dailymail.co.uk/.test(inDocURL)) {
        return $('div.beta, div#js-comments');
    }

    if (/\.ted\.com/.test(inDocURL)) {
        return $('div#conversation, div#discussion, div.contentPod');
    }

    if (/telegraph\.co\.uk/.test(inDocURL)) {
        return $('.outbrain_column, .mostPopular, div.summary, div.summaryMedium, .footercolumn, div#tmglMenu, div#tmglHotTopics, div#disqus_thread');
    }

    if (/conservativehome\.blogs/.test(inDocURL)) {
        return $('div.comments-content, div.module-category-cloud, div.recentPosts');
    }

    return $('header, footer, div#comments, div#allcomments, div#disqus_thread, div#most-popular, div#sidebar, div#sidebar-right-1, div#r_sidebar, div#single-rightcolumn, div#sidebar-first, div#all-comments, div#discussion-comments, div#reader-comments, div#beta, div#bottom, div#departments, div#promo, div#secondaryColumn, div#breadcrumb, div#related, ul#menus, ul.sf-menu, .primary-links, .widget-container, .commentContainer, .comments_block_holder, .comment_item, .rightbox, .top-index-stories, div.sidebar, div.widget-content, div.comment, div.comment-body, div#comments-wrapper, li.cat-item, div.suf-tiles, div.suf-widget, .tagcloud, div.related, div#breadcrumbs, div#twitter-reactions, div.twtr-widget, div#sidebar_secondary, .related-content, ol.commentlist, .dna-comments_module, section#comments-area');
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

function shouldNotSubmitStatsFor( inURL ) {
    return ( /^https?.*/.test(inURL) === false || getIgnoreStatsPageFilterRegex().test(inURL) || getIgnoreStatsPageFilterRegexForParams().test(inURL));
}

function getIgnoreStatsPageFilterRegex() {
    return /https?:\/\/(www\.)?(.*\.)?(poblish.org\/downloads\/TheList|amazon|appengine\.google|bannedlist-stats|bing|ebay|facebook|github|google|imdb|lovefilm|stackoverflow|wikipedia|.*betting)\./;
}

// Don't submit Stats if any of these params are present
function getIgnoreStatsPageFilterRegexForParams() {
    return /(\?s)=/;
}

function ipToLong( inIpStr ) {
    var d = inIpStr.split('.');
    return ((((((+d[0])*256)+(+d[1]))*256)+(+d[2]))*256)+(+d[3]);
}

function isIntranetIpStr( inIpStr ) {
    return isIntranetIpVal( ipToLong(inIpStr) );
}

function isIntranetIpVal( inIpVal ) {
    return (( inIpVal >= 167772160 && inIpVal <= 184549375) ||     // 10.0.0.0 ... 10.255.255.255
            ( inIpVal >= 2886729728 && inIpVal <= 2887778303) ||   // 172.16.0.0 ... 172.31.255.255
            ( inIpVal >= 3232235520 && inIpVal <= 3232301055));    // 192.168.0.0 ... 192.168.255.255
}

function getHostname( inUrl ) {
    var m = ((inUrl||'')+'').match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);  // See: http://stackoverflow.com/a/441995/954442
    return m ? m[4] : null;
}

function trimUrlForStats( inURL ) {
    var theNewUrl = inURL.replace(/(([\\?|&]utm_source=)|#).*/, '');
    return theNewUrl;
}

function adjustAssocArrayKeyCase( inArray, inKeyToFind) {
    var theLCaseMatch = inKeyToFind.toLowerCase();

    for ( eachExistingTerm in inArray) {
        if (eachExistingTerm.toLowerCase() === theLCaseMatch) {
            // console.log("Use '" + theLCaseMatch + "' instead of '" + inKeyToFind + "'");
            return eachExistingTerm;
        }
    }

    return inKeyToFind;
}

function insertTermCounts( inHistory, inOptions ) {
    // console.log( inOptions['highlightOptions'] === 'h_first', inOptions['displayTermCount'] === 'true');

    var highlightFirstMode = inOptions['highlightOptions'] === 'h_first';
    if ( highlightFirstMode || inOptions['displayTermCount'] === 'true')
    {
        for ( eachHistWord in inHistory) {
            var cnt = inHistory[eachHistWord].c;
            // console.log(cnt);

            if (( highlightFirstMode && cnt <= 1) || ( !highlightFirstMode && cnt <= 0)) {
                continue;
            }

            var blobObj = document.createElement('span'); // $( document.createElement('span') ); blobObj.text('Hi');

            if (highlightFirstMode) {
                blobObj.innerHTML = '+' + ( cnt - 1); // Use '+1' for 'h_first'
                blobObj.title = ( cnt - 1) + ' more like this';
           } else {
                blobObj.innerHTML = '' + cnt;
                blobObj.title = '' + cnt + ' of these';
            }

            blobObj.className = 'blob';

            inHistory[eachHistWord].node.appendChild(blobObj);
        }
    }
}

function optDashes(inStr) { // Hard-working, Hard working, or Hardworking
    return replaceAll( inStr, '-', '(-| |)');
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

var g_JunkFallacyPrefix = /^[\s\.,;:][\s\.,;:]*/;
var g_JunkFallacySuffix = /[\s\.,;:][\s\.,;:]*$/;

function trimFallacyString( inStr, inMaxLength) {
    // So, cut to leave reasonable slop, then trim. If some slop left, cut to right size and re-trim right-hand side.
    var firstTrim = inStr.slice(0, inMaxLength + 100).replace( g_JunkFallacyPrefix, '').replace( g_JunkFallacySuffix, '');
    return firstTrim.slice(0,inMaxLength).replace( g_JunkFallacySuffix, '');
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

function andOr( in1stWord, in2ndWord) {
    return '(' +  in1stWord + ' and ' + in2ndWord + '|' + in1stWord + '|' + in2ndWord + ')';
}

function andOrEither( in1stWord, in2ndWord) {
    return '(' +  in1stWord + ' and ' + in2ndWord + '|' + in2ndWord + ' and ' + in1stWord + '|' + in1stWord + '|' + in2ndWord + ')';
}