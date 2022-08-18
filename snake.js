//canvas=document.getElementById("mycanvas");
/*canvas.widht=500;
canvas.height=500;
const ctx=canvas.getContext("2d");
ctx.fillStyle="blue";*/
function init() {
    canvas=document.getElementById('mycanvas');
    W=canvas.width=510;
    H=canvas.height=510;
    pen=canvas.getContext("2d");
    cs=30;
    game_over = false;
    score = 0;
    

    //creating a food image object
    food_img = new Image();
    food_img.src = "fruit removebg-preview.jpg";
    trophy_img = new Image();
    trophy_img.src = "trophy-removebg-preview.jpg";



    food = getRandomFood();

snake = {
    init_len:1,
   color:"blue",
   cells:[],
   direction:"right",


createSnake:function(){
    for(var i=this.init_len;i>0;i--) {
        this.cells.push({x:1,y:0});
     }
},
drawSnake:function(){
        for(var i=0;i<this.cells.length;i++)
        {
            pen.fillStyle = this.color;
           pen.fillRect(this.cells[i].x*30,this.cells[i].y*30,cs-2,cs-2);
        }  
    },
    updateSnake:function(){
        console.log("updating snake");

        
        var headX = this.cells[0].x;
        var headY = this.cells[0].y;

        if(headX == food.x && headY == food.y){
            food = getRandomFood();
            score++;
        }
        else{
            this.cells.pop();
        }
        var nextX,nextY;

        if(this.direction =="right"){
            nextX = headX + 1;
            nextY = headY;
        }
        else if(this.direction =="left"){
            nextX = headX - 1;
            nextY = headY;
        }
        else if(this.direction =="down"){
            nextX = headX;
            nextY = headY + 1;
        }
        else{
            nextX = headX;
            nextY = headY - 1;
        }
        

       /* var X = headX+ 1;
        var Y = headY;*/
        this.cells.unshift({x:nextX,y:nextY});
        //prevents snake going outside the canvas
        var last_x = Math.round(W/cs);
        var last_y = Math.round(H/cs);
        if(this.cells[0].y < 0 || this.cells[0].x < 0 || this.cells[0].x > last_x || this.cells[0].y > last_y){
            game_over = true;
        }
    }

};
snake.createSnake();
function keyPressed(e){
    if(e.key=="ArrowRight"){
        snake.direction = "right";
    }
    else if(e.key=="ArrowLeft"){
        snake.direction = "left";
    }
    else if(e.key=="ArrowDown"){
        snake.direction = "down";
    }
    else{
        snake.direction = "up";
    }
    console.log(snake.direction);
}
document.addEventListener('keydown',keyPressed);

}





   /* game_over=false;

rect={
    x:0,
    y:0,
    w:40,
    h:40,
    speed:10*/


function draw()
{
    /*ctx.clearRect(0,0,W,H);
    ctx.fillRect(rect.x,rect.y,rect.w,rect.h)
    ctx.fillStyle="red";*/
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
    pen.fillStyle = food.color;
    pen.drawImage(food_img,food.x*cs,food.y*cs,cs,cs);

    pen.drawImage(trophy_img,18,20,cs,cs);
    pen.fillStyle = "white";
    pen.font = "20px Roboto"
    pen.fillText(score,50,50)
}
function update()
{
   /* rect.x += rect.speed;
    if(rect.x>W-rect.w || rect.x<0){
        rect.speed *= -1;
    }*/
    snake.updateSnake();
}

function getRandomFood(){
    var foodX = Math.round(Math.random()*(W-cs)/cs);
    var foodY = Math.round(Math.random()*(H-cs)/cs);

    var food = {
        x : foodX,
        y : foodY,
        color : "red",
    }
    return food;
}
function gameloop()
{
    if(game_over == true){
        clearInterval(f);
        alert("Game over");
        
    }
    draw();
    update();
    return;
    //update();
    /*if(game_over==true){
        clearInterval(f);
        }*/
}

init();
setInterval(gameloop,150);


/*//event listners
    canvas=document.getElementById("mycanvas");
    function f(){
        console.log("you preesed a cnavs");
    }
    canvas.addEventListener('click',f);
    function f2(e){
        console.log("a key is pressed",e.key);
    }
document.addEventListener('keydown',f2)*/
