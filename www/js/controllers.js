angular.module('starter.controllers', [])

// This just declares the 'places' object in the global scope so it can be used in any scope!

.run(function($rootScope) {
	
	// This object needs revision
	$rootScope.attractionReviews = [ 
		{ name: 'Attraction 0', body: 'Attraction 0 review body', stars: 2, id: 0 },
		{ name: 'Attraction 1', body: 'Attraction 1 review body', stars: 1, id: 1 } 
	];

	// This object needs revision
	$rootScope.placeReviews = [
		{ title: 'Place 1 review', body: 'Place 1 review body', stars: 5, id: 0 },
		{ title: 'Place 2 review', body: 'Place 2 review body', stars: 3, id: 1 }
	];

	// They are hardcoded but it does not matter
	$rootScope.places = [
		{ name: 'Place 1', attractions: [$rootScope.attractionReviews[0], $rootScope.attractionReviews[1]], reviews: [$rootScope.placeReviews[0] ,$rootScope.placeReviews[1]], id: 0},
		{ name: 'Place', attractions: [$rootScope.attractionReviews[1]], reviews: [$rootScope.placeReviews[1]], id: 1 },

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

.controller('SearchCtrl', function($scope, $rootScope) {

	$scope.searchTest = function(searchQuery) {

		console.log("Hello");

	};


})

.controller('PlacesCtrl', function($scope) {

})

.controller('PlaceCtrl', function($scope, $stateParams) {
	// Screw it, don't know how to access '$rootScope' in the template just assign a variable insted. Just a mirage (calling the two the same name)
	$scope.id = $stateParams.placeId;

	$scope.max = 5;
  	/*
   * if given dropdown is the selected dropdown, deselect it
   * else, select the given dropdown
   */
  $scope.toggleDropdown = function(dropdown) {
    if ($scope.isDropdownShown(dropdown)) {
      $scope.showDropdown = null;
    } else {
      $scope.showDropdown = dropdown;
    }
  };
  $scope.isDropdownShown = function(dropdown) {
    return $scope.showDropdown === dropdown;
  };	
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
