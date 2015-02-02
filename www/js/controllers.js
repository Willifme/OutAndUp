angular.module('starter.controllers', [])

// This just declares the 'places' object in the global scope so it can be used in any scope!

.run(function($rootScope) {
	
    // I need to store this information somewhere like a database
    
    $rootScope.attractionReviews = [ 
		{ title: 'Amazing fun!', author: 'Diggory Fulton', 
         body: 'While doing this activity I had the most fun I have ever had while being at the Out and Up Centre.',
         stars: 4, id: 0 },
        
		{ title: 'Not bad', author: 'Jefferson Norman', 
         body: 'While using this activity I had some fun however it could be improved with greater amounts of staff running the activity.', 
         stars: 3, id: 1 } ,
        
        { title: 'Could use some improvement', author: 'Guy Kennard', 
         body: 'I had fun while using this activity was too short and felt like little happened.', 
         stars: 2.5, id: 2 } ,
        
        { title: 'Poor', author: 'Craig Miles', 
         body: 'This activity was poor. The quality of the activity was poor and the staff where rude and disrespectful.', 
         stars: 2, id: 3 }
        
	];

	$rootScope.attractionDescription = [
		{ name: 'Assault Course', 
         description: 'Challenge yourself over the amazingly difficult assault course which will take you through the hardest terrains in the world.', 
         reviews: [$rootScope.attractionReviews[0], $rootScope.attractionReviews[1]], id: 0 },
        
		{ name: 'Kayaking', 
         description: 'Enter our daring rapids as you face the most dangerous waters in the world!', 
         reviews: [$rootScope.attractionReviews[1], $rootScope.attractionReviews[2]], id: 1 }, 
        
		{ name: 'Archery', 
         description: 'Become a well-trained archer with our amazing Archery course and activity where you will become a master of Archery!', 
         reviews: [$rootScope.attractionReviews[0], $rootScope.attractionReviews[3]], id: 2 },
        
		{ name: 'Hiking', 
         description: 'Walk the long path as you see amazing sites with the Hiking range.', 
         reviews: [$rootScope.attractionReviews[0], $rootScope.attractionReviews[2]], id: 3 },
        
		{ name: 'Climbing', 
         description: 'Climb the vertical heights at your own peril in the Climbing range.', 
         reviews: [$rootScope.attractionReviews[1], $rootScope.attractionReviews[3]], id: 4 } 

	];

	$rootScope.placeReviews = [
        
        { title: 'Great fun!', 
         author: 'Jefferson Norman',
         body: 'Amazing, a great day out for all.', 
         stars: 4, id: 0 },
        
        { title: 'Could be better…', 
         author: 'Diggory Fulton',
         body: 'Okay, had some fun could be better.', 
         stars: 3, id: 1 },
        
        { title: 'Middle of the road.', 
         author: 'Johnnie Braiden',
         body: 'Middle of the road, could be improved been to better Activity Centres. 5/10 would not activity at again.', 
         stars: 2.5, id: 2 },
        
        { title: 'Poor', 
         author: 'Helga Gavin',
         body: 'Poor, Staff where rude and annoyed me, Activities poor and broken.', 
         stars: 1.5, id: 3 }
        
	];
    
    $rootScope.placeOverview = [
        { name: 'Peak District Centre', 
         attractions: [$rootScope.attractionDescription[0], $rootScope.attractionDescription[1], $rootScope.attractionDescription[2]], 
         reviews: [$rootScope.placeReviews[0], $rootScope.placeReviews[2]],
         description: 'Enjoy the best that Out And Up has to offer in the amazing Peak District National park.',
         latitude: 53.1224876, 
         longitude: -1.7863538, 
         id: 0},
        
        { name: 'Yorkshire Dales Centre', 
         attractions: [$rootScope.attractionDescription[0], $rootScope.attractionDescription[1], $rootScope.attractionDescription[3]], 
         reviews: [$rootScope.placeReviews[1], $rootScope.placeReviews[3]], 
         description: 'Enjoy the Yorkshire Dales with our great outdoor activity centre at Out and Up.', 
         latitude: 54.298517, 
         longitude: -2.0994642, 
         id: 1 },
        
        { name: 'South Downs Centre', 
         attractions: [$rootScope.attractionDescription[0], $rootScope.attractionDescription[1], $rootScope.attractionDescription[4]], 
         reviews: [$rootScope.placeReviews[0], $rootScope.placeReviews[3]], 
         description: 'Explore the beauty of the South Downs with this Out and Up Centre.', 
         latitude: 50.9787754, 
         longitude: -0.7430816, 
         id: 2 },
        
    ];
    
	// They are hardcoded but it does not matter
	$rootScope.places = [
		$rootScope.placeOverview[0],
        $rootScope.placeOverview[1],
        $rootScope.placeOverview[2]
	];

})
.controller('AppCtrl', function() {
})

.controller('PlacesCtrl', function($scope, $stateParams, $rootScope) {

	$scope.name = $stateParams.name;

})

.controller('PlaceCtrl', function($scope, $stateParams, $rootScope) {
    
	$scope.id = $stateParams.placeId;

    console.log($scope.id);
    
    // This is the maximum amount of stars a rating can have
    
    $scope.max = 5;
    
})

.controller('AttractionCtrl', function($scope, $stateParams) {
    
    $scope.attractionId = $stateParams.attractionId;
    
    $scope.placeId = $stateParams.placeId;
    
});