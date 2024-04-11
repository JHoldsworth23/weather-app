import { input } from "./index";

const form = document.querySelector('.search-div');
const error = document.getElementById('error-message');

function checkInput() {
    if (input.value == '') {
        error.textContent = 'You need to enter a location.';
    } else if (!isNaN(input.value)) {
        error.textContent = 'Search value needs to be a location - not a number.';
    } else {
        return true;
    }
    form.appendChild(error);
    return;
}

export { checkInput, error };