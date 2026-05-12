const generateWebsite = (data) => {

  return {
    hero: `Welcome to ${data.businessName}. We provide the best ${data.services}.`,
    about: `${data.businessName} is a trusted ${data.category} company.`,
    servicesSection: `Our services include ${data.services}.`,
    cta: `Contact ${data.businessName} today.`,
    image: `https://picsum.photos/seed/${data.businessName}/1200/500`
  };
};

module.exports = generateWebsite;