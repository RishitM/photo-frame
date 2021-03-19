function preload(){

}
function setup(){
canvas=createCanvas(800,500);
video=createCapture(VIDEO);
video.hide()

}
function draw(){
image(video,50,50,700,400);
fill(0, 221, 255);
rect(0, 50, 60, 400);
rect(750, 50, 60, 400,);
rect(0, 0, 800, 50,);
rect(0,450, 800,50,);
}
function take_snapshot(){
   save("your photo frame!!!!!!") 
}