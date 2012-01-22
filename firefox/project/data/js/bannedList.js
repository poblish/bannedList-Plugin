var theCoreTerms = ['A (basket|package|raft|range|sense|series) of',
'(A|C|Z)-list',
'Added bonus',
'A fine art',
'Affordable',
optDash('Age-old question'),
'Ahead of( the curve)?',
'Ahem',
'A long time in politics',
'Any time soon',
'Any way, shape or form',
'Approbation',
'Arguably',
'Art form',
'Articulated* a',
'At the end of the day',
'At this moment in time',
'Atop',
'A truth universally acknowledged',
'Awry',
optDash('Back-burner'),
'Back in the day',
'Ballpark',
'Bank of Mum and Dad',
'Battle lines?',
'Beggars Belief',
'beleaguered',
'Big Ask',
'Blood on the (carpet|floor|walls)',
'Bottom line',
reqdPrefixes('Bullet',  'Magic','Silver'),
'By the back door',
'Celebrat(es*|ing) diversity',
'Celebrity',
'Chaos',
'Civil society',
'Clause (Four|IV) moment',
'Clear and present danger',
'Close down discussion',
'Community',
'Compelling',
'Connect with the (electorate|voters?)',
'Crash and burn',
'Crowd-*sourc(e|ing)',
'Crystal clear',
reqdSuffixes('Culture of',  'Blame','Excuses'),
'Damp squib',
'Dead hand',
'Dead in the water',
'Dead on arrival',
'Deafening silence',
'Death knell',
'Deliverables*',
optDash('Dog-whistle'),
'Downward spiral',
'Dracula in charge of a blood bank',
'Economics of the madhouse',
'Economy, stupid',
'Elephant in the room',
'Empower(ment)*',
'Enough already',
'Epic Fail',
'Equality',
'Events, dear boy',
'Exponentially',
'Fairly unique',
optDash('Fast-forward to'),
'Febrile',
'Feral',
optPrefixes('Fit for Purpose',  'Not'),
'Fog of war',
'Foregone conclusion',
'Forward policy',
optDash('Front-line'),
optDash('Game-chang(er|ing)'),
'Gamely',
'Give 110(%| per cent)',
'Glaring loophole',
'Going forward',
'Good Election to Lose',
optDash('Ground-breaking'),
'Guilty as charged',
'Guns blazing',
'Hapless',
'Hard-headed',
optDash('Hard-working families'),
'Hearts and minds',
optDash('Heavy-lifting'),
'Hodge-podge',
'Hostage to fortune',
'Hotbed',
'Human shield',
reqdPrefixes('Hypocrisy',  'Breathtaking','Rank','Shameless'),
'Iconic',
'If I were a betting man',
'Inclusive',
'In conjunction with',
'Incredibl(e|y)',
reqdPrefixes('Indictment',  'Damning','Devastating'),
'Inextricably link(ed)?',
'In point of fact',
'In (order|relation) to',
'In (respect|terms) of',
'Is it just me, or',
'Is toast',
'It.s \\w+, Jim, but not as we know it',
'Keynote speech',
optDash('Last-ditch'),
'Learning curve',
'Let\'s be clear',
'Life chances',
'Lifestyle',
'Line in the sand',
'Lost generation',
'Make no mistake',
'Makeover',
'Mee*t with',
'Militate against',
'Moment in time',
'Moral compass',
'Name and Shame',
'Neglect \\w+ at our peril',
'No-brainer',
'No longer\\.',
'Normalcy',
'Nothing ruled out',
'Now is not the time for',
'Now,? more than ever',
'On a collision course',
'On a daily basis',
'Ongoing',
'Opening salvo',
'Opined*',
'Organically',
'Out of the box',
'Outside of',
'Paradigm',
'Parameters*',
'Paucity',
'Perfect Storm',
optDash('Pipe-dream'),
'Plan B',
'Play(ed|ing)? a leading (part|role)( in)?',
'Plethora',
'Political (football|hot potato|Journey)',
'Postcode lottery',
'Pot, Kettle',
'Prior to',
'Progressive',
'Progressives*',
'Psychodrama',
'Quantum leap',
'Question mark over',
'Rais(es*|ing) awareness',
'Read(ing)*(| \w*) the Riot Act',
'Real (change|communities|families|lives|people|world)',
'Reality check',
'(Re)?Connect with the voters',
'Red lines',
'Reinvent(ing)? the wheel',
'Resonates?( with)?',
optSuffixes('Ride roughshod',  'Over','Poop'),
'Ring the changes',
'Robust',
'Root and branch',
'Scant comfort',
'Scrap heap',
optDash('(Sea|Step)-change'),
'Seal the Deal',
'Seismic shift',
'Serve\\w? the purpose of',
'Shred of credibility',
'Signage',
'Silent majority',
'Simples',
'Sing(ing|s)? from the same (hymn|song) sheet',
'Siren voices*',
'Sleaze',
'Sleepwalk(ing)? into',
'Smell the Coffee',
'Social mobility',
'Something of a',
'Speak(ing)? truth (un)?to power',
'Spiral of decline',
'Spiral out of control',
'Stakeholders*',
'Stark contrast',
'Step forward, (\\w+)',
'Stinging (attack|criticism)',
'Substantive',
'Systemic( failure)?',
'Takeaway point',
'Take up the cudgels for',
'Tak(e|ing) on board',
'Taking(\\w+)? forward',
'Talismanic',
'Tangled web',
'Tectonic plates',
'The hallmarks of',
'The Mother of all',
'The prospect of',
'The(| simple) fact(| of the matter) is',
'The truth is',
'[^\'\"]The \w+ Delusion[^\'\"]',
optDash('Tipping-point'),
'Tome',
'Too little, too late',
optDash('Top-down'),
'Top priority',
'Touch base',
'Toxic',
'Upcoming',
'Vibrant',
'Virtuous circle',
'Vulnerable moment',
'War of words',
'Way (beyond|more)',
'We are all \\w+ now',
'Web 2.0',
'Webinar',
optDash('Well-oiled machine'),
'Westminster bubble',
'We will take no lessons',
'Who knew?',
'Win-win',
'Wow factor',
'Wreak havoc'];


