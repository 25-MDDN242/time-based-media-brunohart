// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {

  angleMode(DEGREES);

  background(255);

  // Get the current time
  let H = hour();
  let M = minute();
  let S = second();

  // Draw yellow background circles based on the current second value ---> the effect of this is that at each second that many number of yellow circles will be drawn at random but I had to slow it down a bit becuase it was lowkey overwhelming 
  for (let i = 0; i < S; i++) { // Number of circles based on the current second
    let x = random(width);
    let y = random(height);
    fill(255, 255, 0, 120); // Yellow with low transparency
    noStroke();
    ellipse(x, y, 30, 30);  // Draw background circle
  }

  // Draw the main circles (Time display)
  fill(200); 
  ellipse(width / 4, height / 2, 100, 100); // Hours
  ellipse(width / 2, height / 2, 100, 100); // Minutes
  ellipse(3 * width / 4, height / 2, 100, 100); // Seconds

  // Display the time inside circles
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(40);
  text(H, width / 4, height / 2);
  text(M, width / 2, height / 2);
  text(S, 3 * width / 4, height / 2);

  // Convert time to degrees for rotating hands
  let secondsToDegrees = map(S, 0, 59, 0, 360);
  let minutesToDegrees = map(M, 0, 59, 0, 360);

  // Draw rotating second hand
  push();
  translate(3 * width / 4, height / 2);
  rotate(secondsToDegrees);
  fill(255, 0, 0); // Red for visibility
  rect(-5, -50, 10, 50);
  pop();

  // Draw rotating minute hand
  push();
  translate(width / 2, height / 2);
  rotate(minutesToDegrees);
  fill(0, 0, 255); // Blue for visibility
  rect(-5, -40, 10, 40);
  pop();
}



