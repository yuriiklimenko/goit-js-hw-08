// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line
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
// При створенні розмітки в завданні 2 тег посилання слід обгортати в тег лі.
const markup = createMarkup(galleryItems);
gallery.innerHTML = markup;

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
