//core modules
const fs = require("fs");
const path = require("path");
//local module
const rootdir = require("../utils/pathUtil");
const { error } = require("console");
module.exports = class Home {
  constructor(houseName, rentfullday, rentPernight, location) {
    this.houseName = houseName;
    this.rentfullday = rentfullday;
    this.rentPernight = rentPernight;
    this.location = location;
  }
  save() {
    this.id=Math.random().toString();
    Home.fecthAll((registeredHomes) => {
      registeredHomes.push(this);
      console.log("registerred homes:", registeredHomes);
      const homepath = path.join(rootdir, "data", "homes.json");
      fs.writeFile(homepath, JSON.stringify(registeredHomes), (error) => {
        if(!error){
          console.log("File is wrirten succesfully");
        }
        console.log("Eroor ocuured  ", error);
      });
    });
  }
  static fecthAll(callback) {
    const homepath = path.join(rootdir, "data", "homes.json");
    fs.readFile(homepath, (error, data) => {
    try {
      const registeredHomes = JSON.parse(data);
      callback(registeredHomes);
    } catch (err) {
      console.log("Invalid JSON:", err);
      callback([]);
    }
  });
  }
  static  findByid(homeid,callback){
    Home.fecthAll((homes)=>{
     const homeFound= homes.find((home) =>home.id===homeid);
     console.log(homeFound);
     callback(homeFound);
    });
  }
};
