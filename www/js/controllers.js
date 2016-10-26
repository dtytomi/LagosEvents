angular
  .module('starter.controllers', [])

  .controller('AuthCtrl', function (Auth, $state) {
    // body...
    var authCtrl = this;
    var auth = firebase.auth();

    authCtrl.googleLogin = function  () {
      var provider = new firebase.auth.GoogleAuthProvider();

      Auth.$signInWithPopup(provider)
        .then(function (result) {
           // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;

          $state.go('tab.dash');
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        })
    }

    authCtrl.facebookLogin = function  () {
      var provider = new firebase.auth.FacebookAuthProvider();

      Auth.$signInWithPopup(provider)
        .then(function (authData) {
          $state.go('tab.dash');
        })
    }

    authCtrl.twitterLogin = function  () {
      var provider = new firebase.auth.TwitterAuthProvider();

      Auth.$signInWithPopup(provider)
        .then(function (authData) {
          $state.go('tab.dash');
        })
    }

  })

  .controller('DashCtrl', function($scope) {})

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('UploadCtrl', function ($scope) {
    // body...
    var uploadCtrl = this;
    var imageUploader = new ImageUploader();

    uploadCtrl.file = {};
    uploadCtrl.upload = function () {
      imageUploader.push(uploadCtrl.file, function (data) {
        console.log('File upload Successfully', uploadCtrl.file, data);
        uploadCtrl.uploadUri = data.url;
        uploadCtrl.$digest();
      })
    }

  });
