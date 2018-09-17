function lineDivider() {
    console.log("--------------------------------------------------------------")
}

/*  Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var output1 = "#";
for (var i = 0; i < 7; i++) {
    console.log(output1);
    output1 += "#";
}
// console.log("Hi");
// console.log(prompt("Hi"));

lineDivider();

/*  FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible
 by 5 (and not 3), print "Buzz" instead.
*/

var output2a;
for (var i = 0; i < 100; i++) {
    if (i % 3 == 0) {
        output2a = "Fizz";
    } else if (i % 5 == 0) {
        output2a = "Buzz";
    } else {
        output2a = i;
    }
    console.log(output2a);
}

lineDivider();

/*
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible
 by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

var output2b;
for (var i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        output2b = "FizzBuzz " + i;
    } else if (i % 3 == 0) {
        output2b = "Fizz " + i;
    } else if (i % 5 == 0) {
        output2b = "Buzz " + i;
    } else {
        output2b = i;
    }
    console.log(output2b);
}

lineDivider();

/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters
 to separate lines. At each position of the grid there is either a space or a "#" character.
  The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change
 the program so that it works for any size, outputting a grid of the given width and height.
*/

var size = 8;
var board = "";
var boardHTML = "";

for (var row = 0; row < size; row++) {
    for (var col = 0; col < size; col++) {
        // odd or even row?
        if (row % 2 == 0) { // even but not 
            if (col % 2 == 0) {
                board += " ";
                boardHTML += "&nbsp;";
            } else {
                board += "#";
                boardHTML += "#";
            }
        } else {
            if (col % 2 == 0) {
                board += "#";
                boardHTML += "#";
            } else {
                board += " ";
                boardHTML += "&nbsp;";
            }
        }
    }
    board += "\n";
    boardHTML += "<br>"
}
console.log(board);
document.write(boardHTML);


