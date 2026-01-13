const jwt = require('jsonwebtoken')
const secret="Patakslkwertghbvcse456yf"
function setUser(user){
   return jwt.sign({user},secret)
}
function getUser(token){
    return jwt.verify(token,secret);
}
module.exports={
    setUser,getUser
};