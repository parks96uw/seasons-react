import React from 'react';
import "./SeasonDisplay.css";

// Configuration object for use in functional component
const seasonConfig = {
    summer: { content: "Let's hit the beach", iconName: "sun" },
    winter: { content: "Brrr it's chilly", iconName: "snowflake" }
}

// DEF: Functional component SeasonDisplay
const SeasonDisplay = (props) => {

    // State of our component
    const season = getSeason(props.lat, new Date().getMonth());
    const { content, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{content}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
}

// DEF: Method that determines the season based on the month and latitude
//      If 3 <= month <= 8 && northern hemisphere == summer else winter
//      If 3 <= month ,+ 8 && southern hemisphere == winter else summer
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'; // tertiary statement
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default SeasonDisplay;