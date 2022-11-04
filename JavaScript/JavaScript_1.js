//USING THE SWITCH FUNCTION
function Animal_Function() {                            //Name the function
    var Animal_Output;                                  //Name the variable
    var Animals = document.getElementById("Animal_Input").value;    //Creating an ID
    var Animal_String = " is a great ocean/beach animal!";  //Last part of the text string to display if listed animal
                                                            //is chosen + typed correctly
    switch (Animals) {                                  //Switch function
        case "Seahorse":                                //Telling the computer what to output if this word is input
            Animal_Output = "Seahorse" + Animal_String;
            break;
        case "Seagull":
            Animal_Output = "Seagull" + Animal_String;
            break;
        case "Crab":
            Animal_Output = "Crab" + Animal_String;
            break;
        case "Lobster":
            Animal_Output = "Lobster" + Animal_String;
            break;
        case "Whale":
            Animal_Output = "Whale" + Animal_String;
            break;
        case "Salmon":
            Animal_Output = "Salmon" + Animal_String;
            break;
        default:
            Animal_Output = "Please enter an Animal exactly as written on the above list."; //If input does not match text
                                                                                            //from the list, then this displays
    }
    document.getElementById("Output").innerHTML = Animal_Output;    //This variable will display
}

//USING THE SWITCH FUNCTION
function Nickname_Function() {
    var A = document.getElementsByClassName("Switch");
    A[0].innerHTML = "My nickname is Shani.";              //Giving the computer the text to switch to
}

//START CANVAS
var c = document.getElementById("Canvas1");
var ctx = c.getContext("2d");

//Fill canvas with color
ctx.fillStyle = "rgb(253, 246, 243)";
ctx.fillRect(1, 1, 348, 348);

ctx.font = "50px Verdana";

//Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "purple");
gradient.addColorStop("0.1", "blue");
gradient.addColorStop("0.2", "rgb(0, 218, 248)");
gradient.addColorStop("0.3", "green");
gradient.addColorStop("0.4", "yellow");
gradient.addColorStop("0.5", "orange");
gradient.addColorStop("0.6", "pink");
gradient.addColorStop("0.7", "red");
gradient.addColorStop("0.8", "brown");
gradient.addColorStop("0.9", "black");
gradient.addColorStop("1.0", "white");

//Fill with gradient
ctx.strokeStyle = gradient;
ctx.strokeText("Happy Pride!", 10, 90);