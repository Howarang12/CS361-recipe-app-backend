const Recipe = require('../models/recipeModel')

//  create new recipe
exports.createRecipe = async(request, response) => {
	try {
		if (
      !request.body.title ||
			!request.body.description ||
      !request.body.ingredients ||
      !request.body.instructions ||
			!request.body.createdBy ||
			!request.body.prepTime ||
			!request.body.cookTime ||
			!request.body.totalTime ||
			!request.body.cuisine ||
			!request.body.servingSize
    ) {
      return response.status(400).send({
        message: 'All fields required',
      })
    }

		const newRecipe = {
			title: request.body.title,
    	description: request.body.description,
    	ingredients: request.body.ingredients,
			instructions: request.body.instructions,
			prepTime: request.body.prepTime,
			cookTime: request.body.cookTime,
			totalTime: request.body.totalTime,
			cuisine: request.body.cuisine,
			servingSize: request.body.servingSize,
			createdBy: request.body.createdBy
		}

		const recipe = await Recipe.create(newRecipe)

		return response.status(201).send(recipe)

	} catch (error) {
    response.status(500).send({ message: error.message })
	}
}

// get all recipes 
exports.getAllRecipes = async(request, response) => {
	try {
		const recipes = await Recipe.find({})

		return response.status(200).json({
			count: recipes.length,
			data: recipes
		})
	} catch (error) {
		response.status(500).send({ message: error.message})
	}
}

// get recipe by id
exports.getRecipeByID = async(request, response) => {
	try {
		const { id } = request.params 
		const recipe = await Recipe.findById(id)

		return response.status(200).json(recipe)
	} catch (error) {
		response.status(500).send({ message: error.message})
	}
}

// edit recipe
exports.updateRecipeByID = async(request, response) => {
	try {
		if (
      !request.body.title ||
			!request.body.description ||
      !request.body.ingredients ||
      !request.body.instructions ||
			!request.body.createdBy ||
			!request.body.prepTime ||
			!request.body.cookTime ||
			!request.body.totalTime ||
			!request.body.cuisine ||
			!request.body.servingSize
    ) {
      return response.status(400).send({
        message: 'All fields required',
      })
    }

		const { id } = request.params

		const result = await Recipe.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Recipe not found' });
    }

    return response.status(200).send({ message: 'Recipe updated successfully' })
	} catch (error) {
		response.status(500).send({ message: error.message })
	}
}

// delete a recipe
exports.deleteRecipeByID = async(request, response) => {
	try {
    const { id } = request.params

    const result = await Recipe.findByIdAndDelete(id)

    if (!result) {
      return response.status(404).json({ message: 'Recipe not found' })
    }

    return response.status(204).send({ message: 'Recipe deleted successfully' })
  } catch (error) {
    response.status(500).send({ message: error.message })
  }
}


