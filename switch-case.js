// The variable n stores an integer from 0 to 9. Using the switch statement, write a script that, depending on the number, will output a word (For example, if n=3, then the word "three" will be displayed)

let n = 25;

switch (n) {
  case 0:
    console.log("zero");
    break;
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  case 4:
    console.log("four");
    break;
  case 5:
    console.log("five");
    break;
  case 6:
    console.log("six");
    break;
  case 7:
    console.log("seven");
    break;
  case 8:
    console.log("eight");
    break;
  case 9:
    console.log("nine");
    break;
  default:
    console.log(`The number ${n} is not a digit`);
}
