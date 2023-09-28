wristRy = ""
wristLy = ""
wristRx = ""
score=""


function preload()
{
    sound = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(500,500);
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose" , gotresult)
}
function gotresult(result)
{
    if (result.length>0) {
        console.log(result);
        wristRy = result[0].pose.rightWrist.y;
        wristRx = result[0].pose.rightWrist.x;
        wristLy = result[0].pose.leftWrist.y;
        console.log(wristLy , wristRy);
        score1 = result[0].pose.keypoints[10].score;
        score = score1*10;
        console.log(score)
    }
}
function playsrc()
{
    sound.play()
    sound.setVolume(1)
    sound.rate(1)
}
function modelLoaded()
{
    console.log("MOdel HAs BEen LOaded   ")
}
function stopsrc()
{
    sound.pause()
}
function draw()
{
    image(video,0,0,500,500)
    if (score >0.2) {
        console.log("fhuiweh")
        fill("aliceblue")
        stroke("black")
        circle(wristRx,wristRy,20)
        sound.setVolume(floor(wristRy)/500)
    
    }
    else{
        console.log("error")
    }
}