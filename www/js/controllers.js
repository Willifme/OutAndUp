angular.module('starter.controllers', [])

// This just declares the 'places' object in the global scope so it can be used in any scope!

.run(function($rootScope) {
	
	// This object needs revision
	$rootScope.attractionReviews = [ 
		{ title: 'Attraction review 0', author: 'Example Person 1', body: 'Attraction 0 review body', stars: 2, id: 0 },
		{ title: 'Attraction review 1', author: 'Example Person 2', body: 'Attraction 1 review body', stars: 1, id: 1 } 
	];

	// This object needs revision
	$rootScope.attractionDescription = [
		{ name: 'Attraction 0', description: 'Attraction 0 description body', reviews: [$rootScope.attractionReviews[0]], id: 0 },
		{ name: 'Attraction 1', description: 'Attraction 1 description body', reviews: [$rootScope.attractionReviews[1]], id: 1 } 

	];

	// This object needs revision
	$rootScope.placeReviews = [
        { title: 'Place 1 review', author: 'Example Person 1', body: 'Place 1 review body', stars: 5, id: 0 },
        { title: 'Place 2 review', author: 'Example Person 2', body: 'Place 2 review body', stars: 3, id: 1 }
	];
    
    // This object needs revision
    $rootScope.placeDescription = [
        { name: 'Place 1', attractions: [$rootScope.attractionDescription[0], $rootScope.attractionDescription[1]], reviews: [$rootScope.placeReviews[0], $rootScope.placeReviews[1]], description: 'Place 1 descriptionPlace 1 descriptionPlace 1 descriptionPlace 1 description', latitude: 51.500729, longitude: -0.124625, options: { contentString: "Hello"}, id: 0},
        { name: 'Place 2', attractions: [$rootScope.attractionDescription[1]], reviews: [$rootScope.placeReviews[1]], description: 'Place 2 description', latitude: 51.499479, longitude: -0.124809, id: 1 },
    ];
    
	// They are hardcoded but it does not matter
	$rootScope.places = [
		$rootScope.placeDescription[0],
        $rootScope.placeDescription[1]
	];

})
.controller('AppCtrl', function() {
})

.controller('PlacesCtrl', function($scope, $stateParams, $rootScope) {

	$scope.name = $stateParams.name;

})

.controller('PlaceCtrl', function($scope, $stateParams, $rootScope) {
    
	$scope.id = $stateParams.placeId;

})

.controller('AttractionCtrl', function($scope, $stateParams) {
    $scope.attractionId = $stateParams.attractionId;
});