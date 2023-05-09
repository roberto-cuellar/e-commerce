const responseStructure = require('../../../network/response');
const { consultarProductos } = require('../storage/mongo/actions/products');


// Metodo encargado de realizar una consulta para visualizar los productos según un keyword
const verProducts = async(req, res = response) => { 
    
    // Se extraen los datos del cuerpo de la peticion
    const { keyword, page, len } = req.query;  
    
    
    try {
        
        let products = [];
        products = await consultarProductos(keyword, page, len);
    
        // Respuesta del servicio
         return responseStructure.success(req,res,products, 201);
        
    } catch (error) {
        console.log(error);
        return responseStructure.error(req,res,error + ', No se pudo completar la accion, por favor intente mas tarde.', 500);                      
         
    }
};



module.exports = {
    verProducts
}