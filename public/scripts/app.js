"use strict";

var count = 0;
var addOne = function addOne() {
    count++;
    //Adds one to counter
    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    //Minus one counter
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset Count"
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};
//Initially renders counter
renderCounterApp();
