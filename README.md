A simple application that determines the season based on your location and month of the year. If it's summer it will show a warm, vibrant page and if it's winter it will show a cool, icy page.

This application uses React and the user location 

To start this application, `cd` into the main folder and run `npm start`.

Other Technical Notes

### Functional components vs class components
Class-based components are easier to organize than functional components. 

SeasonDisplay is an example of a functional component -- take a look at SeasonConfig and the getSeason()

index.js is an example of a class-based component -- everything is organized into methods and looks a lot more cleaner. Class-based components can make use of the `state` system and easier to handle user input. Class-based components can make use of lifecycle methods.

### Rules of Class Components
It must be a Javascript class. The class must extends React.Component and it must have a render method that returns some JSX

### Rules of State
It is only usable with class components (can use hooks technically). You will confuse props with state. `state` is a Javascript object that contains data releveant to a component. Updating `state` on a component will cause the component to (almost) instantly rerender. State must be initalized when a component is created. State can only be updated using the function `setState`

# Component Lifecycle
constructor, render, componentDidMount, componentDidUpdate, componentWillUnmount
