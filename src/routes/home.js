import {Observable} from 'rx';
import {div,h2} from '@cycle/dom';


const notFoundView = div([
  h2({
    style: {
      padding: '1em'
    }
  }, 'This is the home page derrr')
]);

function Home() {
  return {
    DOM: Observable.of(notFoundView)
  };
}

export default Home;
