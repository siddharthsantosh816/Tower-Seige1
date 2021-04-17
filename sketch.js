
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box, ground1, ground2, ground3;
var hexagon, slingshot;
var release =0;

function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
		
	//Create the Bodies Here.
	// first pyramid
	ground1 = new Ground(600,450,330,20);
	ground2 = new Ground(900,250,250,20);
	ground3 = new Ground(width/2,height,width,20);
	hexagon = new Hexagon(150,200,50,50);
	slingshot = new Slingshot(hexagon.body,{x:150,y:300});
	for (var x = 0; x < 7; x++){
		box[x]=new Box(480+x*40,420,40,40);
	}	
	for (var x = 7; x < 12; x++){
		box[x]=new Box(520+(x-7)*40,380,40,40);
	}
	for (var x = 12; x < 15; x++){
		box[x]=new Box(560+(x-12)*40,340,40,40);
	}
	box[15]=new Box(600,300,40,40);
	
	// second pyramid
	for (var x = 16; x < 21; x++){
		box[x]=new Box(820+(x-16)*40,220,40,40);
	}
for (var x = 21; x < 24; x++){
		box[x]=new Box(860+(x-21)*40,180,40,40);
	}
	box[24]=new Box(900,140,40,40);
	
	Engine.run(engine);	
}

function draw() {
	background(0,200,0);
	//fill("white");
	ground1.display();
	ground2.display();
	ground3.display();
	hexagon.display();
	slingshot.display();
	for (var x = 0; x < 7; x++){
		fill("blue")
		box[x].display();
	}
	for (var x = 7; x < 12; x++){
		fill("green")
		box[x].display();
	}
	for (var x = 12; x < 15; x++){
		fill("purple")
		box[x].display();
	}
	fill("grey")
	box[15].display();

	for (var x = 16; x < 21; x++){
		fill("yellow")
		box[x].display();
	}
	for (var x = 21; x < 24; x++){
		fill("pink")
		box[x].display();
	}
	fill("red")
	box[24].display();
	drawSprites();
 }
 
 function mouseDragged(){
	if (release === 0) {
		Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
	}
 }
 
 function mouseReleased(){
	slingshot.fly();
	release = 1;
  }
  function keyPressed(){
    if(keyCode===32){
    	Matter.Body.setPosition(hexagon.body, {x:150, y:200});
		slingshot.attach(hexagon.body);
     	release=0;
    }
}