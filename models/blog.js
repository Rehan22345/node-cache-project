const mongoose = require("mongoose");
const schema = mongoose.Schema({
    name:{
       type : String,
       required : [true," this feild is required"]
    } ,
    title : {
        type : String,
        required : [true," this feild is required"]
    } ,
    description:{
type : String,
required : [true," this feild is required"]
    } 
});
const model = mongoose.model("blogs", schema);
module.exports = model