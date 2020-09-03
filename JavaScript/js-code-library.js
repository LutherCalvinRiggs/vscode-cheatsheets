// Locating DOM elements
    // Find an element by element id
    document.getElementById("id");

    // Find elements by tag name
    document.getElementsByTagName('name');
        // use the [x] syntax to pick a specific tag instance in the nodeList
        document.getElementsByTagName('name')[x];

    // Get the <body> element of a document
    document.getElementsByTagName('BODY')[0];

    // Find elements by class name
    document.getElementsByClassName('name');

    // Get content of an HTML element (easiest way)
    document.getElementById("id").innerHTML;
        // .innerHTML can also be used on <html> and <body>

    // Change the inner HTML of an element
    document.getElementById("id").innerHTML = "Hello World!";
    element.innerHTML = 'new html content';

    // Change the attribute value of an HTML element
    document.getElementById("id").attribute = "value";
    element.attribute = 'value';
    element.setAttribute(attribute, value);

    // Change the style of an HTML element
    document.getElementById("id").style.property = "style";
    element.style.property = 'style';

    // Find first element to make the CSS selector (id, class names, types, attributes, values of attributes, etc) 
    document.querySelector('selector');

    // Find all HTML elements that match a CSS selector (id, class names, types, attributes, values of attributes, etc) 
    document.querySelectorAll('element.selectorName');
    document.querySelectorAll('p.intro'); // finds all <p> elements with class "intro"



// Accessing elements within the DOM
    // Returns all <a> elements that have a name attribute
    document.anchors;

    // Returns the <body> element
    document.body;

    // Returns the document's cookies
    document.cookie

    // Returns document's doctype
    document.doctype;

    // Returns the <html> element
    document.documentElement;

    // Returns all <form> elements
    document.forms;

    // Returns the <head> element
    document.head;

    // Returns all <area> and <a> elements that have an href attribute
    document.links;

    // Returns all <script> elements
    document.scripts;

    // Returns the <title> element 
    document.title;

    // 
    element.scrollHeight

    //
    element.maxHeight


// Manipulating element class and id
    // Change an element's id
    document.element.id = 'name';

    // Return an element's id
    console.log(element.id);

    // Remove the class name and add another
    div.classList.remove('foo');
    div.classList.add('anotherclass');

    // Toggle between class name
    // if 'visible' then remove, if not then add
    div.classList.toggle('vissible');

    // Toggle depending on a test conditional
    div.classList.toggle('visible', i < 10);

    // Console.log if <div> contains a class
    // Returns true if elemennt contains the class 
    console.log(div.classList.contains('foo'));

    // Add or remove multiple classes
    div.classList.add('foo', 'bar', 'baz');
    div.classList.remove('foo', 'bar', 'baz');

    // Add or remove multiple classes using spread syntax
    const cls = ['foo', 'bar'];
    div.classList.add(...cls);
    div.classList.remove(...cls);

    // Remove a class name from a DOM node
    const nodeName = document.querySelectorAll('class-name');
    for (let i = 0; i < nodeName.length; i++){
        nodeName[i].classList.remove('class-name');
    }

    // Replace class 'foo' with class 'bar'
    div.classList.replace('foo', 'bar');

// Creating DOM elements
    // Create element node
    const div = document.createElement('div');

    // Create and element and give it a class name
    const div = document.createElement('div');
    div.className = 'foo';

    // console.log a class name
    console.log(div.outerHTML);

    // Create an HTML element
    document.createElement('element');

    // Remove an HTML element
    document.removeChild('element');

    // Add an HTML element
    document.appendChild('element');

    // Replace an HTML element
    document.replaceChild('new', 'old');

    // Write into the HTML output stream
    document.write('text');

// Event Handlers
    // Adding event handler code to an onlick event
    document.getElementById('id').event = function() {code};
    element.addEventListener('event', function());
    element.addEventListener('event', () => {
        // function code
    });

    // Event Keywords
        // When the content of a form element, the selection, or the checked state have changed
        change
        onchange

        // When the user clicks on an element
        click
        onclick

        // When the user double-clicks on an element
        dblclick
        ondblclick 

        // When the user presses a mouse button over an element
        mousedown
        onmousedown 
        // When a user releases a mouse button over an element
        mouseup
        onmouseup

        // When the pointer is moved onto an element
        mouseeenter
        onmouseenter
        // When the pointer is moved out of an element
        mouseleave
        onmouseleave

        // When the pointer is moved onto an element, or one of its children
            // Does not bubble / propagate 
        mouseover
        onmouseover
        // When the pointer is moving while it is over an element
        mousemove
        onmousemove 
        // When a user moves the mouse pointer out of an element, or out of one of its children
        mouseout
        onmouseout

        // When nthe user presses a key
        keypress
        onkeypress
        // When the user is pressing a key
        keydown
        onkeydown 
        // When the user releaes a key
        keyup 
        onkeyup 

        // When the user opens or closes the <details> element
        toggle
        ontoggle 

        // When a finger is placed on a touch screen
        touchstart
        ontouchstart
        // When na finger is dragged across the screen
        touchmove
        ontouchmove 
        // When a finger is removed from a touch screen
        touchend
        ontouchend
        // When the touch is interrupted
        touchcancel
        ontouchcancel

        // When nan element gets user input
        input 
        oninput 

        // When an element gets focus
        focus
        onfocus 
        // When an element is about to get focus
        focusin 
        onfocusin 
        // When an element is about to lose focus
        focusout 
        onfocusout 

        // When an nobject has loaded 
        load
        onload

        // When media data is loaded
        loadeddata
        onloadeddata 

        // When a message is received through the event source
        message 
        onmessage 

        // When the media has been started or is no longer paused
        play 
        onplay 

        // When the media is playing after having been paused or stopped for buffering
        playing
        onplaying 

        // When the media is paused either by the user or programmatically
        pause 
        onpause 

        // When the browser can start playing the media (when it has buffered enough to begin)
        canplay
        oncanplay
        
        // When the media has reached the end (useful for messages like "thanks for listening")
        ended 
        onended 

        // When a CSS transition has completed
        transitionend
        ontransitionend

        // When the duration of the media has changed
        durationchange
        ondurationchange

        // More events can be found here: https://www.w3schools.com/jsref/dom_obj_event.asp


















    // Working with forms in JS
        // Return the value of the ID-selected element
        document.getElementById('').value
        document.querySelector('').value

        // Returns 'true' if a checkbox is checked, 'false' if not
        // USE FOR CHECKBOXES INSTEAD OF USING .value
        document.getElementById('').checked
        document.querySelector('').checked

        // Returns an array of the selection options availble to an ID-selected element
        document.getElementById('').option
        document.querySelector('').option

        // Returns the array position of the selected value of the ID-selected element
        document.getElementById('').selectedIndex
        document.querySelector('').selectedIndex

        // Return an array/NodeList of all checkbox elements that are checked
        document.querySelectorAll('.class-name input[type=checkbox]:checked')

        // Return the radio button element option that is checked
        document.querySelector('input[name=radio-button-name]:checked')
        // Return the value of the checked radio button 
        document.querySelector('input[name=radio-button-name]:checked').value
        // Can set the value of a radio button
        document.getElementById('id').checked = true    // option is checked
        document.getElementById('id').checked = false   // option is not checked
            // This also works with check boxes, but keep in mind multiple checkboxes can be selected at one time


        // Disabling a button when the page loads and enabling it when the field values are set
            // Called when the page has loaded sufficiently that the DOM is ready for the user
        document.addEventListener('DOMContentLoad', (e) => {
            let field = document.getElementById('field-id');    // Set as many as you want
            let field2 = document.getElementById('field2-id');
            let field3 = document.getElementById('field3-id');

            // Reference to the submit button
            let button = document.getElementById('button-id');
            // Disable the button until the fields are filled out
            button.disabled = true; 

            // Make the submit button inactive until all required fields are filled out
            toggleSubmit(); // checks if fields have values in case of page reload
            document.addEventListener('change', toggleSubmit());

            function toggleSubmit() {
                if (field.value === '' || field2.value === '' || field3.value === '' || `etc`) {
                    button.disabled = true;
                    // alert('Please enter a value for ____');
                    // field.focus();   // places keyboard focus on the field that was left empty
                } else {
                    button.disabled = false;
                };
            }

            // Add an event listener to a form submit button
            document.getElementById('form-name').addEventListener('submit', (e) => {
                // prevents the page from reloading when you submit the form
                event.preventDefault(); 
                
                // if (field.value === '' || field2.value === '' || field3.value === '' || etc) {
                //     button.disabled = true;
                //     alert('Please enter a value for ____');
                //     field.focus();   // places keyboard focus on the field that was left empty
                // } else {
                //     button.disabled = false;
                // };

                alert('Your form has been submitted.\nThank you!');
            });

        });

        // Sanitizing User Input
            // parseInt takes a number string and a radix (the base of the calculation, usually 10 for decimals)
        parseInt('number string', 10); 
        let itemQuant = parseInt(document.getElementById('id').value, 10); 
            // Can also set a default value if the element value returns NaN
            let itemQuant = parseInt(document.getElementById('id').value, 10) || 0; 
            // Can also set a default value for checkboxes and radio buttons
            let checkBox = parseInt(document.querySelector('[name=checkbox]:checked').value) || ''; 

        // Convert a nubmer to a string with a certain number of decimal points
        let price = '$' + (totalItemPrice * taxFactor + shippingCost).toFixed(2);
            // .toFixed(2) will show a number with two decimal points (ie, currency)

    // Date and Time in JS
        // To add a current date and time when DOM content loads
        document.addEventListener('DOMContentLoaded', function() {
            const calendarDate = document.getElementByID('date');
            const clock = document.getElementById('clock');
            
            // update the clock every minute
            setInterval(updateTime, 1000);

            function updateTime(){
                // gets the current time from the web browser
                let date = new Date(); 
                // get the hours
                let hours = date.getHours();
                // get the minutes
                let minutes = date.getMinutes();
                // get the seconds
                let seconds = date.getSeconds();
                // set AM / PM
                let ampm = 'AM';
                // get the month
                let month = formatMonth(date.getMonth());
                // get the date 
                let day = date.getDate();

                // convert to non-military time
                if (hours > 12) {
                    hours -= 12;
                    ampm = 'PM'
                } else if (hours === 0) {
                    hours = 12;
                }

                // format minutes to always display two integers
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                
                // To make the colons flash like a digital clock
                const separatorClass = '';
                if (seconds % 2 === 1) separatorClass = 'transparent';
                const separator = "<span class='" + separatorClass + "'>:</span>";
                
                calendarDate.textContent = month + ' ' + day;
                clock.innerHTML = hours + separator + minutes + separator + seconds + ' '  + ampm;
            };

            function formatMonth(m) {
                // make sure that m is an integer and not a string
                m = parseInt(m, 10);

                if (m < 0) {
                    m = 0;
                } else if (m >11) {
                    m = 11;
                }

                const monthNames = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                ];

                return monthNames[m];
            };

        });

            // JS Date() Methods
                // JS Date Object
                Date();
                const date = Date();

                // Return the time string => xx:xx:xx GMT -xxxx (Time Zone)
                const date = Date();
                date.toTimeString();

                // Returns a string representing the date
                const date = Date();
                date.toDateString();

                // Return the hour of the day
                const date = Date();
                date.getHours();

                // Return the minutes of the day
                const date = Date();
                date.getMinutes();

                // Return the month
                const date = Date();
                date.getMonth();    // will return a number

                // Return the day of the month
                const date = Date();
                date.getDate();

                // Return the day of the week
                const date = Date();
                date.getDay();  // will return a number. 0 = sunday?

            // Updating a JS clock in your browser
            setTimeout(function(), 'delay-time-in-ms');
                // Downside: you would need to keep calling this function with longer and longer delays to keep the clock updated

            // Updating a JS clock continuosly
            setInterval(function(), 'delay-time-in-ms');

        // 


        











