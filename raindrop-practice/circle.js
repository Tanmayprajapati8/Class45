class CircleDrop{
    constructor(){
        var options={
            restitution:0.2,
        }
        this.body=Bodies.circle(300,0,10,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        var pos=this.body.position;
        ellipse(pos.x,pos.y,10,10);
    }
}