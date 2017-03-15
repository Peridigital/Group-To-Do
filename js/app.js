angular.module('groupToDo', ['ui.router'])

  .config( function ($urlRouterProvider, $stateProvider){

$urlRouterProvider.when('', '/');

  $stateProvider
    .state('welcome', {
      templateUrl: './views/welcome.html',
      contoller: 'mainCtrl',
      url: '/'
    })

    .state('todo', {
      templateUrl: './views/todo.html' ,
      controller: 'mainCtrl',
      url: '/todo'
    })


}
