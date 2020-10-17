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






// RULE OF THUMB: If you only ever need ONE of something, create that something with a module


// Factory Functions => Tarek Sherif (https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/)
    // One of the biggest issues with constructors is that while they look just like regular functions, they do not behave like regular functions at all. If you try to use a constructor function without the `new` keyword, your program will not work as expected, but it won't produce error messages that are easy to trace. 
    // What we need is a way to take advantage of the reuse patters of constructors, while at the same time writing code that is more explicit about what it's actually doing. This can be done by pushing the object creation and inheritance code directly into the constructor, essentially turning it into a factory function. 
    
    // Writing explicit factory functions involves relatively minor changes to the code of constructors. Take the following constructor example:
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
    // The objects created by the constructor and the factory function are equivalent, but the factory function construct has the following advantages
        // There's no risk of using it in the "wrong" way. It doesn't require the `new` keyword, as it isn't meant to be used as a constructor. Nor is it a constructor that forces proper invocation, essentially hiding errors. The factory function is meant to be used in exactly one way: as a regular function.
        // There's not pretense of creating a "class" of objects by capitalizing the name or otherwise trying to make it look like the classes or other languages. The prototype property isn't used, so there will be no instanceof link between the function and the objects it creates. It is simply a function that happens to create objects.
    // If we want to go all the way and not use `new` at all in our code, the following generic factory can be used to invoke constructor functions in a more explicit manner:
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
        // Modules are actually very similar to factory functions. The main difference is how they're created.
                const calculator = (() => {
                    const add = (a, b) => a + b;
                    const sub = (a, b) => a - b;
                    const mul = (a, b) => a * b;
                    const div = (a, b) => a / b;
                    return {
                        add,
                        sub,
                        mul,
                        div,
                    };
                })();
                
                calculator.add(3,5) // 8
                calculator.sub(6,2) // 4
                calculator.mul(14,5534) // 77476
        // The concepts are exactly the same as the factory funnction. However, instead of creating a factory that we cann use over and over again to create multile objects, the module pattern wraps the factory inn ann IIFE (Immediately Invoked Function Expression).

        // IIFEs (Immediately Invoked Function Expression) (pronounced "iffy")
            // Functions can be created either through a function declaration or a function expression. A declaration is the "normal" way of creating a named function.
                function myFunction () { /* codd here */ }
            // If you are assigning a function to a variable property, you are dealing with a functionn expression 
                // Assignment of a function expression nto a variable
                var myFunction = function () { /* codd here */ }
                // Assignmennt of a function expression to a property
                var myObj = {
                    myFunction: function () { /* codd here */ }
                };
            // A function created in the context of an expression is also a function expression
                // Anything withing the parentheses is part of an expression
                (function () { /* codd here */ });
                //Anything after the not operator is part of an expression
                !function () { /* codd here */ };
            // THE KEY THINGS ABOUT JS EXPRESSIONS IS THAT THEY RETURN VALUES. 
            // In both cases above, the return value of the expression is the function. That means that if we want to invoke the funnction expressionn right away, we just need to tack a couple of parenthses on the end; i.e., the first bit of code that we looked at:
                (function () { 
                    /* codd here */ 
                })()
            // THE PRIMARY REASION TO USE AN IIFE IS TO OBTAIN DATA PRIVACY. Because JS's `var` scopes variables to their containing function, any variables declared with the IIFE cannot be accessed by the outside world.
                (function () {
                    var foo = "bar";
                    console.log(foo); // outputs: bar
                })();

                console.log(foo); // ReferenceEroor: foo is not defined
            // Of course, you could explicitly name and then invoke a function to achieve the same ends:
                function myImmediateFunction () {
                    var foo = "bar";
                    console.log(foo); // Outputs: "bar"
                }
                myImmediateFunction();
                console.log(foo);  // ReferenceError: foo is not defined
            // However, the above approach has a few downsides.
                // First, it unnnecessarily takes up a name in the global namespace, increasing possibility of name collisions. 
                // Second, the intentions of this code aren't as self-documenting as an IIFE.
                // Third, because it is named and isn't self documenting, it might accidentally be invoked more than once. 
            // NOTE: You can easily pass arguments into the IIFE as well
                var foo = "foo";
                (function (innerFoo) {
                    console.log(innerFoo);  // outputs: "foo"
                })(foo);
        
        // JavaScript Module Pattarn Basics
            // The Module Pattern is a design pattern that creates encapsulation of our code. Modules are commonly used as singleton style objects where only one instance exists. It is great for services and testing/TDD and there are many different variations of the module pattern.
            
            // Creating a module
                // Start with an anonymous closure - a function that wraps our code and creates an enclosed scope around it. Closures help keep any state or privacy withing that function. Closures are one of the best and most powerful features in JS.
                    (function () { 
                        // codd here
                        // all functions and variables are scoped to this function            
                    })
                // This patter is well known as an IIFE. It is also a good practice to run your modules in "strict mode". Strict Mode will protect you from some of the more dangerous parts in JS.
            
            // Exporting a module
                // Next we want to export our module. This basically assigns the module to a variable that we can use to call our module's methods:
                    var myModule = (function() {
                        "use strict";
                    })();
                // Then, we create a public method for our module to call. To expose this method to code outside our module we return an Object with the methods defined:
                    var myModule = (function () {
                        "use strict";
                        return {
                            publicMethod: function () {
                                console.log("Hello World");
                            }
                        };
                    })();
                    myModule.publiceMethod(); // outputs "Hello World"
            
            // Private methods and properties
                // JS does not have a private keyword by default but using closures we can create private methods and private state.
                    var myModule = (function () {
                        'use strict';
                        var _privateProperty = "Hello World";
                        function _privateMethod() {
                            console.log(_privateProperty);
                        }
                        return {
                            publicMethod: function () {
                                _privateMethod();
                            }
                        };
                    })();
                    myModule.publicMethod(); // outputs "Hello World"
                    console.log(myModule._privateProperty); // is undefined, protected by the modele closure
                    myModule._privateMethod(); // is TypeError, protected by the module closure
                // Because our private properties are not returned they are not available outside of the module. Only our public mehtod has given us access to our private methods. This gives us the ability to create private state and encapsulation within our code.
                // Because JS does not have a privagte keyword, it is common to prefix private properties with an underscore (_private).

            // Revealing Module Pattern
                // The Revealing Module Pattern is one of the most popular ways of creating modules. Using the returnn statement we can return an object literal that "reveals" only the mothods or properties we want to be publicly available.
                    var myModule = (function () {
                        "use strict";
                        var _privateProperty = "Hello World";
                        var publicProperty = "I am a public property";
                        function _privateMethod() {
                            console.log(_privateProperty);
                        }
                        function publicMethod() {
                            _privateMethod();
                        }
                        return {
                            publicMethod: publicMethod,
                            publicProperty: publicProperty
                        };
                    })();
                    myModule.publicMethod(); // outputs "Hello World"
                    console.log(myModule.publicProperty); // outpus "I am a public property"
                    console.log(myModule._privateProperty); // is undefined protected by the module closure
                    myModule._privateMethod(); // is TypeError protected by the module closure
                // The benefit to the Revealing Module Pattern is that we can nlook at the bottom of our modules and quicly see what is publicly available for use
                // Using the Module Pattern with Prototypal Inheritance can ngive you a wide rangne of design patternns with varying pros and cons
            
        // In our calculator example above, the function inside of the IIFE is a simple factory function, but we can just go ahead and assign the object to the variable calculator since we aren't going to need to be making lots of calculators, we only need one. Just like the factory example, we cann nhave as many private functions and variables as we want, and they stay neetly organized, tucked away inside of our module, only exposing the functions we actually want to use in our program.
        
        // A useful side-effect of encapsulating the inner workings of our programs into objects is namespacing. Namespacing is a technique that is used to avoid naming collisions in our programs. For example, it's easy to imagine scenarios where you could write multiple functions with the same name. in our calculator example, what if we had a function that added things to our HTML display, and a function nthat added numbers and operators to our stack as the users input them? It is conceivalbe that we would want to call all three of these functions "add" which, of course, would cause trouble in our program. If all of them were nicely encapsulated inside of an object, then we would have no trouble: calculator.add(), displayController.add(), operatorStack.add().
       
        
















