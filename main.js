noseX = 0;
noseY = 0;

function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  video.position(100,170);

  canvas = createCanvas(550, 550);
  canvas.center()

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose",gotPoses);
}

function modelLoaded(){
console.log("poseNet is Initialized")    
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results)
    }
}