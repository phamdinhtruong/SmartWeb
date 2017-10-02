const mongoose = require('mongoose');

// Product Schema
const productSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Product = module.exports = mongoose.model('Product', productSchema);

// Get Products
module.exports.getProducts = (callback, limit) => {
	Product.find(callback).limit(limit);
}

// Get Product
module.exports.getProductById = (id, callback) => {
	Product.findById(id, callback);
}

// Add Product
module.exports.addProduct = (product, callback) => {
	Product.create(product, callback);
}

// Update Product
module.exports.updateProduct = (id, product, options, callback) => {
	var query = {_id: id};
	var update = {
		title: product.title,
		genre: product.genre,
		description: product.description,
		author: product.author,
		publisher: product.publisher,
		pages: product.pages,
		image_url: product.image_url,
		buy_url: product.buy_url
	}
	Product.findOneAndUpdate(query, update, options, callback);
}

// Delete Product
module.exports.removeProduct = (id, callback) => {
	var query = {_id: id};
	Product.remove(query, callback);
}
