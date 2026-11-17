/* STATIC.JS — pengganti fitur server untuk versi statis (demo portofolio)
 * 1. Pencarian & filter di halaman Koleksi (berjalan di browser)
 * 2. Formulir Kontak versi demo (pesan tidak dikirim ke mana pun)
 */
(function () {
  'use strict';

  /* ---------- 1. Filter koleksi ---------- */
  var grid = document.getElementById('productGrid');
  if (grid) {
    var params = new URLSearchParams(window.location.search);
    var q = (params.get('q') || '').trim().toLowerCase();
    var cat = params.get('kategori') || '';
    var status = params.get('status') || '';

    var searchInput = document.getElementById('q');
    var statusSelect = document.getElementById('status');
    if (searchInput) { searchInput.value = params.get('q') || ''; }
    if (statusSelect) { statusSelect.value = status; }

    // tandai chip kategori yang aktif
    document.querySelectorAll('.chip').forEach(function (chip) {
      var href = chip.getAttribute('href') || '';
      var m = href.match(/kategori=([a-z0-9-]+)/);
      var chipCat = m ? m[1] : '';
      chip.classList.toggle('active', chipCat === cat);
    });

    var shown = 0;
    grid.querySelectorAll('[data-product]').forEach(function (col) {
      var ok = true;
      if (cat && col.getAttribute('data-cat') !== cat) { ok = false; }
      if (status && col.getAttribute('data-status') !== status) { ok = false; }
      if (q && (col.getAttribute('data-text') || '').indexOf(q) === -1) { ok = false; }
      col.classList.toggle('d-none', !ok);
      if (ok) { shown++; }
    });

    var count = document.getElementById('resultCount');
    if (count) { count.textContent = shown + ' koleksi ditemukan'; }
    var empty = document.getElementById('emptyState');
    if (empty) { empty.classList.toggle('d-none', shown !== 0); }
    if (shown === 0 && count) { count.classList.add('d-none'); }

    // tombol "Cari" tidak menghilangkan kategori yang sedang dipilih
    var form = searchInput && searchInput.form;
    if (form && cat) {
      var hidden = document.createElement('input');
      hidden.type = 'hidden'; hidden.name = 'kategori'; hidden.value = cat;
      form.appendChild(hidden);
    }
  }

  /* ---------- 2. Formulir Kontak (demo) ---------- */
  var demo = document.querySelector('form[data-demo-form]');
  if (demo) {
    demo.addEventListener('submit', function (e) {
      e.preventDefault();
      var old = document.getElementById('demoNotice');
      if (old) { old.remove(); }
      var box = document.createElement('div');
      box.id = 'demoNotice';
      box.className = 'alert alert-info';
      box.setAttribute('role', 'alert');
      box.textContent = 'Terima kasih! Ini adalah situs demo statis, jadi pesan tidak benar-benar dikirim. ' +
        'Pada versi PHP, pesan masuk ke Panel Admin.';
      demo.parentNode.insertBefore(box, demo);
      demo.reset();
    });
  }
})();
