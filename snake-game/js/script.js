let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let boxSize = 28;
let numberOfBoxes = 18;
let score = 0;
let snake = [];

snake[0] = {
    x: 0.5 * numberOfBoxes * boxSize,
    y: 0.5 * numberOfBoxes * boxSize
};
let snakeX = snake[0].x;
let snakeY = snake[0].y; 
let direction = "right";
let food = {
    x: Math.floor(Math.random() * numberOfBoxes) * boxSize,
    y: Math.floor(Math.random() * numberOfBoxes) * boxSize
};

document.addEventListener('keydown', event => {
    if (event.keyCode === 37 && direction !== "right") direction = "left";
    if (event.keyCode === 38 && direction !== "down") direction = "up";
    if (event.keyCode === 39 && direction !== "left") direction = "right";
    if (event.keyCode === 40 && direction !== "up") direction = "down";
})

function renderBackGround() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, numberOfBoxes * boxSize, numberOfBoxes * boxSize);
}

function renderSnake() {
    for (i = 0; i < snake.length; i++) {
        context.fillStyle = "blue";
        context.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
    }
}

function renderFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, boxSize, boxSize);
}

function checkBorderCollision() {
    if (snake[0].x > (numberOfBoxes - 1) * boxSize && direction === "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction === "left") snake[0].x = numberOfBoxes * boxSize;
    if (snake[0].y > (numberOfBoxes - 1) * boxSize && direction === "down") snake[0].y = 0;
    if (snake[0].y < 0 * boxSize && direction === "up") snake[0].y = numberOfBoxes * boxSize;
}

function checkSnakeCollision() {
    for (i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            clearInterval(game);
            alert("Game Over :(")
        }
    }
}

function moveSnake() {
    snakeX = snake[0].x;
    snakeY = snake[0].y;    
    if (direction === "right") snakeX += boxSize;
    if (direction === "left") snakeX -= boxSize;
    if (direction === "up") snakeY -= boxSize;
    if (direction === "down") snakeY += boxSize;

    if (snakeX !== food.x || snakeY !== food.y) {
        snake.pop();
    } else {
        food.x = Math.floor(Math.random() * numberOfBoxes) * boxSize;
        food.y = Math.floor(Math.random() * numberOfBoxes) * boxSize;
        score++;
        // Display score on screen
        document.getElementById('score').innerHTML = `Pontuação: ${score}`;
    }
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

function renderGame() {
    checkSnakeCollision()
    checkBorderCollision();
    renderBackGround();
    renderSnake();
    renderFood();
    moveSnake();
}

function refreshPage() {
    window.location.reload();
} 

let game = setInterval(renderGame, 100);

