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
const monthContent = document.querySelector('.create-section .month-name-row');

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
	
	monthCosts();
	
}

// ŁĄCZNE MIESIĘCZNE WYDATKI !! 

// ***************************************************

function monthCosts() {
	const date = document.querySelector('#date').value;
	
	const CalendarDate = new Date(date).getUTCMonth();
	
	const currentDate = new Date();
	const currentMonth = currentDate.getMonth(); 
	
	const getMonth = new Date(date).getUTCMonth();
	const monthNumber = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 										'Maj', 'Czewiec', 'Lipiec', 'Sierpień', 'Wrzesień', 											'Październik', 'Listopad', 'Grudzień',],
				nameMonth = monthNumber[getMonth];
	
	
	foodMonthCost = foodMonthCost.map(Number);
	chemistryMonthCost = chemistryMonthCost.map(Number);
	entertainmentMonthCost = entertainmentMonthCost.map(Number);
	otherMonthCost = otherMonthCost.map(Number);
	
	if (CalendarDate === currentMonth) {
	
		if (foodMonthCost == "") {
		} else {
			let TotalSumFood = foodMonthCost.reduce(function(a, b) {
			return a + b;
			});

			document.querySelector('.month-food .month-costs-sum').innerHTML = TotalSumFood + " " + "zł";
		}

		if (chemistryMonthCost == "") {
		} else {
			let TotalSumChemistry = chemistryMonthCost.reduce(function(a, b) {
			return a + b;
			});

			document.querySelector('.month-chemistry .month-costs-sum').innerHTML = TotalSumChemistry + " " + "zł";
		}

		if (entertainmentMonthCost == "") {
		} else {
			let TotalSumentertainment = entertainmentMonthCost.reduce(function(a, b) {
			return a + b;
			});

			document.querySelector('.month-entertainment .month-costs-sum').innerHTML = TotalSumentertainment + " " + "zł";
		}

		if (otherMonthCost ==  "") {
		} else {
			let TotalSumOther = otherMonthCost.reduce(function(a, b) {
			return a + b;
			});

			document.querySelector('.month-other .month-costs-sum').innerHTML = TotalSumOther + " " + "zł";
		}
		
		let monthSum = [];
		let monthExpenses = monthSum.concat(foodMonthCost, chemistryMonthCost, entertainmentMonthCost, otherMonthCost);
		
		monthExpenses = monthExpenses.reduce(function(a, b){
			return a + b;
		});
		
		document.querySelector('.name-actual-month').innerHTML = " " + nameMonth + " ";
		
		document.querySelector('.month-all-costs').innerHTML = "Łączna kwota:" + " " + monthExpenses + " " + "zł";
	}
		
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

function hideMonthCosts(e) {
	
	const articlesMonth = monthContent.nextElementSibling;
	
	articlesMonth.classList.toggle('hidden');
	articlesMonth.classList.toggle('month-costs-row');
	
}

// USUWANIE RACHUNKU

function deleteBill(deleteBtn) {
	
	const parent = deleteBtn.parentNode;
	const parentTwo = parent.parentNode.parentNode;
  parentTwo.remove();
	
	const sumChemistryCostBill = document.querySelectorAll('.bill-box .all-cost-chemistry');
	
	console.log(sumChemistryCostBill.innerHTML);
	
	
	
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
monthContent.addEventListener('click', hideMonthCosts, false);
	
	