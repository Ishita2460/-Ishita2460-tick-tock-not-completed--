
var hr , min, sc ;



function setup() {
  createCanvas(720, 400);
  noStroke();
}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
  scAngle = map(sc , 0 , 60 , 0, 360);

    hr = hour()
    mn = minute()
    sc = second()

    

    angleMode(DEGREES); // Change the mode to DEGREES
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7)
    line(0,0,100,0) // Larger rectangle is rotating in degrees
    pop();
  
  drawSprites();
  }