const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.product-thumbnails img');

// Lưu trữ ảnh chính ban đầu
const originalImageSrc = mainImage.src;

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const newImageSrc = thumbnail.getAttribute('data-image-src');
    mainImage.src = newImageSrc;
  });
});

// Thêm sự kiện click cho ảnh thumbnail đang hoạt động
const activeThumbnail = document.querySelector('.thumbnail-active');
activeThumbnail.addEventListener('click', () => {
  mainImage.src = originalImageSrc; // Quay lại ảnh chính ban đầu
});

//------------Viền màu sản phẩm
document.querySelectorAll('.thumbnail-button').forEach(button => {  
  button.addEventListener('click', function() {  
      // Xóa lớp 'selected' khỏi tất cả ảnh  
      document.querySelectorAll('.thumbnail-button img').forEach(img => {  
          img.classList.remove('selected');  
      });  
      // Thêm lớp 'selected' vào ảnh được nhấn  
      this.querySelector('img').classList.add('selected');  
  });  
});