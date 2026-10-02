export interface CurrentAffairItem {
  id: string;
  category: 'Polity & Governance' | 'Economy' | 'International Relations' | 'Environment' | 'Science & Technology';
  gsPaper: 'GS Paper I' | 'GS Paper II' | 'GS Paper III' | 'GS Paper IV';
  headline: string;
  summary: string;
  date: string;
  readTime: string;
  keyArticles?: string[];
  mainsRelevance: string;
  prelimsPointers: string[];
  editorialAnalysis: {
    context: string;
    keyArguments: string[];
    constitutionalAngles: string;
    wayForward: string;
  };
}

export interface FeatureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlightStat: string;
  detailPoints: string[];
  demoSnippet: string;
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  structuredDetails?: {
    syllabusLink?: string;
    keyPoints?: string[];
    prelimsTip?: string;
    mainsFormat?: string;
  };
}

export interface PerformanceTimeframeData {
  readinessScore: number;
  percentile: string;
  questionsAttempted: number;
  accuracyRate: number;
  eliminationAccuracy: number;
  studyHoursTotal: number;
  dailyHours: { day: string; hours: number; target: number }[];
  subjects: {
    name: string;
    accuracy: number;
    trend: string;
    weakArea: string;
  }[];
  questionTypes: {
    type: string;
    accuracy: number;
    count: number;
  }[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  targetExam: string;
  achievementTag: string;
}
