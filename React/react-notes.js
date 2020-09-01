// JSX
    // Embedding Expressions
        // Declare a variable called `name` and then use it inside JSX by wrapping it in curly braces:
            const name = 'Josh Perez';
            const element = <h1>Hello, {name}</h1>;

            ReactDOM.render(
                element, 
                document.getElementById('root')
            );
        
        // You can put any valid JS expression inside the curly braces in JS.
        // In the following example, we embed the result of calling a JS function `formatName(user)`, into an <h1> element.
                function formatName(user) {
                    return user.firstName + ' ' + user.lastName;
                }

                const user = {
                    firstName: 'Harper',
                    lastName: 'Perez'
                };

                const element = (
                    <h1>
                        Hello, {formatName(user)}!
                    </h1>
                );

                ReactDOM.render(
                    element,
                    document.getElementById('root')
                );
                    // JSX does not need to be spread over multiple lines. When written over multiple lines, it is recommended to wrap it in parentheses to avoid the pitfalls of automatic semicolon insertion.

    // JSX as Expressions
        // After compilation, JSX expressions become regular JS function calls and evaluate to JS objects. You can use USX inside of `if` statements and `for` loops, asign it to variables, accept it as arguments, and return it from functions. 
            function getGreeting(user) {
                if (user) {
                    return <h1>Hello, {formatName(user)}!</h1>
                }
                return <h1>Hello, Stranger.</h1>
            }

    // Specifying Attributes
        // You may use quotes to specify string literals as attributes
            const element = <div tabIndex="0"></div>;
        // You may also use curly braces to embed a JS expression in an attribute
            const element = <img src={user.avatarUrl}></img>;
            // Don't put quotes around curly braces when embedding a JS expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute
        // React DOM uses camelCase property namin convention ninstead of HTML attribute names. 
             Ex. class => className, tabindex => tabIndex, etc
    
    // Specifying Children
        // If a tag is empty, you may close it immediately with `/>`, like XML
            const element = <img src={user.avatarUrl} />;
        