const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    idType:{
        type: String,
        enum:['CC', 'CE', 'PA', 'TI'],
        require: true
    },
    personId:{
        type: String,
        minlength: 8,
        maxlength: 10,
        unique: true,
        require: true,
    },
    names: {
        type: String,
        maxlength: 50,
        require:true
    },
    surnames: {
        type: String,
        maxlength: 50,
        require: true
    },
    address:{
        type:String,
        maxlength: 100,
        require: true
    },
    email:{
        type: String,
        maxlength: 50,
        require: true,
        match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    },
    phone:{
        type: Number,
        minlength: 7,
        maxlength: 10,
        require: true,
    },
    cellPhone:{
        type: Number,
        minlength: 10,
        maxlength: 10,
        require: true,
    },
    consignmentReceipt:{
        type: String,
        require: true
    },
    icfesCode:{
        type: String,
        require: true
    },
    commonFamily:{
        type: Boolean,
        require: true
    },
    stratum:{
        type: Number,
        emum:['1', '2', '3', '4','5','6'],
        require: true
    },
    schoolType:{
        type: String,
        enum: ['Publico', 'Privado'],
        require: true
    }
});

module.exports = mongoose.model("Person", PersonSchema);