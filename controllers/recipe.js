import { RecipeModel } from "../models/recipe.js";

// Get All Recipes
export const getRecipes = async (req, res, next) => {
    try {
        // Get all recipes from database
        const allRecipes = await RecipeModel.find();
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error);
    }
}

// Post Recipe
export const postRecipe = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        // Return response
        res.json(newRecipe);
    } catch (error) {
        next(error);
    }
}

// Patch Recipe
export const patchRecipe = async (req, res, next) => {
    try {
        // Update recipe by id
        const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // Return response
        res.json(updatedRecipe);
    } catch (error) {
        next(error);
    }
}

// Delete Recipe
export const deleteRecipe = async (req, res, next) => {
    try {
        // Delete recipe by id
        const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(deletedRecipe);
    } catch (error) {
        next(error);
    }
}

// Get Recipe
export const getRecipe = async (req, res, next) => {
    try {
        // Get recipe by id
        const recipe = await RecipeModel.findById(req.params.id);
        // Return response
        res.json(recipe);
    } catch (error) {
        next(error);
    }
}