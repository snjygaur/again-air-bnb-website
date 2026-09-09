const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");
const Review = require("../models/review");
const User = require("../models/user");
require("dotenv").config();

async function main() {
  const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/again_wanderlust_practice_by_me";
  await mongoose.connect(mongoUri);
  console.log("mongoose connected");

  // Full reset requested for the fresh project dataset.
  await Review.deleteMany({});
  await Listing.deleteMany({});
  await User.deleteMany({});

  await Listing.insertMany(initData.data);
  console.log(`Database reset complete: ${initData.data.length} India listings inserted and all old users/listings/reviews removed.`);
}

main()
  .catch((err) => console.error(err))
  .finally(async () => {
    await mongoose.disconnect();
  });
