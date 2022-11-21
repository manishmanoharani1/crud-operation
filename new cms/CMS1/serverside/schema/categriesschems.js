import mongoose from "mongoose";

const categriesSchema = new mongoose.Schema({
  cat_name: { type: String, required: true },
});

const categriesdata = mongoose.model("categriesdata", categriesSchema);

export default categriesdata;
