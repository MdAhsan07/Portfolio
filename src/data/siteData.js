export const profile = {
  name: 'Md Ahsan',
  roles: [
    'Data Science Enthusiast',
    'DSA Enthusiast',
    'Aspiring AI Engineer',
  ],
  intro:
    "Passionate Computer Science student with strong interests in Data Science, Artificial Intelligence, and Data Structures & Algorithms. I enjoy solving challenging problems, extracting insights from data, and building intelligent systems that create real-world impact.",
  location: 'Ghaziabad, Uttar Pradesh, India',
  email: 'mdahsan7904@gmail.com',
  phone: '+91 8181818470',
  resumeUrl: '/resume.pdf',
  education: {
    degree: 'B.Tech in Computer Science and Engineering',
    college: 'BBDIT Ghaziabad (AKTU)',
    year: '3rd Year',
    duration: '2024–2028',
    cgpa: '6.77',
  },
  about:
    "I'm an aspiring AI Engineer with a deep curiosity for how data can be turned into decisions and models can be turned into products. My work spans machine learning fundamentals, exploratory data analysis, and competitive programming — three disciplines that keep me equally comfortable reasoning about an algorithm's time complexity and a model's loss curve. I'm driven to build a career at the intersection of AI and software engineering, and I treat every problem, whether it's a LeetCode hard or a messy dataset, as a chance to sharpen how I think.",
  interests: [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Competitive Programming',
    'Software Development',
  ],
}

export const academicHistory = [
  {
    level: 'B.Tech (CSE)',
    school: 'BBDIT Ghaziabad, AKTU',
    score: 'CGPA: 6.77',
    years: '2024–2028',
  },
  {
    level: '12th (CBSE)',
    school: 'Jamuna Ram Memorial School',
    score: '67%',
    years: '2022–2024',
  },
  {
    level: '10th (CISCE)',
    school: 'Sacred Heart School',
    score: '80%',
    years: '2020–2022',
  },
]

export const socials = {
  github: 'https://github.com/MdAhsan07',
  linkedin: 'https://www.linkedin.com/in/md-ahsan-854851332',
  leetcode: 'https://leetcode.com/u/Md_Ahsan_07/',
  gfg: 'https://www.geeksforgeeks.org/profile/mdahsafrt7',
  email: 'mailto:mdahsan7904@gmail.com',
}

export const skills = [
  {
    category: 'Programming Languages',
    comment: 'languages I think in',
    items: [
      { name: 'C', level: 75 },
      { name: 'C++', level: 85 },
      { name: 'Python', level: 92 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    category: 'Data Science',
    comment: 'wrangling signal out of noise',
    items: [
      { name: 'Pandas', level: 88 },
      { name: 'NumPy', level: 85 },
      { name: 'Matplotlib', level: 80 },
      { name: 'Seaborn', level: 78 },
    ],
  },
  {
    category: 'Development',
    comment: 'tools of the trade',
    items: [
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 80 },
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
    ],
  },
  {
    category: 'Core Concepts',
    comment: 'first principles',
    items: [
      { name: 'Data Structures & Algorithms', level: 88 },
      { name: 'Object Oriented Programming', level: 84 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Data Analysis', level: 82 },
      { name: 'Machine Learning Fundamentals', level: 75 },
    ],
  },
]

export const projects = [
  {
    id: 'desktop-jarvis',
    title: 'Desktop Jarvis',
    tag: 'AI Voice Assistant',
    description:
      'An AI-powered voice assistant capable of automating desktop tasks, responding to voice commands, opening applications, and improving productivity.',
    tech: ['Python', 'Speech Recognition', 'Text To Speech', 'Automation'],
    github: 'https://github.com/MdAhsan07/Desktop-Jarvis',
    demo: null,
    filename: 'jarvis.py',
    accent: 'blue',
  },
  {
    id: 'ipl-data-analysis',
    title: 'IPL Data Analysis',
    tag: 'Exploratory Data Analysis',
    description:
      'Performed exploratory data analysis on IPL datasets to discover insights related to player performance, team strategies, and match statistics.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    github: null,
    demo: null,
    filename: 'ipl_eda.ipynb',
    accent: 'cyan',
  },
  {
    id: 'sih-sentiment-analysis',
    title: 'SIH Sentiment Analysis',
    tag: 'NLP · Smart India Hackathon',
    description:
      'Developing an intelligent sentiment analysis system for eConsultation feedback to extract insights and improve decision-making.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Visualization'],
    github: null,
    demo: null,
    filename: 'sentiment_model.py',
    accent: 'violet',
    inProgress: true,
  },
]

export const achievements = [
  {
    title: '2-Star Python Badge',
    org: 'HackerRank',
    description: 'Earned a 2-star rating for proficiency in Python problem solving.',
  },
  {
    title: 'Ranked 9th — College DSA Leaderboard',
    org: 'GeeksforGeeks',
    description: 'Placed 9th among peers on the college-wide GFG DSA leaderboard.',
  },
  {
    title: 'Python Certification',
    org: 'LetsUpgrade',
    description: 'Completed a structured certification program covering core to advanced Python.',
  },
  {
    title: 'DSA Certification',
    org: 'LetsUpgrade',
    description: 'Completed a certification focused on data structures and algorithmic problem solving.',
  },
  {
    title: 'Consistent Problem Solving',
    org: 'Multiple Platforms',
    description: 'Solved numerous DSA problems across coding platforms to sharpen algorithmic thinking.',
  },
]

export const codingProfiles = [
  {
    name: 'GitHub',
    handle: '@MdAhsan07',
    url: socials.github,
    stat: { label: 'Public Repos', value: '20+' },
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    handle: 'md-ahsan',
    url: socials.linkedin,
    stat: { label: 'Network', value: 'Connect' },
    icon: 'linkedin',
  },
  {
    name: 'LeetCode',
    handle: '@Md_Ahsan_07',
    url: socials.leetcode,
    stat: { label: 'Problems Solved', value: '150+' },
    icon: 'leetcode',
  },
  {
    name: 'GeeksforGeeks',
    handle: '@mdahsafrt7',
    url: socials.gfg,
    stat: { label: 'College Rank', value: '#9' },
    icon: 'gfg',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Profiles', href: '#profiles' },
  { label: 'Contact', href: '#contact' },
]
