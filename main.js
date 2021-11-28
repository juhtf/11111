function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CBSIh76dB/model.json',modelReady)
}

function modelReady(){
    classifier.classify(gotResult);
}
var cat=0;
var dog=0;
var crow=0;
var snake=0;

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r= Math.floor(Math.random()*255) + 1;
        random_number_g= Math.floor(Math.random()*255) + 1;
        random_number_b= Math.floor(Math.random()*255) + 1;
    
        document.getElementById("result_label").innerHTML= results[0].label;
        document.getElementById("result_accuracy").innerHTML= (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color="rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    document.getElementById("result_accuracy").style.color="rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    
img1=document.getElementById("img");  
    if(results[0].label=="cat"){
    img1.src="cat.gif";
    cat=cat + 1;
    }
    else if(results[0].label=="dog"){
        img1.src="46sy.gif";
        dog=dog + 1;
    }
    else if(results[0].label=="crow"){
        img1.src="ZHug.gif";
        crow= crow + 1;
    }
    else{
        img.src="snaker3000.gif";
    }
    }
    
    }