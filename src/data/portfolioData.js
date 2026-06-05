// ─── Personal info ────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: 'Mouhcine Malek',
  role: 'AI Engineering Student',
  tagline: 'Agentic AI · Data Science · Machine Learning',
  bio: 'I build intelligent systems that connect data, models, and real-world applications.',
  photo: '/photo.jpg',
  cv: '/CVENG_MouhcineMalek.pdf',
  email: 'mhcnmalek@gmail.com',
  linkedin: 'https://linkedin.com/in/mouhcine-malek',
  github: 'https://github.com/MohcnMalek',
  location: 'Beni Mellal, Morocco',
  status: 'Available for PFA Internship',
}

// ─── CNN layer definitions ────────────────────────────────────────────────────
// Each layer maps to a portfolio section.
// maps/mapW/mapH control the feature-map stack visuals.
export const CNN_LAYERS = [
  {
    id: 'input',
    type: 'Input',
    label: 'INPUT',
    badge: 'Identity',
    annotation: 'Profile Data',
    color: '#00d4ff',
    maps: 1,
    mapW: 88,
    mapH: 280,
    isInput: true,
    title: 'Who I Am',
    content: {
      type: 'profile',
      description:
        'Mouhcine Malek — AI Engineering student at ENIAD, passionate about intelligent systems, data science, and applied AI.',
      facts: [
        'Based in Morocco · Seeking PFA internship',
        'Background in Business Intelligence & Data Science',
        'Focus on end-to-end AI system development',
        'Member — Nurl AI Student Club (HR Team)',
      ],
    },
  },
  {
    id: 'conv1',
    type: 'Conv2D',
    label: 'CONV_1',
    badge: 'Education',
    annotation: 'Feature Extraction',
    color: '#8b5cf6',
    maps: 6,
    mapW: 62,
    mapH: 220,
    title: 'Education',
    content: {
      type: 'education',
      items: [
        {
          degree: 'Engineering Cycle in Artificial Intelligence',
          school: 'ENIAD',
          location: 'Berkane, Morocco',
          period: '2024 – Present',
          status: 'current',
          topics: ['Deep Learning', 'Computer Vision', 'NLP', 'Agentic AI', 'Data Engineering'],
        },
        {
          degree: 'DUT — Business Intelligence & Data Science',
          school: 'EST Essaouira',
          location: 'Essaouira, Morocco',
          period: '2022 – 2024',
          status: 'completed',
          topics: ['Data Analysis', 'SQL', 'Python', 'R', 'Power BI', 'Statistics'],
        },
      ],
    },
  },
  {
    id: 'pool',
    type: 'MaxPool2D',
    label: 'MAX_POOL',
    badge: 'Core Skills',
    annotation: 'Pooling',
    color: '#3b82f6',
    maps: 3,
    mapW: 54,
    mapH: 172,
    title: 'Technical Skills',
    content: {
      type: 'skills',
      groups: [
        {
          name: 'Artificial Intelligence',
          color: '#00d4ff',
          skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'LLM', 'RAG', 'Data Analysis'],
        },
        {
          name: 'Agentic AI',
          color: '#8b5cf6',
          skills: ['LangChain', 'LangGraph', 'MCP', 'Multi-Agent Systems', 'Tool Use'],
        },
        {
          name: 'Programming',
          color: '#3b82f6',
          skills: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'R', 'PHP', 'SQL'],
        },
        {
          name: 'Frameworks',
          color: '#06b6d4',
          skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Django', 'React.js', 'FastAPI'],
        },
        {
          name: 'Databases & Tools',
          color: '#a855f7',
          skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Power BI', 'Git', 'GitHub', 'UML', 'MERISE'],
        },
      ],
    },
  },
  {
    id: 'conv2',
    type: 'Conv2D',
    label: 'CONV_2',
    badge: 'Projects',
    annotation: 'Pattern Recognition',
    color: '#06b6d4',
    maps: 8,
    mapW: 60,
    mapH: 210,
    title: 'Projects',
    content: {
      type: 'projects',
      items: [
        {
          icon: '🧠',
          title: "Alzheimer's Detection & Classification",
          subtitle: 'Deep Learning · NLP · RAG · Medical AI',
          description:
            'Medical AI system combining brain MRI analysis, Deep Learning and NLP. PyTorch classification models + RAG pipeline with vector databases to generate contextual scientific answers.',
          tags: ['Python', 'PyTorch', 'Deep Learning', 'NLP', 'RAG', 'Medical AI'],
          accent: '#00d4ff',
        },
        {
          icon: '🤖',
          title: 'Clinical Orientation Multi-Agent Workflow',
          subtitle: 'LangGraph · Agentic AI · FastAPI',
          description:
            'Multi-agent system with LangGraph and LangChain simulating clinical orientation. Agents for collection, synthesis, human validation and report generation. Integrated MCP, FastAPI and Streamlit.',
          tags: ['LangGraph', 'LangChain', 'MCP', 'FastAPI', 'Streamlit'],
          accent: '#8b5cf6',
        },
        {
          icon: '📊',
          title: 'Automated Data Analysis Platform',
          subtitle: 'Django · Machine Learning',
          description:
            'Django platform for uploading datasets, running exploratory analysis, and automatically recommending suitable ML algorithms based on data characteristics.',
          tags: ['Django', 'Machine Learning', 'Data Analysis', 'Python'],
          accent: '#06b6d4',
        },
        {
          icon: '⚡',
          title: 'EV Charging Points Management App',
          subtitle: 'Django · PostgreSQL · JavaScript',
          description:
            'Full-stack web app developed during POGO internship for managing EV charging infrastructure. Status monitoring, user management and administrative dashboard.',
          tags: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
          accent: '#a855f7',
        },
      ],
    },
  },
  {
    id: 'dense',
    type: 'Dense',
    label: 'FC_DENSE',
    badge: 'Experience',
    annotation: 'Decision Layer',
    color: '#a855f7',
    maps: 5,
    isDense: true,
    title: 'Experience',
    content: {
      type: 'experience',
      items: [
        {
          role: 'Web Developer Intern',
          company: 'POGO',
          location: 'Fès, Morocco',
          period: 'April 2024 – May 2024',
          description:
            'Developed an EV charging points management web application. UI design, backend integration, and database architecture.',
          tech: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS'],
          accent: '#00d4ff',
        },
        {
          role: 'Web Development Observation Internship',
          company: 'ORMVAT',
          location: 'Fquih Ben Salah, Morocco',
          period: 'May 2023 – July 2023',
          description:
            'Followed the development of an agricultural product commercialization platform. Hands-on exposure to Django, Bootstrap and SQLite in a professional environment.',
          tech: ['Django', 'Bootstrap', 'SQLite'],
          accent: '#8b5cf6',
        },
      ],
    },
  },
  {
    id: 'output',
    type: 'Output',
    label: 'OUTPUT',
    badge: 'Available!',
    annotation: 'Result: AI Engineer',
    color: '#10b981',
    maps: 1,
    isOutput: true,
    title: 'Hire Me',
    content: {
      type: 'output',
      status: 'Available for PFA Internship',
      focus: ['AI / Data Science', 'Agentic Systems', 'Web Applications', 'Deep Learning'],
      location: 'Morocco (on-site or remote)',
      mode: 'Learning · Building · Deploying',
    },
  },
]

// ─── Standalone section data (for detailed pages below fold) ─────────────────
export const PROJECTS = CNN_LAYERS.find((l) => l.id === 'conv2').content.items
export const SKILLS_GROUPS = CNN_LAYERS.find((l) => l.id === 'pool').content.groups
export const EXPERIENCES = CNN_LAYERS.find((l) => l.id === 'dense').content.items
export const EDUCATION_ITEMS = CNN_LAYERS.find((l) => l.id === 'conv1').content.items
