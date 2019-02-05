import { Entity, TodoState } from './todo.reducer';
import { todoQuery } from './todo.selectors';

describe('Todo Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTodoId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createTodo = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      todo: {
        list: [
          createTodo('PRODUCT-AAA'),
          createTodo('PRODUCT-BBB'),
          createTodo('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Todo Selectors', () => {
    it('getAllTodo() should return the list of Todo', () => {
      const results = todoQuery.getAllTodo(storeState);
      const selId = getTodoId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedTodo() should return the selected Entity', () => {
      const result = todoQuery.getSelectedTodo(storeState);
      const selId = getTodoId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = todoQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = todoQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
