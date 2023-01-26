/**
* @jest-environment jsdom
*/

import { createHtml, createNewTodo, toggleTodo, displayError, clearTodos } from "../ts/main";
import { Todo } from "../ts/models/Todo";

// Arrange - skapa förutsättningar för att kunna anropa vår funktion
// Act - Anropar funktionen som skall testas
// Assert - Kontroll av förändrade värden

/* 


 */

/******* Function createNewTodo ********/
test('should createHtml if result is success and displayerror if result is error ', () => {
    // Arrange
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>
    `;
    let todos: Todo[] = [
        {text: 'World', done: true},
    ];
    // Act
    createNewTodo('Test', todos);
    // Assert
    let result = document.getElementById('todos');
    expect(result).not.toBeNull();
    expect(result?.innerHTML).not.toBe('Test');
});

/******* Function createHtml ********/


/******* Function toggleTodo ********/


/******* Function displayError ********/
test('should add class "show" if its true and display error text ', () => {
    // Arrange
    let errorText = 'An error has occured'
    document.body.innerHTML = `<div id="error" class"error"></div>`;
    // Act
    displayError(errorText, true);
    // Assert
    let result = document.getElementById('error')?.innerHTML
    expect(result).toBe(errorText);
})

/******* Function clearTodos ********/