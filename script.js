// Demo dữ liệu
const newComics = [
  { id: 'attack-on-titan', title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'one-piece', title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'attack-on-titan', title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
];

const suggestedComics = [
  { id: 'attack-on-titan', title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'one-piece', title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'attack-on-titan', title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'one-piece', title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'attack-on-titan', title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'one-piece', title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'attack-on-titan', title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'one-piece', title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'attack-on-titan', title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'one-piece', title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' }
];

const recommendedComics = [
  { id: 'attack-on-titan', title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'one-piece', title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'attack-on-titan', title: 'Attack on Titan', author: 'Hajime Isayama', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'one-piece', title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'naruto', title: 'Naruto', author: 'Masashi Kishimoto', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' },
  { id: 'one-piece', title: 'One Piece', author: 'Eiichiro Oda', cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg' }
];

// Map content (ảnh)
const contentMap = {
  'attack-on-titan': [
    'https://picsum.photos/seed/aot1/540/960',
    'https://picsum.photos/seed/aot2/540/960'
  ],
  'naruto': [
    'https://picsum.photos/seed/naruto1/540/960',
    'https://picsum.photos/seed/naruto2/540/960'
  ],
  'one-piece': [
    'https://picsum.photos/seed/op1/540/960',
    'https://picsum.photos/seed/op2/540/960'
  ],
  'default': ['https://picsum.photos/seed/def/540/960']
};

// Render hàm
function renderComics(data, containerId, cardClass) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  data.forEach((comic) => {
    const a = document.createElement('a');
    a.href = '#';
    a.className = cardClass;
    a.dataset.id = comic.id;
    a.innerHTML = `
      <img src="${comic.cover}" alt="${comic.title}">
      <div class="info">${comic.title}</div>
    `;
    a.addEventListener('click', (e) => {
      e.preventDefault();
      openReader(comic);
    });
    container.appendChild(a);
  });
}

// Popup logic
const readerPopup = document.getElementById('reader-popup');
const readerBackdrop = document.getElementById('reader-backdrop');
const readerContent = document.getElementById('reader-content');
const readerTitle = document.getElementById('reader-title');
const readerSubtitle = document.getElementById('reader-subtitle');
const closeBtn = document.getElementById('reader-close');
const scrollTopBtn = document.getElementById('scroll-top');

// --- Scrollbar width fix ---
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function openReader(comic) {
  const images = contentMap[comic.id] || contentMap['default'];
  readerTitle.textContent = comic.title;
  readerSubtitle.textContent = `Nguồn / Tác giả: ${comic.author || 'Không rõ'}`;
  populateReader(images);

  const scrollbarWidth = getScrollbarWidth();
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  readerPopup.classList.remove('closing');
  readerPopup.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeReader() {
  readerPopup.classList.add('closing');
  readerPopup.classList.remove('open');
  setTimeout(() => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = ''; // reset lại padding
  }, 300);
}


function populateReader(images) {
  readerContent.innerHTML = '';
  images.forEach(src => {
    const page = document.createElement('div');
    page.className = 'reader-page';
    page.innerHTML = `<img src="${src}" class="reader-image" alt="">`;
    readerContent.appendChild(page);
  });
  readerContent.scrollTop = 0;
}

readerBackdrop.addEventListener('click', closeReader);
closeBtn.addEventListener('click', closeReader);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeReader(); });

// Scroll top
readerContent.addEventListener('scroll', () => {
  if (readerContent.scrollTop > 200) scrollTopBtn.classList.add('show');
  else scrollTopBtn.classList.remove('show');
});
scrollTopBtn.addEventListener('click', () => readerContent.scrollTo({ top: 0, behavior: 'smooth' }));

// Render - không sử dụng đoạn này nữa, đã được gộp vào đoạn khởi tạo bên dưới
// document.addEventListener('DOMContentLoaded', () => {
//   renderComics(newComics, 'new-comics', 'horizontal-card');
//   renderComics(suggestedComics, 'suggested-slider', 'vertical-card');
//   renderComics(recommendedComics, 'recommended-comics', 'square-card');
// });

// --- SLIDER LOGIC ---
let currentSlide = 0;
const itemsPerSlide = 3;

function renderSlider() {
  const sliderTrack = document.getElementById('suggested-slider');
  sliderTrack.innerHTML = '';
  suggestedComics.forEach((comic) => {
    const card = document.createElement('a');
    card.href = '#';
    card.className = 'vertical-card';
    card.dataset.id = comic.id;
    card.innerHTML = `
      <img src="${comic.cover}" alt="${comic.title}" loading="lazy">
      <div class="info">${comic.title}</div>
    `;
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openReader(comic);
    });
    sliderTrack.appendChild(card);
  });
}

function updateSlider() {
  const track = document.getElementById('suggested-slider');
  const slideWidth = 175 * itemsPerSlide; // khoảng cách 3 item
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Render các phần truyện
  renderComics(newComics, 'new-comics', 'horizontal-card');
  renderSlider(); // Sử dụng renderSlider riêng cho suggested comics để có thể sử dụng slider
  renderComics(recommendedComics, 'recommended-comics', 'square-card');

  // Thiết lập các nút điều hướng slider
  document.getElementById('next-btn').addEventListener('click', () => {
    if ((currentSlide + 1) * itemsPerSlide < suggestedComics.length) currentSlide++;
    updateSlider();
  });
  document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentSlide > 0) currentSlide--;
    updateSlider();
  });
});
