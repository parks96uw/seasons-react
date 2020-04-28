import React from 'react';

class Spinner extends React.Component {
    render() {
        return (
            <div class="ui active dimmer">
                <div class="ui text loader">
                    Loading...
                </div>
            </div>
        )
    }
}

export default Spinner;