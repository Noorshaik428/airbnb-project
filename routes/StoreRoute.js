const path=require('path');
const express=require('express');
const StoreRouter=express.Router();
const rootdir=require('../utils/pathUtil.js');
const {gethomes,StorepostfavouriteList,StorehomeDetails,Storehomelist,Storebooking,Storegetfavouritehomes,Storehomedeatils,StoreDeleteFavouriteList}=require('../controllers/store/store.js');
StoreRouter.get("/",gethomes);
StoreRouter.get('/homes/:homeid',Storehomedeatils);
StoreRouter.get('/home-list',Storehomelist);
StoreRouter.get("/booking",Storebooking);
StoreRouter.get('/favourite-list',Storegetfavouritehomes);
StoreRouter.post("/favourite-list",StorepostfavouriteList);
StoreRouter.post("/favourites/delete/:favid",StoreDeleteFavouriteList)
module.exports=StoreRouter;
