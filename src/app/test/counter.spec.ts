
import { Counter } from './counter.js';

describe('Counter', () => {
  let counter: Counter;

  beforeEach(() => {
    counter = new Counter();
  });

  it('should increase value of counter when incremented', () => {
    counter.increment();
    counter.value.subscribe(value => {
      expect(value).toEqual(1);
    });
  });

  it('should decrease value of counter when decremented', () => {
    counter.decrement();
    counter.value.subscribe(value => {
      expect(value).toEqual(-1);
    });
  });
});
