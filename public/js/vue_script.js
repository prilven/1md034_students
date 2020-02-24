'use strict';
const socket = io();

const vm = new Vue( {
    el: '#main',
    data: {
	orderConfirmation: false,
	orderCount: 0,
	mapInfo: {},
	orders: {},
	food: food,
	burgers: [],
	order: '',
	formName: '',
	formEmail: '',
	formPayment: 'Swish',
	formGender: 'Other',
    },
    methods: {
	submitOrder: function () {
	    for (item of food){
		if (item.check) {
		    this.burgers.push(item.name);
		}
	    }
	    this.order = new Array(this.burgers, this.formName, this.formEmail, this.formPayment, this.formGender);
	},
	getNext: function() {
	    let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next);
	    }, 0);
	    //return lastOrder + 1;
	    this.orderCount = this.orderCount + 1;
	    return this.orderCount;
	},
	addOrder: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    var temp = [];
	    for (var item of food) {
		if (item.check) {
		    temp.push(item.name);
		}
	    }
	    this.burgers = temp;
	    this.order = new Array(this.formName, this.formEmail, this.formPayment, this.formGender);
	    this.orderConfirmation = true;
	    
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: this.mapInfo,
		orderItems: this.burgers,
		orderInfo: this.order,
	    });
	},
	displayOrder: function(event) {
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    this.mapInfo = { x: event.clientX - 10 - offset.x,
			     y: event.clientY - 10 - offset.y };
	},
    },
} )



