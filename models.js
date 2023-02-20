const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    firstName: {
    type: String,
    required: true,
    },
    lastName:{
    type: String,
    required:true,    
    },
    hall_of_residence: {
    type: String,
    required: true,    
    },
    student_id : {
    type: Number,
    default: 0,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;