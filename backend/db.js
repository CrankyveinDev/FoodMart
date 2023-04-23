import mongoose from "mongoose";
const url =
  "mongodb+srv://Crankyvein:Cranky1234@cluster0.wifmfd6.mongodb.net/FoodMart?retryWrites=true&w=majority";

const mongoDB = () => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DataBase Connected Successfully");
      const fetch_data = mongoose.connection.db.collection("food_items");
      fetch_data
        .find({})
        .toArray()
        .then((ans) => {
          console.log("data fetched");
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });
};

export default mongoDB;
