import {run} from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import {makeHistoryDriver} from 'cyclic-history';
import {makeRouterDriver} from 'cyclic-router';
import {createHashHistory} from 'history';

import app from './app';

const drivers = {
  DOM: makeDOMDriver('#root'),
  router: makeRouterDriver(makeHistoryDriver(createHashHistory()))
};

run(app, drivers);
