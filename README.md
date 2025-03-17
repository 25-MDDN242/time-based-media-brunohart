[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/M3ipj5sV)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18529437&assignment_repo_type=AssignmentRepo)
## MDDN 242 Project 1: Time-based Media  

### THIS IS YOUR README

Update this file as you go along to record your progress.
# DAY ONE REALLY GETTING STRAPPED:
 Just opened the Project and really started trying to figure out what the hell is going on in the code base and generally -> life philosphy is just to keep moving forward putting one foot over the other and not looking back 

Maeda clock was a lot of fun to start getting back into the zone for coding: been trying to find my feet and flow through all the tooling again and I found this exercise was the most helpful in converying the mechanics in my head in a more elegant way. 

The Maeda Clock took inspiration from clock 2 and clock 9. I tried to figure out how to do a more gradual effect for adding a yellow dot every second and having it build up but it started getting very complicated with the framecount and going back to first year animation code and it was just getting messy so its a little jarring but the overall concept is communicated more simply in the code this way. 

Esseantially there is a circle displaying the hour, minute and second with a rotating hand around the clock like in clock 9 and the background dots correspond to the build up in seconds as more and more are generated (supposed to be in realtion to the seconds)

# Major Update on the Clock (writing this on the Clock)
There was a repivot in the change in concept after reflecting on my meeting with Phoebe. Deciding against going for a grunged out, in your face kind of aesthetic and instead going back to the direction of simplicity and great design as a communicator of function. Returning to a way of obsessing towards a more analog way of using digital technology is my underlying mantra so I got my head back in check and did some rethinking of my clock's affect and decided that pulling form my core design inspiration strings was far more condusive to a great outcome 

## THE NEW FINAL LOOK AND FEEL AIM

✅ Minimal, structured, and modular
✅ Upward-flowing bars for a modern touch
✅ Dieter Rams’ principle of ‘less but better’
✅ A soft, visually appealing contrast

## 🔹 Clock Hands:
	•	Made thinner and precise, with a Braun-style red second hand
	•	Centered alignment for a timeless aesthetic

## 🔹 Seconds Bars:
	•	Flow upwards instead of down
	•	Added lerp() for a smooth brightness fade-in effect

## 🔹 Minimal Typography:
	•	Subtle hour markers (12, 3, 6, 9) in gray
	•	Aligned properly using a modular grid

## 🔹 Color & Contrast Adjustments:
	•	Dark gray (30,30,30) instead of harsh black
	•	Soft white glow instead of pure white for a premium feel
	•	Background set to 245 (light gray) for a refined Apple/Braun-inspired look

I have the clock now in a state that i think looks well designed and in line with my aestehtic choices. I am currently troubleshooting how I get the red seconds clock to tick in a clockwise direction and will be working on adding a simple and elegant alarm function as well as a simple system for changing the color scheme to reflect the time of day. 
