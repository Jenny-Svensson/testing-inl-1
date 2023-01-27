/**
* @jest-environment jsdom
*/

import { createHtml, createNewTodo, toggleTodo, displayError, clearTodos } from "../ts/main";
import { Todo } from "../ts/models/Todo";
import * as main from '../ts/main';
import * as functions from '../ts/functions';


/*########################################
||          createNewTodo()             ||
########################################*/

test('should createHtml if result is success ', () => {
    // Arrange
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>
    `;
    let todoText = "Hello World";
    let todos: Todo[] = [];

    // Act
    createNewTodo(todoText, todos);

    // Assert
    let result = document.getElementById('todos');
    expect(result).not.toBeNull();
    expect(result?.innerHTML).not.toBe('Test');
});


test('should not createHtml if result is NOT success', () => {
    // Arrange
    document.body.innerHTML = 
    '<div id="error" class="error"></div>' 
    + 
    '<ul id="todos" class="todo"></ul>';
    let todoText = "JS";
    let todos: Todo[] = [];

    //Act
    createNewTodo(todoText, todos);

    // Assert
    expect(document.getElementById('error')?.classList.contains('show')).toBeTruthy();

});

/*########################################
||            createHtml()              ||
########################################*/

test('should create Html ', () => {
    //Arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    const todos: Todo[] = [
        {text: "Hello World 1", done: true},
        {text: "Hello World 2", done: true},
        {text: "Hello World 3", done: false}
    ];

    const todosContain = 
    '<ul id="todos" class="todo">' +
    '<li class="todo__text--done todo__text">Hello World 1</li>' +
    '<li class="todo__text--done todo__text">Hello World 2</li>' +
    '<li class="todo__text">Hello World 3</li>' +
    '</ul>';

    //Act
    createHtml(todos);

    // Assert
    expect(document.getElementById('todos')?.outerHTML).toEqual(todosContain);
});

test('should trigger toggleTodo if -li- is clicked', () => {
    //Arrange
    document.body.innerHTML = `
    <ul id="todos" class="todo"> 
    <li class="todo"></li>
    </ul>
    `;
    const spyToggleToDo = jest.spyOn(main, "toggleTodo");
    createHtml([new Todo('Hello world', true)]);

    // Act
    document.querySelector('li')?.click();

    // Assert
    expect(spyToggleToDo).toHaveBeenCalled();
    spyToggleToDo.mockRestore();
});


/*########################################
||           toggleToDo()               ||
########################################*/

test('should toggle between changeTodo and createHtml ', () => {
    // Arrange
    let spyOnchangeToDo = jest.spyOn(functions, "changeTodo").mockReturnValue(); 
    let spyOncreateHtml = jest.spyOn(main, "createHtml").mockReturnValue(); 

    // Act
    let newTodo = new Todo("Test", true); 
    toggleTodo(newTodo);

    // Assert
    expect(spyOncreateHtml).toBeCalled(); 
    expect(spyOnchangeToDo).toBeCalled(); 
});

/*########################################
||          displayError()              ||
########################################*/
test('should add class "show" if its text is more than or equal 3 letters ', () => {
    // Arrange
    let errorText = 'An error has occured'
    document.body.innerHTML = `<div id="error" class"error"></div>`;

    // Act
    displayError(errorText, true);

    // Assert
    let result = document.getElementById('error')?.innerHTML
    expect(result).toBe(errorText);
});

test('should remove class "show" if its text is less than 3 letters ', () => {
    // Arrange
    let errorText = "js";
    document.body.innerHTML = `<div id="error" class"error"></div>`;

    // Act
    displayError(errorText, false);

    // Assert
    let result = document.getElementById('error')?.innerHTML
    expect(result).toBe(errorText);
});

/*########################################
||            clearTodos()              ||
########################################*/

test('should go thru removeAllTodos and createHtml ', () => {
    // Arrange
    let spyOnremoveAllTodos = jest.spyOn(functions, "removeAllTodos").mockReturnValue(); 
    let spyOncreateHtml = jest.spyOn(main, "createHtml").mockReturnValue(); 
    let todo: Todo[] = [
        {text: 'World', done: true}
    ];

    // Act
    clearTodos(todo); 

    // Assert
    expect(spyOncreateHtml).toBeCalled(); 
    expect(spyOnremoveAllTodos).toBeCalled(); 
});