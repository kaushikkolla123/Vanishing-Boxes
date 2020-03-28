class Box extends BaseClass {
constructor(x,y){
	super(x,y,50,50)
	this.Visblity = 255;

	}
}

function display(){
	console.log(this.body.speed);
	if(this.body.speed < 5){
		display();
	}

else{
World.remove(world,this.body);
push();
this.Visiblity - this.Visiblity-10;
tint(255, this.Visiblity);
pop();
}

}
