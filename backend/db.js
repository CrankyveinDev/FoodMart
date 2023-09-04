import mongoose from "mongoose";
const url =
  "mongodb+srv://Crankyvein:Cranky1234@cluster0.wifmfd6.mongodb.net/FoodMart?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database Connected successfully");
    global.foodItems = await mongoose.connection.db.collection("food_items").find({}).toArray();
    global.foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();
  } catch (error) {
    console.log(error);
  }
};

export default mongoDB;
