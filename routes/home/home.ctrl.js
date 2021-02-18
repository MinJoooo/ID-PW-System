"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,       // home : home과 같은 의미
    login,      // login : login과 같은 의미
};