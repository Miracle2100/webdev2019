var xPos = 0;
var yPos = 0;
var xBuildings = 0;
var yBuildings = 250;
var widthBuildings = 50;
var xLift = 229;
var yLift = 165;

var z = 143;
var y = 100;

var xIs = xPos;
var yIs = yPos;
var x2Is = xPos;
var y2Is = yPos;
var x3Is = xPos;
var y3Is = yPos;
var x4Is = xPos;
var y4Is = yPos;
var x5Is = xPos;
var y5Is = yPos;
var isWidth = 6;
var isHeight = 6;
var is2Width = 5;
var is2Height = 5;
var is3Width = 4;
var is3Height = 4;
var is4Width = 3;
var is4Height = 3;
var is5Width = 2;
var is5Height = 2;
draw = function() {
    
 
    background(25, 25, 77);
    stroke(255, 255, 255);
    fill(166, 255, 248);
    ellipse(xPos, yPos, 10, 10);
    xPos += 2;
    yPos++;
    
    ellipse(xIs, yIs, isWidth, isHeight);
    ellipse(x2Is, y2Is, is2Width, is2Height);
    ellipse(x3Is, y3Is, is3Width, is3Height);

    ellipse(x4Is, y4Is, is4Width, is4Height);

    ellipse(x5Is, y5Is, is5Width, is5Height);

    xIs--;
    yIs += 0.9;
    isWidth *= 0.99;
    isHeight *= 0.99;
    x2Is -= 0.8;
    y2Is += 0.8;
    is2Width *= 0.99;
    is2Height *= 0.99;
    x3Is--;
    y3Is += 0.7;
    is3Width *= 0.99;
    is3Height *= 0.99;
    x4Is--;
    y4Is += 0.6;
    is4Width *= 0.99;
    is4Height *= 0.99;
    x5Is--;
    y5Is += 0.5;
    is5Width *= 0.99;
    is5Height *= 0.99;
    if(yPos > 44 && yPos < 46) {
        xIs = xPos;
        yIs = yPos;
        isWidth = 6;
        isHeight = 6;
    }
    
    if(yPos > 46 && yPos < 54) {
        x2Is = xPos;
        y2Is = yPos;
        is2Width = 5;
        is2Height = 5;
    }
    
      if(yPos > 54 && yPos < 60) {
        x3Is = xPos;
        y3Is = yPos;
        is3Width = 4;
        is3Height = 4;
    }
    
      if(yPos > 60 && yPos < 70 ) {
        x4Is = xPos;
        y4Is = yPos;
        is4Width = 3;
        is4Height = 3;
    }
    
      if(yPos > 74 && yPos < 80) {
        x5Is = xPos;
        y5Is = yPos;
        is5Width = 2;
        is5Height = 2;
    }
    
    if(xPos > 500) {
        xPos = 0;
        yPos = 0;
        
    }
     
    // 1st house
    fill(15, 14, 14); 
    stroke(5, 5, 5);
    rect(xBuildings, yBuildings, widthBuildings, 500); 
    //windows
    fill(255, 234, 0);
    rect(xBuildings + 6, yBuildings + 10, 15, 15);
    rect(xBuildings + 30, yBuildings + 10, 15, 15);
    rect(xBuildings + 30, yBuildings + 31, 15, 15);
    rect(xBuildings + 6, yBuildings + 64, 15, 15);
    rect(xBuildings + 6, yBuildings + 92, 15, 15);


    // 2nd house
    fill(15, 14, 14);
    rect(xBuildings + 50, yBuildings - 30, widthBuildings + 10, 300); //x pos of Building: 50 (xBuildings) + 50 (widthBuildings of previous Building)
    
    // windows
       fill(255, 234, 0);
    rect(xBuildings + 87, yBuildings + 10, 15, 15);
    rect(xBuildings + 58, yBuildings + 70, 15, 15);
    rect(xBuildings + 59, yBuildings + -20, 15, 15);
    
    // 3rd house
     fill(15, 14, 14);
    rect(xBuildings + 110, yBuildings - 15, widthBuildings + 50, 500);// x pos of Building: 50 + 60
    
    // windows
    fill(255, 234, 0);
    rect(xBuildings + 186, yBuildings + 10, 15, 15);
    rect(xBuildings + 160, yBuildings + 10, 15, 15);
    rect(xBuildings + 160, yBuildings + 35, 15, 15);
    rect(xBuildings + 186, yBuildings + 60, 15, 15);
    rect(xBuildings + 160, yBuildings + 85, 15, 15);
    
    // 4th house
    fill(7, 6, 28);
    rect(xBuildings + 210, yBuildings - 100, widthBuildings + 20, 500);// x pos of Building: 110 + 100
    
    // lift 
    fill(15, 15, 15);
    stroke(255, 0, 0);
    rect(xBuildings + 229, yBuildings - 89, 20, 500);
    fill(0, 14, 43);
    rect(xLift, yLift, 20, 20);
    rect(xLift, yLift, 10, 20);
    
    
    
    
    
    if(yLift > 380){
        yLift = 165;
    }
    else {
        yLift += 0.5;
    }
    fill(8, 16, 36);
    
    
    triangle(xBuildings + 211, yBuildings - 100, 281, 150, 248, 90);
    stroke(71, 67, 67);
    strokeWeight(4);
    line(248, 34, 248, 91);
    stroke(0, 0, 0);
    strokeWeight(1);
    
    // 5th house
    fill(15, 14, 14);
    rect(xBuildings + 280, yBuildings, widthBuildings + 15, 500);
    
    // windows
    fill(255, 234, 0);
    rect(xBuildings + 325, yBuildings + 10, 15, 15);
    rect(xBuildings + 258, yBuildings - 34, 15, 15);
    rect(xBuildings + 256, yBuildings + 35, 15, 15);
    rect(xBuildings + 325, yBuildings + 35, 15, 15);
    rect(xBuildings + 285, yBuildings + 35, 33, 15);
    rect(xBuildings + 285, yBuildings + 10, 33, 15);
    
    // 6th house
    fill(15, 14, 14);
    rect(xBuildings + 345, yBuildings - 30, widthBuildings + 4, 500);
    
    // windows
    fill(255, 234, 0);
    rect(xBuildings + 378, yBuildings + -22, 15, 15);
    rect(xBuildings + 351, yBuildings + 60, 15, 15);
    rect(xBuildings + 378, yBuildings + 100, 15, 15);
    
    // Clock
    fill(0, 0, 0);
    ellipse(247, 132, 30, 27 );
    fill(0, 255, 34);
    
    arc(247, 132, 29 , 24 , z, z);
    
    fill(166, 3, 3);
    arc(247, 132, 29 , 24 , y , y);
    z += 0.2;
    y += 1;
    if(z === 300) {
        z = 1;
    }
    if(y === 300) {
        y = 1;
    }
    
    
   
};
    
  


