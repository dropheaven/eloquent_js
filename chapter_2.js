/* Looping a Triangle 
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

function triLoop() {
  for(let hash = "#"; hash.length <= 7; hash+= "#") {
    console.log(hash); 
  }
}

// triLoop();

/* FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

function fizzBuzz(limit) {
  for(let num = 1; num <= limit; num++) {
    let fizzBuzzStr = "";
    if (num % 3 == 0) fizzBuzzStr = "Fizz";
    if (num % 5 == 0) fizzBuzzStr += "Buzz";
    console.log(fizzBuzzStr || num)
  }
}

// fizzBuzz(15);

/* Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard. 

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

function chessGrid(size) {
  let width = "";
  let board = "";
  let lineCount = 0;

  while(lineCount < size) {
    lineCount % 2 == 0 ? width += " #" : width += "# ";
  
    if (width.length > size) {
      board += width + "\n";
      width = "";
      lineCount++;
    }
  }

  return board;
}

console.log(chessGrid(10));