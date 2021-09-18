import Router from "express"
import cController from "../controllers/comercioController.js";

const ruta = Router();

//GET listado
ruta.get("/listadoComercios", cController.listado)
//GET uno
ruta.get('/listadoUno/:id', cController.obtenerUno);
//AGREGAR
ruta.post("/registrar", cController.registrar)
// PUT
ruta.put('/actualizarComercio/:id', cController.actualizar);
// DELETE
ruta.delete('/eliminarComercio/:id', cController.eliminar);



export default ruta