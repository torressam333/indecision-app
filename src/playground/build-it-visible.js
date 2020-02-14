/*Test Playground for React Toggle*/
const toggleApp = {
    title: "Visibility Toggle",
    body: "These are the details being displayed",
};

let visibility = false;

const toggleData = () => {
    //Flips value from true to false and vise versa
    visibility = !visibility;
    renderInfo();
};

//Where data is displayed
const appRoot = document.getElementById('app');
const renderInfo = () => {
    const template = <div>
        <h1>{toggleApp.title}</h1>
        <button onClick={toggleData}>
            {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {visibility && (
            <div><p>{toggleApp.body}</p></div>
        )}
    </div>;
    ReactDOM.render(template, appRoot);
};

renderInfo();