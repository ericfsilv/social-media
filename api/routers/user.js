import express from "express";

const router = express.Router();

router.get("./test", (req, res) => {
    res.status(200).json({msg:"funcionando"})
})

export default router