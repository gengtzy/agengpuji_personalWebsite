# Rencana Eksekusi & Audit Komprehensif Portfolio Ageng Puji Pangestu

Dokumen ini berisi rencana perbaikan bug, penjelasan teknis masalah yang terjadi, serta audit dan saran perbaikan UI/UX dan efisiensi kode untuk seluruh menu portfolio.

---

## 1. Analisis & Diagnosa Masalah yang Ditemukan

### A. Hero Section: Kotak "Pull me" Hanya Ketarik Titik Hijau Kecil
* **Penyebab**:
  Di dalam `components/Hero.tsx`, atribut `drag` dari Framer Motion hanya dipasang pada elemen `<motion.span className="... w-2 h-2 bg-[#05e448] ...">` (titik hijau kecil di pojok kanan bawah), bukan pada container badge `<div className="... px-6 py-2 border ...">`. Akibatnya, saat ditarik, hanya kotak 2x2 px itu yang berpindah tempat, terlepas dari badgenya.
* **Solusi**:
  Jadikan seluruh kotak badge sebagai `<motion.div>` dengan `drag`, `dragSnapToOrigin`, dan `dragElastic={0.3}`. Seluruh kotak (beserta 4 sudut aksen hijau dan teks "Hi,👋 I'm Ageng") akan ikut tertarik secara elastis dan kembali ke posisi semula secara halus saat dilepas.

---

### B. Background Animasi Partikel Kaku & Tidak Smooth Saat Kursor Mengarah
* **Penyebab**:
  1. **Tidak Ada Interpolasi (Lerp / Easing)**: Di `components/Particles.tsx`, posisi partikel dihitung dengan `particles.position.x = -mouseRef.current.x * particleHoverFactor;` langsung setiap frame tanpa peredaman (*lerp damping*). Akibatnya, posisi titik-titik melompat secara instan dan patah-patah mengikuti koordinat mouse mentah.
  2. **Event Listener Terhalang Elemen Depan**: Event `mousemove` hanya dipasang pada `container` (yang posisinya di `z-0`). Begitu kursor masuk ke atas teks, tombol, atau foto (yang berada di `z-10`), event mousemove pada container terputus atau tersendat-sendat (*stuttering*).
  3. **Pergerakan 2D Kaku Satu Bidang**: Seluruh 200 partikel digeser bersamaan sebagai satu bidang datar tanpa kedalaman paralaks (*parallax depth*), sehingga terasa seperti lembaran kaku yang digoyang.
  4. **Duplikasi Kode Shader**: Pada vertex shader baris 74-75, terdapat baris ganda `gl_Position = projectionMatrix * mvPos;`.
* **Solusi**:
  1. Tambahkan **linear interpolation (lerp)** pada pergerakan mouse:
     `currentX += (targetX - currentX) * 0.05` sehingga ada inersia yang sangat lembut dan organik.
  2. Pasang event listener mouse pada `window` dengan kalkulasi viewport yang aman, serta transisi kembali ke titik tengah saat kursor keluar layar (*mouseleave*).
  3. Tambahkan efek *parallax tilt* halus pada rotasi 3D (`rotation.x` dan `rotation.y`) saat kursor bergerak, menciptakan efek kedalaman 3D yang hidup dan sinematik.

---

### C. Error Download "My Resume" (Lokal & Vercel)
* **Penyebab**:
  1. File fisik berada di root folder proyek: `C:\Kampus\CV\myportfolio\Ageng Puji Pangestu CV.pdf`.
  2. Next.js **hanya melayani file publik yang berada di dalam folder `public/`**. Semua file di luar folder `public/` tidak dapat diakses melalui browser HTTP.
  3. Link di `components/Hero.tsx` memanggil `href="/AgengPujiPangestuCV.pdf"`. Karena file tersebut tidak ada di folder `public/`, Next.js mengembalikan halaman 404 (Not Found).
* **Solusi**:
  1. Salin/tempatkan file CV ke `public/Ageng Puji Pangestu CV.pdf` dan `public/AgengPujiPangestuCV.pdf`.
  2. Perbarui link di `Hero.tsx` menjadi:
     ```tsx
     <a
       href="/Ageng%20Puji%20Pangestu%20CV.pdf"
       download="Ageng Puji Pangestu CV.pdf"
       target="_blank"
       rel="noopener noreferrer"
       className="..."
     >
       My Resume
     </a>
     ```

---

### D. Kontak Section: Ikon-Ikon Berantakan & Cacat (ss2)
* **Penyebab**:
  1. **Path SVG Behance Rusak**: Path SVG Behance di `components/Contact.tsx` terdistorsi dan memiliki koordinat yang salah, sehingga ikon tampak seperti benang kusut/rusak.
  2. **Gaya Ikon Tidak Konsisten**: Ikon LinkedIn dan WhatsApp bertipe *solid fill*, sedangkan Instagram bertipe *outline/stroke*, dan ukurannya tidak seragam.
  3. **Aksesibilitas & Feedback**: Belum ada `aria-label` dan animasi hover yang konsisten untuk interaksi sosial media.
* **Solusi**:
  1. Ganti semua ikon dengan SVG resmi standar (LinkedIn, Behance, Instagram, WhatsApp) dengan viewBox `24x24` yang proporsional dan bertipe seragam (*consistent visual weight*).
  2. Tambahkan `aria-label`, tooltip title, efek hover glow hijau `#05e448`, border transition, dan skala lembut `hover:scale-110`.

---

## 2. Audit Keseluruhan Portfolio & Saran Revisi

### A. Bagian Navigasi (Navbar)
* **Temuan**:
  - Deteksi `activeSection` saat ini mengandalkan offset scroll manual yang terkadang meleset saat scrolling cepat atau saat berada di section paling bawah (Contact).
  - Menu mobile membuka layer `100vh` hitam pekat tanpa animasi penutupan saat area luar diklik.
