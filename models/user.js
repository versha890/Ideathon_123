const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
        name : {
            type :String
        },
        email :{
            type : String
        },
        message:{
            type:String
        }
});
const Userr = mongoose.model("Userr" , userSchema);
module.exports= Userr;