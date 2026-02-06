//server create

const express = require("express")

const noteModel = require("./models/notes.model")

const app = express()

app.use(express.json())

//posr /notes
// req.body => {title:"", description:""}

app.post("/notes", async (req, res) => {

    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: "Note created successfully",
        note
    })
})

//GET /notes
//FETCH ALL THE NOTES FROM DATA

app.get("/notes", async (req, res) => {
   const notes = await noteModel.find()

   res.status(200).json({
    message: "Notes fetched successfully",
    notes
   })
      
})



module.exports = app
