// Getting Started with React
    // Create React App
        // Create React App exists to make setting up a React App easier
        // A toolkit used for setting up a react project. It gives us a project strucure, the ability to use the latest JS features, annd the tolls for optimizing your app for production. 

        // Go to the directory folder that you want to build the React app in
            // Check the node version
                node -v 
                // v8.10 or higher is needed
            // Check the npm version
                npm -v
                // v5.6 or higher is needed
            
        // Generate the project
            npx create-react-app hello-react --use-npm
                // npx create-react-app <project-name> --use-<installer-to-use>
                    // yarn is the default installer

        // Change directories into the new project and start the project
            cd <project-name>
            npm start 

    // Touring create-react-app
        // What's included
            // package.json file with reloaded dependencies
            // src folder with files that will be used to write the application
            // public folder that will hold the built files that will be used for production
        // You can also use codesandbox.com to set up a react project

    // Setting up React Developer Tools in Chrome
        // In goodgle, search for 'chome web store react developer tools'
        // Go to the extensions page and click the ADD TO CHROME button, followed by the ADD EXTENSION button in the pop-up window 
        // Once added, you can open the console in the Dev Tools, click on nthe >> icon and select the Components tab. This will show you all of the components that are on this page
        // There is also a little red icon located on the bookmarks bar that lets you know that react is being run on the page

// React Elements
    // Creating a React Element
        // ReactDOM.render takes in two arguments
            // 1) the element that we want to create
            // 2) where we want to render that element
            // To build an element to be rendered on the page, use React.createElement()
                ReactDOM.render(
                    React.createElement(),              // the element we want to create
                    document.getElementById("root")     // where we want to render the element
                );
        // createElement take in three arguments
            // 1) the name of the tag that we want to create
            // 2) any properties that we want this element to have
            // 3) any children we want the element to have (could be another tag or simply text to display)
            // Example of a createElement method
                React.createElement('h1', null, 'Hello!')
        
        // To pass properties to this element, create an object as follows:
            { style: { color: "red" }}
            // Example of a createElement method with a styld property added:
                React.createElement('h1', { style: { color: "red" }}, 'Hello!')

    // Rendering multiple React elements
        // The third argument of the createElement method can also recieve a new createElement method, thereby placing a new element inside of the first
            // The following will render our prior example of an <h1> element inside of a <div> element
                ReactDOM.render(
                    React.createElement('div', { style: { backgroundColor: 'blue' } }, 
                        React.createElement('h1', { style: { color: 'red' } }, 'Hi!')
                    ),
                    document.getElementById('root')
                );

    // Introducing JSX
        // JSX (or JavaScript XML) is a language that allows you to write tags directly into the JavaScript
        // What if you wanted to create an <ul> with many <li>? That will take a lot of React.createElement calls
            ReactDOM.render(
                React.createElement(
                    "ul",
                    { style: { color: "blue" } },
                    React.createElement("li", null, "Hot Dogs"),
                    React.createElement("li", null, "Hamburgers"),
                    React.createElement("li", null, "Pizza"),
                    React.createElement("li", null, "Sushi"),
                ),
                document.getElementById('root')
            )
        // The same code can be written using JSX:
            ReactDOM.render(
                <ul>
                    <li>Hot Dog</li>
                    <li>Hamburgers</li>
                    <li>Pizza</li>
                    <li>Sushi</li>
                </ul>,
                document.getElementById('root')
            );
        // This works because Create React App has Babel running behind the scenes
            // It allows you to write code that might not work yet in a broswer (like new features or JSX). This will compile you code to a format that is compatible with the browser. Babel will take all of those tags and turn them into createElement calls.

    // Understanding JSX Features
        // You can use variables to render dynamcly with JSX
            let city = "Madrid"
            ReactDOM.render(
                <h1>Hello from {city}!</h1>,            // Hello from Madrid!
                document.getElementById('root')
            )
        // The same thing can be done with an object
            let city = {
                name: "Madrid",
                country: "Spain"
            }
            ReactDOM.render(
                <h1>{city.name} is in {city.country}</h1>,            // Madrid is in Spain
                document.getElementById('root')
            )
        // You can also add attributes directly to your tags
            ReactDOM.render(
                <h1 id="heading" className="city-name">{city.name} is in {city.country}</h1>,            // Madrid is in Spain
                document.getElementById('root')
            )
            // NOTE that instead of 'class' we use 'className'

