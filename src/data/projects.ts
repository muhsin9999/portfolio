export interface Education {
  school: string;
  degree: string;
  grade?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
  longBio: string[];
  education: Education;
}

export interface ProjectSection {
  heading: string;
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  status: string;
  tagline: string;
  context: string;
  tech: string[];
  sourceUrl?: string;
  sections: ProjectSection[];
}

export interface OtherProject {
  title: string;
  description: string;
  url?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const siteConfig: SiteConfig = {
  name: 'Mustapha Muhsin',
  title: 'Full Stack & AI Engineer',
  location: 'Abuja, Nigeria',
  email: 'onoruoiza15@gmail.com',
  github: 'https://github.com/muhsin9999',
  linkedin: 'https://www.linkedin.com/in/mustapha-muhsin',
  bio: 'I build web applications across frontend, backend, and cloud infrastructure, with a particular interest in AI-powered products and dependable developer experiences.',
  longBio: [
    'I am a full-stack engineer who enjoys taking a product from interface and API design through data modelling, integration, and deployment. I work across TypeScript and Python and care about software that is useful, clear, and reliable.',
    'My experience spans React and Next.js interfaces, database-backed services, cloud infrastructure, and AI applications. I also build independent projects to explore backend architecture and practical uses of machine learning.',
    'I trained as an electrical and electronics engineer at Federal University of Technology Minna. That background shaped my systems approach, from microcontrollers and PCB prototyping at NCAIR to web and cloud software.',
    'Outside of engineering I play chess and build things just to see if I can. I am currently open to remote full-stack, backend, and AI engineering roles.'
  ],
  education: {
    school: 'Federal University of Technology Minna',
    degree: 'B.Eng Electrical & Electronics Engineering'
  }
};

export const projects: Project[] = [
  {
    slug: 'rag-chatbot-api',
    title: 'RAG Chatbot API',
    status: 'open source',
    tagline: 'A document question-answering API with background ingestion and source-grounded responses.',
    context: 'independent project // backend & AI',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Pinecone', 'AWS S3', 'Docker'],
    sourceUrl: 'https://github.com/muhsin9999/rag-chatbot-api',
    sections: [
      {
        heading: 'the idea',
        content: 'I built an API that accepts documents and answers questions using retrieved passages from those documents. The responses include source references so a user can trace an answer back to its material.'
      },
      {
        heading: 'what i built',
        content: 'The FastAPI service handles uploads, document listing, chat, and conversation history. Uploaded files are stored in S3; PostgreSQL holds document and conversation data. A Celery worker processes ingestion in the background, with Redis as the task broker.'
      },
      {
        heading: 'how it works',
        content: 'Documents are split into chunks, embedded, and indexed in Pinecone. At question time, the API retrieves relevant chunks and uses them to generate a grounded answer. The repository includes Docker setup, database migrations, and automated checks.'
      }
    ]
  },
  {
    slug: 'attendance-api',
    title: 'Facial Recognition Attendance API',
    status: 'open source',
    tagline: 'An API for employee enrolment, face-based check-in, and attendance history.',
    context: 'independent project // APIs & computer vision',
    tech: ['Python', 'FastAPI', 'OpenCV', 'dlib', 'PostgreSQL', 'SQLAlchemy', 'JWT'],
    sourceUrl: 'https://github.com/muhsin9999/AttendanceAPI',
    sections: [
      {
        heading: 'the idea',
        content: 'I built a small attendance system that registers an employee from a photo and records check-ins by comparing a new image with stored face encodings.'
      },
      {
        heading: 'what i built',
        content: 'The FastAPI endpoints cover employee registration, check-in, employee listing, and attendance history. OpenCV handles image input, dlib creates face encodings, and PostgreSQL stores employee and attendance records.'
      },
      {
        heading: 'access and verification',
        content: 'JWT authentication protects the API, with admin access required for employee registration. A check-in returns a matched employee and timestamp or an unauthorised response when no match is found.'
      }
    ]
  },
  {
    slug: 'elonosia-ai',
    title: 'Elonosia AI',
    status: 'prototype',
    tagline: 'ML-based malaria detection -- I built the hardware prototype bridging the CNN model to clinical use.',
    context: 'ncair / nitda // ai & embedded systems // 2022',
    tech: ['C++', 'ESP32', 'TensorFlow', 'Altium PCB Design', '3D Printing', 'Python', 'CNN'],
    sections: [
      {
        heading: 'the product',
        content: 'Elonosia AI was an NCAIR-incubated startup building automated malaria detection from blood smear microscopy images. The goal was a device that could sit in a rural clinic and diagnose malaria without a trained microscopist.'
      },
      {
        heading: 'what i built',
        content: 'I designed and built the hardware prototype -- an automated microscopy capture device using ESP32/ESP8266 microcontrollers, custom PCBs designed in Altium, and 3D-printed enclosures. The device automated slide positioning and image capture, feeding frames to a TensorFlow CNN model trained on blood smear datasets.'
      },
      {
        heading: 'impact',
        content: 'The prototype demonstrated that automated capture and ML-based diagnosis was viable at low cost. I also contributed to training and validating the CNN models for blood smear classification.'
      }
    ]
  }
];

export const otherProjects: OtherProject[] = [
  {
    title: 'IoT Solar Tracking System',
    description: 'Final-year project using ESP8266 and ThingSpeak for panel tracking and remote monitoring.'
  }
];

export const skills: SkillCategory[] = [
  {
    category: 'core',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Node.js', 'C++']
  },
  {
    category: 'frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'React Hook Form', 'Zod']
  },
  {
    category: 'backend & data',
    skills: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Drizzle ORM', 'SQLAlchemy', 'RESTful APIs', 'WebSockets', 'Celery']
  },
  {
    category: 'cloud & ai',
    skills: ['AWS (Lambda, ECS, Fargate, EC2, S3, Cognito, Bedrock)', 'RAG Pipelines', 'LLM Integrations', 'LangChain', 'LangGraph', 'Tool Calling']
  },
  {
    category: 'tools',
    skills: ['Docker', 'Git', 'Cursor', 'Claude Code', 'GitHub Actions', 'Railway', 'AWS CLI']
  }
];
