'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userCreate = require('./auth/events.js')

$(() => {
  $('#sign-up').on('click', userCreate.onGoToSignUp)
  $('#sign-in').on('click', userCreate.onGoToSignIn)
  $('#sign-out').on('click', userCreate.onGoToSignOut)
  $('#change-pw').on('click', userCreate.onGoToChangePw)
  $('.content').on('submit', '#sign-up-form', userCreate.onSignUp)
  $('.content').on('submit', '#sign-in-form', userCreate.onSignIn)
})
