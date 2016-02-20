import {div, nav} from '@cycle/dom';
import NotFound from './routes/notfound';
import Route1 from './routes/route1.js';
import Counter from './routes/counter.js';
import Sidebar from './components/sidebar';

// routes is used for matching a route to a component
const routes = {
  '/': Route1,
  '/counter': Counter,
  '*': NotFound
};

// the view has sidebar & children passed in
function view(sidebar, children) {
  return div([
    nav([sidebar]),
    div([children])
  ]);
}

function App(sources) {
  const {router} = sources;
  const {path$, value$} = router.define(routes);

  const sidebar = Sidebar(sources, path$);

  const childrenDOM$ = path$
    .zip(
      value$,
      (path, value) => value({...sources, router: router.path(path)}).DOM
    );

  return {
    Dom: sidebar.DOM.combineLatest(childrenDOM$, view)
  };
}

export default App;
