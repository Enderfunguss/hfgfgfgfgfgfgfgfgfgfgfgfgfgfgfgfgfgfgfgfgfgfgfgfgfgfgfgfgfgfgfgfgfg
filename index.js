var noseX=0;
var noseY=0;
function preload(){
    mustache = loadImage('https://i.postimg.cc/Pqk41ShB/mustache.png');
}

function setup(){
    canvas = createCanvas(480,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480,480);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

// May lead to heavy performance reduction!
function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        console.log(results);
        console.log('noseX = ' + noseX);
        console.log('noseY = ' + noseY);
    }
}

function draw(){
    image(video, 0, 0,480, 480);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX,noseY,0);
    image(mustache,noseX,noseY,50,50);
}

function saveImg(){
    save('mustachio man!.png');
}

function modelLoaded() {
    console.log('Posenet initialized :)');
}
