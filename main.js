nosex=0
nosey=0
lipsx=0
lipsy=0

function preload(){
    clonenose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
    lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}


function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotPoses)
}


function modelloaded(){
    console.log("posenet is inishalized")
}


function gotPoses(results){
if (results.length>0) {
    console.log(results)
    nosex=results[0].pose.nose.x-15
    nosey=results[0].pose.nose.y-15
    lipsx=results[0].pose.nose.x-15
    lipsy=results[0].pose.nose.y+30
}
}
  

function draw(){
    image(video,0,0,300,300)
    image(clonenose,nosex,nosey,30,30)
    image(lipstick,lipsx,lipsy,50,20)
}


function takesnapshot(){
    save("img.png")
}