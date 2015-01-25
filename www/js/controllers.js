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
        { name: 'Place 1', attractions: [$rootScope.attractionDescription[0], $rootScope.attractionDescription[1]], reviews: [$rootScope.placeReviews[0], $rootScope.placeReviews[1]], description: 'Place 1 descriptionPlace 1 descriptionPlace 1 descriptionPlace 1 description', position: {x: "51.500729", y: "-0.124625"}, id: 0},
        { name: 'Place 2', attractions: [$rootScope.attractionDescription[1]], reviews: [$rootScope.placeReviews[1]], description: 'Place 2 description', position: {x: "-123", y: "4234"}, id: 1 },
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

.controller('PlaceCtrl', function($scope, $stateParams) {
	// Screw it, don't know how to access '$rootScope' in the template just assign a variable insted. Just a mirage (calling the two the same name)
	$scope.id = $stateParams.placeId;

	// This is the maximum star rating which a review can have
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

.controller('AttractionCtrl', function($scope, $stateParams) {
    $scope.attractionId = $stateParams.attractionId;
})

.controller('MapCtrl', function($scope, $ionicLoading, $compile) {
    
    $scope.init = function(place) {
        var myLatlng = new google.maps.LatLng(place.position.x, place.position.y);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var map = new google.maps.Map(document.getElementById("map"),
                                      mapOptions);

        //Marker + infowindow + angularjs compiled ng-click
    //    var contentString = "<div id='bodyContent'>" + place.description + "</div>";
      
        var contentString = '<div id="content">'+
                                  '<div id="siteNotice">'+
                                  '</div>'+
                                  '<h1 id="firstHeading" class="firstHeading">' + place.name  + '</h1>'+
                                  '<div id="bodyContent">'+
                                          place.description + 
                                   '</div>'+
                              '</div>';
        
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({ content: compiled[0] });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: place.name
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(contentString);
            infowindow.open(map,marker);
        });

        $scope.map = map;
    };

});