require("dotenv").config();
var keys = require("./keys.js");

//create function to use axios call to retrieve data from abnds intown api
// takes in artist name to use in api call
//is called by "concert-this"

var findConcert = function (artist) {
    var axios = require("axios");
    var moment = require('moment');
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (concertData, err) {
            console.log(concertData.data);
            if (err) {
                console.log("An error occured: " + err);
                return;
            } else {
                var concertInfo = [
                "The concert is at: " + concertData.data.venue.name,
                "The venue is in: " + concertData.data.venue.city, + " " + concertData.data.venue.country,
                 "The concert is on: " + moment(concertData.data.datetime.format('MM/DD/YYYY')),
            ].join("\n\n");
            }
        }
    )
};

// console.log(findConcert("Cher"));

//axios method from omdb in class practice
//create function to use axios call to access omdb
// takes in title of movie
// is called by "movie-this"

var findMovie = function (movie) {
    var axios = require("axios");
    // movie = process.argv[3];
    axios.get("http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=f728cb34").then(
        function (movieData, err) {
            console.log(movieData.data);
            if (err) {
                console.log("An error occured: " + err);
                return;
            }
            if (movie == " ") {
                movie = "Mr. Nobody";
            }
            else {
                var movieInfo = [
                    "The movie title is: " + movieData.data.Title,
                    "The IMdB rating is: " + movieData.data.Ratings[0],
                    "The Rotten Tomatoes Rating is: " + movieData.data.Ratings[1],
                    "The movie language is: " + movieData.data.Language,
                    "The movie Plot is: " + movieData.data.Plot,
                    "The movie actors are: " + movieData.data.Actors
                ].join("\n\n");
            }
        })
}

console.log(findMovie("bridesmaids"));

//create function to use spotify npm to call spotiy api
// takes in song from user input
//console.log artist
//console.log song's name
//console.log link to spotify
//console.log album
//if not song is entered return "the Sign" by ace of base
//is called by "spotify-this"

var songFinder = function () {
    var Spotify = require('node-spotify-api');
   
    var spotify = new Spotify(keys.spotify);
    var songQuery = process.argv[3];

    spotify.search({ type: 'track', query: songQuery}).then(
        function (songData, err) {
            if (err) {
                console.log("An error occured: " + err);
                return;
            } if (song = " " ){
                song = "the sign";
            }
            else {
                // console.log(songData);

            }
            
        })
};
// console.log(songFinder( ));