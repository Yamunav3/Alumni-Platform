// Data for the Staff Portal
export const students = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@student.edu",
    studentId: "CS001",
    major: "Computer Science",
    year: "Final Year",
    gpa: 3.8,
    skills: ["React", "Python", "Machine Learning", "JavaScript"],
    interests: ["AI/ML", "Web Development", "Data Science"],
    portfolio: "https://alice-portfolio.com",
    resume: "alice_resume.pdf",
    status: "Seeking Internship",
    projects: [
      { name: "E-commerce Platform", tech: "React, Node.js", description: "Full-stack web application" },
      { name: "ML Prediction Model", tech: "Python, TensorFlow", description: "Stock price prediction" }
    ],
    mentorshipStatus: "Available",
    lastActive: "2 hours ago",
    eventsParticipated: [
      { name: "Tech Conference 2024", date: "Oct 15, 2024", role: "Participant" },
      { name: "AI Hackathon", date: "Sep 22, 2024", role: "Team Lead", achievement: "2nd Place" },
      { name: "Career Fair", date: "Aug 10, 2024", role: "Participant" }
    ],
    strengths: ["Problem Solving", "Team Leadership", "Quick Learning", "Communication"],
    weaknesses: ["Public Speaking", "Time Management"],
    achievements: [
      "Dean's List - Fall 2023",
      "Best Project Award - Database Course",
      "Scholarship Recipient 2023-2024"
    ],
    extracurriculars: ["Programming Club President", "Volunteer at Local Coding Bootcamp"],
    languages: ["English (Native)", "Spanish (Conversational)", "Python", "JavaScript"],
    certificates: ["AWS Cloud Practitioner", "React Developer Certification"]
  },
  {
    id: 2,
    name: "Bob Chen",
    email: "bob.chen@student.edu",
    studentId: "EE002",
    major: "Electrical Engineering",
    year: "3rd Year",
    gpa: 3.6,
    skills: ["C++", "MATLAB", "Circuit Design", "Embedded Systems"],
    interests: ["IoT", "Robotics", "Hardware Design"],
    portfolio: "https://bob-projects.com",
    resume: "bob_resume.pdf",
    status: "Open to Work",
    projects: [
      { name: "Smart Home System", tech: "Arduino, IoT", description: "Automated home control" },
      { name: "Robot Navigation", tech: "C++, Sensors", description: "Autonomous navigation system" }
    ],
    mentorshipStatus: "In Mentorship",
    lastActive: "1 day ago",
    eventsParticipated: [
      { name: "Engineering Expo", date: "Nov 5, 2024", role: "Presenter" },
      { name: "Robotics Competition", date: "Oct 12, 2024", role: "Team Member", achievement: "3rd Place" }
    ],
    strengths: ["Technical Skills", "Attention to Detail", "Analytical Thinking"],
    weaknesses: ["Networking", "Presentation Skills"],
    achievements: ["IEEE Student Member", "Circuit Design Competition Winner"],
    extracurriculars: ["Robotics Club", "IEEE Student Branch"],
    languages: ["English (Fluent)", "Mandarin (Native)", "C++", "MATLAB"],
    certificates: ["Arduino Certification", "MATLAB Fundamentals"]
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol.davis@student.edu",
    studentId: "BM003",
    major: "Business Management",
    year: "2nd Year", 
    gpa: 3.9,
    skills: ["Business Analysis", "Project Management", "Marketing", "Finance"],
    interests: ["Consulting", "Marketing", "Entrepreneurship"],
    portfolio: "https://carol-business.com",
    resume: "carol_resume.pdf",
    status: "Seeking Mentorship",
    projects: [
      { name: "Market Research Study", tech: "Analytics, Excel", description: "Consumer behavior analysis" },
      { name: "Startup Business Plan", tech: "Financial Modeling", description: "Tech startup proposal" }
    ],
    mentorshipStatus: "Available",
    lastActive: "5 hours ago",
    eventsParticipated: [
      { name: "Business Case Competition", date: "Nov 20, 2024", role: "Team Lead", achievement: "1st Place" },
      { name: "Marketing Summit", date: "Oct 8, 2024", role: "Participant" },
      { name: "Entrepreneurship Workshop", date: "Sep 15, 2024", role: "Participant" }
    ],
    strengths: ["Strategic Thinking", "Leadership", "Communication", "Data Analysis"],
    weaknesses: ["Technical Skills", "Risk Taking"],
    achievements: ["Business Honor Society", "Marketing Case Study Winner", "Student Government Representative"],
    extracurriculars: ["Business Club Vice President", "Model UN"],
    languages: ["English (Native)", "French (Intermediate)"],
    certificates: ["Google Analytics", "Project Management Fundamentals"]
  }
];

