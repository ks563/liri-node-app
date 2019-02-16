require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require('moment');



//create function to use axios call to retrieve data from abnds intown api
// takes in artist name to use in api call
//console logs name of venue
//console.log venue location
//console.log date of event - use moment to format "MM/DD/YYYY"
//is called by "concert-this"

var findConcert = function (artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (err, data) {
            if (err) {
                console.log("An error occured: " + err);
                return;
            } else {
                console.log("The concert is at: " + data.artist.venue);
                console.log("The venue is in: " + data.artist.venue);
                console.log("The concert is on: " + data.artist.datetime.moment().format('MM/DD/YYYY'));
            }
        }
    )
};

// console.log(findConcert("James Blake"));


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
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=f728cb34").then(
        function (err, data) {
            if (err) {
                console.log("An error occured: " + err);
                return;
            } else {
                console.log()
            }
        })
}


//create function to use spotify npm to call spotiy api
// takes in song from user input
//console.log artist
//console.log song's name
//console.log link to spotify
//console.log album
//if not song is entered return "the Sign" by ace of base