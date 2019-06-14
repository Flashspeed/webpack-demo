import _ from 'lodash';
import './style.css';
import ImageLew from './lew.png';
import DataFile from './data.xml';

function component() {
    // Create a div
    const element = document.createElement('div');

    // Add "Hello webpack" text inside the div
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // Add a class named "hello" to the div
    element.classList.add("hello");

    // Create an image element
    const imageOfLew = new Image();
    imageOfLew.src = ImageLew;

    // Append image element to the existing div
    element.appendChild(imageOfLew);

    console.log(DataFile);

    return element;
}

document.body.appendChild(component());