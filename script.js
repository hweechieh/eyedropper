console.log("heya!")


var timer = 7;
var finalScore = 0;
var seed = Math.floor(Math.random()*1000);
// var seed = 1;
console.log(seed);

var levelOneScore = 0;
var levelTwoScore = 0;
var levelThreeScore = 0;
var levelFourScore = 0;
var levelFiveScore = 0;
var levelSixScore = 0;


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
        status : [true , true , true , true , false , false , false , false, false]
    },

    markconlan : {
        image : 'images/levelThree/markconlan.png',
        colors : ["#61d1c2", "#d8d0b1", "#33767f", "#ec6565", "#96d873", "#569e2f", "#5e5536", "#00aacc", "#e18b18"] ,
        status : [true , true , true , true , false , false , false , false, false]
    },

    whooli : {
        image : 'images/levelThree/whooli.png',
        colors : ["#e7d8c3", "#9a9b7b", "#e5958c", "#2e775d", "#49aab2", "#bfff1b", "#ffc630", "#25b9ff", "#004196"] ,
        status : [true , true , true , true , false , false , false , false, false]
    }
};


///////////////////////////////////////////// LEVEL FOUR ///////////////////////////////////////////////
var levelFour = {
    farmhouse : {
        image : 'images/levelFour/farmhouse.png',
        colors : ["#adc2be", "#99401f", "#a6ac60", "#394949", "#d4b25c", "#78ffe8", "#ffd444", "#5bd45b", "#f6ff74", "#bb781b"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    },

    potato : {
        image : 'images/levelFour/potato.png',
        colors : ["#f91030", "#221004", "#fafa79", "#bd6e2a", "#f8d23b", "#86aced", "#ffff2b", "#df8200", "#b43900", "#ffd294"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    },

    starrynight : {
        image : 'images/levelFour/starrynight.png',
        colors : ["#1b2329", "#b1a03f", "#9ca852", "#25358c", "#d3d98f", "#b1db61", "#1c83ff", "#0b33cd", "#d77a00", "#7bffc9"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    }
};


///////////////////////////////////////////// LEVEL FIVE ///////////////////////////////////////////////
var levelFive = {
    grass : {
        image : 'images/levelFive/grass.png',
        colors : ["#eee082", "#e3ad2f", "#1e4b7d", "#e9f5ef", "#9effce", "#0074ff", "#ffb900", "#ffda00", "#185410", "#006497"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    },

    landscape : {
        image : 'images/levelFive/landscape.png',
        colors : ["#f91030", "#221004", "#fafa79", "#bd6e2a", "#f8d23b", "#86aced", "#ffff2b", "#df8200", "#b43900", "#ffd294"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    },

    tree : {
        image : 'images/levelFive/tree.png',
        colors : ["#1b2329", "#b1a03f", "#9ca852", "#25358c", "#d3d98f", "#b1db61", "#1c83ff", "#0b33cd", "#d77a00", "#7bffc9"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    }
};


///////////////////////////////////////////// LEVEL SIX ///////////////////////////////////////////////
var levelSix = {
    alex : {
        image : 'images/levelSix/alex.png',
        colors : ["#eee082", "#e3ad2f", "#1e4b7d", "#e9f5ef", "#9effce", "#0074ff", "#ffb900", "#ffda00", "#185410", "#006497", "#006497", "#006497"] ,
        status : [true , true , true , true , false , false , false , false, false, false, false, false]
    },

    erwin : {
        image : 'images/levelSix/erwin.png',
        colors : ["#f91030", "#221004", "#fafa79", "#bd6e2a", "#f8d23b", "#86aced", "#ffff2b", "#df8200", "#b43900", "#ffd294", "#006497", "#006497"] ,
        status : [true , true , true , true , false , false , false , false, false, false, false, false]
    },

    william : {
        image : 'images/levelSix/william.png',
        colors : ["#1b2329", "#b1a03f", "#9ca852", "#25358c", "#d3d98f", "#b1db61", "#1c83ff", "#0b33cd", "#d77a00", "#7bffc9", "#006497", "#006497"] ,
        status : [true , true , true , true , false , false , false , false, false, false, false, false]
    }
};



//////////////////////////////// NAV BAR ////////////////////////////////
var navDiv = document.createElement("div");
navDiv.classList.add("nav");

var unlist = document.createElement("ul");
var instruction = document.createElement("li");
instruction.innerText = "instruction";
instruction.classList.add("instruction");
instruction.addEventListener("click", function() {divContainer.replaceChild(instructionPara, logoDiv)});
instruction.addEventListener("click", function() {divContainer.replaceChild(instructionPara, aboutDiv)});


var about = document.createElement("li");
about.innerText = "about";
about.classList.add("instruction");
about.addEventListener("click", function() {divContainer.replaceChild(aboutDiv, logoDiv)});
about.addEventListener("click", function() {divContainer.replaceChild(aboutDiv, instructionPara)});

unlist.appendChild(instruction);
unlist.appendChild(about);
navDiv.appendChild(unlist);
document.body.appendChild(navDiv);



///////////////////////////////// LOGO /////////////////////////////////
var divContainer = document.createElement("div");
divContainer.classList.add("div-container");

var logoDiv = document.createElement("div");
var logo = document.createElement("img");
logo.src = ("assets/logo.png");

logoDiv.classList.add("logo");

logoDiv.appendChild(logo);
divContainer.appendChild(logoDiv);
document.body.appendChild(divContainer);



////////////////////////////// PLAY BUTTON //////////////////////////////
var playDiv = document.createElement("div");
playDiv.classList.add("button");
var startButton = document.createElement("img");
startButton.src = ("assets/play.png");
startButton.classList.add("start-button");

playDiv.appendChild(startButton);
document.body.appendChild(playDiv);
playDiv.addEventListener("click", showLevelOneImage);
console.log("button created");



///////////////////////// INSTRUCTION PARAGRAPH /////////////////////////
var instructionEmoji = document.createElement("span");
instructionEmoji.classList.add("instruction-emoji");
instructionEmoji.innerText = "👀 👋🏼";

var note = document.createElement("span");
note.classList.add("note-title");
note.innerText = "⚠️ Note:"

var instructionPara = document.createElement("p");
instructionPara.classList.add("paragraph");
instructionPara.innerText = ("\n \n Hello there! \n In this game, your eyes will be the eyedropper! \n \n Here's what you gotta do: \n \n 1. Look closely at the images and remember the colors for SIX LEVELS. \n You have limited time to remember as much as you can. \n \n 2. When time is up, choose wisely!\n No time limit! \n \n If you score >= 20, you're a certified professional eyedropper 🏆 \n (that's a pretty big deal 👻) \n \n \n");
instructionPara.prepend(instructionEmoji);
instructionPara.appendChild(note);

var notePara = document.createElement("p");
notePara.classList.add("note-para");
notePara.innerText = ("No pausing when timer is counting down! \n Once you're ready, let the fun begin!")
instructionPara.appendChild(notePara);



///////////////////////// ABOUT PARAGRAPH /////////////////////////
var aboutDiv = document.createElement("div");

var logoImgDiv = document.createElement("div");
logoImgDiv.classList.add("logo");

var logoImg = document.createElement("img");
logoImg.src = ("assets/aboutlogo.png");

var aboutPara = document.createElement("p");
aboutPara.classList.add("about-para");
aboutPara.innerText = ("Eyedropper is a game made for anyone who fancy \n a good challenge in memorizing colors! \n \n Even more so for creatives who are looking to unwind and \n play it to perk them up in the midst of projects! 🌈 \n \n Have fun!")

logoImgDiv.appendChild(logoImg);
aboutDiv.appendChild(logoImgDiv);
aboutDiv.appendChild(aboutPara);


/////////////////////////////////////////////////// LEVEL ONE ///////////////////////////////////////////////////
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


    document.body.removeChild(navDiv);
    document.body.removeChild(divContainer)
    document.body.removeChild(playDiv);
    document.body.appendChild(divImage);


    //pass the data within 'selected' into showLevelOneColorBox function
    setTimeout(function()
        {document.body.removeChild(divImage)
        document.body.removeChild(timerBox)
        showLevelOneColorBox(selected)
        stopTimer(timerInterval)},
        7000);

}


function showLevelOneColorBox(objectSelected) {

    var levelNameDiv = document.createElement("div");
    levelNameDiv.classList.add("timerbox");
    levelNameDiv.innerText = "Level One"
    document.body.appendChild(levelNameDiv);


    var divFour = document.createElement("div");
    var chooseFour = document.createElement("p");
    chooseFour.classList.add("level-instruction");
    chooseFour.innerText = ("Select four colors present in the previous image");
    divFour.appendChild(chooseFour);
    document.body.appendChild(divFour);


    var colorsUsed = shuffle(objectSelected.colors);

    var levelOneBoxes = document.createElement("div");
    levelOneBoxes.classList.add("boxes-div");


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


    var buttons = document.getElementsByClassName("colorbox");
    for (var i = 0; i < buttons.length; i++) {
        document.getElementsByClassName("colorbox")[i].addEventListener("click", function() {
        this.classList.add("select-btn");
        });
    }


    var statusUsed = shuffle(objectSelected.status);
    console.log(statusUsed);
    for (let i = 0; i < statusUsed.length; i++) {
        if (statusUsed[i] === true) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelOneScore = addPoints(levelOneScoreDisplay, levelOneScore)
            }, {once : true});
        }
        if (statusUsed[i] === false) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelOneScore = deductPoints(levelOneScoreDisplay, levelOneScore)
            }, {once : true});
        }
    }


    window.levelOneScoreDisplay = document.createElement("div");
    levelOneScoreDisplay.classList.add("timerbox");


    // window.screenScore = document.createElement("div");
    // screenScore.classList.add("timerbox");


