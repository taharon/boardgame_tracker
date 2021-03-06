'use strict'
const url = require('../config.js')
const store = require('../store.js')

const addGame = (gameData) => {
   return $.ajax({
      url: url.apiUrl + 'games',
      method: 'POST',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      },
      data: gameData
   })
}

const getGames = () => {
   return $.ajax({
      url: url.apiUrl + 'games',
      method: 'GET',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      }
   })
}

const getAGame = (idNum) => {
   return $.ajax({
      url: url.apiUrl + `games/${idNum}`,
      method: 'GET',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      }
   })
}

const updateGame = (data, idNum) => {
   return $.ajax({
      url: url.apiUrl + `games/${idNum}`,
      method: 'PATCH',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      },
      data: data
   })
}

const deleteGame = (idNum) => {
   return $.ajax({
      url: url.apiUrl + `games/${idNum}`,
      method: 'DELETE',
      headers:{
         "Authorization": `Token token=${store.user.token}`
      }
   })
}

module.exports = {
   addGame,
   getGames,
   getAGame,
   updateGame,
   deleteGame
}