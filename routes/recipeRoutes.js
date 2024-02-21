const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipeController')

router.post('/', recipeController.createRecipe)
router.get('/', recipeController.getAllRecipes)
router.get('/:id', recipeController.getRecipeByID)
router.put('/:id', recipeController.updateRecipeByID)
router.delete('/:id', recipeController.deleteRecipeByID)

module.exports = router