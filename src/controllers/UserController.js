const db = require('../../database/models/index');

exports.listAllUsers = (req, res) => {
    res.send({ user: db.User.findAll()});
    
};

exports.createUser = (req, res) => {
    db.User.create({
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    }).then((user) => res.status(201).send(user)).catch((error) => {
        console.log(error);
        res.status(400).send(error);
    });
};