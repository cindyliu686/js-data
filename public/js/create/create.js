'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl', 
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

	$scope.newPost = $scope.newPost || {};
	$scope.username = author.username;
	$scope.newPost.author = author._id;
	$scope.createNewPost = function(){

		Post.create($scope.newPost)
		.then(function(newPost){
			console.log('THIS IS A NEW POST', newPost);
			$state.go('main', newPost)
		})
	};

}) 