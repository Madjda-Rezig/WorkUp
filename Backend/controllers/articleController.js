const ArticleModel = require("../models/articleModel");
const expressAsyncHandler = require("express-async-handler");

// Créer un article
exports.ajouterArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { titre, contenu,categorie,resume ,autheur} = req.body;
    const article = new ArticleModel({
      titre,
      contenu,
      categorie,
      resume,
      autheur,
      photo: req.file.originalname,
    });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
// Lire tous les articles
exports.lireTousArticles = expressAsyncHandler(async (req, res) => {
  try {
    const articles = await ArticleModel.find({})
      
    res.status(200).json(articles);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Lire un article
exports.lireArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.findById(id);
    if (!article) {
      res.status(404);
      throw new Error("Article non trouvé");
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});



// Mettre à jour un article
exports.modifierArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, contenu, image ,resume} = req.body;
    const article = await ArticleModel.findById(id);
    if (!article) {
      res.status(404);
      throw new Error("Article non trouvé");
    }
    if (article.auteur.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Non autorisé à modifier cet article");
    }
    article.titre = titre;
    article.contenu = contenu;
    article.image = image;
    article.resume=resume;
    const articleModifie = await article.save();
    res.status(200).json(articleModifie);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});

// Supprimer un article
exports.supprimerArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const article = await ArticleModel.findById(id);
    if (!article) {
      res.status(404);
      throw new Error("Article non trouvé");
    }
    if (article.auteur.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error("Non autorisé à supprimer cet article");
    }
    await article.remove();
    res.status(202).json("Article supprimé avec succès");
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
//Pagination article
exports.paginationArticle = expressAsyncHandler(async (req, res) => {
  try {
    const { page } = req.query;
    const pages = Math.ceil((await ArticleModel.countDocuments())/3)
    const skipPage = (page - 1) * 3;
    const articles = await ArticleModel.find().skip(skipPage).limit(3);
    res.status(200).json({
      pages,
      articles
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});