angular.module('starter.controllers', [])

// This just declares the 'places' object in the global scope so it can be used in any scope!

.run(function($rootScope) {
	
	// This object needs revision
	$rootScope.attractionReviews = [ 
		{ name: 'Attraction 0', review: 'Attraction 0 description', id: 0 },
		{ name: 'Attraction 1', review: 'Attraction 1 description', id: 1 } 
	];

	// This object needs revision
	$rootScope.placeReviews = [
		{ title: 'Place 1 review', body: 'Place 1 body', stars: 5, id: 0 },
		{ title: 'Place 2 review', body: 'Place 2 body', stars: 3, id: 1 }
	];

	// They are hardcoded but it does not matter
	$rootScope.places = [
		{ name: 'Example place', attractions: [$rootScope.attractionReviews[0], $rootScope.attractionReviews[1]], reviews: [$rootScope.placeReviews[0] ,$rootScope.placeReviews[1]], id: 0},
		{ name: 'Other', attractions: [$rootScope.attractionReviews[1]], reviews: [$rootScope.placeReviews[1]], id: 1 },

	];
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('SearchCtrl', function($scope, $rootScope) {

	$scope.searchTest = function(searchQuery) {

		console.log("Hello");

	};


})

.controller('PlacesCtrl', function($scope, $rootScope) {
/*	
	$scope.places = [{ name: 'Example place', id: 1, attractions: [ { name: 'Water slide', description: 'Something here' },
																	{ name: 'Thing', description: 'Description two' } ] },
					 { name: 'Other', id: 1, attraction: [ { name: 'Example', description: 'example' } ] }

	];*/
})

.controller('PlaceCtrl', function($scope, $stateParams) {
	// Screw it, don't know how to access '$rootScope' in the template just assign a variable insted. Just a mirage (calling the two the same name)
	$scope.id = $stateParams.placeId;

	$scope.max = 5;
  	/*
   * if given attraction is the selected attraction, deselect it
   * else, select the given attraction
   */
  $scope.toggleAttraction = function(attraction) {
    if ($scope.isAttractionShown(attraction)) {
      $scope.showAttractions = null;
    } else {
      $scope.showAttractions = attraction;
    }
  };
  $scope.isAttractionShown = function(attraction) {
    return $scope.showAttractions === attraction;
  };	
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
