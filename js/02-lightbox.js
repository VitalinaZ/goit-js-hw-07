import { galleryItems } from './gallery-items.js';
// Change code below this line

//  console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const createImg = () => {
  gallery.innerHTML = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`).join('');
};
createImg();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});