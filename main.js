function preload(){

}
function setup(){
    canvas=createCanvas(500,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s0mD3Lg3w//model.json",modelLoaded)
}
function modelLoaded(){
    console.log("modal loaded");

}
function draw(){
    image(video,0,0,500,500)
    classifier.classify(video,gotResult)

}
function gotResult(errors,results){
    if (errors){
        console.error(error)
    }
    else {
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }

}