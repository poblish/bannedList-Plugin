var theCoreTerms = [optSuffixes('(A )?(basket|package|raft|range|series) of',  'Measures?'),
'Above my pay grade',
'Acclaimed' + someWords(0,1) + ' authors?',
'(A|C|Z)-list',
'Across the piece',
optPrefixes('(Action|Cascade|Progress) this',  'I','Let.s','We','You'),
'Added bonus',
'A fine art',
'Affordable',
optDashes('Age-old question'),
reqdPrefixes('Agenda',  'Forward'),
'Ahead of( the curve)?',
'Ahem',
optPrefixes('All comes down to turnout',  'It'),
'A long time in politics',
'Any time soon',
'Any way, shape or form',
'Approbation',
reqdPrefixes('Arrogance',  'Breathtaking'),
'Art form',
'Articulated* a',
optSuffixes('A sense of',  'Vitality'),
'At a crossroads',
'At the end of the day',
'At this moment in time',
'[A-Z][A-Z][A-Z]+athon',
'Atop',
'A truth universally acknowledged',
'A very British' + someWords(0,1),
'Aver(red|ring)',
'Awry',
optDashes('Back-burner'),
'Back in the day',
'Ballpark',
'Bank of Mum and Dad',
optDashes('Basket-case'),
'Battle lines?',
'Beggars Belief',
'Beleaguered',
'Beyond (parody|satire)',
optPrefixes('Biblical proportions', 'Almost'),
'Big Ask',
'Big Beasts?',
optPrefixes('Big picture',  'The'),
'Blood on the (carpet|floor|walls)',
'Blueprint',
'Blue sky thinking',
'Bottom line',
'Bubbly',
reqdPrefixes('Bullet',  'Magic','Silver'),
'By the back door',
optPrefixes('Campaigners',  'Health'),
optDashes('Cast-iron guarantees?'),
'Catalogue of errors',
'Celebrat(es*|ing) diversity',
'Celebrity',
'Chaos',
'Chillax(ed)?',
'Circular firing squad',
'Civil society',
'Clause (Four|IV) moment',
'Clear and present danger',
'Close down discussion',
'Cognoscenti',
optSuffixes( optPrefixes('Communit(y|ies)',  'Asian','Black','BME','Diverse','Ethnic','Gay','Harmonious','International','Minority','Muslim','Positive','Real','Scientific','Security','Strong(er)?','The','The \\w+','(The )?Wider \\w+','Vulnerable',optDashes('Working-class')),  'Cohesion','Leaders?','Partner(ship)?s?','Representatives?','Tensions?'),
'Compelling',
'Confined to a wheelchair',
'Connect with the (electorate|voters?)',
'Crash and burn',
'Crowd-*sourc(e|ing)',
'Crystal clear',
reqdSuffixes('Culture of',  'Blame','Excuses'),
'Damp squib',
'Dawn of time',
'Dead hand',
'Dead in the water',
'Dead on arrival',
'Deafening silence',
'Death knell',
'Decruit',
'Demoni(s|z)(ation|e|ed|ing)',
'Dialogue of the deaf',
optPrefixes('(Capitalism.s|His|Her|Labour(.s)?|My|Our|Their|Tor(y|ies.)|\\S+ Party(.s)?) DNA',  'In','Not in'),
'Direct descendant',
reqdPrefixes('Do self-doubt',  'Does not','Doesn.t'),
'Doff',
optDashes('Dog-whistle'),
'Downward spiral',
'Dracula in charge of a blood bank',
optDashes('Drink(s|ing)? the Kool-Aid'),
'Edgy',
'Elephant in the room',
'Empower(ment)?',
'Empty-chair',
'Enough already',
'Enviable curves',
'Epic Fail',
optPrefixes('Equality',  'Embrac(e|ing)'),
'Et tu, \\w+',
'Eurogeddon',
'Events, dear \\S+',
'Every dot and comma',
optSuffixes( 'Existential',  'Crisis'),
reqdPrefixes('Experience',  'Passenger'),
'Exponentially',
'Eye-watering',
'False dawn',
optDashes('Fast-forward to'),
'Fatally flawed',
'Febrile',
'Feisty',
'Feral',
'Few and far between',
optPrefixes('Fit for Purpose',  'Not'),
reqdSuffixes('Flagship',  'Hospital','News','Policy','(\\S+ )?Programmes?','(\\S+ )?Stores?'),
'Flatlin(e|ed|ing)',
'Flexicurity',
'Fog of war',
reqdPrefixes('Footprint',  'Carbon','Digital','Energy','Environmental'),
'Footprinted',
'Foregone conclusion',
optDashes('Front-line'),
'Gamely',
'Gerrymander(ing)?',
reqdPrefixes('Get it',  'Does not','Doesn.t'),
'Giftable',
'Give 110(%| per cent)',
'Glaring loophole',
'Good Election to Lose',
'Grexit',
'(Grind|Ground) to a halt',
'Grist to the mill',
'Guilty as charged',
'Guns blazing',
'Hapless',
'Hard-headed',
reqdSuffixes( optDashes('Hard-working'),  'families','people'),
'Hearts and minds',
optDashes('Heavy-lifting'),
'Here.s the thing',
'Hodge-podge',
'Hoffice',
'Honcho',
'Hope (you are|you.re) well',
'Hostage to fortune',
'Hotbed',
'Human shield',
reqdPrefixes('Hypocrisy',  'Breathtaking','Rank','Shameless'),
'Iconic',
'If I were a betting man',
'Ignore at our peril',
optSuffixes('Inclusive',  'Vision'),
'In conjunction with',
'Inconvenient truth',
'Incredibl(e|y)',
reqdPrefixes('Indictment',  'Damning','Devastating'),
'Inextricably link(ed)?',
'In harm.s way',
'In point of fact',
'In (order|relation) to',
'In (respect|terms) of',
'Inside the Beltway',
'Is it just me, or',
optPrefixes('Is not an option',  'Doing nothing','(The )?Status quo'),
'Is toast',
'It.s \\S+, Jim, but not as we know it',
'It.s (the )?\\S+, stupid',
'Jubilympics',
'Keynote speech',
'Kick(ing)? the can( further)? down the road',
optDashes('Last-ditch'),
'Last time I looked',
'Learning curve',
'Leav(es|ing) little to the imagination',
'Let.?s be clear',
'Level playing field',
'Life chances',
'Lifestyle',
'Line in the sand',
'Lost generation',
reqdPrefixes('Majority',  'Deserving','Silent'),
'Make no mistake',
'Makeover',
'Massive own goal',
'Mee*t with',
'Methinks',
'Militate against',
'Moment in time',
optPrefixes('Mood music', 'Political'),
'Moral compass',
optSuffixes('(The )?Most vulnerable',  'in society'),
'Name and Shame',
'Neglect \\S+ at our peril',
'New Normal',
'No-brainer',
'No longer\\.',
'No \\S+, please, we.re \\S+',
'Normalcy',
'Nothing ruled out',
'Nothing will ever be the same again',
'Now is not the time for',
'Now,? more than ever',
'\\S+ of the madhouse',
'Omnishambles',
'Omnishambolic',
'On a collision course',
'On a daily basis',
optPrefixes('Only poll that matters',  'The'),
'Opening salvo',
'Opined*',
'Outside of',
/* 'Outwith', */
'Paucity',
'Perfect Storm',
optDashes('Pipe-dream'),
'Plan B',
'Play(ed|ing)? a leading (part|role)( in)?',
'Play(ing)? catch-up',
'Play into (the hands of|\\S+ hands)',
'Plethora',
'Political (football|hot potato|Journey)',
'Post ?code lotter(y|ies)',
'Pot, Kettle',
'Prior to',
'Progressive',
'Progressives*',
optPrefixes('Psyche',  'American','National'),
'Psychodrama',
optSuffixes('Quantum',  'Leap'),
'Question mark over',
reqdPrefixes('Radar',  '(Below|Under)' + someWords(1,2)),
'Rais(es*|ing) awareness',
reqdPrefixes('Raison d.etre',  'Her','His'),
'Read(ing)?(| \\S*) the Riot Act',
'Real (change|choice|families|lives|people|relationships?|world)',
'Reality check',
optSuffixes('(Re)?arranging( the)? deckchairs',  'On the \\S'),
'Rebalanc(e|ing) (the|the \\S+|our) economy',
'(Re)?Connect with the voters',
'Red lines',
optSuffixes('Ride roughshod',  'Over','Poop'),
optDashes('Ring-fenced?'),
'Ring the changes',
optSuffixes('Robust',  'Evidence','Frameworks?','Measures?'),
'Rude awakening',
'Scant comfort',
'Scientifically proven',
'Scrap heap',
optDashes('(Sea|Step)-change'),
'Seal the Deal',
optSuffixes('Seismic',  'Shift'),
'Serve\\S? the purpose of',
'Serves to',
'Shocked and appalled',
optDashes('Shovel-ready'),
'Shred of credibility',
'Signage',
'Simples',
'Sing(ing|s)? from the same (hymn|song) sheet',
'Siren voices*',
'Sleaze',
'Sleepwalk(ing)?.? into',
optPrefixes('Smell the Coffee',  'Wake up and'),
'Social mobility',
'Something of a',
'Soubriquet',
'Speak(ing)? truth (un)?to power',
'Spiral of decline',
optDashes('Squeaky-bum-time'),
'Spiral out of control',
'Stand shoulder to shoulder with',
'Stark contrast',
'Staycation',
reqdSuffixes('Stinging',  'Attack','Criticism'),
'Substantive',
'Take up the cudgels for',
'Talismanic',
'Tangled web',
'Tectonic plates',
'The clue is in the (name|title)',
'The hallmarks of',
'The most important' + someWords(1,2) + ' you.ve never heard of',
'The Mother of all',
'The prospect of',
'The reason why',
'The reason is because',
'The(| simple) fact(| of the matter) is',
'The simple reason being',
'The truth( of the matter)? is',
'The \\S+ Delusion',
'Tick(ing|s)? all the( right)? boxes',
optDashes('(Ticking-)?' + 'Time-Bomb'),
optDashes('Tipping-point'),
'Tome',
'Toe(ing)? (the|\\S+) line',
'Too little, too late',
optDashes('Top-down'),
'Top priority',
'Touch base',
'Toxic',
'Tropes?',
'Turkeys voting for Christmas',
reqdPrefixes('Underbelly( of the city)?',  'Dark','Seedy','Sinister'),
'Underclass',
'Uni',
reqdPrefixes('Unique',  'Fairly','Particularly'),
'Unlock(ing)? potential',
'Up and down the country',
'Upcoming',
'Uptick',
'Utilis(e|ed|ing)',
'Vibran(t|cy)',
'Virtuous circle',
'Vulnerable moment',
'Waitlist(ed|ing)',
'Wake-up call',
'War of words',
'Way (beyond|more)',
'We are all \\S+ now',
'We are where we are',
optDashes('Well-oiled machine'),
reqdSuffixes('Westminster',  'Bubble','Village'),
optPrefixes('What drives (him|her)',  'Not'),
optPrefixes('What gets (him|her) up in the morning',  'Not'),
optDashes('Wheelchair-bound'),
'Wield the dagger',
'Wiggle room',
optPrefixes('Will take no (lectures|lessons)',  'I','We'),
'Win-win',
'Without fear or favour',
'Wow factor',
'Wreak havoc',
'You couldn.t make it up\\.?'];


