angular.module('groupToDo').controller('mainCtrl', function($scope, toDoService) {
  //Array of all to do items
  $scope.toDoArray = [];
  $scope.archivedToDoArray = [];


  //Calls toDoService's function to make an item, then pushes it to toDoArray
  $scope.addNewToDo = function (name, description) {
    $scope.toDoArray.push(toDoService.newToDoItem(name, description))
  }
  //Test call
  $scope.addNewToDo('Test!', 'Hello, I am a test!')


 //Removes selected item from toDoArray
  $scope.removeToDo = function (index) {
    $scope.toDoArray.splice(index, 1)
  }

  $scope.archiveToDo = function (index) {
    $scope.archivedToDoArray.push($scope.toDoArray[index])
    $scope.removeToDo(index)

  }
})
