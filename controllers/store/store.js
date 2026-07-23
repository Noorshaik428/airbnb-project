//core module
const fs=require('fs');
const path=require('path');
//local module
const Home = require("../../models/home");
const rootdir = require("../../utils/pathUtil");
const favourite = require('../../models/favourite');
exports.gethomes = (req, res, next) => {
  const registeredHomes = Home.fecthAll((registeredHomes) => {
    res.render("store/index", { homes: registeredHomes });
  });
};
exports.Storehomedeatils=(req,res,next)=>{
  const homeid=req.params.homeid;
  console.log("homeid",homeid);
  Home.findByid(homeid,(home)=>{
    console.log("Details home:",home);
    res.render('store/home-details',{home:home});
  });
}
exports.Storehomelist = (req, res, next) => {
  const home = Home.fecthAll((resgisteredHomes) => {
    res.render("store/home-list", { homes: resgisteredHomes });
  });
};
exports.Storebooking = (req, res, next) => {
  res.render("store/bookings");
};
exports.Storegetfavouritehomes= (req, res, next) => {
  favourite.getFavouritehomes((homesid)=>{
    console.log("Favourite homes ids: ",homesid);
    Home.fecthAll((resgisteredHomes)=>{
      console.log("Resgistredred homes:",resgisteredHomes);
       const favouritehomes=resgisteredHomes.filter(home => homesid.includes(home.id));
       console.log("Favourite homes",favouritehomes);
       res.render('store/favourite-list',{home:favouritehomes});
    });
  });
};
exports.StorepostfavouriteList=(req,res,next)=>{
  const homeid=req.body.id;
  console.log("Req id",homeid);
      favourite.addFavouritehomes(homeid,(msg)=>{
        console.log(msg);
        res.redirect('/favourite-list');
        });
}
exports.StoreDeleteFavouriteList=(req,res,next)=>{
  const deleteid=req.body.favid;
  console.log("Favourite id:",deleteid);
  favourite.deleteFavouritehomes(deleteid,()=>{
    res.redirect('/favourite-list');
  });
}
