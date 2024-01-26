Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
  });
  
  camera= document.getElementById("camará");
  Webcam.attach('#camará');
  
  function take_snapshot() {
    Webcam.snap(function(data_uri){
      document.getElementById("Result").innerHTML='<img id="image_captured" src="'+data_uri+'"/>';
    });
  }
  
  console.log("La version de ml5: ",ml5.version);
  classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/N5O4alkKY/model.json',modelLoaded);
  
  function modelLoaded(){
    console.log("el modelo ya cargo :D"); 
  }

  function check() {
    img=document.getElementById('image_captured');
    classifier.classify(img, gotResult());
  }
  
  function gotResult(error, results) {
    if (error){
      console.error(error); } 
    else{
      console.log(results); 
      document.getElementById("result_object_name").innerHTML=results[0].label;
      document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
  }
}