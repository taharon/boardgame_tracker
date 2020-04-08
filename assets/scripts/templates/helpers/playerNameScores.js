// HELPER EXAMPLE
// This helper would be used in a .handlebars file
// with the syntax {{limit title 20}}

'use strict'

const playerNameScores = (game) => {
   let returnString = ''
   for (let key in game){
      if (typeof game[key] === 'object'){
         returnString = returnString + `<div class='w-27'>${game[key].name}: ${game[key].score}</div>`
      }
   }
   return returnString
}

module.exports = playerNameScores
