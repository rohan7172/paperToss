class paper {
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.radius=radius;
        this.x=x;
        this.y=y;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(x,y,(radius-50)/2,options);
      World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.radius)
        pop();
    }
}