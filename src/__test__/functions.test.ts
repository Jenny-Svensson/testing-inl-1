import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

// Arrange - skapa förutsättningar för att kunna anropa vår funktion
// Act - Anropar funktionen som skall testas
// Assert - Kontroll av förändrade värden

/********* Function addTodo *******/
test('should add a new todo to todolist ', () => {
    let text = "Hello";
    let todos: Todo[] = [
        {text: 'World', done: true},
    ];
    let result = text + todos;

    addTodo(text, todos);

    expect(result.length).toBeGreaterThanOrEqual(3);

});

/********* Function changeTodo *******/
test('should change from false to true ', () => {
    // arrange
    let todo = new Todo('hello world', false);
    // act
    changeTodo(todo);
    // assert
    expect(todo.done).toBe(true);
});

/********* Function removeAllTodos *******/
test('should remove all todos ', () => {
    // arrange
    let todos: Todo[] = [
        {text: 'hello world', done: true},
    ];
    // act
    removeAllTodos(todos);
    // assert
    expect(todos.length).toBe(0);
});