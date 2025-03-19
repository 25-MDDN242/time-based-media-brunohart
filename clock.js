  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off


  let prevHours = -1;
  let prevMinutes = -1;
  let flipProgressH = 0;
  let flipProgressM = 0;
  let flippingH = false;
  let flippingM = false;
  let flipSpeed = 0.08;
  let targetProgress = 1;
  let bgColor; // Background color for AM/PM of the clock
  
  function draw_clock(obj) {
    
      let hours = obj.hours; // Get live time
      let minutes = obj.minutes; 
  
      // Set background color based on AM/PM
      bgColor = (hours < 12) ? color("#E15E3E") : color("#315B7B");
  
      background(245);
  
      // Detect time change and animate separately for hours and minutes
      if (hours !== prevHours) {
          flippingH = true;
          flipProgressH = 0; // Reset animation
          prevHours = hours;
      }
  
      if (minutes !== prevMinutes) {
          flippingM = true;
          flipProgressM = 0; // Reset animation
          prevMinutes = minutes;
      }
  
      // Animate each side separately
      if (flippingH) {
          flipProgressH = lerp(flipProgressH, targetProgress, flipSpeed);
          if (abs(flipProgressH - targetProgress) < 0.01) {
              flipProgressH = 1;
              flippingH = false;
          }
      }
  
      if (flippingM) {
          flipProgressM = lerp(flipProgressM, targetProgress, flipSpeed);
          if (abs(flipProgressM - targetProgress) < 0.01) {
              flipProgressM = 1;
              flippingM = false;
          }
      }
  
      drawFlipClock(width * 0.1, height * 0.1, prevHours, prevMinutes, hours, minutes);
  }
  
  // 🕰 Draws Flip Clock Digits
  function drawFlipClock(x, y, oldH, oldM, newH, newM) {
      let digitWidth = 50;
      let digitHeight = 70;
      let spacing = 5;
  
      let oldTime = [
          Math.floor(oldH / 10), oldH % 10, ":", 
          Math.floor(oldM / 10), oldM % 10
      ];
      let newTime = [
          Math.floor(newH / 10), newH % 10, ":", 
          Math.floor(newM / 10), newM % 10
      ];
  
      console.log("Old Time:", oldTime, "New Time:", newTime); // Debugging Output
  
      for (let i = 0; i < newTime.length; i++) {
          let offsetX = x + i * (digitWidth + spacing);
  
          if (newTime[i] === ":") {
              fill(50);
              noStroke();
              ellipse(offsetX + 5, y + digitHeight / 3, 6);
              ellipse(offsetX + 5, y + (2 * digitHeight) / 3, 6);
          } else {
              let digitFlipProgress = (i < 2) ? flipProgressH : flipProgressM;
              drawFlipDigit(offsetX, y, digitWidth, digitHeight, oldTime[i], newTime[i], digitFlipProgress);
          }
      }
  }
  
  // 🔄 Draws Individual Flip Digit (Fixed Flip Effect)
  function drawFlipDigit(x, y, w, h, oldDigit, newDigit, flipProgress) {
      textFont(myFont);
      textSize(40);
      textAlign(CENTER, CENTER);
  
      let cornerRadius = 8;
      let textColor = color(255);
      let flipColor = lerpColor(bgColor, color(50), flipProgress); // Use bgColor based on AM/PM
  
      console.log("Drawing:", oldDigit, "to", newDigit); // Debugging Output
  
      // Bottom Half (New Digit)
      fill(bgColor);
      stroke(50);
      rect(x, y + h / 2, w, h / 2, 0, 0, cornerRadius, cornerRadius);
      fill(textColor);
      textSize(40);
      textAlign(CENTER, CENTER);
      text(newDigit, x + w / 2, y + (3 * h) / 4 - 5);
  
      // Top Half (Old Digit)
      fill(bgColor);
      rect(x, y, w, h / 2, cornerRadius, cornerRadius, 0, 0);
      fill(textColor);
      text(oldDigit, x + w / 2, y + h / 4 - 5);
  
      // Flipping Effect
      push();
      translate(x + w / 2, y + h / 2);
      rotateX(flipProgress * PI);
      fill(flipColor);
      rect(-w / 2, -h / 2, w, h / 2, cornerRadius, cornerRadius, 0, 0);
      fill(textColor);
      text(oldDigit, 0, -h / 4 + 5);
      pop();
  }



