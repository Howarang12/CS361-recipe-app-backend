# Communication Contract

This microservice utilizes HTTP methods (GET, POST, PUT, and DELETE) to manipulate and retrieve data.

## Requesting Data

### Getting Recipes

Endpoint: '/recipes'
Method: GET
Description: Retrieves all the recipes in the database.
Example:

useEffect(() => {
axios
.get('http://localhost:9000/recipes')
.then(response => setRecipes(response.data.data))
.catch(error => console.error('Error fetching recipes:', error));
}, [])

### Adding Recipe

Endpoint: '/recipes'
Method: POST
Description: Add a new recipe to the database
Example:

data = {
"title": "Spaghetti Carbonara",
"description": "A classic Italian pasta dish.",
"ingredients": [
{"name": "Spaghetti", "quantity": 200, "unit": "g"},
{"name": "Eggs", "quantity": 2, "unit": ""},
{"name": "Guanciale", "quantity": 100, "unit": "g"},
{"name": "Parmesan cheese", "quantity": 50, "unit": "g"},
{"name": "Black pepper", "quantity": 1, "unit": "pinch"}
],
"instructions": [
{"step": 1, "description": "Cook spaghetti according to package instructions."},
{"step": 2, "description": "Fry guanciale until crispy."},
{"step": 3, "description": "Whisk eggs and Parmesan cheese in a bowl."},
{"step": 4, "description": "Drain spaghetti and add it to the pan with guanciale. Mix well."},
{"step": 5, "description": "Remove pan from heat and quickly stir in egg mixture."},
{"step": 6, "description": "Season with black pepper and serve immediately."}
],
"prepTime": 15,
"cookTime": 15,
"totalTime": 30,
"cuisine": "Italian",
"servingSize": 4,
"createdBy": "JohnDoe",
}

axios
.post('http://localhost:9000/recipes', data)
.then(() => navigate('/'))
.catch(error => console.error('Error adding recipe:', error))

### Editing Recipe

Endpoint: '/recipes/{recipeID}'
Method: PUT
Description: Update an existing recipe with the specified ID
Example:

using the data from above for instance

axios
.put('http://localhost:9000/recipes/{recipeID}', data)
.then(() => navigate('/'))
.catch(error => console.error('Error adding recipe:', error))

### Deleting Recipe

Endpoint: '/recipes/{recipeID}'
Method: DELETE
Description: Delete an existing recipe with the specified ID
Example:

axios
.delete('http://localhost:9000/recipes/{recipeID}')
.then(() => navigate('/'))
.catch(error => console.error('Error deleting recipe:', error))

## Receiving Data
The microservice responds to requests with JSON data. When receiving data from the microservice, you need to parse the JSON response to extract the relevant information.

### GET

GET requests to '/recipes' will respond with an object with keys for the count and data. count value will be the number of recipes in the database, data will contain an array of all the recipe objects found in the database.

GET requests to '/recipes/{recipeID}' will respond with an the recipe object with the specified ID

### POST
For a successful creation, respond with 201 created status code. If an error occurs, respond with 500 status code.

### PUT
For a successful update, respond with a 200 status code along with update resource in response body. If recipe does not exist, respond with 404 status code.

### DELETE
For a successful deletion, respond with a 204 status code along with update resource in response body. If recipe does not exist, respond with 404 status code.