//to show correct colors
    // var imageChosenDiv = document.createElement("div");
    // var imageChosen = document.createElement("img");
    // imageChosen.src = objectSelected.image;
    // imageChosenDiv.appendChild(imageChosen);
    // document.body.appendChild(imageChosenDiv);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {document.body.removeChild(levelOneBoxes)
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv);
        document.body.prepend(levelOneScoreDisplay)
        document.body.replaceChild(nextDiv02, nextDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelTwoImage())
        document.body.removeChild(levelOneScoreDisplay)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}


        /*
    score on screen
    */
// function showScore() {
//     window.screenScore = document.createElement("div");
//     screenScore.classList.add("timerbox");
//     screenScore.innerText = "Score: " + window.score;
//     document.body.appendChild(screenScore);
// }



/////////////////////////////////////////////////// LEVEL TWO ///////////////////////////////////////////////////
function showLevelTwoImage() {

    var toSelect = Object.keys(levelTwo);
    var randomNum = Math.floor(random() * Math.floor(3));
    var selected = levelTwo[toSelect[randomNum]];


    var divImage = document.createElement("div");
    divImage.classList.add("image");
    var image = document.createElement("img");
    image.src = selected.image;
    divImage.appendChild(image);


    /*
    'window' is used so that the global var 'timer = 7' will be reset to any new value
    timerBox needs to be renamed to timerBox02 because the same var name won't enable to timer to run
    Same goes for timerInterval --> timerInterval02
    */
    window.timer = 7;
    var timerBox02 = document.createElement("div");
    timerBox02.classList.add("timerbox");
    timerBox02.innerText = timer + " seconds";
    document.body.appendChild(timerBox02);

    window.timerInterval = setInterval(countdownTimer, 1000, timerBox02);


    document.body.appendChild(divImage);


    setTimeout(function()
        {document.body.removeChild(divImage)
        document.body.removeChild(timerBox02)
        showLevelTwoColorBox(selected)
        stopTimer(timerInterval)},
        7000);

}



