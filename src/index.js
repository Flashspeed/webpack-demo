import _ from 'lodash';
import printMe from './print';
import "./styles.css";

function component() {
    // Create a div
    const element = document.createElement('div');

    // Create button
    const btn = document.createElement('button');

    // Add "Hello webpack" text inside the div
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = "Click me and check the console";
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

// When a change inside print.js is detected we tell webpack to accept the updated module.
if(module.hot)
{
    // Watch the print.js file because I want to be able to detect changes and hot reload the module.
    // Accept updates for the given dependencies and fire a callback to react to those updates.
    module.hot.accept("./print.js", ()=>{
        console.log("Accepting the updated printMe module!");
        printMe();
    });
}

