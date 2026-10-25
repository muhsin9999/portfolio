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
  workType?: 'professional' | 'independent' | 'earlier';
  featured?: boolean;
  demoUrl?: string;
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
  bio: 'I build full-stack products, backend systems, and AI workflows. My professional work spans content generation, billing, client-facing tools, and AWS architecture; I also build independent products.',
  longBio: [
    'I am a full-stack engineer who enjoys taking a product from interface and API design through data modelling, integration, and deployment. At White Label Resell, my work has included client-facing workflow tools, AI content generation, subscription billing, AWS architecture, and automation.',
    'I work across React and Next.js interfaces, TypeScript and Python services, PostgreSQL-backed applications, and cloud infrastructure. My independent projects explore reliable agent workflows, payment integrations, and ways to test AI behavior beyond the happy path.',
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
    slug: 'content-generation-platform',
    title: 'AI Content Generation Platform',
    status: 'professional work',
    workType: 'professional',
    tagline: 'Built concurrent content-generation, billing, and recovery workflows for a commercial AI product.',
    context: 'white label resell // backend & product engineering',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Stripe', 'Server-Sent Events'],
    sections: [
      {
        heading: 'what i worked on',
        content: 'I contributed substantial backend engineering to a commercial AI content product, focusing on batch generation, subscription billing, and recovery when a browser session is interrupted.'
      },
      {
        heading: 'what i built',
        content: 'I redesigned batch generation as concurrent jobs with progress updates to the interface. I also implemented subscription and credit billing flows, feature access checks, and checkpoints that let users return to interrupted work.'
      },
      {
        heading: 'result',
        content: 'The changes made batch work faster, reduced the chance of losing progress after an interruption, and supported routine billing without manual handling.'
      },
      {
        heading: 'project access',
        content: 'This is professional work. The source code, internal documentation, and customer information are not public.'
      }
    ]
  },
  {
    slug: 'client-request-workspace',
    title: 'Enterprise Client Ticketing System',
    status: 'confidential engagement',
    workType: 'professional',
    tagline: 'A client-facing request portal and internal delivery workspace for a confidential engagement.',
    context: 'white label resell // full-stack engineering',
    tech: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Authentication', 'Playwright'],
    sections: [
      {
        heading: 'the need',
        content: 'For a confidential engagement, I built a place for stakeholders to raise requests, follow progress, and keep discussions connected to the work.'
      },
      {
        heading: 'what i built',
        content: 'I built both client and internal views in a Next.js application, with request intake, status tracking, comments, attachments, assignments, and reusable interface components.'
      },
      {
        heading: 'engineering',
        content: 'I implemented role-aware access, PostgreSQL-backed data models, and workflow rules, then added unit and browser tests for important user paths.'
      },
      {
        heading: 'project access',
        content: 'The client is unnamed. The workspace, source code, client data, and internal materials are private.'
      }
    ]
  },
  {
    slug: 'enterprise-operations-architecture',
    title: 'Enterprise Operations Platform Architecture',
    status: 'confidential engagement',
    workType: 'professional',
    tagline: 'Designed an AWS proof of concept and technical decision materials for an operations platform.',
    context: 'white label resell // AWS systems architecture',
    tech: ['AWS', 'Serverless Architecture', 'API Design', 'Data Modelling', 'Cost Analysis'],
    sections: [
      {
        heading: 'the need',
        content: 'A confidential client wanted to replace manual operational workflows with a role-based application. I worked on the architecture and proof of concept rather than claiming delivery of the full platform.'
      },
      {
        heading: 'my contribution',
        content: 'I mapped the application services, APIs, access model, and data flows on AWS, then prepared architecture and cost comparisons to support technical decisions.'
      },
      {
        heading: 'scope',
        content: 'This was architecture and proof-of-concept work. The client, its data, and the decision materials remain private.'
      }
    ]
  },
  {
    slug: 'governed-agent-workflow',
    title: 'Governed Agent Workflow',
    status: 'system architecture',
    workType: 'professional',
    tagline: 'Designed a staged agent workflow with evidence gathering, confidence checks, isolated implementation, and browser verification.',
    context: 'white label resell // AI systems architecture',
    tech: ['TypeScript', 'Node.js', 'AI Agents', 'Playwright', 'Git'],
    sections: [
      {
        heading: 'the idea',
        content: 'AI-generated code needs more than a prompt and a final answer. I designed a governed build workflow that separates read-only codebase investigation from implementation and verification.'
      },
      {
        heading: 'architecture',
        content: 'The design separates read-only investigation, evidence review, isolated implementation, and browser verification. It gives reviewers a clearer path from a proposed change to the checks used to evaluate it.'
      },
      {
        heading: 'scope',
        content: 'This describes my architecture work and proof-of-concept design; it is not a claim that an autonomous production system was fully deployed.'
      }
    ]
  },
  {
    slug: 'lead-attribution-automation',
    title: 'Lead Attribution Automation',
    status: 'professional work',
    workType: 'professional',
    tagline: 'Replaced a paid lead-capture tool with a custom intake, attribution, and reporting workflow.',
    context: 'white label resell // integration & automation',
    tech: ['JavaScript', 'Webhooks', 'Analytics Integration', 'Scheduled Reporting'],
    sections: [
      {
        heading: 'what i built',
        content: 'I built an automation that receives form submissions, records traffic attribution, syncs lead data to reporting tools, and produces scheduled summaries.'
      },
      {
        heading: 'result',
        content: 'The workflow reduced dependence on a paid tool and the manual work needed to understand where incoming leads came from.'
      },
      {
        heading: 'project access',
        content: 'The integration and business data are private; this summary describes only the work I performed.'
      }
    ]
  },
  {
    slug: 'cleared',
    title: 'Cleared',
    status: 'independent project',
    workType: 'independent',
    tagline: 'An AI-assisted PayPal dispute workflow built around evidence, verifiable claims, and human approval.',
    context: 'full stack // AI agents & evaluation',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'PayPal Sandbox', 'OpenAI', 'Vitest', 'Playwright'],
    demoUrl: 'https://cleared-web.onrender.com/',
    sections: [
      {
        heading: 'the problem',
        content: 'A seller facing a payment dispute needs to find the original agreement, delivery records, and customer messages quickly. I built Cleared as an independent sandbox project to make that evidence easier to collect, inspect, and present.'
      },
      {
        heading: 'what i built',
        content: 'The application keeps a sale and its supporting files together. When a dispute arrives, a read-only agent investigates the case and drafts a reply with exhibit references. A claim checker verifies those references and facts against the evidence. The seller sees the draft and approves it before anything is submitted to PayPal.'
      },
      {
        heading: 'how i tested it',
        content: 'I built a 13-scenario model evaluation suite with repeated runs against strong and weak evidence, prompt injection, and failing tools. Unit and integration tests cover claim checking, webhook verification, evidence handling, and ambiguous PayPal responses; browser tests cover the user journey.'
      },
      {
        heading: 'scope',
        content: 'The public demo uses PayPal Sandbox and fictional participants, so no real money moves. The codebase is independently owned and currently private.'
      }
    ]
  },
  {
    slug: 'lifeline',
    title: 'Lifeline',
    status: 'independent project',
    workType: 'independent',
    tagline: 'A donation recovery agent that diagnoses failed recurring gifts and asks a person to approve every fix.',
    context: 'full stack // payment reliability & AI',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'PayPal Sandbox', 'OpenAI', 'Webhooks', 'Vitest'],
    demoUrl: 'https://lifeline-giving.vercel.app/',
    sections: [
      {
        heading: 'the problem',
        content: 'A small nonprofit can miss a failed recurring donation or struggle to understand what happened. I built Lifeline around a fictional food bank to show how payment events, agent assistance, and staff decisions can work together.'
      },
      {
        heading: 'what i built',
        content: 'Signature-verified PayPal webhooks open a rescue when a sandbox gift fails. A read-only agent checks the subscription and payment history, then explains the issue and suggests available actions. A person chooses and approves any payment change or donor note.'
      },
      {
        heading: 'reliability',
        content: 'The action path claims each write before calling PayPal to prevent duplicate work. When a response is lost, it reads PayPal state again before reporting the outcome. Tests exercise refusals, timeouts, second clicks, and other failure paths with a fake PayPal response layer.'
      },
      {
        heading: 'scope',
        content: 'The demo uses fictional donors and PayPal Sandbox. It does not move real money. The codebase is independently owned and currently private.'
      }
    ]
  },
  {
    slug: 'spoilclock',
    title: 'Spoilclock',
    status: 'hackathon prototype',
    workType: 'independent',
    tagline: 'A responsive marketplace prototype for redirecting rejected produce before it spoils.',
    context: 'full stack // AI & commerce',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'PayPal Sandbox', 'AI agents'],
    demoUrl: 'https://spoilclock-app.vercel.app/',
    sections: [
      {
        heading: 'the idea',
        content: 'Spoilclock explores how rejected produce could be offered to another buyer while it is still usable. I built it as an independent PayPal hackathon prototype.'
      },
      {
        heading: 'what i built',
        content: 'I built the responsive application, backend workflow, and database-backed listing flow. An AI buyer-agent negotiation helps match produce with a new buyer, while PayPal Sandbox powers the demo payment path and webhooks update its status.'
      },
      {
        heading: 'scope',
        content: 'The demo uses fictional participants and sandbox payments. The repository is private while the hackathon submission is being prepared.'
      }
    ]
  },
  {
    slug: 'rag-chatbot-api',
    title: 'RAG Chatbot API',
    status: 'public code',
    workType: 'independent',
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
    status: 'public code',
    workType: 'earlier',
    featured: false,
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
    workType: 'earlier',
    featured: false,
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

export const openSourceContribution = {
  title: 'Open Design',
  description: 'Merged an upstream fix for obsolete Gemini model defaults across the web app and daemon, with regression tests for the affected paths.',
  url: 'https://github.com/nexu-io/open-design/pull/3821',
  label: 'merged pull request #3821'
};

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
