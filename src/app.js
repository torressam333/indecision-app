import React from 'react';
import ReactDOM from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        //Individual option binding
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    //Lifecycle method
    componentDidMount(){
        //Use try/catch for invalid json
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                //Use state to return an object
                this.setState(() => ({options}));
            }
        }catch (e) {
            //Do nothing with invalid JSON, allow to be default state value
        }
    }

    componentDidUpdate(prevProps, prevState){
        //check if options arr length changed by comparing to current arr length
        if (prevState.options.length !== this.state.options.length) {
            //convert arr to string
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

    }

    componentWillUnmount() {
        console.log('Unmounted');
    }
    //Remove single options
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    //Remove all options
    handleDeleteOptions () {
        this.setState(() => ({options: []}));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    render() {
        const subtitle = 'Allow a computer to decide for you';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

//Add default prop values
Header.defaultProps = {
    title: 'Indecision'
};
//Functional component
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All Options</button>
            {/*Add message if options array is empty*/}
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            {/*Delete individual option*/}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove Option
            </button>
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        //Clear input if no error
        if(!error){
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));