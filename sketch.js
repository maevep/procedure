var img;
var img2;
var sound;
var guy;
var var1;
var var2;
var circleX = 200;
var circleY = 200;
var circleDiameter = 50;
var score;





function preload() {
    img = loadImage("assets/back.png");
     img2 = loadImage("assets/guy.png");
    sound = loadSound("assets/sound.wav");


}

function setup() {
createCanvas(500, 500);
sound.play();

    score = 0;

var1 = 0;
var2 = 0;
}
function draw() {

if (var1 == 0) {
mainScreen();
openScreen();

}
else if (var1 == 1) {
mainScreen();
rulesScreen();
}
if (var1 == 2) {
mainScreen();
game();
}
if (var2 == 1) {
background(0);
fill(255, 255, 255);

textAlign(CENTER);
text("You lose. God Forgives you.", 250, 150);

text("Press 'T' to try again?", 250, 250)
}
}



function mainScreen() {
background(255, 0, 0);
image(img,0, 0, 500, 500);

frameRate(4);
}

function openScreen() {
fill(255, 255, 255);

textAlign(CENTER);
text("Press 'E' to enter", 250, 250);
}
function rulesScreen() {
fill(255, 255, 255);
image(img2,0, 0, 500, 500);
textAlign(CENTER);

text("Welcome to Silent meeting! Speak by clicking the evassive yellow light.", 250, 250);
text("Press 'T' to try again", 250, 270);
text("Press 'B' to begin", 250, 300);
}
function game() {
    noStroke();
fill(238, 255, 0, 50);
image(img2,0, 0, 500, 500);



    ellipse(circleX, circleY, 50, 50);


    fill(255, 255, 255);
     updateScore();


    frameRate(4);
}
function keyPressed() {
if (key === "E") {
var1 += 1;
}
if (key === "B") {
var1 += 1;
}
if (key === "T") {
var1 = 0;
var2 = 0;
}
}

function mousePressed() {
    var d = dist(mouseX, mouseY, circleX, circleY);
    if (d < circleDiameter / 2) {

        updateCircle();
        score=score+1;
    }
}


function updateCircle() {
 setTimeout(updateCircle, 4000);
    circleX = random(50, 350);
    circleY = random(50, 350);
}


function updateScore() {

    textSize(20);
    text("Score: " + score, 20, 20);
}


if (score==50){
    mainScreen();
    fill(255);

    text("Congrats! You win, God will love you erternally.", height/2, width/2);

  }
