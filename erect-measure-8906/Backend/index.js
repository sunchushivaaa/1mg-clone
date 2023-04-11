const express = require("express");
const { connection } = require("./Config/db");
const { consultRouter } = require("./Routes/consult.route");
const {productRouter}=require("./Routes/Product.route")
const {medicineRouter}=require("./Routes/medicine.route")
const cors = require("cors");
const app = express();
app.use(express.json());
require("dotenv").config();

app.use(express.json());
app.use(cors());

//CRUD Operation (consulttRoute)
app.use("/consult", consultRouter);
app.use("/offers",productRouter)
app.use("/medi",medicineRouter)

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`server is running on port ${process.env.port} `);
});
