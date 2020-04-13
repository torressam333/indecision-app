import React from "react";
import Option from "./Option";

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__h3-header" >Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}>
                Remove All
            </button>
        </div>
        {/*Add message if options array is empty*/}
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
        {
            props.options.map((option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;