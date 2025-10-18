const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Tutup card lain jika terbuka
    cards.forEach(c => {
      if (c !== card) c.classList.remove('active');
    });
    // Toggle card yang diklik
    card.classList.toggle('active');
  });
});
// Efek fade in saat halaman dimuat
window.addEventListener('load', () => {
  document.querySelector('.fade').classList.add('show');
});
// Efek fade in saat halaman dimuat
window.addEventListener('load', () => {
  document.querySelectorAll('.fade').forEach(el => el.classList.add('show'));
});

// Scroll halus untuk link ke #materi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Tambahan untuk efek fade-in slide 3
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade, .fade-in').forEach(el => observer.observe(el));
