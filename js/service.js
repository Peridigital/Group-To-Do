angular.module('groupToDo').service('toDoService', function() {

  // {
  //  name: Test To do Item
  //  description: Hello, I am an example of a description for this to do Item
  //  incomplete: true
  // }
  this.newToDoItem = function (name, description) {
    return {
      name: name,
      description: description,
      incomplete: true
    }
  }
})
