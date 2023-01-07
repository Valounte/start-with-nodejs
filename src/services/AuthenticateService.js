
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

exports.checkAuthenticate = (req) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.SECRET, () => {
      console.log(err)
  
      if (err) return false
  
      return true
    })
}