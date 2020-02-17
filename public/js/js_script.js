function menuItem(name, kCal, image, allergy) {
    this.name = name;
    this.kCal = kCal;
    this.image = image;
    this.allergy = allergy;
    this.info = function() {
	return this.name + ' ' + this.kCal;
    };
}

let tastyBurger = new menuItem("Tasty Burger", 1200, "https://media-cdn.tripadcisor.com/media/photo-p/0f/a3/0e/a0/the-big-tasty.jpg", ("gluten", "lactose"));

			       let cheeseBurger = new menuItem("Cheese Burger", 2400, "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F1dccdabc-7e12-4feb-aede-fe1407a73755%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=jpg&v=4", ("gluten","lactose"));

							       let avocadoBurger = new menuItem("Avocado Burger", 32, "https://2.bp.blogspot.com/-eka2VX3O75E/Whve_hSWOUI/AAAAAAABerc/OSVMFDaXq34BeNPewN4MkLXW33v3_2M0wCLcBGAs/s1600/avocado-burger%2Bfood%2B%2526%2Bdrink%2Btips%2BEN%2BBLANDAD%2BKOMPOTT.jpg", ("vegan"));

												let turkeyBurger = new menuItem("Turkey Burger", 650, "https://assets.epicurious.com/photos/5748b2ed5a5fbbae31ae4af9/master/pass/shutterstock_148839410.jpg", (""));

												let halloumiBurger = new menuItem("Halloumi Burger", 200, "https://images.ctfassets.net/qu53tdnhexvd/2cSAd70I9aOKiYeCswqE0K/d4a6118cd7ac072a3a28756e1bac7d3c/chorizo-_-halloumi-burgers.jpg?fm=jpg&fl=progressive&q=80&w=1300", (""));

console.log(tastyBurger.info());
console.log(cheeseBurger.info());
console.log(avocadoBurger.info());
console.log(turkeyBurger.info());
console.log(halloumiBurger.info());
