import mongoose from "mongoose";

const Schema = mongoose.Schema;

<<<<<<< HEAD
const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
=======
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Category = mongoose.model("Category", categorySchema);


export default Category;
>>>>>>> a2b0bfa77a906214eb77b8830675640ca8dea810