// JS Objects and  Methods

    // Create an object and add properties
    let objectName = {
        property1: value, 
        property2: value
    };
    // Create an object with a Constructor
    function ObjConstName(prop1, prop2, propN) = {
        this.property1 = prop1;
        this.property2 = prop2;
        this.propertyN = propN;
    }
    // Create an instance of that Object using the constructor and `new` operator
    let objectName = new ObjConstName(prop1, prop2, propN);    
    // Verify an object's constructor, 
    objectName instanceof ObjConstName; // returns 'true' or 'false'

    // `own` properties are defined directly on the object instance itself
    function Object(prop) {
        this.property = prop; // own property
    }
    // Add the `own` properties of an Object to the array `ownProps`
    let ownProps = [];
    for (let property in Object) {
        if (Object.hasOwnProperty(property)) {
            ownProps.push(property);
        }
    }
    
    // Prototype Properties are shared among all instances automatically
        // The prototype is part of the object constructor. It can be written anywhere.
        // Nearly every JS object has a prototype property which is part of the constructor function that created it.
    Object.prototype.property = value; // prototype property
    // Add multiple properties by setting the prototype to a new object that already contains the properties, this will add all of the properties at once
    Object.prototype = {
        property1: value,
        property2: value,
        property3: function() {},
        propertyN: function() {}
    }
        //Manually setting the prototype to a new object will erase the constructor property
        objName.constructor === ObjConstName; // false
        objName.constructor === Object; // true, all objects inherit
        objName instanceof ObjConstName; // true, still works
    // Whenever a prototype is manually set to a new object, remember to define the constructor property
    ObjConstName.prototype = {
        constructor: ObjConstName,  // define the constructor property
        property1: value,
        propertyN: function() {}
    };
        // An object inherits its prototype directly from the constructor function that created it
        function Object(prop) {
            this.property = prop;
        }
        let objName = new Object(prop);
        // This can be shown using the `isPrototypeOf` method
        Object.prototype.isPrototypeOf(objName); // returns true
        // All objects in JS (with a few exceptions) have a prototype. An object's prototype itself is an object.
        // A prototype can have it's own prototype. The prototype of a prototype is `Object.prototype`
        Object.prototype.isPrototypeOf(Bird.prototype); // returns true
        // The Prototype Chain
            // The `hasOwnProperty` method is defined in `Object.prototype`, which can be accessed by `Bird.prototype`, which can ben be accessed by `duck` (the instance). In this Prototype Chain, `Bird` is the 'supertype' for `duck`, while `duck` is the 'subtype'. `Object` is a 'supertype' for both `Bird` and `duck`.
            // `Object` is a supertype for all objects in JS. Therefore, any object can use the `hasOwnProperty` method. 
        // Full Example
        let beagle = new DOMStringList("Snoopy");
        Dog.prototype.isPrototypeOf(beagle); // true
        Object.prototype.isPrototypeOf(Dog.prototype); // true

    // Object Inheritance 
        // Use supertypes so you don't have to right repeated methods
        // This is a supertype (or parent)
            function Animal() { }
            Animal.prototype = {
                constructor: Animal,
                describe: function() {
                    console.log("My name is " + this.name);
                }
            };
        // Since `Animal` include the `describe` method, you can remove it from the objects `Bird` and `Dog`
            Bird.prototype = {
                constructor: Bird
            };
            Dog.prototype = {
                constructor: Dog
            };
        // When a new instance of Bird or Dog is created, it inherits methods from the parent Animal. This can be used to quickly define behaviors that are shared across similar objects
        
        // Inheritance Techniques
            // To make an instance of the supertype (or parent)
                let animal = new Animal();
                // or 
                let animal = Object.create(Animal.prototype);
                    // `Object.create(obj)` creates a new object and sets `obj` as the new object's prototype. (Remember, the prototype is like the 'recipe' for creating an object). By setting the prototype of animal to be "Animal's prototype", you are effectively giving the `animal` instance the same recipe as any other instance of Animal.
                        animal.eat(); // prints "nom nom nom"
                        animal instanceof Animal; // => true
            // Set the prototype of the subtype (or child) to be an instance of the parent
                Bird.prototype = Object.create(Animal.prototype);
                Dog.prototype = Object.create(Animal.prototype);

        // Reset an Inherited Constructor Property
            // Objects that inherit their prototype from another object also inherit the supertype's constructor property
                function Bird() {}
                Bird.prototype = Object.create(Animal.prototype);
                let duck = new Bird();
                duck.constructor // function Animal () {...}
            // But we want all instacnes of Bird to show that they were constructed by Bird, not Animal. You can manually set Bird's constructor ropety to the Bird object:
                Bird.prototype.constructor = Bird;
                duck.constructor // function Bird() {...}
            
        // Adding Methods after Inheritance
            // A constructor function that inhertis is prototype object from a supertype constructor function can still have its own methods in addition to inherited methods
                function Animal() {}
                Animal.prototype.eat = function() {
                    console.log("nom nom nom");
                };
                function Bird() {}
                Bird.prototype = Object.create(Animal.prototype);
                Bird.prototype.constructor = Bird;
            // Functions are added to a prototype the same way as an constructor function 
                Bird.prototype.fly = function() {
                    console.log("I'm flying!");
                };
            // Now an instance of Bird will have both eat() and fly() methods
                let duck = new Bird();
                duck.eat(); // prints "nom nom nom"
                duck.fly(); // prings "I'm flying!"

        // Overriding Inherited Methods
            // Inherit a behavior (method) by referecing its prototype object
                ChildObject.prototype = Object.create(ParentObject.prototype);
            // Recieve a new method by chaining to the prototype
                ChildObject.prototype.methodName = function() {return x};
            // Overriding an inhertied method is done in the same way as adding a method to `ChildObject.prototype` using the same method name as the one to override
                ChildObject.prototype.methodName = function() {return y}; // function override
                // When JS looks for a method, it starts at the 'youngest' child and works toward the parent. Once a method is located, JS stops searching.
        
        // Using a Mixin to add common behavior between unrelated objects
            // Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly by one is not the other and vice versa.
            // For unrelated objects, it's better to us mixins. Mixins allow other objects to use a collection of functions.
            let flyMixin = function(obj) {
                obj.fly = function() {
                    console.log("Flying, wooosh!");
                }
            };
            // The `flyMixin` takes an object and gives it the `fly` method
            let bird = {name: "Donald", numLegs: 2};
            let plane = {model: "777", numPassengers: 524};
            flyMixin(bird);
            flyMixin(plane);
            // The above script uses the flyMixin to add the fly() method to the instances of bird and plane. This allos the same method to be reused by unrelated objects.

    // Using Closure to protect properties within an object from being modified externally
        // Public properties can be accessed and changed outside of an object's definition
            bird.name = "Duffy";
        // The simplest way to make a public property private is by creating a variable withint the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way the variable can only be accessed and changed by methods also within the constructor function. 
            function Bird() {
                let hatchedEgg = 10; // private variable
                // Below is a publicly available method that a bird object can use
                this.getHatchedEggCount = function() {
                    return hatchedEgg;
                };
            }
            let ducky = new Bird();
            ducky.getHatchedEggCount(); // returns 10
        // Above, `getHatchedEggCount` is a privileged method because it has access to the private variable `hatchedEgg`. This is possible because `hatchedEgg` is declared in the same context as `getHatchedEggCount`. In JS, a function nalways has access to the context in which it was created. This is called CLOSURE.
    
    // Immediately Invoked Function Expression (IIFE)
        // A common pattern in JS is to execute a function as soon at it is declared
            ( function() { console.log("Chirp, chirp!"); } )();
                // This is an anonymous function expression that executes right away
            // The function above has no name and is not stored in a variable. The parenthesis at the end of the function expression ncause it to be immediately executed or invoked. 
        // You can create modules with IIFE
            // IIFEs are often used to group related functionality into a single object or module. Example, immediately invoking a mixin
            function glideMixin(obj) {
                obj.glide = function() {
                    console.log("Gliding on the water");
                };
            }
            function flyMixin(obj) {
                obj.fly = function() {
                    console.log("Flying, wooosh!");
                };
            }
            // These mixins can be grouped into a module
            let motionModule = (function () {
                return {
                    glideMixin: function(obj) {
                        obj.glide = function() {
                            console.log("Gliding on the water");
                        };
                    },
                    flyMixin: function(obj) {
                        obj.fly = function() {
                            console.log("Flying, wooosh!");
                        };
                    }
                }
            })(); // the two parenthesis cause the function to be invoked immediately
        // Note that the IIFE returns an object `motionModule`. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the mothionn behaviors can be packaged into a single object that can thenn be used by other parts of your code. 
            motionModule.glideMixin(duck);
            duck.glide();

    // Add and Object's `own` properties to the array `ownProps` and `prototype` properties to the array `prototypeProps`
    let ownProps = [];
    let prototypeProps = [];
    for (let property in objName) {
        if (objName.hasOwnProperty(property)) {
            ownProps.push(property);
        } else {
            prototypeProps.push(property);
        }
    }

    // Check what kind of an Object it is using the constructor property
    console.log(objName.constructor === Object); // will be true if objName is of the kind Object
        // Example of how it can be used
        function (objName) {
            if (objName.constructor === Object) {
                return true;
            } else {
                return false;
            }
        }

    // Get property values from an object
    objectName.property 
    alert (objectName.property);

    // Add a property
    objectName.property = value;

    // Remove a property
    delete objectName.property 

    // Use a multiword property name
    let objectName = {
        property: value,
        "multiword property": value     // multiword properties must be quoted
    };

    // OBJECTS DECLARED WITH A `CONST` CAN BE MODIFIED
        // The `const` fixes the value of the object but not its contents
        // This will only give an error if you try to reset the object as a whole
    const objectName = {
        property: value,
    };
    objectName.property = "value";
    alert( objectName.property );       // "value"

    // Call multiword properties using square bracket notation
    objectName["multiword property"] = value;       // sets 'value'
    alert( objectName["multiword property"] );      // returns 'value'
    delete objectName["multiword property"];        // deletes 'value'

    // Obtain the property name as the result of any expression like from a variable - as opposed to a literal string
    let key = 'likes birds';
    // same as user['likes birds'] = true;
    user[key] = true;
        // The variable `key` can be calculated at run-time or depend on the user input. Then we use it to access the property. This allows us to call specific properties from an object in realtime.
            
            // Example
            let user = {name: "John", age: 30};
            let key = prompt('What would you like to know about the user?', userInput);
            // access the object by the variable
            alert( user[key] );         // John (if `userInput` enters 'name' when prompted) 
            alert( user.key );          // Same concept using dot notation 

    // Use square brakets in an object literal when creating an object (aka computed properties)
        // Bracket is used to declare a property name instead of a value
    let fruit = prompt('Which fruit to buy?', "apple");
    let bag ={ [fruit]: 5, };       // the name of the property is take from the variable fruit
    alert( bag.apple );             // 5 if `fruit="apple"`

            // The above is the same as below
                let fruit = prompt('Which fruit to buy?', 'apple');
                let bag = {};
                // take property name from the fruit variable and assign a value
                bag [fruit] = 5;

            // This concept can be used for more complex expressions inside square brackets
            let fruit = 'apple';
            let bag = {[fruit + 'Computers']: 5}; // bag.appleComputers = 5
        // Squre brackets are much more powerful than the dot notation and allow any property name and variable
        // When the property names are known and simple, use the dot notation. When you need something more comples, use the square bracket notation

    // Use existing variables as values for property names
    function makeUser(name, age) {
        return {
            name,       // same as `name: name`
            age,        // same as `age: age`
            // ...
        };
    }
        // The above is Property Value Shorthand for the following code
        function makeUser(name, age) {
            return {
                name: name,       // same as `name: name`
                age: age,        // same as `age: age`
                // ...
            };
        }
        let user = makeUser("John", 30);
        alert( user.name );     // John

        // You can combine normal properties and shorthands in the same object
        let user = {
            name,       // same as name: name
            age: 30
        };
          
    // There are no name restrictions for object properties. 
    let obj = {
        for: 1,
        let: 2,
        return: 3
    };
    alert( obj.for + obj.let + obj.return );        // 6
        // other types are automatically converted to strings - 0 becomes '0'
        let obj = { 0: 'test' };        // same as "0": "test"
        // both alerts access the same property 
        alert( obj["0"] );      // test
        alert( obj[0] );        // test (same property)

    // Check to see if a property exists withint an object. Can access any property within an object. There is no error if the property doesn't exist.
    'key' in object 
    'property-name' in object   // 'key' and 'property-name' are usually quoted strings
            // Example
            let user = {};
            alert (user.noSuchProperty === undefined );     // true means "no such property"
            // Example
            let user = { name: "John", age: 30 };
            alert( "age" in user );             // true, user.age exists
            alert( "blabla" in user);           // fale, user.blabla doesn't exist
    key in object   // without quotes `key` is a variable containing the actual name to be tested 
            // Example
            let user = { age: 30 };
            let key = "age";
            alert( key in user );       // true, property "age" exists
        // It is best to use `in` because an obj.property can exist but hold the value 'undefined'
        // This should happen rarely as you should use 'null' for unknown or empty values.

    // Check for emptiness in an object
    function isEmpty(obj) {
        for (let key in obj) {
            // if the loop has started, there is a property
            return false;
        }
        return true;
    }

    // Walk over all keys in an object
    for (key in object) {
        // executes the body for each key among object properties
    }
            // Example
            let user = { name: "John", age: 30, isAdmin: true };
            for (let key in user) {
                // keys
                alert( key );           // name, age, isAdmin
                // values fro the keys
                alert( user[key] );     // John, 30, true
            }
        // All 'for' constructs allow us to declare the looping variable inside the loop (`let key`)
        // Could also use `for (let prop in obj)` 

    // Sum values of object properties
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }

    // Multiply all interger values by 2
    function multiplyNumeric(obj) {
        for ( let key in obj ){
            if (typeof obj[key] == "number"){
                obj[key] *= 2
            };
        };
    }

        // When looping over an object, integer properties are sorted while others appear in creation order
            // Example - Integer properties
            let codes = {
                '49': 'Germany',
                '41': 'Switzerland',
                '44': 'Great Britain',
                // ...,
                '1': 'USA'
            };
            for (let code in codes) {
                alert(code);        // 1, 41, 44, 49
            }
            // To make the phone codes non-integer, add a '+' before each code
                // Integer properties are strings that can be converted to-and-from an integer without a change. "41" is an integer property name, but "+49" and "1.2" are not
            // Example - Non-Integer Properties
            let user = {
                name: "John",
                surname: "Smith"
            };
            user.age = 25;  // add on more
            // non-integer properties are listed in nthe creation order
            for (let prop in user) {
                alert( prop );      // name, surname, age
            }














