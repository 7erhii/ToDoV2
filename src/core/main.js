const content = document.querySelector('.content__cards');
const roundButton = document.querySelector('.round-button');
const colorPopup = content.querySelector('.color-popup');
const greenOption = document.querySelector('.green');
const yellowOption = document.querySelector('.yellow');
const redOption = document.querySelector('.red');
const buttonAdd = document.querySelector('.header__btn');

//___show-popup___

//_____TASK-PRIORITY________

const tasksArray = [];

function uuidv4() {
	return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

//_____TASK-PRIORITY-END________

const timeElement = document.querySelector('.stats__data-time');
const dayElement = document.querySelector('.stats__data-day');

function updateTimer() {
	const now = new Date();

	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const timeString = `${hours}:${minutes}`;

	const dayOfWeek = [
		'Sun.',
		'Mon.',
		'Tues.',
		'Wednes.',
		'Thurs.',
		'Fri.',
		'Satur.',
	][now.getDay()];
	const month = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	][now.getMonth()];
	const day = now.getDate();
	const year = now.getFullYear();
	const dateString = `${day}.${month}.${year} ${dayOfWeek}`;

	timeElement.textContent = timeString;
	dayElement.textContent = dateString;

	setTimeout(updateTimer, 3000);
}

updateTimer();

// ______ THEME Changes ______

const colorChanged = document.querySelector('.js-color');
const pageBg = document.querySelector('.page');
const header = document.querySelector('.header');
const stats = document.querySelector('.stats');
const createNewCard = document.querySelector('.js-create-card');
const creatingNewCard = document.querySelector('.content__cards');
const tasksContent = document.querySelector('.content');

colorChanged.addEventListener('click', colorSwitch);
createNewCard.addEventListener('click', createNew);
buttonAdd.addEventListener('click', createNew);

function colorSwitch() {
	pageBg.classList.toggle('page-dark');
	colorChanged.classList.toggle('page-dark-on');
	header.classList.toggle('header__dark');
	stats.classList.toggle('stats__dark');
	tasksContent.classList.toggle('content__dark');
}

function createNew() {
	const cardId = uuidv4();
	const taskObj = {
		cardText: '',
		id: cardId,
		priority: 0,
	};

	tasksArray.push(taskObj);
	console.log(tasksArray);

	const newCard = document.createElement('div');
	newCard.classList.add('content__card');
	newCard.setAttribute('data-blockId', cardId);
	newCard.innerHTML = `
	
	  <div class="content__card-priority">
		 <button class="round-button"></button>
		 <div class="color-popup">
		 	<div class="color-option done"></div>
			<div class="color-option green"></div>
			<div class="color-option yellow"></div>
			<div class="color-option red"></div>

		 </div>
	  </div>
	  <div class="content__card-text">
		<textarea class="content__card-input" rows="4" cols="30" placeholder="Write your task"></textarea>
	  </div>
	  <div class="content__card-options">
		 <div class="content__card-btn-done">X</div>
		 <div class="content__card-btn-delite">Delite</div>
	  </div>
	 
	`;

	creatingNewCard.insertAdjacentElement('afterbegin', newCard);

	const newInput = newCard.querySelector('.content__card-input');

	newInput.focus();

	newInput.addEventListener('input', (event) => {
		const currentCardId = newCard.getAttribute('data-blockId');
		const currentTaskObj = tasksArray.find((task) => task.id === currentCardId);
		currentTaskObj.cardText = event.target.value;
		console.log(tasksArray);
	});
}
// ______ THEME Changes  END ______

//_________CHANGE STATUS ________

// creatingNewCard.addEventListener('click', function (event) {
// 	const target = event.target;

// 	if (target.classList.contains('round-button')) {
// 		const card = target.closest('.content__card');
// 		const cardId = card.getAttribute('data-blockId');
// 		const taskObj = tasksArray.find((task) => task.id === cardId);
// 		const content = document.querySelector('.content__cards');

// 		const greenOption = document.querySelector('.green');
// 		const yellowOption = document.querySelector('.yellow');
// 		const redOption = document.querySelector('.red');
// 		const doneOption = document.querySelector('.done');

// 		const roundButton = document.querySelector('.round-button');
// 		const colorPopup = content.querySelector('.color-popup');

// 		colorPopup.classList.add('color-popup--active');

// 		greenOption.addEventListener('click', function () {
// 			taskObj.priority = 0;
// 			colorPopup.classList.remove('color-popup--active');
// 			console.log(tasksArray);

// 			roundButton.classList.remove('red');
// 			roundButton.classList.remove('yellow');
// 			roundButton.classList.remove('done');
// 			roundButton.classList.add('green');

// 			// roundButton.style.background = 'rgb(99, 233, 99)';
// 		});

// 		yellowOption.addEventListener('click', function () {
// 			taskObj.priority = 1;
// 			colorPopup.classList.remove('color-popup--active');
// 			// roundButton.classList.replace('round-button', 'round-button-yellow');
// 			roundButton.classList.remove('red');
// 			roundButton.classList.remove('done');
// 			roundButton.classList.remove('green');
// 			roundButton.classList.add('yellow');

// 			console.log(tasksArray);
// 		});

// 		redOption.addEventListener('click', function () {
// 			taskObj.priority = 2;
// 			colorPopup.classList.remove('color-popup--active');
// 			roundButton.classList.remove('done');

// 			// roundButton.classList.replace('round-button', 'round-button-red');
// 			roundButton.classList.remove('done');
// 			roundButton.classList.remove('green');
// 			roundButton.classList.remove('yellow');
// 			roundButton.classList.add('red');

// 			console.log(tasksArray);
// 		});
// 		doneOption.addEventListener('click', function () {
// 			taskObj.priority = 3;
// 			colorPopup.classList.remove('color-popup--active');

// 			roundButton.classList.remove('green');
// 			roundButton.classList.remove('yellow');
// 			roundButton.classList.remove('red');
// 			roundButton.classList.add('done');

// 			console.log(tasksArray);
// 		});
// 	}
// });

//_________CHANGE STATUS END ________

//___________ DELETE TASK ______________

content.addEventListener('click', deliteTask);
content.addEventListener('click', changeStatus);

function deliteTask(e) {
	if (e.target.classList.contains('content__card-btn-delite')) {
		const card = e.target.closest('.content__card');
		const cardId = card.getAttribute('data-blockId');
		const taskObj = tasksArray.find((task) => task.id === cardId);
		tasksArray.splice(tasksArray.indexOf(taskObj), 1);
		console.log(tasksArray);
		const content = document.querySelector('.content__cards');
		content.removeChild(card);
	}
}
//___________ DELETE TASK END______________

//_________CHANGE STATUS ________
function changeStatus(e) {
	if (e.target.classList.contains('round-button')) {
	}
}
//_________CHANGE STATUS END ________
