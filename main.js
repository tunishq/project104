Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version - ", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bPIAYO07K/model.json', modelLoaded);


