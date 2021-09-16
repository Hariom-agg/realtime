
function preload()
{

}

function setup()
{
    canvas= createCanvas(300,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0Wk6D_oqK/model.json",modalLoaded);
}

function modalLoaded ()
{
    console.log("ModalLoaded!");
}

function draw ()
{
 image(video ,0,0,300,250 );
 classifier.classify(video, got_result);
}

function got_result (error, results)
{
    if (error)
    {
      console.log(error);
    }

    else 
    {
        console.log(results);
        document.getElementById("span_object").innerHTML = results[0].label;
        document.getElementById("span_accuracy").innerHTML = results[0].confidence.toFixed(3);

    }
}



