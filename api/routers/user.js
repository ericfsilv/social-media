import express from "express";
import { getUser } from "../controllers/users.js"
const router = express.Router();

router.get("/teste", (req, res) => {
    res.status(200).json({msg:"funcionando"})
})

export default router