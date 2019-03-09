const chemistry = document.querySelector('.chemistry-box');
const sumChemistryCost = document.querySelector('.all-cost-chemistry');

let chemistryCost = [];
let chemistryMonthCost = [];

function addChemistryList() {
	
	const createLi = document.createElement("li");
	createLi.classList.add('product-list');
	
	
	chemistryCost.push(inputCosts[1].value.replace(/,/g, '.'));
	
	chemistryMonthCost.push(inputCosts[1].value.replace(/,/g, '.'));
	
	for (let i = 0; i < chemistryCost.length; i++){
	sum += parseFloat(chemistryCost[i]);
	}
	sum = sum.toFixed(2);
	
  sumChemistryCost.innerHTML = sum + " " + "zł"; 
	
	
	
	
	createLi.innerHTML = chemistryBox();
	
	chemistry.querySelector('.list').appendChild(createLi);
}

function chemistryBox() {
	
	return inputArticles[1].value + 
		" " + 
		inputCosts[1].value + 
		" " + 
		"zł";
}