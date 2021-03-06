class Snow
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:0.1
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("snow5.webp");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var snowpos=this.body.position;		
			push()
			translate(snowpos.x, snowpos.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			pop();
			
	}

}