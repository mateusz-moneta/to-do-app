import { TodoAllLoaded } from './todo.actions';
import { initialState, todoReducer } from './todo.reducer';
import { Todo } from '../interfaces/todo.interface';

describe('Todo Reducer', () => {
  describe('TodoActionTypes.TodoAllLoaded', () => {
    it('should store all todo', () => {
      const todo = [{ description: 'TEST-A', id: '1', title: 'TEST-A' }, { description: 'TEST-B', id: '2', title: 'TEST-B' }] as Todo[];
      const action = new TodoAllLoaded(todo);
      const result = todoReducer(initialState, action);

      expect(result);
    });
  });
});
