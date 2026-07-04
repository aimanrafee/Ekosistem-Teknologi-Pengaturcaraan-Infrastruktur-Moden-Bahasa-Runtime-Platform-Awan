// Content data derived from the source notes.
// Kept separate from rendering logic so copy can be edited without touching JS behaviour.

export const layers = [
  {
    id: "l1",
    tag: "Lapisan 1",
    title: "Infrastruktur Paling Dasar",
    subtitle: "OS, kernel, pelayan web, pangkalan data",
    languages: ["C", "C++"],
    summary: "Linux, Windows, macOS dan Android — semuanya ditulis dalam C/C++. Pelayan seperti Nginx, Apache dan pangkalan data seperti MySQL/PostgreSQL turut dibina di atasnya.",
    detail: "Semua pemacu peranti, sistem fail, dan protokol rangkaian tahap rendah bergantung pada C. Ini bahasa klasik mutlak — tanpa C, internet seperti yang kita kenali tidak akan wujud."
  },
  {
    id: "l2",
    tag: "Lapisan 2",
    title: "Internet & Backend Web",
    subtitle: "Aplikasi, API, dan perkhidmatan pelayan",
    languages: ["JavaScript", "Java", "C#", "Python", "Go", "PHP"],
    summary: "Node.js mendominasi backend moden dan real-time. Java masih menjadi nadi sistem perusahaan besar; PHP masih menjana sebahagian besar web menerusi WordPress.",
    detail: "Go dicipta oleh Google untuk infrastruktur awan, mikroservis, Kubernetes dan Docker. Campuran klasik (Java, C#, PHP) dan moden (Go, Node.js) beroperasi serentak dalam ekosistem yang sama."
  },
  {
    id: "l3",
    tag: "Lapisan 3",
    title: "Kecerdasan Buatan & Data",
    subtitle: "Latihan model, inferens, sains data",
    languages: ["Python", "C++", "CUDA", "Rust"],
    summary: "Python ialah bahasa paling meluas untuk AI/ML melalui PyTorch, TensorFlow dan Hugging Face — tetapi teras prestasinya bukan Python.",
    detail: "Operasi matematik berat di bawah rangka kerja Python sebenarnya dilaksanakan dalam C++, manakala pengaturcaraan GPU untuk latihan model bergantung pada CUDA (C/C++)."
  },
  {
    id: "l4",
    tag: "Lapisan 4",
    title: "Frontend",
    subtitle: "Apa yang pengguna lihat dan sentuh",
    languages: ["JavaScript", "TypeScript"],
    summary: "Satu-satunya bahasa yang berjalan secara natif dalam pelayar web. React, Next.js, Vue dan Svelte semuanya berasaskan JavaScript/TypeScript.",
    detail: "Asalnya bahasa klasik sejak 1995, kini berevolusi menjadi moden melalui ES6+ dan TypeScript — bahasa wajib untuk sebarang antara muka web."
  },
  {
    id: "l5",
    tag: "Lapisan 5",
    title: "Data & Pangkalan",
    subtitle: "Penyimpanan dan pertanyaan data berstruktur",
    languages: ["SQL"],
    summary: "Walaupun bukan bahasa pengaturcaraan am, SQL menguasai hampir semua pangkalan data hubungan seperti PostgreSQL, MySQL dan SQL Server.",
    detail: "Setiap sistem di lapisan atas — backend, AI, frontend — akhirnya membaca dan menulis data menerusi SQL di suatu titik dalam alirannya."
  },
  {
    id: "l6",
    tag: "Lapisan 6",
    title: "Automasi & Operasi",
    subtitle: "DevOps, CI/CD, pengurusan infrastruktur",
    languages: ["Bash", "Python", "Go"],
    summary: "Skrip Bash menguruskan pelayan dan automasi sistem harian, manakala Python dan Go menggerakkan alat infrastruktur moden.",
    detail: "Ansible, Terraform dan pengendali Kubernetes (Kubernetes operator) kebanyakannya dibina menggunakan Python atau Go untuk kebolehskalaan."
  }
];

