
/*
var myElement = document.getElementById('selection');

for(let item of food){

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
*/
