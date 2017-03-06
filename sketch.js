var img;
var img2;
var sound;
var guy;
var var1;
var var2;
var circleX = 200;
var circleY = 200;
var circleDiameter = 50;

function preload() {
    img = loadImage("assets/room-1.png");
     img2 = loadImage("assets/room-2.png");
    sound = loadSound("assets/night.m4a");
    guy = loadAnimation("assets/sprite-1.png", "assets/sprite-2.png");

}

	function setup() {
createCanvas(500, 500);

sound.setVolume(0.50);

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

textAlign(CENTER);
    animation(guy, 200, 345);
text("Welcome to Silent meeting! Speak when God's yellow light is over you by pressing 'S'.", 250, 250);
text("Don't Speak during God's orange light, though!", 250, 270);
text("Press 'B' to begin", 250, 300);
}
function game() {
fill(255, 255, 255);
image(img2,0, 0, 500, 500);
animation(guy, 200, 345);

    ellipse(circleX, circleY, 50, 50);
    fill(255, 255, 255);

}
function keyPressed() {
if (key === "E") {
var1 += 1;
}
if (key === "B") {
var1 += 1;
}
if (key === "D") {
var2 += 1;
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
    }
}

function updateCircle() {
    circleX = random(50, 350);
    circleY = random(50, 350);
}
