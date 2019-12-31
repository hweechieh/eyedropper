console.log("heya!")


var timer = 0;
var scoreTracker = 0;
var seed = Math.floor(Math.random()*1000);
console.log(seed);

///////////////////////////////////////////// LEVEL ONE ///////////////////////////////////////////////
var levelOne = {
    tomnjerry : {
        image : 'images/tomnjerry.jpg',
        colors : ["#4778c4", "#eeb8c6", "#3a0203", "#fbdf3d", "#ff8a00", "#00c8bc", "#941f24"] ,
        status : [true , true , true , true , false , false , false]
    },

    mickeymouse : {
        image: 'images/mickeymouse.jpg',
        colors : ["#d77b6c", "#6b0e07", "#c58500", "#957e6e", "#8efbff", "#54b898", "#7e7bff"] ,
        status : [true , true , true , true , false , false , false]
    },

    winniethepooh : {
        image: 'images/winniethepooh.jpg',
        colors : ["#ca645f", "#a30601", "#cc8c22", "#9d391f", "#ff5b31", "#ff5595", "#9d9800"] ,
        status : [true , true , true , true , false , false , false]
    }
};


//start button
var startButton = document.createElement("button");
startButton.classList.add("start-button");
startButton.innerText = "Let's Begin 😎";
document.body.appendChild(startButton);
startButton.addEventListener("click", showLevelOneImage);
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


    document.body.removeChild(startButton);
    document.body.appendChild(image);


    //pass the data within 'selected' into showLevelOneColorBox function
    setTimeout(function()
        {document.body.removeChild(image)
        showLevelOneColorBox(selected)},
        3000);
}


//show and hide color selections (7 boxes)
function showLevelOneColorBox(objectSelected) {

    console.log("OBJECT:  " + shuffle(objectSelected.colors));
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
                console.log("TRUE");
                document.getElementById("box" + i.toString()).addEventListener("click", addPoints, {once : true});
            }
            if (statusUsed[i] === false) {
                console.log(statusUsed[i])
                console.log("FALSE");
                document.getElementById("box" + i.toString()).addEventListener("click", deductPoints, {once : true});
            }
        }
}



/**
    Shuffling based on a seed
**/
function shuffle(array) {
    return array.sort(() => random() - 0.5);
}


function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}


//correct boxes selected
function addPoints() {
        console.log("+1");

}


//wrong boxes selected
function deductPoints() {
    console.log("-1");
}










