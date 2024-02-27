# Communication Contract

This microservice utilizes HTTP methods (GET, POST, PUT, and DELETE) to manipulate and retrieve data.

## Requesting Data

### Getting Recipes

Endpoint: '/recipes'
Method: GET
Description: Retrieve all the recipes in the database.
Example:

useEffect(() => {
axios  
.get('http://localhost:9000/recipes')  
.then(response => setRecipes(response.data.data))  
.catch(error => console.error('Error fetching recipes:', error));  
}, [])

Endpoint: '/recipes/{recipeID}'
Method: GET
Description: Retrieve an existing recipe with the specified ID.
Example:

useEffect(() => {
axios  
.get('http://localhost:9000/recipes/{recipeID}')  
.then(response => setRecipe(response.data))  
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

### UML Diagram

<mxfile host="app.diagrams.net" modified="2024-02-27T02:04:38.837Z" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36" etag="Ons-t6Zh7STWKqUnsCrH" version="23.1.7" type="github">
  <diagram name="Page-1" id="2YBvvXClWsGukQMizWep">
    <mxGraphModel dx="438" dy="458" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="aM9ryv3xv72pqoxQDRHE-1" value="Client" style="shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=0;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;elbowEdgeStyle&quot;,&quot;elbow&quot;:&quot;vertical&quot;,&quot;curved&quot;:0,&quot;rounded&quot;:0};" parent="1" vertex="1">
          <mxGeometry x="40" y="40" width="100" height="300" as="geometry" />
        </mxCell>
        <mxCell id="aM9ryv3xv72pqoxQDRHE-2" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;elbowEdgeStyle&quot;,&quot;elbow&quot;:&quot;vertical&quot;,&quot;curved&quot;:0,&quot;rounded&quot;:0};" parent="aM9ryv3xv72pqoxQDRHE-1" vertex="1">
          <mxGeometry x="45" y="70" width="10" height="190" as="geometry" />
        </mxCell>
        <mxCell id="aM9ryv3xv72pqoxQDRHE-5" value="Microservice Backend" style="shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=0;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;elbowEdgeStyle&quot;,&quot;elbow&quot;:&quot;vertical&quot;,&quot;curved&quot;:0,&quot;rounded&quot;:0};" parent="1" vertex="1">
          <mxGeometry x="220" y="40" width="100" height="300" as="geometry" />
        </mxCell>
        <mxCell id="aM9ryv3xv72pqoxQDRHE-6" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;elbowEdgeStyle&quot;,&quot;elbow&quot;:&quot;vertical&quot;,&quot;curved&quot;:0,&quot;rounded&quot;:0};" parent="aM9ryv3xv72pqoxQDRHE-5" vertex="1">
          <mxGeometry x="45" y="80" width="10" height="180" as="geometry" />
        </mxCell>
        <mxCell id="aM9ryv3xv72pqoxQDRHE-7" value="http request &lt;br&gt;&#39;/recipes&#39; or &#39;/recipes/{id}&amp;nbsp;" style="html=1;verticalAlign=bottom;endArrow=block;edgeStyle=elbowEdgeStyle;elbow=vertical;curved=0;rounded=0;" parent="1" edge="1">
          <mxGeometry x="0.1197" y="10" relative="1" as="geometry">
            <mxPoint x="95" y="130" as="sourcePoint" />
            <Array as="points">
              <mxPoint x="180" y="130" />
            </Array>
            <mxPoint x="265" y="130" as="targetPoint" />
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="i4MZI_Fyg-L2TrryN06q-1" value="Database" style="shape=umlLifeline;perimeter=lifelinePerimeter;whiteSpace=wrap;html=1;container=0;dropTarget=0;collapsible=0;recursiveResize=0;outlineConnect=0;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;elbowEdgeStyle&quot;,&quot;elbow&quot;:&quot;vertical&quot;,&quot;curved&quot;:0,&quot;rounded&quot;:0};" vertex="1" parent="1">
          <mxGeometry x="480" y="40" width="100" height="300" as="geometry" />
        </mxCell>
        <mxCell id="i4MZI_Fyg-L2TrryN06q-2" value="" style="html=1;points=[];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;edgeStyle&quot;:&quot;elbowEdgeStyle&quot;,&quot;elbow&quot;:&quot;vertical&quot;,&quot;curved&quot;:0,&quot;rounded&quot;:0};" vertex="1" parent="i4MZI_Fyg-L2TrryN06q-1">
          <mxGeometry x="45" y="80" width="10" height="110" as="geometry" />
        </mxCell>
        <mxCell id="i4MZI_Fyg-L2TrryN06q-15" value="" style="html=1;points=[[0,0,0,0,5],[0,1,0,0,-5],[1,0,0,0,5],[1,1,0,0,-5]];perimeter=orthogonalPerimeter;outlineConnect=0;targetShapes=umlLifeline;portConstraint=eastwest;newEdgeStyle={&quot;curved&quot;:0,&quot;rounded&quot;:0};" vertex="1" parent="i4MZI_Fyg-L2TrryN06q-1">
          <mxGeometry x="45" y="155" width="10" height="35" as="geometry" />
        </mxCell>
        <mxCell id="i4MZI_Fyg-L2TrryN06q-16" value="Perform respective &lt;br&gt;CRUD&lt;br&gt;operation" style="html=1;align=left;spacingLeft=2;endArrow=block;rounded=0;edgeStyle=orthogonalEdgeStyle;curved=0;rounded=0;fontSize=12;startSize=8;endSize=8;" edge="1" target="i4MZI_Fyg-L2TrryN06q-15" parent="i4MZI_Fyg-L2TrryN06q-1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="50" y="135" as="sourcePoint" />
            <Array as="points">
              <mxPoint x="80" y="165" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="i4MZI_Fyg-L2TrryN06q-3" value="getAllRecipes(), getRecipeByID(),&lt;br&gt;updateRecipeByID(), &lt;br&gt;DeleteRecipeByID(),&lt;br&gt;or createRecipe()&amp;nbsp;" style="html=1;verticalAlign=bottom;endArrow=block;edgeStyle=elbowEdgeStyle;elbow=vertical;curved=0;rounded=0;" edge="1" parent="1" target="i4MZI_Fyg-L2TrryN06q-1">
          <mxGeometry x="-0.0381" y="10" relative="1" as="geometry">
            <mxPoint x="280" y="140" as="sourcePoint" />
            <Array as="points">
              <mxPoint x="365" y="140" />
            </Array>
            <mxPoint x="390" y="140" as="targetPoint" />
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="i4MZI_Fyg-L2TrryN06q-14" value="JSON data" style="html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;curved=0;rounded=0;fontSize=12;" edge="1" parent="1" target="aM9ryv3xv72pqoxQDRHE-5">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="520.19" y="230" as="sourcePoint" />
            <mxPoint x="410.00034482758605" y="229.99999999999997" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="i4MZI_Fyg-L2TrryN06q-17" value="parse JSON data, &lt;br&gt;give status code&amp;nbsp;" style="html=1;verticalAlign=bottom;endArrow=open;dashed=1;endSize=8;curved=0;rounded=0;fontSize=12;" edge="1" parent="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="269.5" y="290" as="sourcePoint" />
            <mxPoint x="89.92857142857144" y="290" as="targetPoint" />
          </mxGeometry>
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
