const mongoose = require('mongoose');

// Customer Schema
const customerSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: false
	},
	phone:{
		type: String,
		required: false
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Customer = module.exports = mongoose.model('Customer', customerSchema);

// Get Customers
module.exports.getCustomers = (callback, limit) => {
	Customer.find(callback).limit(limit);
}

// Add Customer
module.exports.addCustomer = (customer, callback) => {
	Customer.create(customer, callback);
}

// Update Customer
module.exports.updateCustomer = (customerId, customer, options, callback) => {
	var query = {_id: customerId};
	var update = {
		name: customer.name,
		email: customer.email,
		phone: customer.phone,
	}
	Customer.findOneAndUpdate(query, update, options, callback);
}

// Delete Customer
module.exports.removeCustomer = (id, callback) => {
	var query = {_id: id};
	Customer.remove(query, callback);
}
