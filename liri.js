require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var moment = require('moment');
var fs = require("fs");
var Spotify = require('node-spotify-api');

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");


//create function to use axios call to retrieve data from abnds intown api
// takes in artist name to use in api call
//is called by "concert-this"

var findConcert = function (artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (concertData, err) {
            if (err) {
                console.log("An error occured: " + err);
                return;
            } else {
                concertData.data.forEach(function (concert) {
                    var concertInfo = [
                        "The concert is at: " + concert.venue.name,
                        "The venue is in: " + concert.venue.city + ", " + concert.venue.country,
                        "The concert is on: " + moment(concert.datetime).format("MM/DD/YYYY"),
                    ].join("\n\n");
                    console.log(concertInfo);
                });
            }
                
            })
        }
    
//axios method from omdb in class practice
//create function to use axios call to access omdb
// is called by "movie-this"

var findMovie = function (movie) {
    axios.get("http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=f728cb34").then(
        function (movieData, err) {
            if (err) {
                console.log("An error occured: " + err);
                return;
            }
            else if (!movie) {
                movie = "Mr. Nobody";
            }
            else {
                var movieInfo = [
                    "The movie title is: " + movieData.data.Title,
                    "The IMdB rating is: " + movieData.data.imdbRating,
                    //if there's no rotten tomatoes rating it throws an error, so only movies with rotten tomatoes ratings work
                    "The Rotten Tomatoes Rating is: " + movieData.data.Ratings[1].Value,
                    "The movie was produced in: " + movieData.data.Country,
                    "The movie language is: " + movieData.data.Language,
                    "The movie plot is: " + movieData.data.Plot,
                    "The movie actors are: " + movieData.data.Actors
                ].join("\n\n");
                console.log(movieInfo);
            }
        })
}



//create function to use spotify npm to call spotiy api
// takes in song from user input

var songFinder = function (songQuery) {
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: songQuery}).then(
        function (songData, err) {
            // console.log(songData.tracks.items[0]);
            if (err) {
                console.log("An error occured: " + err);
            } else if (!songQuery){
                songQuery = "the sign";
            }else {
                var songInfo = [
                    "The artist is " + songData.tracks.items[0].artists[0].name,
                    "The song is " + songData.tracks.items[0].name,
                    "The link is " + songData.tracks.items[0].preview_url,
                    "The album is " + songData.tracks.items[0].album.name
                ].join("\n\n");
                console.log(songInfo);
            }
            
         })
};

var doWhat = function() {
    fs.readFile("./random.txt", "UTF-8", function (err, data) {
        if (err) { throw err; }
        // console.log(data);
        var searchTerm = data.split(",")
        search = searchTerm[0];
        term = searchTerm[1];
        runLiri(search, term);
        // console.log(searchTerm);
    })
}

function runLiri(search, term) {
    if (search === "concert-this") {
        findConcert(term);
    } else if (search === "spotify-this-song") {
        songFinder(term);
    } else if (search === "movie-this") {
        findMovie(term);
    } else if (search === "do-what-it-says") {
        doWhat();
    }
}
 runLiri(search, term);