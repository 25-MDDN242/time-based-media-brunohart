 let prevHours = -1;
  let prevMinutes = -1;
  let flipProgressH = 0;
  let flipProgressM = 0;
  let flippingH = false;
  let flippingM = false;
  let flipSpeed = 0.08;
  let targetProgress = 1;
  let bgColor; // Background color for AM/PM of the clock

  // **** For this code to work WEBGL must be enabled as a third paramter in the runner.js file ** ie) after  var main_canvas = createCanvas(canvasWidth, canvasHeight, WEBGL);

  // ** ALSO IMPORTANT TO NOTE IS UNCOMMENTING textFont(myFont); // Set the loaded font -> only needed for WEBGL in the runner.js file
  
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