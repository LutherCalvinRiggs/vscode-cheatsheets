// Arrays

    // Accessing first array element
    let first = arrayName[0];

    // Accessing last array element 
    let last = arrayName[arrayName.length - 1];

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

    // Adding an element to an array using `push()`
    arrayName.push('newElementName');

    // Adding an element to an array using `length`
    arrayName[arrayName.length] = "newElementName";

    // To test for an array 
    Array.isArray( arrayName );   // returns true - not supported in older browsers

        // or

    function isArray(x) {
        return x.constructor.toString().indexOf("Array") > -1;
    }           // Always returns true if the object prototype contains the word "Array"

        // or

    arrayName instanceof Array;   // returns true if an object is created by a given constructor

    // 




// String Manipulation

    // Capitalize the first letter of a string
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();




// Loops 

    // Using a `for` loop on an array
        for (i = 0; i < someNumber; i++) {
            // some code
        }




