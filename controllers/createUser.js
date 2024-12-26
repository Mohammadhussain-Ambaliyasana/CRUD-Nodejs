import User from '../models/users.js';


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

        const { name, email, phone, password } = req.body;

        const newName = `My name is ${name}`  // Update name before save


        const checkExistence = await User.findOne({email});
        if(checkExistence){
            return res.status(400).json({"message":"Email already exists", "success": false});
        }


        // const newUser = new User({name,email,phone,password});

        const newUser = new User({name:newName,email,phone,password});
        

        const saveUser = await newUser.save();

        if(!saveUser){
            return res.status(400).json({"message":"User not created", "success": false});
        }

        return res.status(200).json({"message":"User created", "success": true, "data":saveUser});


    } catch (error) {

        console.log(error);
        return res.status(500).json({"message":"Internal Server Error", "success": false});
    }
}