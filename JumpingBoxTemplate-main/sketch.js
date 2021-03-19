var canvas;
var music;
var block 
var block1
var block2
var block3
var ball
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block=createSprite(0,580,360,30)
block.shapeColor="blue"
block1=createSprite(295,580,360,30)
block1.shapeColor="yellow"
block2=createSprite(515,580,360,30)
block2.shapeColur="red"
block3=createSprite(740,580,360,30)
block3.shapeColor="green"
ball=createSprite(random(20,750),100,40,40)
ball.velocityX=4
ball.velocityY=9

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges)

if(block.isTouching(ball) && ball.bounceOff(block)){
    ball.shapeColor=rgb(0,0,225);
music.play();
}

if(block1.isTouching(ball) && ball.bounceOff(block1)){
    ball.shapeColor=rgb(225,128,0);
music.stop();
}
if(block2.isTouching(ball) && ball.bounceOff(block2)){
    ball.shapeColor=rgb(153,0,76);
}

if(block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor=rgb(0,100,0);
}
drawSprites()


    //add condition to check if box touching surface and make it box
}
