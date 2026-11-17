# Galeri Keris Nusantara — Versi Statis (Demo Portofolio)

Ini adalah salinan **HTML statis** dari website Galeri Keris. Tidak memakai PHP maupun database, sehingga bisa dipasang gratis di platform seperti **GitHub Pages, Netlify, Vercel, atau Cloudflare Pages**.

**Yang berfungsi:** semua halaman (Beranda, Koleksi, Detail Produk, Profil Kami, Kontak), pencarian dan filter koleksi (berjalan di browser), galeri foto produk, dan tampilan responsif di HP.

**Yang tidak ada di versi statis:** Panel Admin, unggah foto/video, dan pengiriman pesan. Formulir Kontak hanya menampilkan pemberitahuan demo, pesannya tidak dikirim ke mana pun. Untuk fitur penuh, gunakan versi PHP (`galeri-keris-v2.zip`).

> Foto produk pada demo ini adalah **ilustrasi** buatan sendiri, bukan foto barang nyata. Nama toko, alamat, telepon, email, dan harga hanya contoh.

---

## Isi folder

```
index.html            ← halaman utama (Beranda)
koleksi.html          ← daftar koleksi + pencarian/filter
profil.html           ← Profil Kami
kontak.html           ← Kontak
produk/               ← satu file HTML per produk
assets/               ← css, js, gambar, dan Bootstrap
uploads/products/     ← gambar produk
.nojekyll             ← (untuk GitHub Pages, biarkan saja)
```

Halaman utama adalah **`index.html`**. Semua platform di bawah otomatis membaca file ini.

---

## Cara memasang (gratis)

> Tampilan menu setiap platform bisa berubah dari waktu ke waktu. Jika nama tombaknya sedikit berbeda, cari yang paling mirip.

### Opsi 1 — Netlify (paling cepat, tanpa akun GitHub)
1. Buat akun di netlify.com.
2. Buka halaman **Deploy manually** / *Drag and drop* (alamat umum: app.netlify.com/drop).
3. **Seret seluruh folder ini** ke kotak yang tersedia.
4. Tunggu selesai. Anda mendapat alamat seperti `namasitus.netlify.app`.

### Opsi 2 — GitHub Pages
1. Buat akun di github.com, lalu buat repository baru (mis. `galeri-keris-demo`, tipe **Public**).
2. Klik **Add file → Upload files**, seret **isi** folder ini (termasuk `assets`, `produk`, `uploads`), lalu **Commit changes**.
3. Buka **Settings → Pages**. Pada *Build and deployment*, pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**.
4. Tunggu beberapa menit. Alamatnya: `https://usernameanda.github.io/galeri-keris-demo/`.

### Opsi 3 — Vercel
1. Unggah folder ini ke repository GitHub (langkah 1–2 di Opsi 2).
2. Di vercel.com pilih **Add New → Project**, impor repository tersebut.
3. *Framework Preset*: **Other**. Kosongkan Build Command dan Output Directory, lalu **Deploy**.

Semua tautan di dalam website sudah **relatif**, sehingga tetap jalan di alamat berbentuk subfolder seperti GitHub Pages (`/nama-repo/`).

---

## Cara mengubah isi

Buka file `.html` dengan editor teks (Notepad, atau VS Code yang lebih nyaman), ubah tulisannya, simpan, lalu unggah ulang.

| Ingin mengubah | Buka file |
|---|---|
| Nama toko, slogan | Semua file `.html` (gunakan **Find & Replace**: cari `Galeri Keris Nusantara`) |
| Judul besar & teks Beranda | `index.html` |
| Alamat, telepon, email, jam buka | bagian bawah (footer) semua file `.html`, dan `kontak.html` |
| Sejarah, visi, misi | `profil.html` |
| Warna emas, font | `assets/css/style.css` (variabel warna di bagian atas `:root`) |
| Foto produk | ganti file di `uploads/products/` (nama sama), atau ubah `src="..."` pada file HTML produk |
| Ornamen keris | `assets/img/*.svg` |

**Menambah produk baru:** salin satu file di folder `produk/` (mis. `produk/guci-keramik-antik-motif-naga.html`), beri nama baru, ubah isinya, lalu tambahkan kartunya di `koleksi.html` dengan menyalin satu blok `<div class="col-sm-6 ... data-product ...">` dan mengubah `data-cat`, `data-status`, `data-text`, nama, harga, dan tautannya. Karena ini pekerjaan manual, untuk toko yang sebenarnya lebih nyaman memakai versi PHP dengan Panel Admin.

---

## Catatan
- Pencarian di halaman Koleksi mencocokkan nama produk, asal daerah, dan era.
- Bootstrap 5.3.2 disertakan lokal di `assets/vendor/bootstrap/` (tanpa CDN).
- Jika mengunggah ke GitHub lewat browser dan ada pesan batas jumlah file, unggah per folder.
