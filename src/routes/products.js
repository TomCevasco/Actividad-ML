// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// /*** GET ALL PRODUCTS ***/ 
 router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
 router.post('/', productsController.store); 
 

 /*** GET ONE PRODUCT ***/ 
 router.get('/detail', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
 router.get('/edit', productsController.edit); 
// router.???('/:id', productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
 router.delete('/delete/:productId', productsController.destroy); 


module.exports = router;