export const tools = [
  {
    tool: "Node.js",
    written: "JavaScript / TypeScript",
    core: "C++ (enjin V8) + JavaScript",
    note: "Apabila anda taip `node app.js`, kod yang anda tulis ialah JavaScript — tetapi enjin yang mentafsir dan menjalankannya (V8, ciptaan Google) serta majoriti modul teras Node ditulis dalam C++. Sebahagian kecil pustaka peringkat tinggi dalam Node sendiri ditulis dalam JavaScript."
  },
  {
    tool: ".ps1 — PowerShell",
    written: "PowerShell (bahasa skrip tersendiri)",
    core: "C# (.NET)",
    note: "Fail .ps1 hanyalah teks skrip biasa. Penterjemah dan runtime yang membaca serta menjalankannya — PowerShell 7/Core dan juga Windows PowerShell versi lama — dibina sepenuhnya menggunakan C# di atas platform .NET."
  },
  {
    tool: "Python",
    written: "Python",
    core: "C (CPython)",
    note: "Pentafsir rujukan yang paling meluas digunakan, CPython, ditulis dalam bahasa C. Terdapat juga implementasi alternatif seperti PyPy (ditulis dalam Python) atau Jython (ditulis dalam Java), tetapi CPython kekal sebagai asas paling asas dan paling banyak digunakan."
  },
  {
    tool: "OpenAI Codex CLI",
    written: "Arahan bahasa semula jadi / terminal",
    core: "Go",
    note: "Dibina sebagai binari tunggal berprestasi tinggi. Anda berinteraksi melalui arahan teks biasa, tetapi logik pemprosesan, pengurusan sesi, dan panggilan API dikendalikan oleh atur cara Go di sebalik tabir."
  },
  {
    tool: "GitHub Copilot CLI",
    written: "Arahan bahasa semula jadi / terminal",
    core: "Go",
    note: "Sama seperti Codex CLI, alat ini memilih Go kerana kebolehannya menghasilkan satu fail binari mudah alih tanpa memerlukan runtime tambahan dipasang pada mesin pengguna."
  },
  {
    tool: "Open Interpreter",
    written: "Arahan bahasa semula jadi",
    core: "Python",
    note: "Berbeza daripada Codex/Copilot CLI, alat ini memilih Python supaya boleh terus mengintegrasikan pustaka ML/AI sedia ada tanpa lapisan penterjemah tambahan — pertukaran antara kelajuan dan kemudahan pembangunan."
  },
  {
    tool: "Ollama CLI",
    written: "Arahan CLI (cth. `ollama run llama3`)",
    core: "Go (aplikasi) + C++ (llama.cpp)",
    note: "Arahan yang anda taip dikendalikan oleh aplikasi Go — ringan dan mudah diedarkan sebagai satu binari merentas platform. Tetapi apabila model .gguf perlu dimuatkan dan dijalankan, Ollama memanggil llama.cpp, sebuah pustaka C/C++ yang direka khusus untuk inferens pantas pada CPU/GPU."
  }
];

export const toolsIntro = "Bahasa yang anda taip di terminal jarang sekali menjadi bahasa yang benar-benar melakukan kerja berat. Lapisan permukaan (arahan, skrip, prompt) biasanya dibina untuk kemudahan pengguna, manakala teras prestasi — pengurusan memori, akses perkakasan, kelajuan pemprosesan — diserahkan kepada bahasa peringkat rendah seperti C, C++ atau Go. Corak ini berulang di seluruh industri: kemudahan di atas, kelajuan di bawah.";

export const shells = [
  {
    platform: "macOS",
    native: "zsh / bash",
    admin: "Ya — guna sudo",
    updates: "Sistem: kemas kini macOS. PowerShell pilihan: repo GitHub Microsoft.",
    note: "pwsh boleh dipasang terus daripada github.com/PowerShell/PowerShell dan dikemas kini melalui GitHub Releases atau Homebrew."
  },
  {
    platform: "Linux",
    native: "bash (majoriti distro)",
    admin: "Ya — guna sudo / su -",
    updates: "Sistem: repositori distro (apt/dnf/pacman). PowerShell pilihan: repo GitHub rasmi.",
    note: "Microsoft menyediakan pakej pwsh untuk distro popular; boleh dijalankan dengan sudo pwsh."
  },
  {
    platform: "Android",
    native: "Tiada shell terbina — guna Termux",
    admin: "Hanya jika peranti di-root",
    updates: "Termux dikemas kini melalui repo GitHub-nya sendiri, bukan Microsoft.",
    note: "Tiada PowerShell rasmi, tetapi bash, Python dan Node boleh dijalankan dalam Termux."
  },
  {
    platform: "Huawei (HarmonyOS/EMUI)",
    native: "Tiada terminal asli",
    admin: "Hanya jika di-root (rumit pada model terkini)",
    updates: "Termux perlu dipasang melalui APK sideload atau stor alternatif.",
    note: "PowerShell tidak tersedia untuk HarmonyOS; sekatan ekosistem menghadkan sideloading."
  }
];

export const summaryPoints = [
  { label: "Klasik", text: "C dan C++ menjalankan asas mutlak internet dan perkakasan — kernel, pemacu, protokol rangkaian." },
  { label: "Klasik-moden", text: "Java, C#, JavaScript dan Python menggerakkan aplikasi perusahaan, web, dan kebanyakan sistem AI hari ini." },
  { label: "Moden", text: "Go, Rust dan TypeScript mengoptimumkan infrastruktur awan, mikroservis dan alat pembangunan baharu." }
];
