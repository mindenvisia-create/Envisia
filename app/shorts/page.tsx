'use client';

import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';

const categories = ['All', 'Growth', 'Mysteries', 'Tech', 'Finance'];

const shortsData = [
  // Your Real YouTube Shorts (appearing first)
  {
    id: 'real-1',
    title: "Unlock Your True Potential In 5 Simple Steps",
    description: "In this video, we reveal 5 simple steps to unleash your hidden powers and transform your life.",
    category: "Growth",
    thumbnail: "https://readdy.ai/api/search-image?query=Person%20climbing%20mountain%20with%20five%20glowing%20stepping%20stones%20leading%20to%20golden%20sunrise%20at%20peak%20personal%20transformation%20journey%20breakthrough%20moment%20success%20achievement%20victory%20pose%20inspirational%20growth%20mindset%20development&width=400&height=300&seq=potential2025updated&orientation=landscape",
    videoId: "nymWRIy4pRQ",
    youtubeUrl: "https://youtube.com/shorts/nymWRIy4pRQ?si=GOsql-ao62zxd8de",
    views: "12.5K",
    duration: "2:01",
    isReal: true
  },
  {
    id: 'real-2',
    title: "Why You Overthink And How To Stop It For Good",
    description: "Do you ever feel trapped in your own mind—replaying the same thought again and again?",
    category: "Growth",
    thumbnail: "https://readdy.ai/api/search-image?query=Person%20with%20head%20in%20hands%20surrounded%20by%20chaotic%20swirling%20thought%20bubbles%20and%20mind%20loops%20transforming%20into%20peaceful%20meditation%20pose%20with%20clear%20calm%20energy%20mental%20clarity%20breakthrough%20overthinking%20solution%20mindfulness&width=400&height=300&seq=overthink2025updated&orientation=landscape",
    videoId: "cuE3Ml3EH1U",
    youtubeUrl: "https://youtube.com/shorts/cuE3Ml3EH1U?si=ATCxNNPEz9p3L1cY",
    views: "18.2K",
    duration: "2:28",
    isReal: true
  },
  {
    id: 'real-3',
    title: "The Secret To Changing Your Mindset (Backed By Psychology)",
    description: "What if the biggest obstacle in your life… is the way you think about it? 🤯",
    category: "Growth",
    thumbnail: "https://readdy.ai/api/search-image?query=Split%20brain%20visualization%20showing%20negative%20dark%20thought%20patterns%20on%20left%20transforming%20into%20bright%20positive%20neural%20networks%20on%20right%20psychology%20concept%20scientific%20research%20mindset%20transformation%20golden%20light%20breakthrough%20personal%20growth&width=400&height=300&seq=mindset2025updated&orientation=landscape",
    videoId: "alUczH-Bp4Y",
    youtubeUrl: "https://youtube.com/shorts/alUczH-Bp4Y?si=Usu4T2cKXceyFHMp",
    views: "24.7K",
    duration: "1:59",
    isReal: true
  },
  {
    id: 'real-4',
    title: "4 Hidden Secret Powers You Never Knew You Had",
    description: "What if your greatest ability has been with you all along… and you didn't even realize it? 🤯",
    category: "Growth",
    thumbnail: "https://readdy.ai/api/search-image?query=Person%20with%20four%20glowing%20energy%20orbs%20floating%20around%20them%20representing%20intuition%20creativity%20empathy%20and%20wisdom%20hidden%20inner%20powers%20magical%20discovery%20moment%20self-awareness%20enlightenment%20golden%20purple%20light%20aura&width=400&height=300&seq=powers2025updated&orientation=landscape",
    videoId: "Svksju0027Q",
    youtubeUrl: "https://youtube.com/shorts/Svksju0027Q?si=RyWchE3L46mdYb2i",
    views: "31.1K",
    duration: "2:12",
    isReal: true
  },
  {
    id: 'real-5',
    title: "Psychology Of Change: How To Carry On When It Gets Hard",
    description: "Starting change is hard — but staying with it is even harder. Why do so many of us relapse after beginning?",
    category: "Growth",
    thumbnail: "https://readdy.ai/api/search-image?query=Person%20pushing%20through%20difficult%20steep%20mountain%20trail%20showing%20perseverance%20and%20determination%20against%20challenges%20with%20storm%20clouds%20clearing%20to%20reveal%20bright%20summit%20ahead%20psychology%20of%20persistence%20overcoming%20obstacles%20resilience&width=400&height=300&seq=change2025updated&orientation=landscape",
    videoId: "Yoof8vK68P8",
    youtubeUrl: "https://youtube.com/shorts/Yoof8vK68P8?si=MT2LvPYzrdGOVxZs",
    views: "19.8K",
    duration: "2:57",
    isReal: true
  },
  {
    id: 'real-6',
    title: "Breaking Free From Self Doubt And Building Self Confidence",
    description: "We all face self-doubt—but what if it's the very thing holding you back from becoming your best self?",
    category: "Growth",
    thumbnail: "https://readdy.ai/api/search-image?query=Confident%20person%20breaking%20through%20glass%20wall%20of%20self-doubt%20with%20bright%20golden%20light%20behind%20them%20chains%20falling%20away%20showing%20inner%20strength%20triumph%20over%20insecurity%20self-confidence%20building%20empowerment%20transformation&width=400&height=300&seq=confidence2025updated&orientation=landscape",
    videoId: "4siOItkXjP8",
    youtubeUrl: "https://youtube.com/shorts/4siOItkXjP8?si=h0UVR8cjPOF7rsd9",
    views: "27.3K",
    duration: "1:57",
    isReal: true
  },
  // New Real YouTube Shorts (Tech Category)
  {
    id: 'real-7',
    title: "What's Hiding Inside This AR Tech! The Creepiest Thing You'll See Today",
    description: "Augmented reality isn't the future — it's already here, and it's more mind-blowing than you think.",
    category: "Tech",
    thumbnail: "https://readdy.ai/api/search-image?query=Person%20wearing%20futuristic%20AR%20glasses%20with%20holographic%20digital%20information%20and%20creepy%20glitched%20elements%20floating%20around%20them%20augmented%20reality%20technology%20interface%20glowing%20blue%20digital%20elements%20mysterious%20tech%20atmosphere%20high-tech%20environment&width=400&height=300&seq=artech2025updated&orientation=landscape",
    videoId: "lN6qqndVePc",
    youtubeUrl: "https://youtube.com/shorts/lN6qqndVePc?si=oac60mTfC5EfDauk",
    views: "45.2K",
    duration: "1:13",
    isReal: true
  },
  {
    id: 'real-8',
    title: "What's Being Built In These Cities Will Change How We Live Forever",
    description: "The future isn't coming — it's already under construction. From flying cars to ocean skyscrapers and AI-powered streets, these real-life megaprojects are transforming our world faster than we imagined.",
    category: "Tech",
    thumbnail: "https://readdy.ai/api/search-image?query=Futuristic%20smart%20city%20skyline%20under%20construction%20with%20flying%20vehicles%20between%20towering%20skyscrapers%20cranes%20building%20advanced%20urban%20planning%20mega%20construction%20projects%20AI-powered%20infrastructure%20gleaming%20modern%20architecture%20blue%20and%20silver%20tones&width=400&height=300&seq=cities2025updated&orientation=landscape",
    videoId: "iPeLP_q0RQk",
    youtubeUrl: "https://youtube.com/shorts/iPeLP_q0RQk?si=Ntvm4Jd8Re_Ge29R",
    views: "38.7K",
    duration: "1:09",
    isReal: true
  },
  {
    id: 'real-9',
    title: "Could Someone Steal Your Voice? The AI Trick You Need To Hear",
    description: "AI has officially crossed the line… and your voice might be next. In this jaw-dropping short, we reveal how modern AI can perfectly clone your speech in seconds — and why it's both incredible and terrifying.",
    category: "Tech",
    thumbnail: "https://readdy.ai/api/search-image?query=Person%20speaking%20with%20digital%20voice%20waves%20being%20captured%20and%20cloned%20by%20AI%20technology%20scary%20voice%20theft%20visualization%20sound%20patterns%20floating%20in%20air%20cybersecurity%20threat%20artificial%20intelligence%20voice%20synthesis%20dangerous%20technology&width=400&height=300&seq=voice2025updated&orientation=landscape",
    videoId: "eUB7WGKmWoA",
    youtubeUrl: "https://youtube.com/shorts/eUB7WGKmWoA?si=9N2N9nBRrRkklwzr",
    views: "52.8K",
    duration: "1:05",
    isReal: true
  },
  // New Real YouTube Shorts (Finance Category)
  {
    id: 'real-10',
    title: "Make Money In 5 Minutes (No Job, No Skills, No Experience)",
    description: "Looking to make money online today? This video showcases the most reliable survey sites that pay through PayPal—no scams or tricks involved!",
    category: "Finance",
    thumbnail: "https://readdy.ai/api/search-image?query=Person%20using%20smartphone%20with%20PayPal%20app%20showing%20instant%20money%20earned%20from%20online%20surveys%20and%20quick%20tasks%20dollar%20signs%20and%20coins%20floating%20around%20timer%20showing%205%20minutes%20legitimate%20income%20generation%20work%20from%20home%20opportunity&width=400&height=300&seq=quickmoney2025updated&orientation=landscape",
    videoId: "F3Hggkic7Z8",
    youtubeUrl: "https://youtube.com/shorts/F3Hggkic7Z8?si=jr7dIsEkusescn0m",
    views: "67.3K",
    duration: "1:40",
    isReal: true
  },
  {
    id: 'real-11',
    title: "How To Make $100 In 24 Hours (No Scams, No Followers)",
    description: "Ever wondered how to turn almost nothing into real money fast? 🚀 This isn't a scam, a get-rich-quick trick, or something you need to 'sign up' for.",
    category: "Finance",
    thumbnail: "https://readdy.ai/api/search-image?query=Stack%20of%20hundred%20dollar%20bills%20with%20digital%20clock%20showing%2024%20hours%20countdown%20legitimate%20money%20making%20strategies%20entrepreneurship%20hustle%20side%20income%20opportunity%20golden%20money%20background%20realistic%20wealth%20building&width=400&height=300&seq=hundreddollars2025updated&orientation=landscape",
    videoId: "to1oXSVTG38",
    youtubeUrl: "https://youtube.com/shorts/to1oXSVTG38?si=j19SF_0ihkd8gKMv",
    views: "89.5K",
    duration: "1:21",
    isReal: true
  },
  {
    id: 'real-12',
    title: "Are These 5 Money Habits Keeping You Broke",
    description: "Are you stuck living paycheck to paycheck? In this video, we reveal 5 common money habits that silently drain your wealth — and how to fix them.",
    category: "Finance",
    thumbnail: "https://readdy.ai/api/search-image?query=Person%20breaking%20chains%20around%20empty%20wallet%20with%20five%20illustrated%20bad%20money%20habits%20shown%20as%20dark%20symbols%20destructive%20financial%20behaviors%20broken%20piggy%20bank%20debt%20cycle%20transformation%20to%20wealth%20building%20financial%20freedom&width=400&height=300&seq=moneyhabits2025updated&orientation=landscape",
    videoId: "G32NyOIdTlw",
    youtubeUrl: "https://youtube.com/shorts/G32NyOIdTlw?si=ZI0b-VlBrcNm-Jw3",
    views: "54.2K",
    duration: "1:39",
    isReal: true
  },
  {
    id: 'real-13',
    title: "5 Ways To Save $1,000 (Even On A Tight Budget)",
    description: "Need to save money quickly? This video gives you 5 simple, proven steps to save $1,000 — even if your budget is tight. Perfect for building an emergency fund or reaching a short-term goal.",
    category: "Finance",
    thumbnail: "https://readdy.ai/api/search-image?query=Growing%20piggy%20bank%20with%20thousand%20dollar%20goal%20achievement%20coins%20stacking%20up%20budget%20planning%20five%20saving%20strategies%20illustrated%20emergency%20fund%20building%20financial%20discipline%20money%20accumulation%20golden%20coins%20and%20bills&width=400&height=300&seq=saving1000dollars2025updated&orientation=landscape",
    videoId: "HC7GZNCMg0U",
    youtubeUrl: "https://youtube.com/shorts/HC7GZNCMg0U?si=OctQf8F6x0-1BG8r",
    views: "71.8K",
    duration: "1:07",
    isReal: true
  },

  // Previous Real YouTube Shorts (Mysteries Category)
  {
    id: 'real-14',
    title: "Children Speak Of Lives They Never Lived",
    description: "Imagine a child telling you about people, places, and events they could never have known. Across cultures and throughout history, parents have reported chilling cases of children speaking of lives that don't belong to them.",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Young%20child%20with%20wise%20old%20eyes%20looking%20thoughtful%20with%20ethereal%20transparent%20ghostly%20figures%20of%20past%20lives%20and%20ancient%20memories%20floating%20around%20them%20mysterious%20reincarnation%20phenomenon%20ancient%20souls%20past%20life%20memories%20supernatural%20connection&width=400&height=300&seq=pastlives2025updated&orientation=landscape",
    videoId: "HW6Wl6tkLjk",
    youtubeUrl: "https://youtube.com/shorts/HW6Wl6tkLjk?si=Z63wDWWRQcbifVVQ",
    views: "78.4K",
    duration: "1:46",
    isReal: true
  },
  {
    id: 'real-15',
    title: "What Scientists Heard 12 Km Below The Earth Will Haunt You",
    description: "They dug 12 kilometers into the Earth's crust, but what they discovered forced them to seal it forever.",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Deep%20drilling%20site%20with%20massive%20industrial%20equipment%20penetrating%20earth%20crust%2012%20kilometers%20underground%20dark%20mysterious%20hole%20with%20eerie%20sounds%20and%20shadows%20emanating%20from%20depths%20scientific%20horror%20discovery%20sealed%20forever%20haunting%20atmosphere&width=400&height=300&seq=deepdrill2025updated&orientation=landscape",
    videoId: "wzl9Ij0-DYU",
    youtubeUrl: "https://youtube.com/shorts/wzl9Ij0-DYU?si=J5iSdrdidz82qPkr",
    views: "156.7K",
    duration: "1:08",
    isReal: true
  },
  {
    id: 'real-16',
    title: "Mary Celeste: The Ghost Ship That Left Behind Clues No One Noticed",
    description: "In 1872, the Mary Celeste was found drifting cargo untouched, food stocked, sails full… but the crew vanished.",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Abandoned%20sailing%20ship%20drifting%20on%20misty%20ocean%20waters%20with%20full%20sails%20and%20untouched%20cargo%20mysterious%20ghost%20vessel%201872%20maritime%20mystery%20empty%20deck%20with%20personal%20belongings%20scattered%20around%20eerie%20fog%20atmosphere&width=400&height=300&seq=maryceleste2025updated&orientation=landscape",
    videoId: "gGXpaqoL05o",
    youtubeUrl: "https://youtube.com/shorts/gGXpaqoL05o?si=XUM0j-BOWNLDINlD",
    views: "203.1K",
    duration: "10:06",
    isReal: true
  },
  {
    id: 'real-17',
    title: "What Happened On Flannan Isles? 120 Year Old Mystery",
    description: "In 1900, three lighthouse keepers vanished without a trace from the remote Flannan Isles. No bodies. No witnesses. Just a handful of unsettling clues…",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Remote%20lighthouse%20on%20rocky%20island%20with%20stormy%20seas%20around%20it%20empty%20lighthouse%20keeper%20quarters%20with%20three%20missing%20men%20mystery%20unsolved%20disappearance%201900%20scotland%20flannan%20isles%20mysterious%20vanishing%20dark%20clouds&width=400&height=300&seq=flannan2025updated&orientation=landscape",
    videoId: "w4SpDNoFXdI",
    youtubeUrl: "https://youtube.com/shorts/w4SpDNoFXdI?si=SsA51LOUSlFkCdpK",
    views: "94.3K",
    duration: "0:45",
    isReal: true
  },
  {
    id: 'real-18',
    title: "Why This Fire Has Been Burning For 50 Years And Can't Be Stopped",
    description: "Deep in the deserts of Turkmenistan, a giant crater has been burning non-stop for over five decades. Locals call it \"The Door to Hell\" — and scientists still can't put it out.",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Giant%20flaming%20crater%20in%20desert%20landscape%20burning%20continuously%20for%20decades%20door%20to%20hell%20turkmenistan%20gas%20crater%20eternal%20flames%20scientists%20unable%20to%20extinguish%20mysterious%20geological%20phenomenon%20desert%20inferno%20night%20scene&width=400&height=300&seq=doorhell2025updated&orientation=landscape",
    videoId: "eBLfePnhIxY",
    youtubeUrl: "https://youtube.com/shorts/eBLfePnhIxY?si=N1npVoxPfCxZs9gH",
    views: "127.9K",
    duration: "0:53",
    isReal: true
  },

  // NEW Real YouTube Shorts (Mysteries Category - Latest Batch)
  {
    id: 'real-19',
    title: "What Happened To These 9 Hikers? The Mystery That Still Haunts Investigators",
    description: "In 1959, nine hikers set out into the snowy Ural Mountains. Days later, rescue teams found their camp abandoned…",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Abandoned%20tent%20in%20snowy%20mountain%20wilderness%20with%20mysterious%20footprints%20leading%20away%20nine%20hikers%20disappearance%20Dyatlov%20Pass%20incident%20cold%20dark%20mountains%20eerie%20atmosphere%20unsolved%20mystery%20investigation%20torn%20tent&width=400&height=300&seq=dyatlovpass2025updated&orientation=landscape",
    videoId: "_1hMqzOGomc",
    youtubeUrl: "https://youtube.com/shorts/_1hMqzOGomc?si=VdxuAIRvJfmkzpj_",
    views: "189.3K",
    duration: "0:58",
    isReal: true
  },
  {
    id: 'real-20',
    title: "The Asteroid That Almost Erased Humanity And No One Told Us",
    description: "In 2019, an asteroid the size of a football field passed closer to Earth than the Moon — and we only saw it hours before it arrived. If it had hit, life as we know it could have been over.",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Large%20asteroid%20approaching%20Earth%20dangerously%20close%20with%20moon%20in%20background%20space%20disaster%20near%20miss%20scenario%20apocalyptic%20threat%20from%20space%20dark%20cosmic%20scene%20with%20glowing%20asteroid%20trail%20humanity%20almost%20extinct&width=400&height=300&seq=asteroid2025updated&orientation=landscape",
    videoId: "FxVRSQIGJtI",
    youtubeUrl: "https://youtube.com/shortss/FxVRSQIGJtI?si=QjkD80ZbKFsdR_yA",
    views: "134.7K",
    duration: "0:40",
    isReal: true
  },
  {
    id: 'real-21',
    title: "Slender Man: The Internet's Most Terrifying Urban Legend",
    description: "Slender Man — a tall, faceless figure who lurks in the shadows and haunts our imagination. Unlike ancient myths, this legend was born on the internet in 2009.",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Tall%20dark%20faceless%20figure%20in%20suit%20standing%20among%20shadowy%20trees%20menacing%20presence%20Slender%20Man%20urban%20legend%20creepy%20forest%20scene%20internet%20folklore%20supernatural%20entity%20modern%20mythology%20horror%20dark%20atmosphere&width=400&height=300&seq=slenderman2025updated&orientation=landscape",
    videoId: "EHCtFWHdwoc",
    youtubeUrl: "https://youtube.com/shorts/EHCtFWHdwoc?si=WUtf3EAxwsccIuiW",
    views: "298.5K",
    duration: "2:59",
    isReal: true
  },
  {
    id: 'real-22',
    title: "The Red Room Curse: The Website That Kills",
    description: "Would you dare visit a website that's said to k*ll anyone who sees it? The Red Room Curse isn't just an urban legend… it's tied to a chilling real case in Japan",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Dark%20computer%20screen%20displaying%20ominous%20red%20room%20website%20with%20cursor%20clicking%20dangerous%20internet%20urban%20legend%20cursed%20website%20Japan%20horror%20story%20digital%20nightmare%20creepypasta%20reality%20glowing%20red%20interface&width=400&height=300&seq=redroom2025updated&orientation=landscape",
    videoId: "-qM1WBEDXkU",
    youtubeUrl: "https://youtube.com/shorts/-qM1WBEDXkU?si=UQR_ZYXZV0-gGxH3",
    views: "167.9K",
    duration: "2:14",
    isReal: true
  },

  // Existing placeholder shorts with updated thumbnails and titles
  {
    id: 1,
    title: "The Mindset Shift That Changes Everything",
    description: "Discover the one mental framework that successful people use daily",
    category: "Growth",
    thumbnail: "https://readdy.ai/api/search-image?query=Person%20in%20meditation%20pose%20with%20bright%20golden%20light%20emanating%20from%20their%20head%20showing%20mental%20transformation%20brain%20with%20glowing%20neural%20pathways%20success%20mindset%20shift%20enlightenment%20moment%20personal%20development%20breakthrough&width=400&height=300&seq=mindsetshift2025updated&orientation=landscape",
    videoId: "dQw4w9WgXcQ",
    youtubeUrl: "https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs",
    views: "125K",
    duration: "3:24"
  },
  {
    id: 2,
    title: "Ancient Symbols In Modern Tech",
    description: "Hidden meanings behind logos and interfaces we use every day",
    category: "Mysteries",
    thumbnail: "https://readdy.ai/api/search-image?query=Ancient%20sacred%20symbols%20and%20mystical%20runes%20overlaying%20modern%20technology%20devices%20smartphones%20tablets%20with%20glowing%20connections%20between%20old%20wisdom%20and%20new%20tech%20mysterious%20purple%20atmosphere%20occult%20meets%20digital%20archeology&width=400&height=300&seq=ancientsymbols2025updated&orientation=landscape",
    videoId: "dQw4w9WgXcQ",
    youtubeUrl: "https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs",
    views: "89K",
    duration: "4:12"
  },
  {
    id: 3,
    title: "AI Will Replace This Job First",
    description: "The surprising profession that's most vulnerable to automation",
    category: "Tech",
    thumbnail: "https://readdy.ai/api/search-image?query=Humanoid%20robot%20at%20office%20desk%20performing%20professional%20work%20tasks%20with%20human%20worker%20in%20background%20looking%20concerned%20automation%20in%20workplace%20artificial%20intelligence%20taking%20over%20job%20displacement%20technology%20future%20work&width=400&height=300&seq=aijobs2025updated&orientation=landscape",
    videoId: "dQw4w9WgXcQ",
    youtubeUrl: "https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs",
    views: "203K",
    duration: "2:47"
  },
  {
    id: 4,
    title: "The 1% Rule For Wealth Building",
    description: "How tiny daily investments compound into massive returns",
    category: "Finance",
    thumbnail: "https://readdy.ai/api/search-image?query=Small%20coins%20growing%20into%20large%20towers%20of%20gold%20showing%20compound%20interest%20effect%20one%20percent%20daily%20improvement%20financial%20growth%20exponential%20wealth%20building%20investment%20strategy%20money%20multiplication%20chart%20graph&width=400&height=300&seq=onepercent2025updated&orientation=landscape",
    videoId: "dQw4w9WgXcQ",
    youtubeUrl: "https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs",
    views: "156K",
    duration: "3:58"
  }
];

