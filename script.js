let order = [];
let clickOrder = [];
let score = 0;

//0 =  verde
//1 =  vermelho
//2 =  amarelo
//3 =  azul

const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

//Adiciona mais um elemento na ordem e depois
function shuffleOrder() {
	let colorOrder = Math.floor(Math.random() * 4);
	order.push(colorOrder);
	console.log(order);
	clickOrder = [];

	for (let i in order) {
		let elementColor = createColorElement(order[i]);
		lightColor(elementColor, Number(i) + 1);
	}
}

function lightColor(element, number) {
	number = number * 500;
	setTimeout(() => element.classList.add("selected"), number - 250);
	setTimeout(() => element.classList.remove("selected"), number);
}

function checkOrder() {
	for (let i in clickOrder) {
		if (clickOrder[i] !== order[i]) {
			gameOver();
			break;
		}
	}
	if (clickOrder.length === order.length) {
		alert(`Pontuação: ${score}\n Voce acertou! Iniciando próximo nível!`);
		nextLevel();
	}
}

function click(color) {
	clickOrder.push(color);
	createColorElement(color).classList.add("selected");

	setTimeout(() => {
		createColorElement(color).classList.remove("selected");
		checkOrder();
	}, 250);
}

function createColorElement(color) {
	switch (color) {
		case 0:
			return green;
		case 1:
			return red;
		case 2:
			return yellow;
		case 3:
			return blue;
	}
}

function nextLevel() {
	score++;
	shuffleOrder();
}

function gameOver() {
	alert(`Pontuação:${score}!\nVocê Perdeu o jogo\nClique em OK para começar um novo jogo`);
	order = [];
	clickOrder = [];

	playGame();
}

function playGame() {
	alert("Bem vindo ao Genesis! Iniciando novo jogo!");
	score = 0;
	nextLevel();
}

green.addEventListener("click", click(0));
red.addEventListener("click", click(1));
yellow.addEventListener("click", click(2));
blue.addEventListener("click", click(3));

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();
