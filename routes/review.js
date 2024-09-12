const express = require("express");
const router= express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {isLoggedIn, isReviewAuthor,validateReview} = require("../middleware.js");


// Route to taking reviews or Reviews Route it's a post route
router.post("/",isLoggedIn,validateReview,wrapAsync(async (req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success"," Review is Added");
    res.redirect(`/listings/${listing._id}`);
}));


//  Route to delete a review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(async(req,res) =>{
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("error"," Review is Deleted");
    res.redirect(`/listings/${id}`);
}))

module.exports = router;