import galleryItems from './app.js';
//console.log(galleryItems)

const galleryList = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const img = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.lightbox__overlay');
const closeBtn = document.querySelector('[ data-action="close-lightbox"]');

//РАЗМЕТКА
const galRender = function (galleryItems) {
    galleryItems.forEach(el => {
        galleryList.insertAdjacentHTML(
            'beforeend', `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
  </li>`
        )
    });
}


//МОДАЛКА 

galleryList.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('is-open');
    img.setAttribute('src', `${e.target.dataset.source}`)
})

const modalClose = (e) => {
    modal.classList.remove('is-open')
    img.src = '#';
    img.alt = '';
}

closeBtn.addEventListener('click', modalClose)

overlay.addEventListener('click', modalClose)

img.addEventListener('click', modalClose)

galRender(galleryItems);

