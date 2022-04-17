const express =  require("express");
const router = express.Router()
const passport = require("passport")
require("./passports")(passport)


router.get("/user/profile",passport.authenticate('jwt',{session:false}),(res,req)=>{
    res.send("done");
    console.log(err)
})

module.exports=router