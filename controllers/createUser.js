import User from '../models/users.js';
import Yup from "Yup";

const userSchema = Yup.object().shape({

    name:Yup.string().required("Name is required!"),
    email:Yup.string().email("Enter valid Email!").required("Email is required!"),
    phone:Yup.string().matches(/^\d{10}$/, "Mobile number must be exactly 10 digits!").required("Phone Number is required!"),
    password:Yup.string().matches(/^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8}$/, "Use 8 characters and special characters").required("Password Is required!")

});

export const createUser = async (req, res) => {
    try {
        
        // const getData = {
        //     name : req.body.name,
        //     email : req.body.email,
        //     phone : req.body.phone
        //     password : req.body.password
        // }
        // const createUser = new User(getData);

                        // OR

        await userSchema.validate(req.body, {abortEarly:false});

        const { name, email, phone, password } = req.body;

        // const newName = `My name is ${name}`  // Update name before save


        const checkExistence = await User.findOne({email});
        if(checkExistence){
            return res.status(400).json({"message":"Email already exists", "success": false});
        }


        // const newUser = new User({name,email,phone,password});

        // const newUser = new User({name:newName,email,phone,password});
        const newUser = new User({name,email,phone,password});
        

        const saveUser = await newUser.save();

        if(!saveUser){
            return res.status(400).json({"message":"User not created", "success": false});
        }

        return res.status(200).json({"message":"User created", "success": true, "data":saveUser});


    } catch (error) {

        if(error.name === "ValidationError"){
            const validationError = error.errors;
            return res.status(400).json({"message":"Validation Error!", "success": false, "errors":validationError});
        }
        console.log(error);
        return res.status(500).json({"message":"Internal Server Error", "success": false});
    }
}