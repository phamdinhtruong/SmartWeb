var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'CustomersController',
		templateUrl: 'views/Customers.html'
	})
	.when('/Customers', {
		controller:'CustomersController',
		templateUrl: 'views/Customers.html'
	})
	.when('/Customers/details/:id',{
		controller:'CustomersController',
		templateUrl: 'views/Customer_details.html'
	})
	.when('/Customers/add',{
		controller:'CustomersController',
		templateUrl: 'views/add_Customer.html'
	})
	.when('/Customers/edit/:id',{
		controller:'CustomersController',
		templateUrl: 'views/edit_Customer.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});