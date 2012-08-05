var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-28859929-1']);
_gaq.push(['_trackPageview']);

document.addEventListener('DOMContentLoaded', function () {

    chrome.tabs.getSelected( null, function(selectedTab) {
        chrome.extension.sendMessage({ method: "getDetailsForPopup", tabId: selectedTab.id}, function(inResp) {
             if ( inResp != null && inResp.url != null) {
                 $('a#twitterUrl').attr("href", 'https://twitter.com/intent/tweet?hashtags=' + 'BannedListScore' +
                        '%2C&source=tweetbutton&text=' + encodeURIComponent('I found a page with a BannedList score of ') + inResp.score + encodeURIComponent(': ') +
                        inResp.url + encodeURIComponent(' - via') + '&url=' + encodeURIComponent('http://bit.ly/KjzLQx'));
             } else {
                 $('a#twitterUrl').addClass('disabled');
                 $('a#twitterUrl').attr("title", 'Sorry, no BannedList results to tweet!');
                 $('a#twitterUrl').click(function(e) { e.preventDefault(); });
             }
        });
    });

/*  window.setTimeout(function() {
        try {
            var x = $('div#content', frames['poop'].document).length;
            console.log( x[0].attr('marginWidth') );
            if ( x > 0) {
                // alert('here');
                $('#regularBuyBtn').show();
            }
        } catch (e) {
        console.log(e);
        }
    }, 2);
*/

    (function() { // See: http://code.google.com/chrome/extensions/tut_analytics.html
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = 'https://ssl.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

});