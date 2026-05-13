const generateWebsite = (data) => {

  return {

    hero:
      `Welcome to ${data.businessName} — your trusted ${data.category} solution for ${data.audience}.`,

    about:
      `${data.businessName} is a professional ${data.category} business focused on delivering high-quality ${data.services}. We help customers grow with innovative and reliable solutions.`,

    servicesSection:
      `We provide premium ${data.services} designed specifically for ${data.audience}. Our expert team ensures quality, trust, and customer satisfaction.`,

    faq: [

      {
        question: "What services do you provide?",
        answer: `${data.services}`
      },

      {
        question: "Why should customers choose us?",
        answer: `${data.businessName} provides trusted and professional ${data.category} services with excellent customer support.`
      },

      {
        question: "Do you provide customer support?",
        answer: "Yes, we provide dedicated customer support and assistance."
      }

    ],

    testimonials: [

      {
        name: "Rahul Sharma",
        review:
          `${data.businessName} provided excellent service and helped our business grow quickly.`
      },

      {
        name: "Priya Patel",
        review:
          `Highly professional team with amazing ${data.services}.`
      },

      {
        name: "Amit Verma",
        review:
          `Affordable and high-quality solutions. Highly recommended.`
      }

    ],

    contact: {

      phone: "+91 9876543210",

      email: `contact@${data.businessName
        .replace(/\s+/g, "")
        .toLowerCase()}.com`,

      address: "Pune, Maharashtra, India"
    },

    seo: {

      title:
        `${data.businessName} | Best ${data.category} Services`,

      description:
        `${data.businessName} offers professional ${data.services} for ${data.audience}. Contact us today for reliable and affordable solutions.`,

      keywords:
        `${data.category}, ${data.services}, business website, professional services`
    },

    cta:
      `Ready to grow your business with ${data.businessName}? Contact us today.`,

    image:
      `https://picsum.photos/seed/${data.businessName}/1200/600`
  };
};

module.exports = generateWebsite;