import React from 'react';

// DEF: Functional component Spinner
const Spinner = (props) => {
    return (
        <div class="ui active dimmer">
            <div class="ui text loader">
                {props.message}
            </div>
        </div>
    )
}

// DEF: Set default message for loading component if nothing has been passed in
Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner;