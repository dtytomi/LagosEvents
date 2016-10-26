angular
  .module('starter.services', [])

  .factory('Auth', function ($firebaseAuth) {
    // body...
    return $firebaseAuth();
  });