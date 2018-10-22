var projectData = [{
    title: 'Fantasy Word Guess Game',
    imageSrc: './assets/images/194.jpg',
    imageAlt: 'Fantsay Word Guess Game',
    live: 'https://www.startwithaskateboard.com/word-guess-game/',
    source: 'https://github.com/crussell84/word-guess-game',
    blurb: 'Classic word guess game - select letters via your keyboard until you either get the word right or run out of guesses!',
    tags: ["javascript", "bootstrap"]
}, {
    title: 'Crystal Collector Game',
    imageSrc: './assets/images/crystals.png',
    imageAlt: 'Crystal Collector Game',
    live: 'https://www.startwithaskateboard.com/crystal-collector-game/',
    source: 'https://github.com/crussell84/crystal-collector-game',
    blurb: 'Simple point collection game - click on the crystals to get points.',
    tags: ["jQuery", "materialize"]
}, {
    title: 'Video Game Trivia',
    imageSrc: './assets/images/gaming-pattern.png',
    imageAlt: 'Video Game Trivia',
    live: 'https://www.startwithaskateboard.com/Trivia-Game/',
    source: 'https://github.com/crussell84/Trivia-Game',
    blurb: 'Timed trivia game about video games.',
    tags: ["jQuery", "bootstrap"]
}, {
    title: 'Looney Toons GIFs',
    imageSrc: './assets/images/looney_bg.jpg',
    imageAlt: 'Looney Toons GIFs',
    live: 'https://www.startwithaskateboard.com/GifTastic/',
    source: 'https://github.com/crussell84/GifTastic',
    blurb: 'This is a simple page that hooks into the Giphy API to search for and display GIFs based on the button clicked.',
    tags: ["jQuery", "bootstrap", "API"]
}, {
    title: 'Train Scheduler',
    imageSrc: './assets/images/Portfoilo05.jpg',
    imageAlt: 'Train Scheduler',
    live: 'https://www.startwithaskateboard.com/TrainScheduler',
    source: 'https://github.com/crussell84/TrainScheduler',
    blurb: 'This page uses Firebase & Moment.js to maintain a list of trains with destination, frequency, next arrival time, and minutes away.',
    tags: ["jQuery", "bootstrap", "firebase", "moment.js"]
}, {
    title: 'MusixTube',
    imageSrc: './assets/images/MusixTube.png',
    imageAlt: 'MusixTube',
    live: 'https://www.startwithaskateboard.com/musixTube',
    source: 'https://github.com/crussell84/musixTube',
    blurb: 'This site intergrates with the Musixmatch API and the YouTube Data API to allow users to watch videos of top rated tracks from the artists they search for.',
    tags: ["jQuery", "materialize", "firebase", "API"]
}, {
    title: 'LIRI',
    imageSrc: './assets/images/liri.png',
    imageAlt: 'LIRI',
    live: false,
    source: 'https://github.com/crussell84/liri',
    blurb: 'Liri is a command line Node app that takes in input and returns data. It intergrates with the Spotify, OMDB, and Bandsintown APIs to retrieve data. It uses the Inquirer package to get user input.',
    tags: ["node", "inquirer", "API"]
}, {
    title: 'Bamazon',
    imageSrc: './assets/images/bamazon.PNG',
    imageAlt: 'Bamazon',
    live: false,
    source: 'https://github.com/crussell84/bamazon',
    blurb: 'Bamazon is a command line Node app that takes in input and returns data. It intergrates with a MySQL database for product management, and utlizes the inquirer package for handling user input.',
    tags: ["node", "inquirer", "MySQL"]
}, {
    title: 'Boxer',
    imageSrc: './assets/images/boxer.png',
    imageAlt: 'Boxer',
    live: 'https://boxerinventory.herokuapp.com/',
    source: 'https://github.com/crussell84/ProjectTwo',
    blurb: 'Boxer is a lightweight, responsive inventory management tool built using Materialize, running on a Node Express server, all backed by a MySQL database.',
    tags: ["node", "materialize", "MySQL", "sequelize", "express", "heroku"]
}, {
    title: 'Scraping with Mongoose',
    imageSrc: './assets/images/scraper.png',
    imageAlt: 'Scraping with Mongoose',
    live: 'https://scrapingwithmongoose.herokuapp.com/',
    source: 'https://github.com/crussell84/ScrapingWithMongoose',
    blurb: 'This site uses an express server to scrape article data from a news site and stores it in a MongoDB via Mongoose.',
    tags: ["node", "bootstrap", "mongoDB", "mongoose", "express", "heroku", "handlebars"]
}];

function createCards(data) {
    data.forEach(function (element) {
        var newOuterDiv = $('<div>').addClass("col-md-6 col-sm-12");
        var newCard = $('<div>').addClass("card m-3");
        var newImage = $('<img>').addClass('card-img-top').attr({ src: element.imageSrc, alt: element.imageAlt });
        var newCardBody = $('<div>').addClass("card-body bg-info text-light p-2");
        var cardTitle = $('<h5>').addClass("card-title text-center").text(element.title);
        var cardText = $('<p>').addClass("card-text text-center").text(element.blurb);
        var cardFooter = $('<div>').addClass("card-footer");
        var tags = $('<div>').addClass('tagsDisplay d-flex justify-content-center');
        var tagsArray = element.tags;
        tagsArray.forEach(function (tag) {
            var newBadge = $(`<span class="badge badge-secondary badge-pill center m-1">${tag}</span>`);
            newBadge.appendTo($(tags));
        });
        if (element.live) {var liveLink = $(`<a href="${element.live}" target="_blank" class="btn btn-primary m-1">Live</a>`);}
        var sourceLink = $(`<a href="${element.source}" target="_blank" class="btn btn-info m-1">Source</a>`);
        cardFooter.append(liveLink, sourceLink, tags);
        newCardBody.append(cardTitle, cardText);
        newCard.append(newImage, newCardBody, cardFooter);
        newOuterDiv.append(newCard);
        $("#projects").append(newOuterDiv);
    });
}
createCards(projectData);

$('a[rel=popover]').popover({
    html: true,
    trigger: 'hover',
    placement: 'bottom',
    content: function(){return '<img src="'+$(this).data('img') + '" />';}
  });