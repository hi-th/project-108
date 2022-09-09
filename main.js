function start_classification () {
    navigator.mediaDevices.getUserMedia();
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/W3EKgkRrE/model.json',modelReady)
}

function modelReady () {
    classifier.classify(gotResults);
}

function gotResults (error, results) {
    console.log('Got Results')
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I Can Hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].label * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('cow');
        img3 = document.getElementById('sheep');

        if (results[0].label == barking) {
            img.src = "barking.gif";
            img1.src = "cat.png"
            img2.src = "cow.png"
            img3.src = "sheep.png"
        } 
        else if (results[0].label == meowing) {
            img.src = "dog.png";
            img1.src = "meowing.gif"
            img2.src = "cow.png"
            img3.src = "sheep.png"
        }
         else if (results[0].label == mooing) {
            img.src = "dog.png";
            img1.src = "cat.png"
            img2.src = "mooing.gif"
            img3.src = "sheep.png"
        } 
        else (results[0].label == bleating) 
            img.src = "dog.png";
            img1.src = "cat.png"
            img2.src = "cow.png"
            img3.src = "bleating.png"
    }
} 
