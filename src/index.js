import React from 'react';
import ReactDOM from 'react-dom';

// DEF: Import our custom components
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

    // DEF: Define and initialize our state objects
    // NOTE: We can only do direct assignments to this.state
    state = { lat: null, errorMessage: '' };

    // DEF: Reserved function that will get called once when this component
    //      gets rendered onto the screen
    componentDidMount() {

        // DEF: Get the current position
        //      This is a callback function
        //      Handles both success and failure case
        window.navigator.geolocation.getCurrentPosition(
            // DEF: Will not run until we fetch our position
            position => { this.setState({ lat: position.coords.latitude }) },

            // DEF: Handling errors gracefully if the user delines the location request
            err => { this.setState({ errorMessage: err.message }) }
        );
    }

    renderContent() {
        // DEF: If there is an error message and no latitude is found
        if (this.state.errorMessage && !this.state.lat)
            return <div>Error: {this.state.errorMessage}</div>

        // DEF: If there is no error message and a latitude is found
        //      Passes the latitude down to the SeasonDisplay component
        if (!this.state.errorMessage && this.state.lat)
            return <SeasonDisplay lat={this.state.lat} />;

        // DEF: Loading page
        return <Spinner message="Please accept location request" />
    }

    render() {
        return <div className="border red">{this.renderContent()}</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));