'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userCreate = require('./auth/events.js')
const gameCreate = require('./games/events.js')

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
})
