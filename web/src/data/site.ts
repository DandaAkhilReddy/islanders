import executiveSummary from "./generated/executiveSummary.json";

type ExecutiveSummary = typeof executiveSummary;

const summary: ExecutiveSummary = executiveSummary;

export const siteIdentity = {
  name: "Islanders Cricket Club",
  tagline: "Corpus Christi Champions • San Antonio Leaders",
  mission:
    "Elevating Islanders cricket with authentic storytelling, championship performances, and community-backed investment across Corpus Christi and San Antonio leagues.",
  cta: {
    label: "Meet the Squad",
    href: "/squad",
  },
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Squad", href: "/squad" },
  { label: "Achievements", href: "/achievements" },
  { label: "Leadership", href: "/leadership" },
  { label: "Analytics", href: "/analytics" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
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
    name: "Dr. Vishnu Reddy",
    title: "Principal & Chief Mentor",
    distinction: "Architect of Islanders Culture & Performance Excellence",
    description:
      "Principal mentor dedicated to improving all player skills, tactical strategy, and championship mindset. Guides every aspect of team development from technique refinement to mental preparation.",
    image: "/media/players/vishnu-reddy.jpeg",
    spotlight: [
      "Conducts skill development sessions and strategic pitch-walk assessments.",
      "Leads all training programs focused on batting, bowling, and fielding improvements.",
      "Connects the squad with international cricket opportunities and elite mentorship.",
      "Hosts ceremonial events and leads prize distribution ceremonies.",
    ],
  },
  {
    name: "Dr. Veena Reddy",
    title: "Co-Sponsor & Operations Support",
    distinction: "Supporting Dr. Vishnu Reddy in all team operations",
    description:
      "Works alongside Dr. Vishnu Reddy to ensure seamless team operations. Manages matchday logistics, player wellbeing, and hospitality to support the principal mentor's vision.",
    image: "/media/events/hero-san-antonio-team.jpeg",
    spotlight: [
      "Supports Dr. Vishnu Reddy with all operational and logistical needs.",
      "Coordinates matchday nutrition, transport, and player care.",
      "Maintains sponsor relations and gratitude wall acknowledgments.",
      "Ensures players focus on skill development and performance.",
    ],
  },
  {
    name: "Akhil Reddy Danda",
    title: "Team Captain",
    distinction: "Red Cap Holder & Multi-time Man of the Match",
    description:
      "Lead strategist and on-field commander with standout all-round contributions in every tournament.",
    image: "/media/players/akhil-reddy-danda.jpeg",
    spotlight: [
      "Engineered comeback wins with decisive bowling changes.",
      "Frontline scorer delivering pivotal batting partnerships.",
      "Presence in every photo spotlight to embody Islanders pride.",
    ],
  },
];

const leadershipOverrides: Record<
  string,
  {
    title: string;
    distinction: string;
    description: string;
    image?: string;
    spotlight?: string[];
  }
> = {
  "Dr. Vishnu Reddy": {
    title: "Principal & Chief Mentor",
    distinction: "Architect of Islanders Culture & Performance Excellence",
    description:
      "Principal mentor dedicated to improving all player skills, tactical strategy, and championship mindset. Guides every aspect of team development from technique refinement to mental preparation.",
    image: "/media/players/vishnu-reddy.jpeg",
    spotlight: [
      "Conducts skill development sessions and strategic pitch-walk assessments.",
      "Leads all training programs focused on batting, bowling, and fielding improvements.",
      "Connects the squad with international cricket opportunities and elite mentorship.",
      "Hosts ceremonial events and leads prize distribution ceremonies.",
    ],
  },
  "Dr. Veena Reddy": {
    title: "Co-Sponsor & Operations Support",
    distinction: "Supporting Dr. Vishnu Reddy in all team operations",
    description:
      "Works alongside Dr. Vishnu Reddy to ensure seamless team operations. Manages matchday logistics, player wellbeing, and hospitality to support the principal mentor's vision.",
    image: "/media/events/hero-san-antonio-team.jpeg",
    spotlight: [
      "Supports Dr. Vishnu Reddy with all operational and logistical needs.",
      "Coordinates matchday nutrition, transport, and player care.",
      "Maintains sponsor relations and gratitude wall acknowledgments.",
      "Ensures players focus on skill development and performance.",
    ],
  },
  "Akhil Reddy Danda": {
    title: "Team Captain",
    distinction: "Red Cap Holder & Multi-time Man of the Match",
    description:
      "Lead strategist and on-field commander with standout all-round contributions in every tournament.",
    image: "/media/players/akhil-reddy-danda.jpeg",
    spotlight: [
      "Engineered comeback wins with decisive bowling changes.",
      "Frontline scorer delivering pivotal batting partnerships.",
      "Presence in every photo spotlight to embody Islanders pride.",
    ],
  },
};