// Functional Programming
    // Simple, isolated functions, without any side effects outside of the function scope
        // Callbacks - functions that are passed into another function to decide the invocation of that function
        // First class function - functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value. All JS functions are first class functions
        // Higher order function - functions that take a function nas an argument, or returnn a function as a return value
        // Lamnbda - functions that are passed into another funnction or returned from another function
    // Imperative Code
        // An imperative style in programming is one that gives the computer a stet of statements to perform a task. Often these statemsnt change the state of the program, like updating global variables. A classic example is writing a `for` loop that gives exact directions to iterate over the indices of an array. 
        // Functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function
    // Avoid Mutations and Side Effects
        // Mutations occur whenn changing or altering things. The outcome is called a Side Effect. Functionns should not cause any side effects.
        // One of the core principles of function programming is to not change things. Changes lead to bugs. It's easier to prevennt bugs knowing tha tyour functions donn't change anything, including the function arguments or any global variables
    // Pass Arguments to avoid External Dependence
        // Always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
            // The function will be easier to test, it won't depend on anything else in your program, and you will know exactly what input it takes.
        // This will give you more confidence when you alter, remove, or add new code. You will know what you ca nor cannot change and you can see where the potential traps are. 
        // The function should always produce the same output for the same set of inputs, no matter what part of the code executes it.
    // Refactoring Global Variables out of functions
        // When passing an argument to a function, you may have to make a copy of that argument to be used and returned within the function
            numbers = [1,2,3];
            numbersCopy = [...numbers];
            numbersCopy.push(4);
            console.log(numbers, numbersCopy); // [1,2,3] and [1,2,3,4]  - numbers is left alone
        // The above is simply one way of handling copy an array. The code will depend on what the function needs to accomplish. 
