var theCaseSensitiveCoreTerms = ['ConDems?( Government)?',
'Team [A-Z]\\S+'];


var theNotJustWordsTerms = [ optPrefixes('.?Son of the manse.?',  'Dour'),
'on speed\.'
];


var theCaseSensitiveNotJustWordsTerms = ['\\b' + 'As a [A-Z]\\S+' + someWords(0,2) + ',( I.m)?',
'It is what it is\\.',
'It was not meant to be like this\\.',
'SoLoMo',
'Step forward, [A-Z]\\S+',
'That is all\\.',
'To be fair,',
'\\b' + 'Well-worn clich(e|\\xE9)',
'\\b' + 'Who knew\\?'];


var theSpecialIgnoreTerms = ['(Points|Pulls?|Way) Ahead of',
'Common sense',
reqdSuffixes('Communities',  'Secretary'),
reqdSuffixes('Community',  'Cent(er|re)s?','Hospital','Order','School'),
'Equality Act',
'Hackathon',
'Jonathon',
'Marathon',
'Progressive (Space )?Rock',
'(Russian|Greek) Orthodoxy?' /* So all Orthodoxies are banned apart from these ones */,
'Sense of' + someWords(0,1) + ' humour',
'Team (Blog|Building|Meeting)',
reqdSuffixes('Toxic', 'Chemicals?','Gas(es)?','Nuclear','\\S+ Radioactive','Substances?'),
'Vital (organ|signs)',
'Was met with'
];


