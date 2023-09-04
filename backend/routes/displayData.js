import express from "express";
const router = express.Router();

router.get("/DisplayData", (req, res) => {
  try {
    res.send([global.foodItems,global.foodCategory]);
  } catch (error) {
    console.log(error);
  }
});


export default router;