function showLevelTwoColorBox(objectSelected) {

    var levelNameDiv = document.createElement("div");
    levelNameDiv.classList.add("timerbox");
    levelNameDiv.innerText = "Level Two"
    document.body.appendChild(levelNameDiv);


    var divFour = document.createElement("div");
    var chooseFour = document.createElement("p");
    chooseFour.classList.add("paragraph");
    chooseFour.innerText = ("Select four colors present in the previous image");
    divFour.appendChild(chooseFour);
    document.body.appendChild(divFour);


    var colorsUsed = shuffle(objectSelected.colors);

    var levelTwoBoxes = document.createElement("div");
    levelTwoBoxes.classList.add("boxes-div");


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


    var buttons = document.getElementsByClassName("colorbox");
    for (var i = 0; i < buttons.length; i++) {
        document.getElementsByClassName("colorbox")[i].addEventListener("click", function() {
        this.classList.add("select-btn");
        });
    }


    var statusUsed = shuffle(objectSelected.status);
    console.log(statusUsed);
    for (let i = 0; i < statusUsed.length; i++) {
        if (statusUsed[i] === true) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelTwoScore = addPoints(levelTwoScoreDisplay, levelTwoScore)
            }, {once : true});
        }
        if (statusUsed[i] === false) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelTwoScore = deductPoints(levelTwoScoreDisplay, levelTwoScore)
            }, {once : true});
        }
    }


    window.levelTwoScoreDisplay = document.createElement("div");
    levelTwoScoreDisplay.classList.add("timerbox");


    // window.screenScore = document.createElement("div");
    // screenScore.classList.add("timerbox");
    // screenScore.innerText = "You scored " + window.score + " out of 4! ✨";


