import comercio from "../models/comercio.js";

const controlador = {}

//MOSTRAR REGISTROS
controlador.listado = async (req,res) => {
    console.log("Ejecutando el FIND")
    const comercios = await comercio.find()
    res.json(comercios)
}

//AGREGAR REGISTROS
controlador.registrar = async (req,res) => {
    const nuevoComercio = new comercio(req.body)
    console.log(nuevoComercio);
    await nuevoComercio.save();
    res.send("Se creo un nuevo comercio")
}

//MOSTRAR SOLO 1 REGISTRO
// controlador.obtenerUno = async (req,res) => {
//     //const comercioUno = await comercio.findOne({ _id: req.params.id })
//     const comercioUno = await comercio.findById(req.params.id)
//     res.json(comercioUno)
// }

controlador.obtenerUno = async (req,res) => {
    console.log("consulta individual")
    await comercio.findById(req.params.id)
    .then((entidad) => res.status(200).send(entidad))
    .catch((err) => res.status(400).send(err));
}

//ACTUALIZAR REGISTROS
controlador.actualizar = async (req,res) => {
    const updateComercio = await comercio.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    console.log(updateComercio);
    res.send("Se actualizo el comercio")
}

//ELIMINAR REGISTROS
controlador.eliminar = async (req,res) => {
    await comercio.findByIdAndDelete(req.params.id)
    res.send("Comercio eliminado...")
}




export default controlador