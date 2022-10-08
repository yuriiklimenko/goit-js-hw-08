var throttle = require('lodash.throttle');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input[type="email"]');
const textareaEl = document.querySelector('textarea');
let formData = { email: '', message: '' };

if (load(LOCALSTORAGE_KEY)) {
  formData = load(LOCALSTORAGE_KEY);
}

writeInField(formData);

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

function onInput(e) {
  formData[e.target.name] = e.target.value;
  save(LOCALSTORAGE_KEY, formData);
}

function onSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
  console.log(formData);
}

function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function writeInField(formData) {
  inputEl.value = formData.email;
  textareaEl.value = formData.message;
}
