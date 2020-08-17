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








// JS Object Methods

    // Create an object 
    let objectName = new Object();      // 'object constructor' syntax
    let objectName = {};                // 'object literal' syntax

    // Create an object and add properties
    let objectName = {
        property: value, 
        property: value
    };

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
            let key = 'prompt('What would you like to know about the user?', `userInput`)';
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

    // Check to see if a property exists withint an object. Can access any property within an object. There is no error is the property doesn't exist.
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
        // The first parameter (x) defines the position where new elelements should be ADDED (spliced in). The second parameter (y) defines how many elements should be REMOVED). The rest of the parameters ("newElement1", "newElement2") define the new elemennts to be added.

    // Removes the LAST element from an array
        arrayName.pop();

    // Deletes an element from an array
        delete arrayName[x];
        // * Using `delete` may leave undefined holes in the array. You should use `pop()` or `shift()` instead.

    // Cuts out a piece of an array into a new array, starting at 'index-number'
        let newArray = arrayName.slice(index-number);
        // * The `slice()` method creates a new array. It does not remove any elements from the source array

    // Cuts out a piece of an array into a new array from the starting argument up to, but not including, the end argument 
        let newArray = arrayName.slice(start-argument, end-argument);
        // If the end argument is omitted, slice() will cut out the rest of the array

    // Removes elements without leaving "holes"
        arrayName.splice(0, 1);
        arrayName.splice(x, y);
        // The first parameter (x) defines the position where new elements should be ADDED (spliced in). The second parameter (y) defines how many elemennts should be REMOVED. The rest of the parameters are omitted. No new elemennts will be added.

    // Creates a new array by merging (concatenating) existing arrays
        let newArray = arrayName1.concat(arrayName2);
        let newArray = arrayName1.concat(arrayName2, arrayName3, ..., arrayNameN);
        // * The `concat()` method does not change the existing arrays. It always returns a new array.

    // Creates a new array my concatenating an existing array with a new string
        let newArray = arrayName1.concat("string");

    // Splits the contents of an array using a designator seperator
        // split() is a string method so this only woks if the contents of the array are strings that contain ':'
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

    // Create a new array with all elements that pass the function test
    const result = arrayName.filter(function(arg) {
        if(arg.property > x){
            return true;                // return true = keep, or pass through filter
        }
    });
                // As an arrow function
                const result = arrayName.filter(arg => (arg.property > x));

    // Create a new array populated with the results of calling a provided function on every element in the calling array
    const result = arrayName.map(function(arg) {
        return arg * x;
    });
                // As an arrow function
                const result = arrayName.map(arg => arg * 2);

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
    













// String Literals 

    //
















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


    