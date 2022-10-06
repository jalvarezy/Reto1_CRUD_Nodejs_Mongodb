const router = require("express").Router();
const { getPersons, createPerson, updatePerson, deletePerson } = require("../controllers/Person");

//Ruta Home
router.get("/", (req, res) => {
  res.send("API Rest Corriendo satisfactoriamente :)");
});

//Ruta Persons
router.get("/persons", getPersons);
router.post("/persons", createPerson);
router.put("/persons/:personID", updatePerson);
router.delete("/persons/:personID", deletePerson);

module.exports = router;  