function preload(){
}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(150, 150);
    webcam=createCapture(VIDEO);
    webcam.hide();
}

function draw(){
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 60);
    fill(21, 71, 52);
    stroke(21, 71, 52);
    rect(78, 40, 520, 20);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(585, 50, 60)
    fill(21, 71, 52);
    stroke(21, 71, 52);
    rect(40, 80, 20, 350);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 430, 60);
    fill(21, 71, 52);
    stroke(21, 71, 52);
    rect(575, 79, 20, 350)
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(585, 430, 60);
    fill(21, 71, 52);
    stroke(21, 72, 52);
    rect(78, 420, 480, 20)
    image(webcam, 200, 100, 220, 220);
}