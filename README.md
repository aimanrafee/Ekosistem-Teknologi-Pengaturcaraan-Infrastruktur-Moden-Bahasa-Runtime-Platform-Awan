# Ekosistem Teknologi Moden

**Rujukan visual interaktif tentang bahasa pengaturcaraan, runtime, dan infrastruktur yang menggerakkan dunia digital hari ini — dari kernel sistem hingga model AI.**

🔗 **Live demo:** `https://aimanrafee.github.io/Ekosistem-Teknologi-Pengaturcaraan-Infrastruktur-Moden-Bahasa-Runtime--Platform-Awan-/`

---

## 📖 Tentang Projek

Laman ini menyusun semula perbincangan mendalam tentang "siapa membina apa" dalam dunia teknologi — bermula daripada bahasa klasik (C, C++) yang menjadi asas mutlak kernel dan pelayan, hingga ke bahasa moden (Go, Rust, TypeScript) yang mengoptimumkan infrastruktur awan dan AI hari ini.

Kandungan disusun kepada empat bahagian:

| Bahagian | Kandungan |
|---|---|
| **01 — Lapisan Sistem** | Enam lapisan teknologi (infrastruktur asas, backend, AI, frontend, data, DevOps) dengan bahasa yang mendasarinya |
| **02 — Di Sebalik Alatan** | Perbezaan antara bahasa yang anda *taip* di terminal vs. bahasa yang benar-benar membina alat tersebut (Node.js, PowerShell, Python, Codex CLI, Ollama, dsb.) |
| **03 — Setara PowerShell Merentas Platform** | Perbandingan shell/akses admin/sumber kemas kini bagi macOS, Linux, Android, dan Huawei |
| **04 — Rumusan** | Tiga kategori bahasa: klasik, klasik-moden, dan moden |

---

## ✨ Ciri-ciri

- **Tiga tema boleh tukar** — Day, Night (biru gelap), dan Sepia Claude, dikawal sepenuhnya melalui CSS custom properties
- **Zero-dependency** — tiada framework, tiada pakej npm, tiada CDN. Hanya HTML, CSS, dan JavaScript native (ES Modules)
- **Modular by design** — kandungan (`data/`), logik render (`render.js`), dan logik tema (`theme.js`) dipisahkan sepenuhnya supaya mudah diselenggara
- **Kad interaktif** — setiap lapisan teknologi dan setiap alat boleh dikembangkan untuk butiran lanjut tanpa memuat semula halaman
- **Responsif penuh** — sesuai dipapar dari telefon hingga skrin sesawang lebar
- **Aksesibiliti terbina** — fokus kibod kelihatan, `aria-expanded`/`aria-pressed` pada semua kawalan interaktif, `prefers-reduced-motion` dihormati
- **Sedia untuk GitHub Pages** — tiada langkah *build*, terus deploy dari root repo

---

## 🗂️ Struktur Repo

```
.
├── index.html          # Struktur halaman & kandungan HTML
├── .nojekyll           # Elak GitHub Pages memproses laman melalui Jekyll
├── README.md           # Dokumen ini
│
├── css/
│   └── style.css       # Semua gaya + tiga set token tema (data-theme attribute)
│
├── js/
│   ├── main.js          # Entry point — sambungkan data ke fungsi render
│   ├── render.js        # Fungsi bina DOM (tiada innerHTML mentah)
│   └── theme.js         # Logik suis tema + simpan pilihan pengguna
│
└── data/
    └── content.js       # Semua kandungan teks/data, terpisah daripada logik
```

---

## 🎨 Sistem Tema

Tema dikawal melalui atribut `data-theme` pada elemen `<html>`, dengan setiap tema mentakrifkan set pembolehubah CSS yang sama:

| Token | Day | Night | Sepia Claude |
|---|---|---|---|
| `--bg` | `#f4f5f7` | `#0a0f1c` | `#ece1cd` |
| `--surface` | `#ffffff` | `#101828` | `#f6ecda` |
| `--text` | `#191c22` | `#dde5f5` | `#3c2f20` |
| `--accent` | `#b34324` | `#5b9dff` | `#c96442` |

Pilihan pengguna disimpan dalam `localStorage` (dengan *fallback* selamat jika tidak tersedia) dan dikesan semula secara automatik pada lawatan seterusnya. Jika tiada pilihan disimpan, tema lalai mengikut keutamaan sistem pengguna (`prefers-color-scheme`).

Untuk menambah tema baharu, tambah satu blok `[data-theme="nama-tema"] { ... }` dalam `style.css` dan satu butang `data-theme-btn="nama-tema"` dalam `index.html` — tiada perubahan JavaScript diperlukan.

---

## 🚀 Menjalankan Secara Lokal

Oleh sebab laman ini menggunakan ES Modules (`import`/`export`), ia **tidak boleh** dibuka terus melalui `file://` disebabkan sekatan CORS pelayar. Gunakan pelayan HTTP ringkas:

```bash
# Python (disediakan secara lalai pada kebanyakan sistem)
python3 -m http.server 8000

# atau Node.js
npx serve .
```

Kemudian buka `http://localhost:8000` dalam pelayar.

---

## 📦 Deploy ke GitHub Pages

```bash
git init
git add .
git commit -m "Initial deploy: Ekosistem Teknologi Moden"
git branch -M main
git remote add origin https://github.com/aimanrafee/Ekosistem-Teknologi-Pengaturcaraan-Infrastruktur-Moden-Bahasa-Runtime--Platform-Awan-.git
git push -u origin main
```

Kemudian di GitHub: **Settings → Pages → Source: branch `main`, folder `/ (root)`** → Save.

> Semua rujukan fail (`css/style.css`, `js/main.js`, dsb.) menggunakan laluan **relatif**, jadi laman berfungsi betul walaupun dihoskan di bawah subfolder repo seperti `username.github.io/nama-repo/`.

---

## 🛠️ Menyunting Kandungan

Semua teks dan data berada dalam `data/content.js`, dipisahkan sepenuhnya daripada logik paparan. Untuk menambah baris baharu (contohnya alat baharu dalam jadual "Di Sebalik Alatan"):

```js
export const tools = [
  // ...baris sedia ada
  {
    tool: "Nama Alat",
    written: "Bahasa yang pengguna taip",
    core: "Bahasa teras yang membina alat",
    note: "Penerangan lanjut tentang kenapa pemisahan ini berlaku."
  }
];
```

Tiada perubahan diperlukan pada `render.js` atau `main.js` — paparan akan dikemas kini secara automatik.

---

## 🧱 Teknologi

| Kategori | Pilihan |
|---|---|
| Markup | HTML5 semantik |
| Gaya | CSS3 (Custom Properties, Grid, Flexbox, `color-mix()`) |
| Logik | JavaScript ES2020+ (ES Modules native, tiada transpiler) |
| Fon | Fon sistem sahaja (`-apple-system`, `Segoe UI`, dsb.) — tiada permintaan rangkaian luar |
| Hosting | GitHub Pages (static, tiada backend) |

---

## 📄 Lesen

Bebas digunakan dan diubah suai untuk tujuan peribadi atau pendidikan.

---

## ✍️ Kredit

Kandungan disusun daripada penyelidikan dan perbincangan tentang ekosistem bahasa pengaturcaraan moden. Dibina sepenuhnya dengan HTML, CSS, dan JavaScript — tiada rangka kerja, tiada kebergantungan luar.
