'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, User, $stateParams,$state) {


  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */

  $scope.sendSignup = function(){
    //console.log($scope.signup);
    User.create($scope.signup)
      .then(function(newUser){
        console.log('newUser',newUser);
        $state.go('create', {userId:newUser._id});
      })
  }

})