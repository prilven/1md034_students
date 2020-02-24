'use strict';
const socket = io();

const vm = new Vue( {
    el: '#main',
    data: {
	orders: {},
	food: food,
	order: '',
	formName: '',
	formEmail: '',
	formPayment: 'Swish',
	formGender: 'other',
    },
    created: function() {
	socket.on('initialize', function(data) {
	    this.orders = data.orders;
	}.bind(this));

	socket.on('currentQueue', function(data) {
	    this.orders = data.orders;
	}.bind(this));
    },
    methods: {
	submitOrder: function () {
	    var burgers = [];
	    for (item of food){
		if (item.check) {
		    burgers.push(item.name);
		}
	    }
	    this.order = new Array(burgers, this.formName, this.formEmail, this.formPayment, this.formGender);
	},
	getNext: function() {
	let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
	    return Math.max(last, next);
	}, 0);
	    return lastOrder + 1;
	},
	addOrder: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		},
		orderItems: ['Beans', 'Curry'],
	    });
	},					
    },
} )



