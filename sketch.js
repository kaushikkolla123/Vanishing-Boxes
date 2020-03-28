	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Constraint = Matter.Constraint;

	var engine;
	var world;
	var ground;
	var ground2;
	var ground3;
	var rectangle;
	var ball;
	var box1;
	var box2;
	var box3;
	var box4;
	var box5;
	var box6;
	var box7;
	var box8;
	var box9;
	var box10;
	var box11;
	var box12;

function setup() {
  createCanvas(1000,700);
		engine = Engine.create();
		world = Engine.world;

		     var ground = Bodies.rectangle(600,height,1200,20);
		     ground.scale = 2;
		     ground.shapeColor = "red";
    
	var	ground2 = Bodies.rectangle(875,180,100,10,ground2_options);
		ground2.scale = 2.5;
		ground2.shapeColor = "red";
		

		var ground3 = Bodies.rectangle(875,330,100,10,ground3_options);
		ground3.scale = 2.5;
		ground3.shapeColor = "red";
		

		var rectangle = Bodies.rectangle(10,560,180,30);
		rectangle.scale = 3;
		rectangle.stroke = "red";
		
		

		var line = Bodies.rectangle(70,470,20,90);
		line.scale = 1;
		line.shapeColor = "yellow";
		
		var ellipse = Bodies.rectangle(70,420,55,55);
		ellipse.shapeColor = "green";
		

		var box1 = Bodies.rectangle(875,150,50,30);
		box.shapeColor = "light blue";
		

		var box2 = Bodies.rectangle(820,150,50,30);
		box.shapeColor = "light blue";
		

		var box3 = Bodies.rectangle(930,150,50,30);
		box.shapeColor = "light blue";
		

		var box4 = Bodies.rectangle(850,117,50,30);
		box.shapeColor = "green";
		

		var box5= Bodies.rectangle(905,117,50,30);
		box.shapeColor = "green";
		

		var box6= Bodies.rectangle(877.5,85,50,30);
		box.shapeColor= "red";	

		var box7 = Bodies.rectangle(820,300,50,30);
		box2.shapeColor = "white";

		var box8 = Bodies.rectangle(875,300,50,30);
		box2.shapeColor = "white"; 		

		 var box9 = Bodies.rectangle(930,300,50,30);
		box2.shapeColor = "white";
		
		var box10= Bodies.rectangle(850,267,50,30);
		box2.shapeColor = "green";
	
		var box11 = Bodies.rectangle(905,267,50,30);
		box2.shapeColor = "green";
		
		var box12 = Bodies.rectangle(877.5,235,50,30);
		box2.shapeColor = "red";
		}
		var options = {}

		var ground1_options = {
			isStatic:true,
		}

		var ground2_options = {
			isStatic:true,
		}
		var ground3_options = {
		    isStatic:true,
		}

		function diplay(){
		ground1.display();
		ground2.display();
		ground3.display();
		rectangle.display();
		line.display();
		ellipse.display();
		box1.display();
		box2.display();
		box3.display();
		box4.display();
		box5.display();
		box6.display();
		box7.display();
		box8.display();
		box9.display();
		box10.display();
		box11.display();
		box12.display();
		}

		function draw() {
		  background("black");  
		  drawSprites();
			}
		  function mouseDreagged(){
		  	Matter.Body.setPosition(rectangle.body,{x:mouseX , y :mouseY});
		  }
		function mouseReleased(){
			rectangle.fly();
		}
		function keyPressed(){
			if(keyCode === 32){
			}
		}