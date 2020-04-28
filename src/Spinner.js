import React from 'react';

const Spinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui text loader">
                {props.message}
            </div>
        </div>
    )
}

// in case props.message is an empty string -- nothing was passed
// good for reusable components
Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner;