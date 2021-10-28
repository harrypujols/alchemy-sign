const FRAMEWORK = {};

import data from './data/data.json';

import components from './methods/components';
import breakpoint from './methods/breakpoint';
import render from './methods/render';

import birthdate from './components/birthdate';

import run from './app/run';

(( window, APP ) => {
  APP.methods = {
    components,
    breakpoint,
    render
  }

  APP.components = {
    birthdate
  }

  APP.start = {
    run
  }

  APP.data = data;

  APP.start.run( APP );

})( window, FRAMEWORK, undefined )
