'use strict'

const url = require('../config.js')
const store = require('../store.js')

const createPlayedGame = (playedGameData) => {
   return $.ajax({
      url: url.apiUrl + 'played_games',
      method: 'POST',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      },
      data: playedGameData
   })
}

const createGameInstance = (instanceGameData) => {
   return $.ajax({
      url: url.apiUrl + 'game_instances',
      method: 'POST',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      },
      data: instanceGameData
   })
}

const getUserList = () => {
   return $.ajax({
      url: url.apiUrl + 'users',
      method: 'GET',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      }
   })
}

module.exports = {
   createPlayedGame,
   createGameInstance,
   getUserList
}