// Determin if value is NaN
value.isNaN();


// Spread operator (...)

    // To make an array 
    [...["12345"]]  // Array [ "12345" ]
    [..."12345"]    // Array(5) [ '1', '2', '3', '4', '5' ]

    // Copying an array
    let arrayName1 = [...arrayName2];

    // Make a string
    let stringName = ...arrayName;

    // Concatenating arrays
    let newArray = [...arrayName1, ... arrayName2];

    // Find highest value in an array
    Math.max(...arrayName);

    // Find lowest value in an array
    Math.min(...arrayName);

    // Using an array as arguments
    let arrayName = [a, b, c];
    functionName(...arrayName);
    let functionName = (x, y, z){};

    // Adding an item to a list
    let arrayName = [x,y,z];
    let newArray = [a, b, ...arrayName]; 

    // Adding to a state in React

    // Combining objects

    // Converting NodeList to Array

    // https://medium.com/coding-at-dawn/how-to-use-the-spread-operator-in-javascript-b9e4a8b06fab


    // Execute a provided function once for each array element
    arrayName.forEach(element => console.log(element));
    
    // Determine if an array includes a certain value among its entries (Boolean)
    arrayName.includes(value);
        // Returns 'true' or 'false'

    // Create a new array with all elements that pass the test implemented by the profided function 
    arrayName.filter(element => element.length > x);


    // Rest parameters???


















