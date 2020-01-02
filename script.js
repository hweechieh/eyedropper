console.log("heya!")


var timer = 7;
var score = 0;
var seed = Math.floor(Math.random()*1000);
// var seed = 1;
console.log(seed);


///////////////////////////////////////////// LEVEL ONE ///////////////////////////////////////////////
var levelOne = {
    tomnjerry : {
        image : 'images/levelOne/tomnjerry.png',
        colors : ["#4778c4", "#eeb8c6", "#3a0203", "#fbdf3d", "#ff8a00", "#00c8bc", "#941f24"] ,
        status : [true , true , true , true , false , false , false]
    },

    mickeymouse : {
        image : 'images/levelOne/mickeymouse.png',
        colors : ["#d77b6c", "#6b0e07", "#c58500", "#957e6e", "#8efbff", "#54b898", "#7e7bff"] ,
        status : [true , true , true , true , false , false , false]
    },

    winniethepooh : {
        image : 'images/levelOne/winniethepooh.png',
        colors : ["#ca645f", "#a30601", "#cc8c22", "#9d391f", "#ff5b31", "#ff5595", "#9d9800"] ,
        status : [true , true , true , true , false , false , false]
    }
};


///////////////////////////////////////////// LEVEL TWO ///////////////////////////////////////////////
var levelTwo = {
    castle : {
        image : 'images/levelTwo/castle.png',
        colors : ["#1d3945", "#66aca1", "#c39e81", "#58353c", "#53bad9", "#caf1ae", "#a32721", "#ce92a6"] ,
        status : [true , true , true , true , false , false , false, false]
    },

    ponyo : {
        image : 'images/levelTwo/ponyo.png',
        colors : ["#288898", "#e17862", "#eac6a4", "#e3bd40", "#b31628", "#7b5c3e", "#ff2c00", "#ffe424"] ,
        status : [true , true , true , true , false , false , false, false]
    },

    spiritedaway : {
        image : 'images/levelTwo/spiritedaway.png',
        colors : ["#2f6f9a", "#cee0ec", "#e1d3b9", "#89b089", "#00fffa", "#725304", "#4148ba", "#a6ba37"] ,
        status : [true , true , true , true , false , false , false, false]
    }
};


///////////////////////////////////////////// LEVEL THREE ///////////////////////////////////////////////
var levelThree = {
    janice : {
        image : 'images/levelThree/janice.png',
        colors : ["#b9c9cc", "#899c91", "#eed1bf", "#6a4036", "#f8d5cf", "#69604f", "#b0331d", "#518a95", "#401b0e"] ,
        status : [true , true , true , true , true , false , false , false, false]
    },

    markconlan : {
        image : 'images/levelThree/markconlan.png',
        colors : ["#61d1c2", "#d8d0b1", "#33767f", "#ec6565", "#96d873", "#569e2f", "#5e5536", "#00aacc", "#e18b18"] ,
        status : [true , true , true , true , true , false , false , false, false]
    },

    whooli : {
        image : 'images/levelThree/whooli.png',
        colors : ["#e7d8c3", "#9a9b7b", "#e5958c", "#2e775d", "#49aab2", "#bfff1b", "#ffc630", "#25b9ff", "#004196"] ,
        status : [true , true , true , true , true , false , false , false, false]
    }
};


//create logo
var logo = document.createElement("div");
logo.classList.add("logo");
document.body.appendChild(logo);


//create text container div
var textcontainer = document.createElement("div");
textcontainer.classList.add("textcontainer");


//create instruction title
var instruction = document.createElement("h1");
instruction.classList.add("instruction");
instruction.innerText = ("instruction");
textcontainer.appendChild(instruction);
document.body.appendChild(textcontainer);


//create instruction paragraph
var paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.innerText = ("Hello there! \n In this game, your eyes will be the eyedropper! \n \n Look closely at the images and remember the colors. \n When the time is up, choose wisely *smirks* \n If you score 30 or higher, you're a certified professional eyedropper - and that's, a pretty big deal.");
textcontainer.appendChild(paragraph);
document.body.appendChild(textcontainer);


//start button
var div = document.createElement("div");
div.classList.add("align-button");
var startButton = document.createElement("button");
startButton.classList.add("start-button");

div.appendChild(startButton);
document.body.appendChild(div);
div.addEventListener("click", showLevelOneImage);
console.log("button created");



