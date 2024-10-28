const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipecontroller');
const Categories = require('../models/category')
const Recieps = require('../models/recipe')
require('dotenv').config();

router.get('/getcategories', async (req, res) => {

    try {
        const categories = await Categories.find();
        res.json(categories)
    } catch (error) {
        res.status().json(error)
    }
   
})

router.get('/getrecieps', async (req, res) => {

    try {
        const recieps = await Recieps.find();
        res.json(recieps)
    } catch (error) {
        res.status().json(error)
    }
   
})

router.post('/postrecieps', async (req, res) => {

    try {
        const recieps = await Recieps.create(req.body);
        res.json(recieps)
    } catch (error) {
        res.status(201).json(error)
    }
   
})

router.get('/', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);

module.exports = router;