// Array Methods

    // Accessing FIRST array element
        let first = arrayName[0];

    // Accessing LAST array element 
        let last = arrayName[arrayName.length - 1];

    // Converts an array to a comma separated string
        arrayName.toString();

    // Create a new, shallow-copied Array instance from an array-like or iterable object
        Array.from('foo');
        // array['f', 'o', 'o']

    // Join all array elements into a string, also allows you to specify a separator
        arrayName.join(" * ");

    // To reverse the contents of an array
        stringName.reverse();
    
        // To reverse a string and have it print backwards
            stringName.split('').reverse().join('');

        // Remove punctuation from an string
            const punctuation = '!"#$%&\'() *+,-./:;<=>?@[\\]^_`{|}~';
            const rawString = string;
            const rawLetters = rawString.split('');
            const cleanLetters = rawLetters.filter(function(letter) {
                return punctuation.indexOf(letter) === -1;
            });
            const cleanString = cleanLetters.join('');

            // Regular Expression
                // Match all strings that contain a digit
                /[0123456789]/.test('sting');   // true if the string contains a digit
                /[0-9]/.test('string');
                /\d/.test('string');  // tests for any digit
                /\w/.test('string');  // tests for an alphanumeric character ('word character')
                /\s/.test('string');  // tests for any whitespace character (space, tab, newline, etc)
                /\D/.test('string');  // tests for any character NOT a digit
                /\W/.test('string');  // tests for a non alphanumeric character
                /\S/.test('string');  // tests for a non whitespace character
                /./.test('string');   // tests for any character except for newline
            // This is not a complete list of Regular Expressions

        // Palindrome function -> check if a string is a palindrome
            const palindromes = function(string) {
                const punctuation = '!"#$%&\'() *+,-./:;<=>?@[\\]^_`{|}~';
            
                const rawString = string.toLowerCase();
                const rawLetters = rawString.split('');
                const cleanLetters = rawLetters.filter(function(letter) {
                    return punctuation.indexOf(letter) === -1;
                });
                const cleanString = cleanLetters.join('');
                    console.log(cleanString);
                const reverseString = cleanLetters.reverse().join('');
                    console.log(reverseString);
            
                if (cleanString === reverseString) {
                    return true;
                } else {
                    return false;
                }
            }
            // The following code does the same thing
            const palindromes = function(string) {
                processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
                return (
                  processedString
                    .split("")
                    .reverse()
                    .join("") == processedString
                );
              };

    // Returns the LAST element from an array
        let x = arrayName.pop();

    // Returns the new array length after adding a value
        let x = arrayName.push("newElement");

    // Adds a new element to an array (AT THE BEGINNING) and "unshifts" older elements
        arrayName.unshift("newElement");

    // Returns the new array length
        arrayName.unshift("newElement");

    // Removes the FIRST array element and "shift" all other elements to a lower index
        arrayName.shift();

    // Returns the string that was "shifted out"
        let x = arrayName.shift();

    // Adds a new element to an array (AT THE END)
        arrayName.push("newElement");

    // Appends a new element to an array
        arrayName[arrayName.length] = "newElement";

    // Adds new items to an array
        arrayName.splice(x, y, "newElement1", "newElement2");
        // The first parameter (x) defines the position where new elements should be ADDED (spliced in). The second parameter (y) defines how many elements should be REMOVED). The rest of the parameters ("newElement1", "newElement2") define the new elements to be added.

    // Removes the LAST element from an array
        arrayName.pop();

    // Deletes an element from an array
        delete arrayName[x];
        // * Using `delete` may leave undefined holes in the array. You should use `pop()` or `shift()` instead.

    // Cut a piece of an array and add it into a new array, starting at 'index-number'
        // * The `slice()` method creates a new array. It does not remove any elements from the source array
        let newArray = arrayName.slice(index-number);
    // Cuts out a piece of an array into a new array from the starting argument up to, but not including, the end argument. If the end argument is omitted, slice() will cut out the rest of the array. If no arguments are provided, the default is to start at the beginning of the array and go through to the end. This is an easy way to make a copy of the entire array. 
        let newArray = arrayName.slice(start-argument, end-argument);

    // Change the contents of an array by removing exisiting elements and/or adding new elements. 
        // splice() will return the item selected by the parameters and then delete those items from the original array
        // ** splice() WILL MUTATE THE ORIGINAL ARRAY it is called upon
        arrayName.splice(x, y, item1, item2, itemN);
        // The first parameter (x) defines the position where new elements should be ADDED (spliced in). The second parameter (y) defines how many elements should be REMOVED. If the second parameter (y) is not provided, the default is to remove items through the end. If the rest of the parameters are omitted, no new elemennts will be added.

    // Creates a new array by merging (concatenating) existing arrays
        let newArray = arrayName1.concat(arrayName2);
        let newArray = arrayName1.concat(arrayName2, arrayName3, ..., arrayNameN);
        // * The `concat()` method does not change the existing arrays. It always returns a new array.

    // Creates a new array my concatenating an existing array with a new string
        let newArray = arrayName1.concat("string");

    // Splits the contents of an array using a designator seperator
        // split() is a string method so this only works if the contents of the array are strings that contain ':'
        // if the contents of the array are a 'property : value', then use arrayName[i].propety to access the value
        arrayName.split(':');
        let newArrayName = arrayName.split(':');
        // This creates a new array with new elements based on what was split. To recall the items that were split, use newArrayName[0] for the element before the separator and newArrayName[n] for the element after the separator

    // Sorting an array alphabetically AS STRINGS
        arrayName.sort();
            // By default, sorts values as strings

    // Reversing elements in an array 
        arrayName.reverse();

        // Sort Descending
            arrayName.sort();   // then
            arrayName.reverse();
            // or use the Sort Numerically method

    // Sort an array numerically
    // The 'Compare Function' - define an alternative sort order
        function(a, b) {return a-b};
        // Sends the values to the compare function and sorts the values according to the returned value (negative, zero, positive). If negative, a is sorted before b. If positive, b before a. If 0, no sort.

        // Sort numerically ascending
            arrayName.sort(function(a, b) {return a - b});
            people.sort(function(personA, personB) {return personA.age - personB.age});

        // Sort numerically descending
            arrayName.sort(function(a, b) {return b - a});
            people.sort(function(personA, personB) {return personB.age - personA.age});

        // Sorting in random order
            arrayName.sort(function(a, b) {return 0.5 - Math.random()});
            
        // Fisher-Yates Shuffle method for random sorting
            for (i = arrayName.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * i)
                k = points[i]; 
                points[i] = points [j];
                points[j] = k;
            }
        
    // Find highest value in an array
        arrayName.sort(function(a, b) {return a - b});  // sorts ascending
        arrayName[arrayName.length - 1];                // returns the highest value

    // Find the highest value in an array
    Math.max.apply(null, arraryName);
      // `Math.max.apply(null, [1, 2, 3])` is equivalent to `Math.max(1, 2, 3)`

    // Find highest value in an array
    function arrayMax(arrayName) {
        var len = arrayName.length;
        var max = -Infinity;
        while (len--) {
          if (aarrayNamerr[len] > max) {
            max = arrayName[len];
          }
        }
        return max;
      }

    // Find lowest value in an array
        arrayName.sort(function(a, b) {return a - b});  // sorts ascending
        arrayName[0];                                   // returns the lowest value

    // Find the highest value in an array
    Math.min.apply(null, arraryName);
      // `Math.min.apply(null, [1, 2, 3])` is equivalent to `Math.min(1, 2, 3)`

    // Find lowest value in an array
    function arrayMin(arrayName) {
        var len = arrayName.length;
        var min = Infinity;
        while (len--) {
          if (arrayName[len] < min) {
            min = arrayName[len];
          }
        }
        return min;
      }
    
    // Sorting Object Arrays
        arrayName.sort(function(a, b){return a.objectName - b.objectName});

    // Comparying string properties
        arrayName.sort(function(a, b){
            var x = a.objectName.toLowerCase();
            var y = b.objectName.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });

    // LIFO & FILO - adds to end, pulls from end
        arrayName.push("newElement")
        arrayName.pop();    

    // FIFO & LILO - adds to end, pulls from beginning
        arrayName.push("newElement");
        arrayName.shift();

    // Rotates front to back
        arrayName.unshift();
        arrayName.pop()

    // Rotates back to front
        arrayName.shift();
        arrayName.push();



    // Using a `for` loop on an array
        let fruit, text, fLen, i;
        let fruits = ["Banana", "Orange", "Apple", "Mango"];    
        fLen = fruits.length;

        text = "<ul>";
            for (i = 0; i < fLen; i++) {
                text += "<li>" + fruits[i] + "</li>";
            }
        text += "</ul>";


    // Using `forEach()` on an array
        let fruit, text;
        let fruits = ["Banana", "Orange", "Apple", "Mango"];    

        text = "<ul>";
            fruits.forEach(myFunction);
        text += "</ul>";

        function myFunction(value) {
            text += "<li>" + value + "</li>";
        }

    // To test for an array 
        Array.isArray( arrayName );   // returns true - not supported in older browsers

            // or

        function isArray(x) {
            return x.constructor.toString().indexOf("Array") > -1;
        }           // Always returns true if the object prototype contains the word "Array"

            // or

        arrayName instanceof Array;   // returns true if an object is created by a given constructor

    // Create a new array with all elements that pass the function test - filters an array based on a callback (a function passed to it)
        // Accepts three elements - the first is the current element being processed, the second is the index of that element, the third is the array upon which the filter method is called
    const result = arrayName.filter(function(arg) {
        if(arg.property > x){
            return true;                // return true = keep, or pass through filter
        }
    });
                // As an arrow function
                const result = arrayName.filter(arg => (arg.property > x));
    // Filter films by 'imdbRating' and then map the "Title" and "imdbRating" to a new array
        let filteredList = watchList
                            .filter(film => (parseInt(film["imdbRating"],10) >= 8.0))
                            .map(film => ({title: film["Title"], rating: film["imdbRating"]}));
    // The following is the equivalent of the .filter() method but using a for loop
        let s = [23, 65, 98, 5];
        Array.prototype.myFilter = function(callback) {
            let newArray = [];
            for (let i = 0; i < this.length; i++) {
                if (callback(this[i]) === true) {
                  newArray.push(this[i]);
                };
            }
            return newArray;
        }
        let new_s = s.myFilter(function(item) { return item % 2 === 1; } );

    // The following is the equivalent of the .filter() method but using the forEach() method
        let s = [23, 65, 98, 5];
        Array.prototype.myFilter = function(callback) {
            let newArray = [];
            this.forEach(i => { 
                if(callback(i) === true) { newArray.push(i) } 
            });
            return newArray;
        }
        let new_s = s.myFilter(function(item) { return item % 2 === 1; } );

    // Create a new array populated with the results of calling a provided function on every element in the calling array
        // map() takes three arguments: the currennt element being processed, the index of that element, and the array upon which the map method is called
    const result = arrayName.map(function(arg) {
        return arg * x;
    });
                // As an arrow function
                const result = arrayName.map(arg => arg * 2);
        // .map() is basically the shorthand of a `for` loop passing data into an array. It handles all of the iteration aspects.
        // Create a new array by removing elements from an array of objects
            let ratings = watchList.map(film => ({      // film is the arg name used within the function
                title: film["Title"],                   // use barckets to select the property name if 
                rating: film["imdbRating"]              // the property is a string
            }));
        // The following is the equivalent of the .map() method but using a for loop
            let s = [23, 65, 98, 5];
            Array.prototype.myMap = function(callback) {
                let newArray = [];
                for (let i = 0; i < this.length; i++) {
                    newArray.push(callback(this[i]));
                }
                return newArray;
            }
            let new_s = s.myMap(function(item) { return item * 2; });
        // The following is the equivalent of the .map() method but using the forEach() method
        let s = [23, 65, 98, 5];
        Array.prototype.myMap = function(callback) {
            let newArray = [];
            this.forEach(i => newArray.push(callback(i)));
            return newArray;
        }
        let new_s = s.myMap(function(item) { return item * 2; });

    // Sort the elements of an array in place and return the sorted array
        // Sorts by comparing two items and returning 1 or -1
    const result = arrayName.sort(function(firstArg, secondArg){
        if (firstArg.property > secondArg.property) {
            return 1;
        } else {
            return -1;
        }
    });
                // As an arrow function
                const result = arrayName.sort((a, b) => a.property > b.property ? 1 : -1);

    // Execute a reducer function (that you provide) on each element of the array, resulting in single output value
    const result = arrayName.reduce((total, arg) => {
        return total + arg;
    }, 0);                                              // The 0 initiates `total` with a 0

            // Another way of writing a reducer 
            let total = 0;
            for(let i = 0; i < arrayName.length; i++) {
                total += arrayName[i].property;
            }

    // Find the number of instance of an item in an array, when you don't know the what the items are
    const variable = arrayName.reduce(function(obj, item){
        if (!obj[item]) {               // if there are items in the object,
          obj[item] = 0;                // set the count to zero for each item
        }
        obj[item]++;                    // iterate through the items in the object, tally instances
        return obj;
      }, {});
  
      console.log(variable);

















        
