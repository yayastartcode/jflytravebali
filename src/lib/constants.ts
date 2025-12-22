// WhatsApp Configuration
export const WHATSAPP_NUMBER = "6287842216006"; // Replace with actual WhatsApp number (include country code without +)

// WhatsApp Message Templates
export const WHATSAPP_MESSAGES = {
  general: "Hi! I would like to know more about Your Bali Vacation services.",
  bookDriver: "Hi! I would like to book a personal driver in Bali.",
  carRental: (carType: string) =>
    `Hi! I would like to inquire about renting a ${carType}.`,
  tourPackage: (tourName: string) =>
    `Hi! I would like to know more about the ${tourName} tour package.`,
  customTour:
    "Hi! I would like to arrange a customized tour based on my preferences.",
  exploreDestinations: "Hi! I would like to explore destinations in Bali.",
};

// Generate WhatsApp URL
export const getWhatsAppUrl = (message: string = WHATSAPP_MESSAGES.general) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
