function Call_Loop() {
    var addTwo = "";
    var X = 3;                              //Count starts at 3
    while (X < 20) {                        //As long as the count is <20, this loop is performed
        addTwo += "<br>" + (X + 2);         //Adds a line break after each number, adds 2 to the starting count number
        X++;                                //Every number is increased in increments of 1
    }
    document.getElementById("Loop").innerHTML = addTwo;
}

function stringLength() {
    var text = "What's your name?";         //Setting the string as the variable
    var length = text.length;               //Finds the length of the string
    document.getElementById("Length").innerHTML = length;   //Displays the string length in number form
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   //The array of index values
var Content = "";                           //Sets the value of variable "Content"
var Y;                                      //Creates the variable "Y"
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {  //Creates a for loop
        Content += Instruments[Y] + "<br>"; //List values from the array with line breaks between
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var kid_Array = [];                     //Sets the array as the variable
    kid_Array[0] = "Thomas";                //Assigns values to each index position within the array
    kid_Array[1] = "Mike";
    kid_Array[2] = "Don";
    kid_Array[3] = "Kent";
    document.getElementById("Array").innerHTML = "The firstborn kid is " + kid_Array[0] + ".";  //Displays a sentence
}

function constant_function() {
    const householdappl = { type: "mixer", brand: "Kitchen Aid", color: "teal" };   //Constructs an object with properties
    householdappl.color = "orange";         //Changes one of the properties of the object
    householdappl.price = "$400";           //Adds a property of the object
    document.getElementById("Constant").innerHTML = "The cost of the " + householdappl.color + " " + householdappl.type
        + " was " + householdappl.price + ".";  //Displays a sentence using 3 different properties of the object
}

function let_Function() {
    var imposter = "fake";                  //Sets variable and a string value
    document.write(imposter);               //Prints the local variable's value
    {
        let imposter = "zero";              //Gives the variable a new value for the portion of the function between brackets
        document.write("<br>" + imposter);  //Prints the variable's new value
    }
    document.write("<br>" + imposter);      //Prints the original variable value
}

document.getElementById("Return").innerHTML = "Pi = " + Math.PI;    //Displays a string with the math variable
function return_Function() {
    return Math.PI;                         //Tells the computer to return the value of the math variable
}

let house = {                               //Sets the variable
    style: "Ranch ",                        //Gives properties to the variable
    stories: "two-",
    year: "1992 ",
    color: "green ",
    description: function () {              //For the description, a function will be run
        return "The house is a " + this.color + this.year + this.stories + "story " + this.style;   //Uses 'this' to return
                                                            //values in order to build a sentence to display
    }
};
document.getElementById("House").innerHTML = house.description();

function break_Function() {
    let text = "";

    Loop1:                                  //Starts the first loop
    for (let i = 7; i < 20; i++) {          //The for loop is given parameters
        text += i + "<br>";                 //Each number value will display followed by a line break

        Loop2:                              //Starts the second loop
        for (let i = 13; i < 25; i++) {     //This for loop is given different parameters
            text += i + "<br>";
            if (i === 15) break Loop1;      //Break stops the first loop when the value is equal to the number 15
        }
    }
    document.getElementById("Break").innerHTML = text;
}

function continue_Function() {
    let text = "";
    for (let i = -1; i < 13; i++) {
        if (i === 6) { continue; }          //Continue causes the computer to run the loop and skip over one value when it equals 6
        text += "The number is " + i + "<br>";
    }
    document.getElementById("Continue").innerHTML = text;
}