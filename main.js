r_wrist_x=0;
r_wrist_y=0;
l_wrist_x=0;
l_wrist_y=0;
song_1="";
song_2="";
function preload() {
    song_1=loadSound("music.mp3");
    song_2=loadSound("music2.mp3");
}
function setup() {
   video=createCapture(VIDEO)
    canvas=createCanvas(600, 500);
    canvas.center();
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}
function draw() {
    image(video, 0, 0, 600, 500)
}
function play() {
    song_1.play();
}
function modelLoaded() {
    console.log("posenet is initiated");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        r_wrist_x=results[0].pose.rightWrist.x;
        console.log(r_wrist_x);
        r_wrist_y=results[0].pose.rightWrist.y;
        console.log(r_wrist_y);
        l_wrist_x=results[0].pose.leftWrist.x;
        console.log(l_wrist_x);
        l_wrist_y=results[0].pose.leftWrist.y;
        console.log(l_wrist_y);
    }
}