import _ from 'lodash';
import printMe from './print'

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