export const opportunities = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechCorp Inc.",
    alumniContact: "Michael Zhang (2018)",
    alumniEmail: "m.zhang@techcorp.com",
    description: "Summer internship program for computer science students",
    requirements: ["React", "Node.js", "Git", "Team player"],
    location: "San Francisco, CA",
    type: "Internship",
    duration: "3 months",
    stipend: "$2000/month",
    deadline: "Jan 15, 2025",
    status: "Open",
    applicants: 12,
    matchedStudents: ["Alice Johnson", "Bob Chen"],
    postedDate: "Dec 1, 2024",
    fullDescription: "Join our dynamic team for a comprehensive summer internship experience. You'll work on real projects, collaborate with senior engineers, and gain hands-on experience with cutting-edge technologies. The program includes mentorship, training sessions, and networking opportunities.",
    responsibilities: [
      "Develop and maintain web applications using React and Node.js",
      "Collaborate with cross-functional teams to implement new features",
      "Participate in code reviews and team meetings",
      "Contribute to documentation and testing efforts"
    ],
    benefits: [
      "Competitive monthly stipend",
      "Mentorship from senior engineers",
      "Professional development workshops",
      "Networking events with industry professionals",
      "Potential for full-time offer upon graduation"
    ],
    applicationProcess: "Submit resume and portfolio through our online portal. Selected candidates will participate in technical interviews."
  },
  {
    id: 2,
    title: "Marketing Mentorship Program",
    company: "Global Marketing Solutions",
    alumniContact: "Sarah Williams (2017)",
    alumniEmail: "s.williams@globalmkt.com",
    description: "One-on-one mentorship for business students interested in marketing",
    requirements: ["Interest in marketing", "Communication skills", "Analytical thinking"],
    location: "Remote",
    type: "Mentorship",
    duration: "6 months",
    stipend: "Unpaid",
    deadline: "Dec 31, 2024",
    status: "Open",
    applicants: 8,
    matchedStudents: ["Carol Davis"],
    postedDate: "Nov 28, 2024",
    fullDescription: "A comprehensive mentorship program designed to provide business students with real-world marketing experience and industry insights.",
    responsibilities: [
      "Work closely with an experienced marketing professional",
      "Develop marketing strategies for client projects",
      "Attend weekly one-on-one mentoring sessions",
      "Complete practical marketing assignments"
    ],
    benefits: [
      "Personalized career guidance",
      "Industry network access",
      "Real project experience",
      "Professional reference",
      "Certificate of completion"
    ],
    applicationProcess: "Submit application essay explaining your interest in marketing and career goals."
  },
  {
    id: 3,
    title: "Data Science Fellowship",
    company: "DataTech Analytics",
    alumniContact: "David Kim (2019)",
    alumniEmail: "d.kim@datatech.com",
    description: "Full-time fellowship program with project-based learning",
    requirements: ["Python", "Machine Learning", "Statistics", "Research experience"],
    location: "Austin, TX",
    type: "Fellowship",
    duration: "12 months",
    stipend: "$3500/month",
    deadline: "Jan 30, 2025",
    status: "Open",
    applicants: 6,
    matchedStudents: ["Alice Johnson"],
    postedDate: "Dec 5, 2024",
    fullDescription: "An intensive 12-month fellowship program focusing on advanced data science applications in business contexts.",
    responsibilities: [
      "Lead data science projects from conception to deployment",
      "Collaborate with clients to understand business requirements",
      "Develop machine learning models and analytics solutions",
      "Present findings to stakeholders"
    ],
    benefits: [
      "Competitive fellowship stipend",
      "Advanced training in data science tools",
      "Client interaction experience",
      "Publication opportunities",
      "Strong alumni network access"
    ],
    applicationProcess: "Submit portfolio of data science projects, transcripts, and complete technical assessment."
  }
];

