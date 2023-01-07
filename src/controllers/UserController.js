const db = require('../../database/models/index');
const bcrypt = require("bcrypt");
const authenticateService = require("../services/AuthenticateService");

exports.listAllUsers = (req, res) => {
    if (!authenticateService.checkAuthenticate(req)) {
        res.send("invalid token");
    }

    res.send({ user: db.User.findAll()});
    
};

exports.createUser = async (req, res) => {
    if (!authenticateService.checkAuthenticate(req)) {
        res.send("invalid token");
    }

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