// Array Iterations
    // Array iterations methods operate on every array item

    // Call a function nonce for each array element
    arrayName.forEach(myFunction);
    function myfunction (value) {
        txt = txt + value + "<br>";
    }

    // Create a new array by performing a function on each array element
    // Does not execute the function for array elements without values
    // Does not change the original array
    arrayName.map(myFunction);
    function myfunction(value) {
        return value * 2;
    }

    // Create a new array with array elements that passes a test
    arrayName.filter(myFunction);
    function myfunction(value) {
        return value > x;
    }

    // Run a function on each array element to produce (reduce it to) a single value
    // Works from left-to-right in the array - see also `reduceRight()`
    // Does not reduce the original array
    arrayName.reduce(myFunction);
    function myFunction(total, value) {
        return total + value;
    }

        // .reduce() can accept an initial value
        arrayName.reduce(myFunction, 100);
        function myFunction(total, value) {
            return total + value;
        }

    // Runs a function on each array element to produce (reduce it to) a single value
    // Works from right-to-left in the array - see also `reduce()`
    // Does not reduce the original array
    arrayName.reduceRight(myFunction);
    function myFunction(total, value) {
        return total + value;
    }

    // Check if all array values pass a test
    arrayName.every(myFunction);
    function myFunction(value) {
        return value < x;
    }

    // Check if some array values pass a test
    arrayName.some(myFunction);
    function myFunction(value) {
        return value > x;
    }

    // Search an array for an element value and return its position
    arrayName.indexOf();
        // Returns -1 if the item is not found
        // If the item is present more than once it returns the position of the first

    // Return the position of the last occurance of the specified element
    arrayName.lastIndexOf();
        // Returns -1 if the item is not found

    // Returns the value of the first array element that passes a test function
    arrayName.find(myFunction);
    function myFunction(value) {
        return value > x;
    }

    // Return the index of the first array element that passes a test function
    arrayName.findIndex();
    function myFunction(value) {
        return value < x;
    }
















// Loops 

    // for Loop
    for (initializer; condition; final-expression) {
        // code to run
    }

    // for Loop on an array
        for (let i = 0; i < arrayName.length; i++) {
            if (i === arrayName.length - 1) {
                info += 'and ' + arrayName[i] + '.';
            } else {
                info += arrayName[i] + ', ';
            }
        }

    // * With any for loop, be sure to increment or decrement the initializer or the for loop will run infinitely. 

    // When using an `if` fuction in a loop, and the condition is met, you can exit a for loop by using the keyword `break;`
        for (let i = 0; i < contacts.length; i++) {
            let splitContact = contacts[i].split(':');
            if (splitContact[0].toLowerCase() === searchName) {
                para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
                break;
            } else {
                para.textContent = 'Contact not found.';
            }
        };

    // When using an `if` function in a loop, and the condition is not yet met, you can use the `continue;` keyword to keep the loop going
        for (let i = 1; i <= num; i++) {
            let sqRoot = Math.sqrt(i);
            if (Math.floor(sqRoot) !== sqRoot) {
                continue;
            }

            para.textContent += i + ' ';
        }

    // while Loop
        initializer
        while (condition) {
            // code to run

            final-expression
        }

    // while Loop on an array
        let i = 0;

        while (i < cats.length) {
            if (i === cats.length - 1) {
                info += 'and ' + cats[i] + '.';
            } else {
                info += cats[i] + ', ';
            }

            i++;
        }

    // do...while Loop
        initializer
        do {
            // code to run

            final-expression
        } while (condition)

    // do...while Loop on an array
        let i = 0;

        do {
            if (i === cats.length - 1) {
                info += 'and ' + cats[i] + '.';
            } else {
                info += cats[i] + ', ';
            }

            i++;
        } while (i < cats.length);

    // Countdown Loop using for Loop
        const output = document.querySelector('.output');
        output.innerHTML = '';
        
        for(i = 10; i >= 0; i--){
            let para = document.createElement('p');
            
            if (i === 10){
                para.textContent = "T-minus " + i;
            } else if (i !== 10 && i > 0){
                para.textContent = i;
            } else {
                para.textContent = "BLAST OFF!";
            }

            output.appendChild(para);
        }
    
    // Countdown Loop using while Loop
        const output = document.querySelector('.output');
        output.innerHTML = '';

        let i = 10;

        while(i >= 0) {
            let para = document.createElement('p');
            
            if(i === 10) {
                para.textContent = 'Countdown ' + i;
            } else if(i === 0) {
                para.textContent = 'Blast off!';
            } else {
                para.textContent = i;
            }

            output.appendChild(para);

            i--;
        }

    // Building a guest list and no-entry list from an array
        const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
        
        const admitted = document.querySelector('.admitted');
        const refused = document.querySelector('.refused');
        admitted.textContent = 'Admit: ';
        refused.textContent = 'Refuse: ';

        let i = 0;

        do {
            
            if(people[i].toLowerCase() === "phil" || people[i].toLowerCase() === "lola") {
                refused.textContent += people[i] + ", ";
            } else {
                admitted.textContent += people[i] + ", ";
            }

            i++;

        } while( i < people.length );

        refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + ".";
        admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + ".";

    // Printing array items to a <li>   ?????
        let myArray, text, i;
        let myArray = ['1', '2', '3', '4', '5'];
        let list = document.createElement('ul');

        text = '<ul>';
            for (i=0; i < myArray.length; i++){
                // list.textContent = myArray[i];
                text += "<li>" + myArray[i] + "</li>";
            }
        text += '<ul>';

        const section = document.querySelector('section');
        section.appendChild(list);

    // Searching for a name
        let name = 'Mustafa';
        let para = document.createElement('p');
        let phonebook = ['Chris:1549', 'Li Kang:9634', 'Anne:9065', 'Francesca:3001', 'Mustafa:6888', 'Tina:4312', 'Bert:7780', 'Jada:2282']

        btn.addEventListener('click', function(){
            // let searchName = input.value.toLowerCase();
            let searchName = name.toLowerCase();
            // input.value = '';
            // input.focus();
            let i = 0;
            do {
                
                let bookEntry = phoneBook[i].split(':');
                
                if (searchName === bookEntry[0].toLowerCase()){
                    para.textContent = 'Name: ' + bookEntry[0] 'Tel: ' + bookEntry[1];
                    break;
                } else {
                    para.textContent = 'No enter found';
                }

                i++;

            } while (i < phoneBook.length);
        });

    // Print numbers based on a math calculation
        let i = 500;
        let para = document.createElement('p');

        function isPrime(num) {
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
            return false;
            }
        }
        return true;
        }

        while (i > 1) {

            if (i.isPrime() === false) {
                continue; 
            } else {
                para.textContent = i + ', ';
            }

            i--;
        }
         
        let section = document.querySelector('section');
        section.appendChild(para);
    















