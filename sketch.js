const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, polygon1;
var log1, log3, log4, log5, log6;
var backgroundImg,platform;
var chain1;
var box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23;
var box24, box25, box26, box27, box28, box29, box30, box31, box32, box33, box34;
var box35, box36, box37, box38, box39;
var box41, box42, box43, box44, box45, box46, box47, box48, box49, box50, box40;
var box51, box52, box53, box54, box55, box56, box57, box58, box59, box60;
var box61, box62, box63, box64, box65, box66, box67, box68, box69, box70, box71, box72, box73, box74, box75, box76;
var box77, box78, box79, box80, box81, box82, box83, box84, box85, box86, box87, box88, box89, box90, box91, box92, box93, box94, box95, box96, box97, box98, box99, box100;
var gameState = "ONSLING";
var s;
var score = 0;

function preload(){
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    log1 = new Ground(605,367,315,15);
    log2 = new Ground(953,197,250,15);
    log3 = new Ground(600,398,1200,5);
    log4 = new Ground(1198,200,5,400);
    log5 = new Ground(3,200,5,400);
    log6 = new Ground(600,3,1200,5);

    polygon1 = new Bird(150,200);
    chain1 = new chain(polygon1.body,{x:150, y:180});
   
    box1 = new Box(480,350,20,20);
    box2 = new Box(503,350,20,20);
    box3 = new Box(526,350,20,20);
    box4 = new Box(549,350,20,20);
    box5 = new Box(572,350,20,20);
    box6 = new Box(595,350,20,20);
    box7 = new Box(618,350,20,20);
    box8 = new Box(641,350,20,20);
    box9 = new Box(664,350,20,20);
    box10 = new Box(687,350,20,20);
    box11 = new Box(710,350,20,20);
    box12 = new Box(733,350,20,20);
    box13 = new Box(850,180,20,20);
    box14 = new Box(873,180,20,20);
    box15 = new Box(896,180,20,20);
    box16 = new Box(919,180,20,20);
    box17 = new Box(942,180,20,20);
    box18 = new Box(965,180,20,20);
    box19 = new Box(988,180,20,20);
    box20 = new Box(1011,180,20,20);
    box21 = new Box(1034,180,20,20);
    box22 = new Box(1057,180,20,20);
    box23 = new Block(490,330,20,20);
    box24 = new Block(513,330,20,20);
    box25 = new Block(536,330,20,20);
    box26 = new Block(559,330,20,20);
    box27 = new Block(582,330,20,20);
    box28 = new Block(605,330,20,20);
    box29 = new Block(628,330,20,20);
    box30 = new Block(651,330,20,20);
    box31 = new Block(674,330,20,20);
    box32 = new Block(697,330,20,20);
    box33 = new Block(720,330,20,20);
    box34 = new Block(860,160,20,20);
    box35 = new Block(883,160,20,20);
    box36 = new Block(906,160,20,20);
    box37 = new Block(929,160,20,20);
    box38 = new Block(952,160,20,20);
    box39 = new Block(975,160,20,20);
    box40 = new Block(998,160,20,20);
    box41 = new Block(1021,160,20,20);
    box42 = new Block(1044,160,20,20);
    box43 = new Box(500,310,20,20); 
    box44 = new Box(523,310,20,20);
    box45 = new Box(546,310,20,20);
    box46 = new Box(569,310,20,20);
    box47 = new Box(592,310,20,20);
    box48 = new Box(615,310,20,20);
    box49 = new Box(638,310,20,20);
    box50 = new Box(661,310,20,20);
    box51 = new Box(684,310,20,20);
    box52 = new Box(707,310,20,20);
    box53 = new Box(870,140,20,20);
    box54 = new Box(893,140,20,20);
    box55 = new Box(916,140,20,20);
    box56 = new Box(939,140,20,20);
    box57 = new Box(962,140,20,20);
    box58 = new Box(985,140,20,20);
    box59 = new Box(1008,140,20,20);
    box60 = new Box(1031,140,20,20);
    box61 = new Block(510,290,20,20);
    box62 = new Block(533,290,20,20);
    box63 = new Block(556,290,20,20);
    box64 = new Block(579,290,20,20);
    box65 = new Block(602,290,20,20);
    box66 = new Block(625,290,20,20);
    box67 = new Block(648,290,20,20);
    box68 = new Block(671,290,20,20);
    box69 = new Block(694,290,20,20);
    box70 = new Block(880,120,20,20);
    box71 = new Block(903,120,20,20);
    box72 = new Block(926,120,20,20);
    box73 = new Block(949,120,20,20);
    box74 = new Block(972,120,20,20);
    box75 = new Block(995,120,20,20);
    box76 = new Block(1018,120,20,20);
    box77 = new Box(520,270,20,20);
    box78 = new Box(543,270,20,20);
    box79 = new Box(566,270,20,20);
    box80 = new Box(589,270,20,20);
    box81 = new Box(612,270,20,20);
    box82 = new Box(635,270,20,20);
    box83 = new Box(658,270,20,20);
    box84 = new Box(681,270,20,20);
    box85 = new Box(890,100,20,20);
    box86 = new Box(913,100,20,20);
    box87 = new Box(937,100,20,20);
    box88 = new Box(960,100,20,20);
    box89 = new Box(983,100,20,20);
    box90 = new Box(1006,100,20,20);
    box91 = new Block(530,250,20,20);
    box92 = new Block(553,250,20,20);
    box93 = new Block(576,250,20,20);
    box94 = new Block(599,250,20,20);
    box95 = new Block(622,250,20,20);
    box96 = new Block(645,250,20,20);
    box97 = new Block(668,250,20,20);
}
function draw(){   
     if(backgroundImg)
    background(backgroundImg);

        Engine.update(engine);
        fill("white");
        textSize(20);
    text("Score: "+score,18,23);



    log1.display();
    box97.display();
    box95.display();
    box96.display();
    box94.display();
    box93.display();
    box92.display();
    box91.display();
    box90.display();
    box89.display();
    box88.display();
    box87.display();
    box86.display();
    box85.display();
    box84.display();
    box83.display();
    box82.display();
    box81.display();
    box80.display();
    box79.display();
    box78.display();
    box77.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    polygon1.display();
    chain1.display();
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
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    box41.display();
    box42.display();
    box43.display();
    box44.display();
    box45.display();
    box46.display();
    box47.display();
    box48.display();
    box49.display();
    box50.display();
    box51.display();
    box52.display();
    box53.display();
    box54.display();
    box55.display();
    box56.display();
    box57.display();
    box58.display();
    box59.display();
    box60.display();
    box61.display();
    box62.display();
    box63.display();
    box64.display();
    box65.display();
    box66.display();
    box67.display();
    box68.display();
    box69.display();
    box70.display();
    box71.display();
    box72.display();
    box73.display();
    box74.display();
    box75.display();
    box76.display();
    getTime();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    
    box32.score();
    box33.score();
    box34.score();
    box35.score();
    box36.score();
    box37.score();
    box38.score();
    box39.score();
    box40.score();
    box41.score();
    box42.score();
    box43.score();
    box44.score();
    box45.score();
    box46.score();
    box47.score();
    box48.score();
    box49.score();
    box50.score();
    box51.score();
    box52.score();
    box53.score();
    box54.score();
    box55.score();
    box56.score();
    box57.score();
    box58.score();
    box59.score();
    box60.score();
    box61.score();
    box62.score();
    
    box63.score();
    box64.score();
    box65.score();
    box66.score();
    box67.score();
    box68.score();
    box69.score();
    box70.score();
    box71.score();
    box72.score();
    box73.score();
    box74.score();
    box75.score();
    box76.score();
    box77.score();
    box78.score();
    box79.score();
    box80.score();
    box81.score();
    box82.score();
    box83.score();
    box84.score();
    box85.score();
    box86.score();
    box87.score();
    box88.score();
    box89.score();
    box90.score();
    box91.score();
    box92.score();
    box93.score();
    box94.score();
    box95.score();
    box96.score();
    box97.score();

}

function mouseDragged(){
    if(gameState !== "LAUNCHED")
 Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    gameState = "LAUNCHED";
chain1.fly(); 
}
function keyPressed(){
    if(keyCode === 32){
        gameState = "ONSLING";
        chain1.attach(polygon1.body);
    }
}

async function getTime(){
    var xyz = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var xyzJson = await xyz.json();
    var dt = xyzJson.datetime;
    var hours = dt.slice(12,12);
    console.log(dt);
    if(hours>400 && hours<1200){
        backgroundImg= loadImage("sprites/bg.PNG");
    }
    else{
        backgroundImg= loadImage("sprites/bg2.PNG");
    }
}