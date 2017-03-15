<<<<<<< HEAD
angular.module('groupToDo', ['ui.router'])
=======
angular.module('groupToDo', ['us.router'])
>>>>>>> 584edba90815cbcefb478df09c9bc2e23b76fbb1

  .config( function ($urlRouterProvider, $stateProvider){

$urlRouterProvider.when('', '/');

  $stateProvider
    .state('welcome', {
      templateUrl: 'welcome.html',
      contoller: 'welcomeCtrl',
      url: '/'
    })

    .state('to-do', {
      templateUrl: 'todo.html' ,
      controller: 'todoCtrl',
      url: '/todo'
    })

<<<<<<< HEAD
    .state('archive', {
      templateUrl: 'archive.html'
      controller: 'archiveCtrl',
      url: 'archive'
    })
=======
>>>>>>> 584edba90815cbcefb478df09c9bc2e23b76fbb1

}
