'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('/Users/taharon/sei/projects/tic-tac-toe-client/lib/get-form-fields.js')

const onGoToAddGame = (event) => {
   event.preventDefault()
   ui.displayAddGame()
}

const onAddGame = (event) => {
   event.preventDefault()
   const gameData = getFormFields(event.target)
   api.addGame(gameData)
      .then(ui.onAddGameSuccess)
      .catch(ui.onAddGameFail)
}

const onGoToShowGames = (event) => {
   event.preventDefault()
   api.getGames()
      .then(ui.onShowGamesSuccess)
      .catch(ui.onShowGamesFail)
}

module.exports = {
   onGoToAddGame,
   onAddGame,
   onGoToShowGames
}