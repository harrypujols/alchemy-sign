const FRAMEWORK = {};

import components from './methods/components';
import breakpoint from './methods/breakpoint';
import resizestop from './methods/resizestop';
import scrolldirection from './methods/scrolldirection';
import scrollstop from './methods/scrollstop';

import include from './components/include';
import size from './components/size';
import birthdate from './components/birthdate';

import run from './app/run';

(( window, APP ) => {
  APP.methods = {
    render,
    components,
    breakpoint,
    resizestop,
    scrolldirection,
    scrollstop
  }

  APP.components = {
    include,
    size,
    birthdate
  }

  APP.start = {
    run
  }

  APP.start.run( APP );

})( window, FRAMEWORK, undefined )
