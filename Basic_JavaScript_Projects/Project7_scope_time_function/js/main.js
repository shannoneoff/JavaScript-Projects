var a = 100                                                 //Assign global variable
function add_Function() {                                   //Name function
    document.getElementById("add").innerHTML = (a + 30);    //Establish id and equation
}

function two_Function() {
    var b = 50                                              //Assign local variable
    document.getElementById("two").innerHTML = (b + a);
}

function three_Function() {
    console.log(b + a);                                     //Have answer show in DevTools console only
                                                            //Will show error due to local variable
                                                            //from another function being referenced
}

function get_Date() {
    if (new Date().getHours() < 23) {                       //Utilize time gathered from computer
        document.getElementById("Date").innerHTML = "It must not be 11pm yet today..."; //Statement to display if true (before 11pm)
    }
}

function get_Year() {
    if (new Date().getFullYear() > 1901) {                  //If the current year is after 1901,
        document.getElementById("Year").innerHTML = "It is after the year 1901";    //this statement will be displayed
    }
}

function car_Function() {
    Car = document.getElementById("Model").value;           //Assign the id "Model"
    if (Car >= "Sentra") {                                  //If user input equals "Sentra",
        Model = "Your first car was a Nissan Sentra!"       //then this statement will display...
    }
    else {
        Model = "Too bad it wasn't a Nissan Sentra...  :/"  //...otherwise, this statement will display
    }
    document.getElementById("Car_model?").innerHTML = Model;    //"Model" is taken from user input
}

function Time_function() {
    var Time = new Date().getHours();                       //Requests computer time
    var Reply;                                              //Computer reply is used as a variable
    if (Time < 12 == Time > 0) {                            //If computer time is between 12am and 11:59am,
        Reply = "It is morning time!";                      //then this statement will display
    }
    else if (Time >= 12 == Time < 18) {                     //If computer time is between 12pm and 6pm,
        Reply = "It is afternoon!";                         //then this statement will display
    }
    else {                                                  //If computer time is outside of 12am to 6pm,
        Reply = "It is evening time!";                      //then this statement will display
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}