var mic;

var snowflakes = []


function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
  

  startingColor = color('#8a5f3c')
  endingColor = color('#c15f77')
}


function draw() {
  background("#c4e6ff");

  var myVolume = mic.getLevel();
  
  
  if (myVolume > 0.15){
    background('#3ab34c');
  }else{
    background('#63ca72');
    //fill(255);
    //ellipse(random(0,width),random(0,height),6,6);
  }
  
  
  //text
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(24);
  fill(255);
  noStroke();
  text("Merry Chrismas",width/2,height*4/5);
  
  
  //for(var a = 0; a < width; a += 20){
    
  var ellipseColor = lerpColor (startingColor,endingColor,myVolume*5); 
  var myHeight = map(myVolume, 0, 1, 0, -50);
  var mySize = map(myVolume,0,1,5,20);
  var mySizebeard = map(myVolume,0,1,120,200);
  
  
  
  
  push();
  translate(width/2,height/2);
  
  //beard
  fill(255);
  noStroke();
  ellipse(0,55,mySizebeard,mySizebeard);
  //hatred
  fill("#ee4753");
  noStroke();
  ellipse(0,-23,82,82);
  //earleft
  fill("#dccac3");
  noStroke();
  ellipse(-40,0,12,12);
  //earright
  fill("#dccac3");
  noStroke();
  ellipse(40,0,12,12);
  //hatline
  stroke("#d2d3d4");
  strokeWeight(12);  
  line(-40,-16,40,-16); 
  //facewhite
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect(0,10,80,40);
  //facegray
  fill("#dccac3");
  noStroke();
  rectMode(CENTER);
  rect(0,10,70,30);
  //eyes
  stroke("#6c4526");
  strokeWeight(3);  
  line(-22,myHeight,-6,myHeight); 
  line(22,myHeight,6,myHeight); 
  //eyes
  fill(0);
  noStroke();
  ellipse(-14,10,mySize,mySize);
  ellipse(14,10,mySize,mySize);
  //mouth
  var mySizemouth = map(myVolume,0,1,13,46);
  var mySizemouth2 = map(myVolume,0,1,20,46);

  fill("#ee4753");
  noStroke();
  ellipse(0,26,mySizemouth2,mySizemouth);
  pop();
  
  //colorline1
  var lineHeight = map(myVolume,0,1,8,80);
  
  push();
  translate(width/4,height*2/5);
  stroke("#d99f43");
  strokeWeight(2);
  line(0,5,0,lineHeight);
  
  rotate(PI/3.0);
  line(0,5,0,lineHeight);

  rotate(PI/3.0);
  line(0,5,0,lineHeight);
  
  rotate(PI/3.0);
  line(0,5,0,lineHeight);

  rotate(PI/3.0);
  line(0,5,0,lineHeight);

  rotate(PI/3.0);
  line(0,5,0,lineHeight);  
  pop();
  
  //colorline2
  var lineHeight2 = map(myVolume,0,1,12,80);
  
  push();
  translate(width*7/9,height*2/9);
  stroke("#d99f43");
  strokeWeight(2);
  line(0,5,0,lineHeight2);
  
  rotate(PI/3.0);
  line(0,5,0,lineHeight2);

  rotate(PI/3.0);
  line(0,5,0,lineHeight2);
  
  rotate(PI/3.0);
  line(0,5,0,lineHeight2);

  rotate(PI/3.0);
  line(0,5,0,lineHeight2);

  rotate(PI/3.0);
  line(0,5,0,lineHeight2);  
  pop();
   //colorline3
  var lineHeight3 = map(myVolume,0,1,10,100);
  push();
  translate(width*4/6,height*5/7);
  stroke("#d99f43");
  strokeWeight(2);
  line(0,5,0,lineHeight3);
  
  rotate(PI/3.0);
  line(0,5,0,lineHeight3);

  rotate(PI/3.0);
  line(0,5,0,lineHeight3);
  
  rotate(PI/3.0);
  line(0,5,0,lineHeight3);

  rotate(PI/3.0);
  line(0,5,0,lineHeight3);

  rotate(PI/3.0);
  line(0,5,0,lineHeight3);  
  pop();
  
  
  var x = random() * width;
  var y = random() * height;
  var radius = random() * 10;
  fill(255);
  ellipse(x,y,radius);
  
  
   //SNOWFLAKES
  if(true){
    var amount= map(myVolume,0,1,0,30);
    for(i=1; i <= amount; i++) {
      var obj = {
        x: random(0,1),
        y: random(0,-height/10),
        size: random(1, amount+2)
      }
      //add snowflake to the array of snowflakes
      snowflakes.push(obj);
    }
  }
  
  
  for(var i=0; i< snowflakes.length; i++) {
    var fallingSpeed = 1;
    
     // Increase the single snowflake vertical position
    snowflakes[i].y += fallingSpeed + snowflakes[i].y*0.006; // the last piece needs to simulate gravity
    
    // Create a new ellipse using the x and y properties of the snowflake object
    fill(235,235,188)
    noStroke();
    fill(255);
    ellipse(snowflakes[i].x*width, snowflakes[i].y, snowflakes[i].size);
  }
  
  // Ideally at the end of the sketch:
  // remove elements from array when they go out of the window
  // (not a minimum requirement, just useful for better performances)
  for (var i=snowflakes.length-1; i>= 0; i--){
    if (snowflakes[i].y > height){
      snowflakes.splice(i,1);
    }
  }
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
