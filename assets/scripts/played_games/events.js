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
      return
   }
   const gameData = getFormFields(event.target)
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
            console.log(allPlayers[i])
         }
         for (let i = 0; i < allPlayers.length; i++){
            api.createPlayedGame(allPlayers[i])
         }
      })
   $('html form').trigger('reset')
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

const onShowPlayed = (event) => {
   event.preventDefault()
   api.getGameInstances().then((data) => {
      const myGames = data.game_instances
      const gamesPlayed = []
      for (let i=0; i < myGames.length; i++){
         const currentGame = myGames[i] 
         gamesPlayed.push({})
         gamesPlayed[i].name = currentGame.name
         gamesPlayed[i].date = currentGame.when
         for (let j = 0; j < currentGame.users.length; j++){
            gamesPlayed[i][`player_${j+1}`] = {name: currentGame.users[j].email, score: currentGame.played_games[j].score}
         }
      }
      ui.displayPlayed(gamesPlayed)
   })
}

module.exports = {
   onGoToAddPlayed,
   updatePlayers,
   onSubmitPlayed,
   validatePlayer,
   onShowPlayed
}