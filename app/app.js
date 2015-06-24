import Cycle from 'cycle';
import CycleWeb from 'cycle-web';
let {h} = CycleWeb;

/*
Brunch does not seem to support npm packages, which are not
directly under `node_modules`. `@cycle/core` does not work
with npm enabled - presumably because of the subdirectory structure.
*/

function main(drivers) {
  return {
    DOM: drivers.DOM.get('.myinput', 'input')
      .map(ev => ev.target.value)
      .startWith('')
      .map(name =>
        h('div', [
          h('label', 'Name:'),
          h('input.myinput', {attributes: {type: 'text'}}),
          h('hr'),
          h('h1', 'Hello ' + name)
        ])
      )
  };
}

let init = () => Cycle.run(main, {
  DOM: CycleWeb.makeDOMDriver('#app')
});

export {init};
