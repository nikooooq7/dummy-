/* APP.JS — sedikit JavaScript untuk halaman publik */
(function () {
  'use strict';

  // Galeri produk: klik gambar kecil untuk mengganti gambar besar
  var main = document.getElementById('galleryMain');
  var thumbs = document.querySelectorAll('[data-gallery-thumb]');
  if (main && thumbs.length) {
    thumbs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        main.src = btn.getAttribute('data-full');
        thumbs.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
  }

  // Perbesar foto saat diklik (jendela pop-up Bootstrap)
  var modalEl = document.getElementById('photoModal');
  if (main && modalEl && window.bootstrap) {
    var modalImg = document.getElementById('photoModalImg');
    var modal = new bootstrap.Modal(modalEl);
    main.addEventListener('click', function () {
      modalImg.src = main.src;
      modal.show();
    });
  }

  // Pesan notifikasi hilang otomatis setelah beberapa detik
  document.querySelectorAll('.flash-wrap .alert-success, .flash-wrap .alert-info').forEach(function (el) {
    setTimeout(function () {
      if (window.bootstrap) { bootstrap.Alert.getOrCreateInstance(el).close(); }
    }, 6000);
  });
})();
