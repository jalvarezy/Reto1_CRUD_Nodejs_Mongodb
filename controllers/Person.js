const Person = require("../models/Person");


//Verbo GET
const getPersons = (req, res) => {
    Person.find((err, persons) => {
        if(err){
            res.send(err);
        }
        res.json(persons)
    });
};

//verbo CREATE
const createPerson = (req, res) => {
    const newPerson = new Person({
        idType: req.body.idType,
        personId: req.body.personId,
        names: req.body.names,
        surnames: req.body.surnames,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        cellPhone: req.body.cellPhone,
        consignmentReceipt: req.body.consignmentReceipt,
        icfesCode: req.body.icfesCode,
        commonFamily: req.body.commonFamily,
        stratum: req.body.stratum,
        schoolType: req.body.schoolType
    });
    
    newPerson.save((err, newPerson) => {
        if (err) {
            res.send(err);
        }
        res.json(newPerson);
    });
};

//Verbo UPDATE
const updatePerson = (req, res) =>{
    Person.findOneAndUpdate(
        {personId: req.params.personID},
        {
            $set:{
                idType: req.body.idType,
                personId: req.body.personId,
                names: req.body.names,
                surnames: req.body.surnames,
                address: req.body.address,
                email: req.body.email,
                phone: req.body.phone,
                cellPhone: req.body.cellPhone,
                consignmentReceipt: req.body.consignmentReceipt,
                icfesCode: req.body.icfesCode,
                commonFamily: req.body.commonFamily,
                stratum: req.body.stratum,
                schoolType: req.body.schoolType
            },
        },
        { new: true},
        (err, Person) => {
            if(err){
                res.send(err);
            }else res.json(Person);
        }
    );
};

const deletePerson = (req, res) => {
    Person.deleteOne({personId: req.params.personID})
    .then (() => res.json({ message: "Se eliminó Persona Satisfactoriamente"}))
    .catch ((err) => res.send(err));
};

module.exports = {
    getPersons,
    createPerson,
    updatePerson,
    deletePerson
};