var theEducationSpeakTerms = [ 'Learnacy' ];


var theManagementSpeakTerms = [ optPrefixes('Action points?',  'Key','Numerous'),
optSuffixes('Adjective-rich',  'Answers'),
'Articulate (this|that) message',
optDashes('Best-of-(brand|breed)'),
reqdSuffixes('Brand',  'Positioning','Story'),
'Build on these (strengths)',
'Change agents?',
'Changemakers?',
'Coordinative leadership',
'Corporate citizen',
reqdSuffixes('Creat(e|ing) a',  'Place that','Space where'),
'Deliverables?',
'Delivery landscape',
'Demanding methodology',
'Digital by default',
reqdPrefixes('Direction', 'Strategic'),
reqdSuffixes('Downstream',  'Costs?'),
'Empathies',
'Extract adjectives',
'Fit for the future',
'Five point plan',
'Focus+ed objectives',
reqdSuffixes('Forward',  'Offer','Planning','Policy'),
reqdPrefixes('Frameworks?', 'Critical','Narrow','Policy','Strategic'),
optDashes('Game-chang(er|ing)'),
optPrefixes('Global leadership',  'Aspire to'),
'Going forward',
'Granular(ity)?',
optDashes('Ground-breaking'),
'Hardwired?',
'Helicopter view',
'Holistic',
optPrefixes('Horizon Shift',  'Engineer a'),
'Ignite their base',
'Implement \\S+ commitments?',
'Information age',
'Inject some clarity',
'Key technolog(y|ies)',
optSuffixes('Lead(ing)? cheerleader',  'Behind'),
'Leverage' + someWords(1,2) + ' functionality',
'Leverage the \\S+',
'Likeonomics?',
optDashes('Low-hanging fruit'),
'Mainstreaming',
'Metaphor questions?',
'(Off|On)-?boarding',
'Ongoing',
'Organically',
'Out of the box',
optPrefixes('Outreach',  'Intensify'),
optDashes('Outside-the-box'),
'Pacier',
optPrefixes( optSuffixes('Paradigm(atic|s)?',  'Shift'),  'Dominant'),
reqdPrefixes('Parameters?',  'Certain','Her','His','Important','Key','Main','The'),
'Partner with',
'Plurality concerns?',
'Pluss?ification',
optPrefixes('Produc(e|ing) the goods',  'To'),
optDashes('Purpose-driven'),
'Reactive incrementalism',
'Reinvent(ing)? the wheel',
'Resonates?( with)?',
'Root and branch',
'Service redesign',
'Shap(e|ing) the future',
optPrefixes('Shared value',  'Create'),
'Sharp-edged statements?',
'Sharpen(ing)? accountability',
'Shift the graph',
optSuffixes('Stakeholders?',  'Liaison'),
optDashes('State-of-the-art'),
optSuffixes('Step(ping)? up',  'To the plate'),
'Strategic (imperatives?|storytelling)',
'Sunsetting',
'Surface them',
reqdSuffixes('Sustainability',  'Champions?','Positioning'),
'Systemic( failure|ally)?',
'Systems thinking',
reqdSuffixes('Takeaway',  'Points?'),
'Take effect',
'Tak(e|ing) on board',
'Taking(\\S+)? forward',
optDashes('Thought-leader'),
'Tradigital',
'Transition into',
'Two-way dialogue',
'Undertaking in lieu',
'Unlock \\S+ dynamism',
'Value chains?',
'Vanilla Strategy',
reqdPrefixes('Vision',  'Cogent','coherent','coherent and compelling','compelling',optDashes('Long-term'),'(More )?Rounded'),
'Walk the talk',
'Web 2.0',
'Webinar',
'Where we need to (be|go)',
'Wrongsided?' + someWords(0,1) + ' demographic',
];


