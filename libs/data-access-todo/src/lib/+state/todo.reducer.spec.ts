import { TodoLoaded } from './todo.actions';
import { TodoState, Entity, initialState, todoReducer } from './todo.reducer';

describe('Todo Reducer', () => {
  const getTodoId = it => it['id'];
  let createTodo;

  beforeEach(() => {
    createTodo = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Todo actions ', () => {
    it('should return set the list of known Todo', () => {
      const todos = [createTodo('PRODUCT-AAA'), createTodo('PRODUCT-zzz')];
      const action = new TodoLoaded(todos);
      const result: TodoState = todoReducer(initialState, action);
      const selId: string = getTodoId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = todoReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
