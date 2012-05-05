var BannedListTermSet = (function() {
    var ctor = function( inAttrs ) {
        var theJoined = '(' + inAttrs.terms.join('|') + ')';
        this.regex = new RegExp( inAttrs.ignoreWordBoundaries ? theJoined : ('\\b' + theJoined + '\\b'), ( inAttrs.caseInsensitive == null || inAttrs.caseInsensitive) ? "i" : "");
        this.className = inAttrs.className;
        this.title = inAttrs.title;
    };

    ctor.prototype = {
        getRegex: function() { return this.regex; },
        getSpanTitle: function() { return this.title; },
        getHighlightClass: function() { return this.className; }
    };

    return ctor;
})();
