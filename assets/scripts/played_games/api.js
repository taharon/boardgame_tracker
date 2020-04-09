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

//const testPlayedArray = (playedGameData) => {
//   return $.ajax({
//      url: url.apiUrl + 'played_games_array_create',
//      method: 'POST',
//      headers:{
//         "Authorization": `Token token=${store.user.token}`
//      },
//      data: {played_games: playedGameData}
//   })
//}

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

const getGameInstances = () => {
   return $.ajax({
      url: url.apiUrl + 'game_instances',
      method: 'GET',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      }
   })
}

const getGameList = () => {
   return $.ajax({
      url: url.apiUrl + 'played_games',
      method: 'GET',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      }
   })
}

module.exports = {
   createPlayedGame,
   createGameInstance,
   getUserList,
   getGameList,
//   testPlayedArray,
   getGameInstances

}