// JS Classes
    // JS does NOT have classes in the same sense as other Object Oriented languages like Java or Ruby. ES6, however, did introduce syntax for object creationn nthat uses the `class` keyword. It is a new syntax that does the exact same thing as the object constructors and prototypes we learned about in the constructor lesson. 
    // There is some controversy about using the class syntax. Opponennets argue that class is basically just syntactic sugar over the existing prototype-based connstructors and that it's danggerous and/or misleading to obscure what's really going on with these objects. Despite the controversy, classes are beginning to crop up in real code bases that you are almost certainly going to encounter with frameworks such as React.
    // Classes can be used much the same way as object contructors.
    // CLASSES AND FACTORY FUNCTIONS DO THE SAME THING

    // Argument: Class in ES6 is a "Good" Part
        // Making the syntax look better and similar to other OO languages, while still keeping the "prototype" inheritance goodness is a good thing. People cann use other ways if they don't want to use "Class" to create Objects. This is an optional way of creating Objects. It doesn't prevent people from creating objects using other techniques like "function factories", "Object literal", etc.
    // Argument: Class in ES6 is a "Bad" Part
        // Conceptually, there is No Class in JS. Objects are created without Classes. 
            // To exist in Java, objects need a blueprint called a Class (similar to how DNA is passed within human beings). 
            // In JS, objects just show up without the need for "Classes". They are similar to "nonliving things", things that can be created or invented. BUT, they come with a plug/socket mechanism called "prototype" that cann be used to wire up different objects. 
            // In JS, there is no overhead and constraints of needing a Class to use object. Further "prototype"-chain based inheritance can wire up any object to any other object that may not be related (IS-A relationship). So it's very flexible compared to Classes. 
        // Bad for Functional Programming
            // In JS, functions are first-class citizens. Functional programming is all about using functions to their fullest extent. There is a notion called: "Favor Composition over Inheritance", and with Classes we are going in the opposite directionn because "Class" notation favors "inheritance over Composition".
    // Summary
        // "Good" because:
            // Class is something everyone learns and making the syntax better is a good thing
            // It's an optionanl feature and there are other ways to create objects like factory functions
            // Using it for limited purposes is fine
        // "Bad" because:
            // The concept of "Class" doesn't exist in JS
            // Concept of classes makes things brittle. Prototypes are better and very flexible.
            // It guides people away from goodnness and power of function programming.

    // Class - Basic Syntax
        // In object-oriented programminng, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementationns of behavior (member functions or methods). - Wikipedia
        
        // The 'class' syntax
                class MyClass {
                    // class methods
                    constructor() { ... }
                    method1() { ... }
                    method2() { ... }
                    method3() { ... }
                    ... 
                }
            // Then use `new MyClass()` to create a new object with all the listed methods.
            // The `constructor()` method is called automatically by `new`, so we can initialize the object there.
                class User {
                    constructor(name) {
                        this.name = name;
                    }
                    sayHi() {
                        alert(this.name);
                    }
                }
                // Usage: 
                let user = new User("John");
                user.sayHi();
            // When `new User("John") is called:
                // 1) a new object is created.
                // 2) the `constructor` runs with the given argument and assignes `this.name` to it.
            // ... then we can call object methods, such as `user.sayHi()`
            // NO COMMA BETWEEN CLASS METHODS - A common pitfall for novice developers is to put a comma between class methods, which would result in na syntax error. The notation nhere is not to be confused with object literals. Within the class, no commas are required.

    // What is a class?
        // In JS, a class is a kind of function
            class User {
                constructor(name) { this.name = name; }
                sayHi() { alert(this.name); }
            }
            // proof: User is a function
            alert(typeof User); // function
        // What the `class User {...}` construct really does is:
            // 1) Creates a function named `User`, that becomes the result of the class declaration. The function code is taken from the `connstructor` method (assumed empty if we don't write such method). 
            // 2) Stores class methods, such as `sayHi`, in `User.prototype`
        // After a `new User` object is created, when we call its method, it's taken from the prototype, so the object has access to class methods. The following is the code to introspect it:
            class User {
                constructor(name) { this.name = name; }
                sayHi() { alert(this.name); }
            }
            // class is a function
            alert(typeof User); // function
            // ...of, more precisely, the conntructor method
            alert(User === User.prototype.constructor); // true
            // The methods are in nUser.prototype, e.g.:
            alert(User.prototype.sayHi); // alert(this.name);
            // there are exactly two methods inn the prototype
            alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

    // Not just syntactic sugar
        // Sometimes people say that `class` is a "syntactic sugar" (syntax that is designed to make things easier to read, but doesn't introduce anything new), because we could actually declare the same without `class` keyword
            // rewriting class User in pur functions
            // 1) Create constructor function
            function User(name) {
                this.name = name;
            }
            // a function prototype has "constructor" property by default, so we don't need to create it
            // 2) Add the method to prototype
            User.prototype.sayHi = function() {
                alert(this.name);
            };
            // Usage:
            let user = new User("John");
            user.sayHi();
        // The result of this definition is about the same. So, there are indeed reasons why `class` can be considered a syntactic sugar to define a connstructor toegether with its prototype methods. Still, there are important differences:
            // 1) First, a function created by `class` is labelled by a special internal property                                     `[[FunctionnKind]]:"classConstructor"`. So it's not entirely the same as creating it manually. The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with `new`:
                    class User {
                        constructor() {}
                    }
                    alert(typeof User); // function
                    User(); // Error: Class constructor User cannot be invoked without "new"
                // Also, a string representation of a class constructor in most JS engines starts with the "class..."
                    class User {
                        constructor() {}
                    }
                    alert(User); // class User { ... }
            // 2) Class methods are non-enumerable. A class definition sets `enumerable` flag to `false` for all methods in the "prototype". That's good, because if we `for..in` over an object, we usually don't want its class methods.
            // Classes always `use strict`. All code inside the class construct is automatically in strict mode.
        
    // Class Expression
        // Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc. Here's an example of a class expression:
            let User = class {
                sayHi() {
                    alert("Hello");
                }
            };
        // Similar to named Function Expressions, class expressions may have a name. If a class expression nhas a name, it's visible inside the class only:
            // "Named Class Expression" (no such term in the spec, but that's similar to Named Function Expression)
            let User = class MyClass {
                sayHi() {
                    alert(MyClass); // MyClass nname is visible only inside the class
                }
            };
            new User().sayHi(); // works, shows MyClass definitionn
            alert(MyClass); // error, MyClass name isn't visible outside of the class
        // We can even make classes dynamically "on-demand", like this:
            function makeClass(phrase) {
                // declare a class and return it
                return class {
                    sayHi() {
                        alert(phrase);
                    };
                };
            }
            // Create a new class
            let User = makeClass("Hello");
            new User().sayHi(); // Hello
    
    // Getters/setters
        // Just like literal objects, classes may include getters/setters, computed properties etc. The following is an example for `user.name` implemented using `get/set`:
            class User {
                constructor(name) {
                    // invokes the setter
                    this.name = name;
                }
                get name() {
                    return this._name;
                }
                set name(value) {
                    if (value.length < 4) {
                        alert("Name is too short.");
                        return;
                    }
                    this._name = value;
                }
            }
            let user = new User("John");
            alert(user.name); // John
            user = new User(""); // Name is too short.
        // Technically, such class declaration works by creating getters and setters in `User.prototype`

    // Computed names [...]
        // Here's an example with a computed method name using brackets `[...]`:
            class User {
                ['say' + 'Hi']() {
                    alert("Hello");
                }
            }
            new User().sayHi();
        // Such features are easy to remember, as they resemble that of literal objects.
    
    // Class fields
        // OLD BROWSERS MAY NEED A POLYFILL - Class fields are a recent addition to the language
        // Previously, our classes only had methods. "Class fields" is a syntax that allows us to add any properties. For instance, let's add `name` property to `class User`:
            class User {
                name = "John";
                sayHi() {
                    alert(`Hello, ${this.name}!`);
                }
            }
            new User().sayHi(); // Hello, John!
        // So, we just write "=" in the declaration, and that's it. The important difference of class fields is that they are set on individual objects, not `User.prototype`:
            class User {
                name = "John";
            }
            let user = new User();
            alert(user.name); // John
            alert(User.prototype.name); // undefined
        // We can also assign values using more complex expressions and function calls:
            class User {
                name = prompt("name, please?", "John");
            }
            let user = new User();
            alert(user.name); // John
        
        // Making bound methods with class fields
            // As demonstrated in Function binding, functions in JS have a dynamic `this`. It depeneds on the context of the call. So if an object method is passed around and called in another context, `this` won't be a reference to its object anymore. For instance, this code will show `undefined`:
                class Button {
                    constructor(value) {
                        this.value = value;
                    }
                    click() {
                        alert(this.value);
                    }
                }
                let button = new Button ("hello");
                setTimeout(button.click, 1000); // undefined
            // The problem is called "losing `this`". There are two approaches to fixing it using Function binding:
                // 1) Pass a wrapper-function, such as `setTimeout(() => button.click(), 1000)`.
                // 2) Bind the method to object, eg in the constructor
            // Class fields provide another, quite elegant syntax:
                class Button {
                    constructor(value) {
                        this.value = value;
                    }
                    click = () => {
                        alert(this.value);
                    }
                }
                let button = new Button("hello");
                setTimeout(button.click, 1000); // hello
            // The class field `click = () => {...}` is created on a per-object basis, there's a separate function for each `Button` object, with `this` inside it referecing that object. We can pass `button.click` around anywhere, and the value of `this` will always be correct.
            // That's expecially useful in browser environment, for event listeners.

    // Summary
        // The basic class syntax looks like this:
            class MyClass {
                prop = value; // property

                constructor(...) { // constructor
                    // ...
                }

                method(...) {} // method

                get something(...) {} // getter method
                set something(...) {} // setter method

                [Symbol.iterator]() {} // method with computed name (symbol here)
                // ...
            }
        // `MyClass` is technically a function (the one that we provide as constructor`), while methods, getters and setters are written to `MyClass.prototype`. 

        // Code for a `Clock` written in "Class" style
            class Clock {
                constructor({ template }) {
                this.template = template;
                }
            
                render = () => {
                let date = new Date();
            
                let hours = date.getHours();
                if (hours < 10) hours = '0' + hours;
            
                let mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;
            
                let secs = date.getSeconds();
                if (secs < 10) secs = '0' + secs;
            
                let output = this.template
                    .replace('h', hours)
                    .replace('m', mins)
                    .replace('s', secs);
            
                console.log(output);
                };
            
                stop = () => {
                clearInterval(this.timer);
                };
            
                start = () => {
                this.render();
                this.timer = setInterval(this.render, 1000);
                };
            }
            
            let clock = new Clock({ template: 'h:m:s' });
            clock.start();
            
            /* 
            console.log(clock.hasOwnProperty('stop')); // true
            console.log(clock.hasOwnProperty('start')); // true
            console.log(clock.hasOwnProperty('render')); // true
            */

        // Code for a `Clock` written in functional style
            function Clock({ template }) {
                this.template = template;
            }
            
            Clock.prototype = {
                constructor: Clock,
            
                render() {
                let date = new Date();
            
                let hours = date.getHours();
                if (hours < 10) hours = '0' + hours;
            
                let mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;
            
                let secs = date.getSeconds();
                if (secs < 10) secs = '0' + secs;
            
                let output = this.template
                    .replace('h', hours)
                    .replace('m', mins)
                    .replace('s', secs);
            
                console.log(output);
                },
            
                stop() {
                clearInterval(this.timer);
                },
            
                start() {
                this.render();
                this.timer = setInterval(() => this.render(), 1000);
                },
            };
            
            let clock = new Clock({ template: 'h:m:s' });
            clock.start();
            
            /* console.log(clock.hasOwnProperty('stop')); // false
            console.log(clock.hasOwnProperty('start')); // false
            console.log(clock.hasOwnProperty('render')); // false */

    // MDN on Class syntax
        // Note the use of 'extends' and 'Mixins'. React (and other frameworks) uses classes in this way. You create your componnennts and make them extend the core React component which gives you access to all their built-in functionality. 

        // Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 classalike semanics.

        // Defining Classes
            // Classes are in fact "special functions", and just as you can define function nexpressions and function ndeclarations, the class syntax has two components: class expressions and class declarations:
                
            // Class Declarations
                // One way to define a class is using a class declaration. To decaulre a class, you use the `class` keyword with the name of the class
                    class Rectangle {
                        constructor(height, width) {
                            this.height = height;
                            this.width = width;
                        }
                    }
                // Hoisting
                    // An important difference between function declarations and class declarations is that function declarations are hoisted and class declarationns are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError
                        const p = new Rectangle(); // ReferenceError
                        class Rectangle {}
            
            // Class Expressions
                // A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body (it can be retrieved through the class's, not an instance's, `name` property).
                    // unnamed
                    let Rectangle = class {
                        constructor(height, width) {
                            this.height = height;
                            this.width = width;
                        }
                    };
                    console.log(Rectangle.name); // output: "Rectangle"

                    // named
                    let Rectangle = class Rectangle2 {
                        constructor(height, width) {
                            this.height = height;
                            this.width = width;
                        }
                    };
                    console.log(Rectangle.name); // output: "Rectangle2"
                // NOTE: Class expressions are subject to the same hoisting restricitons as described in nthe Class declarations section.

        // Class body and method definitions
            // The body of a class is the part that is in curly brackets {}. This is where you define class memebers, such as methods or constructor

            // Strict Mode
                // The body of a class is executed in strict mode, ie, code written here is subject to stricter syntax for increased performance, some otherwise silent errors will be thrown, and certain keywords are reserved for future versions of ECMAScript.

            // Constructor
                // The constructor method is a special method for creating and initializing an object created with a `class`. There can onnly be one special method with the name "constructor" in a class. A SyntaxError will be thrown if the class conntains more than one occurences of a constructor method.
                // A constructor can use the `super` keyword to call the constructor of the super class

            // Prototype methods
                    class Rectangle {
                        constructor(height, width) {
                            this.height = height;
                            this.width = width;
                        }
                        // Getter
                        get area() {
                            return this.calcArea();
                        }
                        // Method
                        calcArea() {
                            return this.height * this.width;
                        }
                    }
                    const squre = new Rectangle(10, 10);
                    console.log(square.area); // 100
                
            // Static methods and properties
                // The static keyword defines a static method or property for a class. Static memebers (properties and methods) are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
                    class Point {
                        constructor(x, y) {
                            this.x = x;
                            this.y = y;
                        }

                        static displayName= "Point";
                        static distance(a, b) {
                            const dx = a.x = b.x;
                            const dy = a.y = b.y;
                            return Math.hypot(dx, dy)
                        }
                    }
                    const p1 = new Point(5, 5);
                    const p2 = new Point(10, 10);
                    p1.displayName; // undefined
                    p1.distance;    // undefined
                    p2.displayName; // undefined
                    p2.distance;    // undefined
                    console.log(Point.displayName);        // "Point"
                    console.log(Point.distance(p1, p2));    // 7.0710678118654755

            // Binding `this` with prototype and static methods
                // When a static or prototype method is called without a value for `this`, such as by assigning a variable to the method and then calling it, the `this` value will be `undefined` inside the method. This behavior will be the same even if the "use strict" directive isn't present, because code within the `class` body's syntactic boundary is always executed in strict mode. 
                    class Animal {
                        speak() {
                            return this;
                        }
                        static eat() {
                            return this;
                        }
                    }

                    let obj = new Animal();
                    obj.speak();    // the Animal object
                    let speak = obj.speak;
                    speak();        // undefined

                    Animal.eat()    // class Animal
                    let eat = Animal.eat;
                    eat();          // undefined 
                // If we rewrite the above using traditional function-based syntax in non-strict mode, then `this` method calls are automatically bound to the initial `this` value, which by default is the global object. In strict mode, autobinding will not happen; the value of `this` remains as passed.
                    function Animal() { }
                    Animal.prototype.speak = function() {
                        return this;
                    }
                    Animal.eat = function() {
                        return this;
                    }

                    let obj = new Animal();
                    let speak = obj.speak;
                    speak();    // global object (in non-strict mode)

                    let eat = Animal.eat;
                    eat();      // global object (in non-strict mode)
                
            // Instance properties
                // Instance properties must be defined inside of class methods:
                    class Rectangle {
                        constructor(height, width) {
                            this.height = height;
                            this.width = width;
                        }
                    }
                // Static (class-side) data properties and prototype data properties must be defined outside of the ClassBody declaration:
                    Rectangle.staticWidth = 20;
                    Rectangle.prototype.prototypeWidth = 25;

            // Field declarations
                // NOTE: Public and private field declarations are an experimental feature.

                // Public field declarations
                    // With the JS field declaration syntax, the above example can be written as:
                        class Rectangle {
                            height = 0;
                            width;
                            constructor (height, width) {
                                this.height = height;
                                this.width = width;
                            }
                        }
                    // By declaring fields up-front, class definitions become more self-documenting, and the fields are always present. As seen above, the fields can be celcared with or without a default value. See public class fields for more info.

                // Private field declarations
                    // Using private fields, the definition can be refined as below:
                        class Rectangle {
                            #height = 0;
                            #width;
                            constructor(height, width) {
                                this.height = height;
                                this.width = width;
                            }
                        }
                    // It's an error to reference private fields from outside of the class; they cann only be read or written within the class body. By defining things which are not visible outside of the class, you ensure that your classes' users can't edepennd o ninternals, which may change version to version.
                    // PRIVATE FIELDS CAN ONLY BE DECLARED UP-FRONT IN A FIELD DECLARATION.
                    // Private fields cannot be created later through assigning to them, the way that normal properties can.

        // Sub classing with `extends`
            // The `extends` keyword is used in class declarations or class expressions to create a class as a child of another class.
                class Animal {
                    constructor(name) {
                        this.name = name;
                    }
                    speak() {
                        console.log(`${this.name} makes a noise.`);
                    }
                }

                class Dog extends Animal {
                    constructor(name) {
                        super(name); // call the super class constructor and pass in the name parameter
                    }
                    speak() {
                        console.log(`${this.nname} barks.`);
                    }
                }
                let d = new Dog("Mitzie");
                d.speak();  // Mitzie barks.
            // If there is a constructor present in the subclass, it needs to first call super() before using "this".
            // One may also extend traditional function-based "classes":
                function Animal (name) {
                    this.name = name;
                }

                Animal.prototype.speak = function () {
                    console.log(`${this.name} makes a noise.`);
                }
                
                class Dog extends Animal {
                    speak() {
                        console.log(`${this.name} barks.`);
                    }
                }

                let d = new Dog('Mitzie');
                d.speak();  // Mitzie barks.
                // For similar methods, the child's method takes precedence over parent's method
            // Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use `Object.setPrototypeOf()`:
                const Animal = {
                    speak() {
                        connsole.log(`${this.name} makes a noise.`);
                    }
                };

                class Dog {
                    constructor(name) {
                        this.name = name;
                    }
                }

                // If you do not do the following you will get a TypeError when you invoke speak
                Object.setPrototypeOf(Dog.prototype, Animal);

                let d = nnew Dog('Mitzie');
                d.speak();  // Mitzie makes a noise.

        // Species
            // You might want to return Array objects in your derived array class MyArray. The species pattern lets you override default constructors. For example, when using methods such as map() that returns the default constructor, you want these methods to return a parent Array object, instead of the MyArray object. The Symbol.species symbol lets you do this:
                class MyArray extends Array {
                    // Overwrite species to the parent Array constructor
                    static get [Symbol.species]() { return Array; }
                }

                let a = new MyArray(1,2,3);
                let mapped = a.map(x => x * x);

                console.log(mapped instanceof MyArray); // false
                console.log(mapped instanceof Array);   // true

        // Super class calls with `super`
            // The `super` keyword is used to call corresponnding methods of super class. This is one advanntage over prototype-based inheritance.
                class Cat {
                    constructor(name) {
                        this.name = nname;
                    }
                    speak() {
                        console.log(`${this.name} makes a noise.`);
                    }
                }

                class Lion extends Cat {
                    speak() {
                        super.speak();
                        console.log(`${this.name} roars.`);
                    }
                }

                let l = new Lion('Fuzzy');
                l.speak();
                // Fuzzy makes a noise.
                // Fuzzy roars.

        // Mix-ins
            // Abstract subclasses or mix-ins are templates for classes. An ECMAScript class can only have a single superclass, so multiple inheritance from tooling classes, for example, is not possible. The functionality must be provided by the superclass.
            // A function with a superclass as input and a subclass extending that superclass as output can nbe used to implement mix-ins in ECMAScript.
                let calculatorMixin = Base => class extends Base {
                    calc() { }
                };

                let randomizerMixin = Base => class extends Base {
                    randomize() { }
                };
            // A class that uses these mix-ins can then be written like this:
                class Foo { }
                class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

    



    // JS Classes with Steven Mayeux (https://www.youtube.com/watch?v=wQ1MuExYzko&list=PLtwj5TTsiP7uTKfTQbcmb59mWXosLP_7S&index=2)
        // The following is a Function Constructor -> the old way to do Classes
            function Person(firstname, lastName) {
                var secret = "tacos are great";     // anything NOT using `this` is private

                this.firstName = firstName;         // anything using `this` is public
                this.lastName = lastName;
                this.hasJob = false;

                this.fullName = function() {
                    return this.firstName + " " + this.lastName;
                }

                this.setFirstName = function(firstName) {
                    this.firstName = firstName;         // allows us to overwrite firstName
                }

                this.setLastName = function(lastName) {
                    this.lastName = lastName;           // allows us to overwrite lastName
                }

                this.getSecret = function() {
                    return secret;                      // allows us to access the private variable
                }
            }

            var person1 = new Person("Luther", "Riggs");        // creates a new instance of a Person

        // The following is a Class 
            class Person {
                constructor(firstName, lastName) {      // the constructor is immediately called whenever the `new` keyword is used 
                    this.firstName = firstName;         // the constructor does all of the initialization
                    this.lastName = lastName;
                    this.hasJob = false;
                }

                // the methods below are "instance methods"
                fullName() {
                    return `${this.firstName} ${this.lastName}`;    // uses a string template instead of concatenating like above
                }

                setFirstName(firstName) {
                    this.firstName = firstName;
                }

                setLastName(lastName) {
                    this.lastName = lastName;
                }
            }
            const person1 = new Person("Luther", "Riggs");        // creates a new instance of a Person

        // `extends` allows you to inherit from another class. This new Worker class below will be an extension of the Person class above. Extends will borrow properties from another class. We can also override methods from the super class (the class that is being extended from).
            class Worker extends Person {       // a Worker is a Person but not all Persons are Workers
                constructor(firstName, lastName, job) {
                    super(firstName, lastName);         // this calls the constructor from the super class (Person)
                    this.job = job;                     // these override the properties initializaed by the super constructor
                    this.hasJob = true;
                }

                setJob(job) {
                    this.job = job;
                }
            }
            const worker1 = new Worker("Luther", "Riggs", "Software Developer");
            // creates a new Worker class that contains all the same methods as Person as well as setting more methods and overrides some variables

        // Static methods don't belong to an instance but to a Class itself
            class Person {
                static species() {              // cannot be called on instance because it belongs to the Class
                    return "Homo sapiens";
                }

                static speciesSentence() {
                    return `Humans are classified as ${this.species()}` // `this` in a static method points to the Class
                }

                constructor(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.hasJob = false;
                }

                fullName() {
                    return `${this.firstName} ${this.lastName}`;
                }

                setFirstName(firstName) {
                    this.firstName = firstName;
                }

                setLastName(lastName) {
                    this.lastName = lastName;
                }
            }

            person1.species(); // TypeError: person1.species is not a function
            Person.species(); // "Homo sapiens"

        // Getters allow us to get a function return without using () to invoke the method 
            class Worker extends Person {
                constructor(firstName, lastName, job) {
                    super(firstName, lastName);
                    this.job = job;
                    this.hasJob = true;
                }

                setJob(job) {
                    this.job = job;
                }

                get biography() {                       // Getters make methods behave like a property
                    const bio = `${this.fullName()} is a ${this.job}`.toUpperCase();
                    return bio; 
                }

                // `get` can be combined with a static method in order to return the result
                static get citizenship() {
                    return "American";
                }
            }
            const worker1 = new Worker("Luther", "Riggs", "Software Developer");
            worker1.biography; // "LUTHER RIGGS IS A SOFTWARE DEVELOPER"
            Worker.citizenship; // "American"

        // Setters allow us to 
            class Person {
                static get species() {
                    return "Homo sapiens";
                }

                static speciesSentence() {
                    return `Humans are classified as ${this.species}`;
                }

                constructor(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.hasJob = false;
                }

                fullName() {
                    return `${this.firstName} ${this.lastName}`;
                }

                setFirstName(firstName) {
                    this.firstName = firstName;
                }

                setLastName(lastName) {
                    this.lastName = lastName;
                }

                set setFullName(name) {
                    name = name.spilit(' ');
                    this.setFirstName(name[0]);
                    this.setLastName(name[1]);
                }
            }

            const person1 = new Person("Luther", "Riggs");
            person1.setFullName = "King Louie";        // uses the Setter function to change firstName and lastName using fullName
            person1.firstName = "King";
            person1.lastName = "Louie";
            person1.fullName() = "King Louie";
















