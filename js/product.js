const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.product-thumbnails img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const newImageSrc = thumbnail.getAttribute('data-image-src');
    mainImage.src = newImageSrc;
  });
});