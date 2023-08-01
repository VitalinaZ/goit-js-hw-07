import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const markup = galleryItems.map(({preview, original, description}) => `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}"
/>
</a>
</li>`);

gallery.insertAdjacentHTML('beforeend', markup.join(''));



gallery.addEventListener('click', onClick);

function onClick(evt) {
    if (evt.target.tagName !== 'IMG') {
        return;
    }
    evt.preventDefault();
    const instance = basicLightbox.create(`
    <div class="modal">
       <img class="modal__image" src="${evt.target.dataset.source}" alt="${evt.target.attributes.alt.textContent}" width="800" height="600"/>
    </div>
   `)
    instance.show();

    document.addEventListener('keydown', closeModal);

    function closeModal(evt) {
       if (evt.code !== 'Escape') {
           return;
       } 
       instance.close();
   }
}