  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  
function draw_clock(obj) {

  let hr = obj.hours % 12;
  let min = obj.minutes;
  let sec = obj.seconds;

  background(245);

  //4 of them are purely an aesthetic choice to make it feel more like an analog machine (for some reason it just felt better this way)
  drawSecondBars(width * 0.8, height * 0.02 , 60, sec);
  drawSecondBars(width * 0.84, height * 0.02 , 60, sec);
  drawSecondBars(width * 0.88, height * 0.02 , 60, sec);
  drawSecondBars(width * 0.92, height * 0.02 , 60, sec);
  drawSecondBars(width * 0.96, height * 0.02 , 60, sec);

  drawMinuteDots(width * 0.04, height * 0.6, 10, 14, min); // I cant lie getting to these numbers was not a precise science but much more of a plug and play and port and go-live to see what was most effective aesethetically

  let cx = width / 2; //just made it easier for calculations down the line
  let cy = height / 2; //as above
  
  let radius = 180; // Keeping it proportionate
  
  noFill();
  stroke(30); // Dark gray for a softer contrast

  // Draw clock circle
  strokeWeight(2);
  ellipse(cx, cy, radius * 2);

  // Hour, minute, second hands - thin, precise
  strokeWeight(4);
  let hourAngle = map(hr, 0, 12, 0, 360);
  let minAngle = map(min, 0, 60, 0, 360);
  let secAngle = map(sec, 0, 60, 0, 360);

  push()
  line(cx, cy, cx + cos(hourAngle) * radius * 0.5, cy + sin(hourAngle) * radius * 0.5);
  rotate(minAngle);
  pop()

  strokeWeight(2);
  line(cx, cy, cx + cos(minAngle) * radius * 0.7, cy + sin(minAngle) * radius * 0.7);
  stroke(220, 50, 50); // Red for the second hand (Braun-inspired)
  line(cx, cy, cx + cos(secAngle) * radius * 0.9, cy + sin(secAngle) * radius * 0.9);

  // Minimal numbers (optional)
  textAlign(CENTER, CENTER);
  textSize(14);
  fill(100);
  noStroke();
  text("12", cx, cy - radius + 15);
  text("3", cx + radius - 15, cy);
  text("6", cx, cy + radius - 15);
  text("9", cx - radius + 15, cy);

}

// Second Bars
function drawSecondBars(x, y, totalBars, sec) {
  let barHeight = 8;
  for (let i = 0; i < totalBars; i++) {
    let bright = i < sec ? 255 : 100;
    fill(bright);
    noStroke();
    rect(x, y + (totalBars - i - 1) * barHeight, 10, barHeight - 2);
  }
}

// Minute Dots
function drawMinuteDots(x, y, cols, rows, min) {
  let spacing = 20;
  let count = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let bright = count < min ? 255 : 100; 
      fill(bright);
      noStroke();
      ellipse(x + j * spacing, y + i * spacing, 8);
      count++;
      if (count >= 60) return;
    }
  }
}

// OLD CLOCK DESIGN AND PIECES I PULLED INTO NEW ONE

// function draw_clock(obj) {
//   background(20); // Dark theme for contrast



//   drawAnalogClock(width * 0.3, height * 0.3, 100, hr, min);
  
 
// }

// // Analog Clock
// function drawAnalogClock(x, y, size, hr, min) {
//   push();
//   translate(x, y);
//   fill(255);
//   ellipse(0, 0, size * 2);

//   let angleMin = map(min, 0, 60, 0, TWO_PI) - HALF_PI;
//   let angleHr = map(hr + min / 60, 0, 12, 0, TWO_PI) - HALF_PI;

//   stroke(0);
//   strokeWeight(4);
//   line(0, 0, cos(angleHr) * size * 0.5, sin(angleHr) * size * 0.5);

//   strokeWeight(2);
//   line(0, 0, cos(angleMin) * size * 0.8, sin(angleMin) * size * 0.8);
//   pop();
// }







