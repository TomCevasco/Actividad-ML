const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// // Root - Show all products
	 index: (req, res) => {
		
			res.render("products", {products});
		  },
 

	 // Detail - Detail from one product
  detail: (req, res) => { 
	 
	let productId = req.query.productId
	let productDetail = products.filter((p) => p.id == productId )

	 res.render("detail",{productDetail})

  },

	// // Create - Form to create
	 create: (req, res) => {
		res.render("product-create-form")
	},
	
	// // Create -  Method to store
	 store: (req, res) => {
	 	let id = products[products.length - 1].id + 1;
		 let newProduct = {
			id,
			...req.body,
			image: "default-image.png",
		  };
		  
		  products.push(newProduct);
		  fs.writeFileSync(productsFilePath, JSON.stringify(products), "utf-8");
	  
		  res.redirect("/");
 },

	// // Update - Form to edit
	 edit: (req, res) => {

		let productId = req.params.productId
	let productToEdit = products.filter((p) => p.id == productId )
	console.log();
		res.render("product-edit-form", {productToEdit})
	},
	// // Update - Method to update
	// update: (req, res) => {
	// 	// Do the magic
	// },

	// // Delete - Delete one product from DB
	 destroy : (req, res) => {
	
		let productId = req.query.productId;
res.send(productId)
	 }
};

module.exports = controller;