/* Abused sociological terms */
var theSociologyTerms = ['Disciplinarity',
'Eliciting meaning',
'Fact Pattern',
'Intersectionality',
'Meaning-(based|centered)',
optSuffixes('Overarching',  'Story'),
'Positionality',
optSuffixes('Psychodynamic',  'Dimensions'),
optSuffixes('Psychosocial',  'Dimensions'),
'Transformative',
];


/* Weaselly language used by lazy or tricky authors */
var theExtraWeaselTerms = ['Arguably',
/* 'Clearly', */
'Could be argued',
'Could do worse than',
'Demonstrably',
optSuffixes('Evidence (does show|shows)',  'That'),
'For (many|several) reasons',
reqdPrefixes('Good reasons',  'Many','Several'),
'In (many|numerous|several) ways',
'Is it any wonder',
optSuffixes('It goes without saying',  'That'),
'Key argument',
reqdPrefixes('Linked to',  'Has been','Is'),
'More than comparable.* (to|with)',
'Negative consequences?',
'Negative impact on \\S+',
'Negatively affect(ed)?',
'Not (inconceivable|inconsequential|unconnected)',
optPrefixes('One thing is certain',  'Only'),
'Research has shown',
reqdSuffixes('Seems only',  'Fair','Right','Sensible'),
/* 'Significant', */
'Some circumstances',
'Some have argued',
'Studies have (found|shown)',
'Troubling questions?',
optSuffixes('What is clear is',  'That'),
reqdPrefixes('Would Argue',  'Many','Some')
];