//to show correct colors
    // var imageChosenDiv = document.createElement("div");
    // var imageChosen = document.createElement("img");
    // imageChosen.src = objectSelected.image;
    // imageChosenDiv.appendChild(imageChosen);
    // document.body.appendChild(imageChosenDiv);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {document.body.removeChild(levelTwoBoxes)
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelTwoScoreDisplay)
        document.body.replaceChild(nextDiv02, nextDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelThreeImage())
        document.body.removeChild(levelTwoScoreDisplay)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}


        /*
    score on screen
    */
// function showScore() {
//     window.screenScore = document.createElement("div");
//     screenScore.classList.add("timerbox");
//     screenScore.innerText = "Score: " + window.score;
//     document.body.appendChild(screenScore);
// }





/////////////////////////////////////////////////// LEVEL THREE ///////////////////////////////////////////////////
function showLevelThreeImage() {

    var toSelect = Object.keys(levelThree);
    var randomNum = Math.floor(random() * Math.floor(3));
    var selected = levelThree[toSelect[randomNum]];


    var divImage = document.createElement("div");
    divImage.classList.add("image");
    var image = document.createElement("img");
    image.src = selected.image;
    divImage.appendChild(image);


    //countdown timer
    window.timer = 7;
    var timerBox = document.createElement("div");
    timerBox.classList.add("timerbox");
    timerBox.innerText = timer + " seconds";
    document.body.appendChild(timerBox);


    window.timerInterval = setInterval(countdownTimer, 1000, timerBox);


    document.body.appendChild(divImage);


    //pass the data within 'selected' into showLevelOneColorBox function
    setTimeout(function()
        {document.body.removeChild(divImage)
        document.body.removeChild(timerBox)
        showLevelThreeColorBox(selected)
        stopTimer(timerInterval)},
        7000);

}


