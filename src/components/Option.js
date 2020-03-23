import React from "react";

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

export default Option;