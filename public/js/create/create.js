'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl', 
		/*
			add a resolve block that has an author function which 
			users $stateParams to retrieve the author object
		*/
		resolve: {
			author: function(User, $stateParams){
				return User.find($stateParams.userId);
			}
		}
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, author, Post, $state) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	// $scope.author = author;
	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  	2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/

	$scope.newPost = {};
	$scope.newPost.name = author.username;
	$scope.newPost.author = author._id;

	$scope.createNewPost = function(){

		Post.create($scope.newPost)
		.then(function(newPost){
			console.log('THIS IS A NEW POST', newPost);
			$state.go('main', newPost)
		})
	};

}) 