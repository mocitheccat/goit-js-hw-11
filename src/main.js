import { getImages } from './js/pixabay-api';
import {
  render,
  renderErrorMessages,
  toggleLoader,
  clearGallery
} from './js/render-functions';

const formRef = document.querySelector('.search-form');
const input = formRef['input'];
const galleryRef = document.querySelector('.gallery');

formRef.addEventListener('submit', e => {
  e.preventDefault();

  const query = input.value.trim().toLowerCase();

  if (!query) {
    renderErrorMessages('Please enter a search query.');
    return;
  }
  clearGallery(galleryRef);

  toggleLoader(galleryRef);

  getImages(query)
    .then(imgs => render(galleryRef, imgs))
    .catch(err => renderErrorMessages(err.message));
});
