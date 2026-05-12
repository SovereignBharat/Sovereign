export type Story = {
  title: string;
  location: string;
  language: string;
  category: string;
  readTime: string;
  excerpt: string;
};

export type Language = {
  label: string;
  nativeName: string;
  region: string;
};

export const featuredStories: Story[] = [
  {
    title: "How coastal fishers are documenting a changing monsoon",
    location: "Kochi, Kerala",
    language: "Malayalam + English",
    category: "Climate",
    readTime: "7 min read",
    excerpt:
      "A field notebook from harbour communities tracking rainfall, catch patterns, and what local councils can do next.",
  },
  {
    title: "The panchayat broadband project that brought telemedicine home",
    location: "Satara, Maharashtra",
    language: "Marathi",
    category: "Public Health",
    readTime: "5 min read",
    excerpt:
      "Local health workers explain how reliable connectivity shortened queues and improved follow-up care for senior citizens.",
  },
  {
    title: "A civic guide to summer water budgeting for apartment associations",
    location: "Bengaluru, Karnataka",
    language: "Kannada + English",
    category: "Civic Life",
    readTime: "9 min read",
    excerpt:
      "Resident welfare associations share templates for transparent water audits, tanker usage, and rainwater recharge plans.",
  },
];

export const languages: Language[] = [
  { label: "Hindi", nativeName: "हिन्दी", region: "North India" },
  { label: "Tamil", nativeName: "தமிழ்", region: "Tamil Nadu" },
  { label: "Bengali", nativeName: "বাংলা", region: "West Bengal" },
  { label: "Marathi", nativeName: "मराठी", region: "Maharashtra" },
  { label: "Kannada", nativeName: "ಕನ್ನಡ", region: "Karnataka" },
  { label: "Malayalam", nativeName: "മലയാളം", region: "Kerala" },
];

export const platformStats = [
  { value: "12+", label: "Indian languages" },
  { value: "50km", label: "local discovery radius" },
  { value: "DPDP", label: "privacy-first design" },
  { value: "Open", label: "self-hostable stack" },
];

export const creatorWorkflow = [
  "Draft with the Open Canvas AI editor",
  "Add language, location, and community context",
  "Review DPDP consent and publishing controls",
  "Publish locally and syndicate multilingual versions",
];
