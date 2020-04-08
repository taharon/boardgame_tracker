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
         }
         for (let i = 0; i < allPlayers.length-1; i++){
            api.createPlayedGame(allPlayers[i])
         }
         api.createPlayedGame(allPlayers[allPlayers.length-1])
            .then(() => {
               api.getGameList()
                  .then((data) => store.gameList = data.played_games)
            })
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

const onShowPlayed = (event) => {
   event.preventDefault()
   const myGames = store.gameList.filter(games => games.user.email === store.userName).map(game => game.game_instance.id)
   const myGamesPlayed = store.gameList.filter(games => myGames.includes(games.game_instance.id))
   const gamesPlayed = []
   for (let i=0; i < myGames.length; i++){
      gamesPlayed.push({})
      const players = myGamesPlayed.filter(people => people.game_instance.id === myGames[i])
      gamesPlayed[i].name = players[0].game_instance.name
      gamesPlayed[i].date = players[0].game_instance.when
      for (let j = 0; j < players.length; j++){
         gamesPlayed[i][`player_${j+1}`] = {name: players[j].user.email, score: players[j].score}
      }
   }
   ui.displayPlayed(gamesPlayed)
}

module.exports = {
   onGoToAddPlayed,
   updatePlayers,
   onSubmitPlayed,
   validatePlayer,
   onShowPlayed
}