// Create Components
    // Creating a React component
        // A component is a collection of React elements that are used to create user interfaces. A component lets you put together a user interface with independent reusable pieces. It is a function nthat returns some UI.
            function Hello() {
                return <h1>Welcome to React!</h1>
            }
        // You can render more than one element on multiple lines by using () in the return statement
            function Hello() {
                return (
                    <h1>Welcome to React!</h1>
                    <p>Let's build something cool.</p>
                )
            }
        // To render the element, we will render the function as a JSX tag. These tags are usually self-closing.
            ReactDOM.render(
                <Hello />,
                documennt.getElementById('root')
            );
        // ALL REACT COMPONENT NAMES MUST BE CAPITALIZED or they will throw a warning
    
    // Understanding properties
        // A React object that contains properties about the component. These can be used to display dynamic data about the component.
        // Props are passed into the function as an argument
            function Hello(props) {
                return (
                    <div>
                        <h1>Welcome to React!</h1>
                        <p>Let's build something cool.</p>
                    </div>
                );
            }
        // We can add on to this object by adding an attribute to the <Hello /> tag. 
            ReactDOM.render(
                <Hello library="React" />,
                document.getElementById('root')
            );
        // This attribute will be passed to the Hello function as the argument 'props' -> Hello(props). We can then use this property by referencing {props.library} within the JSX
            <h1>Welcome to {props.library}!</h1>
        // You can add more thann one property to the function by adding more than one attribut to the function call
            ReactDOM.render(
                <Hello library="React" message="Have fun!" />,
                document.getElementById('root') 
            );

            function Hello(props) {
                return (
                    <div>
                        <h1>Welcome to {props.library}!</h1>
                        <p>{props.message}</p>
                    </div>
                )
            }
        // The above is how you pass a string within JSX. If you want to pass a number, you place it inside of curly braces {}
            <Hello 
                library="React"
                message="Have fun!"
                number={3}
            />
            // TO SEE THESE PROPS IN THE CONSOLE, USE console.log(props)
        // You can also pass functions to these JSX templates
            // Example: you want to pass the number of props being used in your React component
                function Hello(props) {
                    console.log(Object.keys(props));        // will show us the keys being used in the props object
                    return (
                        <div>
                            <h1>Welcome to {props.library}!</h1>
                            <p>{props.message}</p>
                            <p>
                                // this will always display the number of keys used in the component object
                                {Object.keys(props).length} Props Total
                            </p>
                        </div>
                    )
                }

                ReactDOM.render(
                    <Hello
                        library="React"
                        message="Have fun!"
                        number={3}
                    />,
                    document.getElementById('root') 
                );

    // Composing Components
        // The real power of react comes when putting components together to create a larger user interface
        // The example below uses the Lake component inside of the App component, makign the App component responsible for returning the Lake
            function Lake(props) {
                return (
                    <h1>{props.name}</h1>
                )
            }
            
            function App() {
                return (
                    <div>
                        <Lake name="Lake Tahoe" />
                        <Lake name="Angora lake" />
                        <Lake name="Shirley Lake" />
                    </div>
                )
            }

            ReactDOM.render (
                <App />,
                document.getElementById('root')
            );
        // This allows us to keep resuing the Lake component and simply substitute the the name property withint the App component
        // Finally, we can do some desctructuring by replacing (props) with the ({name}) property and display it within each <h1>
            function Lake({ name }) {
                return <h1>{name}</h1>
            }

    // Rendering Lists
        // 