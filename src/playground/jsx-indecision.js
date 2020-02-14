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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
const renderOption = () =>{
    const template = <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options.length > 0) ? 'Here are your options' : 'No options are available'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        <ol>
            {app.options.map((option) => <li key={option}>Option: {option}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button type="submit">Add Option</button>
        </form>
    </div>;
    ReactDOM.render(template, appRoot);
};

//Initialise render function
renderOption();
