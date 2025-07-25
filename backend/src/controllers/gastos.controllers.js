const Gastos = require('../models/gastos');
const gastosControllers={};


//metodo GET
gastosControllers.getGastos = async (req, res) => {
  try {
    const gastos = await Gastos.find(); // Obtiene todos los documentos de la colección "gastos"
    res.json(gastos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los gastos', detalles: error.message });
  }
};

//metodo POST
gastosControllers.addGasto= async(req,res)=>{
    const gasto=new Gastos({
        tipo: req.body.tipo,
        monto:req.body.monto,
        descripcion:req.body.descripcion
    });
    console.log(gasto);
    await gasto.save();
    res.json('status: Gasto guardado');
}

//metodo PUT
gastosControllers.updateGasto = async (req, res) => {
    const { id } = req.params;
    const { tipo, monto, descripcion } = req.body;

    try {
        const resultado = await Gastos.findByIdAndUpdate(
            id,
            { tipo, monto, descripcion },
            { new: true }
        );

        if (!resultado) {
            return res.status(404).json({ error: 'Gasto no encontrado' });
        }

        res.json({ status: 'Gasto actualizado', data: resultado });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el gasto' });
    }
};

//metodo DELETE
gastosControllers.deleteGasto = async (req, res) => {
  const { id } = req.params;

  try {
    const eliminado = await Gastos.findByIdAndDelete(id);

    if (!eliminado) {
      return res.status(404).json({ error: 'Gasto no encontrado' });
    }

    res.json({ status: 'Gasto eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el gasto', detalles: error.message });
  }
};


module.exports=gastosControllers;