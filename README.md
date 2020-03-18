# Fit to Scrape

## This app allows readers to show the most prominent articles in the Huffington Post.

A compatibility-based Full Stack web application using Node and Express servers

Upon clicking the "show articles" button, app will scrape the HUFFPOST for the most recent articles and display the headlines along with a card image. The user will have the option to add and delete notes to the article. When run locally, the Mongodb Compass will log results in the mongoHeadlines database as documents (Objects) in articles and notes collections.
When deployed on Heroku, the data will be stored in an mLab (Heroku provision) database.

Upon clicking scrape button, the program will refresh with new articles and delete any pre-existing notes from the user.

# Required tech: NPM Packages and dependencies :

- express
- axios
- cheerio
- express-handlebars
- mongoose
- morgan
- handlebars.js

![](public/images/mongo-news-scraper.gif)
