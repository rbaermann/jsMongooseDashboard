const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongooseDashboarddb", { useNewUrlParser : true });

const SardineSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Must Enter a Name."],
    },
    ocean : {
        type : String,
        required : [true, "Must Enter an Ocean."],
    },
    eaten : {
        type : Boolean,
        required : [true, "Have You Eaten Today?"],
    },
},
{
    timestamps : true
});

const Sardine = mongoose.model("Sardine", SardineSchema);

module.exports = Sardine;