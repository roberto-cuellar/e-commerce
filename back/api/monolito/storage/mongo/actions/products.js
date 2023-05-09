const Product = require('../../mongo/models/product');
const Jumbo = require('../../mongo/models/jumbo');


exports.consultarProductos= async function (keyword, page, len) {
    let products = [];
    const skipNumber = Number((page-1)*(len));
    const limitNumber = Number(len);

    let query = {}; 
    
    if(keyword){
        query.keyword = {
            $regex: new RegExp(keyword,'i')}
    }
   
    products = await Product.find(query).skip(skipNumber).limit(limitNumber);
    
    const productTotalCount = await Product.find(query).countDocuments();

        
    return {products, productTotalCount}
}