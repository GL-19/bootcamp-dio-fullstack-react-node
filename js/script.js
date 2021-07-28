let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

//boxSize * numberOfBoxes tem que ser igual ao width e ao height do canvas
let boxSize = 32;
let numberOfBoxes = 16;
let snake = [];
snake[0] = {
    x: Math.floor(0.5 * numberOfBoxes * boxSize),
    y: Math.floor(0.5 * numberOfBoxes * boxSize) 
};
let direction = "right";
let food = {
    x: Math.floor(Math.random() * numberOfBoxes) * boxSize,
    y: Math.floor(Math.random() * numberOfBoxes) * boxSize
};

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

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, boxSize, boxSize);
}

document.addEventListener('keydown', event => {        
    if(event.keyCode === 37 && direction !== "right") direction = "left";
    if(event.keyCode === 38 && direction !== "down") direction = "up";
    if(event.keyCode === 39 && direction !== "left") direction = "right";
    if(event.keyCode === 40 && direction !== "up") direction = "down";
})

function renderGame() {
    if(snake[0].x > (numberOfBoxes - 1) * boxSize && direction === "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction === "left") snake[0].x = numberOfBoxes * boxSize;
    if(snake[0].y > (numberOfBoxes - 1) * boxSize && direction === "down") snake[0].y = 0;
    if(snake[0].y < 0 * boxSize && direction === "up") snake[0].y = numberOfBoxes * boxSize;

    for(i = 1; i < snake.length; i++) {
        if(snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            clearInterval(game);
            alert("Game Over");
        }
    }
    createBackGround();
    createSnake();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction === "right") snakeX += boxSize;
    if(direction === "left") snakeX -= boxSize;
    if(direction === "up") snakeY -= boxSize;
    if(direction === "down") snakeY += boxSize;

    if(snakeX !== food.x || snakeY !== food.y) {
        snake.pop();
    } else  {
        food.x = Math.floor(Math.random() * numberOfBoxes) * boxSize;
        food.y = Math.floor(Math.random() * numberOfBoxes) * boxSize;
    }
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let game = setInterval(renderGame, 100);

