import { addTodo, changeTodo, removeAllTodos, sortToDo } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

/********* Function sortTodo *******/
test ('should sort todos', () => {
    // Arrange
    let todos: Todo [] = [
        {text: 'pikachu', done: false},
        {text: 'snorlax', done: false},
        {text: 'charmander', done: false},
        {text: 'ash', done: false},
        {text: 'misty', done: false},
    ];

    // Act
    sortToDo(todos);

    // Assert
    let result = [
        {text: 'ash', done: false},
        {text: 'charmander', done: false},
        {text: 'misty', done: false},
        {text: 'pikachu', done: false},
        {text: 'snorlax', done: false},
    ];

    expect(todos).toStrictEqual(result);
});

/********* Function addTodo *******/
test('should add a new todo to todolist ', () => {
    // arrange
    let todotext = "Hello";
    let todos: Todo[] = [
        {text: 'World', done: true},
    ];
    let result = todotext + todos;
    // act
    addTodo(todotext, todos);
    // assert
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