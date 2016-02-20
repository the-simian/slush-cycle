import {Observable} from 'rx';
import {div,h2} from '@cycle/dom';


const notFoundView = div([
  h2({
    style: {
      padding: '1em'
    }
  }, 'This is the home page derrr')
]);

function Route1() {
  return {
    DOM: Observable.of(notFoundView)
  };
}

export default Route1;
