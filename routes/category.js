import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import { remoteUpload } from "../middlewares/upload.js";

// Create a router
const categoryRouter = Router();

// Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', remoteUpload.single('image'), postCategory);

// Export router
export default categoryRouter;