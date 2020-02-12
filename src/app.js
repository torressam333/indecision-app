// JSX - JavaScript XML

const app = {
    title: 'Indecision Application',
    subtitle: 'This helps you make wise choices',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option){
        //Save input text
        app.options.push(option);
        //Clear input
        e.target.elements.option.value = '';
        //Data changes
        renderOption();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderOption();
};

const appRoot = document.getElementById('app');
const renderOption = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options.length > 0) ? 'Here are your options' : 'No options are available'}</p>
            <button onClick={onRemoveAll}>Remove All Options</button>
            {

            }
            <p>{app.options.length}</p>
            <ol>
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

//Initialise render function
renderOption();
