export const portfolioData = {
  personalInfo: {
    name: "Thisharu Dilhara",
    role: "Software Engineering Intern / Full Stack Developer",
    location: "Kurunegala, Sri Lanka",
    email: "thisharud@gmail.com",
    phone: "+94 772467590",
    github: "https://github.com/Thisharu-Dilhara",
    linkedin: "https://www.linkedin.com/in/Thisharu-Dulaksha",
    summary: "Results-oriented Full-Stack Software Engineering undergraduate with hands-on experience designing and developing RESTful APIs, secure authentication systems, and responsive React.js interfaces. Proficient in Java/Spring Boot back-end development and PostgreSQL/MongoDB database design. Experienced in building scalable, maintainable code using Agile methodologies."
  },
  education: [
    {
      id: 1,
      degree: "Bachelor of Computer Science (General), Undergraduate",
      institution: "University of Ruhuna",
      duration: "2022 \u2013 2026",
      location: "Sri Lanka",
      description: ""
    },
    {
      id: 2,
      degree: "Physical Science Stream, GCE Advanced Level Examination",
      institution: "Ibbagamuwa Central College",
      duration: "2021",
      location: "Kurunegala",
      description: "Results: B / B / B"
    }
  ],
  skills: {
    programming: ["Java", "C", "Laravel"],
    frontend: ["React.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    backend: ["Spring Boot", "Node.js", "Express.js", "Laravel"],
    security: ["JWT", "Spring Security", "Role-Based Access Control"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    cloudAndTools: ["AWS Fundamentals", "Git", "GitHub", "Trello", "VS Code", "Postman"],
    coreConcepts: ["OOP", "REST APIs", "Design Patterns", "Agile Methodology"]
  },
  // To add a new project, simply copy an existing object in this array and update its values.
  projects: [
    {
      id: 1,
      title: "FixMate \u2013 Service Marketplace Platform",
      type: "Full Stack / Final Year Group Project",
      status: "Completed",
      description: "A full-stack service marketplace platform that connects customers with verified service providers. The system includes customer registration, login, profile management, service booking workflows, OTP email verification, and transactional notifications.",
      features: [
        "Secure REST APIs using Spring Boot",
        "JWT authentication and role-based access control",
        "Customer registration, login, profile, and booking workflows",
        "Normalized PostgreSQL database schema",
        "OTP email verification for account activation",
        "React.js frontend integrated with backend APIs"
      ],
      techStack: ["Spring Boot", "Spring Security", "React.js", "PostgreSQL", "REST APIs", "JWT", "Git"],
      liveDemo: "#",
      github: "#"
    },
    // {
    //   id: 2,
    //   title: "Online Cosmetic Shop",
    //   type: "Role-Based E-Commerce System",
    //   status: "Ongoing",
    //   description: "A full-stack e-commerce application with Admin and Customer dashboards. The system supports product searching, filtering, cart management, checkout flow, REST APIs, JWT authentication, and role-based access.",
    //   features: [
    //     "Admin and Customer dashboards",
    //     "Product search and filtering",
    //     "Cart and checkout features",
    //     "REST APIs with Express.js and MongoDB",
    //     "JWT authentication and role-based access control"
    //   ],
    //   techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Git"],
    //   liveDemo: "#",
    //   github: "#"
    // }
  ],
  certificates: [
    {
      id: 1,
      title: "Spring Framework 6 & Spring Boot 3",
      issuer: "Udemy",
      date: ""
    }
  ],
  leadership: [
    {
      id: 1,
      role: "Marketing Team Leader",
      organization: "Rush Coder 3.0 Hackathon",
      duration: "",
      description: "Coordinated marketing efforts and team operations for a faculty-level hackathon event."
    },
    {
      id: 2,
      role: "Captain of Science Faculty Volleyball Team",
      organization: "University of Ruhuna",
      duration: "2025 \u2013 2026",
      description: "Led team strategy, coordination, and training sessions. Represented the university volleyball team and secured 2nd Runner-Up at the 2024 Inter-University Championship."
    }
  ]
};
