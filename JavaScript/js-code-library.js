// DOM APIs

    // Create and element and give it a class name
    const div = document.createElement('div');
    div.className = 'foo';

    // console.log a class name
    console.log(div.outerHTML);

    // remove the class name and add another
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

    // Replace class 'foo' with class 'bar'
    div.classList.replace('foo', 'bar');













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
    let arraName = [a, b, c];
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

    // Join all array elements into a string, also allows you to specify a separator
        arrayName.join(" * ");

    // To reverse the contents of an array
        stringName.reverse();
    
        // To reverse a string and have it print backwards
            stringName.split('').reverse().join('');

    // Returns the LAST element from an array
        let x = arrayName.pop();

    // Returns the new array length after adding a value
        let x = arrayName.push("newElement");

    // Returns the new array length
        arrayName.unshift("newElement");

    // Returns the string that was "shifted out"
        let x = arrayName.shift();

    // Adds a new element to an array (AT THE END)
        arrayName.push("newElement");
    
    // Adds a new element to an array (AT THE BEGINNING) and "unshifts" older elements
        arrayName.unshift("newElement");

    // Appends a new element to an array
        arrayName[arrayName.length] = "newElement";

    // Adds new items to an array
        arrayName.splice(x, y, "newElement1", "newElement2");
        // The first parameter (x) defines the position where new elelements should be ADDED (spliced in). The second parameter (y) defines how many elements should be REMOVED). The rest of the parameters ("newElement1", "newElement2") define the new elemennts to be added.

    // Removes the LAST element from an array
        arrayName.pop();

    // Removes the FIRST array element and "shift" all other elements to a lower index
        arrayName.shift();

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
        arrayName[x].split(':');
        let newArrayName = arrayName[x].split(':');
        // This creates a new array with new elements based on what was split. To recall the items that were split, use newArrayName[0] for the elemennt before the separator and newArrayName[n] for the element after the separator

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

        // Sort numerically descending
            arrayName.sort(function(a, b) {return b - a});

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
        // It is CASE SENSITIVE. To make case insensitive
        stringName.replace(/substring-to-replace/i, 'replacing-substring');
        // The above creates a new string. To replace the original stringName use the following:
        let stringName = stringName.replace('substring-to-replace', 'replacing-substring');


    // Extract string characters from a specific position
    stringName.charAt(x);

    // Return the Unicode of a character from a specific position
    stringName.charCodeAt(x);

    // 
    
    




// Applied Coding
    
    // Simple calculator
    let sum = o;
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