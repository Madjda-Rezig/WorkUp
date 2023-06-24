const {
    getAllcandidatures, 
    postCandidature, 
    modifierCandidature
} = require("../controllers/candidatureController")


const {protectRecruteur,protectCandidat} = require('../middlewares/Protect')
const candidatureRoute = require("express").Router()



candidatureRoute
  // Endpoint to get all candidatures
  .get("/all", protectRecruteur, getAllcandidatures)

  // Endpoint to add a new candidature for a specific offre
  .post("/add/:idOffre", protectCandidat, postCandidature)

  // Endpoint to modify a candidature by ID 
  .put('/:id', protectCandidat, modifierCandidature);

module.exports = candidatureRoute;