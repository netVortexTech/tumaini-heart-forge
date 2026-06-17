export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
};

export const TEAM: TeamMember[] = [
  {
    slug: "kachocho",
    name: "Kachocho R. Timanywa",
    role: "Executive Director",
    bio: "Kachocho R. Timanywa is a graduate from Southern Hampshire University (UK) and St. Augustine University of Tanzania with a Master of Science in Community Economic Development (MsCED) and a Bachelor of Arts in Mass Communication specializing in Public Relations. With over 20 years of experience since 1999, he has a proven track record in developing innovative solutions to social issues, fundraising, strategic planning, and program development. A strong consensus-builder, he nurtures partnerships and employs results-based approaches to social, economic, and political change across Tanzania. As an excellent writer and editor, he empowers his staff to grow, managing program budgets with precision. His career includes work with NGOs like Humuliza, World Vision, Pact Tanzania, JHPIEGO, TADEPA, and Tumaini Letu, focusing on ECD interventions, support for vulnerable groups, and HIV/AIDS-affected communities.",
    linkedin: "https://www.linkedin.com/in/kachocho-timanywa-k-respicius-310a67104",
  },
  {
    slug: "adivela",
    name: "Adivela Rugalabamu",
    role: "Programs Manager",
    bio: "A social worker and community development expert with over 15 years of experience, Adivela Rugalabamu facilitates Tumaini Letu's programs, focusing on ECD interventions and primary health issues. He ensures the organization meets its mission, goals, and objectives by managing social programs, including technical and entrepreneurial group development for vulnerable populations, capacity building, and promoting behavioral change and entrepreneurial education for Adolescent Girls and Young Women (AGYW). He coordinates AGYW access to HIV/STI and family planning programs.",
  },
  {
    slug: "leonard",
    name: "Leonard Mtapima",
    role: "Monitoring & Evaluation Coordinator",
    bio: "A Social Sciences professional with a background in Sociological Studies and expertise in Project Planning, Management, Monitoring, and Evaluation, Leonard Mtapima brings 9+ years of experience coordinating donor-funded projects. He excels in prioritizing tasks, organizing workflows, and communicating effectively across teams. His skills include outstanding verbal and written communication, team management, presentation, and facilitation, advocating for marginalized groups and promoting equal opportunities.",
  },
  {
    slug: "lisberth",
    name: "Lisberth Kahwa",
    role: "Finance Manager & Administrator",
    bio: "With an Advanced Diploma in Accountancy and training in CPA, Lisberth Kahwa brings 15 years of experience as an accountant and finance manager. She oversees Tumaini Letu's financial health, managing budgets, financial reporting, and ensuring compliance with accounting standards. She leads the finance team, develops financial strategies, and provides strategic advice to enhance the organization's well-being.",
  },
  {
    slug: "frola",
    name: "Frola Rwantege",
    role: "Education Coordinator",
    bio: "An education development professional with over 20 years of experience, Frola Rwantege leads community-based educational programs at Tumaini Letu since 2010. With expertise in curriculum design, teacher training, and program management, she improves access and quality of education for underserved populations.",
  },
  {
    slug: "abimeleck",
    name: "Abimeleck Richard",
    role: "Senior ECD & Child Protection Specialist",
    bio: "With a Bachelor of Law (LLB) from St. Augustine University of Tanzania and over 10 years of experience, Abimeleck Richard provides technical guidance on ECD and child protection. He supports program development, capacity building, and advocacy for children's rights.",
  },
  {
    slug: "johansen",
    name: "Johansen Rwegoshora",
    role: "Data Clerk / Field Officer",
    bio: "Johansen Rwegoshora, a data clerk, ensures accuracy in data entry and tracking for Tumaini Letu, managing source documents and resolving inconsistencies.",
  },
  {
    slug: "anna",
    name: "Anna Kashabano",
    role: "Office Secretary",
    bio: "Anna Kashabano, with a Diploma in Record Management from Tanzania Institute of Accountancy, maintains Tumaini Letu's office efficiency through secretarial and administrative support.",
  },
  {
    slug: "shani",
    name: "Shani Katela",
    role: "Field Officer / Community Mobilizer",
    bio: "Shani Katela, with a Diploma in Community Development, brings extensive experience in community mobilization and advocacy to Tumaini Letu, supporting high-risk groups.",
  },
  {
    slug: "amon",
    name: "Amon Ngemela",
    role: "Driver",
    bio: "Amon Ngemela, Tumaini Letu's driver, ensures safe transportation and vehicle maintenance, supporting program activities across the region.",
  },
];

export function getTeamMember(slug: string) {
  return TEAM.find((m) => m.slug === slug);
}
