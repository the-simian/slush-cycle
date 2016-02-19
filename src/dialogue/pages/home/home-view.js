import {h, div, h1, h2, button, p} from '@cycle/dom';

const view = (state$) =>
  // mapping over our merged model to update 'count'
  state$.map(count =>
    div('.homepage', [
      h1('.content-subhead', ['Home Page']),
      h1([`Welcome to the Home Page`]),
      div('.pure-u-1-2 .counter-table',[
        button('.decrement', 'Decrement'),
        button('.increment', 'Increment'),
        div('.counter-table-result',[
          h2('Counter: ' + count)
        ])
      ])
    ])
  );

export default view;
