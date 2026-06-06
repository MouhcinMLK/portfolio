// ─── Personal info ────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: 'Mouhcine Malek',
  role: 'AI Engineering Student',
  tagline: 'Agentic AI · Data Science · Machine Learning',
  bio: 'I build intelligent systems that connect data, models, and real-world applications.',
  photo: '/photo2.png',
  logo: '/logo.png',
  cv: '/CVENG_MouhcineMalek.pdf',
  email: 'mhcnmalek@gmail.com',
  linkedin: 'https://linkedin.com/in/mouhcine-malek',
  github: 'https://github.com/MohcnMalek',
  location: 'Beni Mellal, Morocco',
  status: 'Available for PFA Internship',
}

// Hero badge pills
export const HERO_BADGES = ['Agentic AI', 'Data Science', 'Machine Learning', 'Computer Vision']

// ─── CNN journey layers ───────────────────────────────────────────────────────
// `stage` maps to a visual block component inside CNNArchitecture.
export const CNN_LAYERS = [
  {
    id: 'input',
    type: 'Input Layer',
    name: 'Identity',
    label: 'INPUT',
    layerNum: '01',
    color: '#06b6d4',       // cyan
    colorName: 'cyan',
    stage: 'input',         // maps to InputStage visual
    preview: 'Mouhcine Malek · AI Engineering Student',
    content: {
      type: 'profile',
      description: 'Mouhcine Malek, AI Engineering student passionate about intelligent systems, data, and real-world AI applications.',
    },
  },
  {
    id: 'conv1',
    type: 'Conv Layer',
    name: 'Education',
    label: 'CONV_1',
    layerNum: '02',
    color: '#8b5cf6',       // purple
    colorName: 'purple',
    stage: 'conv',
    preview: 'Engineering Cycle in AI · DUT in BI & Data Science',
    content: {
      type: 'education',
      items: [
        { degree: 'Engineering Cycle in Artificial Intelligence', school: 'ENIAD, Berkane', period: '2024 – Present', status: 'current' },
        { degree: 'DUT in Business Intelligence and Data Science', school: 'EST Essaouira', period: '2022 – 2024', status: 'done' },
      ],
    },
  },
  {
    id: 'pool',
    type: 'Pooling Layer',
    name: 'Skills',
    label: 'POOL',
    layerNum: '03',
    color: '#10b981',       // green
    colorName: 'green',
    stage: 'pooling',
    preview: 'AI · Agentic · Programming · Frameworks · Tools',
    content: {
      type: 'skills',
      groups: [
        { name: 'AI', skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'LLM', 'RAG', 'Data Analysis'] },
        { name: 'Agentic AI', skills: ['LangChain', 'LangGraph', 'MCP'] },
        { name: 'Programming', skills: ['Python', 'Java', 'C', 'C++', 'R', 'JavaScript', 'PHP'] },
        { name: 'Frameworks', skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Django', 'React.js', 'FastAPI'] },
        { name: 'Tools', skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Power BI', 'Git', 'GitHub', 'UML', 'MERISE'] },
      ],
    },
  },
  {
    id: 'conv2',
    type: 'Conv Layer',
    name: 'Projects',
    label: 'CONV_2',
    layerNum: '04',
    color: '#f97316',       // orange
    colorName: 'orange',
    stage: 'conv',
    preview: 'Alzheimer Detection · Multi-Agent · Data Platform · EV App',
    content: {
      type: 'projects',
      items: [
        { title: "Alzheimer Disease Detection & Classification", tags: ['Deep Learning', 'NLP', 'RAG', 'Medical AI'] },
        { title: "Clinical Orientation Multi-Agent Workflow", tags: ['LangGraph', 'LangChain', 'MCP', 'FastAPI'] },
        { title: "Automated Data Analysis Web Application", tags: ['Django', 'Machine Learning', 'Python'] },
        { title: "EV Charging Points Management App", tags: ['Django', 'PostgreSQL', 'JavaScript'] },
      ],
    },
  },
  {
    id: 'dense',
    type: 'Dense Layer',
    name: 'Experience',
    label: 'DENSE',
    layerNum: '05',
    color: '#ec4899',       // pink
    colorName: 'pink',
    stage: 'dense',
    preview: 'Web Developer Intern · POGO · Agricultural Office',
    content: {
      type: 'experience',
      items: [
        { role: 'Web Developer Intern', company: 'POGO', location: 'Fès', period: '2024', description: 'Full-stack web application development for EV charging infrastructure management.' },
        { role: 'Web Development Observation', company: 'Office Régional de Mise en Valeur Agricole du Tadla', location: 'Morocco', period: '2023', description: 'Observation internship in web development within the agricultural sector.' },
      ],
    },
  },
  {
    id: 'output',
    type: 'Output Layer',
    name: 'Result',
    label: 'OUTPUT',
    layerNum: '06',
    color: '#06b6d4',       // cyan
    colorName: 'cyan',
    stage: 'output',
    preview: 'Available for PFA Internship · Morocco',
    content: {
      type: 'output',
      status: 'Available for PFA Internship',
      focus: ['AI', 'Data Science', 'Agentic AI', 'Web Applications'],
      location: 'Beni Mellal, Morocco',
      confidence: 98,
    },
  },
]

// ─── Projects section ─────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "Alzheimer's Disease Detection & Classification",
    subtitle: 'Deep Learning · NLP · RAG · Medical AI',
    description:
      'Medical AI system combining brain MRI analysis, Deep Learning and NLP. PyTorch classification models plus a RAG pipeline with vector databases to generate contextual scientific answers.',
    tags: ['Python', 'PyTorch', 'Deep Learning', 'NLP', 'RAG', 'Medical AI'],
    icon: 'activity',
    accent: '#06b6d4',
    featured: true,
  },
  {
    title: 'Clinical Orientation Multi-Agent Workflow',
    subtitle: 'LangGraph · Agentic AI · FastAPI · MCP',
    description:
      'Multi-agent system with LangGraph and LangChain simulating clinical orientation. Agents for collection, synthesis, human validation and report generation, integrated with MCP and FastAPI.',
    tags: ['LangGraph', 'Agentic AI', 'FastAPI', 'MCP', 'LangChain'],
    icon: 'layers',
    accent: '#8b5cf6',
    featured: true,
  },
  {
    title: 'Automated Data Analysis Platform',
    subtitle: 'Django · Machine Learning',
    description:
      'Django platform for uploading datasets, running exploratory analysis, and automatically recommending suitable ML algorithms based on data characteristics.',
    tags: ['Django', 'Machine Learning', 'Data Analysis', 'Python'],
    icon: 'barchart',
    accent: '#06b6d4',
    featured: false,
  },
  {
    title: 'EV Charging Points Management App',
    subtitle: 'Django · PostgreSQL · JavaScript',
    description:
      'Full-stack web app developed during the POGO internship for managing EV charging infrastructure. Status monitoring, user management and an administrative dashboard.',
    tags: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
    icon: 'zap',
    accent: '#8b5cf6',
    featured: false,
  },
]

