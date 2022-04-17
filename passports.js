
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt 


module.exports = function (passport){
    console.log("ok");
    passport.use(
        new JwtStrategy( 
        {       
               secretOrKey:process.env.SECRET_KEY,
               jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()    //token from google playground and entered in the headers of postman
            },
        function(jwt_payload,cb){
            //console.log(jwt_payload);
          cb(null,false);
        }
    )
    )
}