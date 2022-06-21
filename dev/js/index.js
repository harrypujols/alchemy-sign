const FRAMEWORK = {};

import data from './data/data';

import components from './methods/components';
import breakpoint from './methods/breakpoint';
import render from './methods/render';

import alchemy from './components/alchemy';

import run from './app/run';

(( window, APP ) => {
  APP.methods = {
    components,
    breakpoint,
    render
  }

  APP.components = {
    alchemy
  }

  APP.start = {
    run
  }

  APP.data = data;

  APP.start.run( APP );

})( window, FRAMEWORK, undefined )
