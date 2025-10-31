export const serviceFeedback = [
  // Web Application Development Feedback
  {
    serviceId: 9,
    feedback: [
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
      },
      {
        name: "Emily Rodriguez",
        role: "CEO at DigitalFlow",
        comment: "The custom dashboard they built has streamlined our workflow tremendously. Their ability to understand our business needs was remarkable.",
        rating: 5
      },
      {
        name: "David Kim",
        role: "Operations Director at SwiftScale",
        comment: "The real-time analytics features they implemented have given us invaluable business insights. Highly recommended for complex web applications.",
        rating: 5
      },
      {
        name: "Alex Thompson",
        role: "Founder at StartUpGrid",
        comment: "Their expertise in React and Node.js is exceptional. They delivered a scalable solution that's been handling our growing user base without issues.",
        rating: 4
      },
      {
        name: "Priya Patel",
        role: "Product Lead at CloudNova",
        comment: "The team's attention to security best practices gave us great peace of mind. Our application passed all security audits with flying colors.",
        rating: 5
      },
      {
        name: "James Wilson",
        role: "CTO at FinTech Plus",
        comment: "We needed a complex financial application with real-time updates. SudoMotion delivered a robust solution ahead of schedule.",
        rating: 5
      },
      {
        name: "Lisa Wong",
        role: "Head of Product at HealthTrack",
        comment: "The healthcare compliance features they implemented were spot on. Their knowledge of industry regulations was impressive.",
        rating: 4
      }
    ]
  },
  // Web Development Feedback
  {
    serviceId: 1,
    feedback: [
      {
        name: "Emily Rodriguez",
        role: "Marketing Director at Bloom & Grow",
        comment: "Our new website has significantly improved our online presence. The team was professional and delivered on time.",
        rating: 5
      },
      {
        name: "Robert Taylor",
        role: "Owner at Urban Bistro",
        comment: "The website they created perfectly captures our restaurant's vibe. Our online reservations have doubled since launch!",
        rating: 5
      },
      {
        name: "Sophia Chen",
        role: "Marketing Manager at GreenLeaf",
        comment: "The e-commerce site they built has been a game-changer for our small business. The checkout process is seamless.",
        rating: 5
      },
      {
        name: "Daniel Park",
        role: "CEO at TechGadgets",
        comment: "Fast loading times and beautiful design. Our bounce rate decreased by 35% after the redesign.",
        rating: 4
      },
      {
        name: "Aisha Mohammed",
        role: "Founder of StyleHub",
        comment: "The team understood our vision perfectly. The website is not just beautiful but also converts visitors into customers.",
        rating: 5
      },
      {
        name: "Carlos Mendez",
        role: "Director at EduTech Solutions",
        comment: "Our new educational platform is user-friendly and accessible. The team was great at implementing our complex requirements.",
        rating: 5
      },
      {
        name: "Nina Petrov",
        role: "Marketing Head at PetCare Plus",
        comment: "The blog and content management system they set up has made it so easy for us to maintain our site. Great work!",
        rating: 4
      },
      {
        name: "Thomas Wright",
        role: "CEO at Wright Legal",
        comment: "Professional, clean, and effective. Our law firm's website now generates twice as many leads as before.",
        rating: 5
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
      },
      {
        name: "Megan Foster",
        role: "Product Manager at FitLife",
        comment: "Our fitness app's user engagement has skyrocketed since the redesign. The team's understanding of mobile UX is outstanding.",
        rating: 5
      },
      {
        name: "Raj Patel",
        role: "CTO at ShopEase",
        comment: "The e-commerce app they built handles thousands of daily transactions smoothly. The payment integration is flawless.",
        rating: 5
      },
      {
        name: "Olivia Chen",
        role: "Founder of MindfulMoments",
        comment: "The meditation app they developed has a beautiful, calming interface. User retention is much higher than industry average.",
        rating: 5
      },
      {
        name: "Marcus Johnson",
        role: "CEO at DeliveryDash",
        comment: "The real-time tracking feature in our delivery app works perfectly. The team was great at solving complex location-based challenges.",
        rating: 4
      },
      {
        name: "Elena Rodriguez",
        role: "Product Lead at EduPlay",
        comment: "The educational games app they developed is both fun and educational. Our young users love it!",
        rating: 5
      },
      {
        name: "Kevin Zhang",
        role: "CTO at SocialHive",
        comment: "The social media app they built handles high traffic volumes without any issues. The team's expertise in React Native is impressive.",
        rating: 5
      },
      {
        name: "Sophie Martin",
        role: "Founder of PetConnect",
        comment: "The pet adoption app they created is intuitive and user-friendly. It's making a real difference in finding homes for animals.",
        rating: 4
      }
    ]
  },
  // Add more services as needed
];

// Helper function to get service feedback by ID
export function getServiceFeedback(serviceId) {
  const service = serviceFeedback.find(service => service.serviceId === serviceId);
  return service ? service.feedback : [];
}
