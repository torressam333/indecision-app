import React from "react";
import Option from "./Option";

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

export default Options;