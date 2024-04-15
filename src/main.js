import { getImages } from './js/pixabay-api';
import { render } from './js/render-functions';

const formElements = document.querySelector('.search-form').elements;
const input = formElements['input'];
const searchBtn = formElements['submit'];
let query;
input.addEventListener('input', e => {
  query = e.target.value.trim().toLowerCase();
});
searchBtn.addEventListener('click', e => {
  e.preventDefault();
  getImages(query).then(imgs => render(imgs));
});
