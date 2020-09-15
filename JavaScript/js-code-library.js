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
        let beagle = new Dog("Snoopy");
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

    // Use 'hasOwnProperty' or the 'in' to check whether or not an object as a property within it
    Array.hasOwnProperty("property");   // Returns true if the property is present
    "property" in Array;    // Returns true if the property is present
        // Check if everyone is present in the classroom
            let users = {
                Alan: { age: 27, online: true },
                Jeff: { age: 32, online: true },
                Sarah: { age: 48, online: true },
                Ryan: { age: 19, online: true }
            };
            function isEveryoneHere1(obj) {
                return ((obj.hasOwnProperty("Alan") && obj.hasOwnProperty("Jeff") && 
                         obj.hasOwnProperty("Sarah") && obj.hasOwnProperty("Ryan")) ? true : false); 
            }
            function isEveryoneHere2(obj) {
                return ["Alan", "Jeff", "Sarah", "Ryan"].every(name => obj.hasOwnProperty(name)); 
            }
            console.log(isEveryoneHere1(users));    // Returns true
            console.log(isEveryoneHere2(users));    // Returns true
    // Use a `for...in` loop to iterate through all the keys within an object
    // NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the realtive order in which it appears, is irrelevant when nreferencing or accessing that key.
            for (let user in users) {
                console.log(user);
            } // logs: "Alan", "Jeff", "Sarah", "Ryan"
        // Use a 'for...in' statment within a function to loop through the users object passed into the function and return the number of users whose 'online' property is set to 'true'. 
            function countOnline(usersObj) {
                let count = 0;
                for (let user in usersObj) {
                    if (usersObj[user].online === true) {   // syntax is similar to an array
                        count++
                    }
                }
                return count;
            }
    // Use the `Object.keys()` method to gennerate an array which contains all the keys stored in an object. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array.
        // Write a function so that it returns an array containing all the properties in the object it receives as an argument
            let users = {
                Alan: { age: 27, online: false },
                Jeff: { age: 32, online: true },
                Sarah: { age: 48, online: false },
                Ryan: { age: 19, online: true }
            };
            function getArrayOfUsers(obj) {
                return Object.keys(obj);
            }
            console.log(getArrayOfUsers(users));    // Returns ["Alan", "Jeff", "Sarah", "Ryan"]
















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
        // JS's default sorting method is by string Unicode point value, which may return unexpected results. It is important to provide a callback function to specify how to sort the array items. When nsuch a callback function (normally called a 'compareFunction'), is supplied, the array elements are sorted according to the return value of the 'compareFuntion'
            // If 'compareFunction(a,b)' returns a value less than 0 for two elements 'a' and 'b', then 'a' will come before 'b'. 
            // If 'compareFunction(a,b)' returns a value greater than 0 for the two elements 'a' and 'b', then 'b' will come before 'a'. 
            // If 'compareFunction(a,b)' returns a value equal to 0 for two elements 'a' and 'b', then 'a' and 'b' will remain unchanged. 
        // sort() will change the order of the elements in the orign array (it mutates the array in place). One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice() and concat() return a new array), then run the sort() method. 
        const result = arrayName.sort(function(firstArg, secondArg){
            if (firstArg.property > secondArg.property) {
                return 1;
            } else {
                return -1;
            }
        });
            // As an arrow function
            const result = arrayName.sort((a, b) => a.property > b.property ? 1 : -1);
        // An ascending order funtion
        function ascentingOrder(arr) {
            return arr.sort(function(a, b) { return a - b; });
        }
        ascentingOrder([1,5,2,3,4]);    // returns [1,2,3,4,5]
        // An alphabetical sorting function
        function sortAlpha(arr) {
            return arr.sort(function(a, b) {
                return a === b ? 0 : a < b ? -1 : 1;
            });
        }
        sortAlpha(['l', 'h', 'z', 'b', 's']);    // returns ['b', 'h', 'l', 's', 'z']
        // A reverse alphabetical sorting function
        function reverseAlpha(arr) {
            return arr.sort(function(a, b) {
                return a === b ? 0 : a < b ? 1 : -1;
            });
        }
        reverseAlpha(['l', 'h', 'z', 'b', 's']);    // returns ['z', 's', 'l', 'h', 'b']
        // Return a new array and then sort it
        let globalArray = [5,6,3,2,9];
        function nonMutatingSort(arr) {
            return arr.slice().sort((a,b) => {
                return a < b ? -1 : 1;
            })
        }


    // Execute a reducer function (that you provide) on each element of the array, resulting in single output value
    const result = arrayName.reduce((total, arg) => {
        return total + arg;
    }, 0);                                              // The 0 initiates `total` with a 0

            // Another way of writing a reducer 
            let total = 0;
            for(let i = 0; i < arrayName.length; i++) {
                total += arrayName[i].property;
            }

    // reduce() Method to Analyze Data
            // Both filter() and map() cann be derived as special applications of reduce() 
        // reduce() iterates over each item in nan array and returnns a single value (ie, string, number, object or array). This is achieved via a callback functionn that is called on each iteration.
        // reduce() accepts 4 arguments
            // the accumulator - gets assigned the return value of the callback function from the previous iteration 
            // the current element being processed
            // the index of that element
            // the array upon which reduce() is called
        // reduce() has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then nthe first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.
            const users = [
                { name: 'John', age: 34 };
                { name: 'Amy', age: 20 };
                { name: 'camperCat', age: 10 };
            ];
            const sumOfAges = user.reduce((sum, user) => sum + user.age, 0);
            console.log(sumOfAges); // 64
        // An object can be returned containing the names of the users as properties with their ages as values. 
        const users = [
            { name: 'John', age: 34 };
            { name: 'Amy', age: 20 };
            { name: 'camperCat', age: 10 };
        ];
        const usersObj = users.reduce((obj, user) => {
            obj[user.name] = user.age;
            return obj;
        }, {});
        console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10}
        

        // Find the number of instance of an item in an array, when you don't know the what the items are
        const variable = arrayName.reduce(function(obj, item){
            if (!obj[item]) {               // if there are items in the object,
            obj[item] = 0;                // set the count to zero for each item
            }
            obj[item]++;                    // iterate through the items in the object, tally instances
            return obj;
        }, {});
        console.log(variable);

        // Find the average imdbRating of Christopher Nolan films in an array named watchList
        function getRating(watchList){
            let averageRating;
            averageRating = watchList.filter(film => {
              if (film["Director"] === "Christopher Nolan") { 
                return film;
              };
            })
            .map(film => ( 
                parseFloat(film["imdbRating"],10) 
            ))
            .reduce((sum, rating, index, array) => {
              sum += rating;
              if (index === array.length-1){
                return sum / array.length;
              } else {
                return sum;
              }
            },0);
            return averageRating;
        }

    // The split() method splits a string into ann array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. 
        // If the delimiter is a space (" "), you get an array of words.
        // If the delimiter is an empty string (""), you get an array of each character in the string.
            // Split by space (" ")
            let str = "Hello World";
            let bySpace = str.split(" ");   // Sets bySpace to ["Hello", "World"]
            // Split by digits using a regular expression
            let otherString = "How9are7you2today";
            let byDigits = otherString.split(/\d/);   // Sets byDigits to ["How", "are", "you", "today"]
            // Split into array of words containing no punctuation
            function splitify(str) {
                return str.split(/\W/); 
                // `/\W/` tests for any non-alphanumeric character 
            }
            splitify("Hello World,I-am code");

    // The join() method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.
        let arr = ["Hello", "World"];
        let str = arr.join(" ");    // Sets str to "Hello World"
        // Make a sentence from the words in the string str
        function sentensify(str) {
            return str.split(/\W/).join(" ");
        }
        sentensify("May-the-force-be-with-you");
    
    // Convert Strings to URL Slugs using Functional Programming
        // Many content management sites (CMS) have the titles of a post added to aprt of the URL for simple bookmarking purposes. For example, if you write a Medium post titled "Stop Using Reduce", it's likely the URL would have some form of the title string in it (".../stop-using-reduce").
        function urlSlug(title) {
            return title.toLowerCase()
            .trim()         // trim out excessive spaces between words
            .split(/\s+/)   // split on whitespace
            .join("-")      // join with hyphens
        }

    // The every() method is used to check every instance in an array against a condition. Returns Boolean.
        // Check if every element in an array is less than 10
        let numbers = [1,5,8,0,10,11];
        numbers.every(function(currentValue) {
            return currentValue < 10;
        });         // returns false because not every value is less than 10
        // Check if every instance of an array is a positive number
        function checkPositive(arr) {
            return arr.every(num => (num > 0));
        }
        checkPositive([1,2,3,-4,5]);    // returns False
        
    // The some() method is used to check if ANY instance in an array passes a conditional test
        // Check if any instance is less than 10
        let numbers = [10,50,8,220,110,11];
        numbers.some(num => (num < 10));    // returns True
        // Check if any element in arr is positive
        function checkPositive(arr) {
            return arr.some(num => (num > 0));
        }

    // Introduction to Currying and Partial Application
        // The ARITY of a function is the number of arguments it requires.
        // CURRYING a function means to convert a function nof N arity into N functions of arity 1. In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on. 
            // Un-curried function
            function unCurried(x, y) {
                return x + y;
            } 
            // Curried function
            function curried(x) {
                return function(y) {
                    return x + y;
                }
            }
            // Alternative using ES6
            const curried = x => y => x + y
            curried(1)(2)   // Returns 3
        // This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.
            // Call a curried function in parts
            let funcForY = curried(1);
            console.log(funcForY(2));   // Prints 3
        // Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
            // Impartial function
            function impartial(x,y,z) {
                return x + y + z;
            }
            let partialFn = impartial.bind(this, 1, 2);
            partialFn(10);  // Returns 13
        // Write a function that uses currying to add parameters x, y, and z
        function add(x) {
            return function(y) {
                return function(z) {
                    return x + y + z;
                };
            }          
        }
        add(10)(20)(30);

