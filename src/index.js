import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    // we have one state -- the latitude of the user

    // initialize the sate through the constructor
    // optional -- not required
    // the very first function that is called within this App instance component
    // therefore it is the best place to initialize the state
    constructor(props) {
        // makes sure that React.Compononent's constructor function gets called
        super(props);

        // our state object which will contain our relevant data
        // only time we do direct assignment to this.state
        // we can have 3 different types of state
        this.state = {
            lat: null,
            errorMessage: ''
        };
    }

    // // this function will be called one time when our component gets rendered onto the screen
    componentDidMount() {
        console.log('My component was rendered to the screen');

        // this takes some time so we will have two callbacks -- success and failure
        window.navigator.geolocation.getCurrentPosition(
            // callback will not run until some point in the future -- until we fetch our position
            position => {
                console.log(position);
                // we call setState to update
                // setstate gets set when we extend React.Component
                this.setState({
                    lat: position.coords.latitude
                });
            },
            // handling errors gracefully
            // the user can decline the location request
            // error callback -- rerender our component
            err => {
                this.setState({
                    lat: null,
                    errorMessage: err.message
                })
                console.log(err);
            }
        );        
    }

    // good for data loading
    componentDidUpdate() {
        console.log('My component was just updated -- it rerendered');
    }

    // need to define render that returns JSX
    // will get called many time
    render() {
        if (this.state.errorMessage && !this.state.lat) 
            return <div>Error: {this.state.errorMessage}</div>
        
        if (!this.state.errorMessage && this.state.lat)
            return <div> Latitude: {this.state.lat} </div>;

        return <div>Loading</div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));