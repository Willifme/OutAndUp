// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngMessages', 'ionic.rating', 'elif', 'uiGmapgoogle-maps'])

.filter('range', function() {
  return function(input, min, max) {
    min = parseInt(min); //Make string input int
    max = parseInt(max);
    for (var i=min; i<max; i++)
      input.push(i);
    return input;
  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.map', {
    url: "/locations",
    views: {
      'menuContent': {
          templateUrl: "templates/locations.html"
       }
    }
  })
  
  .state('app.attractions', {
    url: "/attractions",
	views: {
	  'menuContent': {
		  templateUrl: "templates/attractions.html"
      }
    }
  })	
  
  .state('app.places', {
    url: "/places",
	views: {
	  'menuContent': {
		  templateUrl: "templates/places/places.html",
		  controller: 'PlacesCtrl'
	   }
     }
   })

  	.state('app.places.place', {
		url: "/:placeId",
		views: {
	  	    'menuContent@app': {
		        templateUrl: "templates/places/place/place.html",
		        controller: 'PlaceCtrl'
	  	    }
		}
  	})

    .state('app.places.place.location', {
        url: "/location",
        views: {
            'menuContent@app': {
                templateUrl: "templates/places/place/location.html"
            }
        }
    })
  
	.state('app.places.place.attractions', {
        url: "/attractions?placeId&attractionId",
		views: {
			'menuContent@app': {
				templateUrl: "templates/places/place/attractions/attractions.html",
                controller: 'AttractionCtrl'
			}
		}
	})
  
    .state('app.places.place.attractions.reviews', {
        url: "/reviews",
        views: {
            'menuContent@attractions': {
                templateUrl: "templates/places/place/attractions/reviews.html"
            }
        }
    })

	.state('app.places.place.reviews', {
		url: "/reviews",
		views:  {
			'menuContent@app': {
				templateUrl: "templates/places/place/reviews.html"
			}
		}
	})
  
	.state('app.places.place.book', {
		url: "/book",
		views:  {
			'menuContent@app': {
				templateUrl: "templates/places/place/book.html"
			}
		}
	})

    .state('app.about', {
        url: "/about",
        views: {
            'menuContent': {
				templateUrl: "templates/about.html",
            }
        }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/places');
});
