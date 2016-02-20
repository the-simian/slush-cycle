import {Observable} from 'rx';
import {div,h2} from '@cycle/dom';


const notFoundView = div([
  h2({
    style: {
      padding: '2em'
    }
  }, 'This page can not be found (intentionally)')
]);

function NotFound() {
  return {
    DOM: Observable.of(notFoundView)
  };
}

export default NotFound;