var theCaseInsensitiveCoreTerms = ['Team \\w+'];

var theSpecialIgnoreTerms = ['A spin',
'(Points|Pulls?|Way) ahead of'];


var theExtraTerms = ['Abundantly clear',
reqdPrefixes('Agenda',  'Fairness'),
'Alarm bells( are)? ringing',
'Arch-(Blairite|Thatcherite)',
'Backsliding',
optPrefixes('Baseline',  'Firm'),
'Blink(ed)* in the face',
'Blood money',
'Body (blow|politic)',
'Bow down to',
'Broad sweep of history',
'Byzantine complexity',
'Catastroph(e|ic)',
'Chang(e|ing) the conversation',
'Channelling',
'Chorus of criticism',
'Chutzpah',
'Clearly',
'Closer? to the ground',
'Cogent vision',
'Coherent (alternative|strategy)',
'Condemned to repeat \\w+',
'Congratulations, \\w+.',
reqdPrefixes('Conversation',  'Economic','Political'),
'Corporate media',
'Crazy',
'Creeping privati[s|z]ation',
'Cross(ed|ing)? (a|the) Rubicon',
optDash('Crunch-time'),
'Cuckoo in the \\w+ nest',
'Cynica(l|lly)',
'Day of reckoning',
'Deal or No Deal',
optPrefixes('Decency',  'Common'),
'Decent',
'Decimat(e|ing)',
'Defend(ing)* the indefensible',
'Delusional',
'Different kind of emphasis',
'Disgrace(ful)*',
'Disgusting',
'Distort(ed|ing)',
'Dodgy',
'Do the right thing',
'Draconian',
optDash('Economic dead-end'),
'Economic(ally)* illitera(te|cy)',
'Economic(ally)* incoheren(t|ce)',
optDash('Ever-astute'),
reqdPrefixes('Excess',  'Runaway'),
'Excessive',
'Excellence',
'Fair(er)* economy',
'Fairness',
'Fear to tread',
'Fight(ing)* the (fair|good) fight',
'Fight(ing)*,* tooth and nail',
'Foot-dragging',
'For the few',
'Fundamental change',
reqdSuffixes('Genuine',  'Attempt','Credibility'),
optDash('Gold-plated'),
'Golden goose',
optPrefixes('Good society',  'The'),
'Grassroots movement',
'Growing calls',
optDash('Half-baked'),
'Hard-(left|right)',
optDash('Hard-working (majority|taxpayers?)'),
'Have the values',
'\'Healthier\'',
'Hearts? ripped out',
'Hegemonic',
'Height of irresponsibility',
'Here we go again',
'Hysterical',
'Ideological',
'Ideologues*',
'ill-(conceived|considered|informed)',
'Immoral',
'Imperialis[m|t]',
'In hock to',
'Inevitable',
'Inexorable',
'\\w+ in sheep\'s clothing',
reqdPrefixes('Insiders?',  'Downing Street'),
'Insignificant',
'Interests of the majority',
optPrefixes('(National|Public) Interest',  'The'),
'In the \\w+ worldview',
'Irrationa(l|lly)',
'Jump(ed)* the shark',
'Knee-jerk',
'Laid the foundations',
'Lamented',
optPrefixes('Landscape', 'Changed','Different'),
'Laughable',
'Law of the jungle',
'Laz(y|iness)',
'Leading (\\w+ )?(blogger|campaigner|MP|reason)s?',
'Leaps and bounds',
'Level killing-field',
'Listen very hard and you will hear',
'Little local difficulty',
optDash('Long-term vision'),
'Loom large',
'Ludicrous',
'Lurch to the \\w+',
'Made his mark',
'Makes no mention',
'Map \\w+ agenda',
'Marathon not a sprint',
'Meaning(ful|less)',
'Methinks',
'Me-too approach',
'Metastorm',
'\'Minefield\'',
'Moral bankruptcy',
'National mission',
'Negative consequences?',
'Netizen',
'New political settlement',
'New type of( \\w+)* (democracy|economics|economy|society)',
'Noises off',
'Nonsensical',
'No past to',
'Nothing short of',
'Objective analysis',
'Oldest trick in the (\\w+ )?book',
'On a knife edge',
'Ordinary (families|people)',
optPrefixes('Orthodox(y|ies)',  'Failed','Free-market','Keynesian','Past','Stale','Tired','Wrong'),
'Our culture',
'Our \\w+ crosshairs',
optPrefixes('Out of touch', 'Increasingly','So'),
'Owns this turf',
'Panjandrums*',
'Parasites*',
'Pay packet',
'Pithy',
optPrefixes('Pivotal role', 'Play(s|ed)? a'),
'Policy framework',
optDash('Political dead-end'),
'Political (calculus|dynamics*|lexicon|space)',
'Political(ly)? incoheren(t|ce)',
'Predatory capitalism',
'Prescient',
'Privately delighted',
'\'Promising\'',
'Prostrated',
'Puts? the public interest before',
'Put(ting)? \\w+ at the (very )?heart of',
'Quisling',
'Raise.? the spectre',
'Reach out to',
'Reactionary',
'Real (alternative)',
'Reared its(| ugly) head',
reqdPrefixes('Reception',  'Lukewarm'),
'Reciprocity',
'Reckless',
'Reflect (our|their) values',
'Regurgitat(e|ing)',
'Reframe',
'Regressive',
'Responsible measures*',
'Responsible middle',
'Rolling programme',
'Same old failed \\w+',
'Scandalous',
optPrefixes('Scarcely be able to believe',  'Must'),
'Seared in(to)? my memory',
'Seiz(e|ing) the initiative',
'Self-(evident|hatred|indulgent|satisfied|serving)(ly)*',
'Senior( (Labour|Tory))? figures?',
'Shameless(ly)*',
'Ship of state',
'Shutting the stable door after the horse has bolted',
'Significant',
'Slash-and-burn',
'Slash(ed)*',
'Social acceptability',
'Social justice',
'Socially acceptable',
optDash('Something-for-nothing'),
optDash('Something-for-something'),
reqdPrefixes('Sources?',  'Downing Street'),
'Spin',
'Squeeze families',
'Squeezed middle',
'Straitened times*',
'\'Strong case\'',
'Substan(ce|tial)',
'Sycophantic',
optPrefixes('Tenets?',  'Key'),
'That is all',
optPrefixes('The heart bleeds',  'How'),
'The (left|right) needs (a|to)',
'The old model of',
optDash('Thinly-veiled'),
'(This|thus) far and no further',
optPrefixes('Thoughtful',  'Ever-','Usually'),
'To fit changing times',
optPrefixes('Traction',  'Gain'),
'Transforming Britain',
'Tsunami of \\w+',
'Tumbleweed',
'Turn[^\.,]*away[^\.,]*in[^\.,]*disgust',
'Uncharted waters',
'Uncritical',
'Undeniabl(e|y)',
'Unfairness',
'Unforgettable',
'Unintelligent',
'Unsurprisingly',
'Unthinking',
'Upkick',
'Upskill(ing)*',
'Vested interests?',
'Vital',
'Vocalise',
'Vulnerable groups*',
'Vultures*',
'Waiting nervously',
'Wanton',
'Wellbeing',
'Well-worn clich.',
'Where.s the beef?',
optPrefixes('Where we.re at( politically)?',  '(An )?Expression of'),
'Whiff of grapeshot',
'Whip(ping)? up a storm',
'Willful ignorance',
optPrefixes('With a human face',  'Capitalism','Politics'),
'Wiped off the value',
'Works for the many',
reqdPrefixes('Would Argue',  'Many','Some'),
'Wrong-headed',
'Year zero'];

