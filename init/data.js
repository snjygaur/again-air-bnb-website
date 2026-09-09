const locations = [
  ["Goa","Baga"], ["Goa","Calangute"], ["Goa","Candolim"], ["Goa","Palolem"], ["Goa","Anjuna"],
  ["Kerala","Alleppey"], ["Kerala","Munnar"], ["Kerala","Varkala"], ["Kerala","Kovalam"], ["Kerala","Wayanad"],
  ["Rajasthan","Jaipur"], ["Rajasthan","Udaipur"], ["Rajasthan","Jodhpur"], ["Rajasthan","Jaisalmer"], ["Rajasthan","Pushkar"],
  ["Himachal Pradesh","Manali"], ["Himachal Pradesh","Shimla"], ["Himachal Pradesh","Kasol"], ["Himachal Pradesh","Dharamshala"], ["Himachal Pradesh","Dalhousie"],
  ["Uttarakhand","Rishikesh"], ["Uttarakhand","Mussoorie"], ["Uttarakhand","Nainital"], ["Uttarakhand","Auli"], ["Uttarakhand","Jim Corbett"],
  ["Maharashtra","Mumbai"], ["Maharashtra","Lonavala"], ["Maharashtra","Mahabaleshwar"], ["Maharashtra","Alibaug"], ["Maharashtra","Panchgani"],
  ["Karnataka","Bengaluru"], ["Karnataka","Coorg"], ["Karnataka","Hampi"], ["Karnataka","Gokarna"], ["Karnataka","Mysuru"],
  ["Tamil Nadu","Ooty"], ["Tamil Nadu","Kodaikanal"], ["Tamil Nadu","Chennai"], ["Tamil Nadu","Pondicherry"], ["Tamil Nadu","Rameswaram"],
  ["Sikkim","Gangtok"], ["Sikkim","Pelling"], ["Sikkim","Lachung"], ["Sikkim","Namchi"], ["Sikkim","Ravangla"],
  ["Meghalaya","Shillong"], ["Meghalaya","Cherrapunji"], ["Meghalaya","Mawlynnong"], ["Meghalaya","Dawki"], ["Meghalaya","Nongriat"],
  ["West Bengal","Darjeeling"], ["West Bengal","Kalimpong"], ["West Bengal","Kolkata"], ["West Bengal","Digha"], ["West Bengal","Siliguri"],
  ["Odisha","Puri"], ["Odisha","Bhubaneswar"], ["Odisha","Konark"], ["Odisha","Gopalpur"], ["Odisha","Chilika"],
  ["Andaman and Nicobar Islands","Port Blair"], ["Andaman and Nicobar Islands","Havelock Island"], ["Andaman and Nicobar Islands","Neil Island"], ["Andaman and Nicobar Islands","Baratang"], ["Andaman and Nicobar Islands","Long Island"],
  ["Gujarat","Ahmedabad"], ["Gujarat","Kutch"], ["Gujarat","Dwarka"], ["Gujarat","Somnath"], ["Gujarat","Saputara"],
  ["Madhya Pradesh","Bhopal"], ["Madhya Pradesh","Indore"], ["Madhya Pradesh","Pachmarhi"], ["Madhya Pradesh","Khajuraho"], ["Madhya Pradesh","Ujjain"],
  ["Uttar Pradesh","Varanasi"], ["Uttar Pradesh","Agra"], ["Uttar Pradesh","Lucknow"], ["Uttar Pradesh","Mathura"], ["Uttar Pradesh","Ayodhya"],
  ["Punjab","Amritsar"], ["Punjab","Patiala"], ["Punjab","Ludhiana"], ["Punjab","Anandpur Sahib"], ["Punjab","Pathankot"],
  ["Bihar","Patna"], ["Bihar","Bodh Gaya"], ["Bihar","Rajgir"], ["Bihar","Vaishali"], ["Bihar","Nalanda"],
  ["Telangana","Hyderabad"], ["Telangana","Warangal"], ["Telangana","Nizamabad"], ["Telangana","Karimnagar"], ["Telangana","Medak"],
  ["Assam","Guwahati"], ["Assam","Kaziranga"], ["Assam","Majuli"], ["Assam","Jorhat"], ["Assam","Tezpur"]
];

const imageUrls = [
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
];

const propertyTypes = ["Heritage Home", "Cozy Retreat", "Modern Villa", "Boutique Stay", "Private Homestay"];

const sampleListings = locations.map(([state, location], index) => {
  const type = propertyTypes[index % propertyTypes.length];
  return {
    title: `${type} in ${location}`,
    description: `A comfortable stay in ${location}, ${state}, ideal for experiencing local attractions, food, culture and nearby places.`,
    image: { filename: "listingimage", url: imageUrls[index % imageUrls.length] },
    price: 1200 + (index % 10) * 350,
    location,
    country: "India"
  };
});

module.exports = { data: sampleListings };
