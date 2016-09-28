var theta;
var threshold = 15;

var lSystem;
var agent

function setup() {
    createCanvas(640, 360);
    frameRate(1);
    lSystem = new Lsystem();

    var ruleset = [];
    ruleset[0] = new Rule('F', "FF+[+F-F-F]-[-F+F+F]");
    lSystem = new Lsystem("F", ruleset);
    agent = new Agent(lSystem.getAxiom(), height / 2, radians(20));

}

function draw() {
    background(51);
    fill(0);

    translate(width/2,height);
    rotate(-PI/2);
    agent.render();

}

var count = 0;

function mousePressed(){
	if(count<6){
		push();
		lSystem.generateLsystem();
		agent.setTodo(lSystem.getAxiom());
		agent.modifyLength(0.3);
		pop();
		count++;
	}
}