const generatedLeadership = Array.isArray(summary.keyPersonnel)
  ? summary.keyPersonnel.map((person) => {
      const override = leadershipOverrides[person.name] ?? {
        title: person.role,
        distinction: person.descriptor ?? "",
        description: person.bullets?.[0] ?? "",
        image: undefined,
        spotlight: person.bullets ?? [],
      };

      return {
        name: person.name,
        title: override.title,
        distinction: override.distinction,
        description: override.description,
        image: override.image,
        spotlight: override.spotlight ?? person.bullets ?? [],
      };
    })
  : [];

const mergedLeadership =
  generatedLeadership.length > 0
    ? [
        ...generatedLeadership,
        ...defaultLeadership.filter(
          (leader) =>
            !generatedLeadership.some(
              (existing) => existing.name === leader.name
            )
        ),
      ]
    : defaultLeadership;

export const leadership = mergedLeadership;

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
    label: "Transport Fleet",
    value: "2 SUVs",
    context: "Fuel, tolls, parking, and drivers covered for every squad outing.",
  },
  {
    label: "Matchday Meals",
    value: "3 per fixture",
    context: "Breakfast, lunch, dinner plus protein shakes, ice, and hydration.",
  },
  {
    label: "Equipment Coverage",
    value: "Full kit",
    context: "Bats, pads, gloves, and match essentials funded for all players.",
  },
];

export const futureRoadmap = [
  "Real-time match tracking and live scoreboard integration.",
  "AI-driven highlight reels and social-ready content automation.",
  "Face recognition overlays to spotlight emerging talent.",
  "Mobile-first analytics hub for coaching staff and leadership.",
];

export const matchdaySupport = [
  {
    title: "Transportation",
    description:
      "Two dedicated Islanders SUVs move the squad, kit, and coaching staff to every Corpus Christi and San Antonio venue.",
    highlights: [
      "Drivers, fuel, tolls, and parking handled fully by the leadership team.",
      "Pre-loaded with hydration, ice chests, and recovery equipment.",
      "Post-match drop-offs coordinated for every player and support staff member.",
    ],
  },
  {
    title: "Nutrition Program",
    description:
      "Breakfast, lunch, and dinner are organised for every matchday with pre and post-match fueling protocols.",
    highlights: [
      "Protein shakes, electrolytes, fruits, and hydration available at the ground.",
      "Warm meals prepared for both home and away fixtures, including vegetarian options.",
      "Ice baths and recovery snacks ready within 30 minutes of stumps.",
    ],
  },
  {
    title: "Equipment & Facilities",
    description:
      "From bats to boundary cones, every cricket asset is financed so players focus purely on performance.",
    highlights: [
      "Multiple bat options per batter plus spare grips and protective gear.",
      "Bowling machines, fielding nets, and portable side screens on call.",
      "Medical kits and physio supplies available for every innings.",
    ],
  },
];

export const sponsorProfiles = [
  {
    name: "Dr. Vishnu Reddy",
    title: "Principal Sponsor & Chief Mentor",
    contribution:
      "Leading all aspects of team development—from skill improvement sessions to strategic partnerships. Provides complete support for transport, equipment, and nutrition while connecting the squad with international cricket opportunities.",
    focusAreas: [
      "Conducts comprehensive skill development and tactical strategy sessions.",
      "Leads all training programs focused on batting, bowling, and fielding excellence.",
      "Coordinates complete transport logistics with dedicated SUVs for every fixture.",
      "Ensures equipment funding—bats, pads, gloves, and match essentials for all players.",
      "Connects the squad with international mentors and elite cricket networks.",
    ],
    quote:
      "Every player deserves the resources to excel. We're committed to removing barriers so talent shines at the highest level.",
    image: "/media/players/vishnu-reddy.jpeg",
  },
  {
    name: "Dr. Veena Reddy",
    title: "Co-Sponsor & Operations Director",
    contribution:
      "Works alongside Dr. Vishnu Reddy to ensure seamless matchday operations and player wellbeing. Manages nutrition programs, hospitality coordination, and family engagement to create a championship environment.",
    focusAreas: [
      "Coordinates matchday nutrition—breakfast, lunch, dinner, and recovery support.",
      "Manages hospitality and ensures players focus on performance excellence.",
      "Oversees sponsor relations and gratitude wall acknowledgments.",
      "Ensures players and their families are celebrated at every milestone.",
      "Supports all operational logistics for Corpus Christi and San Antonio leagues.",
    ],
    quote:
      "Islanders cricket is about family. Creating the right environment off the field allows our players to perform brilliantly on it.",
    image: "/media/events/hero-san-antonio-team.jpeg",
  },
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