function showLevelOneImage() {

    var toSelect = Object.keys(levelOne);

    //generate random index from 0 - 2 from the toSelect array
    var randomNum = Math.floor(random() * Math.floor(3));


    //place the selected random object into a var
    var selected = levelOne[toSelect[randomNum]];


    var divImage = document.createElement("div");
    divImage.classList.add("image");
    var image = document.createElement("img");
    image.src = selected.image;
    divImage.appendChild(image);


    //countdown timer
    var timerBox = document.createElement("div");
    timerBox.classList.add("timerbox");
    timerBox.innerText = timer + " seconds";
    document.body.appendChild(timerBox);

    /*
    timerBox is the parameter of countdownTimer, as setInterval don't allow functions to have
    parameters, putting it as one of the parameters is equivalent to countdownTimer(timerBox).
    */
    window.timerInterval = setInterval(countdownTimer, 1000, timerBox);


    document.body.removeChild(logo);
    document.body.removeChild(div);
    document.body.removeChild(textcontainer);
    document.body.appendChild(divImage);


    //pass the data within 'selected' into showLevelOneColorBox function
    setTimeout(function()
        {document.body.removeChild(divImage)
        document.body.removeChild(timerBox)
        showLevelOneColorBox(selected)
        stopTimer(timerInterval)},
        7000);

}


/*
show and hide color selections (7 boxes)
*/
function showLevelOneColorBox(objectSelected) {

    /*
    'window' is used so that the global var 'timer = 7' will be reset to = 5
    */
    // window.timer = 5;

    // /*
    // timerBox needs to be renamed to timerBox02 because the same var name won't enable to timer to run
    // Same goes for timerInterval --> timerInterval02
    // */
    // var timerBox02 = document.createElement("div");
    // timerBox02.classList.add("timerbox");
    // timerBox02.innerText = timer + " seconds";
    // document.body.appendChild(timerBox02);
    // window.timerInterval02 = setInterval(countdownTimer, 1000, timerBox02);


    /*
    score on screen
    */
    window.screenScore = document.createElement("div");
    screenScore.classList.add("screenscore");
    screenScore.innerText = "Score: " + window.score;
    document.body.appendChild(screenScore);


    var colorsUsed = shuffle(objectSelected.colors);


    var levelOneBoxes = document.createElement("div");


    for (let i = 0; i < 7; i++) {
        console.log("show color boxes!")

        var colorbox = document.createElement("div");
        colorbox.classList.add("colorbox");

        colorbox.id = "box" + i.toString();

        levelOneBoxes.appendChild(colorbox);
        document.body.appendChild(levelOneBoxes);

    }

    document.getElementById("box0").style.backgroundColor = objectSelected.colors[0];
    document.getElementById("box1").style.backgroundColor = objectSelected.colors[1];
    document.getElementById("box2").style.backgroundColor = objectSelected.colors[2];
    document.getElementById("box3").style.backgroundColor = objectSelected.colors[3];
    document.getElementById("box4").style.backgroundColor = objectSelected.colors[4];
    document.getElementById("box5").style.backgroundColor = objectSelected.colors[5];
    document.getElementById("box6").style.backgroundColor = objectSelected.colors[6];


    var statusUsed = shuffle(objectSelected.status);
    console.log(statusUsed);
    for (let i = 0; i < statusUsed.length; i++) {
        if (statusUsed[i] === true) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {addPoints(screenScore)}, {once : true});
        }
        if (statusUsed[i] === false) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {deductPoints(screenScore)}, {once : true});
        }
    }


    var divNext = document.createElement("div");
    var next = document.createElement("button");
    next.classList.add("next-button");
    next.innerText = "NEXTTT";
    divNext.appendChild(next);
    document.body.appendChild(divNext);


    document.getElementsByTagName(divNext.addEventListener("click", function()
        {document.body.removeChild(levelOneBoxes)
        document.body.removeChild(divNext);
        showLevelTwoImage()
        }))

}



function showLevelTwoImage() {

    var toSelect = Object.keys(levelTwo);
    var randomNum = Math.floor(random() * Math.floor(3));
    var selected = levelTwo[toSelect[randomNum]];


    var image = document.createElement("img");
    image.src = selected.image;


    window.timer = 7;
    var timerBox02 = document.createElement("div");
    timerBox02.classList.add("timerbox");
    timerBox02.innerText = timer + " seconds";
    document.body.appendChild(timerBox02);

    window.timerInterval = setInterval(countdownTimer, 1000, timerBox02);


    document.body.appendChild(image);


    setTimeout(function()
        {document.body.removeChild(image)
        document.body.removeChild(timerBox02)
        showLevelTwoColorBox(selected)
        stopTimer(timerInterval)},
        7000);

}



function showLevelTwoColorBox(objectSelected) {

    var colorsUsed = shuffle(objectSelected.colors);
    window.screenScore.innerText = "Score: " + window.score;

    var levelTwoBoxes = document.createElement("div");
    for (let i = 0; i < 8; i++) {
        console.log("show color boxes!")

        var colorbox = document.createElement("div");
        colorbox.classList.add("colorbox");

        colorbox.id = "box" + i.toString();

        levelTwoBoxes.appendChild(colorbox);
        document.body.appendChild(levelTwoBoxes);

    }


    document.getElementById("box0").style.backgroundColor = objectSelected.colors[0];
    document.getElementById("box1").style.backgroundColor = objectSelected.colors[1];
    document.getElementById("box2").style.backgroundColor = objectSelected.colors[2];
    document.getElementById("box3").style.backgroundColor = objectSelected.colors[3];
    document.getElementById("box4").style.backgroundColor = objectSelected.colors[4];
    document.getElementById("box5").style.backgroundColor = objectSelected.colors[5];
    document.getElementById("box6").style.backgroundColor = objectSelected.colors[6];
    document.getElementById("box7").style.backgroundColor = objectSelected.colors[7];


    var statusUsed = shuffle(objectSelected.status);
    console.log(statusUsed);
    for (let i = 0; i < statusUsed.length; i++) {
        if (statusUsed[i] === true) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {addPoints(screenScore)}, {once : true});
        }
        if (statusUsed[i] === false) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {deductPoints(screenScore)}, {once : true});
        }
    }

    var divNext = document.createElement("div");
    var next = document.createElement("button");
    next.classList.add("next-button");
    next.innerText = "NEXTTT";
    divNext.appendChild(next);
    document.body.appendChild(divNext);


    document.getElementsByTagName(divNext.addEventListener("click", function()
        {document.body.removeChild(levelTwoBoxes)
        document.body.removeChild(divNext);
        showLevelThreeImage()
        }))

}




function showLevelThreeImage() {

    var toSelect = Object.keys(levelThree);
    var randomNum = Math.floor(random() * Math.floor(3));
    var selected = levelThree[toSelect[randomNum]];


    var image = document.createElement("img");
    image.src = selected.image;


    window.timer = 7;
    var timerBox03 = document.createElement("div");
    timerBox03.classList.add("timerbox");
    timerBox03.innerText = timer + " seconds";
    document.body.appendChild(timerBox03);

    window.timerInterval = setInterval(countdownTimer, 1000, timerBox03);


    document.body.appendChild(image);


    setTimeout(function()
        {document.body.removeChild(image)
        document.body.removeChild(timerBox03)
        showLevelThreeColorBox(selected)
        stopTimer(timerInterval)},
        7000);

}


function showLevelThreeColorBox(objectSelected) {

    var colorsUsed = shuffle(objectSelected.colors);
    window.screenScore.innerText = "Score: " + window.score;

    var levelThreeBoxes = document.createElement("div");
    for (let i = 0; i < 9; i++) {
        console.log("show color boxes!")

        var colorbox = document.createElement("div");
        colorbox.classList.add("colorbox");

        colorbox.id = "box" + i.toString();

        levelThreeBoxes.appendChild(colorbox);
        document.body.appendChild(levelThreeBoxes);

    }


    document.getElementById("box0").style.backgroundColor = objectSelected.colors[0];
    document.getElementById("box1").style.backgroundColor = objectSelected.colors[1];
    document.getElementById("box2").style.backgroundColor = objectSelected.colors[2];
    document.getElementById("box3").style.backgroundColor = objectSelected.colors[3];
    document.getElementById("box4").style.backgroundColor = objectSelected.colors[4];
    document.getElementById("box5").style.backgroundColor = objectSelected.colors[5];
    document.getElementById("box6").style.backgroundColor = objectSelected.colors[6];
    document.getElementById("box7").style.backgroundColor = objectSelected.colors[7];
    document.getElementById("box8").style.backgroundColor = objectSelected.colors[8];


    var statusUsed = shuffle(objectSelected.status);
    console.log(statusUsed);
    for (let i = 0; i < statusUsed.length; i++) {
        if (statusUsed[i] === true) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {addPoints(screenScore)}, {once : true});
        }
        if (statusUsed[i] === false) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {deductPoints(screenScore)}, {once : true});
        }
    }

    var divNext = document.createElement("div");
    var next = document.createElement("button");
    next.classList.add("next-button");
    next.innerText = "NEXTTT";
    divNext.appendChild(next);
    document.body.appendChild(divNext);


    document.getElementsByTagName(divNext.addEventListener("click", function()
        {document.body.removeChild(levelThreeBoxes)
        document.body.removeChild(divNext);
        showLevelFourImage()
        }))

}




















/////////////// SHUFFLE ARRAY ///////////////
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/////////// RANDOMISE WITH SEED ///////////
function random() {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}


/////////////// TRACK SCORE ///////////////
function addPoints(display) {
    score = score + 1;
    display.innerText = "Score: " + score;
    console.log(score);
}

function deductPoints(display) {
    score = score - 1;
    display.innerText = "Score: " + score;
    console.log(score);
}

////////////////// TIMER //////////////////
function countdownTimer(itemToCountDown) {
    timer = timer - 1;
    itemToCountDown.innerText = timer + " seconds";

    if (timer === 0) {
        stopTimer();
    }
}

function stopTimer(interval) {
    clearInterval(interval);
}


