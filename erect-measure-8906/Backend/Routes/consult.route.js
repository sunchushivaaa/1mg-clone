const express = require("express");
const { consultModel } = require("../Models/consult.model");
const consultRouter = express.Router();

//CREATE
consultRouter.post("/add", async (req, res) => {
  try {
    const newuser = new consultModel(req.body);
    await newuser.save();
    res.status(200).send({ msg: "user added successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

//READ
consultRouter.get("/", async (req, res) => {
  try {
    const user = await consultModel.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

//DELETE
consultRouter.delete("/:id", async (req, res) => {
  try {
    const idExist = await consultModel.findOne({ _id: req.params.id });
    if (idExist) {
      await consultModel.findByIdAndDelete(req.params.id);
      res.status(200).send({ msg: "user deleted successfully" });
    } else {
      res.status(400).send({ msg: "user id invalid" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

//UPDATE
consultRouter.patch("/:id", async (req, res) => {
  try {
    const idExist = await consultModel.findOne({ _id: req.params.id });
    if (idExist) {
      await consultModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send({ msg: "user updated successfully" });
    } else {
      res.status(400).send({ msg: "user id invalid" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
});

//GET BY ID
consultRouter.get("/search/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await consultModel.findOne({ _id: id });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

module.exports = { consultRouter };
