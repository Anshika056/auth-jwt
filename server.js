const express =  require("express");
const app =  express();
const dotenv = require("dotenv");
const router = express.Router()
dotenv.config({path:"./config.env"});
const PORT=process.env.PORT ;
const passport = require("passport")
require("./passports")(passport)

app.use(passport.initialize());                        //initialize the passport 
 
const route = require("../paktolus/router")


// router.get("/user/profile",passport.authenticate('jwt',{session:false}),(res,req)=>{
//     res.send("done");
//     console.log(err)
// })

app.use("/api",route)

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})