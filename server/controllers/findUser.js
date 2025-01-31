import User from "../models/users.js"

export const findUser = async (req, res) => {
    
    try {
        
        const id = req.params.id;
        if(!id){
            return res.status(500).json({"message":"Id not stored!","success":false});
        }

        const findUser = await User.findById(id);
        if(!findUser){
            return res.status(404).json({"message":"User not found!","success":false});
        }

        return res.status(200).json({"message":"User Found!","success":true,"data":findUser});


    } catch (error) {
        return res.status(500).json({"message":"Internal Server Error!","success":false});
    }

}