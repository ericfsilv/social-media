import express from 'express';
import userRouter from "./routers/user.js";

const app = express();

app.use("./api/users", userRouter);

app.listen(58615, ()=> {
    console.log("Servidor rodando na porta 58592")
})