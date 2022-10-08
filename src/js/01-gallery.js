// Описаний в документації
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
    `;
    })
    .join('');
}

const markup = createMarkup(galleryItems);
gallery.innerHTML = markup;

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
