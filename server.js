require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

// Routes
const recipeRoutes = require('./routes/recipeRoutes')

// Middleware to parse request body
app.use(express.json())

// Handle cors policy
app.use(cors())

app.get('/', (request, response) => {
  return response.status(234).send('CS361 Recipe App');
})

app.use('/recipes', recipeRoutes)

const PORT = process.env.PORT

mongoose
	.connect(process.env.MONGOURL)
	.then(() => {
		console.log('App connected to database')
		app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
	})
	.catch((error) => {
		console.log(error)
	})




