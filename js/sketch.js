var canvas;
function setup() {
    canvas=createCanvas(windowWidth, 300);
    noCursor();
    
  }
  
  function draw() {
    background(220,30);
    fill(220);
    textSize(32);
    
    // rect(random(width),random(height),10,10);
    fill(255,255,0);
    text('Design', random(width), random(height));
    console.log(1, 2, 3); // prints [Embedded page] 1

  }