function showLevelThreeColorBox(objectSelected) {

    var levelNameDiv = document.createElement("div");
    levelNameDiv.classList.add("timerbox");
    levelNameDiv.innerText = "Level Three"
    document.body.appendChild(levelNameDiv);


    var divFour = document.createElement("div");
    var chooseFour = document.createElement("p");
    chooseFour.classList.add("paragraph");
    chooseFour.innerText = ("Select four colors present in the previous image");
    divFour.appendChild(chooseFour);
    document.body.appendChild(divFour);


    var colorsUsed = shuffle(objectSelected.colors);

    var levelThreeBoxes = document.createElement("div");
    levelThreeBoxes.classList.add("boxes-div-levelthree");


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


    var buttons = document.getElementsByClassName("colorbox");
    for (var i = 0; i < buttons.length; i++) {
        document.getElementsByClassName("colorbox")[i].addEventListener("click", function() {
        this.classList.add("select-btn");
        });
    }


    var statusUsed = shuffle(objectSelected.status);
    console.log(statusUsed);
    for (let i = 0; i < statusUsed.length; i++) {
        if (statusUsed[i] === true) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelThreeScore = addPoints(levelThreeScoreDisplay, levelThreeScore)
            }, {once : true});
        }
        if (statusUsed[i] === false) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelThreeScore = deductPoints(levelThreeScoreDisplay, levelThreeScore)
            }, {once : true});
        }
    }


    window.levelThreeScoreDisplay = document.createElement("div");
    levelThreeScoreDisplay.classList.add("timerbox");


//to show correct colors
    // var imageChosenDiv = document.createElement("div");
    // var imageChosen = document.createElement("img");
    // imageChosen.src = objectSelected.image;
    // imageChosenDiv.appendChild(imageChosen);
    // document.body.appendChild(imageChosenDiv);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {document.body.removeChild(levelThreeBoxes)
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelThreeScoreDisplay)
        document.body.replaceChild(nextDiv02, nextDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelFourImage())
        document.body.removeChild(levelThreeScoreDisplay)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}


        /*
    score on screen
    */
// function showScore() {
//     window.screenScore = document.createElement("div");
//     screenScore.classList.add("timerbox");
//     screenScore.innerText = "Score: " + window.score;
//     document.body.appendChild(screenScore);
// }



/////////////////////////////////////////////////// LEVEL FOUR ///////////////////////////////////////////////////
function showLevelFourImage() {

    var toSelect = Object.keys(levelFour);
    var randomNum = Math.floor(random() * Math.floor(3));
    var selected = levelFour[toSelect[randomNum]];


    var divImage = document.createElement("div");
    divImage.classList.add("image");
    var image = document.createElement("img");
    image.src = selected.image;
    divImage.appendChild(image);


    //countdown timer
    window.timer = 8;
    var timerBox = document.createElement("div");
    timerBox.classList.add("timerbox");
    timerBox.innerText = timer + " seconds";
    document.body.appendChild(timerBox);


    window.timerInterval = setInterval(countdownTimer, 1000, timerBox);


    document.body.appendChild(divImage);


    //pass the data within 'selected' into showLevelOneColorBox function
    setTimeout(function()
        {document.body.removeChild(divImage)
        document.body.removeChild(timerBox)
        showLevelFourColorBox(selected)
        stopTimer(timerInterval)},
        8000);
}


