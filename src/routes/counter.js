import {Observable} from 'rx';
import {div,h2} from '@cycle/dom';

const notFoundView = div([
  h2({
    style: {
      padding: '3em'
    }
  }, 'counter.')
]);

function Counter() {
  return {
    DOM: Observable.of(notFoundView)
  };
}

export default Counter;
