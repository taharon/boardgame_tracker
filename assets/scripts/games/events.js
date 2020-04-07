'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')

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
      .then(ui.displayGames)
      .catch(ui.onShowGamesFail)
}

const goToUpdateGame = (event) =>{
   event.preventDefault()
   const idNum = $(event.target).data('id')
   const gameData = getFormFields(event.target)
   gameData.game.id = idNum
   ui.displayUpdate(gameData)
}

const onCancelUpdateGame = (event) =>{
   event.preventDefault()
   onShowAGame(event)
}

const onCancelShowGame = (event) =>{
   event.preventDefault()
   onGoToShowGames(event)
}

const onUpdateGame = (event) => {
   event.preventDefault()
   const gameData = getFormFields(event.target)
   const idNum = $(event.target).data('id')
   api.updateGame(gameData, idNum)
      .then(() => onShowAGame(event))
      .catch(ui.onUpdateGameFail)
}

const onShowAGame = (event) => {
   event.preventDefault()
   const idNum = $(event.target).data('id')
   api.getAGame(idNum)
      .then(ui.displayAGame)
      .catch(ui.onShowAGameFail)
}

const onDeleteGame = (event) =>{
   event.preventDefault()
   const idNum = $(event.target).data('id')
   api.deleteGame(idNum)
      .then(()=>onGoToShowGames(event))
      .catch(ui.onDeleteGameFail)
}

module.exports = {
   onGoToAddGame,
   onAddGame,
   onGoToShowGames,
   goToUpdateGame,
   onCancelUpdateGame,
   onUpdateGame,
   onShowAGame,
   onCancelShowGame,
   onDeleteGame
}