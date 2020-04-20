# Board Game Tracker
The repo for the API for this app is available at:  
[Boardgame Tracker App](https://taharon.github.io/boardgame_tracker/)
[Boardgame tracker API](https://project-2-api-248.herokuapp.com/)
[Board game tracker API repo](https://github.com/taharon/Project_2_API)

## What is this for

This app is to be used to track board games. It allows you to record which board games you own, a score each for them, and a review. The app currently also allows players to record games played with a date, players, and scores for each.  

## Tech
JavaScript  
jQuery  
AJAX  
Ruby on Rails  
Heroku  
Git  
Github  
Grunt  
Bootstrap  
Sass  
HTML  
CSS  
Visual Studio Code (to develop)  

## Wireframes
I began with mockups of a board game library app, which would let you store the board games you owned and write reviews for them. I then wanted to add the ability to track when you've played board games, with who, and the scores you each got. These changes are as of  yet unfinished.

![Initial wireframe for board game tracker.](https://i.imgur.com/TQjORF2.jpg)


## ERD
The initial ERD included only a library for storing board games. With the addition of games played, I came up with two options for my ERD. I quickly realized that both of these limited the number of players a game could have, and made major changes to the ERD

![Initial ERD for board game tracker.](https://i.imgur.com/CdaQuBy.jpg)

## User Stories
- I created a basic set of user stories for the bare minimum a user should be able to do in order to track board games they owned, and to add a played game:  
- As an unregistered user, I'd like to register  
- As a registered user, I'd like to log in  
- As a logged in user, I'd like to log out  
- As a logged in user, I'd like to change password  
- As a logged in user, I'd like to add to my library  
- As a logged in user, I'd like to add a played game  

## Development
In order to begin the project, I broke down the files I would need to create, and their respective goals.  
First, I wanted to move most of my html into handlebars, leaving only the navbar skeleton and a few empty divs for putting handlebars into.  
For user authentication, I needed a file to handle UI changes, a file to handle the API, and a file with responses to the event handlers tied to the login, logout, change password, and sign up buttons.  
In order to create the library, I needed each of the standard CRUD actions to affect a resource that required a game name, a game score, and a review.  
With the overhaul of my ERD, I needed to create two new resources. The first, instances of games, would hold a date and game name. The second, a played game, held a foreign key to users, a foreign key to a game instance, and a score for that player. These two tables combined allowed me to track when a game was played.  

My first big problem was figuring out how to create games playe which allowed an arbitrary number of players. The change to a many to many relationship for users and game instances through games played allowed me to circumvent this.
I also want to validate emails as a user types them in, since I do not expect users to be able to remember the email addresses of everyone they've played with. This currently works by pulling the entire users list to the front end and validating on the fly, however this is both ineffiient and a security risk. My solution to this, while currently not implemented, is to create a friends list that allows players to add nicknames for friends, and then allowing autocompletion using the friends list.
I need to create a series of custom routes which would return joins of my played games and game instance tables. These currently do not work, and these joins are created on the front end, however this require pulling the entire played games table. This has also led to played game creation requiring a loop over the number of players and multiple api calls, instead of a single call with an array of objects.

## Up Next
- Change CSS to make it look nicer  
- Add friends list for users  
- Finish custom routes for played games update, delete  
- Allow users to show all games played or all games played with a certain user  
- Allow users to add a played game with an unregistered user (user XOR unregistered user)  
- Only allow 1 copy of board game in library  
