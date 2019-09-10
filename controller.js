const Sardine = require("./models");

module.exports = {
    Index : (req, res) => {
        Sardine.find().sort({ _id : -1 })
            .then((data) => {
                return res.render("Index", { sardines : data })
            })
            .catch((err) => {
                console.log(err);
                return res.render("Index");
            });
    },
    View : (req, res) => {
        Sardine.findOne({ _id : req.params.id })
            .then((sardine) => {
                return res.render("View", { sardine : sardine });
            })
            .catch((err) => {
                console.log(err);
                return res.redirect("/");
            })
    },
    Create : (req, res) => {
        res.render("Create");
    },
    New : (req, res) => { //POST
        const sardine = new Sardine();
        sardine.name = req.body.name;
        sardine.ocean = req.body.ocean;
        sardine.eaten = req.body.eaten;
        sardine.save()
            .then(() => {
                return res.redirect("/");
            })
            .catch((err) => {
                console.log(err);
                return res.render("/sardine/new");
            })
    },
    Edit : (req, res) => {
        Sardine.findOne({ _id : req.params.id })
            .then((sardine) => {
                return res.render("Edit", { sardine : sardine });
            })
            .catch((err) => {
                console.log(err);
                return res.redirect("/");
            })
    },
    Updating : (req, res) => { //POST
        Sardine.updateOne({ _id : req.params.id }, {
            name : req.body.name,
            ocean : req.body.ocean,
            eaten : req.body.eaten,
        })
        .then((sardine) => {
            return res.redirect("/sardine/" + req.params.id);
        })
        .catch((err) => {
            console.log(err);
            return res.redirect("/sardine/" + req.params.id);
        })
    },
    Delete : (req, res) => { //POST
        Sardine.remove({ _id : req.params.id })
            .then(() => {
                return res.redirect("/");
            })
            .catch((err) => {
                console.log(err);
                return res.redirect("/sardine/" + req.params.id);
            })
    },
};