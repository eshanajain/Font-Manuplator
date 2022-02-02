difference=0;
leftWristX=0;
rightWristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
 
    canvas = createCanvas(550, 550);
    canvas.position(560,100);
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 
function modelLoaded() {
    console.log('PoseNet Is Intialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

      console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);

    }
}

function draw() {
background('#00ff7f');

document.getElementById("text").innerHTML = "width and height of a text will be = " + difference +"px"
fill('#4682b4');
textSize(difference);
text('Eshana', 50, 400);
}
