const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render=Matter.Render;

var world,engine;
var man;
var drop;

function setup() {
    createCanvas(800, 800);
    engine=Engine.create();
    world=engine.world;

    man=new Man();
    
    drop=new CircleDrop();
    var render=Render.create({
        element:document.body,
        engine:engine,
        options:{
            width:800,
            height:800,
            wireframes:true,
            background:"red",
            wireframeBackground:"red"

        }
    })
    Render.run(render);
    
}
function draw() {
    background(0);
    Engine.update(engine);
    man.display();
    drop.display();
}

