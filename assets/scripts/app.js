'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userCreate = require('./auth/events.js')

$(() => {
  $('#sign-up').on('submit', userCreate.onSignUp)
  $('#sign-in').on('submit', userCreate.onSignIn)
  $('#sign-out').on('click', userCreate.onSignOut)
  $('#change-pw').on('submit', userCreate.onChangePw)
})