// Arguments Object
    // The arguments[] object is an Array-like object accessible inside functions that contains the values of the arguments passed to that funcion.
        // "Array-like" means that arguments[] has a .length property and properties indexed from zero, but it does NOT have Array's built-in methods like .forEach(), or .map() 
        function func1(a, b, c) {
            console.log(arguments[0]);      // first argument. expected output: 1
            console.log(arguments[1]);      // second argument. expected output: 2
            console.log(arguments[2]);      // third argument. expected output: 3
        }
        func1(1, 2, 3);
    // The arguments[] object is a local variable available within all non-arrow functions. You can refer to a funnction's arguments inside that function by using its arguments[] object. It has entries for each argument the function was called with, with the first entry's index at 0. 
    // Each argument cann be set or reassigned
        arguments[1] = 'new value';
    // The arguments[] object lacks all Array properties except for .length
        for (let i = 0; i < arguments.length; i++) {}
    // It can be converted into an array
        var args = Array.prototype.slice.call(arguments);
        // Using an array literal is shorter than above but allocates an empty array
        var args = [].slice.call(arguments); 
    // You can use the Array.from() method or spread syntax to convert arguments[] to a real Array.
        let args = Array.from(arguments);
        // or
        let args = [...arguments];
    // THIS IS ALL DONE WITHIN A FUNCTION
    // The arguments[] object is useful for functions called with more arguments than the are formally declared to accept. This technnique is useful for functions that can be passed a variable number of arguments, such as Math.min(). 
        // This example funnctionn accepts any number of string arguments and returnns the longest one:
            function longestString() {
                var longest = '';
                for (var i=0; i < arguments.length; i++) {
                    if (arguments[i].length > longest.length) {
                        longest = arguments[i];
                    }
                }
                return longest;
            }
    // You can use arguments.length to count how many arguments the function was called with. If you instead want to count how many parameters a function is declared to accept, inspect that function's length property.
        // A function's .length property indicates the number of parameters expected by the function
            function func1() {}
            vunction func2(a, b) {}
            console.log(func1.length);  // expected output: 0
            console.log(func2,length);  // expected output: 2
    // The `typeof` operator returns 'object' when used with arguments[]
        console.log(typeof arguments);  // 'ojbect'
    // The type of individual arguments can be deteremined by indexing arguments[]
        console.log(typeof arguments[0]);  // returns the type of the first argument
    // The `arguments.callee` property references the currently executing function that the arguments belong to. The .callee property is forbidden in strict mode
    // The `arguments.length` property is the number of arguments that were passed to the function
    // The `arguments[@@iterator]` returns a new Array iterator object that contains the values for each index in arguments[]
          















        