* **Saran Perbaikan**:
  - Gunakan `IntersectionObserver` atau offset kalkulasi dinamis dengan batasan bawah halaman agar menu `Contact` otomatis aktif saat mencapai footer.
  - Tambahkan tombol pintas "Resume" atau "Hire Me" kecil di Navbar desktop untuk konversi rekruter yang lebih tinggi.

---

### B. Bagian About Me
* **Temuan Bug Copy-Paste**:
  - Pada daftar ikon Tech Stack di `components/About.tsx`, hampir seluruh elemen gambar memiliki `alt="Tailwind"` padahal gambarnya adalah Bootstrap, React, HTML5, CSS3, SASS, GitHub, Git, MySQL, Figma, Adobe XD, Affinity, dan Canva.
  - Teks deskripsi: `"Informatics Engineering student at Jember State Polytechnic, and an Web Developer..."` -> Seharusnya `"and a Web Developer"` atau `"a Frontend Developer"`.
  - Durasi pengalaman PT Solusi Identitas Global Net tertulis `"2025 - 2025"`. Jika magang beberapa bulan, lebih profesional ditulis bulan/tahun, misalnya `"Jan 2025 - Mar 2025"`.
* **Saran UI/UX**:
  - Pada accordion Sertifikat, tambahkan modal popup / lightbox tampilan penuh agar rekruter dapat membaca isi sertifikat tanpa harus keluar halaman ke LinkedIn.

---

### C. Bagian Projects
* **Temuan Data & Performa**:
  - **Typo & Salah Link**:
    - Project `Portal-Abdiriset` (id: 23): deskripsi tertulis `"Portal-Abdiriset is a web-based application for manaresearch and development of academic staffility."` (kata terpotong/typo).
    - Link repository untuk `Portal-Abdiriset` tertulis `https://github.com/gengtzy/nurse-questionnaire` (tertukar dengan project Nurse Recharge).
    - Project `Manage-Money` (id: 18): ikon Filament menggunakan ikon Laravel (`laravel2.svg`).
  - **Beban DOM (19 Project Sekaligus)**:
    - Seluruh 19 project dirender sekaligus pada kategori "All Projects", memuat 19 gambar besar dan puluhan ikon SVG sekaligus.
* **Saran UI/UX & Optimasi**:
  - **Terapkan Pagination / "Load More"**: Tampilkan 6 project terbaik di awal, lalu sediakan tombol *"Load More Projects"* agar halaman awal terasa rapi, ringan, dan cepat.
  - **Konsistensi Tinggi Kartu**: Gunakan `flex flex-col justify-between` agar kartu dengan deskripsi pendek dan panjang memiliki tinggi yang sejajar sempurna.
  - Pastikan semua tag `<Link>` eksternal memiliki atribut `rel="noopener noreferrer"`.

---

### D. Bagian Footer & Metadata SEO
* **Temuan**:
  - Footer menuliskan `"2025 Copyright | agengpuji"`, sementara di Welcome Screen tertulis `"My Personal Website 2026"`. Sebaiknya dinamis menggunakan `new Date().getFullYear()` atau konsisten.
  - Di `app/layout.tsx`, judul metadata hanya `"Ageng_Personal Website"`.
* **Saran**:
  - Perkaya metadata SEO:
    ```ts
    export const metadata: Metadata = {
      title: "Ageng Puji Pangestu | Frontend Developer & UI/UX Designer",
      description: "Portfolio of Ageng Puji Pangestu - Junior Web Developer specializing in Frontend Engineering, UI/UX, and Modern Web Applications.",
      keywords: ["Frontend Developer", "Web Developer", "UI/UX Designer", "Portfolio", "Ageng Puji Pangestu", "React", "Next.js"],
      openGraph: { ... }
    };
    ```

---

## 3. Rencana Eksekusi Langkah demi Langkah

- [x] **Langkah 1**: Salin file `Ageng Puji Pangestu CV.pdf` ke direktori `public/` agar dapat diakses oleh Next.js HTTP server.
- [x] **Langkah 2**: Perbaiki `components/Hero.tsx`:
  - Bungkus kotak "Hi,👋 I'm Ageng" dengan `<motion.div drag dragSnapToOrigin dragElastic={0.25} ...>` agar seluruh kotak tertarik elastis.
  - Perbaiki link Resume ke `/Ageng%20Puji%20Pangestu%20CV.pdf` dengan atribut `download="Ageng Puji Pangestu CV.pdf"`.
- [x] **Langkah 3**: Perbaiki `components/Particles.tsx`:
  - Implementasikan peredaman mouse lerp (`smoothedMouse += (targetMouse - smoothedMouse) * 0.05`).
  - Sambungkan event listener ke `window` agar tidak terputus oleh elemen UI di depannya.
  - Tambahkan efek parallax tilt 3D yang halus.
  - Bersihkan duplikasi instruksi shader.
- [x] **Langkah 4**: Perbaiki `components/Contact.tsx`:
  - Ganti seluruh ikon SVG (LinkedIn, Behance, Instagram, WhatsApp) dengan SVG presisi tinggi dan seragam.
  - Tambahkan `aria-label`, visual hover glow, dan centering proporsional.
- [x] **Langkah 5**: Perbaiki typo data di `data/projects.ts` dan teks di `components/About.tsx`.
- [x] **Langkah 6**: Jalankan `npm run build` untuk memverifikasi tidak ada error TypeScript, linting, atau runtime issue.
- [x] **Langkah 7**: Dokumentasikan hasil eksekusi dan berikan panduan kepada user.
