function myFunction() {                                         //Defined the function name
    var sentence = "String text part 1";                        //Assigned the variable
    sentence += " concatenates with string text part 2";        //Assigned a second variable in a concatenated string
    document.getElementById("Concatenate").innerHTML = sentence;//Modifies the HTML content to display the variable after the words are
                                                                //clicked
}