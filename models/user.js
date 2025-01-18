const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
        name : {
            type :String
        },
        email :{
            type : String
        },
        pincode:{
            type: Number
        },
        message:{
            type:String
        }
});
const Userr = mongoose.model("Userr" , userSchema);
module.exports= Userr;