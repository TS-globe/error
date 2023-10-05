wristRy = ""
wristLy = ""
wristRx = ""
wristLx = ""
score=""

volume = document.getElementById("voloume")

speedy = document.getElementById("speedy");

function preload()
{
    sound = loadSound("music.mp3");
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center()
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
        wristLx = result[0].pose.leftWrist.x;

        console.log(wristLy , wristRy);

        score1 = result[0].pose.keypoints[10].score;
        score = score1*10;

        scor = result[0].pose.keypoints[9].score;
        score2 = scor*10;

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
    image(video,0,0,300,300)
    if (score >0.2) {

        console.log("fhuiweh")

        fill("aliceblue")
        stroke("black")
        circle(wristRx,wristRy,20)

        if (wristRy >= 0 && wristRy <= 50)
        {
            sound.setVolume(0);
            volume.innerHTML = "0"
        }
        else if (wristRy >50 && wristRy <= 100)
        {
            sound.setVolume(0.2)
            volume.innerHTML = "2"
        }
        else if (wristRy >100 && wristRy <= 150)
        {
            sound.setVolume(0.4)
            volume.innerHTML = "4"
        }
        else if (wristRy >150 && wristRy <= 200)
        {
            sound.setVolume(0.6)
            volume.innerHTML = "6"
        }
        else if (wristRy >200 && wristRy <= 250)
        {
            sound.setVolume(0.8)
            volume.innerHTML = "8"
        }
        else if (wristRy >250 && wristRy <= 300)
        {
            sound.setVolume(1)
            volume.innerHTML = "10"
        }




    
    }
    else{
        console.log("error")
    }

    if (score2 >0.2) {
        console.log("Working")

        fill("red")
        stroke("black")
        circle(wristLx,wristLy,20)

        if(wristLy >= 0 && wristLy <= 60)
        {
            sound.rate(0.5)
            speedy.innerHTML = "0.5"
        }
        else if (wristLy > 60 && wristLy <= 120)
        {
            sound.rate(1)
            speedy.innerHTML = "1"
        }
        else if (wristLy > 120 && wristLy <= 180)
        {
            sound.rate(1.5)
            speedy.innerHTML = "1.5"
        }
        else if (wristLy > 180 && wristLy <=240)
        {
            sound.rate(2)
            speedy.innerHTML = "2"
        }
        else if (wristLy > 240 && wristLy <=300)
        {
            sound.rate(2.5)
            speedy.innerHTML = "2.5"
        }



    }
    else{
        console.log("error")
    }

}
