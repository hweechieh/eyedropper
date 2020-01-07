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
        correct: 'images/levelOne/tomnjerry-right.png',
        colors : ["#3d7ed2", "#feb9cf", "#ffe400", "#a55b14", "#5aa4eb", "#001bff", "#014630"] ,
        status : [true , true , true , true , false , false , false]
    },

    lionking : {
        image : 'images/levelOne/lionking.png',
        correct: 'images/levelOne/lionking-right.png',
        colors : ["#b9411e", "#f1b8a4", "#024f6b", "#d73c27", "#28c3d8", "#b184f4", "#46bee1"] ,
        status : [true , true , true , true , false , false , false]
    },

    winniethepooh : {
        image : 'images/levelOne/winniethepooh.png',
        correct: 'images/levelOne/winniethepooh-right.png',
        colors : ["#cc8c22", "#a30601", "#ca645f", "#fec436", "#3373dd", "#5cf9fe", "#359ba0"] ,
        status : [true , true , true , true , false , false , false]
    }
};


///////////////////////////////////////////// LEVEL TWO ///////////////////////////////////////////////
var levelTwo = {
    castle : {
        image : 'images/levelTwo/castle.png',
        correct: 'images/levelTwo/castle-right.png',
        colors : ["#0f76a3", "#eece74", "#ab5030", "#67765b", "#f0895c", "#11318b", "#54afcf", "#9889a4"] ,
        status : [true , true , true , true , false , false , false, false]
    },

    ponyo : {
        image : 'images/levelTwo/ponyo.png',
        correct: 'images/levelTwo/ponyo-right.png',
        colors : ["#f94e5d", "#f1715b", "#008b9b", "#eec29c", "#64ff97", "#a01100", "#72eaff", "#06b1a2"] ,
        status : [true , true , true , true , false , false , false, false]
    },

    spiritedaway : {
        image : 'images/levelTwo/spiritedaway.png',
        correct: 'images/levelTwo/spiritedaway-right.png',
        colors : ["#0574a2", "#7eb385", "#e4d0b5", "#c9e0ee", "#fa8b5d", "#361f11", "#1b2f4a", "#814c7a"] ,
        status : [true , true , true , true , false , false , false, false]
    }
};


///////////////////////////////////////////// LEVEL THREE ///////////////////////////////////////////////
var levelThree = {
    janice : {
        image : 'images/levelThree/janice.png',
        correct: 'images/levelThree/janice-right.png',
        colors : ["#b5cacd", "#849d90", "#f7c3b2", "#723e35", "#f8d5cf", "#69604f", "#8dc1ca", "#083c4d", "#4a3532"] ,
        status : [true , true , true , true , false , false , false , false, false]
    },

    markconlan : {
        image : 'images/levelThree/markconlan.png',
        correct: 'images/levelThree/markconlan-right.png',
        colors : ["#11d3c3", "#ff5a61", "#12848e", "#f9c909", "#ee2c3c", "#00a59e", "#0636f6", "#00aacc", "#e18b18"] ,
        status : [true , true , true , true , false , false , false , false, false]
    },

    whooli : {
        image : 'images/levelThree/whooli.png',
        correct: 'images/levelThree/whooli-right.png',
        colors : ["#edc39d", "#aec279", "#68c8c5", "#615d39", "#49aab2", "#9ea2c6", "#97373a", "#513d86", "#123c62"] ,
        status : [true , true , true , true , false , false , false , false, false]
    }
};