//***** MY ACTUAL CLOCK **** */
// function draw_clock(obj) {

//   angleMode(DEGREES);
  
//     let hr = obj.hours % 12;
//     let min = obj.minutes;
//     let sec = obj.seconds;
//     let millis = obj.millis;
//     let exactSeconds = sec + millis / 1000.0;
//     let alarm = obj.seconds_until_alarm

//     background(245);

//     // Aesthetic second bars
//     let barX = width * 0.8;
//     let barY = height * 0.02;
//     for (let i = 0; i < 5; i++) {
//         drawSecondBars(barX + i * (width * 0.04), barY, 60, sec);
//     }

//     drawMinuteDots(width * 0.04, height * 0.6, 10, 14, min);

//     let cx = width / 2;
//     let cy = height / 2;
//     let radius = 180;

//     noFill();
//     stroke(30);
//     strokeWeight(2);
//     ellipse(cx, cy, radius * 2); // Draw clock circle

//     // Convert time to angles
//     let hourAngle = map(hr, 0, 12, 0, 360);
//     let minAngle = map(min, 0, 60, 0, 360);
//     let secAngle = map(sec, 0, 60, 0, 360);
 
//     // Draw hour hand
//     push();
//     translate(cx, cy);
//     rotate(hourAngle);
//     strokeWeight(4);
//     line(0, 0, radius * 0.5, 0);
//     pop();

//     // Draw minute hand
//     push();
//     translate(cx, cy);
//     rotate(minAngle);
//     strokeWeight(2);
//     line(0, 0, radius * 0.7, 0);
//     pop();

//     // Draw second hand (Braun-style red)
//     push();
//     translate(cx, cy);
//     rotate(secAngle);
//     stroke(220, 50, 50);
//     line(0, 0, radius * 0.9, 0);
//     pop();

   

//     // Minimal numbers
//     textAlign(CENTER, CENTER);
//     textSize(14);
//     fill(100);
//     noStroke();
//     text("12", cx, cy - radius + 15);
//     text("3", cx + radius - 15, cy);
//     text("6", cx, cy + radius - 15);
//     text("9", cx - radius + 15, cy);

// let offState = color("#0D703F");
// let setState = color("#F1B73A");
// let alarmState = color("#E6423A");

// if (alarm < 0) {
//     fill(offState);
// } else if (alarm > 0) {
//     fill(setState);
// } else {
//     // Flashing Effect: Only show red every 30 frames (about 0.5s interval)
//     if (frameCount % 30 < 15) { 
//         fill(alarmState);
//     } else {
//         fill(245); // Match background to create "off" effect
//     }
// }

// // Alarm indicator positions
// ellipse(700, 87, 20);
// ellipse(700, 140, 20);
// ellipse(700, 250, 20);
// ellipse(700, 361, 20);
// ellipse(700, 414, 20);
// }

// // Second Bars
// function drawSecondBars(x, y, totalBars, sec) {
//     let barHeight = 8;
//     let inactiveColor = color(80);
//     let activeColor = color(255);

//     for (let i = 0; i < totalBars; i++) {
//         let progress = (sec - i + totalBars) % totalBars / totalBars; // Creates a smooth looping effect
//         let bright = lerpColor(inactiveColor, activeColor, constrain(progress * 2, 0, 1));
        
//         fill(bright);
//         noStroke();
//         rect(x, y + (totalBars - i - 1) * barHeight, 10, barHeight - 2);
//     }
// }

// // Minute Dots
// function drawMinuteDots(x, y, cols, rows, min) {
//     let spacing = 20;
//     let count = 0;
//     let activeColor = color("#AAB7BF");
//     let inactiveColor = color(220);

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             let dotColor = count < min ? activeColor : inactiveColor;
            
//             fill(dotColor);
//             noStroke();
//             ellipse(x + j * spacing, y + i * spacing, 8);
            
//             count++;
//             if (count >= 60) return;
//         }
//     }
// }










