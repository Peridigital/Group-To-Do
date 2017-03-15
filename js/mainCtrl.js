angular.module('groupToDo').controller('mainCtrl', function($scope, toDoService) {
  $scope.test = toDoService.serviceTest
})
