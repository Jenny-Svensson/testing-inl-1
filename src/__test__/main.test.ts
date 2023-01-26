/**
* @jest-environment jsdom
*/

import { createHtml, createNewTodo, toggleTodo, displayError, clearTodos } from "../ts/main";
import { Todo } from "../ts/models/Todo";
import * as main from '../ts/main';
import * as functions from '../ts/functions';

/***********************************************
*************Function createNewTodo*************
************************************************/

test('should createHtml if result is success ', () => {
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


/*
test('should displayError if result is not success ', () => {
    // Arrange
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>
    `;
    let todos: Todo[] = [
        {text: '', done: false},
    ];

    // Act
    createNewTodo('', todos);

    // Assert
    let result = document.getElementById('todos');
    expect(result).toBeNull();
    expect(result?.innerHTML).toBe(""); 

});
 */
/***********************************************
***************Function createHTML**************
************************************************/


/***********************************************
**************Function toggleToDo***************
************************************************/
test('should toggle between changeTodo and createHtml ', () => {
    let spyOnchangeToDo = jest.spyOn(functions, "changeTodo").mockReturnValue(); 
    let spyOncreateHtml = jest.spyOn(main, "createHtml").mockReturnValue(); 

    let t = new Todo("Test", true); 
    
    toggleTodo(t);


    // Assert
    expect(spyOncreateHtml).toBeCalled(); 
    expect(spyOnchangeToDo).toBeCalled(); 
});

/**************************************** *******
*************Function displayError**************
************************************************/
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

/***********************************************
**************Function clearTodos***************
************************************************/

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


/************* NOTES in swedish *************/

// Arrange - skapa förutsättningar för att kunna anropa vår funktion
// Act - Anropar funktionen som skall testas
// Assert - Kontroll av förändrade värden

// mockResultValue = resultat av anropet som görs, ska bli inget. koden kmr inte köras i vår funktion. den abryts 