function showLevelFourColorBox(objectSelected) {

    var levelNameDiv = document.createElement("div");
    levelNameDiv.classList.add("timerbox");
    levelNameDiv.innerText = "Level Four"
    document.body.appendChild(levelNameDiv);


    var divFour = document.createElement("div");
    var chooseFour = document.createElement("p");
    chooseFour.classList.add("paragraph");
    chooseFour.innerText = ("Select four colors present in the previous image");
    divFour.appendChild(chooseFour);
    document.body.appendChild(divFour);


    var colorsUsed = shuffle(objectSelected.colors);

    var levelFourBoxes = document.createElement("div");
    levelFourBoxes.classList.add("boxes-div-levelthree");


    for (let i = 0; i < 10; i++) {
        console.log("show color boxes!")

        var colorbox = document.createElement("div");
        colorbox.classList.add("colorbox");

        colorbox.id = "box" + i.toString();

        levelFourBoxes.appendChild(colorbox);
        document.body.appendChild(levelFourBoxes);

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
    document.getElementById("box9").style.backgroundColor = objectSelected.colors[9];


    var buttons = document.getElementsByClassName("colorbox");
    for (var i = 0; i < buttons.length; i++) {
        document.getElementsByClassName("colorbox")[i].addEventListener("click", function() {
        this.classList.add("select-btn");
        });
    }


    var statusUsed = shuffle(objectSelected.status);
    console.log(statusUsed);
    for (let i = 0; i < statusUsed.length; i++) {
        if (statusUsed[i] === true) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelFourScore = addPoints(levelFourScoreDisplay, levelFourScore)
            }, {once : true});
        }
        if (statusUsed[i] === false) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelFourScore = deductPoints(levelFourScoreDisplay, levelFourScore)
            }, {once : true});
        }
    }


    window.levelFourScoreDisplay = document.createElement("div");
    levelFourScoreDisplay.classList.add("timerbox");


//to show correct colors
    // var imageChosenDiv = document.createElement("div");
    // var imageChosen = document.createElement("img");
    // imageChosen.src = objectSelected.image;
    // imageChosenDiv.appendChild(imageChosen);
    // document.body.appendChild(imageChosenDiv);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {document.body.removeChild(levelFourBoxes)
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelFourScoreDisplay)
        document.body.replaceChild(nextDiv02, nextDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelFiveImage())
        document.body.removeChild(levelFourScoreDisplay)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}


        /*
    score on screen
    */
// function showScore() {
//     window.screenScore = document.createElement("div");
//     screenScore.classList.add("timerbox");
//     screenScore.innerText = "Score: " + window.score;
//     document.body.appendChild(screenScore);
// }



/////////////////////////////////////////////////// LEVEL FIVE ///////////////////////////////////////////////////
function showLevelFiveImage() {

    var toSelect = Object.keys(levelFive);
    var randomNum = Math.floor(random() * Math.floor(3));
    var selected = levelFive[toSelect[randomNum]];


    var divImage = document.createElement("div");
    divImage.classList.add("image");
    var image = document.createElement("img");
    image.src = selected.image;
    divImage.appendChild(image);


    //countdown timer
    window.timer = 8;
    var timerBox = document.createElement("div");
    timerBox.classList.add("timerbox");
    timerBox.innerText = timer + " seconds";
    document.body.appendChild(timerBox);


    window.timerInterval = setInterval(countdownTimer, 1000, timerBox);


    document.body.appendChild(divImage);


    //pass the data within 'selected' into showLevelOneColorBox function
    setTimeout(function()
        {document.body.removeChild(divImage)
        document.body.removeChild(timerBox)
        showLevelFiveColorBox(selected)
        stopTimer(timerInterval)},
        8000);
}


function showLevelFiveColorBox(objectSelected) {

    var levelNameDiv = document.createElement("div");
    levelNameDiv.classList.add("timerbox");
    levelNameDiv.innerText = "Level Five"
    document.body.appendChild(levelNameDiv);


    var divFour = document.createElement("div");
    var chooseFour = document.createElement("p");
    chooseFour.classList.add("paragraph");
    chooseFour.innerText = ("Select four colors present in the previous image");
    divFour.appendChild(chooseFour);
    document.body.appendChild(divFour);


    var colorsUsed = shuffle(objectSelected.colors);

    var levelFiveBoxes = document.createElement("div");
    levelFiveBoxes.classList.add("boxes-div-levelthree");


    for (let i = 0; i < 10; i++) {
        console.log("show color boxes!")

        var colorbox = document.createElement("div");
        colorbox.classList.add("colorbox");

        colorbox.id = "box" + i.toString();

        levelFiveBoxes.appendChild(colorbox);
        document.body.appendChild(levelFiveBoxes);

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
    document.getElementById("box9").style.backgroundColor = objectSelected.colors[9];


    var buttons = document.getElementsByClassName("colorbox");
    for (var i = 0; i < buttons.length; i++) {
        document.getElementsByClassName("colorbox")[i].addEventListener("click", function() {
        this.classList.add("select-btn");
        });
    }


    var statusUsed = shuffle(objectSelected.status);
    console.log(statusUsed);
    for (let i = 0; i < statusUsed.length; i++) {
        if (statusUsed[i] === true) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelFiveScore = addPoints(levelFiveScoreDisplay, levelFiveScore)
            }, {once : true});
        }
        if (statusUsed[i] === false) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelFiveScore = deductPoints(levelFiveScoreDisplay, levelFiveScore)
            }, {once : true});
        }
    }


    window.levelFiveScoreDisplay = document.createElement("div");
    levelFiveScoreDisplay.classList.add("timerbox");


