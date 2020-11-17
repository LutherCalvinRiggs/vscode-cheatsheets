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
            // If create-react-app is installed globally, you can simply run the `create-react-app <project-name>`
            create-react-app <project-name>

        // Change directories into the new project and start the project
            cd <project-name>
            npm start 

    // Touring create-react-app
        // What's included
            // package.json file with reloaded dependencies
                // react
                // react-dom
                // react-scripts
            // src folder with files that will be used to write the application
                // where we create components and make changes
            // public folder that will hold the built files that will be used for production
        // You can also use codesandbox.com to set up a react project

    // Setting up React Developer Tools in Chrome
        // In goodgle, search for 'chome web store react developer tools'
        // Go to the extensions page and click the ADD TO CHROME button, followed by the ADD EXTENSION button in the pop-up window 
        // Once added, you can open the console in the Dev Tools, click on nthe >> icon and select the Components tab. This will show you all of the components that are on this page
        // There is also a little red icon located on the bookmarks bar that lets you know that react is being run on the page

// React Elements
    // Creating a React Element
        // We first need to import the React library
            import React from 'react'
        // Next we import ReactDOM, which will allow us to render elements to the DOM
            import ReactDOM, { render } from 'react-dom'
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
        // React elements and properties can also be assigned to variables
        var style = {
            backgroundColor: 'orange',
            color: 'white',
            fontFamily: 'Arial'
        }
        const title = React.createElement(
            'h1',
            {id: 'title', className: 'header', style: style},
            'Hello World'
        )
        ReactDOM.render(
            title,
            document.getElementById('root')
        )

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
        // JSX can aslo pass inline CSS styles
            var style = {
                backgroundColor: 'orange',
                color: 'white',
                fontFamily: 'Arial'
            }
            ReactDOM.render(
                <div style={style}>
                    <h1 id="heading">Hello World!</h1>
                    <p>We're glad you're here!</p>
                </div>,
                document.getElementById('root')
            )

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

// Creating Components Using ES6 Class Syntax
    // Creating a React Component with Class Syntax
        // THIS IS OLDER SYNTAX
        // First we create a component using React's class syntax and then use an ES6 class to define this component
            // The most important method of a class component is the render method. EVERY class component has a render method
            class Message extends React.Component {
                render() {
                    return (
                        <div>
                            <h1>Hello Everyone</h1>
                        </div>
                    )
                }
            }

            ReactDOM.render(
                <Message />,
                document.getElementById('root')
            )

    // Using props with Class Syntax
        // The props object can contain as many properties as you like, and they will be referenced via {this.props.<prop-name>}
        // You can console.log from within the component
        // You can also add as multiple key/value pairs to the props object
        // When passing a style property, you will need two sets of {{ }}. One for the JSX expression value pass and one for the style object.
        // When passing a numerical value, it must be done using a JSX expression {}
            class Message extends React.Component {
                render() {
                    console.log(this.props)
                    return (
                        <div>
                            <h1 style={{color: this.props.color}}>
                                {this.props.msg}
                            </h1>
                            <p>I'll check back in {this.props.minutes} minutes.</p>
                        </div>
                    )
                }
            }

            ReactDOM.render(
                <Message color="blue" msg="How are you?" minutes={5}/>,
                document.getElementById('root')
            )
        
    // Adding Custom Methods using ES6 Class Syntax
        class SkiDayCounter extends Component {
            getPercent = decimal => {
                return decimal * 100 + '%'
            }
            calcGoalProgress = (total, goal) => {
                return this.getPercent(total/goal)
            }
            render() {
                // the const below destructures the props object
                const {total, powder, backcountry, goal} = this.props
                return (
                    <section>
                        <div>
                            <p>Total Days: {total}</p>
                        </div>
                        <div>
                            <p>Powder Days: {powder}</p>
                        </div>
                        <div>
                            <p>Backcountry Days: {backcountry}</p>
                        </div>
                        <div>
                            <p>Goal Progress {this.calcGoalProgress(total,goal)}</p>
                        </div>
                    </section>
                )
            }
        }

