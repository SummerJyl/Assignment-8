//STEP 1
// Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

String[] movieNames = new String[5];
movies[0] = ("Oppenheimer");
movies[1] = ("Blade Runner");
movies[2] = ("Dune");
movies[3] = ("Ghostbusters");
movies[4] = ("Love Actually");

var movies = ["Oppenheimer", "Blade Runner", "Dune", "Ghostbusters", "Love Actually"];
window.document.write(movies[1]);

// Movies I like:
// Movie 1
// Movie 2
// Movie 3
// …

// STEP 2
// Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until //
// you have 5 total movies in your array. Then, use the console to display the first movie in your array.
var movies = new Array(5);
movies[0] = "Oppenheimer";
movies[1] = "Blade Runner"
movies[2] = "Dune";
movies[3] = "Ghostbusters";
movies[4] = "Love Actually";
window.document.write(movies[0]);

// STEP 3
// Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in 
// the array.
var movies = new Array(6,);
movies[0] = "Oppenheimer";
movies[1] = "Blade Runner"
movies[2] = "Dune";
movies[3] = "Ghostbusters";
movies[4] = "Ghostbusters 2";
movies[5] = "Love Actually";
window.document.write(movies.length);

// STEP 4
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete 
// operator to remove the first movie in the array. Use the console to display the contents of the array.
var movies = [];
movies[0] = "Oppenheimer";
movies[1] = "Blade Runner"
movies[2] = "Dune";
movies[3] = "Ghostbusters";
movies[4] = "Love Actually";
delete movies[0];
window.console.log(movies);

//STEP 5
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in 
// loop to iterate through the array and display each movie within the console window.
var movies = ["Oppenheimer", "Blade Runner", "Dune", "Ghostbusters", "Ghostbusters 2", "Love Actually", "Jaws"];

/*var i;
for (i = 0; i < movies.length; i += 1) {
   window.document.write(movies[movie] + "<br>");
}

movies.forEach(function (movies) {
   "use strict";
   window.document.write(movies) + "<br>");
};

//STEP 6
// Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
var movies = ["Oppenheimer", "Blade Runner", "Dune", "Ghostbusters", "Ghostbusters 2", "Love Actually", "Jaws"];

var i;
for (i in movies) {
   window.document.write(movies[i] + "<br>");
}

//STEP 7
// Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
var movies = ["Oppenheimer", "Blade Runner", "Dune", "Ghostbusters", "Ghostbusters 2", "Love Actually", "Jaws"];

   window.document.write(movies.sort());

   /*var i;
   for (i - 0; 1 < movies.length; i += 1) {
      window.document.write(movies[i] + "<br>");
}*/

//STEP 8
// Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within 
// the console window so that it’s formatted to look like this (note the spacing, you must include that too):
var movies = ["Oppenheimer", "Blade Runner", "Dune", "Ghostbusters", "Ghostbusters 2", "Love Actually", "Jaws", "..."];
var leastFavMovies = ["Ghostbusters 3", "Jaws 3", "Dune", "..."].concat(movies);

window.document.write(leastFavMovies + "<br><br>");

for (var i = 0; i < movies.length; i += 1) {
   window.document.write(movies[i] +"<br>");
}

// Movies I regret watching:
// Movie 1
// Movie 2
// Movie 3
// …

//STEP 9
// Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
var movies = ["Oppenheimer", "Blade Runner", "Dune", "Ghostbusters", "Ghostbusters 2", "Love Actually", "Jaws", "..."];
movies = movies.concat("Ghostbusters 3", "Jaws 3", "Dune");
window.document.write(movies);

//STEP 10
// Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
var movies = ["Oppenheimer", "Blade Runner", "Dune", "Ghostbusters", "Ghostbusters 2", "Love Actually", "Jaws"];
movies = movies.pop();
window.document.write(movies);

//STEP 11
// Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
var movies = ["Oppenheimer", "Blade Runner", "Dune", "Ghostbusters", "Ghostbusters 2", "Love Actually", "Jaws"];
movies = movies.shift();
window.document.write(movies);

//STEP 12
// Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
var movies = ["Oppenheimer", "Blade Runner", "Dune", "Ghostbusters", "Ghostbusters 3", "Love Actually", "Jaws 3"];
var dislikedMoviesIndices = [];
for (var i = 0; i < movies.length; i++) {
   if (movies[i] === "Jaws 3" || movies[i] === "Ghostbusters 3") {
      dislikedMoviesIndices.push(i);
   }
}
console.log("Indices of disliked movies:", dislikedMoviesIndices);
var likedMovies = ["Oppenheimer", "Blade Runner", "Dune"];
for (var j = 0; j <dislikedMoviesIndices.length; j++) {
   var index = dislikedMoviesIndices[j];
   if (index < movies.length) {
      movies[index] = likedMovies[j];
   }
}
for (var k = 0; k <  movies.length; k++)
   window.document.write(movies[k] + "<br>");


//STEP 13
// Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:
var movies = ["Blade Runner 1", 1, "Dune 2", 2, "Oppenheimer", 3, "Ghostbusters 4", 4, "Love Actually", 5];
var moviesRanking = movies.filter(function (item) {
   return typeof item[1] === "number";
});
for (var i = 0; i < moviesRanking.length; i++) {
   window.document.write(moviesRanking[i][0] + " - Ranking: " + moviesRanking[i][1] + "<br>");
}

// Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
// Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function 
// should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, 
// loop through the passed in array and display the result so that it looks exactly like this in the console window:
// Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
var movies = ["Blade Runner 1", 1, "Dune 2", 2, "Oppenheimer", 3, "Ghostbusters 4", 4, "Love Actually", 5];
var moviesNames = movies.filter(function (item) {
   "use strict";
   return typeof item === "movie";

});
window.document.write(moviesName);

//STEP 14 
// Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function 
// should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, 
// loop through the passed in array and display the result so that it looks exactly like this in the console window:
Employees:

ZAK
JESSICA
MARK
FRED
SALLY

var employees = ["Zak","Jessica", "Mark", "Fred", "Sally"]
var showEmployee = employees.filter(function (item) {
   "use strict";
   return typeof item === "name";

});
window.document.write(showEmployee);

//STEP 15
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
// Expected Result: [58, "abcd", true]
// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <title>JavaScript function to filter false, null, 0 and blank values from an array</title>
// </head>
// <body>

// </body>
// </html>

function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false && value !== null && value !== 0 && value !== "") {
    return value;
  }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

//STEP 16
// Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly 
// return one of those numbers.
function getRandomItem(array) {
   const randomIndex = Math.floor(Math.random() * array.length);
   return array[randomIndex];
}
const array = Array(10)
            .fill()
				.map(() => Math.floor(50 * Math.random()));  // numbers from 0-50 (exclusive)

const randomNumber = getRandomItem(array);
console.log(randomNumber);

//STEP 17
//Write a JavaScript function to get the largest number from a numeric array.
function largestOfFour(arr) {
    var largestNumber = [0,0,0,0];
    for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
     for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
        if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
           largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
         }
     }
  }
  return largestNumber;
 }
 largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
