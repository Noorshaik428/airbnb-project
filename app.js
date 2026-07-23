const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const PORT=3000;
const app=express();
//local modules
const rootdir=require('./utils/pathUtil');
const StoreRouter=require(`./routes/StoreRoute`);
const {hostRouter}=require(`./routes/hostRoute`);
const {error404}=require('./controllers/error-404');
app.set("view engine","ejs");
app.set("views","views");
app.use(express.urlencoded());
app.use((req,res,next)=>{
  console.log(req.url,req.method,req.body);
  next();
})
app.use(express.static(path.join(rootdir,"public")));
app.use(StoreRouter);
app.use("/host",hostRouter);
app.use(error404);
app.listen(PORT,()=>{
console.log(`Server is running on the port http://localhost:${PORT}`);
}
);