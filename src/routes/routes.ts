import express, {Request, Response} from "express";

const router = express.Router();

router.get("/", (req : Request, res : Response) => {
    res.json({
        Message: "API is on",
    });
});

router.get("/about",(req:Request, res:Response) => {
    res.json({
        data: "About page",
    });
});

router.get("/page_1",(req:Request, res:Response) => {
    res.json({
        data: "Information from page 1",
    });
});

export {router}