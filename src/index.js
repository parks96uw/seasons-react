import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // our state object which will contain our relevant data
    // only time we do direct assignment to this.state
    // we can have 3 different types of state
    state = { lat: null, errorMessage: '' };

    // // this function will be called one time when our component gets rendered onto the screen
    componentDidMount() {
        console.log('My component was rendered to the screen');

        // this takes some time so we will have two callbacks -- success and failure
        window.navigator.geolocation.getCurrentPosition(
            // success callback will not run until we fetch our position
            // setstate gets set when we extend React.Component
            position => { this.setState({ lat: position.coords.latitude }) },
            // handling errors gracefully
            // the user can decline the location request
            // error callback -- rerender our component
            err => { this.setState({ errorMessage: err.message }) }
        );
    }

    // good for data loading
    componentDidUpdate() {
        console.log('My component was just updated -- it re-rendered');
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat)
            return <div>Error: {this.state.errorMessage}</div>

        // pass the latitude to the season component
        // using the props system
        if (!this.state.errorMessage && this.state.lat)
            return <SeasonDisplay lat={this.state.lat} />;

        return <Spinner message="Please accept location request" />
    }

    // need to define render that returns JSX
    // will get called many times
    render() {
        return <div className="border red">{this.renderContent()}</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));