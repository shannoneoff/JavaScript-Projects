function concat_Sentence() {                                //Naming the function
    var first = "Our family went ";                         //Naming variables, in this case, portions of sentences
    var second = "to Halloweentown today ";
    var third = "to get photos with ";
    var fourth = "a giant pumpkin.";
    var full_sentence = first.concat(second, third, fourth);    //Creating a full sentence with the previous variables
    document.getElementById("Concatenated").innerHTML = full_sentence;  //Displays the full sentence
}

var Question = "Well, what do we have here?";               //Sets a global variable

function slice_Demo() {
    var Portion = Question.slice(0, 4);                     //Use of the slice method, which returns characters from
                                                            //the first character in the index through the fifth
    var result = Portion.toUpperCase();                     //Converts all of the displayed characters to upper case
    document.getElementById("Slice").innerHTML = result;    //Displays the sliced characters in all upper case format
}

function search_Demo() {
    var position = Question.search("do");                   //Returns the index number of the first character of the
                                                            //searched word
    document.getElementById("Search").innerHTML = position;
}

function string_Method() {
    var X = 3109;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();  //Displays the number which is the value
                                                                            //of the local variable listed
}

function precision_Method() {
    var X = 14393.353989574;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);  //Displays 7 characters of the numerical value
                                                                        //of the local variable
}

function fixed_Method() {
    var Y = 2349.874;
    document.getElementById("Fixed").innerHTML = Y.toFixed();   //Displays a specified number of characters of the numerical
                                                                //value of the local variable, rounded
}

function valueof_Method() {
    var Y = 35.890;
    document.getElementById("ValueOf").innerHTML = Y.valueOf(); //Displays the primitive value of the variable
}