// ES6 Modules
    // Separate from the module pattern, "modules" is a feature that arrived with ES6. Browser support for this feature is quite slim at this point, but is slowly improving and until all modern browsers support it, we can make it work using an external module bundler. 
    // Before we can nreally use these modules, we must first learn npm and webpack. In the end, modules themselves are simple to implement.

    // History of JS
        // npm was originally a package mannager made specifically for node.js, a JavaScript runtime designed to runn non the server, not the frontend. If you have node.js installed, you already have npm installed.
        
        // 1) Navigate your command line to the folder with your index.html file and enter:
                $ npm init 
            // This will prompt you with several questions (the defaults are fine, you cann hit "Enter" for each question) and generate a new file named package.json. This is the configuration file that npm uses to save all project information. 
            // With the defaults, the contents of package.json should look something like this:
                {
                    "name": "your-project-name",
                    "version": "1.0.0",
                    "description": "",
                    "main": "index.js",
                    "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1"
                    },
                    "author": "",
                    "license": "ISC"
                }
        // 2) To install the moment.js JS package, we cann now follow the npm instructions from their home page by entering the following command inn the command line:
                $ npm install moment --save
            // This command does two things -- First, it downloads all the code from the moment.js package into a folder called `node_modules`. Second, it automatically modifies the package.json file to keep track of moment.js as a project dependency.
                {
                    "name": "modern-javascript-example",
                    "version": "1.0.0",
                    "description": "",
                    "main": "index.js",
                    "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1"
                    },
                    "author": "",
                    "license": "ISC",
                    "dependencies": {
                        "moment": "^2.22.2"
                    }
                }
            // This is useful later when sharing a project with others - instead of sharing the node_modules folder (which can get very large), you only nneed to share the package.json file and other developers can ninstall the required packages automatically with the command `npm install`.
        
        // Now we no longer have to manually download moment.js from the website, we can automatically download and update it using npm. Looking inside the `node_modules` folder, we can see the `moment.min.js` file in the `node_modules/moment/min` directory. This means we can link to the npm downloaded version of `moment.min.js` inn the `index.html` file as follows:
                <head>
                    <script src="node_modules/moment/min/moment.min.js"></script>
                    <script src="index.js"></script>
                </head>
        // The good thing is that we can now use npm to download annd update our packages through the command line. The bad thing is that right now we're digging through the `node_modules` folder to find the location of each package and manually including it in our HTML. But that process cann be automated as well.

    // Using a JS module bundler (webpack)
        // Most programminng languages provide a way to import code from one file to another. JS wasn't originally designed with this feature because JS was designed to only run in the browser, with no access to the file system of the client's computer (for security reasons). So for the longest time, organizing JS code in multiple files required you to load each file with variables shared globally. This is actually what's happeninng with the above moment.js example
        // The entire moment.min.js file is loaded in the HTML, which defines a global variable `moment`, which is then available to any file loaded after moment.min.js (regardless of whether or not it needs access to it).
        // In 2009, a project named CommonJS was started with the goal of specifying an ecosystem for JS outside the browser. A big part of CommonJS was its specification for modules, which would finally allow JS to import and export code accross files like most programming languages, without resortinng to global variables. The most well-known implementation of CommonnJS modules is node.js. 

        // node.js is a JS runtime designed to run on the server. Here's what the earlier example would look like using node.js modules. Instead of loading all of moment.min.js with an HTML tag, you cann load it directly in the JS file as follows
            // index.js
            var moment = require('moment');

            console.log("Hello from JavaScript!");
            console.log(moment().startOf("day").fromNow());
        // Again, this is how module loading works in node.js, which works great since node.js is a server side language with access to the computer's file system. Node.js also knows the location of each npm module path, so instead of having to write         `require('.node_modules/moment/min/moment.min.js)`, you can simple write `require('moment')`.
        // This is great for node.js, but if you tried to use the above code in the browser, you'd get an error saying `require` is not defined. The browser doesn't have access to the file system, which means loading modules in this way is very tricky - loading files has to be done dynamically, either synchronously (which slows down execution) or asynchronously (which can have timing issues). 

        // This where a module bundler comes in. 
            // To read the rest => https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70

    // To innstall webpack into the project
        // 1) Navigate to the project folder and use the following code to to install the webpack files from the command line:
                $ npm install webpack webpack-cli --save-dev 
            // Note that we're installing two packages - webpack and webpack-cli (which ennables you to use webpack from the command line). Also note the `--save-dev argument` - this saves it as a development dependency, which means it's a package that you need in your development environmennt but not onn nyour production nserver.
            // You cann see this reflected in the package.json file, which was automatically updated:
                {
                    "name": "modern-javascript-example",
                    "version": "1.0.0",
                    "description": "",
                    "main": "index.js",
                    "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1"
                    },
                    "author": "",
                    "license": "ISC",
                    "dependencies": {
                        "moment": "^2.19.1"
                    },
                    "devDependencies": {
                        "webpack": "^4.17.1",
                        "webpack-cli": "^3.1.0"
                    }
                }
        // 2) Now that we have webpack and webpack-cli installed as packages in the node_modules folder. You can use webpack-cli from the command line as follows:
                $ ./node_modules/.bin/webpack index.js --mode=development
            // This command will run the webpack tool that was installed in the `node_modules` folder, start with the index.js file, find any `require` statements, and replace them with the appropriate code to create a single output file (which by default is `dist/main.js`). The `--mode=development` argument is to keep the JS readable for developers, as opposed to a minified output with the argument `--mode=production`.

        // Now that we have webpack's dist/main.js output, we are going to use it instead of index.js in the browser, as it contains invalid require statements. This would be reflected in the index.html file as follows:
                <head>
                    <script src="dist/main.js"></script>
                </head>
            // If you refresh the browser, you should see that everything is working as before.
        // NOTE that we'll need to ru nthe webpack command each time we change index.js. This is tedious, and will get evenn more tedious as we use webpack's more advanced features (like generating source maps to help debug the original code from the transpiled code). Webpack can read options from a config file in the root directory of the project named `webpack.config.js`, which in our case would look like: 
                // webpack.config.js
                module.exports = {
                    mode: 'development',
                    entry: './index.js',
                    output: {
                        filename: 'main.js',
                        publicPath: 'dist'
                    }
                };
        // Now each time we change index.js, we can nrunn nwebpack with the command: 
                $ ./node_modules/.bin/webpack 
        // We don't need to specify the index.js and `--mode=development` options anymore, since webpack is loading those options from the `webpack.config.js` file. This is better, but it's still tedious to ennter this command for each code change.

        // Overall, this may not seem like much, but there are some huge advanntages to this workflow. We are no lonnnger loading external scripts via global variables. Any new JS libraries will be added using `require` statements in the JS, as opposed to adding new <script> tags in the HTML. Having a single JS bundle file is often better for performance. And now that we added a build step, there are some other powerful features we can add to our development workflow.

    // Transpiling code for new language features (babel)
        // Transpiling code means converting the code in one lannguage to code in another similar language.
        // For CSS, there's Sass, Less, and Stylus.
        // For JS, the most popular was CoffeeScript (2010), but nowadays most people use babel and TypeScript.
            // CoffeeScript focused on improving JS by significatnly channging the language - optional parentheses, significant whitespace, etc. 
            // Babel is not a new language but a transpiler that trannspiles next genneration JS with features not yet available to all browsers (ES 2015 and beyond) to older more compatible JS (ES5). Many peole choose to use babel because it's closest to vanilla JS.
            // TypeScript is a language that is essentially identical to next generation JS, but also adds optional static typing. 
        
        // To use babel with our existing webpack build step:
            // 1) First we'll install babel (which is an npm package) into the project from the command line:
                $ npm install @babel/core @babel/preset-env babel-loader --save-dev 
                // Note that we're installing 3 separate packages as dev dependencies
                    // `@babel/core` is the main part of babel
                    // `@babel/preset-env` is a preset defining which new JS features to transpile
                    // `babel-loader` is a package to enable babel to work with webpack
            // 2) We can configure webpack to use `babel-laoder` by editing the webpack.config.js file as follows:
                // webpack.config.js
                module.exports = {
                    mode: 'development',
                    entry: './index.js',
                    output: {
                        filename: 'main.js',
                        publicPath: 'dist'
                    },
                    module: {
                        rules: [
                            {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            use: {
                                loader: 'babel-loader',
                                options: {
                                    presets: ['@babel/preset-env']
                                }
                                }
                            }
                        ]
                    }
                };
            // The syntax can be confusing (fortunately it's not something you will edit often). Basically we're telling webpack to look for any .js files (excluding ones in the `node_modules` folder) and apply babel transpilation using `babel-loader` with the `@babel/preset-env` preset. READ MORE HERE => http://webpack.github.io/docs/configuration.html

            // Now that everything is set up, we can start writing ES2015 features in our JS. Here's an example of an ES2015 template string in the index.js:
                // index.js
                var moment = require('moment');
                console.log("Hello from JavaScript!");
                console.log(moment().startOf('day').fromNow());

                var name = "Bob", time = "today";
                console.log(`Hello ${name}, how are you ${time}?`);
            // We can also use the ES2015 import statement instead of `require` for loading modules, which is what you'll see in a lot of codebases today:
                // index.js
                import moment from 'moment';

                console.log("Hello from JavaScript!");
                console.log(moment().startOf('day').fromNow());
                var name = "Bob", time = "today";
                console.log(`Hello ${name}, how are you ${time}?`);
            // In this example, the `import` syntax isn't much different from the `require` syntax, but `import` has extra flexibility for more advanced cases. Since we changed index.js, we need to run webpack again in the command line:
                $ ./node_modules/.bin/webpack 
            // Now you can refresh index.html in the browser. At the time of this writing, most modern browsers support all ES2015 features, so it can be hard to tell if babel did its job. You can test it in an older broser like IE9, or you can search in main.js to find the line of transpiled code:
                // main.js
                // ...
                console.log("Hello " + name + " , how are you " + time + "?");
                // ...
            // Here you cann see babel transpiled the ES2015 template string into regular JS string concatenation to maintain browser compatibility. 

            // While this particular example may not be too exciting, the ability to transpile code is a very powerful one. But, while transpiliation may at times seem tedious and painful, it has led to a dramatic improvement of the language in the past few years, as people are testing out tomorrow's features today.

    // If we're concerned about performance, we should be minifying the bundle file, which should be easy enough since we're already incorporating a build step. We also need to re-runn the webpack command each time we change the JS, which gets old real fast. So the next thing we'll look at are some convenience tools to solve these issues.

    // Using a task manager (npm scripts).
        // Now that we've ivested in using a build step to work with JS modules, it makes sense to use a talk runner, which is a tool that auotmates different parts of the build process. For frontend development, tasks include minifying code, optimizing images, running tests, etc.
        // In 2013, Grunt was the most popular frontend task runner, with Gulp following shortly after. Both rely on plugins that wrap other command line tools. Nowadays the most popular choice seems to be using the scripting capabilities built into the npm package manager itself, which doesn't use plugins but instead works with other comman line tools directly.

        // Writing some npm scripts to make using webpack easier involves simply channging the package.json file as follows:
            {
                "name": "modern-javascript-example",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "build": "webpack --progress --mode=production",
                    "watch": "webpack --progress --watch"
                },
                "author": "",
                "license": "ISC",
                "dependencies": {
                    "moment": "^2.22.2"
                },
                "devDependencies": {
                    "@babel/core": "^7.0.0",
                    "@babel/preset-env": "^7.0.0",
                    "babel-loader": "^8.0.2",
                    "webpack": "^4.17.1",
                    "webpack-cli": "^3.1.0"
                }
            }
        // Here we've added two new scripts, `build` and `watch`. To run script, you can enter in the command line:
            $ npm run build
        // This will run webpack (using configuration from the webpack.config.js we made earlier) with the `--progress` option to show the percent prgress and the `--mode=production` option to minimize the code for production.
        // To run the `watch` script:
            $ npm run watch 
        // This uses the `--watch` option instead to automatically re-run webpack each time any JS file changes, which is great for development. 
        // Note that the scripts in package.json can run webpack without having to specify the full path `./node_modules/.bin/webpack`, since node.js knows the location of each npm module path. We can even sweeten things up by installing webpack-dev-server, a separate toll which provides a simple web server with live reloading. To install it as a developmennt dependency, enter the command:
            $ npm install webpack-dev-server --save-dev
        // Then nadd an npm script to package.json:
            {
                "name": "modern-javascript-example",
                "version": "1.0.0",
                "description": "",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "build": "webpack --progress -p",
                    "watch": "webpack --progress --watch",
                    "server": "webpack-dev-server --open"
                },
                "author": "",
                "license": "ISC",
                "dependencies": {
                    "moment": "^2.19.1"
                },
                "devDependencies": {
                    "@babel/core": "^7.0.0",
                    "@babel/preset-env": "^7.0.0",
                    "babel-loader": "^8.0.2",
                    "webpack": "^3.7.1",
                    "webpack-dev-server": "^3.1.6"
                }
            }
        // Now you can start your dev server by running the command:
            $ npm run server 
        // This will automatically open the index.html website in your broser with an address of `localhost:8080` (by default). Any time you change your JS in index.js, webpack-dev-server will rebuild its own bundled JS and refresh the browser automatically. 

        // This is only scratching the surface, there are plenty more options with both webpack and webpack-dev-server. You can of course make npm scripts for running other tasks as well, such as converting Sass to CSS, compressing images, running tests - anything that has a command line tool is fair game. 

    // Conclusion
        // So this is modern JS in a nutshell. We went from plain HTML and JS to using a package manager to automatically download 3rd party packages, a module bundler to creat a single script file, a transpiler to use future JS features, and a task runner to automate different parts of the build process. 
          




















