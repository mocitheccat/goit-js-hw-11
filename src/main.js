import { getImages } from './js/pixabay-api';
import {
  render,
  renderErrorMessages,
  toggleLoader,
} from './js/render-functions';

const formRef = document.querySelector('.search-form');
const input = formRef['input'];

formRef.addEventListener('submit', e => {
  e.preventDefault();

  const query = input.value.trim().toLowerCase();

  if (!query) {
    renderErrorMessages('Please enter a search query.');
    return;
  }

  toggleLoader();

  getImages(query)
    .then(imgs => render(imgs))
    .catch(err => renderErrorMessages(err.message));
});
