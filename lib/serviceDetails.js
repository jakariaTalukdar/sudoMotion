export const serviceDetails = [
  {
    serviceId: 9, // Web Application Development
    technology: [
      "Next.js 14",
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB/PostgreSQL",
      "GraphQL/REST APIs",
      "TypeScript",
      "Tailwind CSS"
    ],
    description: "Our web application development service focuses on building robust, scalable, and high-performance applications tailored to your business needs. We follow industry best practices and agile methodologies to deliver exceptional results.",
    clientFeedback: [
      {
        name: "Sarah Johnson",
        role: "CTO at TechNova",
        comment: "The web application developed by SudoMotion transformed our business operations. The team's attention to detail and technical expertise was impressive.",
        rating: 5
      },
      {
        name: "Michael Chen",
        role: "Product Manager at InnovateX",
        comment: "We've seen a 40% increase in user engagement since launching our new web app. The SudoMotion team delivered beyond our expectations.",
        rating: 5
      }
    ],
    faq: [
      {
        question: "What's the typical timeline for a web application project?",
        answer: "The timeline varies based on complexity, but most projects take between 3-6 months from concept to launch. We'll provide a detailed timeline after understanding your specific requirements."
      },
      {
        question: "Do you provide ongoing maintenance after launch?",
        answer: "Yes, we offer various maintenance packages to ensure your application stays up-to-date, secure, and performs optimally."
      }
    ]
  },
  {
    serviceId: 1, // Web Development
    technology: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Git/GitHub"
    ],
    description: "We create stunning, responsive websites that deliver exceptional user experiences across all devices. Our web development process focuses on performance, accessibility, and SEO best practices.",
    clientFeedback: [
      {
        name: "Emily Rodriguez",
        role: "Marketing Director at Bloom & Grow",
        comment: "Our new website has significantly improved our online presence. The team was professional and delivered on time.",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How long does it take to build a website?",
        answer: "Most standard websites take 4-8 weeks to complete, depending on the number of pages and features required."
      }
    ]
  },
  {
    serviceId: 2, // Mobile App Development
    technology: [
      "React Native",
      "Expo",
      "Redux",
      "Firebase",
      "App Store & Play Store Deployment"
    ],
    description: "We build cross-platform mobile applications that provide native-like performance with the advantage of a single codebase, reducing development time and cost.",
    clientFeedback: [
      {
        name: "David Kim",
        role: "CEO at AppVenture",
        comment: "The mobile app exceeded our expectations in terms of performance and user experience. Highly recommended!",
        rating: 5
      }
    ],
    faq: [
      {
        question: "Do you develop native or cross-platform apps?",
        answer: "We primarily use React Native for cross-platform development, which allows us to build for both iOS and Android simultaneously while maintaining near-native performance."
      }
    ]
  },
  // Add more services as needed
];

// Helper function to get service details by ID
export const getServiceDetails = (serviceId) => {
  return serviceDetails.find(service => service.serviceId === serviceId) || null;
};