// npm (node package manager)
    // Abridged Command List
        // Base command to initialize a new package.json file
            npm init 

        // Add a new package (will be listed as "dependencies") - by default packages are installed locally
            npm install <package-name> --save-dev
            // Add the `--save-dev` keyword to install dev dependencies. This tells npm to install these as dev tools which will not be included in your production build, but will be used throughout development.
        
        // To install a package globally (package sits in /usr/local/lib/node_modules OR /usr/local/lib/node)
            sudo npm install <package-name> -g 
            // CMD+SHIFT+. will reveal hidden files
            // If you need to change the directory for where npm installs globally => https://docs.npmjs.com/getting-started/fixing-npm-permissions 
        
        // To install a specific version of a package
            npm install <package-name>@x.x.x 

        // To check if any packages need to be updated
            npm outdated        // for local packages
            npm outdated -g     // for global packages
            // Current version is what you have installed in the system
            // Wanted version is the preferred version that you should be on
            // Latest version is the latest version

        // To update a package 
            npm update <package-name> // doesn't always work for various reasons
            npm install <package-name> // will update to the latest version
            sudo npm install <package-name> -g // to updated global packages

        // To remove a package
            npm uninstall <package-name> 

        // Semantic Versioning 
            // How to list the versions of your dependencies in the package.json file
                // x.x.x =>   <major-release> . <minor-release> . <patch-release>
                // ^1.x.x => All minor and patches are OK (default when installing new packages)
                // ~1.x.x => All patches only
                // To be specific about a version, remove the tilde or character
        
        // The package-lock.json file
            // When a file is installed, package.json is the input and package-lock.json is the output. This file will guarantee the same install every time we do an npm install, no matter who we pass this project to - as long as we commit the package-lock.json file to our repo, or include it when we pass the project to someone else. 
            // This is a great way to control your versioning

        // To verify your npm cache
            npm cache verify 
            // Will run a report to verify your cache. 
                // npm keeps a cache of your install modules so that it doesn't have to get them every time. This can sometimes lead to unexpected results. When you try to install a module that should be working properly and it doesn't, or when a version of a module doesn't work, try clearing your cache

        // To clear your npm cache
            npm cache clean --force 

        // To do an npm audit
            npm audit 
            // Whenever you install a new package, the command npm audit run automatically and tells you if there are any issues with the package (version 6 or above is needed). 
            // The audit will show you 
                // The level of the issue
                    // If 'low' or 'moderate' you can fix them at your own leisure
                    // If 'high' or 'critical' you should address them ASAP
                // The name of the package where the issue is
                // When it was patched 
                // What dependency it is a part of
                // Semver warning - doesn't always show up but if it does it means the patch could be breaking the package
        // To fix any issues
            npm audit fix 
            // or install the packages one by one
            npm install <package-name>  // this is suggested - the package name is listed in the audit

        // npm scripts for a simple way to run commands
            // These are listed in the package.json file in object format. The script to run is a value of a key. 
            // You can find a list of preset commands at https://docs.npmjs.com/misc/scripts To run a preset command:
                npm <preset-command>
            // You can also create your own custom scripts
                "scripts": { 
                    "script-name": "code to run"
                }
            // When you run your "script-name", it will run the code in the cli
            // To run the script
                npm run <script-name>
            // This allows you to do the same command with less code 

        // npx was created to solve package pollution issues (needs version 5.2.0 or above)
            npx <package-name>
            // npx temporarily installs a package in order to create a new app. This keeps you from having to have the full package in your global directory or application
            // You can also create scripts that run npx commands


    // The node package manager is a command line tool that gives you access to a gigantic repository of plugins, libraries and tools. It is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well. 
    // Packages (or modules) on npm are simply directories that contain reusable code that can be downloaded from npm. These packages also contian a file called package.json that holds metadata about the files in the package. The typical website is built using many packages. These packages are designed to solve a problem and solve it well. 

    // Downloading and installing packages locally
        // You can install a package locally if you want to depend on the package from your own module, using something like Node.js `require`. This is the `npm install` default behavior.
        
    // Installing an unscoped packaged
        // Unscoped packages are always public, which means they can nbe searched for, downloaded, and installed by anyone. (Similar to how unscoped variables are public to JS) To install a public package, on the command line, run:
            npm install <package_name>
        // This will create the `node_modules` directory in your current directory (if one doesn't exist yet) and download the package to that directory. 
            // NOTE: if there is no package.json file in the local directory, the latest version nof the package is installed. If there is a package.json file, npm installs the latest version that satisfies the semver rule declared in package.json.

    // Installing a private package
        // Private packages cann only be downloaded and installed by those who have been granted read access to the package. Since private packages are always scoped, you must reference the scope name during installation: 
            npm install @scope/private-package-name 

    // Testing package installation
        // To confirm that `npm install` worked correctly, in your module directory, check that a `node_modules` directory exists and that it contains a directory for the package(s) you installed:
            ls node_modules 
    
    // Installed package version
        // If there is a package.json file in the directory in which `npm install` is run, npm installs the latest version of the package that satisfies the semantic versioning rule declared in package.json.
        // If there is no package.json file, the latest version of the package is installed. 

    // Installing a package with dist-tags
        // Like `npm publish`, `npm install <package_name>` will use the `latest` tage by default.
        // To override `example-package` at the version tagged with `beta`, you would run the following command:
            npm install example-package@beta 

    // Creating a package.json file
        // You can add a package.json file to your package to make it easy for others to manage and install. Packages published to the registry must contain a package.json file. 
        // A package.json file:
            // lists the packages your project depends on
            // specifies versions of a package that your project can use using semantic versioning rules
            // makes your build reproducible, and therefore easier to share with other developers
        // NOTE: To make your package easier to find on the npm website, we recommend including a custom description in your package.json file. 

    // package.json fields
        // Required name and version fields
            // A package.json file must contain "name" and "version" fields.
                // The "name" field contains your package's name, and must be lowercase and one word, and may contain hyphens and underscores
                // The "version" field must be inn the form `x.x.x` and follow the semantic versionning guidelines.
        // Author field
            // If you want to include package author information in "author" field, use the following format (email and website are both optional): 
                Your Name <email@example.com> (http://example.com)
        // Example
            {
                "name": "my-awesome-package",
                "version": "1.0.0"
            }    
    
    // Creating a new package.json file
        // You cann create a package.json file by running a CLI questionnaire or creating a default package.json file.
        // Running a CLI questionnaire
            // To create a package.json file with values that you supply, use the `npm init` command.
                // 1) On the command line, navigate to the root directory of your package.
                    cd /path/to/package 
                // 2) Run nthe following commang
                    npm init 
                // 3) Answer the questions in the command line questionnaire.
            // Customizing the package.json questionnaire
                // If you expect to create many package.json files, you cann customize the questions asked and fields created during the `init` process so all the package.json files contain a standard set of information>
                    // 1) In your home directory, create a file called `.npm-init.js`
                    // 2) To add custom questions, using a text editor, add questions with the `prompt` funcntion:
                        module.exports = prompt("what's your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");
                    // 3) To add custom fields, using a text editor, add desired fields to the `.npm-init.js` file:
                        module.exports = {
                            customField: 'Example custom field',
                            otherCustomField: 'This example field is really cool'
                        }
                // To learn more about creating advanced `npm init` customizations, see the init-package-json GitHub repository.
        // Creating a defaul tpackage.json file
            // To create a default package.json using information extracted from the current directory, use the `npm init` command with the `--yes` or `-y` flag. For a list of default values, see "Default values extracted from the current directory".
                // 1) On the command line, navigate to the root directory of your package.
                    cd /path/to/package 
                // 2) Run the following command:
                    npm init --yes 
            // Example 
                > npm init --yes
                Wrote to /home/ag_dubs/my_package/package.json:
            
                {
                    "name": "my_package",
                    "description": "",
                    "version": "1.0.0",
                    "main": "index.js",
                    "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1"
                    },
                    "repository": {
                        "type": "git",
                        "url": "https://github.com/ashleygwilliams/my_package.git"
                    },
                    "keywords": [],
                    "author": "",
                    "license": "ISC",
                    "bugs": {
                        "url": "https://github.com/ashleygwilliams/my_package/issues"
                    },
                    "homepage": "https://github.com/ashleygwilliams/my_package"
                }
            // Default values extracted from the current directory
                // name: the current directory name
                // version: always 1.0.0
                // description: info from the README, or an empty string ""
                // main: always index.js
                // scripts: by default creates an empty test script
                // keywords: empty
                // author: empty
                // license: ISC
                // bugs: information from the current directory, if present
                // homepage: information from the current directory, if present
        // Setting config options for the init command 
            // You can set default config options for the init command. For example, to set the default author email, author name, and license, on the command line, run the following commands:
                > npm set init.author.email "example-user@example.com"
                > npm set init.author.name "example_user"
                > npm set init.license "MIT"
    
    // If you run into trouble at any point, you can check out the official docs page for more tutorials and documentation
        // https://docs.npmjs.com/