//to show correct colors
    // var imageChosenDiv = document.createElement("div");
    // var imageChosen = document.createElement("img");
    // imageChosen.src = objectSelected.image;
    // imageChosenDiv.appendChild(imageChosen);
    // document.body.appendChild(imageChosenDiv);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {document.body.removeChild(levelFiveBoxes)
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelFiveScoreDisplay)
        document.body.replaceChild(nextDiv02, nextDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelSixImage())
        document.body.removeChild(levelFiveScoreDisplay)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}


        /*
    score on screen
    */
// function showScore() {
//     window.screenScore = document.createElement("div");
//     screenScore.classList.add("timerbox");
//     screenScore.innerText = "Score: " + window.score;
//     document.body.appendChild(screenScore);
// }



/////////////////////////////////////////////////// LEVEL SIX ///////////////////////////////////////////////////
function showLevelSixImage() {

    var toSelect = Object.keys(levelSix);
    var randomNum = Math.floor(random() * Math.floor(3));
    var selected = levelSix[toSelect[randomNum]];


    var divImage = document.createElement("div");
    divImage.classList.add("image");
    var image = document.createElement("img");
    image.src = selected.image;
    divImage.appendChild(image);


    //countdown timer
    window.timer = 9;
    var timerBox = document.createElement("div");
    timerBox.classList.add("timerbox");
    timerBox.innerText = timer + " seconds";
    document.body.appendChild(timerBox);


    window.timerInterval = setInterval(countdownTimer, 1000, timerBox);


    document.body.appendChild(divImage);


    //pass the data within 'selected' into showLevelOneColorBox function
    setTimeout(function()
        {document.body.removeChild(divImage)
        document.body.removeChild(timerBox)
        showLevelSixColorBox(selected)
        stopTimer(timerInterval)},
        9000);
}


function showLevelSixColorBox(objectSelected) {

    var levelNameDiv = document.createElement("div");
    levelNameDiv.classList.add("timerbox");
    levelNameDiv.innerText = "Level Six"
    document.body.appendChild(levelNameDiv);


    var divFour = document.createElement("div");
    var chooseFour = document.createElement("p");
    chooseFour.classList.add("paragraph");
    chooseFour.innerText = ("Select four colors present in the previous image");
    divFour.appendChild(chooseFour);
    document.body.appendChild(divFour);


    var colorsUsed = shuffle(objectSelected.colors);

    var levelSixBoxes = document.createElement("div");
    levelSixBoxes.classList.add("boxes-div-levelthree");


    for (let i = 0; i < 12; i++) {
        console.log("show color boxes!")

        var colorbox = document.createElement("div");
        colorbox.classList.add("colorbox");

        colorbox.id = "box" + i.toString();

        levelSixBoxes.appendChild(colorbox);
        document.body.appendChild(levelSixBoxes);

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
    document.getElementById("box9").style.backgroundColor = objectSelected.colors[9];
    document.getElementById("box10").style.backgroundColor = objectSelected.colors[10];
    document.getElementById("box11").style.backgroundColor = objectSelected.colors[11];


    var buttons = document.getElementsByClassName("colorbox");
    for (var i = 0; i < buttons.length; i++) {
        document.getElementsByClassName("colorbox")[i].addEventListener("click", function() {
        this.classList.add("select-btn");
        });
    }


    var statusUsed = shuffle(objectSelected.status);
    console.log(statusUsed);
    for (let i = 0; i < statusUsed.length; i++) {
        if (statusUsed[i] === true) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelSixScore = addPoints(levelSixScoreDisplay, levelSixScore)
            }, {once : true});
        }
        if (statusUsed[i] === false) {
            console.log(statusUsed[i])
            document.getElementById("box" + i.toString()).addEventListener("click", function() {
                window.levelSixScore = deductPoints(levelSixScoreDisplay, levelSixScore)
            }, {once : true});
        }
    }


    window.levelSixScoreDisplay = document.createElement("div");
    levelSixScoreDisplay.classList.add("timerbox");


