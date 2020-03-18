# Fit-to-Scrape using MongoDB

## This full-stack web app scrapes articles from the Huffington Post

Upon clicking the "show articles" button, app will scrape the HUFFPOST for the most recent articles and display the headlines along with a card image. The user will have the option to add and delete notes to the article.

When run locally, MongoDB will store and display data. Mongodb Compass will log results in the mongoHeadlines database as documents (objects) in separate collections: articles and notes.

When deployed and run on Heroku, the data will be stored in an mLab database (Heroku provision for MongoLab).

Upon clicking the "scrape" button, the program will refresh with new articles and delete any pre-existing notes from the user.

# Required tech: NPM Packages and dependencies :

- express
- axios
- cheerio
- express-handlebars
- mongoose
- morgan
- handlebars.js

![](public/images/mongo-news-scraper.gif)