// Yarn
    // Yarn is a replacement for the default npm. For the most part, it does the same things though it does have a few more features. Recent versions of npm have incorporated some of the best features of Yar, so using it won't offer you any real advantages at this point in your career. It is a fine project, however, and may be worth your consideration in the future. 
    // https://classic.yarnpkg.com/en/




// Webpack
    // Webpack is simply a tool for bundling modules. There is a lot of talk across the net about how difficult and complex it is to set up and use, but at the moment our needs are few and the setup is simple enough. In fact, you cann see an example of getting it up and running on the front page of their website - https://webpack.js.org/
    // Webpack is a very powerful tool, and with that power comes a decent amount of complexity. Don't let that scare you off, the basic configuration is not difficult and proficiency with webpack looks amazing on resumes.

    // Getting Started
        // webpack is used to compile JS modules. Once installed, you can interface with webpack either from its CLI or API. If you're still new to webpack, please read through the core concepts (https://webpack.js.org/concepts/) and this comparison (https://webpack.js.org/comparison) to learn why you might use it over the other tools that are out in the community.
        // Since webpack v5.0.0-beta.1 the minimum Node.js versionn to run webpack is 10.13.0 (LTS)
    // Basic Setup
        // First, let's creat e a directory, initialize npm, install webpack locally, and install the webpack-cli (the tool used to runn webpack on the command line):
            mkdir webpack-demo
            cd webpack-demo
            npm init -y
            npm install webpack webpack-cli --save-dev
            // Throughout the Guides we will use `diff` blocks to show you what changes we're making to directories, files, and code.
        // Now we'll creat the following directory structure, files and their contents:
            // project
            webpack-demo    // main directory
            |- package.json
            |- index.html
            |- /src         // sub directory
                |- index.js

            // src/indes.js
            function component() {
                const element = document.createElement('div');
                // Lodash, currently included via a script, is required for this line to work
                element.innerHTML = _.join(['Hello', 'webpack'], ' ');
                return element;
            }
            document.body.appendChild(component());

            // index.html
            <!doctype html>
            <html>
            <head>
                <title>Getting Started</title>
                <script src="https://unpkg.com/lodash@4.16.6"></script>
            </head>
            <body>
                <script src="./src/index.js"></script>
            </body>
            </html> 

        // We also need to adjust our `package.json` file in order to make sure we mark our package as `private`, as well as removing the `main` entry. This is to prevent an accidental publish of your code.
            // If you want to learn more about the inner workings of `package.json`, it is recommended you read the npm documentation.
            // package.json
            {
                "name": "webpack-demo",
                "version": "1.0.0",
                "description": "",
                "private": true,
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "keywords": [],
                "author": "",
                "license": "ISC",
                "devDependencies": {
                    "webpack": "^4.20.2",
                    "webpack-cli": "^3.1.2"
                },
                "dependencies": {}
            }
        // In this example, there are implicit dependencies between the <script> tags. Our `index.js` file depends on `lodash` being included in the page before it runs. This is because `index.js` never explicitly declared a need for `lodash`; it just assumes that the global variable `_` exists. 
        // There are problems with managing JS projects this way:
            // It is not immediately apparent that the script depends on an external library.
            // If a dependency is missing, or included in the wrong order, the application will not function properly.
            // If a dependency is included but not used, the browser will be forced to download unnecessary code. 
        // Let's use webpack to manage these scripts instead.

    // Creating a Bundle
        // First, we'll tweak our directory structure slightly, separating the "source" code (/src) from our "distribution" code (/dist). The "source" code is the code that we'll write and edit. The "distribution" code is the minimized and optimized `output` of our build process that will eventually be loaded in the browser. Tweak the directory structure as follows:
            // project
            webpack-demo
            |- package.json
            |- /dist
                |- index.html
            |- /src
                |- index.js
        // To bundle the `lodash` dependency with `index.js`, we'll need to install the library locally:
            npm install --save lodash
            // When installing a package that will be bundled into your production bundle, you should use `npm install --save`. If you're installing a package for development purposes (eg, a linter, testing libraries, etc) then you should use `npm install --save-dev`. More info can be founnd in the npm documentation - https://docs.npmjs.com/cli/install
        // No, let's import `lodash` in our script:
            // src/index.js
            import _ from 'lodash';
            function component() {
                const element = document.createElement('div');
                // Lodash, now imported by this script
                element.innerHTML = _.join(['Hello', 'webpack'], ' ');
                return element;
            }
            document.body.appendChild(component());
        // Now, since we'll be bundling our scripts, we have to update our `index.html` file. Let's remove the lodash <script>, as we now `import` it, and modify the other <script> tag to load the bunndle, instead of the raw `/src` file:
            // dist/index.html
            <!doctype html>
            <html>
            <head>
                <title>Getting Started</title>
            </head>
            <body>
                <script src="main.js"></script>
            </body>
            </html>
        // In this setup, `index.js` explicitly requires `lodash` to be present, and binds it as `_` (no global scope pollution). By stating what dependencies a module needs, webpack can use this information to build a dependency graph. It then uses the graph to generate an optimized bundle where scripts will be executed in the correct order. 
        // With that said, let's run `npx webpack`, which will take our script as `src/index.js` as the entry point, and will generate `dist/main.js` as the output. The `npx` command, which ships with Node 8.2/npm 5.2.0 or higher, runs the webpack binary (`./node_modules/.bin/webpack`) of the webpack package we installed in the beginning. 
            npx webpack

            ...
            Built at: 13/06/2018 11:52:07
              Asset      Size  Chunks             Chunk Names
            main.js  70.4 KiB       0  [emitted]  main
            ...
            
            WARNING in configuration
            The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
            You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
            // Your output may vary a bit, but if the build is successful then you are good to go. Also, don't worry about the warning, we'll tackle that later
        // Open `index.html` from the `dist` directory in your browser and, if everything went right, you should see the following text: "Hello webpack". 
            // If you are getting a syntax error in the middle of minified JS when opening `index.html` in the browser, set `development mode` and run `npx webpack` again. This is related to running `npx webpack` on latest Node.js (v12.5+) instead of LTS version. 

    // Modules 
        // The `import` and `export` statemennts have been standardized in ES2015. They are supported in most of the browsers at this moment, however there are some browsers that don't recognize the new syntax. But don't worry, webpack does support them out of the box.
        // Behind the scenes, webpack actually "transpiles" the code so that older browsers can also run it. If you inspect `dist/main.js`, you might be able to see how webpack does this. Besides `import` and `export`, webpack supports various other module syntaxes as well, we Module API (https://webpack.js.org/api/module-methods) for more info.
        // Note that webpack will not alter any code other than `import` and `export` statements. If you are using other ES2015 features, make sure to use a transpiler such as Babel or Buble via webpack's loader system. 
                
    // Using a Configuration
        // As a version 4, webpack doesn't require any configuration, but most projects will need a more complex setup, which is why webpack supports a configuration file. This is much more efficient than having to manually type in a lot of commands in the terminal, so let's create on: 
            // project
            webpack-demo
            |- package.json
            |- webpack.config.js
            |- /dist
                |- index.html
            |- /src
                |- index.js

            // webpack.config.js
            const path = require('path');
            module.exports = {
                entry: './src/index.js',
                output: {
                    filename: 'main.js',
                    path: path.resolve(__dirname, 'dist'),
                },
            };
        // Now, let's run the build again but instead using our new configuration file:
            npx webpack --config webpack.config.js

            ...
              Asset      Size  Chunks             Chunk Names
            main.js  70.4 KiB       0  [emitted]  main
            ...
            
            WARNING in configuration
            The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
            You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
            // If a `webpack.config.js` is present, the `webpack` command picks it up by default. We use the `--config` option here only to show that you can pass a configuration of any name. This will be useful for more complex configurations that need to be split into multiple files. 
        // A configuration file allows far more flexibility than simple CLI usage. We can specify loader rules, plugins, resolve options and man other enhancements this way. See the configuration documentationn to learn more (https://webpack.js.org/configuration).

    // NPM Scripts
        // Given it's not particularly fun to run a local copy of webpack from the CLI, we can set up a little shortcut. Let's adjuct our package.json by adding an npm script:
            // package.json
            {
                "name": "webpack-demo",
                "version": "1.0.0",
                "description": "",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1",
                    "build": "webpack"
                },
                "keywords": [],
                "author": "",
                "license": "ISC",
                "devDependencies": {
                    "webpack": "^4.20.2",
                    "webpack-cli": "^3.1.2"
                },
                "dependencies": {
                    "lodash": "^4.17.5"
                }
            }
        // Now the `npm run build` command can be used in place of the `npx` command we used earlier. Note that within `scripts` we can nreference locally installed npm packages by name the same way we did with `npx`. This convention is the standard in most npm-based projects because it allows all contributors to use the same set of common scripts (each with flags like `--config` if necessary).
        // Now run the following command and see if your script alias works:
            npm run build

            ...
              Asset      Size  Chunks             Chunk Names
            main.js  70.4 KiB       0  [emitted]  main
            ...
            
            WARNING in configuration
            The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
            You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/.
        // Custom parameters can be passed to webpack by adding two dashes between the `npm run build` command and your parameters, eg `npm run build -- --colors`
    
    // There are a couple of key concepts to understanding how webpack works - entry and output. In this example, we rearranged the files into a `src` and `dist` folder. Technically we could have called those folders anything, but those names are typical. `src` is our source directory - in other words, `src` is where we will write all of the code that webpack is going to bundle up for us. When webpack runs, it goes through all of our files looking for any `import` statements and then compiles all of the code we need to run our site into a single file inside of the `dist` folder (short for distribution). Our entry file is the main application file that links (either directly or indirectly) to all of the other modules in our project. In this example, it is `/src/index.js`. The output file is the compiled version - `dist/main.js`




