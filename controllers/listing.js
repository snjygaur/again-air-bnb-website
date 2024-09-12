const Listing = require("../models/listing");

module.exports.index = async(req,res,next) =>{
    let allListings = await Listing.find({});
    res.render("index.ejs",{allListings});
};

module.exports.renderNewForm = (req,res,next) =>{
    res.render("new.ejs");
};

module.exports.showListing = async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path:"reviews",
    populate:{
        path:"author",
    },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","listing does not exist");
        res.redirect("/listings");
    }
    res.render("indetail.ejs",{listing});
};

module.exports.createListing = async (req,res) =>{
    let url = req.file.path;
    let filename = req.file.filename;
    let listing = req.body.listing;
   let newlist =  new Listing(listing);
   newlist.owner = req.user._id;
   newlist.image = {url,filename};
   await newlist.save();
   req.flash("success","new listing is added");
   res.redirect("/listings");
};

module.exports.renderEditForm = async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","listing does not exist");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
     originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_200");
    res.render("edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing = async(req,res) =>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url,filename};
    await listing.save();
}
    req.flash("success","listing is updated");
    res.redirect(`/listings/${id}`);

};

module.exports.destroyListing = async (req,res) =>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("error","listing is deleted");
    res.redirect("/listings")
};