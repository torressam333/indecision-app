'use strict';

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision Application'
  ),
  React.createElement(
    'p',
    null,
    'Testing JSX'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
