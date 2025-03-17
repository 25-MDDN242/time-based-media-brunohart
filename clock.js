  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off

  
// I still need to add some sort of alarm functionality to this clock and a way to show am and pm in an elegant style. 

function draw_clock(obj) {

  angleMode(DEGREES);
  
    let hr = obj.hours % 12;
    let min = obj.minutes;
    let sec = obj.seconds;
  
    background(245);

    // Aesthetic second bars
    let barX = width * 0.8;
    let barY = height * 0.02;
    for (let i = 0; i < 5; i++) {
        drawSecondBars(barX + i * (width * 0.04), barY, 60, sec);
    }

    drawMinuteDots(width * 0.04, height * 0.6, 10, 14, min);

    let cx = width / 2;
    let cy = height / 2;
    let radius = 180;

    noFill();
    stroke(30);
    strokeWeight(2);
    ellipse(cx, cy, radius * 2); // Draw clock circle

    // Convert time to angles
    let hourAngle = map(hr, 0, 12, 0, 360);
    let minAngle = map(min, 0, 60, 0, 360);
    let secAngle = map(sec, 0, 60, 0, 360);
 
    // Draw hour hand
    push();
    translate(cx, cy);
    rotate(hourAngle);
    strokeWeight(4);
    line(0, 0, radius * 0.5, 0);
    pop();

    // Draw minute hand
    push();
    translate(cx, cy);
    rotate(minAngle);
    strokeWeight(2);
    line(0, 0, radius * 0.7, 0);
    pop();

    // Draw second hand (Braun-style red)
    push();
    translate(cx, cy);
    rotate(secAngle);
    stroke(220, 50, 50);
    line(0, 0, radius * 0.9, 0);
    pop();

   

    // Minimal numbers
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
    let inactiveColor = color(80);
    let activeColor = color(255);

    for (let i = 0; i < totalBars; i++) {
        let progress = (sec - i + totalBars) % totalBars / totalBars; // Creates a smooth looping effect
        let bright = lerpColor(inactiveColor, activeColor, constrain(progress * 2, 0, 1));
        
        fill(bright);
        noStroke();
        rect(x, y + (totalBars - i - 1) * barHeight, 10, barHeight - 2);
    }
}

// Minute Dots
function drawMinuteDots(x, y, cols, rows, min) {
    let spacing = 20;
    let count = 0;
    let activeColor = color("#AAB7BF");
    let inactiveColor = color(220);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let dotColor = count < min ? activeColor : inactiveColor;
            
            fill(dotColor);
            noStroke();
            ellipse(x + j * spacing, y + i * spacing, 8);
            
            count++;
            if (count >= 60) return;
        }
    }
}







