var canvas;
function setup() {
    canvas=createCanvas(windowWidth, 300);
    noCursor();
  }
  
  function draw() {
    background(220,30);
    fill(220);


    rect(random(width),random(height),10,10);


  }