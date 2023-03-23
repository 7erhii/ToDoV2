const roundButton = document.querySelector('.round-button');
const colorPopup = document.querySelector('#color-popup');
const greenOption = document.querySelector('.green');
const yellowOption = document.querySelector('.yellow');
const redOption = document.querySelector('.red');

//_____TASK-PRIORITY________

const tasksArray = [];

function uuidv4() {
	return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

// const cardId = uuidv4();

// let cardArray = [];

// const cardObj = {
// 	id: cardId,
// 	textValue: inputText,
// }

roundButton.addEventListener('click', function () {
	colorPopup.style.display = 'block';
});

greenOption.addEventListener('click', function () {
	roundButton.style.backgroundColor = 'rgb(177, 255, 177)';
	colorPopup.style.display = 'none';
});

yellowOption.addEventListener('click', function () {
	roundButton.style.backgroundColor = 'rgb(249, 249, 128)';
	colorPopup.style.display = 'none';
});

redOption.addEventListener('click', function () {
	roundButton.style.backgroundColor = 'rgb(255, 124, 124)';
	colorPopup.style.display = 'none';
});

//_____TASK-PRIORITY-END________

const timeElement = document.querySelector('.stats__data-time');
const dayElement = document.querySelector('.stats__data-day');

setInterval(() => {
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
}, 1000);

// ______ THEME Changes ______

const colorChanged = document.querySelector('.js-color');
const pageBg = document.querySelector('.page');
const header = document.querySelector('.header');
const stats = document.querySelector('.stats');
const createNewCard = document.querySelector('.js-create-card');
const creatingNewCard = document.querySelector('.content__cards');

colorChanged.addEventListener('click', colorSwitch);
createNewCard.addEventListener('click', createNew);

function colorSwitch() {
	pageBg.classList.toggle('page-dark');
	colorChanged.classList.toggle('page-dark-on');
	header.classList.toggle('header__dark');
	stats.classList.toggle('stats__dark');
}

function createNew() {
	const taskObj = {
		cardText: '',
		id: uuidv4(),
		priority: 0,
	};

	tasksArray.push(taskObj);
	console.log(tasksArray);

	const newCard = `
	<div class="content__card">
    <div class="content__card-priority"><button class="round-button"></button>
        <div id="color-popup">
            <div class="color-option green"></div>
            <div class="color-option yellow"></div>
            <div class="color-option red"></div>
        </div>
    </div>
    <div class="content__card-text">
	 
	 </div>
    <div class="content__card-options">
        <div class="content__card-btn-edite">Edite</div>
        <div class="content__card-btn-done">X</div>
        <div class="content__card-btn-delite">Delite</div>
    </div>
</div>
		`;
	creatingNewCard.insertAdjacentHTML('afterbegin', newCard);
}
// ______ THEME Changes  END ______
