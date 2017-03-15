angular.module('groupToDo', ['ui.router'])

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


}