// Create Components as a Function
    // Creating a React component as a Function
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
            // FUNCTION COMPONENTS DON'T HAVE ACCESS TO `THIS`
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
    
    // Using Custom Functions within the Function Component
        // You CANNOT add functions inside of a function component, but you can use other functions within a function component
            const getPercent = decimal => {
                return decimal * 100 + '%'
            }

            const calcGoalProgress = (total, goal) => {
                return getPercent(total/goal)
            }

            const SkiDayCounter = ({total, powder, backcountry, goal}) => {
                return (
                    <section>
                        <div>
                            <p>Total Days: {total}</p>
                        </div>
                        <div>
                            <p>Powder Days: {powder}</p>
                        </div>
                        <div>
                            <p>Backcountry Days: {backcountry}</p>
                        </div>
                        <div>
                            <p>Goal Progress {calcGoalProgress(total,goal)}</p>
                        </div>
                    </section>
                )
            }

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
        // You cann think of the React UI as being a reflection nof the data that we want to display.
        // Using the Lake example from above, we can create a <ul> element to be a placeholder for our eventual Lake list.
            // First we create an array of lakes to be displayed. 
            // Then we will then pass that array to our App component. 
            // Finally, we will replace the <div> with a <ul>, pass the lakeList array via (props) and then map over them
            const lakeList = [
                "Echo Lake",
                "Maud Lake",
                "Cascade Lake"
            ]

            function App(props) {
                return (
                    <ul>
                        {props.lakes.map(lakes => (
                            <li>{lake}</li>
                        ))}
                    </ul>
                )
            }
            
            ReactDOM.render(
                <App lakes={lakeList} />,
                document.getElementById('root')
            )
            // To destructure this, you cann replace props with lakes 
                function App({ lakes }) {
                    return (
                        {lakes.map(lake => (
                            <li>{lake}</li>
                        ))}
                    )
                }
            // This allows you to build a dynnamic list by only changing the values of the array
        
    // Rendering Lists of Objects
        // To render a list from an array of object, the approach is pretty similar
            //First, we need to change our App to use a <div> and them map over our lakes
            // Instead of use a <ul> we will use a <div> with an <h2> inside of it that will display the lake name, and a <p> that will display the trailhead
            const lakeList = [
                { id: "1", name: "Echo", trailhead: "Echo" },
                { id: "2", name: "Maud", trailhead: "Wrights" },
                { id: "3", name: "Velma", trailhead: "Bayview" }
            ]

            function App(props) {
                return (
                    <div>
                        {lakes.map(lake => (
                            <div>
                                <h2>{lake.name}</h2>
                                <p>Accessed by: {lake.trailhead}</p>
                            </div>
                        ))}
                    </div>
                )
            }
            
            ReactDOM.render(
                <App lakes={lakeList} />,
                document.getElementById('root')
            )

    // Adding Keys
        // After coding the above example using objects, if you look in the console, you will see a warning regarding 'keys' that reads "Each child in a list should have a unique 'key' property."
            // If you ever come across a warning like this, there is Create React App documentation that will tell you how to fix this.
        // To fix this, we need to add a key (an identifier for a dynamically created element) to help react keep track of which items have been changed, added or removed.
        // To rememdy this, we add a key to the <div> element and use the .id from the object
            function App(props) {
                return (
                    <div key={lake.id}>
                        {lakes.map(lake => (
                            <div>
                                <h2>{lake.name}</h2>
                                <p>Accessed by: {lake.trailhead}</p>
                            </div>
                        ))}
                    </div>
                )
            }
            // THIS IS THE BEST OPTION
        // Another way is to add a 'key' to a number list contained within an array by  passinng that to the App within the .render() call and then turning it into a string
            const list = [1,2,3,4,5]
            
            function App({ items }) {
                return (
                    <ul>
                        {items.map(item => (
                            <li key={item.toString()}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )
            }
            
            ReactDOM.render(
                <App items={list} />,
                document.getElementById('root')
            )

        // You could also assign an iterator to the function like below
            function App({ items, i }) {
                return (
                    <ul>
                        {items.map(item => (
                            <li key={i}>
                                {item}
                            </li>
                        ))}
                    </ul>
                )
            }
        // THE BEST OPTION IS TO USE A UNIQUE VALUE IN THE OBJECT OR A STRING TO KEEP TRACK OF THE ELEMENTS

    // Conditional Rendering with Functions
        // Sometimes you want to conditional render components based on the values of properties. Such as, rendering a component only when a user is logged in, or if it's a certain season.
        // The following example will render different components based on the season
            function Lake() {
                return (
                    <div>
                        <h1> Visit Jenny Lake!</h1>
                    </div>
                )
            }

            function SkiResort() {
                return (
                    <div>
                        <h1>Visit Jackson Hole Mountain Resort!</h1>
                    </div>
                )
            }

            function App(props) {
                if (props.season === "summer") {
                    return <Lake />
                } else if (props.season === "winter") {
                    return <SkiResort />
                }
            }
        
            ReactDOM.render(
                <App season="winter"/>,
                document.getElementById('root')
            )
        // To make the App more dynamic, we can pass the Lake and SkiResort name in via (props)
            function Lake({ name }) {
                return (
                    <div>
                        <h1> Visit {name}!</h1>
                    </div>
                )
            }

            function SkiResort({ name }) {
                return (
                    <div>
                        <h1>Visit {name} Mountain Resort!</h1>
                    </div>
                )
            }

            function App(props) {
                if (props.season === "summer") {
                    return <Lake name="Jenny Lake"/>
                } else if (props.season === "winter") {
                    return <SkiResort name="Jackson Hole"/>
                }
            }
        
            ReactDOM.render(
                <App season="winter"/>,
                document.getElementById('root')
            )
        // This can be taken one step further by using a ternary statement to display these components
            function Lake({ name }) {
                return (
                    <div>
                        <h1> Visit {name}!</h1>
                    </div>
                )
            }

            function SkiResort({ name }) {
                return (
                    <div>
                        <h1>Visit {name} Mountain Resort!</h1>
                    </div>
                )
            }

            function App(props) {
                return (
                    <div>
                        {props.season === "summer" ? (
                            <Lake name="Jenny Lake"/>
                        ) : props.season === "winter" ? (
                            <SkiResort name="Jackson Hole"/>
                        ) : (
                            <h1>Come back in the summer or winter!</h1>
                        )}
                    </div>
                )
            }
        
            ReactDOM.render(
                <App season="winter"/>,
                document.getElementById('root')
            )

    // Conditional Rending with Class Syntax
        // Below is how conditional rendering of components will appear with Class Syntax
            // There are two components, one for Hiring and one for NotHiring
            // We will add a 'hiring' variable to 'state'
            // Within the Library component we will add a ternary operator that will display either the Hiring or NotHiring component based on the state value
            const Hiring = () =>
                <div>
                    <p>The library is hiring. Go to www.library.com/jobs for more.</p>
                </div>
            
            const NotHiring = () =>
                <div>
                    <p>The library is not hiring. Check back later for more info.</p>
                </div>
        
            class Library extends React.Component {
                state = { 
                    open: true,
                    freeBookmark: true,
                    hiring: true
                }
                
                toggleOpenClosed = () => {
                    this.setState(prevState => ({
                        open: !prevState.open 
                    }))
                }

                render() {
                    const { books } = this.props
                    return (
                        <div>
                            {this.state.hiring ? <Hiring /> : <NotHiring />}
                            <h1>The library is {this.state.open ? "open" : "closed"}</h1>
                            <button onClick={this.toggleOpenClosed}>Change</button>
                            {books.map(
                                (books, i) =>
                                    <Book 
                                        key={i}
                                        title={books.title}
                                        author={books.author}
                                        pagers={books.pages}
                                        freeBookmark={this.state.freeBookmark}/>
                            )}
                        </div>
                    )
                }
            }

    // React Fragments
        // What if we wanted our App to render the <Lake /> and the <SkiResort /> components at the same time
            function Lake() {
                return (
                    <h1>Lake!</h1>
                )
            }

            function SkiResort() {
                return (
                    <h1>Ski Resort!</h1>
                )
            }

            function App(props) {
                return (
                    <Lake />
                    <SkiResort />
                )
            }
        
            ReactDOM.render(
                <App />,
                document.getElementById('root')
            )
        // The above code will render a Parsing Error saying 'Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?'
            // One way to deal with this is to wrap the sibling components in a <div>
                function App(props) {
                    return (
                        <div>
                            <Lake />
                            <SkiResort />
                        </div>
                    )
                }
            // But this will result in a lot of <div> elements cluttering the App
            // <React.fragment> is inteded to be used to deal with this issue of adjacent components, BUT a fragment will not wrap the components in any sort of extra tag
                function App(props) {
                    return (
                        <React.Fragment>
                            <Lake />
                            <SkiResort />
                        </React.Fragment>
                    )
                }
            // You can also use the <React.Fragment> shorthand which is simply an empty open/close tag -> <>...</>
                function App(props) {
                    return (
                        <>
                            <Lake />
                            <SkiResort />
                        </>
                    )
                }
            // Lastly, you can also render both of the components at the top levels (our root element)
                ReactDOM.render(
                    <>
                        <Lake />
                        <SkiResort />
                    </>,
                    document.getElementById('root')
                )

// React State with Hooks using Functions
    // Understanding array desctructuring
        // In object destructuring we use the props object to reference the keys from an object instead of having to use props and then dot notation each time.
            function App({ name }) {
                return (
                    <>
                        <h1>{name}</h1>
                        <Lake />
                        <SkiResort />
                    </>
                )
            }
            
            ReactDOM.render(
                <App name="React" />,
                document.getElementById('root')
            )
        // With array destructuring, we can't access the values by key. Instead, we access them by index or position.
            const snack = [
                "popcorn",
                "pretzels",
                "pineapple"
            ]

            console.log(snacks[0]) // popcorn
            console.log(snacks[1]) // pretzels
            console.log(snacks[2]) // pineapple

        // To do the same thing with array desctructuring:
            // First, set up the array brackets and then give the items in the array a names
                const [first, second, thrid] = [
                    "popcorn",
                    "pretzels",
                    "pineapple"
                ]
            // Now if you console.log(first) you will see the first item in the array
                console.log(first) // popcorn
                console.log(second) // pretzels
                console.log(thrid) // pineapple
            // This is a way to access the values by assigning names, instead of via their index
                // The variable names can be whatever you choose
            // If you only want to reach a specific value in the area, you can use commas with no variable names except the one you are trying to access
                const [, , third] = [
                    "popcorn",
                    "pretzels",
                    "pineapple"
                ]
                console.log(third)
        // It is important to know array destructuring as it is used when handling state

    // Using { useState }
        // The state object is where you store property values that belong to the component. When the state object changes (this could be a change in properties or in state), the component re-renders.
        
        // The following example will display a status. Status is going to be a state value that reflects the current status for this application.
            // First, we need to include the { useState } hook from the React library -> a hook is a function that allows you to add functionality to a component
            // Then, will create an array constant and use some array destructuring for the status value
                // What we will pass to the useState function is the initial status of the application. This way when the application loads, we want to have the status be "Open".
                // useState returns a pair: 
                    // `status` is the state value that we've given a name - array destructuring allows us to give this value a name
                    // `setStatus` is a function to update the state
            // Next, we add a button that will change the status every time that it is clicked, and in the "onclick" we will call the `setStatus` function annd pass it a value that we want to change it to.
                // Now everytime we click closed, it will change the status for the app
            // We will then add another button so that we can set the status to "Open", as well as a third status called "break" that says we'll be "back in 5"
                import React, { useState } from "react";
                import ReactDOM from "react-dom";
                import "./index.css";

                function App() {
                    const [status, setStatus] = useState("Open")
                    return (
                        <div>
                            <h1>Status: {status}</h1>
                            <button onclick={() => setStatus("Open")}>Open</button>
                            <button onclick={() => setStatus("Back in 5")}>Break</button>
                            <button onclick={() => setStatus("Closed")}>Closed</button>
                        </div>
                    )
                }

                ReactDOM.render(
                    <App />,
                    document.getElementById('root')
                )

    // Using Multiple State Variables
        // It is also possible to have multiple state values within the same component
        // First, we create a new destrucutred array constant for the new state value, and declare the state variable and the hook function and the initial state
        // Then we create a new <div> to display the manger on duty. 
            // Remember to not try to render adjacent JSX elements, so we need to wrap the two <div> elements in a JSX fragment <>...</>
        // Next, we use the setManager function to change the manager state by adding buttons with onclicks that call setManager
        // Finally, we'll add one more state value of year with a setYear hook and an initial state of 2050, and the setYear function will add 1 (+1) to the year everytime the button is clicked
            function App() {
                const [year, setYear] = useState(2050)
                const [manager, setManager] = useState('Alex')
                const [status, setStatus] = useState("Open")
                return (
                    <>
                        <div>
                            <h1>{year}</h1>
                            <button onclick={() => setYear(year +1)}>New Year!</button>
                        </div>
                        <div>
                            <h1>Manager on Duty: {manager}</h1>
                            <button onclick={() => setManager("Rachel")}>New Manager</button>
                        </div>
                        <div>
                            <h1>Status: {status}</h1>
                            <button onclick={() => setStatus("Open")}>Open</button>
                            <button onclick={() => setStatus("Back in 5")}>Break</button>
                            <button onclick={() => setStatus("Closed")}>Closed</button>
                        </div>
                    </>
                )
            }

            ReactDOM.render(
                <App />,
                document.getElementById('root')
            )

    // Working with { useEffect }
        // Let's change our App component and instead create a Checkbox component 
            // First, we render a Checkbox componenet and create the Checkbox component, which will contain a checkbox
            // To incorporate state we will use 'checked' as the state variable, setChecked as the function and then set the initial state to false. Then we will use the state value as the value of the input
            // Next, we will add a JSX expression to display some test regarding whether or not the box is checked
            // Then, we add the setChecked function to ann onChange inside of the input. The setChecked function will take in a toggle that will change the checked value to its opposite
            // Let's say we wanted to look at the value of checked by using an alert. We would place an alert right before the return and it will appear before the component is rendered on each change
                // This functionality has nothing to do with the component itself or with the DOM
                // Typically, we would use another hook from the React library called { useEffect } 
                    // useEffect takes in a function, the function is going to return the alert, and useEffect is going to allow us to perform side effects inside of our function components
                    // EFFECTS are the things that we want a component to do, other than return UI (an alert, console.log, any sort of interaction with the browser or a native API)
                import React, { useState, useEffect } from 'react'
                import ReactDOM from 'react-dom'
                import './index.css'

                function Checkbox() {
                    const [checked, setChecked] = useChecked(false)
                    useEffect(() => {
                        alert(`checked: ${checked.toString()}`)
                    })
                    return (
                        <>
                            <input 
                                type="checkbox" 
                                value={checked} 
                                onChange={() => 
                                    setChecked(checked => !checked)
                                }
                            />
                            {checked ? 'checked' : 'not checked'}
                        </>
                    )
                }

                ReactDOM.render(
                    <Checkbox />,
                    document.getElementById('root')
                )

// React State with Hooks using Class Syntax 
    // One way to add local state to a component that uses React Class syntax is by using the constructor method
        // The constructor will take in (props)
        // We will use the super() method to create a new instance of the Class
        // Then we will add a state value -> an object with several different keys that are similar to props, but it will also have information about whether the library is open
            // The value of the state can be represented in the component using this.state.open
        // Above the library in the <div> we will add a <h1> to display whether or not the library is open. 
            // This <h1> will contain a ternary operator to test whether or not the library state is set to open and then will return "open" or "closed"
    let bookList = [
        {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
        {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
        {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
        {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 384},
    ]

    const Book = ({title, author, pages}) => {
        return (
            <section>
                <h2>{title}</h2>
                <p>by: {author}</p>
                <p>Pages: {pages} pages</p>
            </section>
        )
    }

    class Library extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                open: true
            }
        }
        render() {
            const { books } = this.props // ES6 destructuring
            return (
                <div>
                    <h1>The library is {this.state.open ? "open" : "closed"}</h1>
                    {books.map(
                        (books, i) =>
                            <Book 
                                key={i}
                                title={books.title}
                                author={books.author}
                                pagers={books.pages}/>
                    )}
                </div>
            )
        }
    }

    // Using setState within the Class Syntax
        // To change the state of the component, we will add a method to the class that will toggle between the 'open' and 'closed' state
            // The function will take in an object that resets the state
            // It will have a key called "open" -> to match the state variable used in the constructor 
            // The function will then change the boolean value to the opposite of its current setting
        // Whenever we use a constructor metthod, we need to bind 'this' -> doing this will make 'this' accessible within the context of the custom method
        // Now, we can trigger the function using a <button>
            // The button will be placed inside of the <div>
            // We'll give the button an 'onClick' handler to trigger the function
        class Library extends React.Component {
            constructor(props) {
                super(props)
                this.state = {
                    open: true
                }
                this.toggleOpenClosed = this.toggleOpenClosed.bing(this)
            }
            toggleOpenClosed() {
                this.setState({
                    open: !this.state.open 
                })
            }
            render() {
                const { books } = this.props // ES6 destructuring
                return (
                    <div>
                        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
                        <button onClick={this.toggleOpenClosed}>Change</button>
                        {books.map(
                            (books, i) =>
                                <Book 
                                    key={i}
                                    title={books.title}
                                    author={books.author}
                                    pagers={books.pages}/>
                        )}
                    </div>
                )
            }
        }

        // setState is asynchronous, so if you're relying on a previous state to set a new value, you can use a callback function inside of setState 
        // If you're working with other people's code, you're going to see a lot of callback functions instead of objects inside of the setState function
        // To refactor the setState object used above:
            // First add a variable 'prevState' to return the previous state's object and wrap the object in another set of enclosing parenthesis
            // Next we replace 'this.state' with 'prevState'
            toggleOpenClosed() {
                this.setState(prevState => ({
                    open: !prevState.open 
                }))
            }

        // One final step to refactor our component using slightly nicer syntax
            // We can clean up the state object within the constructor by adding a state variable above the constructor -> this will allow us to get rid of the entire constructor
            // We then need to bind 'this' for toggleOpenClose() by using an arrow function 
                // ARROW FUNCTIONS AUTOMATICALLY BIND THIS WITHIN THE CONEXT OF THE FUNCTION
            class Library extends React.Component {
                state = { open: false }
                
                toggleOpenClosed = () => {
                    this.setState(prevState => ({
                        open: !prevState.open 
                    }))
                }

                render() {
                    const { books } = this.props // ES6 destructuring
                    return (
                        <div>
                            <h1>The library is {this.state.open ? "open" : "closed"}</h1>
                            <button onClick={this.toggleOpenClosed}>Change</button>
                            {books.map(
                                (books, i) =>
                                    <Book 
                                        key={i}
                                        title={books.title}
                                        author={books.author}
                                        pagers={books.pages}/>
                            )}
                        </div>
                    )
                }
            }
    
    // Passing State as Props
        // When working with a React application, its a good rule of thumb to keep state in the root of the tree. In other words, your root component, the Library component in the following example, should hold all of the state variables and pass down that information to the children.
        // The reason being that it is really easy to lose track of local state and end up with incorrect variables.

        // To pass a state variable to a child (in this case from Library to Book), we can simply add it by adding a new property to the child and giving it the value {this.state.freeBookmark}
        // To access this information within the context of the book component, we add another value to Book and access the state value via (props)
            let bookList = [
                {"title": "Hunger", "author": "Roxane Gay", "pages": 320},
                {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
                {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
                {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 384},
            ]
        
            const Book = ({title, author, pages, freeBookmark}) => {
                return (
                    <section>
                        <h2>{title}</h2>
                        <p>by: {author}</p>
                        <p>Pages: {pages} pages</p>
                        <p>Free Bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
                    </section>
                )
            }

            class Library extends React.Component {
                state = { 
                    open: true,
                    freeBookmark: true
                }
                
                toggleOpenClosed = () => {
                    this.setState(prevState => ({
                        open: !prevState.open 
                    }))
                }

                render() {
                    const { books } = this.props // ES6 destructuring
                    return (
                        <div>
                            <h1>The library is {this.state.open ? "open" : "closed"}</h1>
                            <button onClick={this.toggleOpenClosed}>Change</button>
                            {books.map(
                                (books, i) =>
                                    <Book 
                                        key={i}
                                        title={books.title}
                                        author={books.author}
                                        pagers={books.pages}
                                        freeBookmark={this.state.freeBookmark}/>
                            )}
                        </div>
                    )
                }
            }

// React Enhancements and Features
    // Component Life Cycle
        // The React component lifecycle provides functionns that are invoked at specific times during the rendering lifecycle. 
            // COMPONENT LIFE CYCLE METHODS ARE ONLY AVAILABLE WHEN USING CLASS SYNTAX
        // Render - the only required method of the component lifecycle. It is called whenever the props or the state of the app changes
        // Constructor - it can be used to initialize local state instead of initializing state as a static property. 
            // The constructor is called before the component is mounted (added to the DOM)
            // You can bind event handler methods to the component class using the constructor 
        // componentDidMount() - can be used to render a console.log as soon as the component is mounted. This method is placed within the scope of the Class 
            // If you refresh, you will get the DidMount message because React will remount the component to the DOM.
            class Library extends React.Component {
                // state
                componentDidMount() {
                    console.log("The component is mounted")
                }
                // render()
            }
        // componentDidUpdate() - can be used to render a console.log whenever the compoenent is updated in the DOM. This method is placed within the scope of the Class
            // If you click a button and change something, you will get the DidUpdate message because React will updating a component, variable or state.
            class Library extends React.Component {
                // state
                componentDidUpdate() {
                    console.log("The component just updated")
                }
                // render()
            }
        // See the website http://www.projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ for a flow diagram of these methods and more

    // Updating with the useEffect dependency array
        // useEffect is designed to work in conjunction with other stateful hooks like useState and useReducer
        // React will re-render the component tree whenever state is changed, and useEffect will be called AFTER these renders 

        // First, we create an app component that returns a text <input> with a <label> around it, a line break <br> to give some space, and a second text <input> wrapped in a <label>
        // Next, set up a state variables for the values of the inputs and set the initial states to an empty string, ""
        // Then, tie these state values to the <input> elements and setup the onChange to collect the value of the <input>
        // We will the setup useEffect to console.log each of the <input> fields
            // The console.log will update in the console each time a letter is added or subtracted from the input field (each time the state is changed)
            
            function App() {
                const [val1, setVal1] = useState("")
                const [val2, setVal2] = useState("")

                useEffect(() => {
                    console.log(`field 1: ${val1}`)
                })
                useEffect(() => {
                    console.log(`field 2: ${val2}`)
                })

                return (
                    <>
                        <label>
                            Favorite Phrase:
                            <input 
                                value={val1}
                                onChange={e => setVal1(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Second Favorite Phrase:
                            <input 
                                value={val2}
                                onChange={e => setVal2(e.target.value)}
                            />
                        </label>
                    </>
                )
            }
        // Any time the state is changed, both of the useEffects will be called. To remedy this issue, we will use a dependency array.
            // A dependenncy array is the second argument that is sent to useEffect. 
            // In the array we will use the state variable that we want to listen for changes in. You can put more than one state variable into the array
            // This allows for smart rendering so that we don't trigger unneccesary re-renders
            function App() {
                const [val1, setVal1] = useState("")
                const [val2, setVal2] = useState("")

                useEffect(() => {
                    console.log(`field 1: ${val1}`)
                }, [val1])
                useEffect(() => {
                    console.log(`field 2: ${val2}`)
                }, [val2])

                return (
                    <>
                        <label>
                            Favorite Phrase:
                            <input 
                                value={val1}
                                onChange={e => setVal1(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            Second Favorite Phrase:
                            <input 
                                value={val2}
                                onChange={e => setVal2(e.target.value)}
                            />
                        </label>
                    </>
                )
            }

    // Fetching data with useEffect and Functions
        // The following will fetch some data from github.com using useEffect
            // To access the github API, go to the following URL -> https://api.github.com/users/<any-github-username>. This will take you to some JSON data that can be incorporated into an App to build a gitHub user component
        // To do this we will use the App component to render another component called GitHubUser. The GitHubUser will fetch some data from the API and then display it via the App component
            // First we use the useState hook to set up a state variable called `data`, a function to change that data called `setData` 
            // Next we add a useEffect to fetch from the URL, passing the url using the login variable
            // After that we chain on the .then() function to have it take the response and change it into JSON
            // Next we use .then() function to call the setData funnction with that new value of data
            
            // Now, if we have some data, we're going to return a <div> that contains some stringified JSON data
            
            // Lastly, our function needs to return something so if we don't have a user we're simply going to return 'null'
                function GitHubUser({ login }) {
                    const [data, setData] = useState(null)
                    useEffect(() => {
                        fetch(`https://api.github.com/users/${login}`)
                        .then(res => res.json())
                        .then(setData)
                        .catch(console.error)
                    }, [])

                    if(data) {
                        return (
                            // <div>{JSON.stringify(data)}</div>
                                // Once the fetch works, use the following to display the user login and avatar instead of all of the JSON data
                            <div>
                                <h1>{data.login}</h1>
                                <img 
                                    src={data.avatar_url} 
                                    width={100} 
                                />
                            </div>
                        )
                    }

                    return null;
                }

                function App() {
                    return <GitHubUser login='LutherCalvinRiggs' />
                }

                ReactDOM.render(
                    <App />,
                    document.getElementById('root')
                )

    // Fetching Data and Displaying Data Using the Component Lifecycle and Class Syntax
        // First we need to add a couple of keys to the state object
            // A data array that will be empty as our initial state
            // A state of loading set to false
        // Next we adjust our componentDidMount() function to handle the state of the loading of data
            // We set the state of loading to 'true' using setState
            // Then we fetch data from a RestAPI by using fetch()
            // We'll then turn that data into a JSON file format using a then() function
            // Finally, we'll set the state of the data array using the data from the API endpoint and then set the state of loading to false
        // Now we will reference the data in our UI by making a few adjustments to the render method
            // We'll add a product block right underneath the hiring block
            // We add a ternary operator to check if 'loading' is true. If so we'll display some text, otherwise we'll display a <div>
                // This <div> will map() over the data array and return a new <div> for every product
            class Library extends React.Component {
                state = { 
                    open: true,
                    freeBookmark: true,
                    data: [],
                    loading: false
                }

                componentDidMount() {
                    this.setState({loading: true})
                    fetch('https:/hplussport.com/api/products/order/price/sort/asc/qty/1')
                        .then(data => data.json())
                        .then(data => this.setState({data, loading: false}))
                }
                
                toggleOpenClosed = () => {
                    this.setState(prevState => ({
                        open: !prevState.open 
                    }))
                }

                render() {
                    const { books } = this.props // ES6 destructuring
                    return (
                        <div>
                            {this.state.hiring ? <Hiring /> : <NotHirinng />}
                            {this.state.loading
                                ? "loading..."
                                : <div>
                                    {this.state.data.map(product => {
                                        return (
                                            <div>
                                                <h3>Library Product of the Week</h3>
                                                <h4>{product.name}</h4>
                                                <img src={product.image} height={100}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                            <h1>The library is {this.state.open ? "open" : "closed"}</h1>
                            <button onClick={this.toggleOpenClosed}>Change</button>
                            {books.map(
                                (books, i) =>
                                    <Book 
                                        key={i}
                                        title={books.title}
                                        author={books.author}
                                        pagers={books.pages}
                                        freeBookmark={this.state.freeBookmark}/>
                            )}
                        </div>
                    )
                }
            }

    // Using useReducer
        // A Reducer function takes in a current state and returns a new state (ie, if something is 'false', it should return the opposite 'true')
        // A reducer function will always produce the same results

        // Every time we call the setChecked function, we pass in a toggle (checked returns not checked, not checked returns checked). But instead, we could provide a function as a toggle.
            // First, we're going to create a toggle functionn, move the toggle logic into this new function, and then call the toggle() function onChange
                // We're going to refer to this toggle function as a Reducer
            // Next, in the component, we will:
                // Replace useState with useReducer
                // Get rid of setChecked
                // Replace it with 'toggle'
                // Pass the reducer the toggle logic as it's first argument
                // Pass 'false' as the second argument because it is the initial state
                import React, { useReducer } from 'react'
                import ReactDOM from 'react-dom'
                import './index.css'

                function Checkbox() {
                    const [checked, toggle] = useReducer(
                        checked => !checked, 
                        false
                    )

                    function toggle() {
                        setChecked()
                    }

                    return (
                        <>
                            <input 
                                type="checkbox" 
                                value={checked}
                                onChange={toggle}
                            />
                            {checked ? 'checked' : 'not checked'}
                        </>
                    )
                }

                ReactDOM.render(
                    <Checkbox />,
                    document.getElementById('root')
                )

    // Accessibility
        // Because web accessibility is such an important part of development, create-react-app has several web accessibility features baked in to warn us if we could do anything to improve web accessibility        
            // When rending <img> tags with React, you will get a warning in the Terminal if you don't include an alt prop or a meaningful string for decorative images 
            // These warning come from create-react-app because it includes a linting tool call jsx-a11y

    // Forms using Class Syntax
        // When rending a form, we're going to use state to help us parse some of the values coming from the DOM
            // First we'll add a state 'value' and set it to an empty string, ""
            // We'll then create a custom method called newColor() to set the state for 'value' by using setState
            // Next we add an onChange to the <input> to capture the new 'value'
            // Then we will add a submit <button> and include an onSubmit to the <form> tag with a new function 'submit'
                // The 'submit' function will log the value change to the console
            class FavoriteColorForm extends React.Component {
                state = { value: ""}

                newColor = e =>
                    this.setState({ value: e.target.value })

                submit = e => {
                    console.log(`New Color: ${this.state.value}`)
                    e.preventDefault() // will prevent a refesh behavior of the form in the browser
                }

                render() {
                    return (
                        <form onSubmit={this.submit}>
                            <label>Favorite Color:
                                <input 
                                    type="color" 
                                    onChange={this.newColor}/>
                            </label>
                            <button>Submit</button>
                        </form>
                    )
                }
            }

            render(
                <FavoriteColorForm />,
                document.getElementById('root')
            )

    // Default props with Class Syntax
        // Within a Class component, we can add a state property of defaultProps 
            // defaultProps will be called if there are ot other values avaiable to be called = no properties listed in the component that is listed in render()
            // This keeps the appication from breaking down if there are no properties to be displayed
        // We can also add defaultProps to our function that sets up our properties by declaring default values
            // This will use the default value in the component if no other value is supplied
            const Book = ({title="No Title", author="No Author", pages=0, freeBookmark}) => {
                return (
                    <section>
                        <h2>{title}</h2>
                        <p>by: {author}</p>
                        <p>Pages: {pages} pages</p>
                        <p>Free Bookmark Today: {freeBookmark ? "yes!" : "no!"}</p>
                    </section>
                )
            }

            class Library extends React.Component {
                static defaultProps = {
                    books: [
                        {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
                    ]
                }
                
                state = { 
                    open: true,
                    freeBookmark: true,
                    data: [],
                    loading: false
                }

                componentDidMount() {
                    this.setState({loading: true})
                    fetch('https:/hplussport.com/api/products/order/price/sort/asc/qty/1')
                        .then(data => data.json())
                        .then(data => this.setState({data, loading: false}))
                }
                
                toggleOpenClosed = () => {
                    this.setState(prevState => ({
                        open: !prevState.open 
                    }))
                }

                render() {
                    const { books } = this.props // ES6 destructuring
                    return (
                        <div>
                            {this.state.hiring ? <Hiring /> : <NotHirinng />}
                            {this.state.loading
                                ? "loading..."
                                : <div>
                                    {this.state.data.map(product => {
                                        return (
                                            <div>
                                                <h3>Library Product of the Week</h3>
                                                <h4>{product.name}</h4>
                                                <img src={product.image} height={100}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                            <h1>The library is {this.state.open ? "open" : "closed"}</h1>
                            <button onClick={this.toggleOpenClosed}>Change</button>
                            {books.map(
                                (books, i) =>
                                    <Book 
                                        key={i}
                                        title={books.title}
                                        author={books.author}
                                        pagers={books.pages}
                                        freeBookmark={this.state.freeBookmark}/>
                            )}
                        </div>
                    )
                }
            }

    // PropTypes
        // PropTypes are another property checking feature, like defaultProps
        
        // If we change the bookList array to an object with the key 'books' that contains an array of books, we get an error because the method .map() doesn't not work on an object 
            let bookList = {
                books: [{"title": "Hunger", "author": "Roxane Gay", "pages": 320},
                {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
                {"title": "White Teeth", "author": "Zadie Smith", "pages": 480},
                {"title": "Cat's Cradle", "author": "Kurt Vonnegut", "pages": 384}],
            }
        // To ensure that the proper type of variable is used in our app we can use PropTypes to ensure that all of the properties being supplied are of the correct type
            // To do this we have to import a seperate package called PropTypes
            import PropTypes from 'prop-types'
        // We then need to install this package from the command line by using
            $ npm install prop-types --save
        // To set up our propTypes, we'll scroll to the bottom of the app and set up our propTypes for our library 'books'
            // Now that the app is looking for an array, if any other property is supplied it will throw an error
            Library.propTypes = {
                books: PropTypes.array
            }
        // This can be set up for the Book as well
            Book.propTypes = {
                title: PropTypes.string,
                author: PropTypes.string,
                pages: PropTypes.number,
                freeBookmark: PropTypes.bool
            }
        
    // Modularizing Code
        // As the app files start to get larger we may want to modularize the application by breaking it down into a list of components each of which are contained in their own files
            // First we will create new files to contain our various components. The files should have the same name as the component with .js attached to the end -> <file-name>.js
            // Next you can cut the component from the main App and paste them into their vew files, thenn exporting them from that file using the following code
                export const ComponentName = () => {}
                // or
                export default `component-name` // placed at the bottom of the page
            // We also need to import React into each of the component.js files
                import React from 'react'
            // Then we need to import the component.js files into the main App
                import Component from './component.js'
                // Any component file that uses another component will also need to import the component that it uses

    // Deploying a React App
        // By running the script 'npm run build', the Create React App will create a production build for the project
            npm run build
            // It will take all of the files and then minify and bundle them into a package that can be served on a hosting server
            // As soon as you run the build script, you will see a 'build' folder be added to the project
        // The nest step is to serve it up to a static server
            // If you don't have the serve package installed you can install it globally with the following cli command
                $ npm install -g serve 
                // This will give you a static server for use on the computer 
            // With the static server installed, the following command will serve the build folder up on localHost:5000
                $ serve -s build 
            // This will allow us to see our app's production build running
        // Then go to netlify.com, drag the build folder to the netlify uploader and it will deploy the web app and provide you with a link to access the published app.



// Building a React Interface
    // Building a Basic App
        // Adding Your Own Modules
            // In the terminal, we need to issue an `npm install` command and then bring in the frameworks and utilities that we need.
                $ npm install --save <library-name>
                // or use the following shortcut syntax
                $npm i -s <library-name>
                    // -- save will save the installations as a dependecy of the project, will appear under the dependencies in the package.json 
                //  THE FOLLOWING EXAMPLES WILL BE USING bootstap, react-icons, lodash, jquery, popper.js, moment, and react-moment
    
        // Organizing Projects 
            // Within the 'src' folder, we can put in other folders to help organize all of our css or components. This can be done by simply creating 'css' or 'component' folders withing the 'src' folder. Then we can place all of our .css files into the 'css' folder and all of our .js files into the 'components' folder
                // LEAVE THE index.js FILE IN THE src FOLDER
            // Next we need to update the import file references
                // css -> './css/index.css'
                // App -> './components/App'
            // Then go to the App.js file and make sure that it has the proper references
                // css -> '../css/App.css'

    // Working with Components
        // Creating Subcomponents
            // You can create subcomponents by adding a new file to the components folder
            // Next we need to import the React library and the Component Class from the node_modules folder
                import React, { Component } from 'react';
            // Then we create the Class for this file and extend it from the Component class and renders a <div>
                class AddAppointments extends Component {
                    render() {
                        return (
                            <div>Add Appointments</div>
                        )
                    }
                }
            // We then export the component using a default export
                export default AddAppointmennts
            // Next we need to import the AddAppointmennts component to the App.js component 
                // Import the AddAppointments component with the following
                    import AddAppointmennts from './AddAppointments.js'
                // Then add the component to the App.js 
                    <AddAppointmennts />
            // THIS CAN BE DONE FOR ANY SUB-COMPONENTS IN THE PROJECT

        // State and Expression Basics
            // State refers to an object that has some data that defines what your application is doing. State correlates to the DOM and will automatically modify your components when that data, aka the state, changes.
            
            // We initialize state using the constructor method, within the App class 
                // The constructor is where you initialize things
                // When using the constructor, if you want to use the `this` keyword to access things from inside the Component (the parent components or other components that you are extending from), you need to use the super() method
            // Next we create and modify a special variable called `state`, an object that defines the kind of information that our object has. (These are sort of like Master or Global variables.)
                // The elements within state become available for use within our App component. The variable myName can be accessed within the component using the following syntax
                    {this.state.myName}
                    // The above is JSX syntax for calling variables
                // Now, if any part of the application changes/updates a state variable, any other part of the application that uses that state variable will also be updated. 
                class App extends Component {
                    constructor() {
                        super()
                        this.state = {
                            myName: "Luther" 
                        }
                    }

                    render() {
                        return (

                        )
                    }
                }

        // Using fetch in a lifecycle method
            // Fetch is used to get data from another source outside of the application
            // Lifecycles are a function in JS that allow you to do things at a certain point in your applications life (ie, as a component is created, before a component displays, etc) 

            // We are going to use fetch to get some data from the 'public' folder (the 'public' folder contains data that needs to be available to the application once it is processed).
                // Files that you actually need on the server go in the 'public' folder
                // We'll create a new file called data.json and paste our information here
            // We will then bring the data into the App using a lifecycle method -> componentDidMount()
                // In the App component, under the constructor, we will create the componentDidMount() method
                // This is where we would bring in any information from an external source, such as a `get` request to a server or an API or from a file
                // We will look for this information in the current directory using './'
                    // Though the data.json file is currently in another directory, as far as the App is concerned, once the application is assembled the data.json file will be in the same directory as the App component
                // The fetch API works with 'promises' so we can then use the .then() method to get the value of the response that we recieve from the server, or the file
                    // We can also specify that that response is going to come in as a .json formatted object ( => response.json())
                // We will then take the response.json object and use .then() to convert it into something else
                    // In our example we will process the result into a variable apts, and then use the .map() function to go through each of the results and return them (essentially pushing all of the results into the 'apts' variable)
                    // The reason we are putting the results into the 'apts' variable is because WE DON'T WANT TO MODIFY THE STATE DIRECTLY. You want to create the variable first, modify it, then push the finised variable into state using the method 'setState'
                    // NEVER MODIFY STATE DIRECTLY
                // We use the setState within the final .then() method
                    this.setState() 
                    // Within setState, we'll push our temporary variable 'apts' into a new variable called 'myAppointments'
                // We also need to add the myAppointments variable to our componennets state and initialize it as an empty array of objects
                    class App extends Component {    
                    
                        constructor() {
                            super()
                            this.state = {
                                myName: "Luther"
                                myAppointments: []
                            }
                        }

                        componentDidMount() {
                            fetch('./data.json')
                                .then(response => response.json())
                                .then(result => {
                                    const apts = result.map(item => {
                                        return item
                                    }) 
                                    this.setState({
                                        myAppointments: apts
                                    })
                                })
                        }

                        render() {
                            return (

                            )
                        }
                    }

        // Working with Complex Data
            // React will only output simple expressions. So in order to output items from complex data such as an array, we need to use the JavaScript map method to create a simple expression for each piece of data
                const listItems = this.state.myAppointments.map(item => {
                    <div>{item.petName}</div>
                })
            // Once we have a simple expression for each of the variables in the array, we can place that simple expression into our render() method
                render() {

                    const listItems = this.state.myAppointments.map(item => {
                        <div>{item.petName}</div>
                    })

                    return(
                        <main className="page bg-white" id="petratings">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 bg-white">
                                        <div className="container">
                                            {listItems}
                                            <AddAppointments />
                                            <SearchAppointments />
                                            <ListAppointments />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    )
				}
			// If we wanted to display the petName and the ownerName, you will need to wrap the two simple elements inside of a new <div> or a React fragment (JSX requires a simple container around everything that is a single tag)
				const listItems = this.state.myAppointments.map(item => {
					<>
						<div>{item.petName}</div>
						<div>{item.ownerName}</div>
					</>
				})
		
		// Passing Data Through props
			// The preferred way of developing in React is to create different components for the pieces of functionality that we want. Therefore, we will move the listItems that we displayed above, into the <ListAppointments /> component.
			// To do this, we use (props) - we can add a variable almost like an attribute in HTML and then pass the variable into the component.
				<ListAppointments appointments={this.state.myAppointments} /> 
			// Now we can talk the variable listItems with our .map() functionality, and move it into our <ListAppointments /> component.
				// Between the start of the render() statement and the return statement is where you place things that you want to have happen before the component gets displayed
				// Then we add the {listItems} variable to the component return statement
					class ListAppointments extends Component {
						render() {
							const listItems = this.state.myAppointments.map(item => {
								<>
									<div>{item.petName}</div>
									<div>{item.ownerName}</div>
								</>
							})

						return <div>{listItems}</div>
						}
					}
				// Now, instead of looking for the myAppointments array with this.state.myAppointments, we will look for it with this.props.appointments
					class ListAppointments extends Component {
						render() {
							const listItems = this.props.appointments.map(item => {
								<>
									<div>{item.petName}</div>
									<div>{item.ownerName}</div>
								</>
							})

						return <div>{listItems}</div>
						}
					}
			// PROPS ARE MEANT TO WORK ONE WAY
				// You can pass data down into the subcomponent, but it is not meant for you to modify once you're in the subcomponent 
				
		// Using a Render Template Expression
			// We can also write all of the code in the render() section into the return section
			// When doing this, you will need to use parentheses with your return statement (needed when returning more than a single link)
				return (
					<div className="appointment-list item-list mb-3">
						<div className="pet-item col media py-3">
							<div className="mr-3">
								<button className="pet-delete btn btn-sm btn-danger">X</button>
							</div>
				
							<div className="pet-info media-body">
								<div className="pet-head d-flex">
									<span className="pet-name">petName</span>
									<span className="apt-date ml-auto">aptDate</span>
								</div>
				
								<div className="owner-name">
									<span className="label-item">Owner: </span>
									<span>ownerName</span>
								</div>
								<div className="apt-notes">aptNotes</div>
							</div>
						</div>
					</div>
				)
			// Now, the code above doesn't contain the looping function using .map() so we need to write that in.
				// The <div className="appointment-list item-list mb-3"> is the main <div> and needs to get repeated is the part contained within that div. So we will write our looping functionality just within the main <div> and place within that <div> all of the JSX that we want repeated 
				return (
					<div className="appointment-list item-list mb-3">
		
						{this.props.appointments.map( item => (
							<div className="pet-item col media py-3">
								<div className="mr-3">
									<button className="pet-delete btn btn-sm btn-danger">X</button>
								</div>
					
								<div className="pet-info media-body">
									<div className="pet-head d-flex">
										<span className="pet-name">petName</span>
										<span className="apt-date ml-auto">aptDate</span>
									</div>
					
									<div className="owner-name">
										<span className="label-item">Owner: </span>
										<span>ownerName</span>
									</div>
									<div className="apt-notes">aptNotes</div>
								</div>
							</div>
						))}
						
					</div>
				)
			// Next, we need to add the expressions to the render template so that that proper information is passed to the interface
				return (
					<div className="appointment-list item-list mb-3">
		
						{this.props.appointments.map( item => (
							<div className="pet-item col media py-3">
								<div className="mr-3">
									<button className="pet-delete btn btn-sm btn-danger">X</button>
								</div>
					
								<div className="pet-info media-body">
									<div className="pet-head d-flex">
										<span className="pet-name">{item.petName}</span>
										<span className="apt-date ml-auto">{item.aptDate}</span>
									</div>
					
									<div className="owner-name">
										<span className="label-item">Owner: </span>
										<span>{item.ownerName}</span>
									</div>
									<div className="apt-notes">{item.aptNotes}</div>
								</div>
							</div>
						))}
						
					</div>
				)

			// We can then delete the `const listItems` temporary variable as it has now been added to the return template 
		
		// Injecting an Index
			// One thing about React is that it wants to have an index for each item generated in a list 
			// This means that we need to create a unique `key` element for each item in the list. This is usually done with the container <div> that holds our looped content 
				// To do this, we simply add the `key` keyword and then pass along a unique id 
					<div key={}></div>
				// If the data in the array is not unique enough, you may need to create your own key
					<div key={item.aptId}></div>
				// In order to do this, we must generate our unique key and feed it into our component before it gets to the sub-component.
					// This can be done by adding an id variable when the data is fetched using the componentDidMount() method 
						componentDidMount() {
							fetch('./data.json')
							.then(response => response.json())
							.then(result => {
								const apts = result.map(item => {
									item.aptID = this.state.lastIndex
									return item
								})
								this.setState({
									myAppointments: apts
								})
							})
						}
					// Then, in state, we will create a variable called lastIndex and initialize it with a value of zero
						constructor() {
							super()
							this.state = {
								myAppointments: [],
								lastIndex: 0
							}
						}
					// Next, we need to go back to componentDidMount and create a way to increase the lastIndex using a setState method and passing in an object that contains what you want to modify, along with the state variable that you want to modify and how you want to modify it
						componentDidMount() {
							fetch('./data.json')
							.then(response => response.json())
							.then(result => {
								const apts = result.map(item => {
									item.aptID = this.state.lastIndex
									this.setState({ lastIndex: this.state.lastIndex +1 })
									return item
								})
								this.setState({
									myAppointments: apts
								})
							})
						}
					// Since this unique ID was created as a part of myAppointments before being passed into the component, the component should understand them just fine. 

		// Using Third-Party Components
			// In order to use third-part components, you must first install them with npm, then import them into the component that they will be used with
				import { FaTimes } from 'react-icons/fa';
			// Then to use it in the component, you simply add the component to the JSX
				<FaTimes /> 

			// Some third-party component libraries, such as moment.js, have componentized versions of their library (ie moment.js => react-moment). These allow you to import only the components that you need in your application
				// To use a component from react-moment, you will first import the component using an import statement
					import Moment from 'react-moment'
				// The we can add the Moment component to our render template and pass it some props to handle our data 
					// In this example, the Moment component needs our current date value, the format of that value, and a format that we would like to be displayed 
					<Moment 
						date={item.aptDate}
						parse="YYYY-MM-dd hh.mm"
						format="MMM-D h:mma"
					/>

	// Handling Events and Adding Records
		// Handling Events Through props
			// Props allow us to pass things from our main component to a sub-component
			// To add an eventListener, we'll add an onClick event to the <button> in the return template JSX
				// We'll use an arrow function with the onClick because arrow functions allow you to use the keyword `this` without modifying what it means
				// deleteAppointment is a function that we will create, and 'item' is the item that we generate with this loop
				<button className="pet-delete btn btn-sm btn-danger"
					onClick={( => this.props.deleteAppointment(item))}>
					X
				</button>
			// Then we'll go back to the <App /> and create the prop that we're using in <ListAppointments />
				<ListAppointments 
					appointments={this.state.appointments} deleteAppointment={this.deleteAppointment} 
				/>
			// Now we need to create the function deleteAppointment()
				// Because we can't change state directly to remove the record that we want to delete, we need to create a temporary varialbe using `let`
				// Then we'll use lodash, which has a feature called 'without' that will allow us to take an array, feed it a record that we want it to delete, and will then return the array without the record that we wanted to delete
					deleteAppointment(apt) {
						let tempApts = this.state.myAppointments;
						tempApts = without(temApts, apt)
					}
				// We will also need to import lodash within this component
					import { without } from 'lodash';
				// Now that we have an array without the record that we are deleting, we'll go ahead and use setState to update the state of the myAppointments array
					deleteAppointment(apt) {
						let tempApts = this.state.myAppointments;
						tempApts = without(tempApts, apt)
						this.setState({
							myAppointments: tempApts
						})
					}
				// Lastly, inside of deleteAppointment(), the keyword `this` doesn't refer to the object that we are creating with the component. It refers to something from within the deleteAppointment method. So we need to pass the version of the `this` variable that has the entire App component in it, which will have access to all of our other methods, data and state.
					// In constructor, we need to add a reference to the deleteAppointment() function and bind it to the object. This way when the function is called, it knows to look at the object
						constructor() {
							super();
							this.state = {
								myAppointments: [],
								lastIndex: 0
							};
							this.deleteAppointment = this.deleteAppointment.bind(this);
						}

		// Tracking Form Display
			// We want to hide our form display until we click on our form header to reveal it. To do this, we ware going to need a variable that we can track instead of outputting this literal className
				// First, we change the className to an expression which will output the normal set of classes, and then look for a variable that we will be passing through props
					<div className={
						'card textcenter mt-3 ' +
						{this.props.formDisplay ? '': 'add-appointment'}
					}></>
				// Then we need to go to the <App /> component and modify the state so that we have that variable to pass to the child component
					this.state = {
						myAppointments: [],
						formDisplay: false,
						lastIndex: 0
					}
				// Finally we need to pass the state value to the component by using props
					<AddAppointment 
						formDisplay={this.state.formDisplay} 
					/>
				// Now if the state of formDisplay is false, the form will not show. But if the state of formDisplay is true, the form will show

		// Handling a Toggle
			// To add a toggle function to the <div>Add Appointments</div> we need to add an onClick attribute to the <div> and have it reference the function {this.props.toggleForm}
				<div 
					className='apt-addheading card-header bg-primary text-white'
					onClick={this.props.toggleForm}
				>
					<FaPlus />
					Add Appointment
				</div>
			// Next we need to go to the <App /> component and pass that function via props
				<AddAppointments 
					toggleForm={this.toggleForm}
					formDisplay={this.state.formDisplay}
				/>
			// Then we need to add the toggleForm function to the <App /> component
				toggleForm() {
					this.setState({
						formDisplay: !this.state.formDisplay
					})
				}
			// Lastly, we have to fix an issue with 'this' to make sure that the toggleForm() function Lastly, we have to deal with the meaning of 'this' whenever we use state inside of a sub-method. Whenever we do this, we need to make sure that we bind the proper value of 'this' to the sub-method so that 'this' references the class and not the internal from of the sub-method. 
				constructor() {
					super()
					this.state = {
						myAppointments: [],
						formDisplay: false,
						lastIndex: 0
					}
					this.deleteAppointment = this.deleteAppointment.bind(this)
					this.toggleForm = this.toggleForm.bind(this)
				}
		
		// Monitor Form state
			// To process information in a form, we'll need to create some variables in our AddAppointment.js to keep track of the <input> fields as they are modifies
				// We start by adding a constructor to <AddAppointment />
					// Even though the Date and the Time will be entered individually via different <input> fields, the data will be stored together within the aptDate key within the data.json file
						// First we create state variables for each of the <input>
				// Next we will go into the <input> fields and create references to values of the local state variables, as well as an event that will trigger whenever an <input> field is changed
					value={this.state.petName}
					// These values will reference the local state of the component
				// Additionally, for each of the <input> fields, we're going to trigger an even whennever any of them change
					onChange={this.handleChange}
					// This onChange handler will be added to every <input> field
				// Then, within the <AddAppointment /> component, we need to create the handleChange() method
					// Whenever an even takes place we can recieve that event in a variable within any of these method. So we will creat some variables to manage what is happeneing whenever someone types anythign into one of the <input> fields that we are monitoring
						// The target variable will be set to automatically target any input field that is currently being modified
							const target = e.target
						// The value variable will keep track of value that someone has changed within the input field
							const value = target.value 
						// The name variable will keep track of name of the input field 
							const name = target.name 
					// Next, we will set the state of the current component using the name of the current element and set that to the value recieved in the handleChange() mehtod
						this.setState ({
							[name]: value
						})
						// Once again, make sure that within the constructer, for the method handleChange(), you bind the reference of 'this' to the component 

					class AddAppointment extends Component {

						constructor() {
							super()
							this. state = {
								petName: '',
								ownerName: '',
								aptDate: '',
								aptTime: '',
								aptNotes: ''
							}
							this.handleChange = this.handleChange.bind(this)
						}

						handleChange(e) {
							const target = e.target
							const value = target.value
							const name = target.name 

							this.setState ({
								[name]: value
							})
						}

						render() {
							return (
								<div 
									className={
										'card textcenter mt-3 ' + 
										(this.props.formDisplay ? '': 'add-appointment')
									}
								>
								<div 
									className="apt-addheading card-header bg-primary text-white"
									onClick={this.props.toggleForm}
								>
									<FaPlus /> Add Appointment
								</div>
					
								<div className="card-body">
									<form id="aptForm" noValidate>
										<div className="form-group form-row">
											<label
												className="col-md-2 col-form-label text-md-right"
												htmlFor="petName"
												readOnly
											>
												Pet Name
											</label>
											<div className="col-md-10">
												<input
													type="text"
													className="form-control"
													name="petName"
													placeholder="Pet's Name"
													value={this.state.petName} //
													onChange={this.handleChange} //
												/>
											</div>
										</div>
					
										<div className="form-group form-row">
											<label
												className="col-md-2 col-form-label text-md-right"
												htmlFor="ownerName"
											>
												Pet Owner
											</label>
											<div className="col-md-10">
												<input
													type="text"
													className="form-control"
													name="ownerName"
													placeholder="Owner's Name"
													value={this.state.petOwner} //
													onChange={this.handleChange} //
												/>
											</div>
										</div>
					
										<div className="form-group form-row">
											<label
												className="col-md-2 col-form-label text-md-right"
												htmlFor="aptDate"
											>
												Date
											</label>
											<div className="col-md-4">
												<input
													type="date"
													className="form-control"
													name="aptDate"
													id="aptDate"
													value={this.state.aptDate} //
													onChange={this.handleChange} //
												/>
											</div>
											<label
												className="col-md-2 col-form-label text-md-right"
												htmlFor="aptTime"
											>
												Time
											</label>
											<div className="col-md-4">
												<input
													type="time"
													className="form-control"
													name="aptTime"
													id="aptTime"
													value={this.state.aptTime} //
													onChange={this.handleChange} //
												/>
											</div>
										</div>
					
										<div className="form-group form-row">
											<label className="col-md-2 text-md-right" htmlFor="aptNotes">
												Apt. Notes
											</label>
											<div className="col-md-10">
												<textarea
													className="form-control"
													rows="4"
													cols="50"
													name="aptNotes"
													id="aptNotes"
													placeholder="Appointment Notes"
													value={this.state.aptNotes} //
													onChange={this.handleChange} //
												/>
											</div>
										</div>
					
										<div className="form-group form-row mb-0">
											<div className="offset-md-2 col-md-10">
												<button
													type="submit"
													className="btn btn-primary d-block ml-auto"
												>
													Add Appointment
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							)
						}

					}
		
		// Processing the Form
			// To submit the form, we'll add an onSubmit event to the <form> element and have it call the function handleAdd()
				<form onSubmit={this.handleAdd()} />
			// Then we'll create the handleAdd() method within the component 
				// The first thing we need to do is prevent the default behavior - this will prevent the form from submitting and reloading the page (the normal behavior when someone submits a form)
					e.preventDefault()
				// We'll then create a temporary variable so that we don't modify state directly, and we'll add the 'key' with references to the temporary variables within the form
					// When it comes to aptDate, we're going to combine the date and the time together, separated by a space. This way we our data is the same as that already in our data.json file
				// Once our variables are set, we'll pass them to a prop that we will call addAppointment
				// Finally, we'll clear out the form by using setState and passing the original state values from the constructor function
					handleAdd(e) {
						e.preventDefault()

						let tempApt = {
							petName: this.state.petName,
							ownerName: this.state.ownerName,
							aptDate: this.state.aptDate + ' ' + this.state.aptTime,
							aptNotes: this.state.aptNotes
						}

						this.props.addAppointment(tempApt)

						this.setState({
							petName: '',
							ownerName: '',
							aptDate: '',
							aptTime: '',
							aptNotes: ''
						})
					}
			// Finally, we'll issue the toggleForm() method to hide the form again so that we can see the rest of the list of appointments
					this.props.toggleForm()
			// Last but not least, don't forget to bind the handleAdd() function to the component within the constructor
					this.handleAdd = this.handleAdd.bind(this)

				class AddAppointment extends Component {

					constructor() {
						super()
						this. state = {
							petName: '',
							ownerName: '',
							aptDate: '',
							aptTime: '',
							aptNotes: ''
						}
						this.handleChange = this.handleChange.bind(this)
						this.handleAdd = this.handleAdd.bind(this)

					}

					handleAdd(e) {
						e.preventDefault()
						
						let tempApt = {
							petName: this.state.petName,
							ownerName: this.state.ownerName,
							aptDate: this.state.aptDate + ' ' + this.state.aptTime,
							aptNotes: this.state.aptNotes
						}

						this.props.addAppointment(tempApt)

						this.setState({
							petName: '',
							ownerName: '',
							aptDate: '',
							aptTime: '',
							aptNotes: ''
						})

						this.props.toggleForm()
					}

					handleChange(e) {
						const target = e.target
						const value = target.value
						const name = target.name 

						this.setState ({
							[name]: value
						})
					}

					render() {
						return (
							<div 
								className={
									'card textcenter mt-3 ' + 
									(this.props.formDisplay ? '': 'add-appointment')
								}
							>
							<div 
								className="apt-addheading card-header bg-primary text-white"
								onClick={this.props.toggleForm}
							>
								<FaPlus /> Add Appointment
							</div>
				
							<div className="card-body">
								<form id="aptForm" noValidate
									onSubmit={this.handleAdd}
								>
									<div className="form-group form-row">
										<label
											className="col-md-2 col-form-label text-md-right"
											htmlFor="petName"
											readOnly
										>
											Pet Name
										</label>
										<div className="col-md-10">
											<input
												type="text"
												className="form-control"
												name="petName"
												placeholder="Pet's Name"
												value={this.state.petName} //
												onChange={this.handleChange} //
											/>
										</div>
									</div>
				
									<div className="form-group form-row">
										<label
											className="col-md-2 col-form-label text-md-right"
											htmlFor="ownerName"
										>
											Pet Owner
										</label>
										<div className="col-md-10">
											<input
												type="text"
												className="form-control"
												name="ownerName"
												placeholder="Owner's Name"
												value={this.state.petOwner} //
												onChange={this.handleChange} //
											/>
										</div>
									</div>
				
									<div className="form-group form-row">
										<label
											className="col-md-2 col-form-label text-md-right"
											htmlFor="aptDate"
										>
											Date
										</label>
										<div className="col-md-4">
											<input
												type="date"
												className="form-control"
												name="aptDate"
												id="aptDate"
												value={this.state.aptDate} //
												onChange={this.handleChange} //
											/>
										</div>
										<label
											className="col-md-2 col-form-label text-md-right"
											htmlFor="aptTime"
										>
											Time
										</label>
										<div className="col-md-4">
											<input
												type="time"
												className="form-control"
												name="aptTime"
												id="aptTime"
												value={this.state.aptTime} //
												onChange={this.handleChange} //
											/>
										</div>
									</div>
				
									<div className="form-group form-row">
										<label className="col-md-2 text-md-right" htmlFor="aptNotes">
											Apt. Notes
										</label>
										<div className="col-md-10">
											<textarea
												className="form-control"
												rows="4"
												cols="50"
												name="aptNotes"
												id="aptNotes"
												placeholder="Appointment Notes"
												value={this.state.aptNotes} //
												onChange={this.handleChange} //
											/>
										</div>
									</div>
				
									<div className="form-group form-row mb-0">
										<div className="offset-md-2 col-md-10">
											<button
												type="submit"
												className="btn btn-primary d-block ml-auto"
											>
												Add Appointment
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						)
					}

				}
			// To finish things off, we'll go back to the <App /> component and and create the addAppointment functionality
				// We'll start by adding the addAppointment to the <AddAppointment /> props
					<AddAppointment 
						formDisplay={this.state.formDisplay}
						toggleForm={this.toggleForm}
						addAppointment={this.addAppointment}
					/> 
				// Next we'll create the addAppointment() function within the <App /> component and pass it an (apt) variable
					// We'll again create a tempApt variable to recieve the current value of myAppointments from state
						let tempApts = this.state.myAppointments
					// Next we add an aptId to the new appointment which will reference the lastIndex variable that we've been keeping track of in state
						apt.aptId = this.state.lastIndex
					// Then we push the new element into the myAppointments array using the unshift method
						tempApts.unshift(apt)
					// Lastly, we setState with this new version of the array and then update the lastIndex value
						this.setState({
							myAppointments: tempApts,
							lastIndex: this.state.lastIndex +1
						})
					// Again, don't forget to bind the value of 'this' within the constructor
						this.addAppointment = this.addAppointment.bind(this)

					addAppointment(apt) {
						let tempApts = this.state.myAppointments
						apt.aptId = this.state.lastIndex
						tempApts.unshift(apt)
						this.setState({
							myAppointments: tempApts,
							lastIndex: this.state.lastIndex +1
						})
					}

	// Searching and Sorting
		// Preparing Our Search Component
            // First, we need to create some additional state variables to keep track of how we want the sorting to work. We will then give an initial 'orderBy' value and an initial 'orderDir' value
                constructor() {
                    super();
                    this.state = {
                        myAppointments: [],
                        formDisplay: false,
                        orderBy: 'petName',
                        orderDir: 'asc',
                        lastIndex: 0
                    }
                }
            // The code to handle the sorting will be placed between the render() statement and the return() statement
                render() {
                    // ... sorting code
                    return(
            // First, we create a temporary variable called order which will be used to decide HOW we're going to order the data
                let order;
            // We will also create a temporary variable called filteredApts and set it equal to the myAppointments[] that we currenting have in our state
                let filteredApts = this.state.myAppointments
            // Then, depending on the value of the orderDir, we will modify our order variable
                if (this.state.orderDir === 'asc') {
                    order = 1
                } else {
                    order = -1
                }
                // This will become a multiplier that will allow us to sort the elements in ascending or descending order.
            // Now, we'll use the JS sort() method onn the filteredApts array
                firteredApts. sort((a,b) => {
                    if (a[this.state.orderBy].toLowerCase() < 
                        b[this.state.orderBy].toLowerCase()
                    ) {
                        return -1 * order
                    } else {
                        return 1 * order
                    }
                })
                // This will look into each element for a specific field, (element[field]), and compare it to the second and see which is bigger
                // The .toLowerCase() will allow us to disregard capitalization in the search. ALWAYS CONVERT TO LOWER CASE WHEN COMPARING.
                // The return statement of `-1 * order` allows us to reverse the order we we want.
                    render() {
                        let order
                        let filteredApts = this.state.myAppointmennts

                        if (this.state.orderDir === 'asc') {
                            order = 1
                        } else {
                            order = -1
                        }

                        firteredApts. sort((a,b) => {
                            if (a[this.state.orderBy].toLowerCase() < 
                                b[this.state.orderBy].toLowerCase()
                            ) {
                                return -1 * order
                            } else {
                                return 1 * order
                            }
                        })
                    }
                // Now that we have filtered our appointment, we need to pass the new filtered list to the inderface. But instead of passing {this.state.myAppointments} as a prop to <ListAppointnments />, we are going to pass the filrtered list of appointments 
                    <ListAppointments 
                        appointments ={filteredApts},
                        deleteAppointments = {this.deleteAppointment}
                    />
		
		// Managing Drop-Down Display
            // To sort the list using the drop-down display, we need to add an 'active' class to any value that has been selected
                // First, we'll pass the 'orderBy' and 'orderDir' values to the <SearchAppointments /> component using (props)
                    <SearchAppointments 
                        orderBy = {this.state.orderBy} 
                        orderDir = {this.state.orderDir}
                    />
            // Then, in the sub-component SearchAppointments.js, we will capture those values from state and modify the classes dynamically using those values and a ternary operator
                    <button className={
                        'sort-by dropdown-item' + 
                        (this.props.orderBy === 'petName' ? 'active' : '' )}
                        href="#">
                        Pet Name
                    </button>
                // This will need to be done for all of the <button> classes -> the Asc and Desc buttons will need to use the orderDir value instead of orderBy
                    <div className="sort-menu dropdown-menu dropdown-menu-right">
                        <button className={
                            'sort-by dropdown-item' + 
                            (this.props.orderBy === 'petName' ? 'active' : '' )}
                            href="#">
                            Pet Name
                        </button>
                        <button className={
                            'sort-by dropdown-item' + 
                            (this.props.orderBy === 'aptDate' ? 'active' : '' )}
                            href="#">
                            Date
                        </button>
                        <button className={
                            'sort-by dropdown-item' + 
                            (this.props.orderBy === 'petOwner' ? 'active' : '' )}
                            href="#">
                            Owner
                        </button>
                        <div role="separator" className="dropdown-divider" />
                        <button className={
                            'sort-by dropdown-item' + 
                            (this.props.orderDir === 'asc' ? 'active' : '' )}
                            href="#">
                            Asc
                        </button>
                        <button className={
                            'sort-by dropdown-item' + 
                            (this.props.orderDir === 'desc' ? 'active' : '' )}
                            href="#">
                            Desc
                        </button>
                    </div>
            // Now, when viewed in the interface, the 'active' values, as listed in state, should be indicated with a grey background
		
		// Sorting Existing Records
            // Now that our drop-down options reflect the values in our state, we need to make our drop-down options control the sort values in our state
                // First, we'll add an onClick event handler to the <button> that will manage what to order by. The onClick will execute an expression that will execute a changeOrder() function that will be passed through props. The changeOrder function will take two arguments, what to order by and what direction to sort (we'll use this.props.orderDir for now)
                    onClick={ e => this.props.changeOrder('petName', this.props.orderDir) }
                // Next, we'll add an onClick event handler to the <button> that will manage the order direction. The onClick will execute an expression that will execute a changeOrder() function that will be passed through props. The changeOrder function will take two arguments, what to order by (we'll use this.props.orderBy for now) and what direction to sort 
                    onClick={ e => this.props.changeOrder(this.props.orderBy, 'asc') }
                // Now we need to go to App.js and create the prop within the <SearchAppointments /> component and pass it the local method changeOrder()
                    <SearchAppointments 
                        orderBy={this.state.orderBy}
                        orderDir={this.state.orderDir}
                        changeOrder={this.changeOrder}
                    />
                // Then, we need to create the local method changeOrder() within the App component. This method will simply set the state of orderBy and orderDir.
                    changeOrder(order, dir) {
                        this.setState({
                            orderBy: order,
                            orderDir: dir
                        })
                    }
                // Lastly, we need to bind the 'this' keyword to for the changeOrder() method
                    this.changeOrder = this.changeOrder.bing(this)

            // REACT ALLOWS YOU TO COMPARTMENTALIZE THE FUNCTIONALITY. 
                // The <ListAppointments /> sub-component is only worrying about displaying a list with the data that is passed to it, whether sorted or unsorted. 
                // The main <App /> component controls what is happening with state, the current values of state
		
		// Building the Search
            // Now, we'll set up the search functionality an cause the list to be searched by some query text
                // To start, we'll create a state parameter called 'queryText' and set the initial state to nothing, ''
                    this.state = {
                        queryText: ''
                    }
                // Then we need to go into the filtering method and add functionality to search the appointments using the JavaScript filter() method
                    // However, because .filter() is a higher order function, it will not allow us to modify an array directly in the same way that .sort() does. So we need to change this into an expression
                    // With .filter() you create a temporary variable that represents each item as it is being filtered and we'll use the return statement to take each of the different parameters that we want to search by and compare what we are searching for with the value of that element in our data
                        // We need to compare it to each of the items that we want to test for, so we'll use an || operator to chain tests
                    filteredApts = filteredApts. sort((a,b) => {
                        if (a[this.state.orderBy].toLowerCase() < 
                            b[this.state.orderBy].toLowerCase()
                        ) {
                            return -1 * order
                        } else {
                            return 1 * order
                        }
                    }).filter(eachItem => {
                        return (
                            eachItem['petName'] // what we're searching for
                            .toLowerCase()      // converted to lowercase
                            // test to see if the value is in the query string
                            .includes(this.state.queryText.toLowerCase()) ||
                            eachItem['ownerName'] // what we're searching for
                            .toLowerCase()      // converted to lowercase
                            // test to see if the value is in the query string
                            .includes(this.state.queryText.toLowerCase()) ||
                            eachItem['aptNotes'] // what we're searching for
                            .toLowerCase()      // converted to lowercase
                            // test to see if the value is in the query string
                            .includes(this.state.queryText.toLowerCase())
                        )
                    })
            // To test functionality, go to the state variable and enter a search into the 'queryText'
		
		// Activating Inputs
            // Now that the functionality works, we need to activate the search input box.
                // Starting in <SearchAppointments />, we'll locate the <input> element and add an onChange event that passes a value through props to a method called searchApts. That searchApts method will then take in the value in the search field
                    onChange={ e => this.props.searchApts(e.target.value)}
                // Back in <App />, we need to add the searchApts method to the component props
                    <SearchAppointments 
                        searchApts={this.searchApts}
                    />
                // Next, we need to define the searchApts() method within the <App /> component, it will take in a value as a (query) and will then setState of the queryText value
                    searchApts(query) {
                        this.setState({queryText: query})
                    }
                // Lastly, we need to rebind 'this' for the searchApts() method
                    this.searchApts = this.searchApts.bind(this)
		
		// Modifying Records
            // To finish the application, we're going to add functionality to allow us to modify the name of the pet, the name of the owner, and the description of the component
            // To take care of these, we can use a feature in HTML called contentEditable which allows any field to be editable. But we'll need to manage how that works within React because it allows direct access to the DOM, which React isn't used to.
                // To start, we'll go to <ListAppointments /> and we'll add contentEditable to those different fields. 
                    <span className="pet-name" contentEditable>
                        {item.petName}
                    </span>
                // This will throw us a bunch of warnings explaining that this element has children and is being managed by React and that you should make sure that nothing is unexpectedly modified or duplicated. To override this error we're gonna have to add an additional attribute called suppressContentEditableWarning 
                // Next we need to detect when someone modifies one of these fields with an event listener called onBlur
                    // We'll pass an event as a result of the change
                    // Then we'll use props to pass along a method updateInfo which will take the values of the text that we want to change ('petName'), the target attribute of the event with the the innerText of that element, and finally the appointment ID of the current element so that we can find the proper record.
                        onBlur={
                            e => this.props.updateInfo('petName', e.target.innerText, item.aptId)
                        }
                // Now, we'll go to <App /> and add the method updateInfo() as well as the prop updateInfo to the <ListAppointments /> component
                    <ListAppointments 
                        updateInfo={this.updateInfo}
                    /> 
                // We'll start by using a temporary variable to make a copy of the myAppointments. Then we'll create another temporary variable to hold the index of the record being modified (using a lodash method - this will locate the index of an element in the original array, not the current/sorted/displayed array which may be different)
                    // The lodash method takes in the original array and an object which will look for a unique identifier within the objects in the array, ie. the unique index
                        // Be sure to import the { findIndex } method from lodash
                            import { findIndex } from 'lodash'
                    // We will then modify that record by finding the tempApt with the aptId that we are looking for and then passing the value of the field that we are trying to edit
                    // Then we'll use setState to modify myAppointments using the new version of appointments that we stored in tempApts
                    updateInfo(name, value, id) {
                        let tempApts = this.state.myAppointments
                        let aptIndex = findIndex(this.state.myAppointments, {
                            aptId: id
                        })
                        tempApts[aptIndex][name] = value
                        this.setState({
                            myAppointments: tempApts
                        })
                    }
                // Last, we need to rebind 'this' for the updateInfo method
                    this.updateInfo = this.updateInfo.bing(this)


// Creating and Hosting a Full-Stack Site
    // 