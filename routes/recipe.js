import { Router } from "express";
import { deleteRecipe, getRecipe, getRecipes, patchRecipe, postRecipe } from "../controllers/recipe.js";
import { remoteUpload } from "../middlewares/upload.js";

// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes', getRecipes);

recipeRouter.post('/recipes', remoteUpload.single('image'), postRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

// Export router
export default recipeRouter;