function ShortsContent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [visibleCount, setVisibleCount] = useState(20);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredShorts = shortsData.filter(short => 
    activeCategory === 'All' || short.category === activeCategory
  );

  const sortedShorts = [...filteredShorts].sort((a, b) => {
    if (sortBy === 'popularity') {
      const aViews = parseFloat(a.views.replace('K', ''));
      const bViews = parseFloat(b.views.replace('K', ''));
      return bViews - aViews;
    }
    if (a.isReal && !b.isReal) return -1;
    if (!a.isReal && b.isReal) return 1;
    return b.id === 'string' ? -1 : 1;
  });

  const visibleShorts = sortedShorts.slice(0, visibleCount);
  const hasMoreShorts = visibleCount < sortedShorts.length;

  const loadMoreShorts = () => {
    setVisibleCount(prev => Math.min(prev + 12, sortedShorts.length));
  };

  const openYouTube = (shortItem: any) => {
    if (shortItem.isReal) {
      showVideoModal(shortItem);
    } else {
      window.open(shortItem.youtubeUrl, '_blank');
    }
  };

  const showVideoModal = (shortItem: any) => {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4';
    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    };

    const container = document.createElement('div');
    container.className = 'bg-black rounded-xl overflow-hidden max-w-md w-full relative';
    
    // Enhanced watermark with actual MindEnvisia logo from YouTube channel
    const watermark = document.createElement('div');
    watermark.id = 'mindenvisia-watermark';
    watermark.style.cssText = `
      position: fixed !important;
      top: 20px !important;
      left: 20px !important;
      z-index: 2147483647 !important;
      background: rgba(0, 0, 0, 0.85) !important;
      backdrop-filter: blur(12px) !important;
      border-radius: 12px !important;
      padding: 12px 16px !important;
      display: flex !important;
      align-items: center !important;
      gap: 10px !important;
      pointer-events: none !important;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;
      font-family: 'Pacifico', system-ui, -apple-system, sans-serif !important;
      transition: all 0.3s ease !important;
      border: 1px solid rgba(251, 191, 36, 0.2) !important;
    `;
    
    // Use the actual MindEnvisia logo from YouTube channel
    watermark.innerHTML = `
      <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; position: relative;">
        <img src="https://yt3.googleusercontent.com/Q24P_qVjpaF8TUUkh7n_XxFJ4TKcUrgQD1SteXfBAeWaI2yk79a9McmiTlsPAbQn6_0yDRROug=s160-c-k-c0x00ffffff-no-rj" 
             alt="MindEnvisia Logo" 
             style="width: 32px; height: 32px; border-radius: 50%; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8)); box-shadow: 0 0 8px rgba(251, 191, 36, 0.4);" />
      </div>
      <div style="display: flex; flex-direction: column; gap: 2px;">
        <span style="color: white; font-size: 16px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,1); font-family: 'Pacifico', cursive; background: linear-gradient(135deg, #fbbf24, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.4));">MindEnvisia</span>
        <span style="color: rgba(255,255,255,0.8); font-size: 11px; font-weight: 500; text-shadow: 0 1px 2px rgba(0,0,0,0.8); font-family: system-ui;">@mindenvisia</span>
      </div>
    `;
    
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${shortItem.videoId}?autoplay=1&rel=0&modestbranding=0&cc_load_policy=1&iv_load_policy=3&showinfo=1&branding=1`;
    iframe.className = 'w-full aspect-[9/16]';
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="ri-close-line text-2xl"></i>';
    closeBtn.className = 'absolute top-4 right-4 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors z-50';
    closeBtn.onclick = () => document.body.removeChild(modal);

    const info = document.createElement('div');
    info.className = 'p-4 text-white';
    info.innerHTML = `
      <div class="flex items-center space-x-2 mb-1">
        <div class="w-8 h-8 flex items-center justify-center">
          <img src="https://yt3.googleusercontent.com/Q24P_qVjpaF8TUUkh7n_XxFJ4TKcUrgQD1SteXfBAeWaI2yk79a9McmiTlsPAbQn6_0yDRROug=s160-c-k-c0x00ffffff-no-rj" 
               alt="MindEnvisia Logo" 
               style="width: 32px; height: 32px; border-radius: 50%;" />
        </div>
        <div>
          <h4 class="font-bold text-sm">MindEnvisia</h4>
          <p class="text-xs text-gray-400">@mindenvisia</p>
        </div>
      </div>
      <h3 class="font-bold text-lg mb-2">${shortItem.title}</h3>
      <p class="text-gray-300 text-sm mb-3">${shortItem.description}</p>
      <div class="flex items-center justify-between">
        <span class="text-yellow-400 text-sm">${shortItem.views} views • ${shortItem.duration}</span>
        <a href="${shortItem.youtubeUrl}" target="_blank" class="bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition-colors flex items-center space-x-2">
          <i class="ri-youtube-line"></i>
          <span>Watch on YouTube</span>
        </a>
      </div>
      <div class="mt-3 text-xs text-gray-500 flex items-center space-x-4">
        <span>© 2024 MindEnvisia</span>
        <span>All Rights Reserved</span>
      </div>
    `;

    container.appendChild(iframe);
    container.appendChild(info);
    modal.appendChild(container);
    modal.appendChild(closeBtn);
    
    // Add watermark directly to document body for global fullscreen visibility
    document.body.appendChild(watermark);
    document.body.appendChild(modal);
    
    // Enhanced fullscreen detection with multiple browser support
    let fullscreenCheckInterval: NodeJS.Timeout;
    let isCurrentlyFullscreen = false;
    
    const checkFullscreenStatus = () => {
      const isFullscreen = !!(
        document.fullscreenElement ||
        (document as any).webkitFullscreenElement ||
        (document as any).mozFullScreenElement ||
        (document as any).msFullscreenElement
      );
      
      if (isFullscreen !== isCurrentlyFullscreen) {
        isCurrentlyFullscreen = isFullscreen;
        
        if (isFullscreen) {
          // Entering fullscreen - make watermark MORE prominent and larger
          watermark.style.cssText = `
            position: fixed !important;
            top: 40px !important;
            left: 40px !important;
            z-index: 2147483647 !important;
            background: rgba(0, 0, 0, 0.95) !important;
            backdrop-filter: blur(16px) !important;
            border-radius: 16px !important;
            padding: 20px 24px !important;
            display: flex !important;
            align-items: center !important;
            gap: 16px !important;
            pointer-events: none !important;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.8), 0 0 24px rgba(251, 191, 36, 0.3) !important;
            font-family: 'Pacifico', system-ui, -apple-system, sans-serif !important;
            border: 2px solid rgba(251, 191, 36, 0.5) !important;
            transform: scale(1.2) !important;
            animation: glow 3s ease-in-out infinite alternate !important;
          `;
          
          // Update watermark content for fullscreen - MUCH larger and more visible
          watermark.innerHTML = `
            <div style="width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; position: relative;">
              <img src="https://yt3.googleusercontent.com/Q24P_qVjpaF8TUUkh7n_XxFJ4TKcUrgQD1SteXfBAeWaI2yk79a9McmiTlsPAbQn6_0yDRROug=s160-c-k-c0x00ffffff-no-rj" 
                   alt="MindEnvisia Logo" 
                   style="width: 48px; height: 48px; border-radius: 50%; filter: drop-shadow(0 4px 8px rgba(0,0,0,1)); box-shadow: 0 0 16px rgba(251, 191, 36, 0.6), inset 0 0 8px rgba(255,255,255,0.1);" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <span style="color: white; font-size: 24px; font-weight: 700; text-shadow: 0 3px 6px rgba(0,0,0,1); font-family: 'Pacifico', cursive; background: linear-gradient(135deg, #fbbf24, #ec4899, #3b82f6); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 12px rgba(251, 191, 36, 0.6));">MindEnvisia</span>
              <span style="color: rgba(255,255,255,0.9); font-size: 14px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.9); font-family: system-ui;">@mindenvisia</span>
            </div>
            <style>
              @keyframes glow {
                0% { box-shadow: 0 12px 32px rgba(0, 0, 0, 0.8), 0 0 24px rgba(251, 191, 36, 0.3); }
                100% { box-shadow: 0 12px 32px rgba(0, 0, 0, 0.8), 0 0 32px rgba(251, 191, 36, 0.6); }
              }
            </style>
          `;
        } else {
          // Exiting fullscreen - return to normal size but still prominent
          watermark.style.cssText = `
            position: fixed !important;
            top: 20px !important;
            left: 20px !important;
            z-index: 2147483647 !important;
            background: rgba(0, 0, 0, 0.85) !important;
            backdrop-filter: blur(12px) !important;
            border-radius: 12px !important;
            padding: 12px 16px !important;
            display: flex !important;
            align-items: center !important;
            gap: 10px !important;
            pointer-events: none !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;
            font-family: 'Pacifico', system-ui, -apple-system, sans-serif !important;
            transition: all 0.3s ease !important;
            border: 1px solid rgba(251, 191, 36, 0.2) !important;
            transform: scale(1) !important;
          `;
          
          // Return to normal watermark content but keep enhanced design
          watermark.innerHTML = `
            <div style="width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; position: relative;">
              <img src="https://yt3.googleusercontent.com/Q24P_qVjpaF8TUUkh7n_XxFJ4TKcUrgQD1SteXfBAeWaI2yk79a9McmiTlsPAbQn6_0yDRROug=s160-c-k-c0x00ffffff-no-rj" 
                   alt="MindEnvisia Logo" 
                   style="width: 32px; height: 32px; border-radius: 50%; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.8)); box-shadow: 0 0 8px rgba(251, 191, 36, 0.4);" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 2px;">
              <span style="color: white; font-size: 16px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,1); font-family: 'Pacifico', cursive; background: linear-gradient(135deg, #fbbf24, #ec4899); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.4));">MindEnvisia</span>
              <span style="color: rgba(255,255,255,0.8); font-size: 11px; font-weight: 500; text-shadow: 0 1px 2px rgba(0,0,0,0.8); font-family: system-ui;">@mindenvisia</span>
            </div>
          `;
        }
      }
    };
    
    // Start continuous fullscreen monitoring every 50ms for better responsiveness
    fullscreenCheckInterval = setInterval(checkFullscreenStatus, 50);
    
    // Also listen to fullscreen events for immediate response
    const fullscreenEvents = [
      'fullscreenchange',
      'webkitfullscreenchange', 
      'mozfullscreenchange',
      'MSFullscreenChange'
    ];
    
    fullscreenEvents.forEach(event => {
      document.addEventListener(event, checkFullscreenStatus);
    });
    
    // Cleanup function
    const cleanup = () => {
      if (fullscreenCheckInterval) {
        clearInterval(fullscreenCheckInterval);
      }
      fullscreenEvents.forEach(event => {
        document.removeEventListener(event, checkFullscreenStatus);
      });
      const existingWatermark = document.getElementById('mindenvisia-watermark');
      if (existingWatermark) {
        document.body.removeChild(existingWatermark);
      }
      if (document.body.contains(modal)) {
        document.body.removeChild(modal);
      }
    };
    
    // Update close button functionality
    closeBtn.onclick = () => {
      cleanup();
    };
    
    // Update modal click handler
    modal.onclick = (e) => {
      if (e.target === modal) {
        cleanup();
      }
    };
    
    // Initial check
    checkFullscreenStatus();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading shorts gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black">
      {/* Background Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer" aria-label="MindEnvisia Home">
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="relative">
                  <div className="w-10 h-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center relative">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                        <div className="absolute inset-0 border border-yellow-400/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-1 left-1/2 w-0.5 h-2 bg-gradient-to-t from-yellow-400 to-pink-500 transform -translate-x-1/2"></div>
                  <div className="absolute -top-0.5 left-3/4 w-0.5 h-1.5 bg-gradient-to-t from-yellow-400 to-pink-500 transform rotate-45"></div>
                  <div className="absolute -top-0.5 left-1/4 w-0.5 h-1.5 bg-gradient-to-t from-yellow-400 to-pink-500 transform -rotate-45"></div>
                </div>
              </div>
              <span className="text-2xl font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                MindEnvisia
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/shorts" className="text-white font-semibold cursor-pointer">Shorts</Link>
              <Link href="/start-here" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Start Here</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Blog</Link>
              <Link href="/resources" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Resources</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link>
            </div>

            <a
              href="https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer whitespace-nowrap"
              aria-label="Subscribe to MindEnvisia YouTube channel"
            >
              Subscribe
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="relative z-10 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Shorts Gallery
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Bite-sized insights that spark curiosity and ignite transformation
        </p>
      </header>

      {/* Filters */}
      <section className="relative z-10 px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Category filters">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(20);
                  }}
                  role="tab"
                  aria-selected={activeCategory === category}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-yellow-400 to-pink-500 text-black shadow-lg shadow-yellow-500/25'
                      : 'bg-black/40 text-gray-300 hover:text-white border border-purple-500/20 hover:border-purple-500/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Sort by:</span>
              <button
                onClick={() => setSortBy('newest')}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap transition-all hover:scale-105 ${
                  sortBy === 'newest'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                }`}
              >
                Newest
              </button>
              <button
                onClick={() => setSortBy('popularity')}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap transition-all hover:scale-105 ${
                  sortBy === 'popularity'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
                }`}
              >
                Popular
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shorts Grid */}
      <main className="relative z-10 px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleShorts.map((short) => (
              <article
                key={short.id}
                className="group bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="relative aspect-video bg-gray-800">
                  <img
                    src={short.thumbnail}
                    alt={`${short.title} - ${short.category} video thumbnail`}
                    className="w-full h-full object-cover object-top"
                    loading={short.isReal ? "eager" : "lazy"}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                            <div class="text-center text-white">
                              <i class="ri-video-line text-4xl mb-2"></e>
                              <p class="text-sm font-semibold">${short.category}</p>
                            </div>
                          </div>
                          <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <button class="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-white/30">
                              <i class="ri-play-fill text-2xl text-white ml-1"></i>
                            </button>
                          </div>
                          <div class="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 py-1 rounded">
                            ${short.duration}
                          </div>
                          <div class="absolute top-2 left-2 flex gap-2">
                            <span class="px-2 py-1 rounded-full text-xs font-semibold ${
                              short.category === 'Growth' ? 'bg-green-500/80 text-white' :
                              short.category === 'Mysteries' ? 'bg-purple-500/80 text-white' :
                              short.category === 'Tech' ? 'bg-blue-500/80 text-white' :
                              'bg-yellow-500/80 text-black'
                            }">
                              ${short.category}
                            </span>
                            ${short.isReal ? '<span class="px-2 py-1 rounded-full text-xs font-bold bg-yellow-400 text-black">NEW</span>' : ''}
                          </div>
                        `;
                        parent.onclick = () => openYouTube(short);
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <button 
                      onClick={() => openYouTube(short)}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-white/30"
                      aria-label={`Play ${short.title}`}
                    >
                      <i className="ri-play-fill text-2xl text-white ml-1"></i>
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 py-1 rounded">
                    {short.duration}
                  </div>
                  <div className="absolute top-2 left-2 flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      short.category === 'Growth' ? 'bg-green-500/80 text-white' :
                      short.category === 'Mysteries' ? 'bg-purple-500/80 text-white' :
                      short.category === 'Tech' ? 'bg-blue-500/80 text-white' :
                      'bg-yellow-500/80 text-black'
                    }`}>
                      {short.category}
                    </span>
                    {short.isReal && (
                      <span className="px-2 py-1 rounded-full text-xs font-bold bg-yellow-400 text-black">
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-white font-semibold line-clamp-2 group-hover:text-yellow-300 transition-colors mb-2">
                    {short.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-1 line-clamp-2">
                    {short.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <i className="ri-eye-line" aria-hidden="true"></i>
                      <span>{short.views} views</span>
                    </span>
                    <button 
                      onClick={() => openYouTube(short)}
                      className="flex items-center space-x-1 hover:text-red-400 transition-all cursor-pointer hover:scale-105 bg-red-600/20 px-2 py-1 rounded-full"
                      aria-label={`Watch ${short.title} on YouTube`}
                    >
                      <i className="ri-youtube-line" aria-hidden="true"></i>
                      <span>Watch</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Load More */}
      <section className="relative z-10 text-center pb-20">
        {hasMoreShorts ? (
          <button 
            onClick={loadMoreShorts}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
            aria-label={`Load ${sortedShorts.length - visibleCount} more shorts`}
          >
            Load More Shorts ({sortedShorts.length - visibleCount} remaining)
          </button>
        ) : (
          <div className="text-gray-400">
            <p className="mb-4">You've seen all shorts in this category!</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {setActiveCategory('All'); setVisibleCount(20);}}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                View All Shorts
              </button>
              <a
                href="https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-pink-500 text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer z-40"
        aria-label="Scroll to top"
      >
        <i className="ri-arrow-up-line text-xl" aria-hidden="true"></i>
      </button>

      {/* Footer */}
      <footer className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-purple-500/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-8 h-5 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-black rounded-full flex items-center justify-center relative">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -top-0.5 left-1/2 w-0.5 h-1 bg-gradient-to-t from-yellow-400 to-pink-500 transform -translate-x-1/2"></div>
                    <div className="absolute -top-0.5 left-3/4 w-0.5 h-1 bg-gradient-to-t from-yellow-400 to-pink-500 transform rotate-45"></div>
                    <div className="absolute -top-0.5 left-1/4 w-0.5 h-1 bg-gradient-to-t from-yellow-400 to-pink-500 transform -rotate-45"></div>
                  </div>
                </div>
                <span className="text-xl font-['Pacifico'] bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
                  MindEnvisia
                </span>
              </Link>
              <p className="text-gray-400 mb-4">
                Bite-sized insights that spark curiosity and ignite transformation.
              </p>
              <div className="flex space-x-4">
                <a href="https://youtube.com/@mindenvisia?si=5-h9EZ8rWi8LwPTs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-youtube-line text-white"></i>
                </a>
                <a href="https://www.instagram.com/mindenvisia?igsh=MW1kYjUzdW8yb3Jndg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-instagram-line text-white"></i>
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full hover:scale-110 transition-transform cursor-pointer">
                  <i className="ri-twitter-line text-white"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-1">Explore</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/shorts" className="hover:text-white transition-colors cursor-pointer">Shorts Gallery</Link></li>
                <li><Link href="/start-here" className="hover:text-white transition-colors cursor-pointer">Start Here</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors cursor-pointer">Blog</Link></li>
                <li><Link href="/resources" className="hover:text-white transition-colors cursor-pointer">Resources</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Connect</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors cursor-pointer">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors cursor-pointer">Contact</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors cursor-pointer">Support</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MindEnvisia. All rights reserved. | Where curiosity meets clarity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function ShortsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading shorts gallery...</p>
        </div>
      </div>
    }>
      <ShortsContent />
    </Suspense>
  );
}
