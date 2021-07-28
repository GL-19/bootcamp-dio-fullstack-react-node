let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let boxSize = 32;
let numberOfBoxes = 16;
let snake = [];
snake[0] = {
    x: 8 * boxSize,
    y: 8 * boxSize
};

let direction = "right";

function createBackGround() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, numberOfBoxes * boxSize, numberOfBoxes * boxSize);
}

function createSnake() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "blue";
        context.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
    }
}

document.addEventListener('keydown', event => {        
    if(event.keyCode === 37 && direction !== "right") direction = "left";
    if(event.keyCode === 38 && direction !== "down") direction = "up";
    if(event.keyCode === 39 && direction !== "left") direction = "right";
    if(event.keyCode === 40 && direction !== "up") direction = "down";
})

function startGame() {
    if(snake[0].x > (numberOfBoxes - 1) * boxSize && direction === "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction === "left") snake[0].x = numberOfBoxes * boxSize;
    if(snake[0].y > (numberOfBoxes - 1) * boxSize && direction === "down") snake[0].y = 0;
    if(snake[0].y < 0 * boxSize && direction === "up") snake[0].y = numberOfBoxes * boxSize;

    createBackGround();
    createSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction === "right") snakeX += boxSize;
    if(direction === "left") snakeX -= boxSize;
    if(direction === "up") snakeY -= boxSize;
    if(direction === "down") snakeY += boxSize;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let game = setInterval(startGame, 100);
