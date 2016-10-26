// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'common.fabric', 'common.fabric.utilities', 'common.fabric.constants', 'starter.controllers', 'starter.services', 'starter.directives', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  var config = {
    apiKey: " AIzaSyCYHAO9HZQ6yQD3SXJ_-ww3KzwRZxl5FQs",
    authDomain: "events-b104f.firebaseapp.com",
    databaseURL: "https://events-b104f.firebaseio.com"
  };

  firebase.initializeApp(config);

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.upload', {
    url: '/upload',
    views: {
      'tab-upload': {
        templateUrl: 'templates/tab-upload.html',
        controller: 'UploadCtrl as uploadCtrl'
      }
    }
  })

  .state('tab.notification', {
    url: '/notification',
    views: {
      'tab-notification': {
        templateUrl: 'templates/tab-notification.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'AuthCtrl as authCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
