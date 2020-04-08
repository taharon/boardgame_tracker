'use strict'
const displayAddPlayed = () => {
   $('#message').text('')
   $('.content').empty()
   const showAddPlayed = require('../templates/add_played.handlebars')
   $('.content').html(showAddPlayed)
}

const addPlayersScores = (event) => {
   const numPlay = $(event.target).val()
   $('.content .players').empty()
   $('.content .scores').empty()
   const addPlayer = require('../templates/player.handlebars')
   const addScore = require('../templates/score.handlebars')
   let currentP = {}
   for (let i=0; i < numPlay; i++){
      currentP.num = i
      let newP = addPlayer({p : currentP}) 
      let newS = addScore({s : currentP})
      $('.content .players').append(newP)
      $('.content .scores').append(newS)
   }
}

const usernameError = () => {
   $('#message').removeClass()
   $('#message').addClass('failure')
   $('#message').text('Invalid Username(s)!')
}

const displayPlayed = (gamesPlayed) => {
   $('#message').text('')
   const showPlayedTemplate = require('../templates/show_all_games_played.handlebars')
   const showPlayed = showPlayedTemplate({ games: gamesPlayed})
   $('.content').html(showPlayed)
}

module.exports = {
   displayAddPlayed,
   addPlayersScores,
   usernameError,
   displayPlayed
}