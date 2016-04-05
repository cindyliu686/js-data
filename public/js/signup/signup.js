'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, User, $state) {

  $scope.sendSignup = function(){
    User.create($scope.signup)
      .then(function(newUser){
        console.log('newUser',newUser);
        $state.go('create', {userId:newUser._id});
      })
  }

})