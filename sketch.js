var theta;
var threshold = 15;

var lSystem;

function setup() {
    createCanvas(640, 360);
    frameRate(1);
    lSystem = new Lsystem();


}

function draw() {
    background(51);
    lSystem.generateLsystem();

}
