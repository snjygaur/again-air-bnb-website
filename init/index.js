const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/again_wanderlust_practice_by_me")
 }
 
 main().then((res) =>{
     console.log("mongoose also connected");
 }).catch((err)=>{
     console.log(err);
 })
 

let initdata =  async() => {
     await Listing.deleteMany({});
     initData.data = initData.data.map((obj) => ({...obj,owner:"66bcf0ea6667abcea3cd23e3",}));
      await Listing.insertMany(initData.data);
}

initdata();
