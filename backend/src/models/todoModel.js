const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    todo:{
        type: String,
        required: true
    }, 
    completed:{
        type: Boolean,
        required: true,
        default: false
    }
});

const todoModel = mongoose.model("ToDo", todoSchema);

module.exports = todoModel;