import User from "../models/users.js";

export const findAllUser = async (req, res) => {

    try {
        
        const allUsers = await User.find({});

        if(!allUsers){
            return res.status(500).json({"message":"No Data Found!","success":false});
        }

        return res.status(200).json({"message":"Data found!","success":true,"data":allUsers});

    } catch (error) {
        return res.status(500).json({"message":"Internal Server Error!","success":false});
    }

}