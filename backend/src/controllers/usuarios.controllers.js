const usuariosControllers ={};
usuariosControllers.getUsuario = async(req, res)=>{

}
usuariosControllers.addUsuario = async(req, res)=>{
    console.log(req, body);
    res.send("Nuevo usuario registrado");
}
module.exports=usuariosControllers;