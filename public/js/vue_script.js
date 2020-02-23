

const vm1 = new Vue( {
    el: '#main',
    data: {
	food: food,
	order: '',
	formName: '',
	formEmail: '',
	formStreet: '',
	formHouse: '',
	formPayment: 'Swish',
	formGender: 'other',
    },
    methods: {
	submitOrder: function () {
	    var burgers = [];
	    for (item of food){
		if (item.check) {
		    burgers.push(item.name);
		}
	    }
	    this.order = new Array(burgers, this.formName, this.formEmail, this.formStreet, this.formHouse, this.formPayment, this.formGender);
	}
    }
} )