//to show correct colors
    // var imageChosenDiv = document.createElement("div");
    // var imageChosen = document.createElement("img");
    // imageChosen.src = objectSelected.image;
    // imageChosenDiv.appendChild(imageChosen);
    // document.body.appendChild(imageChosenDiv);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {document.body.removeChild(levelSixBoxes)
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelSixScoreDisplay)
        document.body.replaceChild(nextDiv02, nextDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showFinalScore())
        document.body.removeChild(levelSixScoreDisplay)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}



/////////////////////////////////////////////////// FINAL SCORE PAGE ///////////////////////////////////////////////////
function showFinalScore() {
    window.finalScore = window.levelOneScore + window.levelTwoScore + window.levelThreeScore + window.levelFourScore +
    window.levelFiveScore + window.levelSixScore

    var winEmojiDiv = document.createElement("div");
    winEmojiDiv.classList.add("win-emoji");

    window.screenScore = document.createElement("div");
    screenScore.classList.add("finalscore-display");

    var finalPageDescription = document.createElement("div");
    finalPageDescription.classList.add("final-description");

    if (window.finalScore < 12) {
        winEmojiDiv.innerText = "🥉"
        screenScore.innerText = "You've completed all levels \n and scored " + window.finalScore + " out of 24!"
        finalPageDescription.innerText = "The more you try, the better you get. Don't give up!"
    }
    if (window.finalScore >= 12 && window.finalScore < 20) {
        winEmojiDiv.innerText = "🥈"
        screenScore.innerText = "Hoorah! You completed all levels \n and scored " + window.finalScore + " out of 24!"
        finalPageDescription.innerText = "You got the average score of 12 or higher! \n Play again for other images!"
    }
    if (window.finalScore >= 20 && window.finalScore < 24) {
    winEmojiDiv.innerText = "🥇"
    screenScore.innerText = "Woah! You completed all levels \n and scored " + window.finalScore + " out of 24!"
    finalPageDescription.innerText = "That's amazing! \n Play again for other images!"
    }
    if (window.finalScore === 24) {
    winEmojiDiv.innerText = "🥇"
    screenScore.innerText = "Woah! You completed all levels \n and scored " + window.finalScore + " out of 24!"
    finalPageDescription.innerText = "Holy macarons! You Are The Ultimate Eyedropper! \n Play again for other images!"
    }

    document.body.appendChild(winEmojiDiv);
    document.body.appendChild(screenScore);
    document.body.appendChild(finalPageDescription);

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


/////////////// TRACK LEVEL SCORE ///////////////
function addPoints(display, scoreUsed) {
    scoreUsed = scoreUsed + 1;
    display.innerText = "You scored " + scoreUsed + " out of 4! 🌟";
    return scoreUsed
}

function deductPoints(display, scoreUsed) {
    scoreUsed = scoreUsed - 1;
    display.innerText = "You scored " + scoreUsed + " out of 4! 🌟";
    return scoreUsed
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


