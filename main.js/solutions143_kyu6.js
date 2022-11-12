//Make everyone happy :)


/*
Overview
We often use smiley faces in correspondence with other people. They allow us to quickly show our reaction to the person(s) we are talking to.

But one day you wanted to make your correspondence more joyful. So today you have the opportunity to make it happen.

Task:
In this kata, your task will be to replace sad emoticons with funny ones.

The emoticons, will be represented from:

Eyes: marked as :, ; or =
Nose (optional): marked as - or ~
Mouth: marked as ( or [
Examples:
smile("Howdy :(")  // should return "Howdy :)"
smile("Never be sad =[")  // should return "Never be sad =]"
smile("Change this `=(` and this `:[`")  // should return "Change this `=)` and this `:]`"
*/

const smile = text =>
  text.split('')
  .map((e, i, a) => e === '(' && ':;=-~'.includes(a[i-1]) ? ')' 
                  : e === '[' && ':;=-~'.includes(a[i-1]) ? ']' 
                  : e)
  .join('');

//1. split the string into an array of characters
//2. map through the array--if the array is a sad face with either '(' or '[', replace the bracket with the opposite bracket
//3. return the resulting array, but as one joined string
