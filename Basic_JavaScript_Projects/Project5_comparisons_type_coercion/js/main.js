document.write(typeof "eleven");                                //Writes out the type of entry, either number or string;
                                                                //in this case, a string.
document.write("50" + 73);                                      //Type coercion forcing the number 50 to be printed out
                                                                //instead of added to 73
function infinity_Function() {
    document.getElementById("InfinityTest").innerHTML = 2E400;  //A number which will produce the answer 'Infinity'
}

function negInfinity_Function() {
    document.getElementById("NegInfinity").innerHTML = -3E400;  //A number which will produce the answer '-Infinity'
}

function booFunction() {
    document.getElementById("booTrue").innerHTML = 10 >= 1;     //A comparison which will produce the Boolean 'true'
}

function boo2Function() {
    document.getElementById("booFalse").innerHTML = 30 < 12;    //A comparison which will produce the Boolean 'false'
}

function consoleMath() {
    console.log(4 * 8);                                         //The next 4 functions produce answers to the Booleans
}                                                               //within the console in Dev Tools

function consoleBoolean() {
    console.log(10 >= 79)
}

function consoleBooTrue() {
    console.log(5 == (2 + 3));
}

function consoleBooFalse() {
    console.log(3 == (7 * 5));
}

function tripleEqual1() {
    var x = 3 / 4 / 1977;                                       //Variables of same type and value
    var y = 3 / 4 / 1977;
    document.getElementById("tripleTrue").innerHTML = x === y;  // '===' checks to see whether the value on the left equals
}                                                               //the value on the right

function tripleEqual2() {
    var a = "elephant";                                         //Variables of different type and value
    var b = 1000;
    document.getElementById("tripleFalse1").innerHTML = a === b;
}

function tripleEqual3() {
    var m = "March 4, 1977";                                    //Variables of different type and same value
    var n = 3 / 4 / 1977;
    document.getElementById("tripleFalse2").innerHTML = m === n;
}

function tripleEqual4() {
    var f = 4 / 3 / 1977;                                       //Variables of same type and different value
    var g = 3 / 4 / 1977;
    document.getElementById("tripleFalse3").innerHTML = f === g;
}

function andOperator() {
    document.getElementById("andOp").innerHTML = (3 == 3 && 5 > 1); //Comparing Booleans with the AND operator
}

function andOperator2() {
    document.getElementById("andOp2").innerHTML = (4 == 13 && 47 < 100);
}

function orOperator() {
    document.getElementById("orOp").innerHTML = (4 == 13 || 47 < 100);  //Comparing Booleans with the OR operator
}

function orOperator2() {
    document.getElementById("orOp2").innerHTML = (4 == 13 || 47 > 100);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);      //Comparing Booleans with the NOT operator
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20 < 10);
}