import  Express, {Application, Request, Response}  from "express";
import { anotherapp } from "./anotherapp";

const port: number = 2000

const app: Application = Express();

anotherapp(app)

app.use(Express.json());

const server = app.listen(()=>{
    console.log("up and runn9ng");
    
})

process.on("uncaughtException", (error: Error | any)=>{
    console.log("uncaughtException: ", error);

    process.exit(1)
    
})

process.on("unhandledRejection", (reason : any)=>{
    console.log("unhandledRejection ", reason );
    
 server.close(()=>{
    process.exit(1)
 })
})