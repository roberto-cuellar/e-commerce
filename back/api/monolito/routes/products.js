const { Router } = require('express');
const { check, query} = require('express-validator');
const { verProducts } = require('../controllers/products');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

// Ver products
router.get( '/list', [
    query('page',"El parametro page es requerido y debe ser de tipo entero").not().isEmpty().isInt(),
    query('len',"El parametro len es requerido y debe ser de tipo entero").not().isEmpty().isInt(),
    validarCampos
], verProducts );

module.exports = router;