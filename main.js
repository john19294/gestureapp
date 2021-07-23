// https://teachablemachine.withgoogle.com/models/EUq_aWuQ6/model.json
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    var camera= document.getElementById("camera");
    Webcam.attach(camera);
    function take_snapshot(){
    Webcam.snap(
        function(data_uri){
    document.getElementById("result").innerHTML= '<img id="captured_selfie" src=" '+data_uri+'">';
        }
    );
    
    }
    console.log("ml5 version is"+ml5.version);
    var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EUq_aWuQ6/model.json',modelLoaded);
    function modelLoaded(){
    console.log("the model is successfully loaded");
    }
    function speak(){
    var synth= window.speachSynthesis;
    var speak_data1="the first prediction is";
    var speak_data2="and the second prediction is";
    var utterThis= new SpeechSynthesisUtterance(speak_data1+speak_data2);// this converts the text to speech
    synth.speak(utterThis);
    
    }
    var prediction1="";
    var prediction2="";
    function check(){
    var img= document.getElementById("captured_selfie");
    classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
    if(error==true){
        console.error(error);
    }
    else{
    console.log(results)
    document.getElementById("e_name1").innerHTML= results[0].label;
    document.getElementById("e_name2").innerHTML= results[1].label;
    prediction1=results[0].label
    prediction2=results[1].label
    speak();
    
    
    
    
    
    
    }
    
    
    
    
    
    
    }
    
    