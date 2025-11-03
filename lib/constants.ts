export interface EventItem {
    _id: string;
    title: string;
    slug: string;
    description: string;
    overview: string;
    image: string;
    venue: string;
    location: string;
    date: string;
    time: string;
    mode: string;
    audience: string;
    agenda: string[];
    organizer: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}


const eventsAll = [
    {
        "title": "React Summit 2025",
        "description": "The largest React conference in the world, bringing together front-end developers to discuss the future of React and JavaScript.",
        "overview": "React Summit 2025 features workshops, live coding sessions, and talks from React core team members. Attendees learn about React Server Components, performance optimization, and real-world React architecture.",
        "image": "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=2340",
        "venue": "RAI Convention Center",
        "location": "Amsterdam, Netherlands",
        "date": "2025-06-12",
        "time": "09:00",
        "mode": "Hybrid (In-Person & Online)",
        "audience": "Frontend engineers, React developers, web architects",
        "agenda": [
            "09:00 AM - 09:45 AM | Opening Keynote: The Future of React",
            "10:00 AM - 11:15 AM | Deep Dive: React Server Components",
            "11:30 AM - 12:30 PM | Panel: State Management Wars",
            "12:30 PM - 01:30 PM | Lunch & Networking",
            "01:45 PM - 03:00 PM | Workshop: Performance in React 19",
            "03:15 PM - 04:00 PM | Closing Talk: React in 2030"
        ],
        "organizer": "GitNation organizes React Summit annually to bring together the global React community.",
        "tags": ["React", "JavaScript", "Frontend", "Web Development"]
    },
    {
        "title": "AWS re:Invent 2025",
        "description": "Amazon Web Services’ annual conference showcasing new cloud technologies, infrastructure, and enterprise tools.",
        "overview": "AWS re:Invent is the largest cloud computing event of the year. It includes product launches, training sessions, and architecture deep dives into AWS services like Lambda, EC2, and S3.",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2340",
        "venue": "The Venetian",
        "location": "Las Vegas, NV",
        "date": "2025-12-01",
        "time": "08:00",
        "mode": "In-Person",
        "audience": "Cloud architects, DevOps engineers, CTOs",
        "agenda": [
            "08:00 AM - 09:30 AM | Keynote: The Next Decade of Cloud",
            "09:45 AM - 11:00 AM | AWS Lambda Advanced Patterns",
            "11:15 AM - 12:30 PM | AI on AWS: SageMaker & Bedrock",
            "12:30 PM - 01:30 PM | Lunch",
            "01:30 PM - 03:00 PM | Workshop: Building Serverless Apps",
            "03:15 PM - 04:30 PM | Fireside Chat with AWS Leadership"
        ],
        "organizer": "Amazon Web Services (AWS)",
        "tags": ["Cloud", "AWS", "Serverless", "AI"]
    },
    {
        "title": "JSConf Asia 2025",
        "description": "A conference dedicated to JavaScript and the web, featuring talks on frameworks, performance, and web innovation.",
        "overview": "JSConf Asia gathers developers across the world to discuss JavaScript advancements, TypeScript adoption, and new standards for web performance.",
        "image": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2340",
        "venue": "Marina Bay Sands Expo",
        "location": "Singapore",
        "date": "2025-09-20",
        "time": "10:00",
        "mode": "Hybrid",
        "audience": "JavaScript developers, open-source contributors, web enthusiasts",
        "agenda": [
            "10:00 AM - 11:00 AM | Keynote: The Future of JavaScript",
            "11:15 AM - 12:15 PM | TypeScript Best Practices",
            "12:15 PM - 01:15 PM | Lunch Break",
            "01:30 PM - 02:45 PM | Building Scalable Node.js Apps",
            "03:00 PM - 04:30 PM | WebAssembly: The Next Frontier"
        ],
        "organizer": "JSConf Community",
        "tags": ["JavaScript", "TypeScript", "Web", "Node.js"]
    },
    {
        "title": "PyCon India 2025",
        "description": "India’s largest Python conference, bringing together developers, data scientists, and researchers.",
        "overview": "PyCon India 2025 offers talks, workshops, and networking sessions focused on Python’s ecosystem — from AI and ML to web frameworks like Django and FastAPI.",
        "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2340",
        "venue": "Bangalore International Exhibition Centre",
        "location": "Bengaluru, India",
        "date": "2025-09-06",
        "time": "09:30",
        "mode": "In-Person",
        "audience": "Python developers, data scientists, AI engineers",
        "agenda": [
            "09:30 AM - 10:30 AM | Opening Keynote: AI with Python",
            "10:45 AM - 12:00 PM | Workshop: FastAPI for Production",
            "12:00 PM - 01:00 PM | Lunch Break",
            "01:15 PM - 02:30 PM | Talk: Scaling Django Apps",
            "02:45 PM - 04:00 PM | Panel: Future of Python 4.0"
        ],
        "organizer": "Python Software Foundation India Chapter",
        "tags": ["Python", "AI", "Django", "FastAPI"]
    },
    {
        "title": "DevOps World 2025",
        "description": "A global conference for DevOps professionals focusing on CI/CD, automation, and modern infrastructure.",
        "overview": "DevOps World brings together engineers and SREs to explore continuous delivery, cloud-native pipelines, and infrastructure as code.",
        "image": "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=2340",
        "venue": "Boston Convention Center",
        "location": "Boston, MA",
        "date": "2025-08-15",
        "time": "08:45",
        "mode": "Hybrid",
        "audience": "DevOps engineers, SREs, software architects",
        "agenda": [
            "08:45 AM - 09:45 AM | Keynote: The DevOps Future",
            "10:00 AM - 11:15 AM | Kubernetes Deployment Patterns",
            "11:30 AM - 12:30 PM | CI/CD with Jenkins and GitHub Actions",
            "12:30 PM - 01:30 PM | Lunch",
            "01:45 PM - 03:00 PM | Workshop: Terraform for Cloud Infra",
            "03:15 PM - 04:15 PM | Panel: DevOps Culture & Automation"
        ],
        "organizer": "CloudBees & DevOps Community",
        "tags": ["DevOps", "CI/CD", "Kubernetes", "Automation"]
    },
    {
        "title": "Next.js Conf 2025",
        "description": "A conference dedicated to the React-based web framework Next.js and the future of the modern web.",
        "overview": "Next.js Conf 2025 focuses on server components, app router, and full-stack development using React and Vercel’s ecosystem.",
        "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2340",
        "venue": "Vercel HQ",
        "location": "San Francisco, CA",
        "date": "2025-10-05",
        "time": "09:00",
        "mode": "Online",
        "audience": "Full-stack developers, React engineers, web performance enthusiasts",
        "agenda": [
            "09:00 AM - 09:45 AM | Keynote: The Future of Next.js",
            "10:00 AM - 11:30 AM | Deep Dive: App Router & SSR",
            "11:30 AM - 12:30 PM | Networking Session",
            "01:00 PM - 02:30 PM | Workshop: Building with Server Actions",
            "02:45 PM - 03:30 PM | Panel: The Modern Web Stack"
        ],
        "organizer": "Vercel Inc.",
        "tags": ["Next.js", "React", "Web", "Full-stack"]
    },
    {
        "title": "Google I/O 2025",
        "description": "Google’s annual developer conference featuring announcements across Android, AI, Web, and Cloud technologies.",
        "overview": "Google I/O 2025 explores AI-powered applications, Flutter updates, and new APIs for developers to build smarter solutions.",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2340",
        "venue": "Shoreline Amphitheatre",
        "location": "Mountain View, CA",
        "date": "2025-05-10",
        "time": "09:00",
        "mode": "Online",
        "audience": "Developers, AI researchers, product managers",
        "agenda": [
            "09:00 AM - 10:00 AM | Keynote: AI for Everyone",
            "10:15 AM - 11:30 AM | Android 16 Deep Dive",
            "11:45 AM - 12:30 PM | Flutter 4.0 Launch",
            "01:30 PM - 02:45 PM | Workshop: Gemini API Integration"
        ],
        "organizer": "Google Developers",
        "tags": ["Android", "AI", "Flutter", "Cloud"]
    },
    {
        "title": "GitHub Universe 2025",
        "description": "GitHub’s flagship event for developers exploring open-source, collaboration, and AI-assisted coding.",
        "overview": "GitHub Universe 2025 dives into AI-powered coding with Copilot, GitHub Actions, and modern developer workflows.",
        "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2340",
        "venue": "Palace of Fine Arts",
        "location": "San Francisco, CA",
        "date": "2025-11-08",
        "time": "09:30",
        "mode": "Hybrid",
        "audience": "Developers, open-source maintainers, AI enthusiasts",
        "agenda": [
            "09:30 AM - 10:30 AM | Keynote: AI in Software Development",
            "10:45 AM - 12:00 PM | GitHub Copilot Deep Dive",
            "12:00 PM - 01:00 PM | Lunch",
            "01:15 PM - 02:30 PM | Workshop: Automating Workflows with Actions",
            "02:45 PM - 04:00 PM | Panel: The Future of Open Source"
        ],
        "organizer": "GitHub Inc.",
        "tags": ["GitHub", "Open Source", "AI", "Automation"]
    },
    {
        "title": "KubeCon + CloudNativeCon 2025",
        "description": "The premier Kubernetes and cloud-native community conference organized by CNCF.",
        "overview": "KubeCon brings together the brightest minds in cloud-native computing, discussing Kubernetes, observability, and microservices.",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2340",
        "venue": "RAI Amsterdam",
        "location": "Amsterdam, Netherlands",
        "date": "2025-05-20",
        "time": "09:00",
        "mode": "Hybrid",
        "audience": "Cloud-native developers, DevOps, system architects",
        "agenda": [
            "09:00 AM - 10:00 AM | Keynote: The State of Kubernetes",
            "10:15 AM - 11:30 AM | Observability in Cloud-Native Apps",
            "11:45 AM - 12:45 PM | Lunch",
            "01:00 PM - 02:15 PM | Workshop: Scaling with Helm and Istio",
            "02:30 PM - 04:00 PM | CNCF Project Demos"
        ],
        "organizer": "Cloud Native Computing Foundation (CNCF)",
        "tags": ["Kubernetes", "Cloud", "Microservices", "DevOps"]
    },
    {
        "title": "AI Dev Summit 2025",
        "description": "A developer-focused AI event exploring generative models, NLP, and machine learning frameworks.",
        "overview": "AI Dev Summit gathers engineers to discuss AI ethics, model deployment, and innovations in generative AI and LLMs.",
        "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2340",
        "venue": "Moscone West",
        "location": "San Francisco, CA",
        "date": "2025-07-10",
        "time": "09:15",
        "mode": "Hybrid",
        "audience": "AI engineers, data scientists, ML researchers",
        "agenda": [
            "09:15 AM - 10:00 AM | Keynote: Generative AI in Production",
            "10:15 AM - 11:30 AM | LLM Fine-tuning Workshop",
            "11:45 AM - 12:45 PM | Lunch",
            "01:00 PM - 02:30 PM | Talk: AI Infrastructure at Scale",
            "02:45 PM - 04:00 PM | Panel: Ethics of Generative AI"
        ],
        "organizer": "AI Developer Alliance",
        "tags": ["AI", "Machine Learning", "NLP", "Data Science"]
    }
]
