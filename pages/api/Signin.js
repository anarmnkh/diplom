import User from "../../models/User";
import connectDB from "../../milldeware/mongoose";

const handler = async (req, res)=> {
    if(req.method == "POST"){
        console.log(req.body)
        let user = new User(req.body);
        await user.save();
        res.status(200).json({success : "success"})
    } else {
        res.status().json({error :"This method is not allowed"});
    }
}

export default connectDB(handler);