/* Extra political terms, added by Andrew Regan */
var theExtraTerms = ['Abundantly clear',
'A Capitalism that',
'Accelerating' + someWords(1,2) + ' change',
'Accelerating \\S+ and \\S+ change',
'Accelerating rapidly',
'A concept of what it means',
'A dynamic of',
'Against (a|this) backdrop',
reqdPrefixes('Agenda',  'Fairness','Strong'),
'Alarm bells( are)? ringing',
'An Economics that',
'Annus horribilis',
'Apropos nothing',
'Arc of history',
'Are we all' + someWords(1,2) + ' now\?',
'Backbone of Britain',
'Backsliding',
'Balkanis(e|ed|ation)',
optPrefixes('Baseline',  'Firm'),
'Blanket idea',
'Blink(ed)* in the face',
'Blood money',
'Body (blow|politic)',
'Bow down before',
'Brighton Rocks',
'Broad swathes?',
'Broad sweep of history',
'Broken Britain',
'By dint of',
'Byzantine complexity',
'Campaign groups?',
optSuffixes('Cannot afford the luxury of',  'Time'),
'Catastroph(e|ic)',
'Challenges? for both (Left|Right) and (Right|Left)',
'Chang(e|ing) the conversation',
reqdPrefixes('Clarity',  'Gain','Get'),
optSuffixes( optDashes('Cloud-cuckoo'),  'Land'),
'Clear (blue|red) water',
'Closer? to the ground',
'Clunking fist',
'Coherent (alternative|strategy)',
'Common story',
reqdPrefixes('Concerns',  'A few','Has','Have'),
'Concrete solutions?',
'Constant vigilance',
reqdPrefixes('Contradictions?',  'Internal','Its own'),
reqdPrefixes('Conversation',  'Contemporary','Economic','Grown-up','National','Nuanced','Political'),
'Conversation with the public',
optPrefixes('Creative industries',  'The'),
'Credibility gap',
'Creeping (deregulation|privati[s|z]ation)',
reqdPrefixes('Critical mass',  'Attained'),
'Cross(ed|ing)? (a|the) Rubicon',
optDashes('Crunch-time'),
'cui bono',
'Day of reckoning',
'Dead man walking',
'Deal or No Deal',
optDashes('Death-spiral'),
optPrefixes('Decency',  'Common'),
'Decent',
optPrefixes('Decent people',  'All'),
'Decimat(e|ing)',
'Defining moment',
'Deserve nothing less',
'Detoxify',
'Different kind of emphasis',
'Direction of (political )?travel',
reqdPrefixes('Discourse',  'Prevailing'),
'Do \\S+ differently',
'Do the right thing',
reqdSuffixes('Dustbin of',  'History','\\S+ failure'),
'Dust down the record',
'Echo \\S+ the years',
'Embrace reform',
reqdPrefixes('Engagement',  'Effective','Higher'),
optDashes('Ever-polarising'),
reqdPrefixes('Excess',  'Runaway'),
'Excessive',
'Excellence',
'Expeditious(ly)?',
'Factoids?',
'Fear to tread',
reqdSuffixes('Fertile',  'Ground','Territory'),
'Fight(ing)? the (fair|good) fight',
'Fight(ing)?,? tooth and nail',
'Fill(ing)? the black hole',
'Foot-dragging',
'For the few',
'Frau Merkel',
reqdSuffixes('Fundamental',  'Change','Debate','Issue'),
optSuffixes('Gendered',  'Dynamics','Lens'),
reqdSuffixes('Genuine',  'Attempt','Credibility'),
'Get(ting)? into bed with',
optPrefixes('Get serious',  'Need to'),
'Global world',
optDashes('Gold-plated'),
'Golden goose',
'Golden thread',
'Good ship \\S+',
optPrefixes('Good society',  'The'),
'Good values',
'Grand narrative',
'Grasp the nettle',
'Grassroots (movements?|supporters?)',
'Growing (calls|consensus)',
'Growth industries',
optDashes('Hard-pressed families'),
reqdSuffixes( optDashes('Hard-working'),  'Britons','Majority','Many','Taxpayers?'),
'(Has|Have) to go further',
'(Has|Have) resonance',
reqdPrefixes('(Has|Have) (Her|His|Their) views',  'He','She','They'),
'Have the values',
'\'Healthier\'',
'Hearts? ripped out',
'Hegemonic',
'Hove,? Actually',
'Human-scale',
'Humanitarian space',
'Hurtling towards',
'I make you this promise',
optSuffixes('Ideological',  'Divisions?','Gamble','Purpose','Reasons'),
'If that makes me a' + someWords(1,2) + '. then',
'In politics, as in \\S+',
'In the name of ideology',
'In the \\S+ worldview',
'In this era of \\S+',
'Increasingly noted',
'Inexorable',
'\\S+ in sheep\'s clothing',
reqdPrefixes('Insiders?',  'Downing Street'),
'Insignificant',
'Interests of the majority',
optPrefixes('(National|Public) Interest',  'The'),
optPrefixes('Internet is changing the way',  'The'),
'Iron \\S+ in \\S+ velvet glove',
optPrefixes('Issues? of conscience',  'Critical'),
'Issues that matter',
optSuffixes('Job of work',  'To do'),
'Jump(ed)* the shark',
optPrefixes('Jury is still out',  'The'),
reqdPrefixes('Justice',  'Gender','Social'),
'Kick in the teeth',
'Kulturkampf',
'Laid the foundations',
'Lamented',
reqdPrefixes('Landscape', 'Changed','Different','Economic','Political','Social'),
'Last chance saloon',
'Leading (\\S+ )?(blogger|campaigner|MP|reason|thinker|voice)s?',
'Leaps and bounds',
reqdSuffixes('Let.s be',  'Honest','Realistic'),
'Level killing-field',
'Licking their lips',
'Lifeblood',
'Listen very hard and you will hear',
'Litmus test',
'Little local difficulty',
'Lived experiences?',
'Loom large',
'Ludicrous',
'Made his mark',
'Map \\S+ agenda',
'Marathon not a sprint',
'May or may not',
'Meaningful',
/* 'Meaningless', */
/* 'Mechanisms', */
'Media moguls?',
'Mentality shift',
'Message discipline',
'Me-too approach',
'Metastorm',
'\'Minefield\'',
reqdPrefixes('Moment',  'Iraq War','poll tax'),
'Mounting opposition',
reqdSuffixes('Moral',  'Bankruptcy','Integrity'),
reqdSuffixes('Morally',  'Bankrupt','Important'),
'Mumtrepreneurs?',
'Nature of society',
'Netizen',
'Noises off',
'No less a \\S+ than',
'No-nonsense',
'Nonsensical',
'Non-traditional backgrounds?',
'No past to',
reqdPrefixes('Nostrums?',  'Fundamentalist'),
'Nothing short of',
'Not waving but drowning',
'Objective analysis',
'(\\S+s|People) of all (colou?rs|hues)',
reqdPrefixes('Of colou?r',  'Man','Men','People','Woman','Women'),
reqdPrefixes('Old days',  'Bad','Good'),
'Old (economic|political) certaint(y|ies)',
'On a knife edge',
'On a timely basis',
reqdPrefixes('On the beat',  'Bobbies','Police.*'),
'Only fair that',
'Operationali(s|z)(e|ation)',
'Organi(s|z)ational citizenship',
'Our culture',
'Our \\S+ crosshairs',
'Owns this turf',
'Panjandrums*',
optPrefixes('Parroting',  'Endless'),
'Pay packet',
'People of colou?r',
'Perma-austerity',
reqdPrefixes('Picture', 'Bigger'),
optPrefixes('Pivotal role', 'Play(s|ed)? a'),
optPrefixes('Plague on',  'A'),
optDashes('Political dead-end'),
'Political (calculus|dynamics*|furniture|lexicon|space)',
reqdPrefixes('Poll Tax',  '(The|This) Government.s','His','(Tony )?Blair.s','(David )?Cameron.s'),
'Prism',
'Privately delighted',
'\'Promising\'',
'Prostrated',
'Put manufacturing at its heart',
'Puts? the public interest before',
'Put(ting)? \\S+ at the (very )?heart of',
'Quality of place',
'Race is wide open',
'Reach(ing)? boiling point',
optSuffixes('Reach(ing)? out to',  'All people'),
optPrefixes('Real issues',  'Distract(ing)? from the'),
'Reared its(| ugly) head',
reqdPrefixes('Reception',  'Lukewarm'),
'Reciprocity',
'Redefine' + someWords(1,2) + ' politics',
'Red in tooth and claw',
'Reflect (our|their) values',
'Reframe',
'Remains to be seen',
'Responsible measures*',
'Rethink the very foundations?',
"Rising echo",
'Rolling programme',
'Rootedness',
optPrefixes('Rot has set in',  'The'),
'Rubs? salt into the wound',
'Sacrificed? (on|upon) the altar',
optSuffixes('Sacrificial lambs?',  'To the slaughter'),
'Say it again',
'Scale of the challenges? faced',
optPrefixes('Scarcely be able to believe',  'Must'),
'Scathing attacks?',
'Seared in(to)? my memory',
'Seiz(e|ing) the initiative',
'Self-(evident|hatred|indulgent|satisfied|serving)(ly)*',
'Senior( (Labour|Tory))? figures?',
'Sensible proposal',
'Set to continue',
'Shameless(ly)*',
'Shape a new deal',
'Sharply critical',
optPrefixes('Shibboleths?',  'Economic','Free-market','Market','Old'),
'Ship of state',
'Shock and awe',
'Shutting the stable door after the horse has bolted',
'Slap in the face',
'Slippery slope',
'Slow motion \\S+ crash',
reqdSuffixes('Social',  'Acceptability','Change','Cleansing','Legitimacy'),
reqdPrefixes('Sources?',  'Downing Street'),
'Squar(e|ing) the circle',
'Squeezed? families',
'Squeezed middle',
'Standstill commitments?',
reqdPrefixes('Story',  'Resonant'),
'Straitened times*',
optSuffixes('Strike at the heart',  'Of'),
'\'Strong case\'',
'Substantial',
'Sucking demand out',
'Sustainable (future|growth)',
'(Un)?Sustainab(le|ility)',
'Synapses? of struggle',
'Take the opportunity to',
'Tantamount',
optPrefixes('Tenets?',  'Central','Core','Key'),
'The reality is',
optPrefixes('The heart bleeds',  'How'),
'The (left|right) needs (a|to)',
optPrefixes('The reset button',  'Hit(ting)?'),
'The time for \\S+ is over',
optDashes('Thinly-veiled'),
reqdPrefixes('This forward',  'Move','Take'),
'(This|thus) far and no further',
'Those( not)? of faith',
'\\S+,? thy name is',
'To fit changing times',
optPrefixes('Traction',  'Gain'),
optPrefixes('Trajectory',  'Current'),
'Trenderati',
'Tsunami of \\S+',
'Unbeknownst',
'Uncharted waters',
'Undeniabl(e|y)',
optDashes('Under-funded'),
'Unforgettable',
'UK plc',
'Unsurprisingly',
reqdPrefixes('Uplift',  'Full'),
'Upkick',
'Upskill(ing)*',
optPrefixes('Vacuous',  'Ideologically','Intellectually'),
'Values? shift',
'Very distinctive',
'Vital',
optSuffixes('Vocalise',  '\\S+ feelings'),
'Vulnerable groups*',
'Waiting nervously',
reqdPrefixes('Ways? of thinking',  'New','Old'),
'Weather the' + someWords(0,3) + ' storm',
'We live in interesting times',
optPrefixes('Well-?being',  'General'),
'Where ' + andOrEither('children','young people') + ' come first',
'Where I am coming from',
'Where.s the beef?',
optPrefixes('Where we.re at( politically)?',  '(An )?Expression of'),
'Whiff of grapeshot',
'Whip(ping)? up a storm',
'Whither \\S+\?',
'Who will rid me of this turbulent \\S+\\??',
'Wiped off the value',
'Wip(e|ing) the slate clean',
optPrefixes('With a human face',  'Capitalism','Politics'),
'With( greater| our)? freedom( also| should)? comes?( greater)? responsibilit(y|ies)',
'Won.t happen by accident',
'Works for the many',
optSuffixes('Worship at the altar( of)?',  'Commercialism','Technology'),
'Year zero'
/* 'Young people' */];


