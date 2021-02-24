class Man{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(300,500,50,options);
        this.image=loadImage("Walking Frame/walking_1.png");

        World.add(world,this.body);
    }
    display(){
        fill("blue");
        imageMode(CENTER);
        var pos=this.body.position;
        image(this.image,pos.x,pos.y+100,400,400);
    }
}