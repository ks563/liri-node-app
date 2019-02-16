require("dotenv").config();

//create function to use axios call to retrieve data from abnds intown api
// takes in artist name to use in api call
//console logs name of venue
//console.log venue location
//console.log date of event - use moment to format "MM/DD/YYYY"
//is called by "concert-this"

var findConcert = function (artist) {
    var axios = require("axios");
    var moment = require('moment');
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (concertData, err) {
            console.log(concertData);
            if (err) {
                console.log("An error occured: " + err);
                return;
            } else {
                console.log("The concert is at: " + concertData.data.venue);
                console.log("The venue is in: " + concertData.data.venue);
                console.log("The concert is on: " + moment(concertData.data.datetime.format('MM/DD/YYYY')));
            }
        }
    )
};

console.log(findConcert("Cher"));

//axios method from omdb in class practice
//create function to use axios call to access omdb
// takes in title of movie
// console.log title
// console.log imdb rating
// console.log rotten tomatoes rating
// console.log language
// console.log plot
// console.log actors
// if no title is inputted return 'mr nobody'
var findMovie = function (movie) {
    var axios = require("axios");
    axios.get("http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=f728cb34").then(
        function (movieData, err) {
            // console.log(movieData);
            if (err) {
                console.log("An error occured: " + err);
                return;
            }
            if (movie == " ") {
                movie = "Mr. Nobody";
            }
            else {
                console.log("The movie title is: "+ movieData.data.Title);
                console.log("The IMdB rating is: "+ movieData.data.imdbRating);
                // console.log("The Rotten Tomatoes Rating is: "+ movieData.data.RottenTomatoesRatings[2]);
                console.log("The movie language is: "+ movieData.data.Language);
                console.log("The movie Plot is: "+ movieData.data.Plot);
                console.log("The movie actors are: "+ movieData.data.Actors);
            }
        })
}

// console.log(findMovie("bridesmaids"));

//create function to use spotify npm to call spotiy api
// takes in song from user input
//console.log artist
//console.log song's name
//console.log link to spotify
//console.log album
//if not song is entered return "the Sign" by ace of base

var songFinder = function (song) {
    var keys = require("./keys.js");
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotify);

}