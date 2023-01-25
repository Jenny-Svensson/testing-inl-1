import { createHtml, createNewTodo, toggleTodo } from "../ts/main";
import { Todo } from "../ts/models/Todo";

// Arrange - skapa förutsättningar för att kunna anropa vår funktion
// Act - Anropar funktionen som skall testas
// Assert - Kontroll av förändrade värden

/******* Function createNewTodo IF ********/
test('should add a todo to the list ', () => {
    // Arrange
    let todotext = "Hello";
    let todos: Todo[] = [
        {text: 'World', done: true},
    ];
    let result = todotext + todos;
    // Act
    createNewTodo(todotext, todos);
    // Assert 
// expect result ska vara sucess(true) och därmedskapa createHtml(todos)    

});

/******* Function createNewTodo ELSE ********/
test('should add a todo to the list ', () => {
    // Arrange
    let todotext = "";
    let todos: Todo[] = [
        {text: '', done: false},
    ];
    let result = todotext + todos;
    // Act
    createNewTodo(todotext, todos);
    // Assert 
// expect result ska vara sucess(false) och därmed köra displayError(result.error, true)    

});



/******* Function createHtml ********/
test('should create a HTML ', () => {

});

/******* Function toggleTodo ********/
test('should display error ', () => {

});

/******* Function clearTodos ********/
test('should clear all todos ', () => {

});