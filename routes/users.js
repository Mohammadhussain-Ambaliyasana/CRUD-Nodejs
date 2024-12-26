import express from 'express';
const router = express.Router();

router.post('/create', (req, res) => {
    try {
        res.send("Hello World");
    } catch (error) {
        return res.status(500).json({"message":"Internal Server Error", "success": false});
    }
})





export default router;
