/*
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
  Then alert your name using dot notation.
*/

var me = {name: "Jericho", age: "20"}
alert(me.name)

////////// PROBLEM 2 //////////

/*
  Make a 'favoriteThings' object that contains the following keys:

    band, food, person, book, movie, holiday

  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

var favoriteThings = {
  band: "The 1975", 
  food: "Adobo", 
  person: "my mother", 
  book: "Percy Jackson", 
  movie: "Avengers: Infinity War",
  holiday: "Christmas"
}

/*
  After you've made your object, use bracket or dot notation to add another key named 'car' with the
  value being your favorite car and then another key named 'brand' with the value being your favorite brand.
*/

favoriteThings.car = "van"
favoriteThings.brand = "Toyota"

/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'.
*/

//Code here

favoriteThings.food = "Chicken Nuggets"
favoriteThings.book = "Harry Potter"

/*
  Create an empty Object called backPack.
  Now, create a variable called 'item' and set it equal to the string 'firstPocket'.
  Using bracket notation, add a 'firstPocket' key (or property) to backPack, using 'item'.
  Set the value of that key to 'chapstick'.
  Using dot notation, add another key (or property) to your backPack object that is named color, with the value being the color of your backpack.
*/

var backPack = {}
var item = "firstPocket"
backPack[item] = "chapstick"
backPack.color = "black"

/*
  After you do the above, alert your entire backPack object.
*/

alert(backPack)
/*
You probably noticed that it just alerted [object Object].
Alerting to see the data in your Object doesn't work so well.
Instead, console.log your whole backPack object and then check out the console.
*/

console.log(backPack);

////////// PROBLEM 4 //////////

// Do not edit the code below.
var user2 = {
  name: 'Aodhan',
  age: 28,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'aodhan.hayter@gmail.com',
  birthday: '11/03/1990',
  username: 'aodhan.hayter',
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Aodhan Hayter' and email -> 'aodhan@boom.camp'.
  Make that change without modifying the original object code above.
*/

user2.name = "Aodhan Hayter"
user2.email = "aodhan@boom.camp"

/////////////////////// EXTRA PRACTICE PROBLEMS BELOW ////////////////////
////////// MOVE ONTO NEXT SECTION BEFORE WORKING ON THESE ////////////////

////////// PROBLEM 5 //////////

/*
  Create an empty object called methodCollection.
*/

var methodCollection = {}

/*
  Now add two methods (functions that are properties on objects) to your methodCollection object.
  One called 'alertHello' which alerts 'hello' and another method called 'logHello' which logs 'hello' to the console.
*/

methodCollection.alertHello = function(){
  alert('hello')
}
methodCollection.logHello = function(){
  console.log('hello')
}

/*
  Now call your alertHello and logHello methods.
*/

methodCollection.alertHello()
methodCollection.logHello()

////////// PROBLEM 6 //////////

/*
  Create a function called makePerson which takes in name, birthday, ssn as its parameters.
  Return a new object with all of the information that you passed in.
*/

function makePerson(name, birthday, ssn){
  var obj = {name: name, birthday: birthday, ssn: ssn}
  return obj;
}

////////// PROBLEM 7 //////////

/*
  Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object.
  Return that object so that whenever you invoke makeCard, you get a brand new credit card.
*/

function makeCard(cardNumber, expirationDate, securityCode) {
  var creditCard = {cardNumber: cardNumber, expirationDate: expirationDate, securityCode: securityCode}
  return creditCard
}
