const mongoose = require('mongoose');

// Customer Tags Schema
const customerTagsSchema = mongoose.Schema({
	customerId:{
		type: Int,
		required: true
	},
	TagName:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const CustomerTags = module.exports = mongoose.model('CustomerTags', CustomerTagsSchema);

// Get CustomerTagss
module.exports.getCustomerTagss = (callback, limit) => {
	CustomerTags.find(callback).limit(limit);
}

// Get CustomerTags
module.exports.getCustomerTagsById = (id, callback) => {
	CustomerTags.findById(id, callback);
}

// Add CustomerTags
module.exports.addCustomerTags = (CustomerTags, callback) => {
	CustomerTags.create(CustomerTags, callback);
}

// Update CustomerTags
module.exports.updateCustomerTags = (id, CustomerTags, options, callback) => {
	var query = {_id: id};
	var update = {
		title: CustomerTags.TagName
	}
	CustomerTags.findOneAndUpdate(query, update, options, callback);
}

// Delete CustomerTags
module.exports.removeCustomerTags = (id, callback) => {
	var query = {_id: id};
	CustomerTags.remove(query, callback);
}
