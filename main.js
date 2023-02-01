
function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3ek79K4Zj/model.json', Luizinho);
}
function Luizinho() {
    classifier.classify(Mariazinha);
}
function Mariazinha(jaum, respirar) {
    if (jaum) {
        console.error(jaum);
    } else {
        console.log(respirar);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("ouvido").style.color = "rgb( " + r + "," + g + "," + b + " )";
        document.getElementById("cerebro").style.color = "rgb( " + r + "," + g + "," + b + " )";
        document.getElementById("ouvido").innerHTML = "posso ouvir: " + respirar[0].label;
        document.getElementById("cerebro").innerHTML = "precisão: " + respirar[0].confidence;
    }
    
    img = document.getElementById("alien1")
    img1 = document.getElementById("alien2")
    img2 = document.getElementById("alien3")
    img3 = document.getElementById("alien4")

    if (respirar[0].label == "palmas") {
        img.src = "aliens-01.gif"
        img1.src = "aliens-02.png"
        img2.src = "aliens-03.png"
        img3.src = "aliens-04.png"
    } else if (respirar[0].label == "stalo com a boca") {
        img.src = "aliens-01.png"
        img1.src = "aliens-02.gif"
        img2.src = "aliens-03.png"
        img3.src = "aliens-04.png"
    } else if (respirar[0].label == "stalo de dedos") {
        img.src = "aliens-01.png"
        img1.src = "aliens-02.png"
        img2.src = "aliens-03.gif"
        img3.src = "aliens-04.png"
    } else {
        img.src = "aliens-01.png"
        img1.src = "aliens-02.png"
        img2.src = "aliens-03.png"
        img3.src = "aliens-04.gif"
    }
}

