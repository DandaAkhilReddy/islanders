export type LeagueBreakdown = {
  runs: number | null;
  matches?: number | null;
  wickets?: number | null;
  catches?: number | null;
  average?: number | null;
  economy?: number | null;
  dotBalls?: number | null;
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
  totalStats: {
    matches: number;
    runs: number;
    average: number;
    wickets?: number;
    economy?: number;
    catches?: number;
    dotBalls?: number;
  };
};

// Top 5 Players based on Analytics Data (October 31, 2025)
export const players: PlayerProfile[] = [
  {
    slug: "akhil-reddy-danda",
    name: "Akhil Reddy Danda",
    role: "Captain & MVP All-Rounder",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    image: "/media/players/akhil-reddy-danda.jpeg",
    highlight:
      "Triple Crown Champion dominating across batting, bowling, and fielding with exceptional all-round performance.",
    spotlight: {
      label: "Team MVP",
      value: "#1 in All Categories",
      context: "956 runs, 28 wickets, 13 catches - Complete dominance",
    },
    tags: ["MVP", "Captain", "Triple Crown Winner", "All-Rounder"],
    totalStats: {
      matches: 21,
      runs: 956,
      average: 50.32,
      wickets: 28,
      economy: 6.36,
      catches: 13,
      dotBalls: 188,
    },
  },
  {
    slug: "vishnu-reddy",
    name: "Dr. Vishnu V. Reddy",
    role: "Mentor & Top-Order Batsman",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium-fast",
    image: "/media/players/vishnu-reddy.jpeg",
    highlight:
      "Consistent top-order batsman and team mentor providing stability with 359 runs across 18 matches.",
    spotlight: {
      label: "Rank #2 Batting",
      value: "359 Runs",
      context: "Second-highest run contributor at 25.64 average",
    },
    tags: ["Mentor", "Top-Order", "Consistency", "Leadership"],
    totalStats: {
      matches: 18,
      runs: 359,
      average: 25.64,
      catches: 4,
    },
  },
  {
    slug: "rajshekhar-reddy",
    name: "Rajshekhar Reddy",
    role: "Vice Captain & All-Rounder",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    image: "/media/events/runnerup-presentation.jpeg",
    highlight:
      "Reliable vice-captain delivering across all departments with 337 runs and 11 wickets.",
    spotlight: {
      label: "Rank #3 Batting",
      value: "337 Runs",
      context: "Third-highest scorer with 25.92 average, 11 wickets, 7 catches",
    },
    tags: ["Vice Captain", "All-Rounder", "Reliable", "Top 5"],
    totalStats: {
      matches: 17,
      runs: 337,
      average: 25.92,
      wickets: 11,
      economy: 6.79,
      catches: 7,
      dotBalls: 90,
    },
  },
  {
    slug: "dinesh-reddy-kandari",
    name: "Dinesh Reddy Kandari",
    role: "Middle-Order Batsman",
    dominantSkill: "Batter",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm fast-medium",
    image: "/media/players/dinesh-reddy-kandari.jpeg",
    highlight:
      "Powerful middle-order contributor with the best average (30.89) among Top 5 batsmen.",
    spotlight: {
      label: "Rank #4 Batting",
      value: "278 Runs",
      context: "Best average at 30.89 in 14 matches",
    },
    tags: ["Middle Order", "Power Hitter", "Top 5", "Consistent"],
    totalStats: {
      matches: 14,
      runs: 278,
      average: 30.89,
    },
  },
  {
    slug: "sampath-reddy",
    name: "Sampath Reddy",
    role: "Spinner & Lower-Middle Order Batsman",
    dominantSkill: "All-Rounder",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm off-spin",
    image: "/media/players/sampath-reddy.jpeg",
    highlight:
      "Versatile all-rounder completing the Top 5 with 254 runs and excellent fielding (5 catches).",
    spotlight: {
      label: "Rank #5 Batting",
      value: "254 Runs",
      context: "Fifth-highest scorer with 25.40 average, 5 catches",
    },
    tags: ["Spin Bowling", "All-Rounder", "Top 5", "Fielding"],
    totalStats: {
      matches: 15,
      runs: 254,
      average: 25.40,
      catches: 5,
    },
  },
];

// Top 5 Bowling Leaders (for reference)
export const bowlingLeaders = [
  "Akhil Reddy Danda",    // 28 wickets
  "Charan A",             // 24 wickets
  "Rajshekhar Reddy",     // 11 wickets
  "Faizan Mohammad",      // 10 wickets
  "Nithesh Y",            // 10 wickets
];

// Top 5 Fielding Leaders (for reference)
export const fieldingLeaders = [
  "Akhil Reddy Danda",    // 13 catches
  "Charan A",             // 12 catches
  "Rajshekhar Reddy",     // 7 catches
  "Shashvat Panchal",     // 6 catches
  "Sampath Reddy",        // 5 catches
];
