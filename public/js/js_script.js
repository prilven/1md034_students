function menuItem(name, kCal, image, lactose, gluten, vegan) {
    this.name = name;
    this.kCal = kCal;
    this.image = image;
    this.lactose = lactose;
    this.gluten = gluten;
    this.vegan = vegan;
    this.info = function() {
	return this.name + ' ' + this.kCal;
    };
}

let tastyBurger = new menuItem("Tasty Burger", 1200, "https://media-cdn.tripadvisor.com/media/photo-p/0f/a3/0e/a0/the-big-tasty.jpg", 1, 1, 0);

let cheeseBurger = new menuItem("Cheese Burger", 2400, "https://raster-static.postmates.com/?url=https%3A%2F%2Fd1725r39asqzt3.cloudfront.net%2F1dccdabc-7e12-4feb-aede-fe1407a73755%2Forig.jpg&quality=85&w=640&h=0&mode=auto&format=jpg&v=4", 1, 1, 0);

let avocadoBurger = new menuItem("Avocado Burger", 32, "https://2.bp.blogspot.com/-eka2VX3O75E/Whve_hSWOUI/AAAAAAABerc/OSVMFDaXq34BeNPewN4MkLXW33v3_2M0wCLcBGAs/s1600/avocado-burger%2Bfood%2B%2526%2Bdrink%2Btips%2BEN%2BBLANDAD%2BKOMPOTT.jpg", 0, 0, 1);

let turkeyBurger = new menuItem("Turkey Burger", 650, "https://assets.epicurious.com/photos/5748b2ed5a5fbbae31ae4af9/master/pass/shutterstock_148839410.jpg", 0, 0, 0);

let halloumiBurger = new menuItem("Halloumi Burger", 200, "https://images.ctfassets.net/qu53tdnhexvd/2cSAd70I9aOKiYeCswqE0K/d4a6118cd7ac072a3a28756e1bac7d3c/chorizo-_-halloumi-burgers.jpg?fm=jpg&fl=progressive&q=80&w=1300", 0, 0, 0);

/*
let list1 = document.createElement('ul');
let listitem1 = document.createElement('li');
let listitem2 = document.createElement('li');
let listitem3 = document.createElement('li');
let listitem4 = document.createElement('li');
let listitem5 = document.createElement('li');

let burger1 = document.createTextNode(tastyBurger.info());
let burger2 = document.createTextNode(cheeseBurger.info());
let burger3 = document.createTextNode(avocadoBurger.info());
let burger4 = document.createTextNode(turkeyBurger.info());
let burger5 = document.createTextNode(halloumiBurger.info());

listitem1.appendChild(burger1);
listitem2.appendChild(burger2);
listitem3.appendChild(burger3);
listitem4.appendChild(burger4);
listitem5.appendChild(burger5);
list1.appendChild(listitem1);
list1.appendChild(listitem2);
list1.appendChild(listitem3);
list1.appendChild(listitem4);
list1.appendChild(listitem5);

document.body.appendChild(list1);
*/

let menu = new Array(tastyBurger, cheeseBurger, avocadoBurger, turkeyBurger, halloumiBurger);

var myElement = document.getElementById('selection');

for(let item of menu){

    let main = document.createElement('div');
    
    let heading = document.createElement('h2');
    let headingValue = document.createTextNode(item.name);
    heading.appendChild(headingValue);
    
    
    let burgerImage = document.createElement('img')
    burgerImage.src = item.image;
    burgerImage.width = 350;
    
    
    let list = document.createElement('ul');
    let listItem = document.createElement('li');
    let listValue = document.createTextNode(item.kCal + ' kCal');
    listItem.appendChild(listValue);
    list.appendChild(listItem);
    
    if(item.lactose){
	listItem = document.createElement('li');
	boldItem = document.createElement('b');
	listValue = document.createTextNode('Lactose');
	boldItem.appendChild(listValue);
	listItem.appendChild(boldItem);
	list.appendChild(listItem);
    }
    if(item.gluten){
	listItem = document.createElement('li');
	boldItem = document.createElement('b');
	listValue = document.createTextNode('Gluten');
	boldItem.appendChild(listValue);
	listItem.appendChild(boldItem);
	list.appendChild(listItem);
    }
    if(item.vegan){
	listItem = document.createElement('li');
	boldItem = document.createElement('b');
	listValue = document.createTextNode('Vegan');
	boldItem.appendChild(listValue);
	listItem.appendChild(boldItem);
	list.appendChild(listItem);
    }
    main.appendChild(heading);
    main.appendChild(burgerImage);
    main.appendChild(list);
    myElement.appendChild(main);
}
