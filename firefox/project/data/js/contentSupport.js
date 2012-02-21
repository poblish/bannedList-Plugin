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

function optDashes(inStr) {
    return inStr.replace('-','(-| )');
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
    return '( \\w+){' + inMinNum + ',' + inMaxNum + '}';
}