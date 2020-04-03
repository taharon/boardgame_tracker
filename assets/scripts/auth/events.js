'use strict'
   const api = require('./api.js')
   const ui = require('./ui.js')
   const getFormFields = require('/Users/taharon/sei/projects/tic-tac-toe-client/lib/get-form-fields.js')

//log in function
   const onGoToSignUp = function (event) {
      event.preventDefault()
      ui.displaySignUp()
   }

   const onSignUp = (event) => {
      event.preventDefault()
      const data = getFormFields(event.target)
//checking to see that the user password = password_confirmation
      if (data.credentials.password !== data.credentials.password_confirmation){
         $('#message').text('Password does not match password confirmation!')
         $('#message').removeClass()
         $('#message').addClass('failure')
//resetting the forms on any button click
         $('html form').trigger('reset')
      }
      else{
         console.log(data)
         api.signUp(data)
            .then(ui.onSignUpSuccess)
            .catch(ui.onSignUpFail)
//resetting the forms on any button click
         $('html form').trigger('reset')
      }
   }
   
//sign in function
   const onGoToSignIn = function (event) {
      event.preventDefault()
      ui.displaySignIn()
   }

   const onSignIn = (event) => {
      event.preventDefault()
      api.signIn(getFormFields(event.target))
         .then(ui.onSignInSuccess)
         .catch(ui.onSignInFail)
//resetting the forms on any button click
      $('html form').trigger('reset')
   }
   
//change password function
   const onGoToChangePw = function (event) {
      event.preventDefault()
      ui.displayChangePw()
   }

   const onChangePw = (event) => {
      const passObj = getFormFields(event.target)
      api.changePw(passObj)
         .then(ui.onChangePwSuccess)
         .catch(ui.onChangePwFail)
//resetting the forms on any button click
      $('html form').trigger('reset')
   }

//sign out function
   const onSignOut = function (event) {
      event.preventDefault()
      api.signOut()
         .then(ui.onSignOutSuccess)
         .catch(ui.onSignOutFail)
//resetting the forms on any button click
      $('html form').trigger('reset')
   }

module.exports = {
   onGoToSignUp,
   onGoToSignIn,
   onSignOut,
   onGoToChangePw,
   onSignUp,
   onSignIn,
   onChangePw
}