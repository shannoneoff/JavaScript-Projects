window.alert("Hello and welcome!")                          //Upon loading the page, this message will pop up in an alert box

var Sent1 = "This is the beginning of the string"           //First variable defined
var Sent2 = " and this is the end of the string.  "         //Second variable defined
document.write(Sent1                                       //Concatenated string
    + Sent2);                                              //to be displayed

document.write(7 + 5);                                      //The sum of this equation will be displayed

function Button_Function() {                                //Defining a function and naming it
    var str = "Buttons are fun!";                           //Defining a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the variable into the HTML elementFromPoint
                                                            //with the "Button_Text" id
}