/* 'Hooray' terms: the writer wants you to like something, e.g. Justice, Equality, People before Profit, etc. @ http://wordlywisdom.net/Boo-and-Hooray.php */
var theExtraHoorayTerms = ['A new thinking',
'Build(ing)? a different kind of',
optDashes('Ever-astute'),
'Fair(er)* (capitalism|economy|society|tax(es)?)',
'Fairness',
'For democracy',
optPrefixes('Integrated approach',  'Balanced and'),
'Integrated transport policy',
'National (mission|story)',
'New political settlement',
'New type of( \\S+)* (democracy|economics|economy|society)',
'Ordinary (families|people|working people)',
'People before profits?',
'Pithy',
'Prescient',
'Real (alternative|argument|generosity)',
'Responsible middle',
'Socially (acceptable|just)',
optDashes('Something-for-something'),
optPrefixes('Thoughtful',  'Ever-','Usually'),
optDashes('Three-dimensional approach'),
'Transform(ed|ing)? (Britain|Capitalism)'
];


/* 'Shut Up / Boo' terms: with a covert sneer, the writer wants you to dislike something @ http://wordlywisdom.net/Boo-and-Hooray.php */
var theExtraShutUpTerms = ['A Distraction',
'Abusive philosophy',
'Against democracy',
'Arch-(Blairite|Thatcherite)',
reqdPrefixes('Assumptions?',  'Absurd'),
'Austerians?',
'Backward-looking',
'Bow down to',
optPrefixes('Business as usual',  'Go back to','Return to'),
optPrefixes('Cannot be the change',  'He'),
reqdPrefixes('Capitalis(m|ts?)', optDashes('Gung-ho'),'Predatory','Vulture'),
'Chorus of criticism',
'Chutzpah',
'Clutch(ing)? at straws',
'Condemned to repeat \\S+',
'Congratulations, \\S+.',
'Consumeris(m|t|tic)',
'Corporate media',
'Crawl(ed)? out of the woodwork',
'Cuckoo in the \\S+ nest',
'Cynica(l|lly)',
'Defend(ing)* the indefensible',
'Delusional',
'Disaster Capitalism',
'Distort(ed|ing)',
'Disgrace(ful)*',
/* 'Disgusting', */
'Dodgy',
optPrefixes('Dogma',  'Economic','Left-?wing','Monetarist','Neo-?liberal','Right-?wing','Socialist'),
'Draconian',
optDashes('Economic dead-end'),
'Economic(ally)* illitera(te|cy)',
'Economic(ally)* incoheren(t|ce)',
'Economic madhouse',
'Ermine-clad',
'Evidence-free',
'Failed (policy|policies) of the past',
'Familiar litany',
'From another time',
reqdPrefixes('Fundamentalis(m|ts?)',  'Free-market','Market'),
optDashes('Half-baked'),
'Hard-(left|right)',
'Height of irresponsibility',
'Here we go again',
'High priests of \\S+',
'Hold(ing)? the \\S+ to ransom',
'Homosexualists?',
'Hysterical',
optDashes('Ideologically-driven'),
optPrefixes('Ideologues?',  'Economic',optDashes('Free-market')),
reqdPrefixes('Ideology',  'Discredited','Misguided'),
'Ill-(conceived|considered|founded|informed)',
'Immoral',
'Imperialis[m|t]',
'\\S+ In a hole, stop digging',
'In hock to',
'Insidious',
'invidious',
/* 'Irrationa(l|lly)', */
'Knee-jerk',
'Laughable',
'Law of the jungle',
'Liebore',
'Lurch to the \\S+',
'Makes no mention',
reqdPrefixes('Mantras?',  'Free-market'),
'Market-fundamentalist',
'Meanest intellect',
'Messianic',
'Mutual back-slapping',
'Neocons?',
optDashes('Neo-(Conservatives?|Reaganites?|Thatcherites?)'),
'Oldest trick in the (\\S+ )?book',
'Old-fashioned views?',
optPrefixes('Orthodox(y|ies)',  'Economic','Failed','Free-market','Keynesian','Market','Old','Past','Political','Right-?wing','Stale','Tired','Wrong'),
optSuffixes('Orthodox',  'Political( thinking)?'),
optPrefixes('Out of touch', 'Increasingly','So'),
'Pander(ing)? to',
'Parasites*',
'Pernicious',
'Political(ly)? incoheren(t|ce)',
'Pushy parents',
'Quaint',
'Quisling',
'Raced? to the bottom',
'Raise.? the spectre',
'Reactionary',
optPrefixes('Reactionaries',  'Cadre of'),
'Reckless',
'Regurgitat(e|ed|ing|ion)',
'Regressive',
'Same old failed \\S+',
'Scandalous',
'Shrill calls',
optPrefixes('Silence( (of|on)' + someWords(1,3) + ')? speaks volumes',  'Her','His','The','Their'),
'Slash-and-burn',
'Slash(ed|ing)?',
optDashes('Something-for-nothing'),
'Sowing the seeds of',
'Sparked outrage',
optDashes('Sticking-plaster solution'),
'Sycophantic',
'The old model of',
'The old (order|politics)',
'The old view',
'Tumbleweed',
reqdPrefixes('Types',  'Compass','Progress'),
'Uncritical',
'Undemocratic',
'Unfairness',
'Unintelligent',
'Unregulated',
'Unthinking',
'Vested interests?',
'Vultures*',
'Wanton',
'Warmist',
'Wholesale destruction',
'Will?ful ignorance',
'Wrong-headed(ness)?',
'Zombie arguments?'];