// Array Iterations
    // Array iterations methods operate on every array item

    // Call a function once for each array element
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
    // Turn a variable to a RegExp. Flags are added in the second argment.
        var regExp = new RegExp(`${before}`, 'i');

    // Regular Expressions are special strings that represent a search patter. Also know as "regex" or "regexp", they help programmers match, search, and replace text.
    // Regex literals are enclosed between two forward slashes
        let regex = /search/;
    // One way to use a regex is with the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns 'true' or 'false' if your pattern finds something or not.
    // To use the .test() method, you call it on the regex variable and pass it the string as its argument
        let testStr = "freeCodeCamp";
        let testRegex = /Code/;
        testRegex.test(testStr);    // Returns true
    // Capitalization matters when using regex. "Kevin" is not the same as "kevin" or "KEVIN"
    // You can search for multiple patterns by using the 'alternation' or 'OR' operator (|). This operator matches patters before or after it.
        let regex = /yes|no/;   // searches for 'yes' or 'no'
        let regex = /yes|no|maybe/;   // searches for 'yes', 'no' or 'maybe'
    // To ignore letter case (uppercase or lowercase) use the 'i' flag by appending it to the regex
        let regex = /ignorecase/i;
    // Use the .match() method to extract the actual matches you find. Apply the method on a string and pass in the regex inside the parenthese
        let ourStr = "Regular expressions";
        let ourRegex = /expressions/;
        ourStr.match(ourRegex);     // Returns ["expressions"]
        // Note that the .match() syntax is the 'opposite' of the .test() syntax
        'string'.match(/regex/);
        /regex/.test('string');
    // Search or extract a pattern more than once using the 'g' flag
        let testStr = "Repeat, Repeat, Repeat";
        let ourRegex = /Repeat/g;
        testStr.match(ourRegex);    // Returns ["Repeat, Repeat, Repeat"]
    // You can have multiple flags on the same regex
        let complexRegex = /search/gi;
    // Use the wildcard character (.) will match any one character. You can use the wildcard character just like any other character in the regex. If you want to match "hug", "huh", "hut", and "hum", you can use the regex /hu./ to match all four words
        let humStr = "I'll hum a song";
        let hugStr = "Bear hug";
        let huRegex = /hu./;
        huRegex.test(humStr);   // Returns true
        huRegex.test(hugStr);   // Returns true
    // For multiple string characters with multiple possibilities. Most times, your search will need to be dynamic.
        // Character Classes allow you to search for a literal pattern with some flexibility. Define the group of characters you wish to match by placing them inside square bracket [].
        let vowelRegex = /[aeiou]/gi; // Search for all vowels no matter the case
        let bgRegex = /b[aiu]g/; // Searches for 'bag', 'big' and 'bug'
            // The character class will only match with the characters inside of the square brackets []
            let bigStr = "big";
            let bagStr = "bag";
            let bugStr = "bug";
            let bogStr = "bog";
            let bgRegex = /b[aiu]g/;
            bigStr.match(bgRegex); // Returns ["big"]
            bagStr.match(bgRegex); // Returns ["bag"]
            bugStr.match(bgRegex); // Returns ["bug"]
            bogStr.match(bgRegex); // Returns null
    // Inside a character set, you can define a range of characters to match using a hyphen (-).
        // To match all lowercase letter 'a' through 'e' use [a-e]
            let catStr = "cat";
            let batStr = "bat";
            let matStr = "mat";
            let bgRegex = /[a-e]at/;
            catStr.match(bgRegex); // Returns ["cat"]
            batStr.match(bgRegex); // Returns ["bat"]
            matStr.match(bgRegex); // Returns null
        // Match all letters in the string 'quoteSample'. Be sure to match both upper- and lowercase letters.
            let quoteSample = "The quick brown fox jumps over the lazy dog.";
            let alphabetRegex = /[a-z]/ig;
            let result = quoteSample.match(alphabetRegex);
        // You can also match numbers using character classes []
            let jennyStr = "Jenny8675309";
            let myRegex = /[a-z0-9]/ig;     // note, there is no separator between the ranges
            jennyStr.match(myRegex); // matches all letters and numbers in the string regardless of case
    // Use Negated Character Sets to match all characters that are not listed in the Character Class. To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
        // Match all characters in the string that are NOT vowels, regardless of case
            let simgleVowels = /[^aeiou]/gi; 
            // Note that characters like . ! [ @ / and white space are matched
        // Create a single regex that matches all characters that are not a number or a vowel
            let quoteSample = "3 blind mice.";
            let myRegex = /[^0-9aeiou]/gi; 
            let result = quoteSample.match(myRegex); 
    // The + character allows you to match characters or groups that appear one or more times in a row. This means that it occurs once and may be repeated. 
            let aCheck = /a+/g;
        // The above will return ["a"] from "abc", ["aa"] from "aabc" and ["a", "a"] from "abab". It will not from a match in the string "bcd" since there is no "a".
        // Find matches when the letter "s" occurs one or more times in "Mississippi"
            let difficultSpelling = "Mississippi";
            let myRegex = /s+/g; 
            let result = difficultSpelling.match(myRegex);
    // To match characters that occur zero or more times, use the star or asterisk (*). 
            let soccerWord = "gooooooooal!";
            let gPhrase = "gut feeling";
            let oPhrase = "over the moon";
            let goRegex = /go*/;
            soccerWord.match(goRegex); // Returns ["goooooooo"]
            gPhrase.match(goRegex); // Returns ["g"]
            oPhrase.match(goRegex); // Returns null
        // Match the "A" character immediately followed by zero or more lowercase "a" characters
            let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
            let chewieRegex = /Aa*/;
            let result = chewieQuote.match(chewieRegex);
    // Use the ? character to change a regular expression to 'lazy' regular expression
        // In regular expressions, a 'greedy' match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a 'lazy' match, which finds the smallest possible part of the string that satisfies the regex pattern. 
        // Regular expressions are by default 'greedy' and want to match as large of a string as they possibly can.
            // To find any match that starts with "t", ends with "i" and has some letters in between, used the following regex
                let startTendI = /t[a-z]*i/;
                let word = "titanic";
                let result = word.match(startTendI); // returns ["titani"]
            // Find the first instance of "t", followed by "i", with any combo of letter in between
                let startTendI = /t[a-z]*?i/;
                let word = "titanic";
                let result = word.match(startTendI); // returns ["ti"]
        // PARSING HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine. 
            // Return the HTML <h1> tag and not the text "<h1>Winter is coming</h1>". Remember the wildcard '.' in a regular expression matched any character.
                let text =  "<h1>Winter is coming</h1>";
                let myRegex = /<h.*?>/g;    // matches any <h> tag, opening or closing
                let result = text.match(myRegex);
    // To search for patterns AT THE BEGINNING of strings, place the caret character (^) in front of the character set
            let firstString = "Ricky is first and can be found.";
            let firstRegex = /^Ricky/;
            firstRegex.test(firstString);
            // Returns true
            let notFirst = "You can't find Ricky now.";
            firstRegex.test(notFirst);
            // Returns false
        // Use the caret character in a regex to find "Cal" only in the beginning of the string
            let rickyAndCal = "Cal and Ricky both like racing.";
            let calRegex = /^Cal/; 
            let result = calRegex.test(rickyAndCal);
    // To search for patterns AT THE END of strings, place the dollar sign character ($) at the end of the character set
            let theEnding = "This is a never ending story";
            let storyRegex = /story$/;
            storyRegex.test(theEnding);
            // Returns true
            let noEnding = "Sometimes a story will have to end";
            storyRegex.test(noEnding);
            // Returns false
        // Use the anchor character ($) to match the string "caboose" at the end of the string "caboose"
            let caboose = "The last car on a train is the caboose";
            let lastRegex = /caboose$/; 
            let result = lastRegex.test(caboose);
    // Use `\w` to match all letters and numbers regardless of case, including an underscore 
        // `\w` is equal to matching [a-zA-Z0-9_]
        // To match any duplicate characters, add the plus symbol (+)
            let longHand = /[A-Za-z0-9_]+/;
            let shortHand = /\w+/;
            let numbers = "42";
            let varNames = "important_var";
            longHand.test(numbers); // Returns true
            shortHand.test(numbers); // Returns true
            longHand.test(varNames); // Returns true
            shortHand.test(varNames); // Returns true
        // Use the shorthannd character class `/w` to count the number of alphanumeric characters in various quotes and strings
            let quoteSample = "The five boxing wizards jump quickly.";
            let alphabetRegexV2 = /\w/g; 
            let result = quoteSample.match(alphabetRegexV2).length;
    // Use `\W` to match all non letters and non numbers regardless of case, including an underscore. This is the opposite of `\w`. It will look for symbols and punctuation, including spaces.
        // `\W` is equal to matching [^A-Za-z0-9_]
            let shortHand = /\W/;
            let numbers = "42%";
            let sentence = "Coding!";
            numbers.match(shortHand); // Returns ["%"]
            sentence.match(shortHand); // Returns ["!"]
        // Use the shorthand character class `\W` to count the nnumber of non-alphanumeric characters in nvarious quotes and strings
            let quoteSample = "The five boxing wizards jump quickly.";
            let nonAlphabetRegex = /\W/g; 
            let result = quoteSample.match(nonAlphabetRegex).length;
    // Match all digits using the `\d` shortcut. This is equivalent to [0-9]
        // Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of "6") do not count.
            let movieName = "2001: A Space Odyssey";
            let numRegex = /\d/g; 
            let result = movieName.match(numRegex).length;
    // Match all non digits using the `\D` shortcut. This is equivalent to [^0-9]
        // Use the shorthand character closs for non-digits `\D` to counnt how manny non-digits are in movie titles
            let movieName = "2001: A Space Odyssey";
            let noNumRegex = /\D/g;
            let result = movieName.match(noNumRegex).length;
    // Real World Application
        // Check all the usernames in a database. Below are rules that users have to follow when creating their username
            // 1) Usernames can only use alpha-numeric characters
            // 2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with a number
            // 3) Username letters can be lowercase and uppercase
            // 4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characerts
                let username = "JackOfAllTrades";
                let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
                let result = userCheck.test(username);
    // Search for whitespace using `\s`. This not only matches whitespace, but also carriage return, tab, form feed, and newline characters. Think of it as the character class `[ /r/t/f/n/v]`
            let whiteSpace = "Whitespace. Whitespace everywhere!"
            let spaceRegex = /\s/g;
            whiteSpace.match(spaceRegex);
            // Returns [" ", " "]
        // Change the regex 'countWhiteSpace' to look for multiple whitespace characters in a string.
            let sample = "Whitespace is important in separating words";
            let countWhiteSpace = /\S/g; 
            let result = sample.match(countWhiteSpace);
    // Quantity Specifiers allow you to specify the lower and upper number of patters. Quantity Specifiers are used with curly brackets {}. You put two numbers between the curly brackets - for the lower and upper number of patterns {lower, upper}.
        // Match only the letter 'a' appearing between '3' annd '5' times in the string 'ah'
            let A4 = "aaaah";
            let A2 = "aah";
            let multipleA = /a{3,5}h/;
            multipleA.test(A4); // Returns true
            multipleA.test(A2); // Returns false
        //Change the regex 'ohRegex' to match the entire phrase 'Oh no' only when it has 3-6 letter 'h's
            let ohStr = "Ohhh no";
            let ohRegex = /oh{3,6}\sno/i; 
            let result = ohRegex.test(ohStr);
    // Specify only the lower number of patterns by keeping the first number followed by a comma
        // Match only the string "hah" with the letter 'a' appearing at least 3 times
            let A4 = "haaaah";
            let A2 = "haah";
            let A100 = "h" + "a".repeat(100) + "h";
            let multipleA = /ha{3,}h/;
            multipleA.test(A4); // Returns true
            multipleA.test(A2); // Returns false
            multipleA.test(A100); // Returns true
        // Change the regex 'haRegex' to match the word "Hazzah" only when it has four or more letter 'z's
            let haStr = "Hazzzzah";
            let haRegex = /haz{4,}ah/i; 
            let result = haRegex.test(haStr);
    // To specify a certain number of patterns, just have that one number between the curly brackets
        // Match only the word "hah" with the letter 'a' 3 times
            let A4 = "haaaah";
            let A3 = "haaah";
            let A100 = "h" + "a".repeat(100) + "h";
            let multipleHA = /ha{3}h/;
            multipleHA.test(A4); // Returns false
            multipleHA.test(A3); // Returns true
            multipleHA.test(A100); // Returns false
        // Change the regex 'timRegex" to match the word "Timer" only when it has four letter 'm's
            let timStr = "Timmmmber";
            let timRegex = /tim{4}ber/i; 
            let result = timRegex.test(timStr);
    // Specify the possible existence of an element with a question mark (?). This checks for zero or one or the preceding element. You can think of this symbol as saying the previous element is optional.
        // Use the question mark to match the word 'color' even if it is spelled using British English 
            let american = "color";
            let british = "colour";
            let rainbowRegex= /colou?r/;
            rainbowRegex.test(american); // Returns true
            rainbowRegex.test(british); // Returns true
        // Change the regex 'favRegex' to match both the American English (favorite) and the British English (favourite) version of the word
            let favWord = "favorite";
            let favRegex = /favou?rite/i; // Change this line
            let result = favRegex.test(favWord);
    // LOOKAHEADS are patterns that tell JS to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.
        // A POSITIVE LOOKAHEAD will look to make sure the element inn the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched. The rest of the pattern is returned if the negative lookahead part is present. 
        // A NEGATIVE LOOKAHEAD will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present. 
            let quit = "qu";
            let noquit = "qt";
            let quRegex= /q(?=u)/;  // Return 'q' if 'u' is present
            let qRegex = /q(?!u)/;  // Return 'q' if 'u' is NOT present
            quit.match(quRegex); // Returns ["q"]
            noquit.match(qRegex); // Returns ["q"]
        // A more practical use of lookaheads is to check two or more patterns in one string. 
        // Check a password for between 3 and 6 characters and at least one number
            let password = "abc123";
            let checkPass = /(?=\w{3,6})(?=\D*\d)/;
            checkPass.test(password); // Returns true
        // Use lookaheads in the 'pwRegex' to match passwords that are greater than 5 characters long, do not begin with a number, and have two consectutive digits.
            let sampleWord = "astronaut";
            let pwRegex = /^\D(?=\w{5,})(?=\w*\d\d+)/; 
            let result = pwRegex.test(sampleWord);
    // Use parentheses () to check for groups of characters
        // Find either "Penguin" or "Pumpkin" in a string
            let testStr = "Pumpkin";
            let testRegex = /P(engu|umpk)in/;
            testRegex.test(testStr);
            // Returns true
        // Check for the names "Franklin Roosevelt" or "Eleanor Roosevelt" in a case sensitive manner and make concessions for middle names
            let myString = "Eleanor Roosevelt";
            let myRegex = /(Franklin|Eleanor)\s.*\s*Roosevelt/i; 
            let result = myRegex.test(myString); 
    // Search for repeat substrings using CAPTURE GROUPS. 
        // Parentheses () are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses. To specify where that repeat string will appear, you use a backslash \ and then a number. This number starts at 1 annd increases with each additional capture group you use. 
        // Using the .match() method on a string will return an array with the string it matches, along with its capture group
            // The example below matches any word that occurs twice separated by a space
                let repeatStr = "regex regex";
                let repeatRegex = /(\w+)\s\1/;
                // the above regex literally translates to 'one or more letters, followed by a space, followed by the same letters as were used before
                repeatRegex.test(repeatStr); // Returns true
                repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
            // Use capture groups in 'reRegex' to match numbers that are repeated only three times in a string, each separated by a space
                let repeatNum = "42 42 42";
                let reRegex = /^(\d+)(\s)\1\2\1$/; 
                // \1 repeats the first argument which is the number (\d+), \2 repeats the second argument which is the space (\s), and \1 repeats the first argument again (\d+) again. This creates a string "## ## ##".
                // The caret (^) ensures that the string starts with a number
                // The dollar sign ($) ensures that the string ends with everything listed before, essentially closing off the string 
                let result = reRegex.test(repeatNum);
    // You can search and replace test in a string using .replace() on a string. Searching can be even more powerful when it also changes (or replaces) the text you match. 
        // The first parameter of .replace() is the regex pattern you want to search for.
        // The second parameter of .replace() is the string to replace the match or a function to so something.
            let wrongText = "The sky is silver.";
            let silverRegex = /silver/;
            wrongText.replace(silverRegex, "blue"); // Returns "The sky is blue."
        // You can also access capture groups in the replacement string with dollar signs ($)
            "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');   // Returns "Camp Code"
                // $2 accesses the second capture group (\w+), or "Camp" from the string
                // $1 accesses the first capture group (\w+), or "Code" from the string
                // For this example, the string is effectively reordered
        // Write a regex using three capture groups that will search for each word in the string "one two three". Then update the 'replaceText' variable to replace "one two three" with the string "three two one" and assign the result to the 'result' variable. Make sure you are utilitizing capture groups in the replacement string using the dollar sign($) syntax
            let str = "one two three";
            let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
            let replaceText = "$3 $2 $1"; 
            let result = str.replace(fixRegex, replaceText);
    // Sometimes whiteSpace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
        // Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings. NOTE: the String.prototype.trim() method would work here, but this example should be completed using regular expressions
            let hello = "   Hello, World!  ";
            let wsRegex = /^\s+|\s+$/g; // Looks for 1 or more space at the beginning or the end
                // The g flag looks for all instances, first at the start, then at the back
            let result = hello.replace(wsRegex, ""); // Replace extra space with nothing, ie removes them
        
    // Use the .endsWith() method to check if a string ends with another string or variable (circa, ES2015)
            function confirmEnding(str, target) {
                return str.endsWith(target);
            }
            confirmEnding("Bastian", "n");  // Returns true
        // The same operation as above can be done by creating a new RegExp object and passing it the variable 'target' then adding the '$' to test for the pattern at the end of the string
            function confirmEnding(str, target) {
                let regex = new RegExp(target + "$");   // to add a flag use `new RegExp('string','flag')`
                return regex.test(str);
            }
            confirmEnding("Bastian", "n");  // Returns true

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
        function factorial(num) {
            if (num === 0) {
                return 1;
            } else {
                for (let i = num-1; i > 0; i--) {
                num *= i;
                }
                return num;
            }
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
    
    // Return the length of the longest word in the provided sentence. Your response should be a number.
        function findLongestWordLength(str) {
            return str.split(' ').map(word => word.length).sort((a,b) => (a>b)? 1:-1).pop();
        }
        findLongestWordLength("The quick brown fox jumped over the lazy dog");  // Returns 6
        findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");// Returns 19
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// Basic Algorithm Scripting
    // Return an array consisting of the largest number from each provided sub-array.
        function largestOfFour(arr) {
            let newArray = [];
            for (let i = 0; i < arr.length; i++){
            arr[i].sort((a,b) => (a<b)? -1: 1);
            let highest = arr[i].slice().pop();     // .pop() alone will mutate the original arrays
            newArray.push(highest);
            }
            return newArray;
        }
        largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
            // Returns [ 5, 27, 39, 1001 ]

    // Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a `...` ending.
        function truncateString(str, num) {
            if (str.length > num) {
            return str.slice(0,num).concat('...');
            } else {
            return str;
            }
        }
        truncateString("A-tisket a-tasket A green and yellow basket", 8);   // Returns "A-tisket..."
    
    // Create a function that looks through an array arr and returns the FIRST element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
            function findElement(arr, func) {
                for (let i = 0; i < arr.length; i++) {
                    if (func(arr[i])) {
                        return arr[i]
                    };
                };
            }
            findElement([1, 2, 3, 4], num => num % 2 === 0);    // Returns 2
        // The same task as above can be performed using the .find() function. The .find() method returns the value of the first element in the provided array that satisfies the provided testing function.
            function findElement(arr, func) {
                arr.find(func);
            };
            findElement([1,2,3,4], num => num % 2 === 0);       // Returns 2

    // Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.
        function booWho(bool) {
            if (typeof bool === "boolean") {
                return true;
            } else {
                return false;
            }
        }
        booWho(null);   // Returns false
    
    // Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
        function titleCase(str) {
            return str.split(' ')
                      .map(word => word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase())
                      .join(' ');
        }
        titleCase("I'm a little tea pot");  // Returns "I'm A Little Tea Pot"

    // You are given two arrays and an index. Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.
            function frankenSplice(arr1, arr2, n) {
                let newArr = arr2.slice();
                for (let i = 0; i < arr1.length; i++) {
                    newArr.splice(n+i, 0, arr1[i]);
                }
                return newArr;
            }
            console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));    // Returns [4, 1, 2, 3, 5, 6]
        // The above function can also be done like this
            function frankenSplice(arr1, arr2, n) {
                let newArr = arr2.slice();
                newArr.splice(n, 0, ...arr1);
                return newArr;
            }
            console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));    // Returns [4, 1, 2, 3, 5, 6]
          
    // Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Hint: Try converting each value to a Boolean.
        function bouncer(arr) {
            return arr.filter(value => Boolean(value) === true);
        }
        bouncer([7, "ate", "", false, 9]);

    // Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
        function getIndexToIns(arr, num) {
            arr.splice(1,0,num)
            arr.sort((a,b) => a < b ? -1 : 1); 
            return arr.indexOf(num);
        }
        console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
    
    // Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
            function mutation(arr) {
                let target = arr[0].toLowerCase();
                let test = arr[1].toLowerCase();
                for (let i = 0; i < test.length; i++){
                    if (target.indexOf(test[i]) < 0) {
                        return false
                    };
                }
                return true;
            }
            mutation(["hello", "hey"]);     // Returns false
        // The same task can be performed with the following
            function mutation(arr) {
                return arr[1]
                .toLowerCase()
                .split("")
                .every(function(letter) {
                    return arr[0].toLowerCase().indexOf(letter) != -1;
                });
            }
    // Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
            function chunkArrayInGroups(arr, size) {
                let newArr = [];
                while (arr.length) {
                newArr.push(arr.splice(0, size));
                }
                return newArr; 
            }
            console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
        // The same task can be done using the slice() method
            function chunkArrayInGroups(arr, size) {
                let newArr = [];
                for (let i = 0; i < arr.length; i += size){
                newArr.push(arr.slice(i, i + size));
                }
                return newArr; 
            }
            console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

