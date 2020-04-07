'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userCreate = require('./auth/events.js')
const gameCreate = require('./games/events.js')
const gamePlayed = require('./played_games/events.js')

$(() => {
  //User stuff
  $('.container').on('click', '#sign-up', userCreate.onGoToSignUp)
  $('.container').on('click', '#sign-in', userCreate.onGoToSignIn)
  $('.container').on('click', '#change-pw', userCreate.onGoToChangePw)
  $('.container').on('click', '#sign-out', userCreate.onSignOut)
  $('.content').on('submit', '#sign-up-form', userCreate.onSignUp)
  $('.content').on('submit', '#sign-in-form', userCreate.onSignIn)
  $('.content').on('submit', '#change-pw-form', userCreate.onChangePw)

  //Actual Library
  $('.container').on('click', '#add-game', gameCreate.onGoToAddGame)
  $('.content').on('submit', '#add-game-form', gameCreate.onAddGame)
  $('.container').on('click', '#show-games', gameCreate.onGoToShowGames)
  $('.content').on('click', '.go-to-show', gameCreate.onShowAGame)
  $('.content').on('click', '#cancel-show-game', gameCreate.onCancelShowGame)
  $('.content').on('submit', '#show-game-form', gameCreate.goToUpdateGame)
  $('.content').on('submit', '#update-game-form', gameCreate.onUpdateGame)
  $('.content').on('click', '#cancel-update-game', gameCreate.onCancelUpdateGame)
  $('.content').on('click', '#delete-game', gameCreate.onDeleteGame)

  //Played games (and game instances, because they're tied together)
  $('.container').on('click', '#add-played-game', gamePlayed.onGoToAddPlayed)
  $('.content').on('focusout', '#numPlayers', gamePlayed.updatePlayers)
  $('.content').on('keyup', '.person-box', gamePlayed.validatePlayer)
  $('.content').on('submit', '#add-played-form', gamePlayed.onSubmitPlayed)
  
})