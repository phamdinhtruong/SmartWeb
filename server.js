const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

// Express provides a built-in middleware express.static to serve static files, such as images, CSS, JavaScript, etc.
// We will keep a few images in public/images sub-directory.
app.use(express.static('public'));


Product = require('./models/product');
Customer = require('./models/customer');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/smartpos');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/products or /api/customers');
});

app.get('/api/customers', (req, res) => {
	Customer.getCustomers((err, customers) => {
		if(err){
			throw err;
		}
		res.json(customers);
	});
});

app.post('/api/customers', (req, res) => {
	var customer = req.body;
	Customer.addCustomer(customer, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(customer);
	});
});

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

