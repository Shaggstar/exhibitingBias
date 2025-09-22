export type BibEntry = {
  id: string;
  type: string;
  fields: Record<string, string>;
  citation: string;
};

const RAW_BIB = String.raw`
@article{moffettHumanIdentityEvolution2013,
	title = {Human {Identity} and the {Evolution} of {Societies}},
	volume = {24},
	issn = {1045-6767, 1936-4776},
	doi = {10.1007/s12110-013-9170-3},
	language = {english},
	number = {3},
	urldate = {2020-11-03},
	journal = {Human Nature},
	author = {Moffett, Mark W.},
	month = sep,
	year = {2013},
	pages = {219--267},
}

@book{kinzlerHOWYOUSAY2021,
	address = {S.l.},
	title = {{HOW} {YOU} {SAY} {IT}: {Why} you talk the way you do - andwhat it says about you.},
	isbn = {978-0-358-56710-3},
	shorttitle = {How you say it},
	language = {english},
	publisher = {MARINER BOOKS},
	author = {Kinzler, Katherine D},
	year = {2021},
	annote = {OCLC: 1192307819},
}

@article{kinzlerAccentTrumpsRace2009,
	title = {Accent {Trumps} {Race} in {Guiding} {Children}'s {Social} {Preferences}},
	volume = {27},
	issn = {0278-016X},
	doi = {10.1521/soco.2009.27.4.623},
	language = {english},
	number = {4},
	urldate = {2023-02-03},
	journal = {Social Cognition},
	author = {Kinzler, Katherine D. and Shutts, Kristin and DeJesus, Jasmine and Spelke, Elizabeth S.},
	month = aug,
	year = {2009},
	pages = {623--634},
}

@article{HSAltriusmEcon,
	title = {Altruism and economics},
	volume = {18},
	issn = {00945056, 19394632},
	number = {1},
	journal = {Eastern Economic Journal},
	author = {Simon, Herbert A.},
	year = {1992},
	note = {JSTOR: 40325366
Publisher: Palgrave Macmillan Journals},
	pages = {73--83},
}

@book{hofstadterSurfacesEssencesAnalogy2013,
	address = {New York},
	title = {Surfaces and essences: {Analogy} as the fuel and fire of thinking},
	isbn = {978-0-465-01847-5},
	shorttitle = {Surfaces and essences},
	publisher = {Basic Books},
	author = {Hofstadter, Douglas R. and Sander, Emmanuel},
	year = {2013},
	note = {tex.lccn: BD190 .H64 2013},
	keywords = {Analogy, Reasoning},
	annote = {OCLC: ocn632081685},
}

@book{heyesCognitiveGadgetsCultural2018,
	address = {Cambridge, Massachusetts},
	title = {Cognitive gadgets: {The} cultural evolution of thinking},
	isbn = {978-0-674-98015-0},
	shorttitle = {Cognitive gadgets},
	abstract = {How did human minds become so different from those of other animals? What accounts for our capacity to understand the way the physical world works, to think ourselves into the minds of others, to gossip, read, tell stories about the past, and imagine the future? These questions are not new: they have been debated by philosophers, psychologists, anthropologists, evolutionists, and neurobiologists over the course of centuries. One explanation widely accepted today is that humans have special cognitive instincts. Unlike other living animal species, we are born with complicated mechanisms for reasoning about causation, reading the minds of others, copying behaviors, and using language. Cecilia Heyes agrees that adult humans have impressive pieces of cognitive equipment. In her framing, however, these cognitive gadgets are not instincts programmed in the genes but are constructed in the course of childhood through social interaction. Cognitive gadgets are products of cultural evolution, rather than genetic evolution. At birth, the minds of human babies are only subtly different from the minds of newborn chimpanzees. We are friendlier, our attention is drawn to different things, and we have a capacity to learn and remember that outstrips the abilities of newborn chimpanzees. Yet when these subtle differences are exposed to culture-soaked human environments, they have enormous effects. They enable us to upload distinctively human ways of thinking from the social world around us. As Cognitive Gadgets makes clear, from birth our malleable human minds can learn through culture not only what to think but how to think it.–},
	publisher = {The Belknap Press of Harvard University Press},
	author = {Heyes, Cecilia M.},
	year = {2018},
	note = {tex.lccn: BF311 .H46916 2018},
	keywords = {mores, Cultural Evolutionary Psychology},
}

@article{heyesCulturalEvolutionMind2014,
	title = {The cultural evolution of mind reading},
	volume = {344},
	issn = {0036-8075, 1095-9203},
	doi = {10.1126/science.1243091},
	abstract = {Learning to read minds starts early No parent needs reminding that children are born with a surprising set of abilities. But children still need many hours of guidance and instruction. Heyes and Frith review one particular social cognitive skill: reading the minds of others (or at least working out what other people are thinking and feeling). An unrefined capacity for “mind reading” is present in infants, but teaching is necessary to develop the full-blown capacity seen in adults. The authors draw parallels between learning to read and learning to read minds. Science , this issue p. 10.1126/science.1243091 , It is not just a manner of speaking: “Mind reading,” or working out what others are thinking and feeling, is markedly similar to print reading. Both of these distinctly human skills recover meaning from signs, depend on dedicated cortical areas, are subject to genetically heritable disorders, show cultural variation around a universal core, and regulate how people behave. But when it comes to development, the evidence is conflicting. Some studies show that, like learning to read print, learning to read minds is a long, hard process that depends on tuition. Others indicate that even very young, nonliterate infants are already capable of mind reading. Here, we propose a resolution to this conflict. We suggest that infants are equipped with neurocognitive mechanisms that yield accurate expectations about behavior (“automatic” or “implicit” mind reading), whereas “explicit” mind reading, like literacy, is a culturally inherited skill; it is passed from one generation to the next by verbal instruction.},
	language = {english},
	number = {6190},
	urldate = {2022-07-30},
	journal = {Science (New York, N.Y.)},
	author = {Heyes, Cecilia M. and Frith, Chris D.},
	month = jun,
	year = {2014},
	pages = {1243091},
}

@book{greeneMoralTribesEmotion2013,
	address = {New York},
	title = {Moral tribes: {Emotion}, reason, and the gap between us and them},
	isbn = {978-1-59420-260-5},
	shorttitle = {Moral tribes},
	publisher = {The Penguin Press},
	author = {Greene, Joshua David},
	year = {2013},
	note = {tex.lccn: BJ1031 .G75 2013},
	keywords = {Emotions, Civilization, Ethics},
}

@article{coase_nature_1937,
	title = {The {Nature} of the {Firm}},
	volume = {4},
	issn = {0013-0427, 1468-0335},
	url = {https://onlinelibrary.wiley.com/doi/10.1111/j.1468-0335.1937.tb00002.x},
	doi = {10.1111/j.1468-0335.1937.tb00002.x},
	language = {en},
	number = {16},
	urldate = {2022-08-15},
	journal = {Economica},
	author = {Coase, R. H.},
	month = nov,
	year = {1937},
	pages = {386--405},
}

@book{derrida_grammatology_2016,
	address = {Baltimore},
	edition = {Fortieth-Anniversary Edition},
	title = {Of {Grammatology}},
	isbn = {978-1-4214-1995-4},
	language = {eng},
	publisher = {Johns Hopkins University Press},
	author = {Derrida, Jacques and Spivak, Gayatri Chakravorty},
	year = {2016},
	keywords = {Philosophy, Language and languages, Writing},
	annote = {Originally published in France under the title De la Grammatologie Copyright (c) 1967 by Les Editions de Minuit},
}

@book{jung_man_1968,
	address = {New York},
	series = {Laurel},
	title = {Man and his symbols},
	isbn = {978-0-440-35183-2},
	language = {eng},
	publisher = {Dell},
	editor = {Jung, C. G. and Franz, Marie-Louise von and Henderson, Joseph L. and Jacobi, Jolande and Jaffé, Aniela},
	year = {1968},
	annote = {Hier auch später erschienene, unveränderte Nachdrucke},
}

@book{ridley_rational_2011,
	address = {New York, NY},
	title = {The rational optimist: how prosperity evolves},
	isbn = {978-0-06-145206-2},
	shorttitle = {The rational optimist},
	abstract = {The "New York Times"-bestselling author of "Genome" and "The Red Queen" offers a provocative case for an economics of hope, arguing that the benefits of commerce, technology, innovation, and change--cultural evolution--will inevitably increase human prosperity},
	language = {eng},
	publisher = {HarperCollins},
	author = {Ridley, Matt},
	year = {2011},
}

@book{acemoglu_why_2012,
	address = {New York},
	edition = {1st ed},
	title = {Why nations fail: the origins of power, prosperity and poverty},
	isbn = {978-0-307-71921-8},
	shorttitle = {Why nations fail},
	publisher = {Crown Publishers},
	author = {Acemoglu, Daron and Robinson, James A.},
	year = {2012},
	keywords = {Economic aspects, Economics, Political aspects, Developing countries, Economic development, Economic history, Economic policy, Poverty, Revolutions, Social policy},
}

@article{fisher_narrative_1985,
	title = {The {Narrative} {Paradigm}: {In} the {Beginning}},
	volume = {35},
	issn = {0021-9916, 1460-2466},
	shorttitle = {The {Narrative} {Paradigm}},
	url = {https://academic.oup.com/joc/article/35/4/74-89/4282872},
	doi = {10.1111/j.1460-2466.1985.tb02974.x},
	language = {en},
	number = {4},
	urldate = {2021-10-21},
	journal = {Journal of Communication},
	author = {Fisher, Walter R.},
	month = dec,
	year = {1985},
	pages = {74--89},
}

@book{haig_darwin_2020,
	address = {Cambridge, Massachusetts},
	title = {From {Darwin} to {Derrida}: selfish genes, social selves, and the meanings of life},
	isbn = {978-0-262-04378-6},
	shorttitle = {From {Darwin} to {Derrida}},
	abstract = {"The main task of this book is to explain how the process of natural selection produces purposeful beings that make sense of their world - organisms who do things for good reasons. It provides a link between a physical world described in terms of matter in motion and a living world described in terms of meanings and purposes. ..."},
	publisher = {The MIT Press},
	author = {Haig, David},
	year = {2020},
	keywords = {History, Natural selection},
}

@book{kay_radical_2020,
	address = {New York, NY},
	edition = {First edition},
	title = {Radical uncertainty: decision-making beyond the numbers},
	isbn = {978-1-324-00477-6},
	shorttitle = {Radical uncertainty},
	abstract = {"In a changing world, forecasts and numbers usually represent bogus quantification. ..."},
	publisher = {W. W. Norton & Company},
	author = {Kay, J. A. and King, Mervyn A.},
	year = {2020},
	keywords = {Consumer behavior, Decision making, Economic aspects, Economics, Psychological aspects},
}

@book{bloom_just_2013,
	address = {New York},
	edition = {First Edition},
	title = {Just babies: the origins of good and evil},
	isbn = {978-0-307-88684-2 978-0-307-88685-9},
	shorttitle = {Just babies},
	language = {eng},
	publisher = {Crown Publishers},
	author = {Bloom, Paul},
	year = {2013},
	note = {OCLC: 828484158},
	annote = {"A leading cognitive scientist argues that a deep sense of good and evil is bred in the bone."},
}

@article{fehr_nature_2003,
	title = {The nature of human altruism},
	volume = {425},
	issn = {0028-0836, 1476-4687},
	url = {http://www.nature.com/articles/nature02043},
	doi = {10.1038/nature02043},
	language = {en},
	number = {6960},
	urldate = {2020-12-20},
	journal = {Nature},
	author = {Fehr, Ernst and Fischbacher, Urs},
	month = oct,
	year = {2003},
	pages = {785--791},
}

@book{heyes_cognitive_2018,
	address = {Cambridge, Massachusetts},
	title = {Cognitive gadgets: the cultural evolution of thinking},
	isbn = {978-0-674-98015-0},
	shorttitle = {Cognitive gadgets},
	abstract = {...},
	publisher = {The Belknap Press of Harvard University Press},
	author = {Heyes, Cecilia M.},
	year = {2018},
	keywords = {mores, Cultural Evolutionary Psychology},
	annote = {A question and many answers -- Nature, nurture, culture -- Starter kit -- Cultural learning -- Selective social learning -- Imitation -- Mindreading -- Language -- Cultural evolutionary psychology},
}

@book{greenwood_becoming_2015,
	address = {Cambridge, Massachusetts},
	series = {Life and mind: philosophical issues in biology and psychology},
	title = {Becoming human: the ontogenesis, metaphysics, and expression of human emotionality},
	isbn = {978-0-262-02978-0},
	shorttitle = {Becoming human},
	publisher = {The MIT Press},
	author = {Greenwood, Jennifer},
	year = {2015},
	keywords = {mores, Cultural Evolutionary Psychology, Emotions},
	annote = {Preface -- Acknowledgments -- Introduction and chapter outlines -- Theories of emotion -- ...},
}

@incollection{shackelford_morality_2016,
	address = {Cham},
	title = {Morality as {Cooperation}: {A} {Problem}-{Centred} {Approach}},
	isbn = {978-3-319-19670-1 978-3-319-19671-8},
	shorttitle = {Morality as {Cooperation}},
	url = {http://link.springer.com/10.1007/978-3-319-19671-8_2},
	urldate = {2020-11-04},
	booktitle = {The {Evolution} of {Morality}},
	publisher = {Springer International Publishing},
	author = {Curry, Oliver Scott},
	editor = {Shackelford, Todd K. and Hansen, Ranald D.},
	year = {2016},
	doi = {10.1007/978-3-319-19671-8_2},
	note = {Series Title: Evolutionary Psychology},
	pages = {27--51},
}

@book{henrich_secret_2016,
	address = {Princeton Oxford},
	title = {The secret of our success: how culture is driving human evolution, domesticating our species and making us smarter},
	isbn = {978-0-691-17843-1 978-0-691-16685-8},
	shorttitle = {The secret of our success},
	language = {eng},
	publisher = {Princeton University Press},
	author = {Henrich, Joseph},
	year = {2016},
	note = {OCLC: 939525915},
	annote = {A puzzling primate -- It's not our intelligence -- Lost European explorers -- ...},
}

@book{hidalgo_why_2015,
	address = {New York},
	title = {Why information grows: the evolution of order, from atoms to economies},
	isbn = {978-0-14-197802-4 978-0-465-04899-1 978-0-465-03971-5},
	shorttitle = {Why information grows},
	abstract = {Why do some nations prosper while others do not? ...},
	language = {eng},
	publisher = {Basic Books},
	author = {Hidalgo, César A.},
	year = {2015},
	note = {OCLC: 923736931},
}

@article{sandved-smith_towards_2021,
	title = {Towards a computational phenomenology of mental action: modelling meta-awareness and attentional control with deep parametric active inference},
	volume = {2021},
	issn = {2057-2107},
	shorttitle = {Towards a computational phenomenology of mental action},
	url = {https://academic.oup.com/nc/article/doi/10.1093/nc/niab018/6358635},
	doi = {10.1093/nc/niab018},
	abstract = {Abstract ...},
	language = {en},
	number = {1},
	urldate = {2024-03-02},
	journal = {Neuroscience of Consciousness},
	author = {Sandved-Smith, Lars and Hesp, Casper and Mattout, Jérémie and Friston, Karl and Lutz, Antoine and Ramstead, Maxwell J D},
	month = sep,
	year = {2021},
	pages = {niab018},
}

@article{WARNEKEN2009397,
	title = {Varieties of altruism in children and chimpanzees},
	volume = {13},
	issn = {1364-6613},
	doi = {10.1016/j.tics.2009.06.008},
	abstract = {Recent empirical research has shed new light on the perennial question of human altruism. ...},
	number = {9},
	journal = {Trends in Cognitive Sciences},
	author = {Warneken, Felix and Tomasello, Michael},
	year = {2009},
	pages = {397--402},
}

@book{tomaselloCulturalOriginsHuman2003,
	address = {Cambridge, Mass.},
	edition = {4. print},
	title = {The cultural origins of human cognition},
	isbn = {978-0-674-00582-2},
	language = {english},
	publisher = {Harvard Univ. Press},
	author = {Tomasello, Michael},
	year = {2003},
	keywords = {mores, Cultural Evolutionary Psychology},
	annote = {OCLC: 247736399},
}

@incollection{sheskinEvolutionMoralityWhich2012,
	edition = {1},
	title = {The {Evolution} of {Morality}: {Which} {Aspects} of {Human} {Moral} {Concerns} {Are} {Shared} {With} {Nonhuman} {Primates}?},
	isbn = {978-0-19-973818-2 978-0-19-994094-3},
	shorttitle = {The {Evolution} of {Morality}},
	abstract = {Abstract Morality is a critical part of human society. ...},
	language = {english},
	urldate = {2023-02-20},
	booktitle = {The {Oxford} {Handbook} of {Comparative} {Evolutionary} {Psychology}},
	publisher = {Oxford University Press},
	author = {Sheskin, Mark and Santos, Laurie},
	editor = {Shackelford, Todd K. and Vonk, Jennifer},
	month = sep,
	year = {2012},
	doi = {10.1093/oxfordhb/9780199738182.013.0023},
	keywords = {Animal-Morality},
	pages = {434--450},
}

@article{scheinTheoryDyadicMorality2018,
	title = {The {Theory} of {Dyadic} {Morality}: {Reinventing} {Moral} {Judgment} by {Redefining} {Harm}},
	volume = {22},
	issn = {1088-8683, 1532-7957},
	shorttitle = {The {Theory} of {Dyadic} {Morality}},
	doi = {10.1177/1088868317698288},
	language = {english},
	number = {1},
	urldate = {2020-11-04},
	journal = {Personality and Social Psychology Review},
	author = {Schein, Chelsea and Gray, Kurt},
	month = feb,
	year = {2018},
	pages = {32--70},
}

@book{nobleDanceTuneLife2017,
	address = {Cambridge ; New York},
	title = {Dance to the tune of life: {Biological} relativity},
	isbn = {978-1-107-17624-9},
	shorttitle = {Dance to the tune of life},
	publisher = {Cambridge University Press},
	author = {Noble, Denis},
	year = {2017},
	note = {tex.lccn: QH325 .N625 2017},
	keywords = {Life, Origin, Biodiversity, Biological Evolution, Cosmology, Evolution (Biology), Genetic Variation, Origin of Life, Relativity},
}

@book{northInstitutionsInstitutionalChange1990,
	address = {Cambridge ; New York},
	series = {The {Political} economy of institutions and decisions},
	title = {Institutions, institutional change, and economic performance},
	isbn = {978-0-521-39416-1 978-0-521-39734-6},
	publisher = {Cambridge University Press},
	author = {North, Douglass C.},
	year = {1990},
	note = {tex.lccn: HB99.5 .N67 1990},
	keywords = {Economic development, Institutional economics, Organizational change},
}

@book{moffettHumanSwarmHow2019,
	address = {New York},
	title = {The human swarm: {How} our societies arise, thrive, and fall},
	isbn = {978-0-465-05568-5},
	shorttitle = {The human swarm},
	publisher = {Basic Books},
	author = {Moffett, Mark W.},
	month = jan,
	year = {2019},
	note = {tex.lccn: HM585 .M64 2019},
	keywords = {Communities, Sociology},
}

@book{tomasello_cultural_2003,
	address = {Cambridge, Mass.},
	edition = {4. print},
	title = {The cultural origins of human cognition},
	isbn = {978-0-674-00582-2},
	language = {eng},
	publisher = {Harvard Univ. Press},
	author = {Tomasello, Michael},
	year = {2003},
	note = {OCLC: 247736399},
	keywords = {mores, Cultural Evolutionary Psychology},
	annote = {Includes bibliographical references (p. [219] - 240) and index},
}

@book{acemogluWhyNationsFail2012,
	address = {New York},
	edition = {1st ed},
	title = {Why nations fail: {The} origins of power, prosperity and poverty},
	isbn = {978-0-307-71921-8},
	shorttitle = {Why nations fail},
	publisher = {Crown Publishers},
	author = {Acemoglu, Daron and Robinson, James A.},
	year = {2012},
	note = {tex.lccn: HB74.P65 A28 2012},
	keywords = {Economic aspects, Economics, Political aspects, Developing countries, Economic development, Economic history, Economic policy, Poverty, Revolutions, Social policy},
}

@book{derrida_writing_2017,
	address = {London},
	edition = {Transferred to digital print. 2006, repr},
	series = {Routledge classics},
	title = {Writing and difference},
	isbn = {978-0-415-25383-3},
	publisher = {Routledge},
	author = {Derrida, Jacques and Bass, Alan},
	year = {2017},
	annote = {Translation of L'écriture et la différence. - Includes bibliographical references. - This translation originally published: Chicago, Ill.: Chicago University Press; London: Routledge and Kegan Paul, 1978},
}

@article{friston_duet_2015,
	title = {A {Duet} for one},
	volume = {36},
	issn = {10538100},
	url = {https://linkinghub.elsevier.com/retrieve/pii/S105381001400230X},
	doi = {10.1016/j.concog.2014.12.003},
	language = {en},
	urldate = {2023-09-03},
	journal = {Consciousness and Cognition},
	author = {Friston, Karl and Frith, Christopher},
	month = nov,
	year = {2015},
	pages = {390--405},
}

@article{isomura_bayesian_2019,
	title = {Bayesian {Filtering} with {Multiple} {Internal} {Models}: {Toward} a {Theory} of {Social} {Intelligence}},
	volume = {31},
	issn = {0899-7667, 1530-888X},
	shorttitle = {Bayesian {Filtering} with {Multiple} {Internal} {Models}},
	url = {https://direct.mit.edu/neco/article/31/12/2390-2431/95613},
	doi = {10.1162/neco_a_01239},
	abstract = {To exhibit social intelligence, animals have to recognize whom they are communicating with. ...},
	language = {en},
	number = {12},
	urldate = {2023-09-03},
	journal = {Neural Computation},
	author = {Isomura, Takuya and Parr, Thomas and Friston, Karl},
	month = dec,
	year = {2019},
	pages = {2390--2431},
}

@article{levin_computational_2019,
	title = {The {Computational} {Boundary} of a “{Self}”: {Developmental} {Bioelectricity} {Drives} {Multicellularity} and {Scale}-{Free} {Cognition}},
	volume = {10},
	issn = {1664-1078},
	shorttitle = {The {Computational} {Boundary} of a “{Self}”},
	url = {https://www.frontiersin.org/article/10.3389/fpsyg.2019.02688/full},
	doi = {10.3389/fpsyg.2019.02688},
	urldate = {2023-07-18},
	journal = {Frontiers in Psychology},
	author = {Levin, Michael},
	month = dec,
	year = {2019},
	pages = {2688},
}

@article{fields_how_2020,
	title = {How {Do} {Living} {Systems} {Create} {Meaning}?},
	volume = {5},
	issn = {2409-9287},
	url = {https://www.mdpi.com/2409-9287/5/4/36},
	doi = {10.3390/philosophies5040036},
	abstract = {Meaning has traditionally been regarded as a problem for philosophers and psychologists. ...},
	language = {en},
	number = {4},
	urldate = {2023-07-08},
	journal = {Philosophies},
	author = {Fields, Chris and Levin, Michael},
	month = nov,
	year = {2020},
	pages = {36},
}

@article{friston_generative_2020,
	title = {Generative models, linguistic communication and active inference},
	volume = {118},
	issn = {01497634},
	url = {https://linkinghub.elsevier.com/retrieve/pii/S0149763420304668},
	doi = {10.1016/j.neubiorev.2020.07.005},
	language = {en},
	urldate = {2023-05-30},
	journal = {Neuroscience & Biobehavioral Reviews},
	author = {Friston, Karl J. and Parr, Thomas and Yufik, Yan and Sajid, Noor and Price, Catherine J. and Holmes, Emma},
	month = nov,
	year = {2020},
	pages = {42--64},
}

@article{tomasello_cultural_2016,
	title = {Cultural {Learning} {Redux}},
	volume = {87},
	issn = {00093920},
	url = {https://onlinelibrary.wiley.com/doi/10.1111/cdev.12499},
	doi = {10.1111/cdev.12499},
	language = {en},
	number = {3},
	urldate = {2023-05-29},
	journal = {Child Development},
	author = {Tomasello, Michael},
	month = may,
	year = {2016},
	pages = {643--653},
}

@article{liberman_origins_2017,
	title = {The {Origins} of {Social} {Categorization}},
	volume = {21},
	issn = {13646613},
	url = {https://linkinghub.elsevier.com/retrieve/pii/S1364661317300761},
	doi = {10.1016/j.tics.2017.04.004},
	language = {en},
	number = {7},
	urldate = {2023-02-03},
	journal = {Trends in Cognitive Sciences},
	author = {Liberman, Zoe and Woodward, Amanda L. and Kinzler, Katherine D.},
	month = jul,
	year = {2017},
	pages = {556--568},
}

@article{dunbar_gossip_2004,
	title = {Gossip in {Evolutionary} {Perspective}},
	volume = {8},
	issn = {1089-2680, 1939-1552},
	url = {http://journals.sagepub.com/doi/10.1037/1089-2680.8.2.100},
	doi = {10.1037/1089-2680.8.2.100},
	abstract = {Conversation is a uniquely human phenomenon. ...},
	language = {en},
	number = {2},
	urldate = {2022-12-09},
	journal = {Review of General Psychology},
	author = {Dunbar, R. I. M.},
	month = jun,
	year = {2004},
	pages = {100--110},
}

@book{friedmanPriceTheory2008,
	address = {S.l.},
	title = {Price theory},
	isbn = {978-1-60796-151-2},
	language = {english},
	publisher = {The Richest Man in Babylon Publ.},
	author = {Friedman, Milton},
	year = {2008},
	annote = {OCLC: 781479370},
}

@book{derridaPositions1998,
	address = {Chicago, Ill},
	edition = {Paperback ed., [Nachdr.]},
	title = {Positions},
	isbn = {978-0-226-14331-6},
	language = {english},
	publisher = {Univ. Chicago Press},
	author = {Derrida, Jacques and Bass, Alan},
	year = {1998},
}

@incollection{curryMoralityCooperationProblemCentred2016,
	address = {Cham},
	title = {Morality as {Cooperation}: {A} {Problem}-{Centred} {Approach}},
	isbn = {978-3-319-19670-1 978-3-319-19671-8},
	shorttitle = {Morality as {Cooperation}},
	urldate = {2020-11-04},
	booktitle = {The {Evolution} of {Morality}},
	publisher = {Springer International Publishing},
	author = {Curry, Oliver Scott},
	editor = {Shackelford, Todd K. and Hansen, Ranald D.},
	year = {2016},
	doi = {10.1007/978-3-319-19671-8_2},
	pages = {27--51},
}

@article{cohenEvolutionTagBasedCooperation2012,
	title = {The {Evolution} of {Tag}-{Based} {Cooperation} in {Humans}: {The} {Case} for {Accent}},
	volume = {53},
	issn = {0011-3204, 1537-5382},
	shorttitle = {The {Evolution} of {Tag}-{Based} {Cooperation} in {Humans}},
	doi = {10.1086/667654},
	language = {english},
	number = {5},
	urldate = {2022-05-06},
	journal = {Current Anthropology},
	author = {Cohen, Emma},
	month = oct,
	year = {2012},
	keywords = {Shibboleth},
	pages = {588--616},
}

@book{collinsIntroducingDerridaGraphic2011,
	address = {London},
	title = {Introducing {Derrida}: {A} graphic guide},
	isbn = {978-1-84831-205-0},
	shorttitle = {Introducing {Derrida}},
	language = {english},
	publisher = {Icon Books},
	author = {Collins, Jeff and Mayblin, Bill},
	year = {2011},
}

@book{boehmMoralOriginsEvolution2012,
	address = {New York},
	title = {Moral origins: {The} evolution of virtue, altruism, and shame},
	isbn = {978-0-465-02048-5},
	shorttitle = {Moral origins},
	publisher = {Basic Books},
	author = {Boehm, Christopher},
	year = {2012},
	note = {tex.lccn: BJ1311 .B645 2012},
	keywords = {mores, Virtue-Grist, Altruism, Ethics, Evolutionary, Shame},
	annote = {OCLC: ocn657595623},
}

@article{albarracinEpistemicCommunitiesActive2022,
	title = {Epistemic {Communities} under {Active} {Inference}},
	volume = {24},
	issn = {1099-4300},
	doi = {10.3390/e24040476},
	abstract = {The spread of ideas is a fundamental concern of today's news ecology. ...},
	language = {english},
	number = {4},
	urldate = {2023-05-29},
	journal = {Entropy. An International and Interdisciplinary Journal of Entropy and Information Studies},
	author = {Albarracin, Mahault and Demekas, Daphne and Ramstead, Maxwell J. D. and Heins, Conor},
	month = mar,
	year = {2022},
	pages = {476},
}

@article{vervaeke_conceptual_2004,
	title = {Conceptual {Metaphor} and {Abstract} {Thought}},
	volume = {19},
	issn = {1092-6488, 1532-7868},
	url = {http://www.tandfonline.com/doi/abs/10.1207/s15327868ms1903_3},
	doi = {10.1207/s15327868ms1903_3},
	language = {en},
	number = {3},
	urldate = {2025-02-10},
	journal = {Metaphor and Symbol},
	author = {Vervaeke, John and Kennedy, John M.},
	month = jul,
	year = {2004},
	pages = {213--231},
}

@article{griffiths_theoretical_2008,
	title = {Theoretical and empirical evidence for the impact of inductive biases on cultural evolution},
	volume = {363},
	issn = {0962-8436, 1471-2970},
	url = {https://royalsocietypublishing.org/doi/10.1098/rstb.2008.0146},
	doi = {10.1098/rstb.2008.0146},
	abstract = {...},
	language = {en},
	number = {1509},
	urldate = {2025-02-25},
	journal = {Philosophical Transactions of the Royal Society B: Biological Sciences},
	author = {Griffiths, Thomas L and Kalish, Michael L and Lewandowsky, Stephan},
	month = nov,
	year = {2008},
	pages = {3503--3514},
}

@article{steels_modeling_2011,
	title = {Modeling the cultural evolution of language},
	volume = {8},
	copyright = {https://www.elsevier.com/tdm/userlicense/1.0/},
	issn = {15710645},
	url = {https://linkinghub.elsevier.com/retrieve/pii/S1571064511001060},
	doi = {10.1016/j.plrev.2011.10.014},
	language = {en},
	number = {4},
	urldate = {2025-02-25},
	journal = {Physics of Life Reviews},
	author = {Steels, Luc},
	month = dec,
	year = {2011},
	pages = {339--356},
}

@article{smith_how_2020,
	title = {How {Culture} and {Biology} {Interact} to {Shape} {Language} and the {Language} {Faculty}},
	volume = {12},
	issn = {1756-8757, 1756-8765},
	url = {https://onlinelibrary.wiley.com/doi/10.1111/tops.12377},
	doi = {10.1111/tops.12377},
	abstract = {Abstract ...},
	language = {en},
	number = {2},
	urldate = {2025-02-25},
	journal = {Topics in Cognitive Science},
	author = {Smith, Kenny},
	month = apr,
	year = {2020},
	pages = {690--712},
}

@incollection{richerson_interplay_2013,
	title = {The {Interplay} of {Genetic} and {Cultural} {Factors} in {Ongoing} {Language} {Evolution}},
	isbn = {978-0-262-31829-7},
	url = {https://direct.mit.edu/books/book/4020/chapter/167221/The-Interplay-of-Genetic-and-Cultural-Factors-in},
	language = {en},
	urldate = {2025-02-25},
	booktitle = {Cultural {Evolution}},
	publisher = {The MIT Press},
	author = {Levinson, Stephen C. and Dediu, Dan},
	editor = {Richerson, Peter J. and Christiansen, Morten H.},
	month = nov,
	year = {2013},
	doi = {10.7551/mitpress/9894.003.0017},
	pages = {219--232},
}

@book{richerson_cultural_2013,
	title = {Cultural {Evolution}: {Society}, {Technology}, {Language}, and {Religion}},
	isbn = {978-0-262-31829-7},
	shorttitle = {Cultural {Evolution}},
	url = {https://direct.mit.edu/books/book/4020/Cultural-EvolutionSociety-Technology-Language-and},
	abstract = {Leading scholars report on current research that demonstrates the central role of cultural evolution in explaining human behavior. ...},
	language = {en},
	urldate = {2025-02-25},
	publisher = {The MIT Press},
	editor = {Richerson, Peter J. and Christiansen, Morten H.},
	month = nov,
	year = {2013},
	doi = {10.7551/mitpress/9780262019750.001.0001},
}

@article{thompson_culture_2016,
	title = {Culture shapes the evolution of cognition},
	volume = {113},
	issn = {0027-8424, 1091-6490},
	url = {https://pnas.org/doi/full/10.1073/pnas.1523631113},
	doi = {10.1073/pnas.1523631113},
	abstract = {Significance ...},
	language = {en},
	number = {16},
	urldate = {2025-02-25},
	journal = {Proceedings of the National Academy of Sciences},
	author = {Thompson, Bill and Kirby, Simon and Smith, Kenny},
	month = apr,
	year = {2016},
	pages = {4530--4535},
}

@article{rubio-fernandez_cultural_2024,
	title = {Cultural evolutionary pragmatics: {Investigating} the codevelopment and coevolution of language and social cognition.},
	volume = {131},
	issn = {1939-1471, 0033-295X},
	shorttitle = {Cultural evolutionary pragmatics},
	url = {https://doi.apa.org/doi/10.1037/rev0000423},
	doi = {10.1037/rev0000423},
	language = {en},
	number = {1},
	urldate = {2025-02-25},
	journal = {Psychological Review},
	author = {Rubio-Fernandez, Paula},
	month = jan,
	year = {2024},
	pages = {18--35},
}

@book{henshilwood_homo_2011,
	address = {Amsterdam ; Philadelphia},
	title = {Homo symbolicus: the dawn of language, imagination and spirituality},
	isbn = {978-90-272-1189-7 978-90-272-8409-9},
	shorttitle = {Homo symbolicus},
	publisher = {John Benjamins Pub. Co},
	editor = {Henshilwood, Christopher Stuart and D'Errico, Francesco},
	year = {2011},
	keywords = {Language and languages, Origin, Human behavior, Biolinguistics, Psycholinguistics, Symbolism (Psychology)},
}

@misc{laukkonen_beautiful_2025,
	title = {A beautiful loop: {An} active inference theory of consciousness},
	copyright = {https://creativecommons.org/publicdomain/zero/1.0/legalcode},
	shorttitle = {A beautiful loop},
	url = {https://osf.io/daf5n_v2},
	doi = {10.31234/osf.io/daf5n_v2},
	abstract = {Can active inference model consciousness? ...},
	urldate = {2025-04-22},
	author = {Laukkonen, Ruben Eero and Friston, Karl and Chandaria, Shamil},
	month = mar,
	year = {2025},
}

@article{thestrup_waade_as_2025,
	title = {As {One} and {Many}: {Relating} {Individual} and {Emergent} {Group}-{Level} {Generative} {Models} in {Active} {Inference}},
	volume = {27},
	copyright = {https://creativecommons.org/licenses/by/4.0/},
	issn = {1099-4300},
	shorttitle = {As {One} and {Many}},
	url = {https://www.mdpi.com/1099-4300/27/2/143},
	doi = {10.3390/e27020143},
	abstract = {Active inference under the Free Energy Principle has been proposed as an across-scales compatible framework ...},
	language = {en},
	number = {2},
	urldate = {2025-05-22},
	journal = {Entropy},
	author = {Thestrup Waade, Peter and Lundbak Olesen, Christoffer and Ehrenreich Laursen, Jonathan and Nehrer, Samuel William and Heins, Conor and Friston, Karl and Mathys, Christoph},
	month = feb,
	year = {2025},
	pages = {143},
}

@book{mcgilchrist_master_2019,
	address = {New Haven Loondon},
	edition = {New expanded edition},
	title = {The master and his emissary: the divided brain and the making of the {Western} world},
	isbn = {978-0-300-18837-0 978-0-300-24592-9 978-0-300-16892-1 978-0-300-14878-7},
	shorttitle = {The master and his emissary},
	language = {eng},
	publisher = {Yale University Press},
	author = {McGilchrist, Iain},
	year = {2019},
	annote = {Includes bibliographical references (pages 518-576) and index},
}

@book{pirsig_zen_1979,
	address = {New York, NY},
	edition = {1. Morrow Quill paperback ed},
	title = {Zen and the art of motorcycle maintenance: an inquiry into values},
	isbn = {978-0-688-00230-5 978-0-688-05230-0},
	shorttitle = {Zen and the art of motorcycle maintenance},
	language = {eng},
	publisher = {Morrow},
	author = {Pirsig, Robert M.},
	year = {1979},
}

@book{carter_price_2021,
	address = {New York},
	edition = {Random House trade paperback edition},
	title = {The price of peace: money, democracy, and the life of {John} {Maynard} {Keynes}},
	isbn = {978-0-525-50903-5 978-0-525-50905-9},
	shorttitle = {The price of peace},
	abstract = {"In the spring of 1934, Virginia Woolf sketched an affectionate three-page ..."},
	language = {eng},
	publisher = {Random House},
	author = {Carter, Zachary D.},
	year = {2021},
	annote = {Literaturverzeichnis: Seite 589-595; Index},
}

@article{van_de_vondervoort_evidence_2016,
	title = {Evidence for {Intuitive} {Morality}: {Preverbal} {Infants} {Make} {Sociomoral} {Evaluations}},
	volume = {10},
	copyright = {http://onlinelibrary.wiley.com/termsAndConditions#vor},
	issn = {1750-8592, 1750-8606},
	shorttitle = {Evidence for {Intuitive} {Morality}},
	url = {https://srcd.onlinelibrary.wiley.com/doi/10.1111/cdep.12175},
	doi = {10.1111/cdep.12175},
	abstract = {Abstract ...},
	language = {en},
	number = {3},
	urldate = {2025-09-13},
	journal = {Child Development Perspectives},
	author = {Van De Vondervoort, Julia W. and Hamlin, J. Kiley},
	month = sep,
	year = {2016},
	pages = {143--148},
}

@article{wynn_not_2018,
	title = {Not {Noble} {Savages} {After} {All}: {Limits} to {Early} {Altruism}},
	volume = {27},
	issn = {0963-7214, 1467-8721},
	shorttitle = {Not {Noble} {Savages} {After} {All}},
	url = {https://journals.sagepub.com/doi/10.1177/0963721417734875},
	doi = {10.1177/0963721417734875},
	abstract = {Many scholars draw on evidence from evolutionary biology, behavioral economics, and infant research ...},
	language = {en},
	number = {1},
	urldate = {2025-09-13},
	journal = {Current Directions in Psychological Science},
	author = {Wynn, Karen and Bloom, Paul and Jordan, Ashley and Marshall, Julia and Sheskin, Mark},
	month = feb,
	year = {2018},
	pages = {3--8},
}

@book{chernow_house_1990,
	address = {New York},
	edition = {1st ed},
	title = {The house of {Morgan}: an {American} banking dynasty and the rise of modern finance},
	isbn = {978-0-87113-338-0},
	shorttitle = {The house of {Morgan}},
	publisher = {Atlantic Monthly Press},
	author = {Chernow, Ron},
	year = {1990},
	keywords = {History, United States, Banks and banking, Morgan Grenfell & Co, Morgan Guaranty Trust Company of New York, Morgan Stanley & Co},
	annote = {"A Morgan Entrekin book."},
}

@book{higgs_william_2021,
	address = {London},
	title = {William {Blake} vs the world},
	isbn = {978-1-4746-1435-1},
	language = {eng},
	publisher = {Weidenfeld & Nicolson},
	author = {Higgs, John},
	year = {2021},
}
`;