// Intermediate Algorithm Scripting
    // We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
        function sumAll(arr) {
            return arr.sort((a,b) => (a < b) ? -1 : 1)
                    .reduce((a,b) => {
                        let sum = 0;
                        for (let i = a; i <= b; i++){
                            sum += i;
                        }
                        return sum;
                    });
        }
        sumAll([1, 4]);
    
    // Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. Note: You can return the array with its elements in any order.
            function diffArray(arr1, arr2) {
                var newArr = [];
                for (let i = 0; i < arr2.length; i++){
                    if(arr1.indexOf(arr2[i]) < 0){
                    newArr.push(arr2[i]);
                    }; 
                };
                
                for (let j = 0; j < arr1.length; j++){
                    if(arr2.indexOf(arr1[j]) < 0){
                    newArr.push(arr1[j]);
                    }; 
                };
                return newArr;
            };
            diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
        // The same task as above can be written using the .concat() and .filter() methods
            function diffArray(arr1, arr2) {
                return arr1
                .concat(arr2)
                .filter(item => !arr1.includes(item) || !arr2.includes(item));
            }
            diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

    // You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. Note: You have to use the arguments object.
        function destroyer(arr) {
            for(let i = 1; i < arguments.length; i++){
                for(let j = 0; j < arr.length; j++){
                    if ( arr[j] === arguments[i] ) {
                        arr.splice(j,1);
                        j--;
                    }
                }
            }
            return arr;
        }
        destroyer([3, 5, 1, 2, 2], 2, 3, 5);
    
    // Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
        function whatIsInAName(collection, source) {
            var srcKeys = Object.keys(source);      // Put the source keys into an array for iteration
            return collection.filter(function(obj) {    // Passes first obj in collection for testing
                for (let i = 0; i < srcKeys.length; i++){
                    if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
                    return false;
                    }
                }
                return true;
            });
        }
        whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });      // Returns { "apple": 1, "bat": 2, "cookie": 2 }
    
    // Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
        function spinalCase(str) {
            var regex = /[\s,'_']|(?=[A-Z])/; // Looks for space and underscores, or a capital letter
            return str.split(regex).join('-').toLowerCase();
        }
        spinalCase('This Is Spinal Tap');

    // Pig Latin is a way of altering English Words. The rules are as follows: If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it. If a word begins with a vowel, just add "way" at the end. Note: Input strings are guaranteed to be English words in all lowercase.
        function translatePigLatin(str) {
            var firstCharVowel = new RegExp("^[aeiou]");
            var search4Vowels = new RegExp("[aeiou]","g")
            var notVowel = new RegExp("[^aeiou]");
        
            if (firstCharVowel.test(str) == true) {
                console.log("first letter is a vowel");
                return str.concat("way");
            };
        
            if (firstCharVowel.test(str) == false) {
                console.log("first letter is a consonant");
                if (search4Vowels.test(str) == false){
                    console.log("word condtains no vowels");
                    return str.concat("ay");
                } else {
                    let strArray = str.split('');
                    for (let i = 0; i < strArray.length; i++) {
                        if (strArray[i].match(notVowel)){
                            let passBack = strArray.shift();
                            strArray.push(passBack);
                            i--;
                        } else {
                            strArray.push("ay");
                            break;
                        };
                    };
                    return strArray.join("");
                };
            };
        }
        translatePigLatin("algorithm");

    // Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after). Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog".
        function myReplace(str, before, after) {
            // convert 'before' to a RegExp
            var regExp = new RegExp(`${before}`, 'i');
            // locate regExp in string
            let regExpIndex = str.match(regExp).index;
            // extract first letter Unicode of 'after'
            var afterUnicode = after.charCodeAt(0);
            // if str and after are both lowercase
            if (str.charCodeAt(regExpIndex) >= 97 
                && str.charCodeAt(regExpIndex) <= 122
                && afterUnicode >= 97 
                && afterUnicode <= 122) {
                // console.log("str and after are both lowercase")
                return str.replace(regExp, after);
            };
            // if str and after are both capitalized
            if (str.charCodeAt(regExpIndex) >= 65 
                && str.charCodeAt(regExpIndex) <= 90
                && afterUnicode >= 65 
                && afterUnicode <= 90) {
                // console.log("str and after are both capitalized")
                return str.replace(regExp, after);
            };
            // if str is lowercase and after is capitalized
            if (str.charCodeAt(regExpIndex) >= 97 
                && str.charCodeAt(regExpIndex) <= 122
                && afterUnicode >= 65 
                && afterUnicode <= 90) {
                // console.log("str is lowercase and after is capitalized")
                return str.replace(regExp, after.toLowerCase());
            };
            // if str is capitalized and after is lowercase
            if (str.charCodeAt(regExpIndex) >= 65 
                && str.charCodeAt(regExpIndex) <= 90
                && afterUnicode >= 97 
                && afterUnicode <= 122) {
                // console.log("str is capitalized and after is lowercase")
                return str.replace(regExp, after[0].toUpperCase() + after.slice(1));
            };
            }
            myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");
        
    // 


      
    

      
      












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