const express = require("express");
const {
    addQuestion,
    getRandomQuestions,
    addQuestionREC,
    getRandomQuestionsREC,
    deleteQuestion,
    updateQuestion,
    deleteQuestionREC,
    updateQuestionREC,
    getAllQuestions,
    getAllQuestionsREC

} = require("../controllers/faqController")

const  {protectRecruteur, protectCandidat,protectUser,protectAdmin} = require('../middlewares/Protect')
const faqRouter = require("express").Router()

faqRouter

.post("/add",protectAdmin, addQuestion )
.get("/",getRandomQuestions)
.post("/addREC",protectAdmin, addQuestionREC )
.get("/REC",getRandomQuestionsREC)
.get('/faqsREC',protectAdmin,getAllQuestions)
.get('/faqs',protectAdmin,getAllQuestionsREC)



.put('/update/:questionId',updateQuestion)
.delete('/delete/:questionId',deleteQuestion)


.patch('/:questionIdREC',updateQuestionREC)
.delete('/deleteREC/:questionIdREC',deleteQuestionREC);

module.exports = faqRouter;