///////////////////////////////////////////// LEVEL FOUR ///////////////////////////////////////////////
var levelFour = {
    farmhouse : {
        image : 'images/levelFour/farmhouse.png',
        correct: 'images/levelFour/farmhouse-right.png',
        colors : ["#d6c169", "#8eb059", "#a93e14", "#7fc2b6", "#d4b25c", "#78ffe8", "#293e96", "#56c1eb", "#714fa6", "#803d49"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    },

    potato : {
        image : 'images/levelFour/potato.png',
        correct: 'images/levelFour/potato-right.png',
        colors : ["#ff0000", "#fbfa7c", "#b17600", "#deaf35", "#f8d23b", "#86aced", "#2150ca", "#4e89ff", "#040583", "#2150ca"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    },

    starrynight : {
        image : 'images/levelFour/starrynight.png',
        correct: 'images/levelFour/starrynight-right.png',
        colors : ["#bfa000", "#3b48a7", "#9eb67d", "#7d9abc", "#d3d98f", "#b1db61", "#614982", "#405fff", "#c4b758", "#826543"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    }
};


///////////////////////////////////////////// LEVEL FIVE ///////////////////////////////////////////////
var levelFive = {
    grass : {
        image : 'images/levelFive/grass.png',
        correct: 'images/levelFive/grass-right.png',
        colors : ["#f4e56f", "#234f7f", "#cb9025", "#071b30", "#9effce", "#0074ff", "#f8e4cf", "#346fda", "#dcb080", "#0b1a90"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    },

    landscape : {
        image : 'images/levelFive/landscape.png',
        correct: 'images/levelFive/landscape-right.png',
        colors : ["#6e552d", "#9fab5f", "#143428", "#696315", "#f8d23b", "#86aced", "#91aad2", "#6054a0", "#ebcbd7", "#969cea"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    },

    nile : {
        image : 'images/levelFive/nile.png',
        correct: 'images/levelFive/nile-right.png',
        colors : ["#7b460d", "#7f91a8", "#648cc4", "#000507", "#d3d98f", "#b1db61", "#84b9f2", "#806e57", "#9b733b", "#ff5e1d"] ,
        status : [true , true , true , true , false , false , false , false, false, false]
    }
};


///////////////////////////////////////////// LEVEL SIX ///////////////////////////////////////////////
var levelSix = {
    alex : {
        image : 'images/levelSix/alex.png',
        correct: 'images/levelSix/alex-right.png',
        colors : ["#bf9c5e", "#282f3f", "#64a5c0", "#0074ff", "#ffb900", "#ffda00", "#9b5a3f", "#d7d0c0", "#4063a1", "#49a481"] ,
        status : [true , true , true , false , false , false , false, false, false, false, false]

    },

    erwin : {
        image : 'images/levelSix/erwin.png',
        correct: 'images/levelSix/erwin-right.png',
        colors : ["#d5b34c", "#392919", "#83572b", "#86aced", "#ffff2b", "#df8200", "#2a4cb3", "#c6d6e6", "#7ca8d4", "#49a481"] ,
        status : [true , true , true , false , false , false , false, false, false, false]
    },

    tim : {
        image : 'images/levelSix/tim.png',
        correct: 'images/levelSix/tim-right.png',
        colors : ["#cb3739", "#5d6037", "#ab7e5d", "#b1db61", "#1c83ff", "#0b33cd", "#34c8c6", "#a29fc8", "#5481a2", "#49a481"] ,
        status : [true , true , true , false , false , false , false, false, false, false]
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
instructionPara.innerText = ("\n \n Hello there! \n In this game, your eyes will be the eyedropper! \n \n Here's what you gotta do: \n \n 1. Look closely at the images and remember the colors for SIX LEVELS. \n You have limited time to remember as much as you can. \n \n 2. When time is up, choose wisely because you can't unselect!\n No time limit! \n \n If you score >= 20, you're a certified professional eyedropper 🏆 \n (that's a pretty big deal 👻) \n \n \n");
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

    //It will return the keys in level one as arrays: [image, colors, status, correct]
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
    levelOneScoreDisplay.classList.add("screenscore");


    //display right answer
    var rightAnswerDiv = document.createElement("div");
    rightAnswerDiv.classList.add("right-answer-div");
    var rightAnswer = document.createElement("img");
    rightAnswer.src = objectSelected.correct;
    rightAnswerDiv.appendChild(rightAnswer);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button02")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv);
        document.body.prepend(levelOneScoreDisplay)
        document.body.replaceChild(rightAnswerDiv, levelOneBoxes)
        document.body.replaceChild(nextDiv02, nextDiv)
        document.body.appendChild(rightAnswerDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelTwoImage())
        document.body.removeChild(levelOneScoreDisplay)
        document.body.removeChild(rightAnswerDiv)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}



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
    'window' is used so that the global var 'timer = 7' will be reset to any new value because it now explicitly
    establish the new timer as a global

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
    chooseFour.classList.add("level-instruction");
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
    levelTwoScoreDisplay.classList.add("screenscore");


    //display right answer
    var rightAnswerDiv = document.createElement("div");
    rightAnswerDiv.classList.add("right-answer-div");
    var rightAnswer = document.createElement("img");
    rightAnswer.src = objectSelected.correct;
    rightAnswerDiv.appendChild(rightAnswer);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button02")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelTwoScoreDisplay)
        document.body.replaceChild(rightAnswerDiv, levelTwoBoxes)
        document.body.replaceChild(nextDiv02, nextDiv)
        document.body.appendChild(rightAnswerDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelThreeImage())
        document.body.removeChild(levelTwoScoreDisplay)
        document.body.removeChild(rightAnswerDiv)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}



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
    chooseFour.classList.add("level-instruction");
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
    levelThreeScoreDisplay.classList.add("screenscore");


    //display right answer
    var rightAnswerDiv = document.createElement("div");
    rightAnswerDiv.classList.add("right-answer-div");
    var rightAnswer = document.createElement("img");
    rightAnswer.src = objectSelected.correct;
    rightAnswerDiv.appendChild(rightAnswer);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button02")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelThreeScoreDisplay)
        document.body.replaceChild(rightAnswerDiv, levelThreeBoxes)
        document.body.replaceChild(nextDiv02, nextDiv)
        document.body.appendChild(rightAnswerDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelFourImage())
        document.body.removeChild(levelThreeScoreDisplay)
        document.body.removeChild(rightAnswerDiv)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}




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
    chooseFour.classList.add("level-instruction");
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
    levelFourScoreDisplay.classList.add("screenscore");


    //display right answer
    var rightAnswerDiv = document.createElement("div");
    rightAnswerDiv.classList.add("right-answer-div");
    var rightAnswer = document.createElement("img");
    rightAnswer.src = objectSelected.correct;
    rightAnswerDiv.appendChild(rightAnswer);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button02")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelFourScoreDisplay)
        document.body.replaceChild(rightAnswerDiv, levelFourBoxes)
        document.body.replaceChild(nextDiv02, nextDiv)
        document.body.appendChild(rightAnswerDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelFiveImage())
        document.body.removeChild(levelFourScoreDisplay)
        document.body.removeChild(rightAnswerDiv)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}




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
    chooseFour.classList.add("level-instruction");
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
    levelFiveScoreDisplay.classList.add("screenscore");


    //display right answer
    var rightAnswerDiv = document.createElement("div");
    rightAnswerDiv.classList.add("right-answer-div");
    var rightAnswer = document.createElement("img");
    rightAnswer.src = objectSelected.correct;
    rightAnswerDiv.appendChild(rightAnswer);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button02")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelFiveScoreDisplay)
        document.body.replaceChild(rightAnswerDiv, levelFiveBoxes)
        document.body.replaceChild(nextDiv02, nextDiv)
        document.body.appendChild(rightAnswerDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showLevelSixImage())
        document.body.removeChild(levelFiveScoreDisplay)
        document.body.removeChild(rightAnswerDiv)
        document.body.removeChild(nextDiv02)
        }, {once : true}))

}




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
    chooseFour.classList.add("level-instruction");
    chooseFour.innerText = ("Select three colors present in the previous image");
    divFour.appendChild(chooseFour);
    document.body.appendChild(divFour);


    var colorsUsed = shuffle(objectSelected.colors);

    var levelSixBoxes = document.createElement("div");
    levelSixBoxes.classList.add("boxes-div-levelthree");


    for (let i = 0; i < 10; i++) {
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
    levelSixScoreDisplay.classList.add("screenscore");


    //display right answer
    var rightAnswerDiv = document.createElement("div");
    rightAnswerDiv.classList.add("right-answer-div");
    var rightAnswer = document.createElement("img");
    rightAnswer.src = objectSelected.correct;
    rightAnswerDiv.appendChild(rightAnswer);


    var nextDiv = document.createElement("div");
    nextDiv.classList.add("next-button")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv.appendChild(nextButton);
    document.body.appendChild(nextDiv);


    var nextDiv02 = document.createElement("div");
    nextDiv02.classList.add("next-button02")
    var nextButton = document.createElement("img");
    nextButton.src = ("assets/next.png");
    nextDiv02.appendChild(nextButton);


    document.getElementsByTagName(nextDiv.addEventListener("click", function()
        {
        document.body.removeChild(divFour)
        document.body.removeChild(levelNameDiv)
        document.body.prepend(levelSixScoreDisplay)
        document.body.replaceChild(rightAnswerDiv, levelSixBoxes)
        document.body.replaceChild(nextDiv02, nextDiv)
        document.body.appendChild(rightAnswerDiv)
        }, {once : true}))


    document.getElementsByTagName(nextDiv02.addEventListener("click", function()
        {(showFinalScore())
        document.body.removeChild(levelSixScoreDisplay)
        document.body.removeChild(rightAnswerDiv)
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



// /////////// REPLAY BTN ///////////
// var replayDiv = document.createElement("div");
// replayDiv.src =



//Used seed to create our own random to be used for the status portion
/////////// RANDOMISE WITH SEED ///////////
function random() {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}


/////////////// TRACK LEVEL SCORE ///////////////
function addPoints(display, scoreUsed) {
    scoreUsed = scoreUsed + 1;
    display.innerText = "You scored " + scoreUsed + " this level! 🌟";
    return scoreUsed
}


function deductPoints(display, scoreUsed) {
    scoreUsed = scoreUsed - 0;
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


