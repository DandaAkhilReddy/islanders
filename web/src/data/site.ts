import executiveSummary from "./generated/executiveSummary.json";

type ExecutiveSummary = typeof executiveSummary;

const summary: ExecutiveSummary = executiveSummary;

export const siteIdentity = {
  name: "Islanders Cricket Club",
  tagline: "Data-Driven Excellence On and Off the Pitch",
  mission:
    "Transforming match highlights, player achievements, and photo intelligence into championship-ready storytelling.",
  cta: {
    label: "View Season Strategy",
    href: "/analytics",
  },
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Achievements", href: "/achievements" },
  { label: "Leadership", href: "/leadership" },
  { label: "Analytics", href: "/analytics" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const defaultAchievements = [
  {
    league: "Corpus Christi Premier League (CCPL)",
    status: "2025 Runner-Up",
    narrative:
      "A finals campaign powered by sharp bowling spells, clutch batting, and unified leadership across every round.",
    highlights: [
      "Multiple Man of the Match recognitions secured by Islanders standouts.",
      "Trophy presentations featuring the full squad and mentoring staff.",
      "Resilience and tactical execution in high-pressure playoff matches.",
    ],
  },
  {
    league: "San Antonio League",
    status: "2025 Current League Leaders",
    narrative:
      "Top of the points table with momentum from an unbeaten streak and dominating net run rate.",
    highlights: [
      "Comprehensive wins anchored by balanced bowling and batting depth.",
      "Leadership group deploying data-backed matchups every weekend.",
      "Team morale at an all-time high with celebrations on and off the field.",
    ],
  },
];

const achievementOverrides: Record<
  string,
  {
    league?: string;
    status?: string;
    narrative?: string;
    additionalHighlights?: string[];
  }
> = {
  "CCPL (Corpus Christi Premier League)": {
    league: "Corpus Christi Premier League (CCPL)",
    status: "2025 Runner-Up",
    narrative:
      "A finals campaign powered by sharp bowling spells, clutch batting, and unified leadership across every round.",
    additionalHighlights: [
      "Multiple Man of the Match recognitions secured by Islanders standouts.",
      "Trophy presentations featuring the full squad and mentoring staff.",
      "Resilience and tactical execution in high-pressure playoff matches.",
    ],
  },
  "San Antonio League": {
    league: "San Antonio League",
    status: "2025 Current League Leaders",
    narrative:
      "Top of the points table with momentum from an unbeaten streak and dominating net run rate.",
    additionalHighlights: [
      "Comprehensive wins anchored by balanced bowling and batting depth.",
      "Leadership group deploying data-backed matchups every weekend.",
      "Team morale at an all-time high with celebrations on and off the field.",
    ],
  },
};

const generatedAchievements = Array.isArray(summary.achievements)
  ? summary.achievements.map((entry) => {
      const override = achievementOverrides[entry.title] ?? {};
      const baseHighlights = Object.entries(entry.bullets ?? {})
        .filter(([key]) => key.toLowerCase() !== "status")
        .map(([, value]) => value);

      const highlights = [
        ...baseHighlights,
        ...(override.additionalHighlights ?? []),
      ];

      return {
        league: override.league ?? entry.title,
        status: override.status ?? entry.bullets?.Status ?? "Status pending",
        narrative:
          override.narrative ??
          baseHighlights[0] ??
          "Championship storyline ready for next analytics sync.",
        highlights: highlights.length
          ? highlights
          : ["Highlights will refresh after the next analytics run."],
      };
    })
  : [];

export const achievements =
  generatedAchievements.length > 0 ? generatedAchievements : defaultAchievements;

const defaultLeadership = [
  {
    name: "Akhil Reddy Danda",
    title: "Team Captain",
    distinction: "Red Cap Holder & Multi-time Man of the Match",
    description:
      "Lead strategist and on-field commander with standout all-round contributions in every tournament.",
    spotlight: [
      "Engineered comeback wins with decisive bowling changes.",
      "Frontline scorer delivering pivotal batting partnerships.",
      "Presence in every photo spotlight to embody Islanders pride.",
    ],
  },
  {
    name: "Dr. Vishnu Reddy",
    title: "Principal Mentor",
    distinction: "Architect of Islanders Culture & Development Pathways",
    description:
      "Guides long-term talent growth, ceremonial engagements, and leadership development across the club.",
    spotlight: [
      "Hosts strategic sessions and pitch-walk assessments.",
      "Leads prize distribution ceremonies celebrating excellence.",
      "Connects the squad with international cricket opportunities.",
    ],
  },
];

const leadershipOverrides: Record<
  string,
  {
    title: string;
    distinction: string;
    description: string;
    spotlight?: string[];
  }
> = {
  "Akhil Reddy Danda": {
    title: "Team Captain",
    distinction: "Red Cap Holder & Multi-time Man of the Match",
    description:
      "Lead strategist and on-field commander with standout all-round contributions in every tournament.",
    spotlight: [
      "Engineered comeback wins with decisive bowling changes.",
      "Frontline scorer delivering pivotal batting partnerships.",
      "Presence in every photo spotlight to embody Islanders pride.",
    ],
  },
  "Dr. Vishnu Reddy": {
    title: "Principal Mentor",
    distinction: "Architect of Islanders Culture & Development Pathways",
    description:
      "Guides long-term talent growth, ceremonial engagements, and leadership development across the club.",
    spotlight: [
      "Hosts strategic sessions and pitch-walk assessments.",
      "Leads prize distribution ceremonies celebrating excellence.",
      "Connects the squad with international cricket opportunities.",
    ],
  },
};

const generatedLeadership = Array.isArray(summary.keyPersonnel)
  ? summary.keyPersonnel.map((person) => {
      const override = leadershipOverrides[person.name] ?? {
        title: person.role,
        distinction: person.descriptor ?? "",
        description: person.bullets?.[0] ?? "",
        spotlight: person.bullets ?? [],
      };

      return {
        name: person.name,
        title: override.title,
        distinction: override.distinction,
        description: override.description,
        spotlight: override.spotlight ?? person.bullets ?? [],
      };
    })
  : [];

export const leadership =
  generatedLeadership.length > 0 ? generatedLeadership : defaultLeadership;

const defaultPhotoDistribution = [
  {
    category: "Team Celebration",
    count: 14,
    description:
      "Full-squad trophy lifts, group huddles, and post-match unity.",
  },
  {
    category: "Individual Awards",
    count: 12,
    description:
      "Personal accolades, player-of-the-match spotlights, and leadership features.",
  },
  {
    category: "Action Shots",
    count: 16,
    description:
      "Bowling releases, batting milestones, fielding heroics, and wicket-keeping moments.",
  },
];

const photoDescriptions: Record<string, string> = {
  "Team Celebration":
    "Full-squad trophy lifts, group huddles, and post-match unity.",
  "Individual Awards":
    "Personal accolades, player-of-the-match spotlights, and leadership features.",
  "Action Shots":
    "Bowling releases, batting milestones, fielding heroics, and wicket-keeping moments.",
};

const generatedPhotoDistribution = Array.isArray(summary.photoDistribution)
  ? summary.photoDistribution.map((item) => ({
      category: item.category,
      count: item.count,
      description:
        photoDescriptions[item.category] ??
        "Story-rich imagery curated by the analytics pipeline.",
    }))
  : [];

export const photoDistribution =
  generatedPhotoDistribution.length > 0
    ? generatedPhotoDistribution
    : defaultPhotoDistribution;

const defaultSpecialMoments = [
  {
    title: "Championship Trophy Ceremonies",
    detail:
      "Runner-up honors in CCPL with triumphant photos of trophy lifts and individual accolades.",
  },
  {
    title: "Match Action Heroes",
    detail:
      "Dynamic captures of Yorkers, boundary drives, and fielding brilliance across the season.",
  },
  {
    title: "Team Bonding Culture",
    detail:
      "Celebrations at Rajasekhar Anna's home, restaurant gatherings, and match-eve strategy dinners.",
  },
  {
    title: "International Connections",
    detail:
      "Exclusive meeting with the Zimbabwe national captain (retired, age 39) fueling global cricket networking.",
  },
];

const specialMomentOverrides: Record<string, string> = {
  "Championship Trophy Ceremonies":
    "Runner-up honors in CCPL with triumphant photos of trophy lifts and individual accolades.",
  "Match Action":
    "Dynamic captures of Yorkers, boundary drives, and fielding brilliance across the season.",
  "Team Bonding":
    "Celebrations at Rajasekhar Anna's home, restaurant gatherings, and match-eve strategy dinners.",
  "Distinguished Guests":
    "Exclusive meeting with the Zimbabwe national captain (retired, age 39) fueling global cricket networking.",
};

const generatedSpecialMoments = Array.isArray(summary.specialMoments)
  ? summary.specialMoments.map((moment) => ({
      title: moment.title,
      detail:
        specialMomentOverrides[moment.title] ??
        (moment.bullets ?? []).join(" • "),
    }))
  : [];

export const specialMoments =
  generatedSpecialMoments.length > 0
    ? generatedSpecialMoments
    : defaultSpecialMoments;

export const analyticsLayers = [
  {
    layer: "Technical Analysis",
    focus: [
      "Image dimensions, aspect ratio, and brightness profiling.",
      "Color histogram reviews for jersey and trophy detection.",
      "Quality assurance to flag blurred or underexposed assets.",
    ],
  },
  {
    layer: "Content Recognition",
    focus: [
      "Person counting, jersey identification, and role tagging.",
      "Automatic trophy and award detection with OCR extraction.",
      "Environmental classification for indoor, outdoor, and field contexts.",
    ],
  },
  {
    layer: "Contextual Intelligence",
    focus: [
      "Event classification from pre-match strategy to post-match celebration.",
      "Emotion and energy scoring to surface the most electric photos.",
      "Key figure prioritization to ensure leadership coverage.",
    ],
  },
  {
    layer: "Semantic Understanding",
    focus: [
      "Match phase detection (before, during, after).",
      "Achievement versus preparation segmentation.",
      "Social versus professional storytelling cues.",
    ],
  },
];

export const metrics = [
  {
    label: "Photos Analyzed",
    value: String(summary.metrics?.totalPhotos ?? 42),
    context: "Action, awards, celebrations, and strategic sessions.",
  },
  {
    label: "Categorization Accuracy",
    value: "100%",
    context: "Validated against manual tagging benchmarks.",
  },
  {
    label: "Report Generation",
    value: "< 2 minutes",
    context: "Full suite of visuals, summaries, and exports.",
  },
  {
    label: "Tournaments Covered",
    value: "2",
    context: "CCPL 2025 campaign and current San Antonio League charge.",
  },
];

export const futureRoadmap = [
  "Real-time match tracking and live scoreboard integration.",
  "AI-driven highlight reels and social-ready content automation.",
  "Face recognition overlays to spotlight emerging talent.",
  "Mobile-first analytics hub for coaching staff and leadership.",
];

export const contactChannels = [
  {
    label: "Captain's Desk",
    person: "Akhil Reddy Danda",
    email: "leadership@islanderscricket.com",
    note: "Season planning, fixtures, and high-performance inquiries.",
  },
  {
    label: "Mentorship & Partnerships",
    person: "Dr. Vishnu Reddy",
    email: "mentor@islanderscricket.com",
    note: "Community partnerships, mentorship programs, and events.",
  },
  {
    label: "Media & Analytics",
    person: "Analytics Operations",
    email: "analytics@islanderscricket.com",
    note: "Photo assets, data dashboards, and press-ready insights.",
  },
];

export const siteFooter = {
  ethos: "Unity in Victory",
  copy:
    "Powered by the Islanders Cricket analytics collective - blending strategy, storytelling, and culture.",
  links: [
    { label: "Executive Summary", href: "/gallery#executive-summary" },
    { label: "Analytics Engine", href: "/analytics#engine" },
    { label: "Season Timeline", href: "/achievements#timeline" },
  ],
};
