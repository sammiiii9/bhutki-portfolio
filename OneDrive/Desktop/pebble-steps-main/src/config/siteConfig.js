// Site Configuration - Centralized data management
// This can be managed through APIs for dynamic updates

export const siteConfig = {
    // Company Information
    company: {
        name: "Pebble Steps",
        tagline: "Building Reading Clarity & Confidence",
        description: "Personalized Orton-Gillingham & Six Bricks programs that help children master reading, confidence, communication, and focus in just 8–12 weeks.",
        foundedYear: 2019,
        website: "https://pebblesteps.com"
    },

    // Founder Information
    founder: {
        name: "[Founder Name]",
        title: "Founder & CEO",
        description: "Passionate advocate for child development and innovative therapeutic approaches. Leading the transformation of mental health support for children through evidence-based practices and cutting-edge technology.",
        credentials: "M.A. Child Psychology, Certified Orton-Gillingham Practitioner",
        experience: "10+ years in child development and therapeutic interventions",
        image: "/placeholder-user.jpg"
    },

    // Contact Information
    contact: {
        phone: {
            primary: "+91 98765 43210",
            display: "+91 98765 43210",
            href: "tel:+919876543210"
        },
        email: {
            primary: "hello@pebblesteps.com",
            support: "support@pebblesteps.com",
            privacy: "privacy@pebblesteps.com"
        },
        whatsapp: {
            number: "+919876543210",
            message: "Hi! I'm interested in learning more about Pebble Steps programs."
        },
        locations: [
            "Mumbai",
            "Delhi",
            "Bangalore"
        ],
        address: {
            online: "Online Sessions Available",
            description: "1:1 personalized learning from anywhere"
        }
    },

    // Business Hours
    businessHours: {
        weekdays: {
            days: "Monday - Friday",
            hours: "9:00 AM - 7:00 PM"
        },
        saturday: {
            days: "Saturday",
            hours: "9:00 AM - 5:00 PM"
        },
        sunday: {
            days: "Sunday",
            hours: "Closed"
        },
        responseTime: "2 hours during business hours",
        assessmentResponse: "24 hours"
    },

    // Social Media
    social: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#"
    },

    // Statistics
    stats: {
        childrenServed: {
            value: 2500,
            display: "2,500+",
            label: "Children Transformed"
        },
        successRate: {
            value: 95,
            display: "95%",
            label: "Success Rate"
        },
        weeksToResults: {
            value: 12,
            display: "8-12",
            label: "Weeks to Results"
        },
        monthsProgress: {
            value: 18,
            display: "18+",
            label: "Months Progress"
        },
        learningHours: {
            value: 10000,
            display: "10K+",
            label: "Learning Hours"
        },
        yearsExperience: {
            value: 5,
            display: "5+",
            label: "Years of Excellence"
        }
    },

    // Programs
    programs: {
        ageRange: "4-16 years",
        sessionTypes: ["Online", "In-person"],
        duration: "8-12 weeks",
        methodology: ["Orton-Gillingham", "Six Bricks"]
    },

    // Video Testimonials
    videoTestimonials: [
        {
            id: 1,
            title: "Priya's Reading Transformation",
            description: "Watch how 8-year-old Priya went from struggling reader to confident storyteller in just 10 weeks",
            youtubeId: "dQw4w9WgXcQ",
            thumbnail: "/father-and-child-reading-together-educational-reso.jpg",
            parentName: "Mrs. Sharma",
            childAge: 8,
            duration: "3:45"
        },
        {
            id: 2,
            title: "Arjun's Focus & Confidence Journey",
            description: "See how Six Bricks methodology helped Arjun improve focus and build lasting confidence",
            youtubeId: "dQw4w9WgXcQ",
            thumbnail: "/emotion-detection-therapy-session-with-child.jpg",
            parentName: "Mr. Patel",
            childAge: 10,
            duration: "4:12"
        },
        {
            id: 3,
            title: "Ananya's Public Speaking Success",
            description: "From shy and hesitant to confident speaker - Ananya's incredible transformation story",
            youtubeId: "dQw4w9WgXcQ",
            thumbnail: "/happy-diverse-young-person-smiling-outdoors-mental.jpg",
            parentName: "Mrs. Gupta",
            childAge: 12,
            duration: "5:20"
        },
        {
            id: 4,
            title: "Rohan's Learning Breakthrough",
            description: "How personalized Orton-Gillingham approach helped Rohan overcome reading challenges",
            youtubeId: "dQw4w9WgXcQ",
            thumbnail: "/diverse-children-playing-together-mental-health-to.jpg",
            parentName: "Dr. Singh",
            childAge: 9,
            duration: "4:35"
        }
    ],

    // SEO & Meta
    seo: {
        title: "Pebble Steps - Structured Literacy & Confidence Building",
        description: "Personalized Orton-Gillingham & Six Bricks programs for children aged 4-14. Building reading clarity and confidence in just 8-12 weeks.",
        keywords: ["Orton-Gillingham", "Six Bricks", "Reading difficulties", "Dyslexia", "Structured literacy", "Child education"],
        author: "Pebble Steps Team"
    },

    // API Configuration (for future serverless implementation)
    api: {
        baseUrl: import.meta.env.VITE_API_URL || "https://api.pebblesteps.com",
        endpoints: {
            contact: "/api/contact",
            appointment: "/api/appointment",
            newsletter: "/api/newsletter",
            config: "/api/config"
        }
    }
}

// Helper functions to get config data
export const getContactInfo = () => siteConfig.contact
export const getBusinessHours = () => siteConfig.businessHours
export const getStats = () => siteConfig.stats
export const getCompanyInfo = () => siteConfig.company
export const getSocialLinks = () => siteConfig.social
export const getVideoTestimonials = () => siteConfig.videoTestimonials

// Function to update config (for API integration)
export const updateSiteConfig = (newConfig) => {
    // This would typically make an API call to update the configuration
    // For now, it just returns the merged config
    return { ...siteConfig, ...newConfig }
}

export default siteConfig