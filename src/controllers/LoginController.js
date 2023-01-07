const db = require('../../database/models/index');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
dotenv.config();

exports.login = async (req, res) => {
    const user = await db.User.findOne({ where : {email : req.body.email }});

    if (user === null) {
        res.send("user not found")
        return;
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (!isPasswordValid) {
        res.send("Invalid password")
        return;
    }

    token = jwt.sign({ "id" : user.id,"email" : user.email,"first_name":user.first_name },process.env.SECRET);
    res.status(200).json({ token : token });
};