// String Manipulation

    // Convert a string to an array using a specified separator 
    stringName.split(",");
        // If the separator is omitted, the returned array will contain the whole string in index[0]
        // If the separator is '', the returned array will be an array of single characters

    // Make a string ALL CAPS
    stringName.toUpperCase();

    // Make a string lowercase
    stringName.toLowerCase();

    // Capitalize the first letter of a string
    stringName.charAt(0).toUpperCase() + stringName.substr(1).toLowerCase();

    // Remove whitespace
    stringName.trim();
        // If trim() is no supported, use replace()


    // Get the length of a string
    let stringName = 'string';
    stringName.length;

    // Return a character inside a string
    let stringName = 'string';
    stringName[x];

    // Return the last character in a string
    let stringName = 'string';
    stringName[stringName.length - 1];


    // Identifying a substring start point
    stringName.indexOf('substring');

        // Do x is substring doesn't exist
        if (stringName.indexOf('substring') !== -1){
            // code if substring doesn't exist
        }

    // Identifies the start point of the last occurance of a substring and searches backward
    stringName.lastIndexOf('substring');

        // A starting point can be added to either indexOf() or lastIndexOf()
        stringName.indexOf('substring', starting-index-value);
        stringName.lastIndexOf('substring', starting-index-value);
            // lastIndexOf() searches backward

    // Locate the index of a string
    stringName.search('substring-to-find');
        // Search does NOT take a start point


    // Concatenating strings
    stringName.concat('', stringName2);
        // Can be used instead of a + operator
        stringName + '' + stringName2;


    // Extracting a substring
        // * slices up to, but not including, the index-end value
    stringName.slice(index-start, index-end);
        // Extract a substring starting at
        stringName.slice(index-start);
            // If a negative value, position is counted from the end
            // If no second value the rest of the string is sliced 

    // Extracting a substring
        // * slices up to, but not including, the index-end value
    stringName.substring(index-start, index-end);
        // Does NOT accept negative values

    // Extracting a substring
    stringName.substr(index-start, length);
        // If negative, position counts from the end


    // Replace a substring
    stringName.replace('substring-to-replace', 'replacing-substring');
        // By default, only the fist match is replaced. To replace ALL matches:
        stringName.replace(/substring-to-replace/g, 'replacing-substring');
            string.replace(/[^A-Za-z]/g, "");
        // It is CASE SENSITIVE. To make case insensitive
        stringName.replace(/substring-to-replace/i, 'replacing-substring');
        // The above creates a new string. To replace the original stringName use the following:
        let stringName = stringName.replace('substring-to-replace', 'replacing-substring');

    // To reverse the contents of an array
    stringName.reverse();
    
    // To reverse a string and have it print backwards
        stringName.split('').reverse().join('');

    // Remove punctuation from an string
        const punctuation = '!"#$%&\'() *+,-./:;<=>?@[\\]^_`{|}~';
        const rawString = string;
        const rawLetters = rawString.split('');
        const cleanLetters = rawLetters.filter(function(letter) {
            return punctuation.indexOf(letter) === -1;
        });
        const cleanString = cleanLetters.join('');

        // Regular Expression
            // RegEx Literals are enclosed between to forward slashes
            const regEx = /ab+c/;
                // The code above matches the character 'a', followed by one or more instances of the character 'b', followed by the character 'c'
            // You can write a regular expression string and pass it as an argument to the RegExp constructor
            const re = new RegExp('ab+c');
                // The syntax used to create a RegExp object is as follows:
                new RegExp(pattern, [flags])
                // To create a regular expression literal, use the following syntax
                /patter/flags 
                    // Flags can have a combination of the following values
                        g // Golbal match
                        i // Ignore case
                        m // Multiline. Treates beginning (^) and end ($) characters as working over multiple lines
                        u // Unicode. Treat pattern as a sequennce of unicode code points
                        y // Sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string. 

            // Special Characters in Regular Expressions
                // Character Classes - used to match a single character
                    // Enclosed in [] - specify what you want your expression to match ex [a-z]
                    // Predefined - backslash (\) character followed by a letter
                        . // matches any single character, except line terminators (ie, newline)
                        \d // matches a single digit character (ie, [0-9])
                        \D // matches a single non-digit character (ie, [^0-9])
                        \w // matches a single alphanumeric word character, including underscore (ie, [A-Za-z0-9_])
                        \W // matches a single non-word character (ie, [^A-Za-z0-9_])
                        \s // matches a single whitespace character, including space ( ), tab(\t), form feed, line feed, and other Unicode spaces
                        \S // matches a single non-whitespace character (ie, [^\w])
                // Character Sets
                    // Any characters within the [] will be matched (ie [a-z])
                    // The carat (^) symbol will cause the set to match anything other than what is enclosed in the [] (ie [^a-z])
                    // The pipe symbol (|) will match one character of the other (ie, [a|b])
                        ^ // matches beginning of input. If multiline flag is set to true, also matches immediately after a line break character
                        $ // matches end of input. If the multiline flag is set to true, also matches immediately before a line break character
                        \b // matches a zero-width word boundary, such as between a letter and a space
                        \B // matches a zero-width non-word boundary, such as between two letters or between two spaces
                    // Grouping and back references
                        (a) // matches 'a' and remembers the match. Called capturing groups.
                        (?:a) // matches 'a' but does not remember the match. Called non-capturing groups
                        \n // n is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression
                    // Quantifiers
                        a* // matches the preceding item 'a', 0 or more times
                        a+ // matches the preceding item 'a', 1 or more times
                        a? // matches the preceding item 'a', 0 or 1 time
                        a{n} // n is a positive integer. Matches exactly n occurences of the preceding item 'a'
                        a{n, } // n is a positive integer. Matches at least n occurences of the preceding item 'a'
                        a{n,m} // n and m are positive integers. Matches at least n and at most m occurences of the preceding item 'a'
                    // Assertions 
                        a(?=b) // matches 'a' only if 'a' is followed by 'b'
                        a(?!b) // matches 'a' only if 'a' is NOT followed by 'b'
                // Regular expressions are used with the RegExp methods `test` and `exec`, and with the String methods `match`, 'search', 'split', 'replace'
                    // The `test` Method executes a search for a match between a regular expression and a specified string and returns a true or false. 
                        // Test whether 'learn' is contained at tthe very beginning of a string
                        let re = /^learn/;
                        let str1 = 'learn regular expressions';
                        let str2 = 'write regular expressions';
                            console.log(re.test(str1)); // true
                            console.log(re.test(str2)); // false
                        // The following are various test expressions
                        /[0123456789]/.test('string'); // true if the string contains a digit
                        /[0-9]/.test('string'); // true if the string contains a digit
                        /\d/.test('string');  // tests for any digit
                        /\w/.test('string');  // tests for an alphanumeric character ('word character')
                        /\s/.test('string');  // tests for any whitespace character (space, tab, newline, etc)
                        /\D/.test('string');  // tests for any character NOT a digit
                        /\W/.test('string');  // tests for a non alphanumeric character
                        /\S/.test('string');  // tests for a non whitespace character
                        /./.test('string');   // tests for any character except for newline
                            // This is not a complete list of Regular Expressions
                    // The `exec` Method executes a search for a match in a specified string and returns a result array or null
                        // Match 'quick brown' followed by 'jumps', ignoring characters in between; remember 'brown' and 'jumps'; ignore case
                        let re = /quick\s(brown).+?(jumps)/ig;
                        let str = 'The Quick Brown Fox Jumps Over The Lazy Dog.';
                        let res = re.exec(str);
                            console.log(res);
                            // The result object contains the following information:
                            // 1. [0] is the full string of characters matched
                                console.log('string of characters matched = ' + res[0]);
                            // 2. [1], ...[n] is the parenthesized substring matches, if any. The number of possible parenthesized substrings is unlimited. 
                                console.log('first parenthesized substring match = ' + res[1]);
                                console.log('second parenthesized substring match = ' + res[2]);
                            // 3. index is the 0-based indes of the match in the string
                                console.log('index of the match = ' + res.index);
                            // 4. input is the original string
                                console.log('original string = ' + res.input);
                    // The `match` Method retrieves the matches when matching a string against a regular expression
                        // Find 'chapter', followed by `$1$` or more numeric characters, followed by a decimal point, followed by a zero or more numeric characters, and use a flag to specify that the results are *case-insensitive*.
                        let re = /see (chapter \d+(\.\d)*)/i;
                        let str = 'For more info, see Chapter 3.4.5.1 and CHAPTER 2.3';
                            console.log(str.match(re));
                    // The `search` Method executes a search for a match between a regular expression and this String object. If successful, search() returns the index of the first match of the regular expression inside the string. Otherwise, it returns -1.
                        // Check whether or not a string contains the word 'learn'
                        const re = /learn/;
                        const str1 = 'Today, we\'ll learn about regular expressions.';
                            console.log('A search for', re, 'returns', str1.search(re), '\n');
                            // 'A search for /learn/ returns 13
                    // The `split` Method splits a String object into an array of strings by separating the string into substrings. Separator specifies the character(s) to use for separating the string. The separator is treated as string or a regular expression. If separator is omitted, the array returned contains one elemenet consisting of the entire string. If separator is an empty string (''), str is converted to an array of characters
                        // Split a name string at the space separating the first and last names
                        const name = 'Julia Roberts';
                        const res = name.split(' ');
                        console.log('The split array:', res); // The split array: ['Julia', 'Roberts']
                        console.log('First name:', res[0]);   // First name: Julia
                        console.log('Last name:', res[1]);    // Last name: Roberts
                    // The `replace(pattern, replacement)` Method returns a new string where some (or all) occurrences of a matched 'pattern' have been replaced with a 'replacement' substring
                        // 'patterns' can be a string or a RegExp object to match against the calling string
                        // 'replacement' can be a substring to replace the match with, or it can be a function to invoke that genereate the replacement substring
                        // Replace any occurence of the substring 'RegExp' with 'Regular Expression'
                        const re = /RegExp/;
                        const myString = 'We\'re learning about RegExps.';
                        const replacementString = 'Regular Expression';
                        console.log(myString);
                        console.log(myString.replace(re, replacementString));
                // HOW TO WRITE A REGEXP
                    // 

                    function regexVar(str) {
                        //  ^ => first item matches:
                        // () => stores matching value captured within
                        // [aeiou] => matches any of the characters in the brackets
                        // . => matches any character:
                        // + => for 1 or more occurrances (this ensures str length > 3)
                        // \1 => matches to previously stored match. 
                            // \2 looks for matched item stored 2 instances ago 
                            // \3 looks for matched item stored 3 ago, etc
                        //  $ ensures that matched item is at end of the sequence
                        
                            let re = /^([aeiou]).+\1$/;
                            return re;
                        }

    // Palindrome function -> check if a string is a palindrome
        const palindromes = function(string) {
            const punctuation = '!"#$%&\'() *+,-./:;<=>?@[\\]^_`{|}~';
        
            const rawString = string.toLowerCase();
            const rawLetters = rawString.split('');
            const cleanLetters = rawLetters.filter(function(letter) {
                return punctuation.indexOf(letter) === -1;
            });
            const cleanString = cleanLetters.join('');
                console.log(cleanString);
            const reverseString = cleanLetters.reverse().join('');
                console.log(reverseString);
        
            if (cleanString === reverseString) {
                return true;
            } else {
                return false;
            }
        }
        // The following code does the same thing
        const palindromes = function(string) {
            processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
            return (
              processedString
                .split("")
                .reverse()
                .join("") == processedString
            );
          };
    
    // Extract string characters from a specific position
    stringName.charAt(index)
    ${stringName.charAt(index)}

    // Return an integer between 0 and 65535 representing the UTF-16 code unit at the given index
    stringName.charCodeAt(index)
    ${stringName.charCodeAt(index)}

    // Return a string created from the specified sequence of UTF-16 code units
    stringName.fromCharCode(x,y,z)      // will output the characters in a string like a word

        // Caesar Cypher
        const caesar = function(string, shift) {
            return string
            .split('')
            .map(letter => shiftChar(letter + shift))
            .join('');
        }
        
        const codeSet = code => (code < 97 ? 65 : 97);
        
        const mod = (n, m) => (n % m + m) % m;
        
        shiftChar(letter, shift) {
            const code = charCodeAt();
        
            if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
                return string.fromCharCode(
                    mod(code + shift - codeSet(code), 26) + codeSet(code)
                );
            }
            return char;
        };

    //












