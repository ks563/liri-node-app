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
// takes in title of movie
// is called by "movie-this"

var findMovie = function (movie) {
    var axios = require("axios");
    // movie = process.argv[3];
    axios.get("http://www.omdbapi.com/?t=" + movie + "&plot=short&apikey=f728cb34").then(
        function (movieData, err) {
            // console.log(movieData.data);
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
                    "The Rotten Tomatoes Rating is: " + movieData.data.Ratings[1].Value,
                    "The movie was produced in: " + movieData.data.Country,
                    "The movie language is: " + movieData.data.Language,
                    "The movie Plot is: " + movieData.data.Plot,
                    "The movie actors are: " + movieData.data.Actors
                ].join("\n\n");
                console.log(movieInfo);
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
//is called by "spotify-this"

var songFinder = function (songQuery) {
    var Spotify = require('node-spotify-api');
   
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
// console.log(songFinder("together again"));

var doWhat = function(search) {
    var fs = require("fs");
    var text;
    fs.readFile("./random.txt", "UTF-8", function (err, data) {
        if (err) { throw err; }
        console.log(data);
        text = data;
    })
    console.log(text);
}
doWhat();

function runLiri(search, term) {
    var search = process.argv[2];
    var term = process.argv.slice(3).join(" ");
    if (search === "concert-this") {
        console.log(findConcert(term));
    } else if (search === "spotify-this-song") {
        console.log(songFinder(term));
    } else if (search === "movie-this") {
        console.log(findMovie(term));
    }
}

// runLiri();