import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const data = { 'email': '', 'message' : ''};


form.addEventListener('input', throttle(onSetData, 500));
form.addEventListener('submit', onFormSubmit);

onGetData() 
function onSetData() {    
    data.email = input.value;
    data.message = textarea.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data))
}


function onGetData() {
    const parseData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (parseData) {
        input.value = parseData.email || ''
        textarea.value = parseData.message || ''
    }
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(data);
    e.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY)
}

