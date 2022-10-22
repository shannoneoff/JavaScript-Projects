function Ride_Function() {              //Naming the function to be referenced in the HTML
    var Height, Can_ride;               //Naming variables
    Height = document.getElementById("Height").value;   //Gave the variable an id to reference in HTML
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //Utilizing the ternary operator for computer to
                                                                            //decide which statement to display if true or false
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";     //The statement which will print on the webpage
                                                                            //when function is run
}

function Voter_Function() {
    var Age, Can_vote;                  //Variables are "Age" and "Can_vote"
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote. :/" : "You can vote!";
    document.getElementById("Voter").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {    //Use of object constructor function
    this.Vehicle_Make = Make;                   //Use of "this" keyword to indicate where the variable is to go
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");  //Giving the computer values for the object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {                         //Function used to display text
    document.getElementById("Keywords_and_Constructors").innerHTML =    //Gives the computer text to display based upon
                                                                        //constructor function
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year + ".";
}

function House(Type, Stories, Year, Color) {
    this.House_Type = Type;
    this.House_Stories = Stories;
    this.House_Year = Year;
    this.House_Color = Color;
}
var Kat = new House("Bungalow", 2, 1923, "Grey");
var Shannon = new House("Ranch", 1, 1992, "Green");
var Melody = new House("Bungalow", 1, 1924, "Yellow");
function houseFunction() {
    document.getElementById("New_and_This").innerHTML =
        "Melody has a " + Melody.House_Color + "-colored, " + Melody.House_Stories +
        "-story " + Melody.House_Type + " built in " + Melody.House_Year + ".";
}

function nest_Function() {
    document.getElementById("Nested_Function").innerHTML = nest();
    function nest() {                           //Nested function, or subprogram
        var Starting_point = 11;
        function plus_Ten() { Starting_point += 10; }   //Has the computer add 10 to the variable value
        plus_Ten();                             //Name of nested function
        return Starting_point;                  //Computer will return answer
    }
}