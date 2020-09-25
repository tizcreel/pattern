let size; 
let spread; 

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER); 
  angleMode (DEGREES);
  
  size =80; 
  spread=100;
  
}

function draw() {
  background(255);
  strokeWeight(0);
  
  fill(0);
  
  
  //with push and pop 
  for (j=0; j<height+spread; j+=spread){ 
    for(i=0; i<width+spread; i+=spread){
    push();
    translate (i, j); 
    rotate (frameCount);
    square (0,0, size);
    pop();
  }
  }
  
  
}