var theOptions = { /* Dodgy defaults... */ "extras.politics.andrew1" : "true" };

$(function() {
	refreshBannedStuff();
});

function refreshBannedStuff() {
    $("head").append($("<link rel='stylesheet' href='css/bannedList.css' type='text/css' media='screen' />"));

    if ( theOptions["extras.special.goodOrBad"] == 'true') {
        $('body').replaceHighlight( '\\b(Blair|Brown|New Labour)ites\\b', 'some Labour people', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Blairite|Brownite)\\b', 'Labour', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b((left|right)-wing of the)\\b', '!', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Apprenticeships?|Hospitals?)\\b', 'Good Things', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(British (employers|industry)|Elderly|Entrepreneurs|Families|Most vulnerable|Squeezed middle|Police(men| Officers?)?|Workers|Young people)\\b', 'Good People', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Long-term?)\\b', 'Good', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Equality)\\b', 'Goodness', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Big companies|Vested interests?)\\b', 'Bad Things', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Deficit)\\b', 'Bad Thing', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Inequality?|Injustice|Unfair)\\b', 'Badness', 'highlightReplaced', '#BannedList Replacement');
    }

    $('body').highlight( '\\b(' + theSpecialIgnoreTerms.join('|') + ')\\b', 'highlightIgnore', '', true);
    $('body').highlight( '\\b(' + theCaseInsensitiveCoreTerms.join('|') + ')\\b', 'highlightCore', '#BannedList entry', false);
    $('body').highlight( '\\b(' + theCoreTerms.join('|') + ')\\b', 'highlightCore', '#BannedList entry', true);

    if ( theOptions["extras.politics.andrew1"] == 'true') {
        $('body').highlight( '\\b(' + theExtraTerms.join('|') + ')\\b', 'highlightExtra', '#BannedList Extras: dodgy political language', true);
        $('body').highlight( '\\b(' + theExtraHealthTerms.join('|') + ')\\b', 'highlightExtra', '#BannedList Extras: dodgy Health language', true);
    }
}

function optDash(inStr) {
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