// Applied Coding
    
    // Simple calculator
    let sum = 0;
    while (true) {
        let value = +prompt("Enter a number", '');
        if (!value) break;
        sum += value;
    }
    alert( 'Sum: ' + sum);

    // Flag an occurance
    for (let i = 0; i < 10; i++);{}
        if (i % 2 == 0) continue;
        alert(i);
    }

    // Calculator Functions for Arrays
        // Add
        function add(array) {return array.reduce((total,arg) => total + arg, 0)};

        // Subtract
        function subtract(array) {return array.reduce((total,arg) => total - arg, 0)};

        // Sum
        function sum(array) {return array.reduce((total,arg) => total + arg, 0)};

        // Multiply
        function multiply(array) {
            let total = 1;
            for (i = 0; i < array.length; i++){
                total *= array[i];
            }
            return total;
        };
            // or
        function multiply (array) { return array.reduce((total,args) => total * args, 1)};

        // Power
        function power(a, b) {
            return Math.pow(a, b);
        };

        // Factorial
        function factorial (num) {
            if (num === 0) return 1;
            let total = 1;
            for(let i = num; i > 0; i--) {
                total *= i;
            }
            return total;
        }

    // Fibonacci Sequence Calculator
    const fibonacci = function(n) {
        let fibArray = [0, 1];
        if (n > 0){
            for (i = 2; i <= n; i++){
                fibArray[i] = (fibArray[i-2] + fibArray[i-1]);
                fibArray.push(fibArray[i]);
            }
            return fibArray[n]; 
        } else {
            return 'OOPS';
        }  
    }

    // Removing / filtering vowels from a string
    function disemvowel(str) {
        const regex = 'aeiouAEIOU';
        
        return str.split('')
                  .filter(function(letter) {return regex.indexOf(letter) === -1})
                  .join('');
      }
            // Other solution
            function disemvowel(str) {
                return str.replace(/[aeiou]/gi, '');
              }
            
    // Remove first and last characters from a string
    function removeChar(str){
        return str.split('')
                  .slice(1,str.length-1)    // returns everything from [1] to [length-1]
                  .join('');
        };
            // Other solution
            function removeChar(str){return str.slice(1, -1);};
            // OR
            const removeChar = str =>  str.slice(1, -1)










// Does this anagram function even work?
function stringAnagram(dictionary, query) {
    for (let q = 0; q < query.length-1; q++){
        const quer = query[q].split('').sort().join('');       

        for (let d = 0; d < dictionary.length-1; d++){
            const dict = dictionary[d].split('').sort().join('');
            let count = 0;
            if (dict === quer) {
                count++;
            }
        }
        let tally = [];
        tally[q] = count;
    }
    console.log( tally );
}