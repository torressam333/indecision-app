class Header extends React.Component {
    //React Components require render() to be defined
    render(){
        return(
        <div>
            <h1>Indecision</h1>
            <h2>Let a computer decide what you should do!</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return <div>
            <button>What should I do?</button>
        </div>
    }
}

class Options extends React.Component{
    render(){
        return (<div>
            <p>Option Component goes here</p>
        </div>
        );
    }
}

class AddOption extends React.Component{
    render(){
        return (<div>
            <button>Add Option</button>
        </div>
        );
    }
}

const jsx = (
    <div>
        {/*Call React component*/}
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);
ReactDOM.render(jsx, document.getElementById('app'));