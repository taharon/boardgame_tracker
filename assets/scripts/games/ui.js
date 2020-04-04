'use strict'

const displayAddGame = (event) => {
   $('.content').empty()
   const showAddGame = require('../templates/add_game.handlebars')
   $('.content').html(showAddGame)
}

const onAddGameSuccess = () => {
   $('.message').removeClass()
   $('.message').addClass('success')
   $('.message').text('Successfully added game')
   $('.content').text('')
}

const onAddGameFail = () => {
   $('.message').removeClass()
   $('.message').addClass('failure')
   $('.message').text('Failed to add game')
}

const onShowGamesSuccess = (data) => {
   const showGamesTemplate = require('../templates/show_games.handlebars')
   const showGames = showGamesTemplate({ games: data.games })
   $('.content').html(showGames)
}

const onShowGamesFail = () => {
   $('.message').removeClass()
   $('.message').addClass('failure')
   $('.message').text('Failed to get games')
}

module.exports = {
   displayAddGame,
   onShowGamesSuccess,
   onAddGameFail,
   onAddGameSuccess,
   onShowGamesFail
}