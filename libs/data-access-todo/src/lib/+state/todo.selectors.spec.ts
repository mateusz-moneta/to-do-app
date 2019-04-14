import { TodoState } from './todo.reducer';
import { todoQuery } from './todo.selectors';
import { Todo } from '../interfaces/todo.interface';

describe('Todo Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTodoId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createTodo = (description: string, id: string, title: string): Todo => ({
      description,
      id,
      title
    });
    storeState = {
      todo: {
        list: [
          createTodo('PRODUCT-AAA', '1', 'PRODUCT-AAA'),
          createTodo('PRODUCT-BBB', '2', 'PRODUCT-BBB'),
          createTodo('PRODUCT-CCC', '3', 'PRODUCT-CCC')
        ],
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
      console.log(selId);
      expect(selId).toBe('2');
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
