import React from 'react';
import "./SeasonDisplay.css";

// configuration object
const seasonConfig = {
    summer: {
        content: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        content: "Brrr it's chilly",
        iconName: "snowflake"
    }
}

const SeasonDisplay = (props) => {
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

// if user is in nortnern hemisphere and month is between 3-8, they are in summer, else winter
// if user is in southern hemisphere and month is between 3-8, they are in winter, else summer
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'; // tertiary statement
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}


export default SeasonDisplay;