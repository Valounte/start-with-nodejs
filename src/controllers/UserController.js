const db = require('../../database/models/index');
const bcrypt = require("bcrypt");

exports.listAllUsers = (req, res) => {
    res.send({ user: db.User.findAll()});
    
};

exports.createUser = async (req, res) => {

    const salt = await bcrypt.genSalt(10);

    db.User.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
    }).then((user) => res.status(201).send(user)).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
};