// ES6 Modules
    // (Via MDN) There are only two components to ES6 Modules: 
        // import
            // The static import statement is used to import read only live bindings which are exported by another module. Imported modules are in `strict mode` whether you declare them as such or not. The `import` statement cannot be used in embedded scripts unless such script has a `type="module"`. Bindings imported are called live bindings because they are updated by the module that exported the binding.
            // There is also a function-like dynamic `import()`, which does not require scripts of `type="module"`.
            // Backward compatibility can be ensured using attribute `nomodule` on the <script> tag.

            // Syntax
            import defaultExport from "module-name";
                // ^ importing defaults
            import * as name from "module-name";
                // ^ import an entire module's content - call with myModule.methodName()
            import { export1 } from "module-name";
                // ^ import a single export from a module
            import { export1 as alias1 } from "module-name";
                // ^ import an export with a more convenient alias
            import { export1 , export2 } from "module-name";
                // ^ import multiple exports from module
            import { foo , bar } from "module-name/path/to/specific/un-exported/file";
                // ^ import multiple exports from a module
            import { export1 , export2 as alias2 , [...] } from "module-name";
            import defaultExport, { export1 [ , [...] ] } from "module-name";
            import defaultExport, * as name from "module-name";
            import "module-name";
                // ^ import a module for its side effects only
            var promise = import("module-name");

            // defaultExport - Name that will refer to the default export from the module
            // module-name - The module to import from. This is often a realtive of absolute path name to the .js file containing the module. Certain bundlers may permit or require the use of the extension; check your environment. Only single quoted and double quoted Strings are allowed.
            // name - Name of the module object that will be used as a kind of namespace when referring to the imports.
            // exportN - Name of the exports to be imported.
            // aliasN - Names that will refer to the name imports.
        // export
            // The export statement is used whenn creating JS modules to export live bindings to functions, objects, or primitive values from the module so they can be used by other programs with the `import` statment. Bindings that are exported can nstill be modified locally; when nimported, although they can only be read by the importing module the value updates whenever it is updated by the exporting module.
            // Exported modules are in "strict mode" whether you declare them as such or not. The export statement cannot be used in embedded scripts. 

            // Syntax 
                // There are two types of exports:
                    // 1) Named Exports (Zero or more exports per module)
                    // 2) Default Exports (One per module)
                // nameN - identifier to be exported (so that it can be imported via `import` in another script)
                    
                    // Exporting individual features
                    export let name1, name2, …, nameN; // also var, const
                    export let name1 = …, name2 = …, …, nameN; // also var, const
                    export function functionName(){...}
                    export class ClassName {...}

                    // Export list
                    export { name1, name2, …, nameN };

                    // Renaming exports
                    export { variable1 as name1, variable2 as name2, …, nameN };

                    // Exporting destructured assignments with renaming
                    export const { name1, name2: bar } = o;

                    // Default exports
                    export default expression;
                    export default function (…) { … } // also class, function*
                    export default function name1(…) { … } // also class, function*
                    export { name1 as default, … };

                    // Aggregating modules
                    export * from …; // does not set the default export
                    export * as name1 from …; // Draft ECMAScript® 2O21
                    export { name1, name2, …, nameN } from …;
                    export { import1 as name1, import2 as name2, …, nameN } from …;
                    export { default } from …;
    
    // The import statement is the same thing that you use in webpack and are simple to use:
        // a file called functionOne.js
        const functionOne = () => console.log('FUNCTION ONE!')
        export { functionOne }
        // another JS file
        import { functionOne } from './functionOne'
