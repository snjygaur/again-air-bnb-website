const sampleListings = [
  {
    title: "Stay in Baga",
    description: "Comfortable Indian getaway in Baga, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Baga",
    country: "India"
  },
  {
    title: "Stay in Calangute",
    description: "Comfortable Indian getaway in Calangute, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Calangute",
    country: "India"
  },
  {
    title: "Stay in Candolim",
    description: "Comfortable Indian getaway in Candolim, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Candolim",
    country: "India"
  },
  {
    title: "Stay in Palolem",
    description: "Comfortable Indian getaway in Palolem, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Palolem",
    country: "India"
  },
  {
    title: "Stay in Anjuna",
    description: "Comfortable Indian getaway in Anjuna, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Anjuna",
    country: "India"
  },
  {
    title: "Stay in Alleppey",
    description: "Comfortable Indian getaway in Alleppey, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Alleppey",
    country: "India"
  },
  {
    title: "Stay in Munnar",
    description: "Comfortable Indian getaway in Munnar, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Munnar",
    country: "India"
  },
  {
    title: "Stay in Varkala",
    description: "Comfortable Indian getaway in Varkala, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Varkala",
    country: "India"
  },
  {
    title: "Stay in Kovalam",
    description: "Comfortable Indian getaway in Kovalam, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Kovalam",
    country: "India"
  },
  {
    title: "Stay in Wayanad",
    description: "Comfortable Indian getaway in Wayanad, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Wayanad",
    country: "India"
  },
  {
    title: "Stay in Jaipur",
    description: "Comfortable Indian getaway in Jaipur, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Stay in Udaipur",
    description: "Comfortable Indian getaway in Udaipur, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Stay in Jodhpur",
    description: "Comfortable Indian getaway in Jodhpur, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Jodhpur",
    country: "India"
  },
  {
    title: "Stay in Jaisalmer",
    description: "Comfortable Indian getaway in Jaisalmer, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Stay in Pushkar",
    description: "Comfortable Indian getaway in Pushkar, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Pushkar",
    country: "India"
  },
  {
    title: "Stay in Manali",
    description: "Comfortable Indian getaway in Manali, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Manali",
    country: "India"
  },
  {
    title: "Stay in Shimla",
    description: "Comfortable Indian getaway in Shimla, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Shimla",
    country: "India"
  },
  {
    title: "Stay in Kasol",
    description: "Comfortable Indian getaway in Kasol, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Kasol",
    country: "India"
  },
  {
    title: "Stay in Dharamshala",
    description: "Comfortable Indian getaway in Dharamshala, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Dharamshala",
    country: "India"
  },
  {
    title: "Stay in Dalhousie",
    description: "Comfortable Indian getaway in Dalhousie, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Dalhousie",
    country: "India"
  },
  {
    title: "Stay in Rishikesh",
    description: "Comfortable Indian getaway in Rishikesh, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Stay in Mussoorie",
    description: "Comfortable Indian getaway in Mussoorie, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Mussoorie",
    country: "India"
  },
  {
    title: "Stay in Nainital",
    description: "Comfortable Indian getaway in Nainital, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Stay in Auli",
    description: "Comfortable Indian getaway in Auli, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Auli",
    country: "India"
  },
  {
    title: "Stay in Jim Corbett",
    description: "Comfortable Indian getaway in Jim Corbett, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Jim Corbett",
    country: "India"
  },
  {
    title: "Stay in Mumbai",
    description: "Comfortable Indian getaway in Mumbai, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Stay in Lonavala",
    description: "Comfortable Indian getaway in Lonavala, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Lonavala",
    country: "India"
  },
  {
    title: "Stay in Mahabaleshwar",
    description: "Comfortable Indian getaway in Mahabaleshwar, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Mahabaleshwar",
    country: "India"
  },
  {
    title: "Stay in Alibaug",
    description: "Comfortable Indian getaway in Alibaug, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Alibaug",
    country: "India"
  },
  {
    title: "Stay in Panchgani",
    description: "Comfortable Indian getaway in Panchgani, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Panchgani",
    country: "India"
  },
  {
    title: "Stay in Bengaluru",
    description: "Comfortable Indian getaway in Bengaluru, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Bengaluru",
    country: "India"
  },
  {
    title: "Stay in Coorg",
    description: "Comfortable Indian getaway in Coorg, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Coorg",
    country: "India"
  },
  {
    title: "Stay in Hampi",
    description: "Comfortable Indian getaway in Hampi, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Hampi",
    country: "India"
  },
  {
    title: "Stay in Gokarna",
    description: "Comfortable Indian getaway in Gokarna, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Gokarna",
    country: "India"
  },
  {
    title: "Stay in Mysuru",
    description: "Comfortable Indian getaway in Mysuru, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Mysuru",
    country: "India"
  },
  {
    title: "Stay in Ooty",
    description: "Comfortable Indian getaway in Ooty, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Stay in Kodaikanal",
    description: "Comfortable Indian getaway in Kodaikanal, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Kodaikanal",
    country: "India"
  },
  {
    title: "Stay in Chennai",
    description: "Comfortable Indian getaway in Chennai, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Chennai",
    country: "India"
  },
  {
    title: "Stay in Pondicherry",
    description: "Comfortable Indian getaway in Pondicherry, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Pondicherry",
    country: "India"
  },
  {
    title: "Stay in Rameswaram",
    description: "Comfortable Indian getaway in Rameswaram, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Rameswaram",
    country: "India"
  },
  {
    title: "Stay in Gangtok",
    description: "Comfortable Indian getaway in Gangtok, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Gangtok",
    country: "India"
  },
  {
    title: "Stay in Pelling",
    description: "Comfortable Indian getaway in Pelling, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Pelling",
    country: "India"
  },
  {
    title: "Stay in Lachung",
    description: "Comfortable Indian getaway in Lachung, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Lachung",
    country: "India"
  },
  {
    title: "Stay in Namchi",
    description: "Comfortable Indian getaway in Namchi, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Namchi",
    country: "India"
  },
  {
    title: "Stay in Ravangla",
    description: "Comfortable Indian getaway in Ravangla, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Ravangla",
    country: "India"
  },
  {
    title: "Stay in Shillong",
    description: "Comfortable Indian getaway in Shillong, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Shillong",
    country: "India"
  },
  {
    title: "Stay in Cherrapunji",
    description: "Comfortable Indian getaway in Cherrapunji, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Cherrapunji",
    country: "India"
  },
  {
    title: "Stay in Mawlynnong",
    description: "Comfortable Indian getaway in Mawlynnong, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Mawlynnong",
    country: "India"
  },
  {
    title: "Stay in Dawki",
    description: "Comfortable Indian getaway in Dawki, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Dawki",
    country: "India"
  },
  {
    title: "Stay in Nongriat",
    description: "Comfortable Indian getaway in Nongriat, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Nongriat",
    country: "India"
  },
  {
    title: "Stay in Darjeeling",
    description: "Comfortable Indian getaway in Darjeeling, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Darjeeling",
    country: "India"
  },
  {
    title: "Stay in Kalimpong",
    description: "Comfortable Indian getaway in Kalimpong, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Kalimpong",
    country: "India"
  },
  {
    title: "Stay in Kolkata",
    description: "Comfortable Indian getaway in Kolkata, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Kolkata",
    country: "India"
  },
  {
    title: "Stay in Digha",
    description: "Comfortable Indian getaway in Digha, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Digha",
    country: "India"
  },
  {
    title: "Stay in Siliguri",
    description: "Comfortable Indian getaway in Siliguri, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Siliguri",
    country: "India"
  },
  {
    title: "Stay in Puri",
    description: "Comfortable Indian getaway in Puri, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Puri",
    country: "India"
  },
  {
    title: "Stay in Bhubaneswar",
    description: "Comfortable Indian getaway in Bhubaneswar, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Bhubaneswar",
    country: "India"
  },
  {
    title: "Stay in Konark",
    description: "Comfortable Indian getaway in Konark, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Konark",
    country: "India"
  },
  {
    title: "Stay in Gopalpur",
    description: "Comfortable Indian getaway in Gopalpur, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Gopalpur",
    country: "India"
  },
  {
    title: "Stay in Chilika",
    description: "Comfortable Indian getaway in Chilika, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Chilika",
    country: "India"
  },
  {
    title: "Stay in Port Blair",
    description: "Comfortable Indian getaway in Port Blair, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Port Blair",
    country: "India"
  },
  {
    title: "Stay in Havelock Island",
    description: "Comfortable Indian getaway in Havelock Island, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Havelock Island",
    country: "India"
  },
  {
    title: "Stay in Neil Island",
    description: "Comfortable Indian getaway in Neil Island, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Neil Island",
    country: "India"
  },
  {
    title: "Stay in Baratang",
    description: "Comfortable Indian getaway in Baratang, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Baratang",
    country: "India"
  },
  {
    title: "Stay in Long Island",
    description: "Comfortable Indian getaway in Long Island, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Long Island",
    country: "India"
  },
  {
    title: "Stay in Ahmedabad",
    description: "Comfortable Indian getaway in Ahmedabad, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Ahmedabad",
    country: "India"
  },
  {
    title: "Stay in Kutch",
    description: "Comfortable Indian getaway in Kutch, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Kutch",
    country: "India"
  },
  {
    title: "Stay in Dwarka",
    description: "Comfortable Indian getaway in Dwarka, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Dwarka",
    country: "India"
  },
  {
    title: "Stay in Somnath",
    description: "Comfortable Indian getaway in Somnath, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Somnath",
    country: "India"
  },
  {
    title: "Stay in Saputara",
    description: "Comfortable Indian getaway in Saputara, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Saputara",
    country: "India"
  },
  {
    title: "Stay in Bhopal",
    description: "Comfortable Indian getaway in Bhopal, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Bhopal",
    country: "India"
  },
  {
    title: "Stay in Indore",
    description: "Comfortable Indian getaway in Indore, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Indore",
    country: "India"
  },
  {
    title: "Stay in Pachmarhi",
    description: "Comfortable Indian getaway in Pachmarhi, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Pachmarhi",
    country: "India"
  },
  {
    title: "Stay in Khajuraho",
    description: "Comfortable Indian getaway in Khajuraho, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Khajuraho",
    country: "India"
  },
  {
    title: "Stay in Ujjain",
    description: "Comfortable Indian getaway in Ujjain, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Ujjain",
    country: "India"
  },
  {
    title: "Stay in Varanasi",
    description: "Comfortable Indian getaway in Varanasi, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Varanasi",
    country: "India"
  },
  {
    title: "Stay in Agra",
    description: "Comfortable Indian getaway in Agra, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Agra",
    country: "India"
  },
  {
    title: "Stay in Lucknow",
    description: "Comfortable Indian getaway in Lucknow, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Lucknow",
    country: "India"
  },
  {
    title: "Stay in Mathura",
    description: "Comfortable Indian getaway in Mathura, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Mathura",
    country: "India"
  },
  {
    title: "Stay in Ayodhya",
    description: "Comfortable Indian getaway in Ayodhya, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Ayodhya",
    country: "India"
  },
  {
    title: "Stay in Amritsar",
    description: "Comfortable Indian getaway in Amritsar, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Amritsar",
    country: "India"
  },
  {
    title: "Stay in Patiala",
    description: "Comfortable Indian getaway in Patiala, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Patiala",
    country: "India"
  },
  {
    title: "Stay in Ludhiana",
    description: "Comfortable Indian getaway in Ludhiana, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Ludhiana",
    country: "India"
  },
  {
    title: "Stay in Anandpur Sahib",
    description: "Comfortable Indian getaway in Anandpur Sahib, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Anandpur Sahib",
    country: "India"
  },
  {
    title: "Stay in Pathankot",
    description: "Comfortable Indian getaway in Pathankot, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Pathankot",
    country: "India"
  },
  {
    title: "Stay in Patna",
    description: "Comfortable Indian getaway in Patna, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Patna",
    country: "India"
  },
  {
    title: "Stay in Bodh Gaya",
    description: "Comfortable Indian getaway in Bodh Gaya, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Bodh Gaya",
    country: "India"
  },
  {
    title: "Stay in Rajgir",
    description: "Comfortable Indian getaway in Rajgir, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Rajgir",
    country: "India"
  },
  {
    title: "Stay in Vaishali",
    description: "Comfortable Indian getaway in Vaishali, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Vaishali",
    country: "India"
  },
  {
    title: "Stay in Nalanda",
    description: "Comfortable Indian getaway in Nalanda, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Nalanda",
    country: "India"
  },
  {
    title: "Stay in Hyderabad",
    description: "Comfortable Indian getaway in Hyderabad, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1550,
    location: "Hyderabad",
    country: "India"
  },
  {
    title: "Stay in Warangal",
    description: "Comfortable Indian getaway in Warangal, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 1900,
    location: "Warangal",
    country: "India"
  },
  {
    title: "Stay in Nizamabad",
    description: "Comfortable Indian getaway in Nizamabad, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2250,
    location: "Nizamabad",
    country: "India"
  },
  {
    title: "Stay in Karimnagar",
    description: "Comfortable Indian getaway in Karimnagar, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2600,
    location: "Karimnagar",
    country: "India"
  },
  {
    title: "Stay in Medak",
    description: "Comfortable Indian getaway in Medak, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 2950,
    location: "Medak",
    country: "India"
  },
  {
    title: "Stay in Guwahati",
    description: "Comfortable Indian getaway in Guwahati, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3300,
    location: "Guwahati",
    country: "India"
  },
  {
    title: "Stay in Kaziranga",
    description: "Comfortable Indian getaway in Kaziranga, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 3650,
    location: "Kaziranga",
    country: "India"
  },
  {
    title: "Stay in Majuli",
    description: "Comfortable Indian getaway in Majuli, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4000,
    location: "Majuli",
    country: "India"
  },
  {
    title: "Stay in Jorhat",
    description: "Comfortable Indian getaway in Jorhat, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4350,
    location: "Jorhat",
    country: "India"
  },
  {
    title: "Stay in Tezpur",
    description: "Comfortable Indian getaway in Tezpur, perfect for exploring local attractions, food, culture and nearby experiences.",
    image: { filename: "listingimage", url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80" },
    price: 4700,
    location: "Tezpur",
    country: "India"
  }
];

module.exports = { data: sampleListings };
