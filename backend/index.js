import express from "express";
import mongoDB from "./db.js";
import userRoutes from "./routes/CreateUser.js";
import displayData from "./routes/displayData.js";
const app = express();
const port = 5000;
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.use(express.json());
app.use("/user", userRoutes);
app.use("/require", displayData);
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
