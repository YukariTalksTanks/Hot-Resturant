//dependencies
var express = require("express");
var path = require("path");




// ## Phase I - For this first phase, aim to write out the pieces that will need to be programmed to create the functionality of your application. Try to break it into 6-7 pieces

// * Create the front-end (visuals) for home page, reservation form, and reservation views.

// * Create a basic server using Express.JS

// * Create a few array variables that will hold the data

// * Create a set of routes for getting and posting table data

// * Create a set of routes for displaying the HTML pages

// * Use jQuery to run AJAX calls to GET and POST data from users to the Express server



//=============================================================

//REFERENCE

// // Dependencies
// // =============================================================
// var express = require("express");
// var path = require("path");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Star Wars Characters (DATA)
// // =============================================================
// var characters = [
//   {
//     routeName: "yoda",
//     name: "Yoda",
//     role: "Jedi Master",
//     age: 900,
//     forcePoints: 2000
//   },
//   {
//     routeName: "darthmaul",
//     name: "Darth Maul",
//     role: "Sith Lord",
//     age: 200,
//     forcePoints: 1200
//   },
//   {
//     routeName: "obiwankenobi",
//     name: "Obi Wan Kenobi",
//     role: "Jedi Master",
//     age: 55,
//     forcePoints: 1350
//   }
// ];

// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "view.html"));
// });

// app.get("/add", function(req, res) {
//   res.sendFile(path.join(__dirname, "add.html"));
// });

// // Displays all characters
// app.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });

// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body parsing middleware
//   var newCharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
