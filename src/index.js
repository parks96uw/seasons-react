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
        this.state = {
            lat: null
        };
 
        // this takes some time so we will have two callbacks -- success and failure
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                // we call setState to update
                // setstate gets set when we extend React.Component
                this.setState({
                    lat: position.coords.latitude
                })

            },
            err => console.log(err)
        );
    }

    // need to define render that returns JSX
    // will get called many time
    render() {
        return (
            <div>
                Latitude: { this.state.lat }
                <SeasonDisplay />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));