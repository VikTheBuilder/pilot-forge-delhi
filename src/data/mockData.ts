export const factories = [
  {
    id: 1,
    name: "Okhla Garments",
    location: "Okhla Industrial Area",
    type: "Textile",
    challenges: 3,
    activePilots: 2,
    savings: "₹2.5L"
  },
  {
    id: 2,
    name: "Bawana Electrics",
    location: "Bawana Industrial Area",
    type: "Electronics",
    challenges: 2,
    activePilots: 1,
    savings: "₹1.8L"
  },
  {
    id: 3,
    name: "Mayapuri Steel Works",
    location: "Mayapuri",
    type: "Steel",
    challenges: 4,
    activePilots: 3,
    savings: "₹4.2L"
  }
];

export const vendors = [
  {
    id: 1,
    name: "IoT Solutions Pvt Ltd",
    specialization: "IoT & Sensors",
    successRate: 92,
    completedProjects: 15,
    avgSavings: "₹3.2L",
    rating: 4.8
  },
  {
    id: 2,
    name: "AI Quality Labs",
    specialization: "Computer Vision",
    successRate: 88,
    completedProjects: 12,
    avgSavings: "₹2.8L",
    rating: 4.6
  },
  {
    id: 3,
    name: "Smart Manufacturing Co",
    specialization: "Predictive Analytics",
    successRate: 85,
    completedProjects: 18,
    avgSavings: "₹4.1L",
    rating: 4.7
  }
];

export const challenges = [
  {
    id: 1,
    title: "Reduce fabric waste by 20%",
    factory: "Okhla Garments",
    description: "Looking for AI-powered cutting optimization to minimize fabric waste in garment production",
    budget: "₹50,000 - ₹2,00,000",
    timeline: "3 months",
    status: "Active",
    bids: 5,
    category: "Waste Reduction"
  },
  {
    id: 2,
    title: "Predict machine failures",
    factory: "Bawana Electrics",
    description: "Need predictive maintenance solution to prevent unexpected breakdowns",
    budget: "₹1,00,000 - ₹5,00,000",
    timeline: "6 months",
    status: "Bidding",
    bids: 3,
    category: "Predictive Maintenance"
  },
  {
    id: 3,
    title: "Quality control automation",
    factory: "Mayapuri Steel Works",
    description: "Automated defect detection in steel products using computer vision",
    budget: "₹2,00,000 - ₹8,00,000",
    timeline: "4 months",
    status: "In Progress",
    bids: 7,
    category: "Quality Control"
  }
];

export const roiData = [
  { name: "Month 1", savings: 50000, investment: 100000, roi: -50 },
  { name: "Month 2", savings: 120000, investment: 150000, roi: -20 },
  { name: "Month 3", savings: 200000, investment: 180000, roi: 11 },
  { name: "Month 4", savings: 280000, investment: 200000, roi: 40 },
  { name: "Month 5", savings: 350000, investment: 220000, roi: 59 },
  { name: "Month 6", savings: 420000, investment: 250000, roi: 68 }
];

export const pilotProgress = [
  { name: "Week 1", completion: 15 },
  { name: "Week 2", completion: 28 },
  { name: "Week 3", completion: 45 },
  { name: "Week 4", completion: 62 },
  { name: "Week 5", completion: 78 },
  { name: "Week 6", completion: 85 }
];

export const successMetrics = [
  { name: "Q1 2024", projects: 12, success: 10 },
  { name: "Q2 2024", projects: 18, success: 16 },
  { name: "Q3 2024", projects: 22, success: 19 },
  { name: "Q4 2024", projects: 15, success: 14 }
];

export const caseStudies = [
  {
    id: 1,
    title: "AI Vision Saves ₹3.5L for Okhla Garments",
    vendor: "AI Quality Labs",
    factory: "Okhla Garments",
    challenge: "Fabric waste reduction",
    solution: "Computer vision-based cutting optimization",
    savings: "₹3,50,000",
    timeline: "3 months",
    roi: "250%",
    description: "Implemented AI-powered fabric cutting system that reduced waste by 25% and improved production efficiency."
  },
  {
    id: 2,
    title: "IoT Prevents ₹5L Loss at Bawana Electrics",
    vendor: "IoT Solutions Pvt Ltd",
    factory: "Bawana Electrics",
    challenge: "Machine breakdown prediction",
    solution: "Predictive maintenance with IoT sensors",
    savings: "₹5,00,000",
    timeline: "4 months",
    roi: "300%",
    description: "Deployed IoT sensors and ML algorithms to predict machine failures, preventing costly unplanned downtime."
  }
];