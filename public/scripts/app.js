'use strict';

// JSX - JavaScript XML

var app = {
    title: 'Indecision Application',
    subtitle: 'This helps you make wise choices',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        //Save input text
        app.options.push(option);
        //Clear input
        e.target.elements.option.value = '';
        //Data changes
        renderOption();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderOption();
};

var appRoot = document.getElementById('app');
var renderOption = function renderOption() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options are available'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item One'
            ),
            React.createElement(
                'li',
                null,
                'Item Two'
            ),
            React.createElement(
                'li',
                null,
                'Item Three'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                { type: 'submit' },
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

//Initialise render function
renderOption();
