'use strict'

const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const store = require('../store.js')

const onGoToAddPlayed = (event) => {
   event.preventDefault()
   if (!store.userList.length){
      api.getUserList()
         .then((data) =>  {store.userList = data.users})
   }
   ui.displayAddPlayed()
}

const updatePlayers = (event) => {
   event.preventDefault()
   ui.addPlayersScores(event)
}

const onSubmitPlayed = (event) => {
   event.preventDefault()
   if ($('.players .failure').length){
      ui.usernameError()
      console.log('fail')
      return
   }
   const gameData = getFormFields(event.target)
   console.log(gameData, 'gameData')
   const numPlayers = gameData.game.players
   let instanceData = {game_instance: {name: gameData.game.name, when: gameData.game.date}}
   api.createGameInstance(instanceData)
      .then((data)=> {
         let idNum = data.game_instance.id
         const allPlayers = []
         for (let i = 0; i< numPlayers; i++ ){
            allPlayers.push({played_game:{}})
            allPlayers[i].played_game.game_instance_id = idNum
            allPlayers[i].played_game.score = gameData.score[i]
            allPlayers[i].played_game.user_id = store.userList.find(users => users.email === gameData.player[i]).id
         }
         for (let i = 0; i < allPlayers.length; i++){
            api.createPlayedGame(allPlayers[i])
         }
      })
}

const validatePlayer = (event) => {
   event.preventDefault()
   if(!store.userList.find(users => users.email === $(event.target).val())){
      $(event.target).addClass('failure')
   }
   else{
      $(event.target).removeClass('failure')
   }
}

module.exports = {
   onGoToAddPlayed,
   updatePlayers,
   onSubmitPlayed,
   validatePlayer
}