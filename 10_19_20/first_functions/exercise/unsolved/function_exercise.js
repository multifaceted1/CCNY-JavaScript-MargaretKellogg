/*
• Declare a function that takes any string as an argument and
  console logs to the user the text they've entered, invoke
  it after it has been declared
*/
//insert code here
//<------------------------------------------------------->
function words(funksion) {
  
  funksion = prompt("let's log words in console!");
  console.log(funksion);
}
words();


//<------------------------------------------------------->

/*
• Declare a function that takes no arguments but prints something
  to the console, invoke it after it has been declared
*/
//insert code here
//<------------------------------------------------------->

function doThis(){
  console.log("text here.");
}
doThis();

//<------------------------------------------------------->

/*
• Declare a function that takes 2 arguments and returns the value of those 2
  arguments concatanated together
*/
//insert code here
//<------------------------------------------------------->
function addThese(string1, string2){
  return string1 + " " + string2;
}
console.log(addThese("Happy", "Halloween!"));

//<------------------------------------------------------->

/*
• Declare a function that receives an input of door
  1, 2 or 3. Depending upon which virtual "door" was entered, the
  function will tell the user they've received a different "prize"
  in an alert. Try running it after it has been declared a few times
  with each door option.
*/
//insert code here
//<------------------------------------------------------->

function randomDoor(doorNumber)
{
if(doorNumber == 1) {
  alert("You win a stuffed animal!")
} else if (doorNumber == 2) {
  alert("You win a pile of gold!")
} else {
  alert("You win a stapler!");
}
}
randomDoor(2);

//<------------------------------------------------------->
