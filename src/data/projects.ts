export interface Education {
  school: string;
  degree: string;
  grade: string;
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
  status: 'live' | 'nda' | 'prototype' | string;
  tagline: string;
  context: string;
  tech: string[];
  sections: ProjectSection[];
}

export interface OtherProject {
  title: string;
  description: string;
  url: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const siteConfig: SiteConfig = {
  name: 'Mustapha Muhsin',
  title: 'AI & Backend Engineer',
  location: 'Abuja, Nigeria',
  email: 'onoruoiza15@gmail.com',
  github: 'https://github.com/muhsin9999',
  linkedin: 'https://www.linkedin.com/in/mustapha-muhsin',
  bio: 'I build the backend systems behind AI products -- generation engines, billing infrastructure, and cloud architectures that ship to real users.',
  longBio: [
    'I am a backend engineer building production AI systems for international clients. At SEO Content AI I own the generation engine that powers a parallel content platform -- the billing infrastructure, session persistence, and the orchestration layer that scales to 40 simultaneous articles. Before that I designed an AWS serverless architecture for an enterprise waste operations platform serving roughly 100 users.',
    'I trained as an electrical and electronics engineer at Federal University of Technology Minna. That background shaped how I think about systems -- from the hardware up. At NCAIR (Nigeria\'s national AI centre) I built the hardware prototype for a malaria detection startup, designing automated microscopy devices with ESP32 microcontrollers and custom PCBs.',
    'Outside of engineering I play chess and build things just to see if I can. I am currently open to remote backend and AI engineering roles.'
  ],
  education: {
    school: 'Federal University of Technology Minna',
    degree: 'B.Eng Electrical & Electronics Engineering',
    grade: 'Second Class Upper'
  }
};

export const projects: Project[] = [
  {
    slug: 'seo-content-ai',
    title: 'SEO Content AI',
    status: 'live',
    tagline: 'Parallel AI content generation platform -- I own the backend generation engine, billing infrastructure, and session persistence.',
    context: 'us agency // ai backend engineer // jan 2025 -- present',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Drizzle ORM', 'Stripe', 'SSE', 'Flux Dev'],
    sections: [
      {
        heading: 'the product',
        content: 'SEO Content AI is a platform that generates optimised articles at scale for agencies and content teams. Users configure article parameters -- keywords, tone, structure -- and the platform generates complete articles with AI, including images. The platform supports 9 content formats and is integrating into an AI Site Builder product.'
      },
      {
        heading: 'what i built',
        content: 'I rebuilt the core generation engine as a parallel orchestrator. The original system was serial -- one article at a time, blocking the user until each finished. I restructured it into a fair concurrency system that runs up to 40 articles simultaneously, with Server-Sent Events streaming real-time progress to the frontend. I also built the Stripe billing infrastructure from scratch: atomic subscription transactions, monthly plan allocations, and feature gating across bulk generation, WordPress exports, and whitelabel domain logic.'
      },
      {
        heading: 'impact',
        content: 'Bulk generation time dropped by roughly 90%. The billing system handles all plan management and gating with zero manual intervention. I also built a hybrid session persistence system combining sessionStorage with database checkpoints -- if a user closes their browser mid-generation, the task resumes automatically when they return.'
      }
    ]
  },
  {
    slug: 'enterprise-waste-ops',
    title: 'Enterprise Waste-Ops',
    status: 'nda',
    tagline: 'AWS serverless architecture replacing manual Excel workflows for a US environmental-services company.',
    context: 'us enterprise // cloud architect // ongoing',
    tech: ['AWS Lambda', 'S3', 'Cognito', 'RDS', 'Technical Writing', 'Cost Analysis'],
    sections: [
      {
        heading: 'the product',
        content: 'A data management platform for a US environmental services company that had run its entire operation on Excel spreadsheets for five years. The platform needed to handle waste tracking, compliance reporting, and operational workflows for roughly 100 users.'
      },
      {
        heading: 'what i built',
        content: 'I designed the complete AWS serverless architecture -- Lambda functions for business logic, S3 for document storage, Cognito for authentication, and RDS for structured data. I produced all client-facing technical deliverables: interactive architecture maps, Technical Briefs, and AWS/Azure cost calculators that were reviewed directly by the client IT Director and ESG team.'
      },
      {
        heading: 'impact',
        content: 'The architecture replaced a fragile, manual process with a scalable cloud system. The deliverables I produced were the primary materials used in executive review and vendor selection.'
      }
    ]
  },
  {
    slug: 'elonosia-ai',
    title: 'Elonosia AI',
    status: 'prototype',
    tagline: 'ML-based malaria detection -- I built the hardware prototype bridging the CNN model to clinical use.',
    context: 'ncair / nitda // ai & embedded systems // 2022',
    tech: ['ESP32', 'TensorFlow', 'Altium PCB Design', '3D Printing', 'Python', 'CNN'],
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
    title: 'rag-chatbot-api',
    description: 'Production RAG pipeline with Pinecone, FastAPI, Celery, Redis, S3.',
    url: 'https://github.com/muhsin9999/rag-chatbot-api'
  },
  {
    title: 'AttendanceAPI',
    description: 'Facial recognition attendance system with FastAPI and OpenCV.',
    url: 'https://github.com/muhsin9999/AttendanceAPI'
  }
];

export const skills: SkillCategory[] = [
  {
    category: 'core',
    skills: ['TypeScript', 'Python', 'Node.js', 'FastAPI']
  },
  {
    category: 'backend & data',
    skills: ['PostgreSQL', 'Drizzle ORM', 'REST APIs', 'Server-Sent Events']
  },
  {
    category: 'cloud & ai',
    skills: ['AWS Lambda', 'ECS / Fargate', 'RAG Pipelines', 'LangChain']
  },
  {
    category: 'tools',
    skills: ['Docker', 'Git', 'Linux', 'Cursor']
  }
];
