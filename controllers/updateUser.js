import User from "../models/users.js";
import Yup from "Yup";

const userSchema = Yup.object().shape({

    name:Yup.string().required("Name is required!"),
    email:Yup.string().email("Enter valid Email!").required("Email is required!"),
    phone:Yup.string().matches(/^\d{10}$/, "Mobile number must be exactly 10 digits!").required("Phone Number is required!"),
    password:Yup.string().matches(/^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8}$/, "Use 8 characters and special characters").required("Password Is required!")

});

export const updateUser = async (req, res) => {
    try {
        
        await userSchema.validate(req.body, {abortEarly:false});

        const id = req.params.id;

        const {name, email, phone, password} = req.body;

        // If ID value is not stord in the variable ID
        if(!id){
            return res.status(500).json({"message":"ID not stored","success":false});
        }

        // Check User Exist through ID
        const checkUser = await User.findById(id);
        if(!checkUser){
            return res.status(404).json({"message":"User not Found","success":false});
        }

        const checkUsed = await User.findOne({"_id":{$ne:id}, "email":email});

        if(checkUsed){
            return res.status(500).json({"message":"Email already Used","success":false});
        }

        const update = await User.findByIdAndUpdate(id, {$set:{name, email, phone, password}}, {new:true});
        
        if(!update){
            return res.status(500).json({"message":"User not updated","success":false});
        }

        return res.status(200).json({"message":"User Updated","success":true,"data":update});

    } catch (error) {
        return res.status(500).json({"message":"Internal Server Error!","success":false});
    }
}