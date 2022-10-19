function addition_Function() {                      //names the function
    var addition = 5 + 9;                           //assigns the variable as an addition equation
    document.getElementById("Add").innerHTML = "5 + 9 = " + addition;   //references the id to be used in HTML and text to
                                                                        //display along with the actual math
}

function subtraction_Function() {
    var subtraction = 7 - 3;                        //assigns the variable as a subtraction equation
    document.getElementById("Subtract").innerHTML = "7 - 3 = " + subtraction;
}

function multiplication_Function() {
    var multiply = 6 * 8;                           //assigns the variable as a multiplication equation
    document.getElementById("Multiply").innerHTML = "6 x 8 = " + multiply;
}

function division_Function() {
    var divide = 50 / 5;                            //assigns the variable as a division equation
    document.getElementById("Divide").innerHTML = "50 / 5 = " + divide;
}

function allSortsofMath() {
    var simple_Math = (5 + 3) * 11 / 2 - 8;         //assigns the variable to a more complicated but still simple math equation
    document.getElementById("Math").innerHTML = "5 plus 3, multiplied by 11, divided in half, then subtracted by 8 equals " + simple_Math;
}

function modulus_Operator() {
    var modulus = 43 % 4;                           //the modulus variable will divide the first number by the second with the
                                                    //result being the remainder of the equation
    document.getElementById("Modulus").innerHTML = "The remainder of 43 divided by 4 is: " + modulus;
}

function negation_Operator() {                      //causes a number to show as negative
    var x = 17
    document.getElementById("Negation").innerHTML = "An example of a negation operator: " + -x;
}

function increment_Operator() {
    var Y = 9;
    Y++;                                            // '++' will produce a number one step up from another
    document.write(Y);                              //document.write will cause the result of the operation to display on a new page
}

function decrement_Operator() {
    var Y = 17
    Y--;                                            // '--' will produce a number one step down from another
    document.write(Y);
}

window.alert(Math.random() * 100);                  //causes an alert box to display with a random number between 1 and 100

function asin_Math() {
    document.getElementById("asinhDemo").innerHTML = "The hyperbolic arcsine of 11 is: " + Math.asinh(11);  //asinh(x) is an example of
                                                                                                            //a Math Object
}