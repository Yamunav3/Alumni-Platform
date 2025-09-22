import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Spin } from "antd";
import StudentNavbar from "../StudentNavbar";
import HeroSection from "./HeroSection";
import MentorshipSection from "./MentorshipSection";
import InternshipSection from "./InternshipSection";
import WebinarSection from "./WebinarSection";
import TrainingSection from"./TrainingSection";
import FeedbackSection from "./FeedbackSection";
import { 
  Users, 
  Briefcase, 
  Video, 
  BookOpen, 
  MessageCircle
} from "lucide-react";

const StudentHome = () => {
  const [activeTab, setActiveTab] = useState("mentorship");
  const [loading, setLoading] = useState(false);

  // Enhanced mentor data with complete profiles
  const mentors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Google",
      expertise: ["Web Development", "React", "Node.js"],
      rating: 4.9,
      sessions: 150,
      image: "/placeholder.svg",
      price: "Free",
      availability: "Available",
      posts: 45,
      education: "MS Computer Science, Stanford University",
      skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "MongoDB", "GraphQL", "TypeScript"],
      workExperience: [
        {
          company: "Google",
          role: "Senior Software Engineer",
          duration: "2020 - Present",
          sector: "Technology"
        },
        {
          company: "Facebook",
          role: "Software Engineer",
          duration: "2018 - 2020",
          sector: "Social Media"
        },
        {
          company: "Airbnb",
          role: "Frontend Developer",
          duration: "2016 - 2018",
          sector: "Travel Technology"
        }
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Product Manager",
      company: "Microsoft",
      expertise: ["Product Strategy", "UI/UX", "Analytics"],
      rating: 4.8,
      sessions: 89,
      image: "/placeholder.svg",
      price: "$50/hour",
      availability: "Busy",
      posts: 32,
      education: "MBA from Wharton, BS Computer Engineering",
      skills: ["Product Management", "UI/UX Design", "Data Analytics", "Agile", "Scrum", "Figma", "SQL"],
      workExperience: [
        {
          company: "Microsoft",
          role: "Senior Product Manager",
          duration: "2019 - Present",
          sector: "Enterprise Software"
        },
        {
          company: "Uber",
          role: "Product Manager",
          duration: "2017 - 2019",
          sector: "Transportation Technology"
        }
      ]
    },
    {
      id: 3,
      name: "Emily Davis",
      title: "Data Scientist",
      company: "Netflix",
      expertise: ["Machine Learning", "Python", "Statistics"],
      rating: 4.9,
      sessions: 112,
      image: "/placeholder.svg",
      price: "Free",
      availability: "Available",
      posts: 28,
      education: "PhD in Data Science, MIT",
      skills: ["Python", "Machine Learning", "TensorFlow", "PyTorch", "R", "SQL", "Statistics", "Deep Learning"],
      workExperience: [
        {
          company: "Netflix",
          role: "Senior Data Scientist",
          duration: "2021 - Present",
          sector: "Entertainment Technology"
        },
        {
          company: "Tesla",
          role: "Machine Learning Engineer",
          duration: "2019 - 2021",
          sector: "Automotive Technology"
        }
      ]
    }
  ];

  // Enhanced internship data with complete details
  const internships = [
    {
      id: 1,
      title: "Software Engineering Intern",
      company: "Tesla",
      location: "Palo Alto, CA",
      duration: "3 months",
      stipend: "$3,000/month",
      skills: ["React", "Python", "Git"],
      deadline: "2024-02-15",
      applicants: 245,
      description: "Join Tesla's software engineering team to work on cutting-edge automotive technology. You'll contribute to developing software systems that power Tesla's autonomous driving features and vehicle management systems.",
      requirements: [
        "Currently pursuing a degree in Computer Science or related field",
        "Strong programming skills in Python or JavaScript",
        "Experience with React or similar frontend frameworks",
        "Understanding of version control systems (Git)",
        "Excellent problem-solving and analytical skills"
      ],
      responsibilities: [
        "Develop and maintain web applications using React and Python",
        "Collaborate with cross-functional teams to implement new features",
        "Write clean, efficient, and well-documented code",
        "Participate in code reviews and testing processes",
        "Contribute to the improvement of development workflows"
      ],
      benefits: [
        "Competitive monthly stipend",
        "Housing assistance available",
        "Mentorship from senior engineers",
        "Access to Tesla vehicles for testing",
        "Networking opportunities within the company"
      ],
      companySize: "50,000+ employees",
      industry: "Automotive Technology"
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "Spotify",
      location: "New York, NY",
      duration: "4 months",
      stipend: "$2,500/month",
      skills: ["Digital Marketing", "Analytics", "Content"],
      deadline: "2024-02-20",
      applicants: 189,
      description: "Drive music discovery and user engagement through innovative marketing campaigns. Work with Spotify's marketing team to develop strategies that connect artists with their audiences.",
      requirements: [
        "Marketing, Communications, or Business major",
        "Experience with social media marketing",
        "Strong analytical and creative thinking skills",
        "Proficiency in data analysis tools",
        "Excellent written and verbal communication"
      ],
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Analyze campaign performance and user engagement metrics",
        "Create content for social media platforms",
        "Collaborate with artists and music labels",
        "Support influencer marketing initiatives"
      ],
      benefits: [
        "Monthly stipend with performance bonuses",
        "Free Spotify Premium subscription",
        "Access to exclusive music events",
        "Professional development workshops",
        "Mentorship from marketing leaders"
      ],
      companySize: "10,000+ employees",
      industry: "Music Streaming"
    },
    {
      id: 3,
      title: "Design Intern",
      company: "Airbnb",
      location: "San Francisco, CA",
      duration: "6 months",
      stipend: "$4,000/month",
      skills: ["Figma", "UI/UX", "Prototyping"],
      deadline: "2024-03-01",
      applicants: 312,
      description: "Shape the future of travel experiences through thoughtful design. Join Airbnb's design team to create intuitive and beautiful user experiences that connect people around the world.",
      requirements: [
        "Design, HCI, or related field student",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Strong portfolio showcasing UI/UX design work",
        "Understanding of user-centered design principles",
        "Ability to create interactive prototypes"
      ],
      responsibilities: [
        "Design user interfaces for web and mobile applications",
        "Create wireframes, mockups, and interactive prototypes",
        "Conduct user research and usability testing",
        "Collaborate with product and engineering teams",
        "Contribute to Airbnb's design system"
      ],
      benefits: [
        "Highest stipend in the program",
        "Travel credits for Airbnb stays",
        "Design conference attendance",
        "One-on-one mentoring with design leaders",
        "Access to exclusive design tools and resources"
      ],
      companySize: "25,000+ employees",
      industry: "Travel Technology"
    }
  ];

  // Enhanced webinar data with complete details
  const webinars = [
    {
      id: 1,
      title: "Building Your Tech Career",
      speaker: "John Smith",
      company: "Amazon",
      date: "2024-01-25",
      time: "2:00 PM EST",
      attendees: 1250,
      price: "Free",
      duration: "1 hour",
      description: "Learn the essential strategies for building a successful tech career from someone who's been there. John will share insights on skill development, networking, and navigating career transitions in the tech industry.",
      agenda: [
        "Introduction to tech career paths and opportunities",
        "Essential skills every tech professional needs",
        "Building a strong professional network",
        "Strategies for career advancement",
        "Q&A session with live audience interaction"
      ],
      prerequisites: [
        "Basic understanding of the tech industry",
        "Interest in career development",
        "No specific technical skills required"
      ],
      benefits: [
        "Career roadmap template",
        "Networking strategies checklist",
        "Access to exclusive tech community",
        "Certificate of completion",
        "Recording available for 30 days"
      ],
      speakerBio: "John Smith is a Senior Principal Engineer at Amazon with 15+ years of experience in the tech industry. He has led teams at various companies including Google and Microsoft, and is passionate about mentoring the next generation of tech professionals.",
      level: "Beginner",
      category: "Career Development"
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      speaker: "Lisa Wong",
      company: "Facebook",
      date: "2024-01-30",
      time: "3:00 PM EST",
      attendees: 890,
      price: "$29",
      duration: "2 hours",
      description: "Deep dive into advanced React patterns and techniques used in production applications. Learn how to build scalable, maintainable React applications with modern patterns and best practices.",
      agenda: [
        "Compound Components Pattern",
        "Render Props and Higher-Order Components",
        "Custom Hooks for State Management",
        "Performance Optimization Techniques",
        "Testing Advanced React Components",
        "Hands-on coding session"
      ],
      prerequisites: [
        "Solid understanding of React fundamentals",
        "Experience with JavaScript ES6+",
        "Familiarity with React Hooks",
        "Basic knowledge of testing frameworks"
      ],
      benefits: [
        "Advanced React code examples",
        "Performance optimization checklist",
        "Testing templates and utilities",
        "Access to private GitHub repository",
        "Certificate of completion"
      ],
      speakerBio: "Lisa Wong is a Staff Software Engineer at Facebook (Meta) and a core contributor to the React ecosystem. She has been working with React since its early days and regularly speaks at tech conferences worldwide.",
      level: "Advanced",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      speaker: "David Miller",
      company: "Tesla",
      date: "2024-02-05",
      time: "1:00 PM EST",
      attendees: 567,
      price: "$49",
      duration: "3 hours",
      description: "Comprehensive introduction to data science covering statistical analysis, machine learning basics, and practical applications in real-world scenarios. Perfect for beginners looking to enter the field of data science.",
      agenda: [
        "Introduction to Data Science and its Applications",
        "Statistical Analysis and Data Visualization",
        "Machine Learning Algorithms Overview",
        "Python Libraries for Data Science",
        "Hands-on Project: Predictive Analytics",
        "Career Paths in Data Science"
      ],
      prerequisites: [
        "Basic programming knowledge (Python preferred)",
        "High school level mathematics",
        "Interest in data analysis and statistics",
        "No prior data science experience required"
      ],
      benefits: [
        "Complete Python data science starter kit",
        "Access to datasets and Jupyter notebooks",
        "Career roadmap for data scientists",
        "Monthly follow-up Q&A sessions",
        "LinkedIn endorsement from instructor"
      ],
      speakerBio: "David Miller is a Principal Data Scientist at Tesla, where he leads the team responsible for predictive analytics in manufacturing. He holds a PhD in Statistics and has published numerous papers on machine learning applications.",
      level: "Beginner",
      category: "Data Science"
    }
  ];

  // Enhanced training data with complete details
  const trainings = [
    {
      id: 1,
      title: "Full Stack Web Development",
      provider: "Tech Academy",
      duration: "12 weeks",
      level: "Beginner",
      price: "$599",
      rating: 4.8,
      students: 2340,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      description: "Master the complete web development stack from frontend to backend. Build real-world applications and deploy them to production. This comprehensive course covers everything you need to become a full-stack developer.",
      curriculum: [
        {
          module: "Frontend Fundamentals",
          topics: ["HTML5 semantic elements", "CSS3 and responsive design", "JavaScript ES6+ features", "DOM manipulation"],
          duration: "3 weeks"
        },
        {
          module: "React Development",
          topics: ["React components and JSX", "State management with hooks", "React Router", "Context API"],
          duration: "3 weeks"
        },
        {
          module: "Backend Development",
          topics: ["Node.js and Express.js", "RESTful API design", "Database integration", "Authentication and security"],
          duration: "3 weeks"
        },
        {
          module: "Full Stack Integration",
          topics: ["Connecting frontend and backend", "Deployment strategies", "Performance optimization", "Testing"],
          duration: "3 weeks"
        }
      ],
      instructor: "Sarah Johnson - Senior Software Engineer at Google",
      prerequisites: [
        "Basic computer literacy",
        "No programming experience required",
        "Commitment to 15-20 hours per week",
        "Access to a computer with internet connection"
      ],
      outcomes: [
        "Build responsive web applications from scratch",
        "Develop and deploy full-stack applications",
        "Master modern JavaScript and React development",
        "Create RESTful APIs with Node.js and Express",
        "Understand database design and management",
        "Deploy applications to cloud platforms"
      ],
      certificate: true,
      category: "Web Development"
    },
    {
      id: 2,
      title: "Machine Learning Bootcamp",
      provider: "AI Institute",
      duration: "8 weeks",
      level: "Intermediate",
      price: "$799",
      rating: 4.9,
      students: 1567,
      skills: ["Python", "TensorFlow", "Statistics", "Deep Learning"],
      description: "Intensive machine learning program covering supervised and unsupervised learning, deep learning, and practical applications. Work on real datasets and build ML models that solve business problems.",
      curriculum: [
        {
          module: "ML Foundations",
          topics: ["Statistics and probability", "Python for data science", "Data preprocessing", "Feature engineering"],
          duration: "2 weeks"
        },
        {
          module: "Supervised Learning",
          topics: ["Linear and logistic regression", "Decision trees and random forests", "Support vector machines", "Model evaluation"],
          duration: "2 weeks"
        },
        {
          module: "Unsupervised Learning",
          topics: ["Clustering algorithms", "Principal component analysis", "Association rules", "Anomaly detection"],
          duration: "2 weeks"
        },
        {
          module: "Deep Learning",
          topics: ["Neural networks", "Convolutional neural networks", "Recurrent neural networks", "TensorFlow and Keras"],
          duration: "2 weeks"
        }
      ],
      instructor: "Dr. Michael Chen - Principal Data Scientist at Tesla",
      prerequisites: [
        "Strong programming skills in Python",
        "Understanding of linear algebra and statistics",
        "Experience with data analysis libraries",
        "Familiarity with Jupyter notebooks"
      ],
      outcomes: [
        "Implement machine learning algorithms from scratch",
        "Build and deploy ML models using TensorFlow",
        "Perform exploratory data analysis and visualization",
        "Optimize model performance and handle overfitting",
        "Work with real-world datasets and business problems",
        "Present ML solutions to stakeholders"
      ],
      certificate: true,
      category: "Artificial Intelligence"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      provider: "Marketing Pro",
      duration: "6 weeks",
      level: "Beginner",
      price: "$399",
      rating: 4.7,
      students: 3421,
      skills: ["SEO", "Social Media", "Analytics", "Content Strategy"],
      description: "Comprehensive digital marketing course covering all major channels and strategies. Learn to create effective marketing campaigns that drive real business results across multiple platforms.",
      curriculum: [
        {
          module: "Marketing Fundamentals",
          topics: ["Marketing strategy basics", "Target audience identification", "Brand positioning", "Marketing funnel"],
          duration: "1 week"
        },
        {
          module: "Search Engine Optimization",
          topics: ["Keyword research", "On-page and off-page SEO", "Technical SEO", "Local SEO strategies"],
          duration: "1.5 weeks"
        },
        {
          module: "Social Media Marketing",
          topics: ["Platform-specific strategies", "Content creation and curation", "Community management", "Paid social advertising"],
          duration: "1.5 weeks"
        },
        {
          module: "Content Marketing & Analytics",
          topics: ["Content strategy development", "Email marketing", "Google Analytics", "Performance measurement"],
          duration: "2 weeks"
        }
      ],
      instructor: "Amanda Rodriguez - Head of Marketing at Spotify",
      prerequisites: [
        "Basic understanding of social media platforms",
        "No prior marketing experience required",
        "Access to various social media accounts",
        "Willingness to create and share content"
      ],
      outcomes: [
        "Develop comprehensive marketing strategies",
        "Create engaging content for multiple platforms",
        "Optimize websites for search engines",
        "Run effective social media advertising campaigns",
        "Analyze and interpret marketing metrics",
        "Build and nurture online communities"
      ],
      certificate: true,
      category: "Digital Marketing"
    }
  ];

  const handleTabChange = (value: string) => {
    setLoading(true);
    setActiveTab(value);
    
    // Simulate loading for smooth transitions
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <StudentNavbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-card/50 backdrop-blur-sm border border-border h-14">
            <TabsTrigger value="mentorship" className="text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-asthra">
              <Users className="h-4 w-4 mr-2" />
              Mentorship
            </TabsTrigger>
            <TabsTrigger value="internships" className="text-sm data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground transition-asthra">
              <Briefcase className="h-4 w-4 mr-2" />
              Internships
            </TabsTrigger>
            <TabsTrigger value="webinars" className="text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-asthra">
              <Video className="h-4 w-4 mr-2" />
              Webinars
            </TabsTrigger>
            <TabsTrigger value="training" className="text-sm data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground transition-asthra">
              <BookOpen className="h-4 w-4 mr-2" />
              Training
            </TabsTrigger>
            <TabsTrigger value="feedback" className="text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-asthra">
              <MessageCircle className="h-4 w-4 mr-2" />
              Feedback
            </TabsTrigger>
          </TabsList>

          {/* Tab Content with Loading */}
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex items-center justify-center">
                <Spin size="large" />
              </div>
            )}

            <TabsContent value="mentorship" className="space-y-6">
              <MentorshipSection mentors={mentors} />
            </TabsContent>

            <TabsContent value="internships" className="space-y-6">
              <InternshipSection internships={internships} />
            </TabsContent>

            <TabsContent value="webinars" className="space-y-6">
              <WebinarSection webinars={webinars} />
            </TabsContent>

            <TabsContent value="training" className="space-y-6">
              <TrainingSection trainings={trainings} />
            </TabsContent>

            <TabsContent value="feedback" className="space-y-6">
              <FeedbackSection />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentHome;