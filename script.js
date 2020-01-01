console.log("heya!")


var timer = 7;
var score = 0;
var seed = Math.floor(Math.random()*1000);
// var seed = ;
console.log(seed);


///////////////////////////////////////////// LEVEL ONE ///////////////////////////////////////////////
var levelOne = {
    tomnjerry : {
        image : 'images/levelOne/tomnjerry.jpg',
        colors : ["#4778c4", "#eeb8c6", "#3a0203", "#fbdf3d", "#ff8a00", "#00c8bc", "#941f24"] ,
        status : [true , true , true , true , false , false , false]
    },

    mickeymouse : {
        image: 'images/levelOne/mickeymouse.jpg',
        colors : ["#d77b6c", "#6b0e07", "#c58500", "#957e6e", "#8efbff", "#54b898", "#7e7bff"] ,
        status : [true , true , true , true , false , false , false]
    },

    winniethepooh : {
        image: 'images/levelOne/winniethepooh.jpg',
        colors : ["#ca645f", "#a30601", "#cc8c22", "#9d391f", "#ff5b31", "#ff5595", "#9d9800"] ,
        status : [true , true , true , true , false , false , false]
    }
};


///////////////////////////////////////////// LEVEL TWO ///////////////////////////////////////////////
var levelTwo = {
    tomnjerry : {
        image : 'images/levelTwo/tomnjerry.jpg',
        colors : ["#4778c4", "#eeb8c6", "#3a0203", "#fbdf3d", "#ff8a00", "#00c8bc", "#941f24"] ,
        status : [true , true , true , true , false , false , false]
    },

    mickeymouse : {
        image: 'images/levelOne/mickeymouse.jpg',
        colors : ["#d77b6c", "#6b0e07", "#c58500", "#957e6e", "#8efbff", "#54b898", "#7e7bff"] ,
        status : [true , true , true , true , false , false , false]
    },

    winniethepooh : {
        image: 'images/levelOne/winniethepooh.jpg',
        colors : ["#ca645f", "#a30601", "#cc8c22", "#9d391f", "#ff5b31", "#ff5595", "#9d9800"] ,
        status : [true , true , true , true , false , false , false]
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
    console.log('show image');


    var toSelect = Object.keys(levelOne);

    //generate random index from 0 - 2 from the toSelect array
    var randomNum = Math.floor(random() * Math.floor(3));


    //place the selected random object into a var
    var selected = levelOne[toSelect[randomNum]];


    var image = document.createElement("img");
    image.src = selected.image;


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
    document.body.appendChild(image);


    //pass the data within 'selected' into showLevelOneColorBox function
    setTimeout(function()
        {document.body.removeChild(image)
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
    window.timer = 5;

    /*
    timerBox needs to be renamed to timerBox02 because the same var name won't enable to timer to run
    Same goes for timerInterval --> timerInterval02
    */
    var timerBox02 = document.createElement("div");
    timerBox02.classList.add("timerbox");
    timerBox02.innerText = timer + " seconds";
    document.body.appendChild(timerBox02);
    window.timerInterval02 = setInterval(countdownTimer, 1000, timerBox02);


    /*
    score on screen
    */
    var screenScore = document.createElement("div");
    screenScore.classList.add("screenscore");
    screenScore.innerText = "Score: " + score;
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

    setTimeout(function()
        {document.body.removeChild(levelOneBoxes)
        document.body.removeChild(timerBox02)
        stopTimer(timerInterval02)},
        5000);
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