var theCaseSensitiveExtraTerms = ['[A-Z]\\S+' + 'ite spin',
'militant (cells?|groups?|organisations?)',
'militants?'
];


var theExtraHealthTerms = [
optPrefixes('(Aid|Block|Cure|Cut|Fight|Slow|Stop)s?( \\S+)? Cancer( Risk)?',  'Could','May'),
'At risk from',
optPrefixes('(Her |His |The |Their )?' + 'Battles? with cancer',  'Los(e|ing|t)','Win(ning)?','Won'),
'Battling cancer',
'Leading (health|medical) ' + andOr('bodies','charities'),
'Linked to( \\S+)? cancer',
reqdPrefixes('Save (more than|over|up to) \\S+ lives( a year)?',  'Could','May','Would')
];


////////////////////////////////////////////////////////////////////////////////

var coreTerms = [
    new BannedListTermSet({terms: theSpecialIgnoreTerms, className:'highlightIgnore', title:''}),
    new BannedListTermSet({terms: theCaseSensitiveCoreTerms, className:'highlightCore', title:'#BannedList entry', caseInsensitive:false}),
    new BannedListTermSet({terms: theNotJustWordsTerms, ignoreWordBoundaries:true, className:'highlightCore', title:'#BannedList entry'}),
    new BannedListTermSet({terms: theCaseSensitiveNotJustWordsTerms, caseInsensitive:false, ignoreWordBoundaries:true, className:'highlightCore', title:'#BannedList entry'}),
    new BannedListTermSet({terms: theManagementSpeakTerms, className:'highlightMgmt', title:'#BannedList Management Speak'}),
    new BannedListTermSet({terms: theEducationSpeakTerms, className:'highlightMgmt', title:'#BannedList Education Speak'}),
    new BannedListTermSet({terms: theCoreTerms, className:'highlightCore', title:'#BannedList entry'})
];

