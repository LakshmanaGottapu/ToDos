const express = require("express");
const router = express.Router();
//router.use(express.json());
const connection = require("../db/db.js");
connection();
const todoModel = require("../models/todoModel.js");
router.use(express.json());
router.use(express.urlencoded({extended:false}));
//const { bodyParser } = require("json-server");
router.get("/todos/:id?", async (req, res)=>{ 
    const todoId = req.params.id;
    console.log(todoId);
    try{
        let data;
        if(todoId)
            data = await todoModel.findById(todoId);
        else
            data = await todoModel.find({});
        res.send(data);
    }
    catch (err) {
        return res.status(500).json({ error: 'Internal server error' });
    }
    
})

router.post("/todos", async (req,res)=>{
    console.log(req.body);
    const newModel = new todoModel({...req.body});
    try{
        const result = await newModel.save();
        if(result)
            res.status(201).send(result);
        else 
            res.send("failed in adding the todo");
    }
    catch(e){
        res.send(e);
    }
})

module.exports = router;