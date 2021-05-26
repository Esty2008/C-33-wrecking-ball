const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World ;
const Constraint = Matter.Constraint;

var myEngine;
var myWorld
var ground
var box1,box2,box3,box4,box5,box6,box7,box8

function setup(){

    createCanvas(800,800)

    myEngine = Engine.create();  
    myWorld = myEngine.world;  

    ground = new Ground(0,780,30,800)
    box1 = new Box(500,700,50,50)
    box2 = new Box(500,650,50,50)
    box3 = new Box(500,600,50,50)
    box4 = new Box(500,550,50,50)
    box5 = new Box(700,700,50,50)
    box6 = new Box(700,650,50,50)
    box7 = new Box(700,600,50,50)
    box8 = new Box(700,550,50,50)
}

function draw(){
    background('grey');
    Engine.update(myEngine);
    
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
}