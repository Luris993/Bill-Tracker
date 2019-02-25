const formFood = document.querySelector('#food');
const	formChemistry = document.querySelector('#chemistry');
const formEntertainment =  document.querySelector('#entertainment');
const formOther = document.querySelector('#other');


const	inputArticles = document.querySelectorAll('form .input-articles');
const	inputCosts = document.querySelectorAll('form .input-costs');

const bill = document.querySelector('#resume-cost');
const saveBill = document.querySelector('.save-bill-btn');
const sectionBill = document.querySelector('.bill-history');
const createBtn = document.querySelector('.bill-btn');
const inputSection = document.querySelector('.addArticlesHidden');

let allArrays;
let sum = 0;
let resumeSum = 0;


//UKRYWANIE I POKAZYWANIE INPUTÓW

function showInputs() {
	const date = document.querySelector('#date').value;
	
	if (date) {
		inputSection.classList.add('addArticles');
	} else {
		alert("ustaw datę");
	}
}

// CZYSCZENIE INPUTÓW

function resetInputs(){
	
	for (let i = 0; i < inputArticles.length; ++i) {
		inputArticles[i].value = "";
	}
	
	for (let i = 0; i < inputCosts.length; ++i){
		inputCosts[i].value = "";
	}
		
	sum = 0;
	
	
	
	allArrays = foodCost.concat(chemistryCost, entertainmentCost, otherCost);
	
	for (let i = 0; i < allArrays.length; i++){
	resumeSum += parseFloat(allArrays[i]);
	}
	resumeSum = resumeSum.toFixed(2);
	
	
	bill.innerHTML = resumeSum + " " + "zł";
	
	resumeSum = 0;
	
}

// TWORZENIE HISTORII RACHUNKÓW
// ***********************************************

function createBill() {
	const date = document.querySelector('#date').value;
	
	const costBox = document.querySelector('.addArticles .product-box');
	const deleteSum = costBox.querySelectorAll('.all-cost-content');
	const list = document.querySelectorAll('.cost-box .list');
	
	const billBox = document.createElement('div');
	billBox.classList.add('bill-box');
	
	billBox.innerHTML = billHistory();
	
	sectionBill.appendChild(billBox);
	
	
//	var foodList = food.querySelector('.list').outerHTML;
//	
//	document.querySelector('.list-history').innerHTML = foodList;	
	
	
	for(let i = 0; i<deleteSum.length; i++) {
		deleteSum[i].innerHTML = "0";
	}
	
	for(let i = 0; i<list.length; i++) {
		list[i].innerHTML = "";
	}
	
	
	foodCost = [];
	chemistryCost = [];
	entertainmentCost = [];
	otherCost = [];
	
	const deleteBtn = document.querySelectorAll('.btn-delete');
	
	sectionBill.addEventListener('click', hiddeBill, false);
	
	deleteBtn.forEach(function(el) {
		el.addEventListener('click', function() {
		deleteBill(this);
		})

	});

	inputSection.classList.remove('addArticles');
	
}

// UKRYWANIE RACHUNKÓW

function hiddeBill(e) {
	
	if (e.target !== e.currentTarget && e.target.className === "btn-hide") {
		
		const tgt = e.target;
		const content = tgt.parentElement.parentElement;
		const contentModule = content.nextElementSibling;
		
		contentModule.classList.toggle('hidden');
		contentModule.classList.toggle('unhidden');
	}
	
}

// USUWANIE RACHUNKU

function deleteBill(deleteBtn) {
	const parent = deleteBtn.parentNode;
	const parentTwo = parent.parentNode.parentNode;
  parentTwo.remove();  
}

// TWORZENIE RACHUNKU
		
function billHistory() {
	
const date = document.querySelector('#date').value,
		  foodList = food.outerHTML,
		  chemistryList = chemistry.outerHTML,
		  entertainmentList = entertainment.outerHTML,
		  otherList = other.outerHTML,
			
			getDay = new Date(date).getUTCDay(),
			weekday = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota',],
			nameDay = weekday[getDay];
	
	

	   
	return '<div class="flex-container">' +
				 '<p class="date-bill">' +
					date + " " + "-" + " " + nameDay +
				 '</p>' +
				 '<div>' +
				 '<button class="btn-delete">' +
				 'x' +
				 '</button>' +
				 '<button class="btn-hide">' +
				 'Pokaż liste' +
				 '</button>' +
		     '</div>' +
		     '</div>' +
				 '<div class="hidden">' +
				 '<div class="list-history">' +
					foodList + chemistryList + entertainmentList + otherList +
				 '</div>' +
			   '<p>Koszt zakupów:' + " " + 
			   '<span class="shoping-cost">' +
					bill.innerHTML +
			   '</span>' +
			   '</p>' +
	       '</div>';
	
}



// EVENTY 

formFood.addEventListener('submit', function(e){
	e.preventDefault();
	
	addFoodList();
	
	resetInputs();
});

formChemistry.addEventListener('submit', function(e){
	e.preventDefault();
	
	addChemistryList();
	
	resetInputs();
});

formEntertainment.addEventListener('submit', function(e){
	e.preventDefault();
	
	addEntertaimentList();
	
	resetInputs();
});

formOther.addEventListener('submit', function(e){
	e.preventDefault();
	
	addOtherList();
	
	resetInputs();
});

saveBill.addEventListener('click', createBill, false);
createBtn.addEventListener('click', showInputs, false);
	
	