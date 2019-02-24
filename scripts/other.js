const other = document.querySelector('.other-box');
const sumOtherCost = document.querySelector('#all-cost-other');

let otherCost = [];

function addOtherList() {
	
	const createLi = document.createElement("li");
	createLi.classList.add('product-list');
	
	
	otherCost.push(inputCosts[3].value.replace(/,/g, '.'));
	
	for (let i = 0; i < otherCost.length; i++){
	sum += parseFloat(otherCost[i]);
	}
	sum = sum.toFixed(2);
	
  sumOtherCost.innerHTML = sum + " " + "zł"; 
	
	
	createLi.innerHTML = otherBox();
	
	other.querySelector('.list').appendChild(createLi);
}

function otherBox() {
	
	return inputArticles[3].value + 
		" " + 
		inputCosts[3].value + 
		" " + 
		"zł";
}