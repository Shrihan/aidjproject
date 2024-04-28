
function draw(){
    image(video, 0, 0, 600, 500);
}
song="";
function preload(){
    song=loadSound("music.m3p");
}
function setup(){
    canavs=createCanvas(600, 500);
    canavs.center();
    video=createCanas(VIDEO);
    video.hide();
}
function play(){
    song.play();
}

