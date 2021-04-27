// console.log("super test")
import { request, Router } from "express"
import express, {Request, Response} from "express"
import dotenv from "dotenv"
import { router } from "./routes/routes";

dotenv.config()
const app = express()

app.use("/", router);

app.listen(process.env.PORT,() => {
    console.log(`Server is running at ${process.env.PORT}`);
});