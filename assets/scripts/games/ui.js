'use strict'

const displayAddGame = (event) => {
   $('#message').text('')
   $('.content').empty()
   const showAddGame = require('../templates/add_game.handlebars')
   $('.content').html(showAddGame)
}

const onAddGameSuccess = () => {
   $('#message').removeClass()
   $('#message').addClass('success')
   $('#message').text('Successfully added game')
   $('.content').text('')
}

const onAddGameFail = () => {
   $('#message').removeClass()
   $('#message').addClass('failure')
   $('#message').text('Failed to add game')
}

const displayGames = (data) => {
   $('#message').text('')
   const showGamesTemplate = require('../templates/show_all_games.handlebars')
   const showGames = showGamesTemplate({ games: data.games })
   $('.content').html(showGames)
}

const onShowGamesFail = () => {
   $('#message').removeClass()
   $('#message').addClass('failure')
   $('#message').text('Failed to get games')
}

const displayUpdate = (data) => {
   $('#message').text('')
   const updateGamesTemplate = require('../templates/update_game.handlebars')
   const updateGames = updateGamesTemplate({ game: data.game })
   $('.content').html(updateGames)
}


const onUpdateGameFail = () => {
   $('#message').removeClass()
   $('#message').addClass('failure')
   $('#message').text('Failed to update game')
}

const onShowAGameFail = () => {
   $('#message').removeClass()
   $('#message').addClass('failure')
   $('#message').text('Failed to retrieve game to show')
}

const displayAGame = (data) => {
   $('#message').text('')
   const showGameTemplate = require('../templates/show_game.handlebars')
   const showGames = showGameTemplate({ game: data.game })
   $('.content').html(showGames)
}

const onDeleteFail = () => {
   $('#message').removeClass()
   $('#message').addClass('failure')
   $('#message').text('Failed to delete game')
}


module.exports = {
   displayAddGame,
   displayGames,
   onAddGameFail,
   onAddGameSuccess,
   onShowGamesFail,
   displayUpdate,
   onUpdateGameFail,
   displayAGame,
   onShowAGameFail,
   onDeleteFail
}