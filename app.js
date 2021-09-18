import  Express  from "express";
import  Morgan  from "morgan";

import RutasComercio from "./routes/comercio.routes.js"

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));
app.use(Morgan('dev'))
app.use(RutasComercio)
app.set('puerto',3000)

//GET
app.get("/",(req,res)=>{
    res.send("Hola mundo GET")
})

export default app