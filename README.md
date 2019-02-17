# liri-node-app

## Overview

LIRI is a Language Interpretation and Recognition Interface that uses four specific commands to perform searches. Liri is a commamd line node app that allows you to "spotify-this-song" and returns song details, "movie-this" and returns movie specifics, "concert-this" and gives back concert details, and "do-what-it-says" and gives a random result.

## Technical Aspects

This app operates on the command line using JavaScipt Node, and NPM packages.

Node allows JavaScript to be run outside of the browser.
NPM _Node Package Management_ is an online database of node packages that are run in .js files. These packages are tools that allow for easier manipulation of the code/and or data retried from said packages.

### Node Packages Utilized
Node-Spotify-API
Axios
Moment
DotEnv
FS

##How to Use
Download the liri-node app. In your terminal navigate to folder and install the packages with "npm install". This will initiate the packages needed to run the app.

![npm install](/assets/images/npm_install.png)


To run the app, type node liri.js. 
Enter one of the four specified commands combined with a search query related to the command. The four commands are as follows.
    * concert-this
    
    * spotify-this-song

    * movie-this

    * do-what-it-says

First, "concert-this" pair this command with an artist entered as a string. Then hit enter. This will list all concerts found with the axios call. 

![concert-this](/assets/images/concert-this.png)

Next, spotify-this-song entered with a song title as a string will return the artist(s), song name, a preview link from spotify, and the album the song is on. 

![spotify-this-song](/assets/images/spotify-this-song.png)

For movie-this, enter it with a movie title as a string. It will return the movie's title, IMdB rating, Rotten Tomatoes Rating, the country where the movie was produced, the language the movie is in, the movie plit, and the actors in the movie. 

![movie-this](/assets/images/movie-this.png)

do-what-it-says reads the random text file and takes the search input from that file. It returns results based on what is in there. It takes no other arguments. 
![do-what-it-says](/assets/images/do-what-it-says.png)
![do-what-it-says2](/assets/images/do-what-it-says2.png)
