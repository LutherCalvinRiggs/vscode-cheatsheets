// Webpack Startup Procedures
    // Installing webpack
        // In the project folder initialize npm to create a package.json file for your project
        npm init 
        // Install webpack and webpack cli
            npm install webpack webpack-cli --save-dev 
        // Check package.json to make sure your dependecies show webpack and webpack-cli
            vi package.json 
            // Use `:q` in the terminal to exit viewing the package.json
        // If a project file is missing a `node_modules` folder, you can install / update any current dependencies in the package.json folder
            npm install 

// Create a file called webpack.config.js in the root folder of the project
        // This will set up all of the configuration opetions for webpack so that we don't have to manually type commands
        // Create a "path" module for node.js to help us route our created files to the proper directory
        const path = require("path");
        // Use module.exports to set up an entry point and output point for our files
            module.exports = {
                entry: "./src/index.js",                        // our main JS file
                output: {
                    filename: "main.js",                        // the file we connect to index.html
                    path: path.resolve(__dirname, "dist")       // where we look for the output
                }
            }

// Set a "build" script to run webpack
        // Inside of package.json, inside the scripts key, replace the "test" key with a custom "build" key
        "build": "webpack"  
        // if this returns an error use 
            "build": "./node_modules/.bin/webpack"
    // To run the command using the cli, in the root folder, input the following code into the terminal
        npm run build       // npm run <custom-script-name>
    // You can also run the script as a watch (similar to a live server update in a browser)
        "build": "webpack -w"
        "build": "./node_modules/.bin/webpack -w"
        // You may still have to reload the browser
    // USE CTRL+C TO EXIT A WATCH COMMAND








// Loading CSS with webpack
        // When CSS is bundled with webpack, it will only bundle the styles that our app uses
        // First, go to the src folder and create a new file called style.css
        // Second, in the index.js file, import the style.css file 
        import './style.css'
        // Using npm, install the style-loader and css-loader and save them to dev dependencies
            npm install style-loader css-loader --save-dev
        // Go back to the webpack.config.js file and define another rule
            module.exports = {
                entry: "./src/index.js",                        // our main JS file
                output: {
                    filename: "main.js",                        // the file we connect to index.html
                    path: path.resolve(__dirname, "dist")       // where we look for the output
                },
                module: {
                    rules: [
                        {
                            test: /\.js$/,  // whenever a .js file is found, babel should transpile it
                            exclude: /(node_modules)/,  // exclude the node_modules folder
                            use: {
                                loader: "babel-loader",  // use bable-loader
                                options: {
                                    // compile to the standards of preset-env
                                    presets: ['@babel/preset-env', '@babel/preset-react']  
                                }
                            }
                        },
                        {   // this object will look for css files and transform them
                            test: /\.css$/,
                            use: [
                                {loader: 'style-loader'},
                                {loader: 'css-loader'}
                            ]
                        }
                    ]
                }
            }
        // In the terminal, run a new build
            npm run build
        







        
// Loading images with webpack
    // webpack inlines a URL to the image bundle and then returns it from require. Inlining images will reduce the number of http requests, thereby speeding up our applications.
    // Start by installing url-loader using npm and save it to dev dependencies
        npm install url-loader --save-dev
    // To see an example, go to the index.js file and change the Greeting to the following:
        const Greeting = () => {
            return (
                <div>
                    <h1>Hello from React</h1>
                    <div id="image"></div>
                </div>
            )
        }
    // In the CSS file, create an #image {} element and add some styling
        #image {
            background: url('ski-day.jpg');
            height: 500px;
            width: 500px;
        }
    // In the webpack.config.js file, and add another loader for the urls
        module.exports = {
            entry: "./src/index.js",                        // our main JS file
            output: {
                filename: "main.js",                        // the file we connect to index.html
                path: path.resolve(__dirname, "dist")       // where we look for the output
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,  // whenever a .js file is found, babel should transpile it
                        exclude: /(node_modules)/,  // exclude the node_modules folder
                        use: {
                            loader: "babel-loader",  // use bable-loader
                            options: {
                                // compile to the standards of preset-env
                                presets: ['@babel/preset-env', '@babel/preset-react']  
                            }
                        }
                    },
                    {   // this object will look for css files and transform them
                        test: /\.css$/,
                        use: [
                            {loader: 'style-loader'},
                            {loader: 'css-loader'}
                        ]
                    },
                    {   // this object will load our URLs
                        test: /\.(jpg|png)$/,
                        use: [
                            {loader: 'url-loader'}
                        ]
                    }
                ]
            }
        }
