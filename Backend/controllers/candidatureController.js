const candidatureModel = require("../models/candidatureModel")
const expressAsyncHandler = require("express-async-handler")


//Show all applications

exports.getAllcandidatures = expressAsyncHandler(async (req, res) => {
  try {
    const candidatures = await candidatureModel.find()
    res.status(200).json(candidatures)
  } catch (error) {
    res.status(400)
    console.error(error)
  }
})

//////////////////////////////////////////////
// Show an application
exports.afficherCandidature = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const candidature = await candidatureModel.findById(id);
    if (!candidature) {
      res.status(404);
      throw new Error("candidature non trouvé");
    }
    res.status(200).json(candidature);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

//Add an application

exports.postCandidature = expressAsyncHandler(async (req, res) => {
  try {  
    const idCandidat = req.user._id
    const { idOffre } = req.params

    // Check if the candidate has already applied to the same offer
    const existingCandidature = await candidatureModel.findOne({
      idCandidat,
      idOffre,
    })

    if (existingCandidature) {
      // If a candidature already exists, return an error message
      return res.status(400).json("Vous avez déjà postulé à cette offre.")
    }

    // If no existing candidature found, create a new one
    await candidatureModel.create({
      idCandidat,
      idOffre, 
    })

    res.status(201).json("Candidature créée.")
  } catch (error) {
    res.status(400).json(error.message)
  }
})

//////////////////////////////////////////////



//Update an application

exports.modifierCandidature = expressAsyncHandler(async (req, res) => {
  try {  
    const {id} = req.params
    const {Etat} = req.body
    await candidatureModel.findByIdAndUpdate(id,{Etat})
    res.status(201).json("Candidature Modifier")
  } catch (error) {
    res.status(400)
    console.log(error)
  }
})


//Pagination for application
exports.paginationCandidatures = expressAsyncHandler(async (req, res) => {
  try {
    const { page } = req.query;
    const pages = Math.ceil((await candidatureModel.countDocuments())/8)
    const skipPage = (page - 1) * 8;
    const candidatures = await candidatureModel.find({idCandidat: req.user._id}).skip(skipPage).limit(8).populate('idOffre');
    res.status(200).json({
      pages,
      candidatures
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
