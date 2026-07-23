const Home =require('../../models/home.js');
exports.getaddhome= (req, res, next) => {
  res.render("hosts/addhome");
};
exports.postaddhome=(req, res, next) => {
 const {name,rent,rentNight,location}=req.body;
 const home=new Home(name,rent,rentNight,location);
 home.save();
  res.render("hosts/homeadded");
};
exports.hostEditList=(req,res,next)=>{
  const home=Home.fecthAll((resgisteredfHomes)=>{
    res.render('hosts/host-edithome',{homes:resgisteredfHomes});
  });
}
exports.hostHomelist=(req,res,next)=>{
  const home=Home.fecthAll((resgisteredfHomes)=>{
    res.render('hosts/host-homelist',{homes:resgisteredfHomes});
  });
}
