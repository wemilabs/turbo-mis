interface JobDescription {
  id: string
  description: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
}

export const jobDescriptions: Record<string, JobDescription> = {
  "software-engineer": {
    id: "software-engineer",
    description:
      "Join our engineering team to build innovative solutions for educational institutions. You'll work on challenging problems and contribute to our core platform development.",
    requirements: [
      "3+ years of experience in software development",
      "Strong knowledge of TypeScript, React, and Node.js",
      "Experience with cloud platforms (AWS/GCP/Azure)",
      "Understanding of software design patterns and principles",
      "Excellent problem-solving skills",
    ],
    responsibilities: [
      "Develop and maintain core platform features",
      "Write clean, maintainable, and efficient code",
      "Collaborate with cross-functional teams",
      "Participate in code reviews and technical discussions",
      "Mentor junior developers",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first work environment",
      "Health insurance coverage",
      "Professional development budget",
      "Flexible working hours",
    ],
  },
  "frontend-developer": {
    id: "frontend-developer",
    description:
      "Create beautiful and intuitive user interfaces for our education platform. You'll work closely with designers and backend developers to deliver exceptional user experiences.",
    requirements: [
      "2+ years of frontend development experience",
      "Expertise in React and TypeScript",
      "Strong understanding of modern CSS and responsive design",
      "Experience with state management solutions",
      "Eye for design and attention to detail",
    ],
    responsibilities: [
      "Build responsive and accessible user interfaces",
      "Optimize application performance",
      "Implement UI/UX designs",
      "Write unit tests for components",
      "Contribute to our design system",
    ],
    benefits: [
      "Competitive compensation",
      "Remote work options",
      "Health and dental coverage",
      "Learning and development allowance",
      "Regular team events",
    ],
  },
  "backend-developer": {
    id: "backend-developer",
    description:
      "Design and implement scalable backend services for our growing platform. You'll work on complex data models and APIs that power educational experiences.",
    requirements: [
      "3+ years of backend development experience",
      "Strong Node.js and TypeScript skills",
      "Experience with PostgreSQL and ORMs",
      "Knowledge of API design and microservices",
      "Understanding of security best practices",
    ],
    responsibilities: [
      "Design and implement APIs",
      "Optimize database performance",
      "Ensure system security",
      "Write technical documentation",
      "Support and maintain existing services",
    ],
    benefits: [
      "Competitive salary",
      "Stock options",
      "Health insurance",
      "Remote work flexibility",
      "Professional growth opportunities",
    ],
  },
}
