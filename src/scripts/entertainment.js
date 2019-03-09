const entertainment = document.querySelector('.entertainment-box');
const sumEntertainmentCost = document.querySelector('.all-cost-entertainment');

let entertainmentCost = [];
let entertainmentMonthCost = [];

function addEntertaimentList() {
	
	const createLi = document.createElement("li");
	createLi.classList.add('product-list');
	
	
	entertainmentCost.push(inputCosts[2].value.replace(/,/g, '.'));
	
	entertainmentMonthCost.push(inputCosts[2].value.replace(/,/g, '.'));
	
	for (let i = 0; i < entertainmentCost.length; i++){
	sum += parseFloat(entertainmentCost[i]);
	}
	sum = sum.toFixed(2);
	
  sumEntertainmentCost.innerHTML = sum + " " + "zł"; 
	
	
	createLi.innerHTML = entertainmentBox();
	
	entertainment.querySelector('.list').appendChild(createLi);
}

function entertainmentBox() {
	
	return inputArticles[2].value + 
		" " + 
		inputCosts[2].value + 
		" " + 
		"zł";
}