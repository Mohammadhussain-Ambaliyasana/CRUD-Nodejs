import User from "../models/users.js";

export const updateUser = async (req, res) => {
    try {
        
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