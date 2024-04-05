const mongoose = require("mongoose");

const UserSchema = new Schema({
   
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
   
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
    
},{timestamps: true})

const User = models.User || mongoose.model('User', UserSchema);

export default User;