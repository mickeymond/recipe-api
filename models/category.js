import { model, Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true }
}, {
    timestamps: true
});

categorySchema.plugin(toJSON);

export const CategoryModel = model('Category', categorySchema);