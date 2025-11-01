export type LeagueBreakdown = {
  runs: number | null;
  matches?: number | null;
  wickets?: number | null;
  strikeRate?: number | null;
  economy?: number | null;
  highlight?: string;
  note?: string;
};

export type PlayerSpotlight = {
  label: string;
  value: string;
  context?: string;
};

export type PlayerProfile = {
  slug: string;
  name: string;
  role: string;
  dominantSkill: "Batter" | "Bowler" | "All-Rounder" | "Wicketkeeper";
  battingStyle?: string;
  bowlingStyle?: string;
  image?: string;
  highlight: string;
  spotlight: PlayerSpotlight;
  tags: string[];
  leagues: {
    corpusChristi: LeagueBreakdown;
    sanAntonio?: LeagueBreakdown;
  };
};

export const players: PlayerProfile[] = [
  {
    slug: "akhil-reddy-danda",
    name: "Akhil Reddy Danda",
    role: "Captain & Top-Order All-Rounder",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    image: "/media/players/akhil-reddy-danda.jpeg",
    highlight:
      "Captain fantastic mixing calm chases with powerplay wickets while setting tactical standards every week.",
    spotlight: {
      label: "CCPL High Score",
      value: "75",
      context: "Anchored the semi-final surge.",
    },
    tags: ["Leadership", "Finisher", "Powerplay Specialist"],
    leagues: {
      corpusChristi: {
        runs: 198,
        matches: 5,
        wickets: 8,
        strikeRate: 123.8,
        economy: 8.0,
        highlight: "75-run captain's knock in the CCPL knockout stage.",
      },
      sanAntonio: {
        runs: 45,
        matches: 1,
        wickets: 2,
        strikeRate: 128.6,
        economy: 7.0,
        highlight: "Debut 45 (35) keeps Islanders top of the San Antonio ladder.",
      },
    },
  },
  {
    slug: "dr-vishnu-reddy",
    name: "Dr. Vishnu V. Reddy",
    role: "Mentor, Strike Bowler & Middle-Order Anchor",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium-fast",
    image: "/media/players/vishnu-reddy.jpeg",
    highlight:
      "Mentorship mastermind who pairs red-cap batting form with ruthless wicket hauls across both leagues.",
    spotlight: {
      label: "Most CCPL Wickets",
      value: "12",
      context: "Alongside 245 runs at 61.3 average.",
    },
    tags: ["Mentor", "Death Overs", "Red Cap"],
    leagues: {
      corpusChristi: {
        runs: 245,
        matches: 5,
        wickets: 12,
        strikeRate: 136.1,
        economy: 8.1,
        highlight: "89-run blitz and four-wicket haul in back-to-back CCPL clashes.",
      },
      sanAntonio: {
        runs: 52,
        matches: 1,
        wickets: 3,
        strikeRate: 136.8,
        economy: 7.0,
        highlight: "Opened San Antonio campaign with 52 (38) and a triple strike.",
      },
    },
  },
  {
    slug: "rajasekhar-reddy",
    name: "Rajasekhar Reddy",
    role: "Vice Captain & Top-Order Backbone",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    image: "/media/events/runnerup-presentation.jpeg",
    highlight:
      "Steady hand locking early overs and shepherding big chases with composure.",
    spotlight: {
      label: "CCPL Highest",
      value: "82",
      context: "Match-winning knock versus Team B.",
    },
    tags: ["Vice Captain", "Anchor", "Clutch"],
    leagues: {
      corpusChristi: {
        runs: 210,
        matches: 5,
        wickets: 10,
        strikeRate: 120.0,
        economy: 8.1,
        highlight: "82-run CCPL masterclass to secure finals qualification.",
      },
      sanAntonio: {
        runs: null,
        note: "Preparing to join the San Antonio roster for the playoff push.",
      },
    },
  },
  {
    slug: "faizan-mohammad",
    name: "Faizan Mohammad",
    role: "Opening Batter",
    dominantSkill: "Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    image: "/media/players/faizan-mohammad.jpeg",
    highlight:
      "Explosive starts with 59.3 CCPL average and a habit of turning powerplays into statement totals.",
    spotlight: {
      label: "Strike Rate",
      value: "114.8",
      context: "Sets day-one tempo in Corpus Christi.",
    },
    tags: ["Powerplay", "Boundary Hitter", "Momentum"],
    leagues: {
      corpusChristi: {
        runs: 178,
        matches: 4,
        wickets: 7,
        strikeRate: 114.8,
        economy: 7.9,
        highlight: "68 (45) in semi-final run plus clutch death-over yorkers.",
      },
      sanAntonio: {
        runs: null,
        note: "Debut slated for upcoming San Antonio double-header.",
      },
    },
  },
  {
    slug: "nithesh-y",
    name: "Nithesh Y",
    role: "Top-Order Stroke Maker",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off-spin",
    image: "/media/players/nithesh-y.jpeg",
    highlight:
      "Elegant stroke-maker converting starts into long partnerships while tidying overs with off-spin.",
    spotlight: {
      label: "Batting Average",
      value: "52.0",
      context: "CCPL campaign with 62-run best.",
    },
    tags: ["Partnership Builder", "Off-spin", "Game Management"],
    leagues: {
      corpusChristi: {
        runs: 156,
        matches: 4,
        wickets: 5,
        strikeRate: 107.6,
        economy: 7.9,
        highlight: "62 (51) vs Team A to break quarter-final pressure.",
      },
      sanAntonio: {
        runs: null,
        note: "Awaiting San Antonio stats upload from March fixtures.",
      },
    },
  },
  {
    slug: "dinesh-reddy-kandari",
    name: "Dinesh Reddy Kandari",
    role: "Strike Bowler & Middle-Order Muscle",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast-medium",
    image: "/media/players/dinesh-reddy-kandari.jpeg",
    highlight:
      "Leads the seam unit with yorker accuracy and delivers match-sealing lower-order bursts.",
    spotlight: {
      label: "CCPL Wickets",
      value: "9",
      context: "Economy kept to 8.1 across 13 overs.",
    },
    tags: ["Yorker Specialist", "Lower-Order Power", "Calm Under Pressure"],
    leagues: {
      corpusChristi: {
        runs: 145,
        matches: 3,
        wickets: 9,
        strikeRate: 120.8,
        economy: 8.1,
        highlight: "4/22 spell in the CCPL eliminator.",
      },
      sanAntonio: {
        runs: null,
        note: "Set to spearhead bowling rotation in mid-season fixtures.",
      },
    },
  },
  {
    slug: "charan-a",
    name: "Charan A",
    role: "Left-Arm Swing Bowler",
    dominantSkill: "Bowler",
    image: "/media/players/charan-reddy.jpeg",
    highlight:
      "Trusted new-ball left-armer providing swing-friendly starts and sharp field placements.",
    spotlight: {
      label: "Powerplay Maidens",
      value: "3",
      context: "Tracked in CCPL staff log.",
    },
    tags: ["Left-Arm Pace", "New Ball", "Field General"],
    leagues: {
      corpusChristi: {
        runs: null,
        wickets: null,
        note: "Official figures tracked manually—double-wicket maiden vs Team A highlighted.",
        highlight: "Double-wicket maiden tilted the CCPL group clash.",
      },
      sanAntonio: {
        runs: null,
        note: "Numbers syncing from April fixtures; integral to swing plans.",
      },
    },
  },
  {
    slug: "sampath-reddy",
    name: "Sampath Reddy",
    role: "Lead Spinner & Vice Mentor",
    dominantSkill: "Bowler",
    image: "/media/players/sampath-reddy.jpeg",
    highlight:
      "Go-to spinner owning middle overs with loop and drift while co-leading mentoring duties.",
    spotlight: {
      label: "Best Economy",
      value: "Sub-7",
      context: "Verified across staff analytics logs.",
    },
    tags: ["Spin", "Control", "Mentorship"],
    leagues: {
      corpusChristi: {
        runs: null,
        wickets: null,
        note: "Manual statbook recorded an 11-wicket CCPL campaign.",
        highlight: "3/18 in semi-final built the path to CCPL trophy night.",
      },
      sanAntonio: {
        runs: null,
        note: "Maintaining sub-7 economy through San Antonio leadership run.",
      },
    },
  },
  {
    slug: "harshith-sai",
    name: "Harshith Sai C.H.",
    role: "Middle-Order Finisher",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off-spin",
    image: "/media/events/century-celebration.jpeg",
    highlight:
      "Calm closer delivering 67.0 CCPL average and emergency overs of off-spin.",
    spotlight: {
      label: "Batting Average",
      value: "67.0",
      context: "Three CCPL knocks with unbeaten 54* highlight.",
    },
    tags: ["Finisher", "Nerves of Steel", "Off-spin"],
    leagues: {
      corpusChristi: {
        runs: 134,
        matches: 3,
        wickets: 4,
        strikeRate: 116.5,
        economy: 8.2,
        highlight: "54* chase masterclass to seal semifinal seeding.",
      },
      sanAntonio: {
        runs: null,
        note: "Available as floating finisher; San Antonio data due next sync.",
      },
    },
  },
  {
    slug: "karthikeya",
    name: "Karthikeya (Karthik 01)",
    role: "Leg-Spin All-Rounder",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm leg-break",
    image: "/media/events/ccpl-2025-team.jpeg",
    highlight:
      "Middle-over tactician blending ripping leg-spin with flexible batting slots.",
    spotlight: {
      label: "CCPL Wickets",
      value: "11",
      context: "Joint-best strike bowler in group stage.",
    },
    tags: ["Leg-spin", "Tactical Flex", "Partnership Breaker"],
    leagues: {
      corpusChristi: {
        runs: 167,
        matches: 4,
        wickets: 11,
        strikeRate: 111.3,
        economy: 7.9,
        highlight: "Game-changing three-wicket burst in CCPL qualifier.",
      },
      sanAntonio: {
        runs: null,
        note: "Leg-spin duo with Sampath reintroduced mid-season.",
      },
    },
  },
  {
    slug: "shashwanth-k",
    name: "Shashwanth K. (Shashvat Patel)",
    role: "All-Terrain All-Rounder",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    image: "/media/events/team-gathering-san-antonio.jpeg",
    highlight:
      "Versatile contributor trusted anywhere in the order while controlling seam movement.",
    spotlight: {
      label: "CCPL Runs",
      value: "192",
      context: "Five knocks with 71-run peak.",
    },
    tags: ["Adaptable", "Middle Overs", "Clutch"],
    leagues: {
      corpusChristi: {
        runs: 192,
        matches: 5,
        wickets: 6,
        strikeRate: 114.3,
        economy: 8.3,
        highlight: "71-run surge stabilised CCPL semifinals entry.",
      },
      sanAntonio: {
        runs: null,
        note: "Planned return for San Antonio playoff sprint.",
      },
    },
  },
  {
    slug: "pushkar-p",
    name: "Pushkar P",
    role: "San Antonio League Breakout Opener",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    image: "/media/events/cover-squad-celebration.jpeg",
    highlight:
      "San Antonio run machine driving the current unbeaten streak with all-round impact.",
    spotlight: {
      label: "San Antonio Runs",
      value: "203",
      context: "Five matches, highest score 79.",
    },
    tags: ["San Antonio Leader", "Momentum", "Two-Way Threat"],
    leagues: {
      corpusChristi: {
        runs: null,
        note: "Featured primarily in San Antonio roster this season.",
      },
      sanAntonio: {
        runs: 203,
        matches: 5,
        wickets: 8,
        strikeRate: 111.5,
        economy: 8.2,
        highlight: "79-run powerplay masterclass keeps Islanders undefeated.",
      },
    },
  },
  {
    slug: "pardha-sravdhi",
    name: "Pardha Sravdhi",
    role: "Top-Order Stabiliser",
    dominantSkill: "Batter",
    image: "/media/players/pardha-sravdhi.jpeg",
    highlight:
      "Sets tempo with patient 30s that unlock stroke-makers while leading community outreach.",
    spotlight: {
      label: "Record Partnership",
      value: "163",
      context: "Cross-league friendly high-water mark.",
    },
    tags: ["Partnerships", "Field Marshal", "Calm Presence"],
    leagues: {
      corpusChristi: {
        runs: null,
        note: "Coaching staff credit Pardha with a stabilising 35 in the CCPL semi.",
        highlight: "Steady 35 alongside Faizan kept CCPL chase under control.",
      },
      sanAntonio: {
        runs: null,
        note: "Shared 163-run stand noted in league-friendly showcase.",
        highlight: "Opened San Antonio season with historic 163-run partnership.",
      },
    },
  },
  {
    slug: "sai-swaroop-naidu",
    name: "Sai Swaroop Naidu",
    role: "Wicketkeeper & Middle-Order Accelerator",
    dominantSkill: "Wicketkeeper",
    highlight:
      "Glove-first leader with rapid stumpings and end-overs strikes that keep run rate surging.",
    spotlight: {
      label: "Dismissals Logged",
      value: "7",
      context: "Combined catches, stumpings, and run-outs this season.",
    },
    tags: ["Wicketkeeper", "Quick Hands", "Energy"],
    leagues: {
      corpusChristi: {
        runs: null,
        note: "Scorebook shows 28* cameo with three stumpings in CCPL group stage.",
        highlight: "Snared three stumpings in CCPL decider.",
      },
      sanAntonio: {
        runs: null,
        note: "Ongoing updates from San Antonio scoring table.",
        highlight: "Delivered 32* finisher cameo in latest league win.",
      },
    },
  },
  {
    slug: "suraj-reddy",
    name: "Suraj Reddy",
    role: "Emerging Fast Bowler",
    dominantSkill: "Bowler",
    highlight:
      "Raw pace option clocking 130+ km/h, under mentorship for death-over packages.",
    spotlight: {
      label: "Top Speed",
      value: "134 km/h",
      context: "Recorded during pre-season combine.",
    },
    tags: ["Pace Factory", "Development", "Future Star"],
    leagues: {
      corpusChristi: {
        runs: null,
        note: "Reserved as impact sub for CCPL playoff contingency.",
        highlight: "Maintains readiness in Islanders high-performance camp.",
      },
      sanAntonio: {
        runs: null,
        wickets: 1,
        note: "One-over cameo produced maiden wicket under the lights.",
        highlight: "First San Antonio wicket sealed final over victory.",
      },
    },
  },
  {
    slug: "dhanush",
    name: "Dhanush",
    role: "All-Round Utility",
    dominantSkill: "All-Rounder",
    highlight:
      "Team-first contributor covering fielding hotspots, quick singles, and bench energy.",
    spotlight: {
      label: "Fielding Impact",
      value: "2 direct hits",
      context: "Logged during CCPL group stages.",
    },
    tags: ["Utility", "Fielding", "Team Spirit"],
    leagues: {
      corpusChristi: {
        runs: null,
        note: "Primarily featured as substitute fielder; contributions tracked by staff.",
        highlight: "Two direct-hit run-outs in CCPL pool play.",
      },
      sanAntonio: {
        runs: null,
        note: "Support role emphasising fielding rotations and hydration logistics.",
      },
    },
  },
  {
    slug: "farhan",
    name: "Farhan",
    role: "Middle-Order Counterpunch",
    dominantSkill: "Batter",
    highlight:
      "Powerful southpaw closing overs with lofted boundaries, often paired with Harshith for finishing moves.",
    spotlight: {
      label: "Finishing Strike Rate",
      value: "142",
      context: "Derived from staff-coded end overs.",
    },
    tags: ["Southpaw Power", "Finisher", "Locker-Room Spark"],
    leagues: {
      corpusChristi: {
        runs: null,
        note: "Partial scorebook recaps highlight 28(16) cameo vs Team A.",
        highlight: "Finished CCPL group match with 18* off 9 to secure NRR.",
      },
      sanAntonio: {
        runs: null,
        note: "Detailed stats uploading from San Antonio scoring table.",
        highlight: "Struck 34* off 16 to ice rivalry night at Star Cricket USA.",
      },
    },
  },
];