var extraTerms = [
    new BannedListTermSet({terms: theExtraTerms, className:'highlightExtra', title:'#BannedList Extras: dodgy political language'}),
    new BannedListTermSet({terms: theExtraShutUpTerms, className:'highlightShutUp', title:'#BannedList Extras: "Boo" terms'}),
    new BannedListTermSet({terms: theExtraHoorayTerms, className:'highlightHooray', title:'#BannedList Extras: "Hooray" terms'}),
    new BannedListTermSet({terms: theExtraWeaselTerms, className:'highlightExtra', title:'#BannedList Extras: weasel terms'}),
    new BannedListTermSet({terms: theSociologyTerms, className:'highlightExtra', title:'#BannedList Extras: dodgy sociological terms'}),
    new BannedListTermSet({terms: theExtraHealthTerms, className:'highlightExtra', title:'#BannedList Extras: dodgy Health language'}),
    new BannedListTermSet({terms: theCaseSensitiveExtraTerms, className:'highlightExtra', title:'#BannedList Extras: dodgy political language', caseInsensitive:false})
];

////////////////////////////////////////////////////////////////////////////////

$(function() {
    hilightFallacies( document.URL, $('body'));

    chrome.extension.sendRequest({ method: "getOptions"}, function(inResp) {
        processPage( inResp.options );
    });
});

chrome.extension.onRequest.addListener(
    function( inReq, inSender, inSendResponse) {
        if ( inReq.method == "getOptions") {
            $('body').removeHighlights();
            var theHistory = {};
            refreshBannedStuff( inReq.options, null, null, theHistory);
            insertTermCounts( theHistory, inReq.options);
        } else if ( inReq.method == "showSubmitOptions") {
            showSubmissionDialog( inReq, inSendResponse);
        } else if ( inReq.method == "showSubmitFallacyOptions") {
            showSubmitFallacyDialog( inReq, inSendResponse);
        }
    }
);

function processPage( inOptions ) {
    var theHistory = {};
    if (shouldNotSubmitStatsFor( document.URL )) {
        chrome.extension.sendRequest({ method: "resetBadge"} );
        refreshBannedStuff( inOptions, document.URL, null, theHistory);
    } else {
        var theStats = {};
        theStats['$meta'] = {url: trimUrlForStats( document.URL ), title: getPageTitle(), uniqueTerms: 0, totalMatches: 0};
        refreshBannedStuff( inOptions, document.URL, theStats, theHistory);

        var unqs = theStats['$meta'].uniqueTerms;
        var score = ( unqs == 0) ? 0 : Math.round( Math.pow( unqs, 1.4) * Math.pow( theStats['$meta'].totalMatches / unqs, 0.7) );
        chrome.extension.sendRequest({ method: "setBadge", score: score, url: document.URL});

        submitAnonymousStats( theStats, score);
    }

    insertTermCounts( theHistory, inOptions);

    callChurnalism( document.URL );
}

function refreshBannedStuff( inOptions, inDocUrl, ioStats, ioHistory) {
    if ( inOptions["extras.special.goodOrBad"] == 'true') {
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

    for ( var i = 0; i < coreTerms.length; i++) {
        $('body').highlight( ioStats, ioHistory, inDocUrl, coreTerms[i], inOptions);
    }

    if ( inOptions["extras.politics.andrew1"] == 'true') {
        for ( var i = 0; i < extraTerms.length; i++) {
            $('body').highlight( ioStats, ioHistory, inDocUrl, extraTerms[i], inOptions);
        }
    }
}