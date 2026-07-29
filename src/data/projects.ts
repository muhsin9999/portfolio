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
  status: 'live' | 'nda' | 'prototype' | 'architecture' | string;
  tagline: string;
  context: string;
  tech: string[];
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
  title: 'AI & Backend Engineer',
  location: 'Abuja, Nigeria',
  email: 'onoruoiza15@gmail.com',
  github: 'https://github.com/muhsin9999',
  linkedin: 'https://www.linkedin.com/in/mustapha-muhsin',
  bio: 'I build production AI backend systems, agentic loop architectures, and cloud infrastructure -- from multi-agent orchestrations to serverless enterprise platforms and generation engines.',
  longBio: [
    'I am an AI and backend engineer specializing in production agentic systems, cloud infrastructure, and backend architecture for international clients. At White Label Resell and SEO Content AI, I build multi-agent loop orchestrators, parallel generation engines, Stripe billing systems, and AWS cloud platforms that ship to real users.',
    'My work spans the full engineering stack -- designing governed build loops with agent swarms and Playwright verification, engineering 40-article parallel generation pipelines streaming over SSE, and building serverless AWS infrastructure (Lambda, ECS, S3, Cognito, RDS) replacing legacy enterprise workflows.',
    'I trained as an electrical and electronics engineer at Federal University of Technology Minna. That background shaped my systems-first engineering approach -- from microcontrollers and Altium PCB design at NCAIR to distributed cloud systems and LLM agent loops.',
    'Outside of engineering I play chess and build things just to see if I can. I am currently open to remote backend and AI engineering roles.'
  ],
  education: {
    school: 'Federal University of Technology Minna',
    degree: 'B.Eng Electrical & Electronics Engineering'
  }
};

export const projects: Project[] = [
  {
    slug: 'governed-agent-swarm',
    title: 'Governed Agent Swarm',
    status: 'architecture',
    tagline: 'Governed multi-agent build loop combining Pi harness orchestration, parallel DeepSeek codebase analysis, and Steel Playwright E2E proofing.',
    context: 'system architecture // ai agent worker // 2026',
    tech: ['TypeScript', 'Node.js', 'OpenRouter', 'DeepSeek R1/Flash', 'Steel.dev', 'Playwright', 'Supabase', 'Railway'],
    sections: [
      {
        heading: 'the product',
        content: 'An autonomous agentic build system designed to scan, analyze, and execute feature plans against codebases with guaranteed safety rails. The system uses a multi-agent harness to prevent hallucinated code or breaking changes from entering production branches.'
      },
      {
        heading: 'what i built',
        content: 'I architected a 5-phase governed build loop: a read-only Pi agent swarm that fans out across the codebase to collect evidence packets, a reconciliation engine that clusters findings and scores confidence, a write-enabled implementer session that generates code against isolated branches, and an automated Steel.dev cloud Playwright judge session that runs visual and E2E verification before automated GitHub PR creation.'
      },
      {
        heading: 'impact',
        content: 'The architecture enforces strict operational rules -- confidence scores under 0.70 automatically halt execution, and code is never merged without passing automated Playwright browser proof. Structured event logging traces every agent decision to Supabase for complete observability.'
      }
    ]
  },
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
    tech: ['AWS Lambda', 'S3', 'Cognito', 'RDS', 'DynamoDB', 'Technical Writing', 'Cost Analysis'],
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
    title: 'rag-chatbot-api',
    description: 'Production RAG pipeline with Pinecone, FastAPI, Celery, Redis, S3.',
    url: 'https://github.com/muhsin9999/rag-chatbot-api'
  },
  {
    title: 'AttendanceAPI',
    description: 'Facial recognition attendance system with FastAPI and OpenCV.',
    url: 'https://github.com/muhsin9999/AttendanceAPI'
  },
  {
    title: 'hooktrace',
    description: 'Webhook capture, inspection, and replay debugging tool.'
  }
];

export const skills: SkillCategory[] = [
  {
    category: 'core',
    skills: ['TypeScript', 'Python', 'Node.js', 'FastAPI', 'C++']
  },
  {
    category: 'backend & data',
    skills: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Drizzle ORM', 'SQLAlchemy', 'RESTful APIs', 'WebSockets', 'Celery']
  },
  {
    category: 'cloud & ai',
    skills: ['AWS (Lambda, ECS, Fargate, EC2, S3, Cognito, Bedrock)', 'Agentic Loops & Harness Engineering', 'Multi-Agent Swarm Orchestration', 'RAG Pipelines (Pinecone / Vector DBs)', 'LangChain', 'LangGraph', 'Tool Calling']
  },
  {
    category: 'tools',
    skills: ['Docker', 'Git', 'Cursor', 'Claude Code', 'GitHub Actions', 'Railway', 'AWS CLI']
  }
];
