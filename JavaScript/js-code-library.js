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
      
    // Create an object and add properties (object literal syntax)
    let objectName = {
        property1: value, 
        property2: value
    };

    // There are two ways to get information out of an object:
        // Dot notation
            myObject.property 
        // Bracket notation
            myObject['property name']
            // You cannot use variables in dot notation
            let variable = "blah"
            myObject[variable] // This is equivalent to myObject["blah"]

    // One of the simplest ways you ca nbeginn to organize your code is by simply grouping things into objects.
        // Tic-Tac-Toe game example
            // example one
            const playerOneName = "tim"
            const playerTwoName = "jenn"
            const playerOneMarker = "X"
            const playerTwoMarker = "O"

            // example two
            const playerOne = {
            name: "tim",
            marker: "X"
            }
            const playerTwo = {
            name: "jenn",
            marker: "O"
            }
        // Using objects is very convenient when making a multiplayer game or keeping track of inventory. 

    // A constructor is a function used for innitializing new objects, and you use the `new` keyword to call the constructor.
    function ObjConstName(prop1, prop2, propN) {
        this.property1 = prop1;
        this.property2 = prop2;
        this.propertyN = propN;
    }
    // Create an instance of that Object using the constructor and `new` operator
    let objectName = new ObjConstName(prop1, prop2, propN);  
    // All objects that inherit from another object also inherit a constructor property, and this constructor property is simply a property (like any variable) that holds or points to the constructor of the object. 
        //The constructor in this example is Object () 
        var myObj = new Object ();
        // And if you later want to find the myObj constructor:
        console.log(myObj.constructor); // Object()
        // Another example: Account () is the constructor
        var userAccount = new Account (); 
        // Find the userAccount object's constructor
        console.log(userAccount.constructor); // Account()
    // All objects created with object literals and with the Object constructor inherits from `Object.prototype`. Therefore, Object.prototype is the prototype attribute (or the rototype object) of all objects created with new Object () or with {}. Object.prototype itself does not inherit any methods or properties from any other object.

    // Just like with objects created using the Object Literal method, you can add functions to the object:
    function Player(name, marker) {
        this.name = name
        this.marker = marker
        this.sayName = function() {
          console.log(name)
        }
    }
        // EXERCISE: Write a constructor for making "Book" objects. Your book should have the book's title, author, the nnumber of pages, and whether or not you have read the book. Also, put a function into the constructor that can report the book info.
        function Book(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }

        Book.prototype.info = function () {
            return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
        }
    
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

    // There are two interrelated concepts with prototype in JavaScript:
        // Every JS function has a prototype property (this property is empty by default), annd you attach properties and methods o ntis prototype property when you want to implement inheritance. 
            // This prototype property is NOT ENUMERABLE ( that is, it isn't accessible in a for/in loop), but Firefox and most versions of Safari and Chrome have a _proto_ "pseudo" property (an alternative syntax) that allows you to access and object's prototype property. 
                // You will likely never use this _proto_ pseudo property, but you should know that it exists and it is simply a way to access an object's prototype property in nsome browsers. 
            // The prototype property is used primarily for inheritance; you add methods and property on a function's prototype property to make those methods and propertys available to instance of that function.
            // Consider this simple example of inheritance with the prototype property:
                function PrintStuff (myDocuments) {
                    this.documents = myDocuments;
                }
                // We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
                PrintStuff.prototype.print = function () {
                    console.log(this.documents);
                }
                // Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
                var newObj = new PrintStuff ("I am a new Object and I can print.");
                // newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
                newObj.print (); // I am a new Object and I can print.
        // The second concept with prototype in JS is the prototype attribute. 
            // Think of the prototype attribute as a characterisitc of the object; this characteristic tells us the object's "parent". In simple terms: an object's prototype attribute points to the object's "parent" - the object it inherited its properties from. 
            // The prototype attribute is normally referred to as the prototype object, and it is set automatically when you create a new object. Every object inherits properties from some other object, and it is this other object that is the object's prototype attribute or "parent". (You can think of the prototype attribute as the lineage or the parent). In the example code above, newObj's prototype is PrintStuff.prototype.
            // NOTE: All objects have attributes just like object properties have attributes. And, the object attributes are prototype, class, and extensible attributes.
            // ALSO NOTE: The _proto_ "pseudo" property contains an object's prototype object (the parent object it inherited its methods and properties from).
    
    // Prototype Properties are shared among all instances automatically. Stated simply, the prototype is another object that the original object inherits from, which is to say, the original object has access to all of its prototype's methods and properties
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
    objName.prototype = {
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

    // IN ECMAScript 5, you cann create objects with an Object.create() method that allows you to set the new object's prototype object. 

    // Object Inheritance 
        // JS does not have classical inheritance based on Classes (as most OO languages do), and therefore all inheritannce in JS is made possible through the prototype proptery. JS has a prototype-based inheritance mechanism. 
        // Inhereitance is a programming paradigm where object (or Classes in some languages) can inherit properties and methods from other objects (or Classes). In JS, you implement inheritance with a prototype prperty. For example, you can creat a Fruit function (an object, since all functions in JS are objects) and add properties annd methods on the Fruit prototype property, and all instances of the Fruit function will inherit all the Fruit's properties and methods.
            // Demonnstration of Inheritance in JS
            function Plant () {
                this.country = "Mexico";
                this.isOrganic = true;
            }
            // Add the showNameAndColor method to the Plant prototype property
            Plant.prototype.showNameAndColor =  function () {
            console.log("I am a " + this.name + " and my color is " + this.color);
            }
            
            // Add the amIOrganic method to the Plant prototype property
            Plant.prototype.amIOrganic = function () {
            if (this.isOrganic)
            console.log("I am organic, Baby!");
            }

            function Fruit (fruitName, fruitColor) {
            this.name = fruitName;
            this.color = fruitColor;
            }
            // Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
            Fruit.prototype = new Plant ();
            // Creates a new object, aBanana, with the Fruit constructor
            var aBanana = new Fruit ("Banana", "Yellow");
            // Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
            console.log(aBanana.name); // Banana
            // Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
            console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.
        // This is the principal manner in which inheritance is implemennted in JS and the integral role the prototype chain has in the process. 

    // The Prototype Chain
        // Prototype is also important for accessing properties and methods of objects. The prototype attribute (or prototype object) of any object is the "parent" object where the inherited properties were originally defined. 
        // If you want to access a property of an object, the search for the property begins directly o nthe object. If the JS runtime can't find the property there, it then looks for the property on the object's prototype (the parent) - the object it inherited its property from. If the property is not found on the object's prototype, the search then moves to the prototype of the object's prototype (the grandparent). This continues until there are no more prototypes. 
        // If the property does not exist on any of the object's prototype in its prototype chain, then the property does not exist and 'undefined' is returned. 
        // There are two limitations to the prototype chain:
            // The references can't go in circles, JS will throw an error.
            // The value of prototype can be either an object or 'null'. Other types are ignored.
        // There can be only one prototype per object. An object may not inherit from two others.
    
    // Object.prototype Properties Inherited by all Objects
        // constructor, hasOwnProperty(), isPrototypeOf(), propertyIsEnumerable(), toLocaleString(), toString(), and valueOf(). 
    // All built-in constructors (Array(), Number(), String(), etc.) were created from the Object constructor, and as such their prototype is Object.prototype.

    // The prototype is only used for reading properties. Write/delete operations work directly with the object. 
    // Accessor propertites are an exception, as assignment is handled by a setter function. So writing to such a proeprty is actually the same as calling a function
        let user = {
            name: "John",
            surname: "Smith",
            set fullName(value) {
                [this.name, this.surname] = value.split(" ");
            },
            get fullName() {
                return `${this.name} ${this.surname}`;
            }
        };
        // create an object
        let admin = {
            __proto__: user,
            isAdmin: true
        };
        // getter triggers
        alert(admin.fullName); // John Smith (has a getter in the prototype 'user', so it is called)
        // setter triggers!
        admin.fullName = "Alice Cooper"; // (has a setter in the prototype, so it is called)
        alert(admin.fullName); // Alice Cooper , state of admin modified
        alert(user.fullName); // John Smith , state of user protected
    // No matter where the method is found, in an object or its prototype, `this` is always the object before the dot. So the setter call `admin.fullName` uses `admin` as `this`, not `user`.
        // This is a super-important thing, because we may have a big object with many methods, and have objects that inherit from it. And whenn the inhertiting objects run the inhertied methods, they will modify only their own states, not the state of the big object.
    
    // The for...in loop iterates over inherited properties too.
        let animal = {
            eats: true
        };
        
        let rabbit = {
            jumps: true,
            __proto__: animal
        };
        // Object.keys only returns own keys
        alert(Object.keys(rabbit)); // jumps
        // for..in loops over both own and inherited keys
        for(let prop in rabbit) alert(prop); // jumps, then eats
    
    // We can exclude inherited properties by using the built-in method `obj.hasOwnProperty(key)`: it returns `true` if `obj` has its own (not inherited) property named `key`.
        // We can filter out inherited properties (or do something else with them):
        let animal = {
            eats: true
        };
        
        let rabbit = {
            jumps: true,
            __proto__: animal
        };
        
        for(let prop in rabbit) {
            let isOwn = rabbit.hasOwnProperty(prop);
        
            if (isOwn) {
                alert(`Our: ${prop}`); // Our: jumps
            } else {
                alert(`Inherited: ${prop}`); // Inherited: eats
            }
        }
        // Where is the method `rabbit.hasOwnProperty` coming from? We did not define it. The method is provided by `Object.prototype.hasOwnProperty`. In other words, it's inherited. ... But why does `hasOwnProperty` not appear in the `for...in` loop like `eats` and `jumps` do, if `for...in` lists inherited properts? The answer is simple: it's not enumerable. Just like all other propertites of Object.prototype, it has an `enumerable:false` flag. Since `for...in` onnly lists enumerable properties, `hasOwnProperty` and the rest of the Object.prototype properties are not listed.
        // ALMOST ALL OTHER KEY/VALUE-GETTING METHODS IGNORE INHERITED PROPERTIES
            // Methods such as `Object.keys` and `Object.values` and more ignore inherited properties. They only operate on the object itself. Properties from the prototype are NOT taken into account.

    // Object Constructors
            function Student(name, grade) {
                this.name = name
                this.grade = grade
            }
            // add the sayName method to the Student object
            // methods are typically NOT UNIQUE to an object and are therefore placed in the prototype object so that they can be called back on all of the objects at the instance level
            Student.prototype.sayName = function() {
                console.log(this.name)
            }
            // add the goToProm method to the Student object
            Student.prototype.goToProm = function() {
                // eh.. go to prom?
            }
        // If you're using constructors to make your objects it is best to define functions on the prototype of that object. Doing so means that a single instance of each function will be shared between all of the Student objects. If we declare the function directly in the constructor, like we did when they were first introduced, that function would be duplicated every time a new Student is created. In this example, that wouldn't really matter much, but in na project that is creating thousands of objects, it really can make a difference. 
        
    // Object.create - Recommended Method for Prototypal Inheritance
        // At this point in history, Object.create the recommended way of setting the prototype of an object. Object.create very simply returns a new object with the specified prototype and any additional properties you want to add.
            // constructor for student
            function Student() {
            }
            // add a function property call sayName to the Student object
            Student.prototype.sayName = function() {
                console.log(this.name)
            }
            // constructor for EighthGrader
            function EighthGrader(name) {
                this.name = name
                this.grade = 8
            }
            // set the prototype of EighthGrader to a new object that has a copy of Student.prototype
            EighthGrader.prototype = Object.create(Student.prototype)
                // EighthGrader.prototype = Student.prototype DOES NOT WORK because it will literally set EighthGradter's prototype to Student.prototype (ie, not a copy), which could cause problems if you want to edit something in the future. Changes will be made on the Student.prototype
            
            const carl = new EighthGrader("carl")
            carl.sayName() // console.logs "carl"
            carl.grade // 8

            
    // ES6 Classes
        // Classes are written with the `class` keyword. A class has a constructor function, and the properties that we want to add to the prototype are defined on the classes body itself.
            class Dog {
                constructor(name, breed, color) {
                    this.name = name;
                    this.breed = breed;
                    this.color = color;
                }
                bark() {
                    returnn "Woof!"
                }
            }
        // The class above is the same as the following constructor:
            function Dog(name, breed, color) {
                this.name = name;
                this.breed = breed;
                this.color = color;
            }
            // Attach bark to the prototype object
            Dog.prototype.bark = function() {
                return "Woof!";
            }
        // Classes can also be extended to other classes. In an extended class, we can access the parent class' constructor using the `super` keyword. The arguments the parent class' constructor expects, we have to pass to `super: name` in this case.
            class Dog {
                constructor(name) {
                    this.name = name;
                }
                bark() {
                    return "Woof!";
                }
            }
            
            class Chihuahua extends Dog {
                constructor(name) {
                    super(name);        // the super keyword calls the class that the sub-class extends
                }
                smallBark() {
                    return "Small woof!";
                }
            }
            // create a new instance of Chihuahua
            const myPet = new Chihuahua("Max");
        // myPet has access to both the Chihuahua.prototype and Dog.prototype (and automatically Object.prototype, since Dog.prototype is an object).
        // Since Chihuahua.prototype has the smallBark function and Dog.prototype has the back function, we can access both smallBark and bark on myPet.


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









// Factory Functions => Tarek Sherif (https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/)
    // One of the biggest issues with constructors is that while they look just like regular functions, they do not behave like regular functions at all. If you try to use a constructor function without the `new` keyword, your program will not work as expected, but it won't produce error messages that are easy to trace. 
    // What we need is a way to take advantage of the reuse patters of constructors, while at the same time writing code that is more explicit about what it's actually doing. This can be done by pushing the object creation and inheritance code directly into the constructor, essentially turning it into a factory function. 
    
    // Writing explicity factory functions involves relatively minor changes to the code of constructors. Take the following constructor example:
        function MyObject(data) {
            this.data = data;
        }  
        MyObject.prototype = {
            getData: function() {
            return this.data;
            }
        }
        var o = new MyObject("data");
    // This can be replaced by the following equivalent factory function
        function myObject(data) {
            var obj = Object.create(myObject.proto);
            obj.data = data;
            return obj;
        }
        myObject.proto = {
            getData: function() {
                return this.data;
            }
        }
        var o = myObject("data");
    // The objects created by the constructor and the factory function are equivalent, but the factory function construst has the following advantages
        // There's no risk of using it in the "wrong" way. It doesn't require the `new` keyword, as it isn't meant to be used as a constructor. Nor is it a constructor that forces proper invocation, essentially hiding errors. The factory function is meant to be used in exactly one way: as a regular function.
        // There's not pretense of creating a "class" of objects by capitalizing the name or otherwise trying to make it look like the classes or other languages. The prototype property isn't used, so there will be no instanceof link between the function and the objects it creates. It is simply a function that happens to create objects.
    // If we want to go all the way annd not use `new` at all in our code, the following generic factory can be used to invoke constructor functions in a more explicit manner:
        function genericFactory(Ctr) {
            var obj = Object.create(Ctr.prototype);
            var args = Array.prototype.slice.call(arguments, 1);
            Ctr.apply(obj, args);
            return obj;
        }
    // Using the genericFactory() function to invoke the MyObject constructor, described earlier in this section, would look like the following:
        var o = genericFactory(MyObject, "data"); 
    // Whether this makes the code clearer or not might be debatable, but one definite advantage is that this construct allows us to invoke constructors dynamically, something not possible with invocations that use `new`. 

// Factory Functions => The Odin Project
    // Factory function pattern is similar to constructors, but instead of using `new` to create an object, factory functions simply set up and return the new object when you call the function
            const personFactory = (name, age) => {
                const sayHello = () => console.log('hello!');
                return { name, age, sayHello };                     // JS Object Shorthand
            };
            const jeff = personFactory('jeff', 27);
            console.log(jeff.name); // 'jeff'
            jeff.sayHello(); // calls the function and logs 'hello!'
        // For reference, this is the same thing created using the constructor pattern:
            const Person = function(name, age) {
                this.sayHello = () => console.log('hello!');
                this.name = name;
                this.age = age;
            };
            const jeff = new Person('jeff', 27);
    
    // Object Shorthand
        // In 2015, a handy new shorthand for creating objects was added into JS. Without the shorthand, line 3 from the Factory Function example would have looked something like this:
            return {name: name, age: age, sayHello: sayHello};
        // Put simply, if you are creating an object where you are referring to a variable that has the exact same name as the object property you're creating, you cann condense it like so:
            return {name, age, sayHello};
        // With that knnowledge in your pocket, check out this little hack:
            const name = "Maynard"
            const color = "red"
            const number = 34
            const food = "rice"
            // logging all of these variables might be a useful thing to do, but doing it like this can be somewhat confusing.
            console.log(name, color, number, food) // Maynard red 34 rice
            // if you simply turn them into an object with brackets, the output is much easier to decipher:
            console.log({name, color, number, food})
            // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }
    
    // Scope and Closure
        // Scope is the term that refers to where things like variables and functions can be used in your code. Scopes can be 'globally' or 'locally' defined.
            // Note: Global variables can be accessed using the window object - console.log(window.a)
            // If you do not include the `var` or `let` declarations in a function, yet use a variable name that is the same as a global variable name, JS will think that you are changing the global variable. If there is no declaration of the same name in a parent scope, JS will keep looking up parent scopes until it reaches the window object. If there is no variable declared in the window object (or root scope), JS will create and declare the variable for you. This is known as "polluting the root scope". 
                // You can "use strict"; to keep yourself from accidentally polluting the root scope.
        // Global Scope is where you are before you start writing a line of code. The 'namespace' is sometimes an interchangeable word for scope, but usually this refers to the hieghest level scope. 
        // Local Scope refers to any scope defined past the global scope. There is typically one global scope, and each function defined has its own (nested) local scope. Any function defined within another function has a local scope which is linked to the outer function. 
            // Any locally scoped items are not visible in the global scope - unless exposed, meaning if functions or variables are defined withing a new scope, it's inaccessible outside of that current scope. 
        // All scopes in JS are created with Function Scope only, the aren't created by `for` or `while` loops or expression statements like `if` or `switch`. 
        // Lexical Scope (or Closure) is created by a function within a function, and the inner function has access to the scope in the outer function. This is also referred to as Static Scope.
            // Any variables/objects/functions defined in its parent scope are available in the scope chain.
                var name = 'Todd';
                var scope1 = function () {
                    // name is available here
                    var scope2 = function () {
                        // name is available here too
                        var scope3 = function () {
                        // name is also available here!
                        };
                    };
                };
            // It is important to remember that Lecixal scope does NOT work backwards
                // name = undefined
                var scope1 = function () {
                    // name = undefined
                    var scope2 = function () {
                        // name = undefined
                        var scope3 = function () {
                            var name = 'Todd'; // locally scoped
                        };
                    };
                };
            // You can always return a reference to 'name', but never the variable itself.
        
        // Scope chains establish the scope for a given function. Each function defined has its own nnested scope as we know, and any function defined within another function has a local scope which is linked to the outer function - this link is called the chain. It's always the position in the code that defines the scope. When resolving a variable, JavaScript starts at the innermost scope and searches outwards until it finds the variable/object/function it was looking for.

        // Closures ties in very closely with Lexical Scope. A better example of how the closure side of things works, can be seen when returning a function reference - a more practical usage. Inside our scope, we can return things so that they're available in the parent scope:
                var sayHello = function (name) {
                    var text = 'Hello, ' + name;
                    return function () {
                        console.log(text);
                    };
                };
            // The closure concept we've used here makes our scope inside sayHello inaccessible to the public scope. Calling the function alone will do nothing as it returns a function:
                sayHello('Todd'); // nothing happens, no errors, just silence...
            // The function returns a function, which means it needs assignment, and then calling:
                var helloTodd = sayHello('Todd');
                helloTodd(); // will call the closure and log 'Hello, Todd'
            // You can call the function by calling the closure, like this:
                sayHello('Bob')(); // calls the returned function without assignment
            // AngularJS uses the above technique for its `$compile` method, where you pass the current scope reference into the closure:
                $compile(template)(scope);
            // Meaning we could guess that their code would (over-simplified) look like this:
                var $compile = function (template) {
                    // some magic stuff here
                    // scope is out of scope, though...
                    return function (scope) {
                        // access to `template` and `scope` to do magic with too
                    };
                };
            // A function doesn't have to return in order to be called a closure. Simply accessing variables outside of the immediate lexical scope creates a closure. 

        // Scope and 'this'
            // Each scope binds a different value of `this` depending on how the function is invoked. By default, `this` refers to the outer most global object, the `window`. We can easily show how invoking functions in different ways binds the `this` value differently:
                var myFunction = function () {
                    console.log(this); // this = global, [object Window]
                };
                myFunction();
                
                var myObject = {};
                myObject.myMethod = function () {
                    console.log(this); // this = Object { myObject }
                };
                
                var nav = document.querySelector('.nav'); // <nav class="nav">
                var toggleNav = function () {
                    console.log(this); // this = <nav> element
                };
                nav.addEventListener('click', toggleNav, false);
            // There are also problems that we run into when dealing with the `this` value, for instance if we do this, even inside the same function the scope can be changed and the `this` value can be changed:
                var nav = document.querySelector('.nav'); // <nav class="nav">
                var toggleNav = function () {
                    console.log(this); // <nav> element
                    setTimeout(function () {
                        console.log(this); // [object Window]
                    }, 1000);
                };
                nav.addEventListener('click', toggleNav, false);
            // Above, we've created new scope which is not invoked from our event handler, so it defaults to the `window` Object as expected. There are several things we cann do if we want to access the proper `this` value which isn't affected by the new scope. You might have seen this before, where we can ncache a refernce to the `this` value using a `that` variable and refer to the lexical binding:
                var nav = document.querySelector('.nav'); // <nav class="nav">
                var toggleNav = function () {
                    var that = this;
                    console.log(that); // <nav> element
                    setTimeout(function () {
                        console.log(that); // <nav> element
                    }, 1000);
                };
                nav.addEventListener('click', toggleNav, false);
            // This is a neat little trick to be able to use the proper `this` value and resolve problems with newly created scope.
        
        // Changing scope with .call(), .apply(), and .bind()
            // Sometimes you need to manipulate the scopes of your JS depending on what you're looking to do. Below is a simple demonstration of how to change the scope when looping:
                var links = document.querySelectorAll('nav li');
                for (var i = 0; i < links.length; i++) {
                    console.log(this); // [object Window]
                }
                // The `this` value here doesn't refer to our elements, we're not invoking anything or changing the scope. Let's look at how we can change scope (well, it looks like we change scope, but what we're really doing is changing the context of how the function is called).
            
            // The .call() and .apply() methods allow us to pass in a scope to a function, which binds the correct `this` value. Let's manipulate the above function to make it so that our `this` value is each element in the array:
                    var links = document.querySelectorAll('nav li');
                    for (var i = 0; i < links.length; i++) {
                        (function () {
                            console.log(this);
                        }).call(links[i]);
                    }
                // You can see that we're passing in the current elemennt in the Array iteration, `links[i]`, which changes the scope of the function so that the `this` value becomes that iterated element. We can then use the `this` binding if we wanted. 
                // We can use either .call() or .apply() to channge the scope, but any further arguments are where the two differ. 
                    // .call(scope, arg1, arg2, arg3) takes individual argumennts, comma separated
                    // .apply(scope, [arg1, arg2]) takes an Array of arguments
                // It is importannt to remember that using .call() or .apply() actually invokes your function, so instead of doing this:
                    myFunction(); // invoke myFunction
                // You'll let .call() handle it and chain the method
                    myFunction.call(scope); // invoke myFunction using .call()

            // Unlike .call() and .apply(), using .bind() does NOT invoke a function, it merely binds the values before the function is invoked. As you know we can't pass parameters into function references:
                    // works
                    nav.addEventListener('click', toggleNav, false);

                    // will invoke the function immediately
                    nav.addEventListener('click', toggleNav(arg1, arg2), false);
                // We can fix this by creating a new function inside it:
                    nav.addEventListener('click', function() {
                        toggleNav(arg1, arg2);
                    }, false);
                // But again, this changes scope and we're once more creating a needless function, which will be costly on performance if we were inside a loop and binding event listeners. This is where .bind() shines through, as we can pass in arguments but the functions are not called:
                    nav.addEventListener('click', toggleNav.bind(scope, arg1, arg2), false);
                // The function isn't invoked, and the scope can be changed if needed, but arguments are sat waiting to be passed in.

        // In many programming languages, you'll hear about `public` and `private` scope, in JS there is no such thing. We can, however, emulate pubic and private scope through things like Closures. By using JS design patterns, such as the Module pattern for example, we can create public and private scope. 
            // A simple way to create private scope, is by wrapping our functions inside a function. As we've learned, functions create scope, which keeps things out of the global scope:
                (function () {
                    // private scope inside here
                })();
            // We might then add a few functions for use in our app:
                (function () {
                    var myFunction = function () {
                        // private scope inside here
                    }
                })();
            // But when we come to calling our function, it would be out of scope:
                (function () {
                    var myFunction = function () {
                    // do some stuff here
                    };
                })();
                
                myFunction(); // Uncaught ReferenceError: myFunction is not defined
            // This created a private scope. 
            
            // What if we want the function to be public? The Module Pattern (and Revealing Module Pattern) allows us to scope our functions correctly, using private and public scope and an Object. Here we grab the global namespace, called Module, which contains all of our relevant code for that module:
                // define module
                var Module = (function () {
                    return {
                        myMethod: function () {
                            console.log('myMethod has been called.');
                        }
                    };
                })();
                // call module + methods
                Module.myMethod();
            // The return statement here is what returns our public methods, which are accessible in the global scope - but are namespaced. This means our Module takes care of our namespace, and can contain as many methods as we want. We can extend the Module as we wish:
                // define module
                var Module = (function () {
                    return {
                        myMethod: function () {
                
                        },
                        someOtherMethod: function () {
                
                        }
                    };
                })();
                // call module + methods
                Module.myMethod();
                Module.someOtherMethod();
            
            // What about private methods? This is where a lot of developers go wrong and pollute the global namespace by dumping all their functions in the global scope. Functions that help our code work do not need to be in the global scope, only the API calls do - things that need to be accessed globally in order to work.
            // Here's how we can create private scope, by NOT returning functions:
                var Module = (function () {
                    var privateMethod = function () {

                    };
                    return {
                        publicMethod: function () {
                            
                        }
                    };
                })();
            // This means that publicMethod cann be called, but privateMethod cannot, as it's privately scoped. These privately scoped functions are things like helpers, addClass, removeClass, Ajax/XHR calls, Arrays, Objects, anything you can think of.
            // There is an interesting twist, anything in the same scope has access to anything in the same scope, even after the function has been returned. Which means, our public methods have access to our private ones, so they can still interact but are unaccessible in the global scope. 
                var Module = (function () {
                    var privateMethod = function () {
                
                    };
                    return {
                    publicMethod: function () {
                        // has access to `privateMethod`, we can call it: privateMethod();
                    }
                    };
                })();
            // This allows a very powerful level of interactivity, as well as code security. A very important part of JS is ensuring security, which is exactly why we can't afford to put all functions in the global scope as they'll be publicly available, which makes them open to vulnerable attacks.
            // Here's an example of returning an Object, making use of public and private methods:
                var Module = (function () {
                    var myModule = {};
                    var privateMethod = function () {
                
                    };
                    myModule.publicMethod = function () {
                
                    };
                    myModule.anotherPublicMethod = function () {
                
                    };
                    return myModule; // returns the Object with public methods
                })();
                // usage
                Module.publicMethod();
            
            // One neat naming convention is to begin private methods with an underscore, which visually helps you differentiate between public and prviate:
                var Module = (function () {
                    var _privateMethod = function () {
                
                    };
                    var publicMethod = function () {
                
                    };
                })();
            // This helps us when returning an anonymous Object, which the Module can use in Object fashion as we can simply assign the function references:
                var Module = (function () {
                    var _privateMethod = function () {
                
                    };
                    var publicMethod = function () {
                
                    };
                    return {
                        publicMethod: publicMethod,
                        anotherPublicMethod: anotherPublicMethod
                    }
                })();
    
// How `let`, `const`, and `var` are scoped in JS
    // var
        // `var`  variables can redefined or updated. You can also redeclare a variable and the code will still work as you'd expect because `var` variables can be updated or redefined. 
        // `var` variables are function scoped, which means that they are ONLY AVAILABLE INSIDE THE FUNCTION THAT THEY ARE CREATED IN. However, if they are not declared in a function, then they are globally scoped and available in the whole window.
            // IF YOU NEED SOMETHING OUTSIDE OF A FUNCTION, YOU WANT TO RETURN IT AND STORE THAT IN A VARIABLE.
            // If you use a `var` variable as a temporary variable in a condition or loop, and that condition is NOT a part of a function, then that temporary `var` variable will still be a global function. This is because `var` variables are function scoped and in the situation just mentioned, there is no function.
                var age = 100;
                if(age > 12) {
                    var dogYears = age * 7;
                    console.log(`You are ${dogYears} dog years old!`);
                }
            
    // let & const
        // `let` and `const` are block scoped. Any time that you see { curly braces }, that's a block. Functions are also blocks, which means that `let` and `const` are still going to be scoped to a function, but they will be SCOPED TO THE CLOSES SET OF CURLY BRACKETS.
            var age = 100;
            if (age > 12) {
                let dogYears = age * 7;
                console.log(`You are ${dogYears} dog years old!`);
            }
            console.log(dogYears); // error because it's scoped only to the above block
        // `let` canNOT be redeclared in the same scope, unlike `var`. If you redeclare `let`, you will recieve an error. 
        // The only difference between `let` and `const` is that `CONST` VARIABLES CANNOT BE UPDATED. `let` variables are made to be updated. 
        // `const` variable are not immutable. However, the properties of a `const` variable can change. That's because the entire object is not immutable. It just can't be reassigned entirely. This of an object as a person. The person (object) doesn't change, but attributes about the person (object) may change. As long as the object that is assigned is always exactly the same object, we can go ahead and set a new property or property value.
            const person = {
                name: 'Wes',
                age: 28
            }
            person.age = 29
    
    // Private Variables and Functions
            const FactoryFunction = string => {
                const capitalizeString = () => string.toUpperCase();
                const printString = () => console.log(`----${capitalizeString()}----`);
                return { printString };
            };
            const taco = FactoryFunction('taco');
            printString(); // ERROR!!
            capitalizeString(); // ERROR!!
            taco.capitalizeString(); // ERROR!!
            taco.printString(); // this prints "----TACO----"
        // Because of the concept of scope, neither of the functions created inside of FactoryFunction can be accessed outside fo the function itself, hence the errors. The only way to use either of those functions is to returnn then in the object, which is why we can call taco.printString() but not taco.capitalizeString(). The big deal here is that even though we can't access the capitalizeString() function, printString() can. That is closure. 
        // The concept of closure is the idea that functions retain their scope even if they are passed arounnd and called outside of that scope. In this case, printString has access to everything inside of FactoryFunction, even if it gets called outside of that function.
        // In the following example, counterCreator innitializes a local variable (count) and then returns a function. To use that function we have to assignn it to a variable. Then, every time we run the function it console.logs count annd increments it. As above, the function counter is a closure. It has access to the variable count and cann both print and increment it, but there is no way for our program to access that variable. 
            const counterCreator = () => {
                let count = 0;
                return () => {
                    console.log(count);
                    count++;
                };
            };
            
            const counter = counterCreator();
            
            counter(); // 0
            counter(); // 1
            counter(); // 2
            counter(); // 3
        // In the context of factory functions, closures allow us to create private variables and functions. Private functions are functions that are used in the workings of our objects that are not intended to be used elsewhere in our program. Inn other words, even though our objects might onnly do one or two things, we are free to split our functions up as much as we want (allowing for cleaner, easier to read code) and only export the functions that the rest of the program is going to use. 
        // The concept of private functions is very useful and should be used as often as is possible! For every bit of functionality that you need for your program, there are likely to be several supporting functions that do NOT need to be used in your program as a whole. Tucking these away making them inaccessible makes your code easier to refactor, easier to test, and easier to reasonn about for you and anyone following. 

    // Factories are simply plain old JS functions that return objects for us to use in our code. Factories are a powerful way to organize and contain code. If we are writing any sort of game, we will probably need an object to describe our players and their functionality:
            const Player = (name, level) => {   
                let health = level * 2;             // health is a private variable and cannot be manipulated
                const getLevel = () => level;
                const getName  = () => name;
                const die = () => {                 // die() is a private function
                    // uh oh
                };
                const damage = x => {
                    health -= x;
                    if (health <= 0) {
                        die();
                    }
                };
                const attack = enemy => {
                    if (level < enemy.getLevel()) {
                        damage(1);
                        console.log(`${enemy.getName()} has damaged ${name}`);
                    }
                    if (level >= enemy.getLevel()) {
                        enemy.damage(1);
                        console.log(`${name} has damaged ${enemy.getName()}`);
                    }
                };
                return {attack, damage, getLevel, getName} // neither die() nor `health` are listed here and are therefore private
            };
            const jimmie = Player('jim', 10);
            const badGuy = Player('jeff', 5);
            jimmie.attack(badGuy);
        // Setting up objects like this makes it easier for us to use them because we've actually put some thought into how and when we are going to want to use the information. In this case, we have jimmie's health hdiing as a private variable inside of the object which meanns we nneed to export a function if we want to manipulate it. In the long run, this will make our code much easier to reason about because all of the logic is encapsulated in an appropriate place.
    
    // Inheritannce with factories
        // With constructors, we looked fairly deeply into the concept of prototypes and inheritance, or giving our objects access to the methods and properties of another object. There are a few easy ways to accomplish this while using factories.
            const Person = (name) => {
                const sayName = () => console.log(`my name is ${name}`)
                return {sayName}
            }
            
            const Nerd = (name) => {
                // simply create a person and pull out the sayName function with destructuring assignment syntax!
                const {sayName} = Person(name)
                const doSomethingNerdy = () => console.log('nerd stuff')
                return {sayName, doSomethingNerdy}
            }
            
            const jeff = Nerd('jeff')
            jeff.sayName() //my name is jeff
            jeff.doSomethingNerdy() // nerd stuff
        // This pattern allows you to pick and choose which functions you want to include in your new object. If you want to lump all of another object in, you can do that with Object.assign():
                const Nerd = (name) => {
                    const prototype = Person(name)
                    const doSomethingNerdy = () => console.log('nerd stuff')
                    return Object.assign({}, prototype, {doSomethingNerdy})
                    // returns a new object with properties of the Person() object and the property doSomethingNerdy()
                }
            // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object. The syntax is as follows:
                Object.assign(target, ...sources)
                // target - The target object; what to apply the sources' properties to, which is returned after it is modified.
                // sources - The source object(s); objects containing the properties you want to apply.
                // Return value = the target object
            // Properties in the target object are overwritten by properties in the sources if they have the same key. Later sources; properties overwrite earlier ones.
            // This method only copies enumerable and own properties from a source object to a target object. It uses [[Get]] on the source and [[Set]] on the target, so it will invoke getters and setters. Therefore it assigns properties, versus copying or defining new properties. This may make it unnsuitable for merging new properties into a prototype if the merge sources contain getters. 
        
        // 3 Kinds of Prototypal Inheritance
            // Delegation / Differential Inheritance
                // A delegate prototype is an object that serves as a base for another object. When you inherit from a delegate prototype, the new object gets a reference to the prototype.
                // When you try to access a property on the new object, it checks the object's own properties first. If it doesn't find it there, it checks the [[Prototype]], and so on up the prototype chain until it gets back to Object.prototype, which is the root delegate for most objects. Method delegtation can preserve memory resources because you only need one copy of each method to be shared by all instances. 
                // In JavaScript, any function cann create new objects. When it's not a constructor function, it's called a factory function.
                    const proto = {
                        hello () {
                            return `Hello, my name is ${ this.name }`;
                        }
                    };
                    const greeter = (name) => Object.assign(Object.create(proto), {
                        name
                    });        

                    const george = greeter('george');
                    const msg = george.hello();
                    console.log(msg);
                // You can avoid property delegation by setting the prototype to 'null' using Object.create(null).
                // One major drawback to delegation is that it's not very good for storing state. If you try to store state as objects or arrays, mutating any member of the object or array will mutate the member for every instance that shares the prototype. In order to preserve instance safety, you need to make a copy of the state for each object.
            
            // Concatenative Inheritance / Cloning / Mixins
                // Concatenative inheritance is the process of copying the properties from one object to another, without retaining a reference between the two objects. It relies on JS's dynamic object extension feature.
                // Cloning is a great way to store default state for objects: This process is commonly achieved using Object.assign(). Prior to ES6, it was common to use similar .extend() methods from Lodash, Underscore, or jQuery.
                    const proto = {
                        hello: function hello() {
                        return `Hello, my name is ${ this.name }`;
                        }
                    };
                    
                    const george = Object.assign({}, proto, {name: 'George'});
                    const msg = george.hello();
                    console.log(msg); // Hello, my name is George
                // It's common to see this style used for mixins. For example, you can turn anny object into an event emitter by mixing in an EventEmitter3 prototype:
                    import Events from 'eventemitter3';
                    const object = {};
                    Object.assign(object, Events.prototype);
                    object.on('event', payload => console.log(payload));
                    object.emit('event', 'some data'); // 'some data'
                // We can use this to create a Backbone-style event emitting model:
                    import Events from 'eventemitter3';

                    const modelMixin = Object.assign({
                        attrs: {},
                        set (name, value) {
                            this.attrs[name] = value;
                        
                            this.emit('change', {
                                prop: name,
                                value: value
                            });
                        },
                        
                        get (name) {
                            return this.attrs[name];
                        }
                    }, Events.prototype);
                    
                    const george = { name: 'george' };
                    const model = Object.assign(george, modelMixin);
                    model.on('change', data => console.log(data));
                    model.set('name', 'Sam');
                    /* { prop: 'name', value: 'Sam' } */
                // Concatenative inheritance is very powerful, but it gets even better when you combine it with closures.

            // Functional Inheritance
                // Not to be confused with function programming.
                // Functional inheritance makes use of factory function, and then tacks on new properties using concatenative inheritance. Functions created for the purpose of extending existing objects are commonly referred to as functional mixins. The primary advantage of using functions for extension is that it allows you to use the function closure to encapsulate private data. In other words, you can enforce private state. 
                // It's a bit awkward to hang the attributes on a public property where a user could set or get them without calling the proper methoes. What we really want to do is hide the attributes in a private closure:
                    import Events from 'eventemitter3';

                    const rawMixin = function () {
                        const attrs = {};
                        
                        return Object.assign(this, {
                            set (name, value) {
                                attrs[name] = value;
                            
                                this.emit('change', {
                                    prop: name,
                                    value: value
                                });
                            },
                        
                            get (name) {
                                return attrs[name];
                            }
                        }, Events.prototype);
                    };
                    
                    const mixinModel = (target) => rawMixin.call(target);
                    const george = { name: 'george' };
                    const model = mixinModel(george);
                    model.on('change', data => console.log(data));
                    model.set('name', 'Sam');
                    /* { prop: 'name', value: 'Sam' } */
                // By moving 'attrs' from a public property to a private identifier, we remove all trace of it from the public API. The only way to use it now is via the privileged methods. Privileged methods are any methods defined withing the closer's function scope, which gives them access to the private data.
                // Note in the example above, we have the `mixinModel()` wrapper around the actual functional mixin, `rawMixin()`. The reason nwe need that is because we need to set the value of "this" inside the function, which we do with a `Function.prototype.call()` We could skip the wrapper and let callers do that instead, but that would be obnoxious. 
            
            // Composition Over Class Inheritance
                // Class inheritance creates is-a relationships with restrictive taxonomies, all of which are eventually wrong for new use-cases. But it turns out, we usually employ inheritance for has-a, uses-a, or can-do relationships. 
                // Composition is more like a guitar effects pedalboard. Want something that cann do delay, subtle distoration, and a robot voice? Just plug them all in:
                    const effect = compose(delay, distortion, robovoice);   // Rock on!
                // CLASS INHERITANCE SHOULD NEVER BE USED. Composition is simpler, more expressive and more flexible
            // What About `class`?
                // JS provides a very flexible object system without the need to rely on 'class'. So why did 'class' ever get used? Because a log of people are familiar with the class paradigm from other languages, and people kept trying to emulate it in JS. 
                // Several popular libraries implemented pseudo-class inheritance in JS using the delegate prototype chain to emulate class inheritance. Adding an official `class` keywor provided a single canonical way to emulate class inheritance in JS, but you should avoid it all together. In JS, composition is simpler, more expressive, and more flexible than class inheritance. 
    
    // The Module Pattern
        // 














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
                m // Multiline. Treats beginning (^) and end ($) characters as working over multiple lines
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
                    let regexp = /['"](.*?)['"]/g;
                    let regexp = /(['"])(.*?)\1/g;  // This is the same as above
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












// localStorage / Web Storage API
    // Provides mechanisms by which brosers cann securely store key/value pairs

    // Basic Concepts
        // Storage objects are simple key-value stores, similar to objects, but they stay intact through page loads. The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings). You can access these value like an object, or with the `Storage.getItem()` and `Storage.setItem()` methods.
            // The following three lines all set the same entry
                localStorage.colorSetting = '#a4509b';
                localStorage['colorSetting'] = '#a4509b';
                localStorage.setItem('colorSetting', '#a4509b');
        // There are two mechanisms within Web Storage
            // `sessionStorage` maintains a separate storage area for each given origin that's available for the durationn of the page session (as long as the browser is open, including page reloads and restores)
            // `localStorage` does the same thing, but persists even whenn the browser is closed and reopened
        // These mechanisms are available via the `Window.sessionStorage` and `Window.localStorage` properties - invoking one of these will create an instance of the Storage object, through which data items can be set, retrieved, and removed. A different Storage object is used for the `sessionStorage` and `localStorage` for each origin. THEY FUNCTION AND ARE CONTROLLED SEPARATELY.
            // For example, initially calling `localStorage` on a document will return a Storage object; calling `sessionStorage` on a document will returnn a different Storage object. Both of these can be manipulated in the same way, but separately.
    
    // Feature-detecting localStorage
        // To be able to use localStorage, we should first verify that it is supported and available inn the current browsing session. 
        
        // Testing for availability
            // The following is a function that detects whether localStorage is both supported and available:
                function storageAvailable(type) {
                    var storage;
                    try {
                        storage = window[type];
                        var x = '__storage_test__';
                        storage.setItem(x, x);
                        storage.removeItem(x);
                        return true;
                    }
                    catch(e) {
                        return e instanceof DOMException && (
                            // everything except Firefox
                            e.code === 22 ||
                            // Firefox
                            e.code === 1014 ||
                            // test name field too, because code might not be present
                            // everything except Firefox
                            e.name === 'QuotaExceededError' ||
                            // Firefox
                            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                            // acknowledge QuotaExceededError only if there's something already stored
                            (storage && storage.length !== 0);
                    }
                }
            // The following is how you use the above function to detect localStorage
                if (storageAvailable('localStorage')) {
                    // Yippee! We can use localStorage awesomeness
                }
                else {
                    // Too bad, no localStorage for us
                }
            // You can test for sessionStorage instead by calling `storageAvailable('sessionStorage')`

    // Example
        // Testing whether your stage has beenn populated
            // To start, in main.js, we test whether the storage object has already been populated (ie, the page was previously accessed):
                if(!localStorage.getItem('bgcolor')) {
                    populateStorage();
                } else {
                    setStyles();
                }
            // The Storage.getItem() methods is used to get a data item from storage; in this case, we are testing to see whether the `bgcolor` item exists; if not, we run `populateStorage()` to add the existing customization values to the storage. If there are already values there, we run `setStyles()` to update the page styling with the stored values.
            // NOTE: You could also use Storage.length to test whether the storage object is empty or not.
        
        // Getting values from storage
            // As noted above, values can be retrieved from storage using Storage.getItem(). This takes the key of the data item as an argument, and returns the data value. 
                function setStyles() {
                    var currentColor = localStorage.getItem('bgcolor');
                    var currentFont = localStorage.getItem('font');
                    var currentImage = localStorage.getItem('image');
                
                    document.getElementById('bgcolor').value = currentColor;
                    document.getElementById('font').value = currentFont;
                    document.getElementById('image').value = currentImage;
                
                    htmlElem.style.backgroundColor = '#' + currentColor;
                    pElem.style.fontFamily = currentFont;
                    imgElem.setAttribute('src', currentImage);
                }
            // Here, the first three lines grab the values from local storage. Next, we set the values displayed in the form elements to those values, so that they keep in sync when you reload the page. Finally, we update the styles/decorative image on the page, so your customization options come up again on reload.
        
        // Setting values in storage
            // Storage.setItem() is used both to create new data items, and (if the data item already exists) update exisiting values. This takes two arguments - the key of the data item to create/modify, and the value to store in it.
                function populateStorage() {
                    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
                    localStorage.setItem('font', document.getElementById('font').value);
                    localStorage.setItem('image', document.getElementById('image').value);
                
                    setStyles();
                }
            // The populateStorage() function nsets three items in local storage - the background color, font, and image path. It then runs the setStyles() function nto update the page styles, etc. 
            // We've also included an `onchange` handler onn each form element so that the data and styling are updated whenever a form value is changed.
                bgcolorForm.onchange = populateStorage;
                fontForm.onchange = populateStorage;
                imageForm.onchange = populateStorage;
        
        // Responding to storage changes with the StorageEvent
            // The StorageEvent is fired whenever a change is made to the Storage object (note that this event is not fired for sessionStorage changes). This won't work on the same page that is making the changes - it is really a way for other pages on the domain using the storage to sync any changes that are made. Pages on other domains can't access the same storage objects.
            // On the events page (see events.js) the only JavaScript is as follows:
                window.addEventListener('storage', function(e) {  
                    document.querySelector('.my-key').textContent = e.key;
                    document.querySelector('.my-old').textContent = e.oldValue;
                    document.querySelector('.my-new').textContent = e.newValue;
                    document.querySelector('.my-url').textContent = e.url;
                    document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
                });
            // Here we add an event listener to the `window` object that fires when the Storage object associated with the current origin is changed. As you can see above, the event object associated with this event has a number of properties containing useful information - the key of the data that changed, the old value before the change, the new value after that change, the URL of the document that changed the storage, and the storage object itself (which we've stringified so you can see its content). 
        
        // Deleting data records
            // Web Storage also provides a couple of simple methods to remove data. We don't use these in our demo, but they are very simple to add to your project
                Storage.removeItem() // takes a simgle argument - the key of the data item you want to remove - and removes it from the storage object for that domain
                Storage.clear() // takes no arguments, and simply empties the entire storage object for that domain











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
        
    // Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
        function fearNotLetter(str) {
            // create alphabet string variable
            const alphabet = "abcdefghijklmnopqrstuvwxyz";
            const alphaArray = alphabet.split('');
            const strArray = str.split('');
            const regex = new RegExp(`${str[0]}`, "i");
            // determine alphabet start point with regex.index
            let searchStart = alphabet.match(regex).index;       
            // set i = searchStart and loop through alphabet and str for the duration of str.length
            for (let i = searchStart; i < (searchStart + str.length); i++) {  
            // return missing letter when there is a discrepency between alphabet and str
            // if no mismatch with alphaget string, return nothing
                if (strArray[i-searchStart] != alphaArray[i]){
                return alphaArray[i];
                }; 
            };
        }
        console.log(fearNotLetter("stvwx"));
    
    // Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays. In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
        function uniteUnique(arr) {
            // merge the arrays into a newArray
            var newArr = [];
            for (let i = 0; i < arguments.length; i++) {
                newArr.push(...arguments[i]);
            };
            // use a for loop to cycle through the indexes for the test value
                for (let j = 0; j < newArr.length; j++){
            // use a for loop to scan for matching with test
                    for (let k = j+1; k < newArr.length; k++){
            // remove any matches
                        if (newArr[j] === newArr[k]) {
                        newArr.splice(k,1);
                        };
                    };
                };
            return newArr;
        }
        uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

    // Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
        function convertHTML(str) {
            // create RegExp to locate all instances
            var regExp = /[(&)(<)(>)(")(')]/g;
            // create function to run on any RegExp matches
            function replacer(match){
                if(match === "&"){
                    return "&amp;";
                };
                if(match === "<"){
                    return "&lt;";
                };
                if(match === ">"){
                    return "&gt;";
                };
                if(match === '"'){
                    return "&quot;";
                };
                if(match === "'"){
                    return "&apos;";
                };
            };
            // Check str for any matches. If found call replacer() and pass the match.
            // If no matches, return original str
            var newString = str.replace(regExp, replacer);
            return newString;
        }
        convertHTML("<>");
        
    // Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num. The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
            function sumFibs(num) {
                // create fibArr, first two numbers are 1 and 1 
                var fibArr = [1,1];
                // use for loop to create an array of Fib numbers less than num 
                for (let i = 2; i <= num; i++){
                    for (let j = 0; j < fibArr.length; j++){
                        if(i == (fibArr[j]+fibArr[j+1])){
                            fibArr.push(i);
                        };
                    };
                };
                // remove even numbers
                let oddFibArr = fibArr.filter(fibNum => fibNum % 2 !== 0 );
                // sum all numbers in fibArr
                return oddFibArr.reduce((accumulator, currentValue) => accumulator + currentValue );
            }
            console.log(sumFibs(75024));
        // The same task can be performed using the following code
            function sumFibs(num) {
                // Perform checks for the validity of the input
                if (num <= 0) return 0;
                // Create an array of fib numbers till num
                const arrFib = [1, 1];
                let nextFib = 0;
                // We put the new Fibonacci numbers to the front so we
                // don't need to calculate the length of the array on each
                // iteration
                while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
                arrFib.unshift(nextFib);
                }
                // We filter the array to get the odd numbers and reduce them to get their sum.
                return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
            }
            sumFibs(4);
    
    // A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4. Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
        function sumPrimes(num) {
            let i = 1;
            let sum = 0;
            while (i <= num) {
                if (isPrime(i)) {
                    sum += i;
                }
                i++;
            }
            return sum;
        }
        //function to check if a number is prime or not
        function isPrime(x) {
            for (let i = 2; i < x; i++) {
                if (x % i === 0) return false;
            }
            return x !== 1 && x !== 0;
        }
        sumPrimes(10);

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