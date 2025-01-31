import User from "../models/users.js";

export const deleteUser = async (req, res) => {
    try {

        const id = req.params.id;

        // If ID value is not stord in the variable ID
        if(!id){
            return res.status(500).json({"message":"ID not stored","success":false});
        }

        // Check User Exist through ID
        const checkUser = await User.findById(id);

        if(!checkUser){
            return res.status(404).json({"message":"User not Found","success":false});
        }

        const deleteUser = await User.findByIdAndDelete(id);

        if(!deleteUser){
            return res.status(500).json({"message":"User not Deleted","success":false});
        }

        return res.status(200).json({"message":"User Deleted","success":true});
        
    } catch (error) {
        return res.status(500).json({"message":`Internal server Error! ${error}`,"success":false});
    }
}