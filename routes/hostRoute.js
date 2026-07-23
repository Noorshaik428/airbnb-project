const path = require("path");
const express = require("express");
const hostRoute = express.Router();
const rootdir = require("../utils/pathUtil");
const {getaddhome,postaddhome,hostEditList,hostHomelist}=require('../controllers/host/hosts.js');

hostRoute.get("/add-home",getaddhome);
hostRoute.post("/add-home", postaddhome);
hostRoute.get("/host-editlist",hostEditList);
hostRoute.get("/host-homelist",hostHomelist);
exports.hostRouter = hostRoute;