import { lookupService } from 'dns';
        functionOne() //this should work as expected!
    
    // There are many benefits to writing your code in modules. One of the most compelling is code reuse. If, for instance, you have written some functions that manipulate the DOM in a specific way, putting all of those into their own file as a "module" meanns that you can copy that file and re-use it very easily.
    
    // Other benefits include all of the benefits to wrapping your code in factory functions or using the module patternn (the module patter and ES6 modules are not the same things). By using ES6 modules you can keep different parts of your code cleanly separated, which makes writing and mainting your code much easier and less error-prone. Keep in mind that you can export constructors, classes and factory functions from your modules.
    
    // To pull it all together, let's writ a simple module and thenn include it in our code. We are going to continue from where the webpack tutorial left off. Before beginning your file directory should look something like this:
        |- dist 
            |- main.js
            |- index.html
        |- src 
            |- index.js 
        |- package-lock.json
        |- package.json 
        |- webpack.config.js 
    // and you should be able to bundle and runn webpack by simply typing `npx webpack` in the terminal

    // Add a new file to the src directory called myName.js with the following contents:
        const myNname = (name) => "Hi! My name is " + name;
        export default myNname 
    // Then in src/index.js import and use your new function.
        // import your function
        import myName from './myName';

        function component() {
            var element = document.createElement('div');
            // use your function!
            element.innerHTML = myName('Cody');
            return element;
        }
        document.body.appendChild(component());
    
    // Now, if you run `npx webpack` in your project directory your page should show our new function being used.
    // There are 2 different ways to use exports in your code: named exports and default exports. Which optino you use depends on what you're exporting. 
        // As a general rule if you wannt to export multiple functions use named exports with this pattern: 
            const functionOne = () => 'ONE'
            const functionTwo = () => 'TWO'
            
            export {
                functionOne,
                functionTwo
            }
        // and to import them:
            import {functionOne, functionTwo} from './myModule'
        
    // Using this pattern give you the freedom to only import the functions you need in the various files of your program. So it's perfectly fine to only import functionOne if that's the onnly one you need. 


















