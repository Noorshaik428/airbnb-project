//core modules
const fs=require('fs');
const path=require('path');
//local modules
const rootdir=require('../utils/pathUtil');
const { error } = require('console');
const homepath=path.join(rootdir,"data","favourite.json");
module.exports=class favourite{
  static getFavouritehomes(callback){
    fs.readFile(homepath,(error,data)=>{
      console.log("parssed data",JSON.parse(data));
      callback(!error ?JSON.parse(data):[]);
    });
  }
  static addFavouritehomes(homeid,callback){
    console.log("this homeid",homeid);
    favourite.getFavouritehomes((favourites)=>{
      console.log("favourites ids:",favourites);
      if(favourites.includes(homeid)){
        callback("Home is already marked as favourite");
      }else{
      favourites.push(homeid);
      console.log("after favourites",favourites);
      fs.writeFile(homepath,JSON.stringify(favourites),callback);
      }
    });
  }
  static deleteFavouritehomes(deleteid, callback) {
  fs.readFile(homepath, (error, data) => {
    if (error) {
      console.log("File is not readable because", error);
      return;
    }
    const favourites = JSON.parse(data);
    const newhomesid = favourites.filter(homeid => homeid !== deleteid);
    fs.writeFile(homepath, JSON.stringify(newhomesid), callback);
  });
}
}