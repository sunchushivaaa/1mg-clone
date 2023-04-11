const express = require("express")
const { medicineModel } = require("../Models/medicines.model")
const medicineRouter =  express.Router()






//CREATE
medicineRouter.post("/add",async(req,res)=>{
   try {
    const newProduct = new medicineModel(req.body)
    await newProduct.save()
    res.status(200).send({"msg":"Product added successfully"})
   } catch (error) {
    res.status(400).send({error:error.message})
   }
})







//READ
medicineRouter.get("/",async(req,res)=>{
    console.log(req.query)
   try {
    const products = await medicineModel.find()
    res.status(200).send(products)
   } catch (error) {
    res.status(400).send({"msg":error.message})
   }
})





//DELETE
medicineRouter.delete("/:id",async(req,res)=>{
  try {
     const idExist = await medicineModel.findOne({"_id":req.params.id})
     if(idExist){
        await medicineModel.findByIdAndDelete(req.params.id)
        res.status(200).send({"msg":"Product deleted successfully"})
     }else{
        res.status(400).send({"msg":"Product id invalid"})
     }
  } catch (error) {
    res.status(400).send({"msg":error.message})
  }
})



//UPDATE
medicineRouter.patch("/:id",async(req,res)=>{
    try {
       const idExist = await medicineModel.findOne({"_id":req.params.id})
       if(idExist){
          await medicineModel.findByIdAndUpdate(req.params.id,req.body)
          res.status(200).send({"msg":"Product updated successfully"})
       }else{
          res.status(400).send({"msg":"Product id invalid"})
       }
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
  })





//SEARCH
medicineRouter.get("/search",async(req,res)=>{
    const {q} = req.query
    try {
        const products = await medicineModel.find({ title: { $regex: new RegExp(q, "i") } })
        res.status(200).send(products)
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})




//GET BY ID
medicineRouter.get("/search/:id",async(req,res)=>{
   const {id} = req.params
   try {
       const products = await medicineModel.findOne({_id:id})
       res.status(200).send(products)
   } catch (error) {
       res.status(400).send({"msg":error})
   }
})




module.exports = {medicineRouter}