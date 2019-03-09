const food = document.querySelector('.food-box');
const sumFoodCost = document.querySelector('.all-cost-food');

let foodCost = [];
let foodMonthCost = [];

function addFoodList() {
	
	const createLi = document.createElement("li");
	createLi.classList.add('product-list');
	
	
	foodCost.push(inputCosts[0].value.replace(/,/g, '.'));
	
	foodMonthCost.push(inputCosts[0].value.replace(/,/g, '.'));
	
	for (let i = 0; i < foodCost.length; i++){
	sum += parseFloat(foodCost[i]);
	}
	sum = sum.toFixed(2);
	
	sumFoodCost.innerHTML = sum + " " + "zł"; 
	
	createLi.innerHTML = foodBox();
	
	food.querySelector('.list').appendChild(createLi);
}

function foodBox() {
	
	return inputArticles[0].value + 
		" " + 
		inputCosts[0].value + 
		" " + 
		"zł";
}