var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28859929-1']);
_gaq.push(['_trackPageview']);

(function() { // See: http://code.google.com/chrome/extensions/tut_analytics.html
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function save_options() {
	localStorage["extras.politics.andrew1"] = $('#extras_politics_andrew1').prop("checked");
	localStorage["extras.special.goodOrBad"] = $('#extras_special_goodOrBad').prop("checked");

	$("#status").show();
	setTimeout(function() {
		$("#status").hide();
	}, 750);

	// Contact all BannedList.js scripts...

	chrome.tabs.getAllInWindow(null, function(tabs) {
		tabs.forEach(function(tab){
			chrome.tabs.sendMessage( tab.id, {
			    method: "getOptions", options: localStorage
			},
			function (response) {
			    if ( chrome.extension.lastError != null) {
			        // (AGR) 5 Aug 2012: going to ignore these "Port error: Could not establish connection. Receiving end does not exist. miscellaneous_bindings:232 > chromeHidden.Port.dispatchOnDisconnect"
			        // alert('ERROR: "' + chrome.extension.lastError.message + '" for: ' + tab.url);
			    }
			});
		});
	});
}

function restore_options() {
    $("#extras_politics_andrew1").prop( "checked", localStorage["extras.politics.andrew1"] == 'true');
    $("#extras_special_goodOrBad").prop( "checked", localStorage["extras.special.goodOrBad"] == 'true');
}

// Add event listeners once the DOM has fully loaded by listening for the `DOMContentLoaded` event on the document, and
// adding your listeners to specific elements when it triggers.

document.addEventListener('DOMContentLoaded', function () {
    restore_options();

    $("#saveButton").click( function() {
        save_options();
    });
});