function parseBib(raw: string): Array<{ id: string; type: string; fields: Record<string, string> }> {
  const entries: Array<{ id: string; type: string; fields: Record<string, string> }> = [];
  const text = raw.replace(/\r\n/g, "\n");
  let index = 0;

  while (index < text.length) {
    const atPos = text.indexOf("@", index);
    if (atPos === -1) break;
    index = atPos + 1;

    let type = "";
    while (index < text.length && /[A-Za-z]/.test(text[index])) {
      type += text[index];
      index += 1;
    }
    type = type.toLowerCase();

    while (index < text.length && text[index] !== "{") index += 1;
    if (index >= text.length) break;
    index += 1; // skip {

    let key = "";
    while (index < text.length && text[index] !== ",") {
      key += text[index];
      index += 1;
    }
    key = key.trim();
    if (text[index] === ",") index += 1;

    const bodyStart = index;
    let depth = 1;
    while (index < text.length && depth > 0) {
      const ch = text[index];
      if (ch === "{") depth += 1;
      if (ch === "}") depth -= 1;
      index += 1;
    }
    const body = text.slice(bodyStart, index - 1);

    const fields: Record<string, string> = {};
    let i = 0;
    while (i < body.length) {
      while (i < body.length && /[\s,]/.test(body[i])) i += 1;
      if (i >= body.length) break;

      let name = "";
      while (i < body.length && /[A-Za-z0-9_\-]/.test(body[i])) {
        name += body[i];
        i += 1;
      }
      name = name.trim().toLowerCase();

      while (i < body.length && body[i] !== "=" && body[i] !== "{" && body[i] !== "\"") i += 1;
      if (i < body.length && body[i] === "=") i += 1;
      while (i < body.length && /\s/.test(body[i])) i += 1;

      if (i >= body.length) break;

      let value = "";
      const delimiter = body[i];
      if (delimiter === "{" || delimiter === "\"") {
        i += 1;
        let braceDepth = delimiter === "{" ? 1 : 0;
        const start = i;
        while (i < body.length) {
          const char = body[i];
          if (delimiter === "{" && char === "{") braceDepth += 1;
          if (delimiter === "{" && char === "}") {
            braceDepth -= 1;
            if (braceDepth === 0) break;
          }
          if (delimiter === "\"" && char === "\"") break;
          i += 1;
        }
        value = body.slice(start, i);
        if (delimiter === "{") {
          // move past closing brace
          while (i < body.length && body[i] !== "}") i += 1;
          if (i < body.length) i += 1;
        } else if (delimiter === "\"") {
          if (i < body.length) i += 1;
        }
      } else {
        const start = i;
        while (i < body.length && body[i] !== ",") i += 1;
        value = body.slice(start, i).trim();
      }

      fields[name] = value.trim().replace(/\s+/g, " ");
    }

    entries.push({ id: key, type, fields });
  }

  return entries;
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function formatAuthors(raw?: string): string {
  if (!raw) return "";
  const authors = raw.split(/\s+and\s+/i).map((a) => a.trim());
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  return `${authors.slice(0, -1).join(", ")}, and ${authors[authors.length - 1]}`;
}

function ensurePeriod(segment: string): string {
  if (!segment) return segment;
  const trimmed = segment.trim();
  if (!trimmed) return "";
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function formatEntry({ type, fields, id }: { type: string; fields: Record<string, string>; id: string }): BibEntry {
  const authors = formatAuthors(fields.author);
  const year = fields.year ? `(${fields.year}).` : fields.month ? `(${capitalize(fields.month)}).` : "";
  const title = fields.title ? ensurePeriod(fields.title) : "";
  const journal = fields.journal ? fields.journal : fields.booktitle ? `In ${fields.booktitle}` : "";
  const volumeIssue = fields.volume || fields.number ? `${fields.volume ?? ""}${fields.number ? `(${fields.number})` : ""}`.trim() : "";
  const pages = fields.pages ? `pp. ${fields.pages}` : "";
  const publisher = fields.publisher ? ensurePeriod(`${fields.address ? `${fields.address}: ` : ""}${fields.publisher}`) : "";
  const editors = fields.editor ? ensurePeriod(`${fields.editor} (Ed.).`) : "";

  let container = "";
  if (fields.journal) {
    const parts = [journal];
    if (volumeIssue) parts.push(volumeIssue);
    if (fields.pages) parts.push(fields.pages);
    container = ensurePeriod(parts.filter(Boolean).join(", "));
  } else if (fields.booktitle) {
    const parts = [journal];
    if (editors) parts.push(editors);
    if (pages) parts.push(ensurePeriod(pages));
    if (publisher) parts.push(publisher);
    container = parts.filter(Boolean).join(" ");
  } else {
    container = publisher;
  }

  const doi = fields.doi ? `https://doi.org/${fields.doi.replace(/^https?:\/\//i, "")}` : "";
  const url = !fields.doi && fields.url ? fields.url : "";

  const segments = [authors, year, title, container, doi || url].filter(Boolean);
  const citation = segments.join(" ").replace(/\s+/g, " ").trim();

  return { id, type, fields, citation };
}

const parsedEntries = parseBib(RAW_BIB).map((entry) => formatEntry(entry));

export const BIB_ENTRIES: BibEntry[] = parsedEntries;