// ─── Skills section ───────────────────────────────────────────────────────────
export const SKILLS = [
  {
    name: 'Artificial Intelligence',
    icon: 'cpu',
    color: '#06b6d4',
    skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'LLM', 'RAG', 'Data Analysis'],
  },
  {
    name: 'Agentic AI',
    icon: 'zap',
    color: '#8b5cf6',
    skills: ['LangChain', 'LangGraph', 'MCP', 'Multi-Agent Systems', 'Tool Use'],
  },
  {
    name: 'Programming',
    icon: 'code',
    color: '#10b981',
    skills: ['Python', 'Java', 'C', 'C++', 'R', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    name: 'Frameworks',
    icon: 'settings',
    color: '#f97316',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Django', 'React.js', 'FastAPI'],
  },
  {
    name: 'Databases & Tools',
    icon: 'database',
    color: '#ec4899',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Power BI', 'Git', 'GitHub', 'UML', 'MERISE'],
  },
]

// ─── Experience section ───────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: 'Web Developer Intern',
    company: 'POGO',
    location: 'Fès, Morocco',
    period: 'April 2024 – May 2024',
    description:
      'Developed an EV charging points management web application. Worked on UI design, backend integration, and database architecture.',
    tech: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
    accent: '#06b6d4',
  },
  {
    role: 'Web Development Observation Internship',
    company: 'Office Régional de Mise en Valeur Agricole du Tadla',
    location: 'Fquih Ben Salah, Morocco',
    period: 'May 2023 – July 2023',
    description:
      'Followed the development of an agricultural product commercialization platform. Hands-on exposure to Django, Bootstrap and SQLite in a professional environment.',
    tech: ['Django', 'Bootstrap', 'SQLite'],
    accent: '#8b5cf6',
  },
]

// ─── Education section ────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'Engineering Cycle in Artificial Intelligence',
    school: 'ENIAD',
    location: 'Berkane, Morocco',
    period: '2024 – Present',
    status: 'current',
    accent: '#8b5cf6',
    topics: ['Deep Learning', 'Computer Vision', 'NLP', 'Agentic AI', 'Data Engineering'],
  },
  {
    degree: 'DUT — Business Intelligence & Data Science',
    school: 'EST Essaouira',
    location: 'Essaouira, Morocco',
    period: '2022 – 2024',
    status: 'completed',
    accent: '#06b6d4',
    topics: ['Data Analysis', 'SQL', 'Python', 'R', 'Power BI', 'Statistics'],
  },
]