// jQuery 
    // The following is a bare minimum setup for utitlizing jQuery on a "real" website. We have a basic HTML5 structure stubbed out. jQuery is included as a <script> and the nwe perform a super simple jQuery task:

    // Add the jQuery file to your scripts folder and then link it to your HTML file with the following:
        <script src="scripts/jquery-3.5.1.js"></script>
    
    // Select and Do
        // One way to think of jQuery is the "Select and Do" library. jQuery is particularly good at selecting elements on the page (stuff in the DOM) and then doing something. Select and do.
        // jQuery uses CSS selectors to location elements
            $("selector").method("parameter1","parameter2", "parameterN");
            $("h1").css("color", "red");
        // jQuery can chain methods until you place a semi-colon at the end of the syntax
            $("#selector-id").css("color","red").hide().addClass().anotherMethod();
        // Pass multiple parameters to the same method using curly braces and Object syntax
            $(".selected-class").css({
                "color": "red",
                "font-family": "Georgia"
            });
            // ALL STYLES ARE APPLIED AS LINE STYLE SYNTAX
    
    // jQuery Selectors are CSS3 Selectors
        // In CSS, you can select all <h1> elements on the page with this:
            h1 { /* styles for all <h1> elements here */ }
        // In jQuery, you can use that exact same selector:
            $("h1") // set of all <h1> elements
        // You can use any CSS selector in jQuery. The following uses the :nth-of-type selector to select the second definition term in a definition list:
            $("dt:nth-of-type(2)").html("I'm the second definition term!");
        // The .html() mthod is a useful on. It allows you to change (or get) the "innerHTML" of an element. It is similar to the .text() method, but .text() is literally just for text (it won't return actual HTML from inside the element). 
            // Example: if the "guts" were `Some <span>text</span>`, it would just return "Some text". Setting text with it will excape any HTML you put inn, meaning you would literally see the "<span>". 
        // Getting text with it is unique as well, for if you select multiple elements, it will return the combined text from all of them, which is unique inn jQuery. In other cases when you "get" a value from a method, it will return the value from the first in the set. Like .height() will just return the height from the first element in the set. 
    
    // All about DOM ready
        // If a jQuery script is placed in the <head> of the HTML document, it will fail because it will be run before there is any HTML rendered to the browser. The best way to handle this is to load JS files at the bottom of your page. Right above the closing </body> tag. Placing script tags at the bottom of your page will also increase you page load time because JS files "block" page rendering as they are downloaded and ran. 
        // We can still fix the not-finding-elements issue even if we are forced to load scripts in the head. We do it through the jQuery "DOM Ready" function. Literally, when the document is done and ready to be manipulated. 
            $(documennt).ready(function() { /* code here */ });
        // There is a shorter version which does the exact same thing:
            $(function () { /* code here */ });
        // Putting your code inside a function like that ensures it won't run unntil the documennt is ready. It's actually a rather clever bit of code that does it, which of course is difficult to do cross-browser. What is cool about it is that it is pretty fast. It's not the same as waiting for the entire winndow to load, which is slow, because it waits for all resources to be done downloading before firing. DOM ready happens much soonner. If you do need to wait for resources to be done (eg, you need to measure an image), you can wait for that like this:
            $(window).load(function() { /* code here */ });
        // To fix your JS-in-the-head proglem with a DOM Ready, the script would look like this
            <script src="scripts/jquery-2.0.3.js"></script>
            script>
                $(function () {
                    $("h1").css("color", "red");
                });
            </script>
        
    // jQuery Selector Extensions
        // There are a number of additionnal selectors that jQuery offers (via the Sizzle selector engine) that are pretty darn useful. For instance, CSS has attribute selectors that allow you to select an element based on any arbitrary attribute the element might have.
            <div data-whatever="elephant-eyeballs"></div>
        // We can write the following in jQuery to select that element
            $("[data-whatever="elephant-eyeballs"]");
        // There are variations on the attribute selector, like instead of `=` you can use `^=` to indicate the "starts with this value". For some reason, CSS doesn't have `!=` or "not equal to this value", but jQuery does!
            $()
        // There are lots of these selector extensions, including the following:
            // :eq() - a 0-indexed version of :nth-child()
            // :even - shortcut for :nth-child(even)
            // :gt(n) - select elements with a greater index than n. Also a shortcut for a more complex :nth-child() formula
            // :has() - limites the selection to elements which contain what you pass this pseudo selector
        // You can also make your own selection extensions if you wish, by using the following syntax:
            jQuery.extend(jQuery.expr[':'], {  
                inview: function (el) {    
                var $e = $(el),    
                    $w = $(window),    
                    top = $e.offset().top,   
                    height = $e.outerHeight(true),    
                    windowTop = $w.scrollTop(),    
                    windowScroll = windowTop - height,    
                    windowHeight = windowTop + height + $w.height();    
            
                return (top > windowScroll && top < windowHeight);  
                }
            });
        
    // Doing things with jQuery
        // .on() is the best/standard way to bind events jQuery. Bind, meaning "watch for this event on this element or set of elements"
            $("#link-that-toggles").on("click", function() {
                $("#thing-to-toggle").slideToggle();
            });
        // .preventDefault() is used to prevent a functions default behavior from taking place
            $("#link-that-toggles").on("click", function(event) {
                $("#thing-to-toggle").slideToggle();
                event.preventDefault();
            });
        // jQuery is great for setting an active class on things that you click
            $("nav a").on("click", function() {    
                $("nav a").removeClass("active");                
                $(this).addClass("active");        
            });

    // preventDefault(), stopPropagation, and return false
        // https://css-tricks.com/lodge/learn-jquery/08-preventdefault-stoppropagation-return-false/
            

















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