export const activities = [
  {
    id: 1,
    staff: "Dr. John Smith",
    action: "Created new course material",
    target: "Advanced Algorithms",
    timestamp: "2 hours ago",
    type: "content"
  },
  {
    id: 2,
    staff: "Prof. Lisa Davis",
    action: "Moderated forum discussion",
    target: "Career Guidance Thread",
    timestamp: "4 hours ago",
    type: "moderation"
  },
  {
    id: 3,
    staff: "Dr. Mike Johnson",
    action: "Approved student registration",
    target: "Alumni Network",
    timestamp: "6 hours ago",
    type: "approval"
  },
  {
    id: 4,
    staff: "Prof. Sarah Chen",
    action: "Updated course curriculum",
    target: "Data Science Program",
    timestamp: "1 day ago",
    type: "content"
  }
];

export const feedbackQueue = [
  {
    id: 1,
    type: "Alumni Feedback",
    author: "John Doe (2020)",
    subject: "Suggestion for networking events",
    content: "I think we should have more industry-specific networking events...",
    sentiment: "positive",
    priority: "medium",
    submittedDate: "Dec 11, 2024",
    status: "pending",
    fullContent: "I think we should have more industry-specific networking events. As a software engineer who graduated in 2020, I've found that general networking events are helpful, but industry-specific ones would be much more valuable. We could organize separate events for tech, finance, healthcare, etc. This would allow for more meaningful connections and relevant discussions. I'd be happy to help organize tech-focused events and can reach out to my professional network to invite guest speakers.",
    authorEmail: "john.doe@email.com"
  },
  {
    id: 2,
    type: "Student Feedback",
    author: "Jane Smith",
    subject: "Course content outdated",
    content: "The web development course materials need updating...",
    sentiment: "negative",
    priority: "high",
    submittedDate: "Dec 10, 2024",
    status: "in_progress",
    fullContent: "The web development course materials need updating. Many of the frameworks and tools being taught are outdated or deprecated. For example, we're still learning jQuery when most modern applications use React, Vue, or Angular. The JavaScript modules are teaching ES5 syntax when ES6+ has been standard for years. I suggest updating the curriculum to include modern frameworks, current best practices, and contemporary development tools like Git, npm, and modern bundlers.",
    authorEmail: "jane.smith@student.edu"
  },
  {
    id: 3,
    type: "General Feedback",
    author: "Anonymous",
    subject: "Website usability",
    content: "The alumni portal is very user-friendly and helpful...",
    sentiment: "positive",
    priority: "low",
    submittedDate: "Dec 9, 2024",
    status: "resolved",
    fullContent: "The alumni portal is very user-friendly and helpful. I appreciate the clean design and intuitive navigation. The job board feature is particularly useful, and I've already found several interesting opportunities. The ability to connect with other alumni in my field has been invaluable for networking. One small suggestion would be to add a mobile app for easier access on the go, but overall, excellent work on this platform!",
    authorEmail: "anonymous@email.com"
  }
];

export const staffMembers = [
  {
    id: 1,
    name: "Dr. Robert Thompson",
    email: "r.thompson@university.edu",
    department: "Engineering",
    position: "Department Head",
    joinDate: "Jan 2020",
    courses: 3,
    students: 150,
    status: "active",
    lastActive: "Online now"
  },
  {
    id: 2,
    name: "Prof. Jennifer Liu",
    email: "j.liu@university.edu",
    department: "Business",
    position: "Professor",
    joinDate: "Mar 2019",
    courses: 2,
    students: 120,
    status: "active",
    lastActive: "2 hours ago"
  },
  {
    id: 3,
    name: "Dr. Marcus Williams",
    email: "m.williams@university.edu",
    department: "Arts & Sciences",
    position: "Associate Professor",
    joinDate: "Sep 2021",
    courses: 4,
    students: 200,
    status: "inactive",
    lastActive: "1 week ago"
  }
];