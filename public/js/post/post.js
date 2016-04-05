'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl'
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, $stateParams, Post, User) {

	Post.find($stateParams.postId)
		.then(function(post){
			$scope.post = post;
			console.log(post);
		})


	/*
		2. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})