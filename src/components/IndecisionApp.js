import React from "react";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined //No modal by default
    };

    //Removes selected options state (closes modal)
    handleRemoveOptionState = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    //Remove single options
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    //Remove all options
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleRemoveOptionState={this.handleRemoveOptionState}
                />
            </div>
        );
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
}