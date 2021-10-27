const FRAMEWORK = {};

import data from './data/data.json';

import components from './methods/components';
import breakpoint from './methods/breakpoint';
import resizestop from './methods/resizestop';
import scrollstop from './methods/scrollstop';

import include from './components/include';
import birthdate from './components/birthdate';

import run from './app/run';

(( window, APP ) => {
  APP.methods = {
    components,
    breakpoint,
    resizestop,
    scrollstop
  }

  APP.components = {
    include,
    birthdate
  }

  APP.start = {
    run
  }

  APP.data = data;

  APP.start.run( APP );

})( window, FRAMEWORK, undefined )
