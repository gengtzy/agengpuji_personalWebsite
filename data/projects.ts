export type Tech = {
  name: string;
  icon: string;
};

export const allProjects = [
  {
    id: 1,
    title: "Omahku – Mobile App Design",
    category: "ui",
    image: "/images/dsg1.png",
    description:
      "User Interface design for a smart home automation app, focusing on intuitive control of IoT devices and user-friendly navigation.",
    link: "https://www.behance.net/gallery/233377223/Omahku-Mobile-App-Design",
    techStack: [
      { name: "Figma", icon: "/images/figma2.svg" },
      { name: "Canva", icon: "/images/canva2.svg" },
    ] as Tech[],
  },
  {
    id: 2,
    title: "Belinasgor. - Mobile App Design",
    category: "ui",
    image: "/images/dsg4.png",
    description:
      "Mobile application design for a food delivery service, featuring an appetizing layout and seamless ordering flow for customers.",
    link: "https://www.behance.net/gallery/234709959/Belinasgor-Mobile-App-Design",
    techStack: [
      { name: "Figma", icon: "/images/figma2.svg" },
      { name: "Canva", icon: "/images/canva2.svg" },
    ] as Tech[],
  },
  {
    id: 12,
    title: "Personal Portfolio - Web App Design",
    category: "ui",
    image: "/images/dsg5.png",
    description:
      "High-fidelity web design concept for a personal portfolio, emphasizing aesthetic appeal, layout balance, and modern visual trends.",
    link: "https://www.behance.net/gallery/233496589/Personal-Portfolio-Website-Design",
    techStack: [
      { name: "Figma", icon: "/images/figma2.svg" },
      { name: "Canva", icon: "/images/canva2.svg" },
    ] as Tech[],
  },
  {
    id: 10,
    title: "Relasibaik.",
    category: "web",
    image: "/images/code7.png",
    description:
      "Web-based expert system utilizing Rule-Based Reasoning method to analyze family dynamics and screen the quality of relationships between parents and relatives.",
    link: "https://github.com/gengtzy",
    techStack: [
      { name: "Node.js", icon: "/images/nodejs.svg" },
      { name: "Laravel", icon: "/images/laravel2.svg" },
      { name: "Livewire", icon: "/images/livewire.svg" },
      { name: "Vite", icon: "/images/vitejs.svg" },
      { name: "Tailwindcss", icon: "/images/tailwindcss2.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 11,
    title: "Admin Panel - Relasibaik.",
    category: "web",
    image: "/images/code8.png",
    description:
      "Comprehensive administrative dashboard for the Relasibaik platform, featuring real-time data visualization, user management (CRUD), and detailed reporting systems.",
    link: "https://github.com/gengtzy",
    techStack: [
      { name: "Node.js", icon: "/images/nodejs.svg" },
      { name: "Laravel", icon: "/images/laravel2.svg" },
      { name: "Livewire", icon: "/images/livewire.svg" },
      { name: "Vite", icon: "/images/vitejs.svg" },
      { name: "Tailwindcss", icon: "/images/tailwindcss2.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "web",
    image: "/images/code1.png",
    description:
      "Minimalist personal portfolio website designed with a clean, white-themed interface to showcase projects and skills with optimal readability.",
    link: "https://github.com/gengtzy/gengtzy.github.io",
    visit: "https://gengtzy.github.io/",
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
    ] as Tech[],
  },
  {
    id: 9,
    title: "Personal Portfolio New",
    category: "web",
    image: "/images/code6.png",
    description:
      "Modernized interactive portfolio featuring dynamic animations, vibrant color schemes, and engaging iconography to highlight professional achievements.",
    link: "https://github.com/gengtzy/agengpuji_personalWebsite.git",
    techStack: [
      { name: "Node.js", icon: "/images/nodejs.svg" },
      { name: "Next.js", icon: "/images/nextjs2.svg" },
      { name: "React.js", icon: "/images/react2.svg" },
      { name: "Tailwindcss", icon: "/images/tailwindcss2.svg" },
      { name: "Typescript", icon: "/images/typescript.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
    ] as Tech[],
  },
  {
    id: 4,
    title: "Cafe Love Jamu Profile",
    category: "web",
    image: "/images/code2.png",
    description:
      "Dynamic profile website for a cafe enabling seamless menu exploration and direct ordering capabilities via WhatsApp integration.",
    link: "https://github.com/gengtzy/websiteCafeJamu",
    techStack: [
      { name: "Laravel", icon: "/images/laravel2.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 13,
    title: "Admin Panel - Cafe Love Jamu",
    category: "web",
    image: "/images/code9.png",
    description:
      "Backend management system for the cafe website, facilitating menu updates, content control, and dashboard monitoring.",
    link: "https://github.com/gengtzy/websiteCafeJamu",
    techStack: [
      { name: "Laravel", icon: "/images/laravel2.svg" },
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 18,
    title: "Manage-Money",
    category: "web",
    image: "/images/code14.png",
    description:
      "Minimalist financial management system built with Laravel Filament, providing a streamlined and user-friendly interface for tracking income and expenses.",
    link: "https://github.com/gengtzy/filament_moneymanagement",
    visit: "https://manage-money-zeta.vercel.app/",
    techStack: [
      { name: "Laravel", icon: "/images/laravel2.svg" },
      { name: "Filament", icon: "/images/laravel2.svg" },
      { name: "Supabase", icon: "/images/supabase.svg" },
    ] as Tech[],
  },
  {
    id: 5,
    title: "SI Desa Sidokerto",
    category: "web",
    image: "/images/code3.png",
    description:
      "Community information portal designed for Sidokerto Village, featuring the latest news updates, village profiles, and public information access.",
    link: "https://github.com/gengtzy/websiteDesaSidokerto",
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "PHP", icon: "/images/php.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 14,
    title: "Admin Panel - SI Desa Sidokerto",
    category: "web",
    image: "/images/code10.png",
    description:
      "Content Management System (CMS) for the village portal, allowing administrators to easily publish news, manage profiles, and update public data.",
    link: "https://github.com/gengtzy/websiteDesaSidokerto",
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "PHP", icon: "/images/php.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 6,
    title: "MySPP",
    category: "web",
    image: "/images/code4.png",
    description:
      "Tuition payment management system for SD Hangtuah Candi, streamlining financial records, transaction tracking, and administrative reporting.",
    link: "https://github.com/gengtzy/desktopAplikasiPembayaranSPP",
    techStack: [
      { name: "Java", icon: "/images/java.svg" },
      { name: "MySQL", icon: "/images/mysql.svg" },
    ] as Tech[],
  },
  {
    id: 7,
    title: "Sosial Media - Flyer Design",
    category: "ui",
    image: "/images/dsg3.png",
    description:
      "Collection of creative digital flyers and posters designed for social media marketing and event promotion.",
    link: "https://www.behance.net/gallery/237491625/Social-Media-Post",
    techStack: [
      { name: "Figma", icon: "/images/figma2.svg" },
      { name: "Canva", icon: "/images/canva2.svg" },
    ] as Tech[],
  },
  {
    id: 16,
    title: "Shoppink (Midtrans Payment Demo)",
    category: "web",
    image: "/images/code13.png",
    description:
      "A simple e-commerce checkout demo built with Next.js App Router and integrated with Midtrans Payment Gateway (Snap).",
    visit: "https://midtrans-payment-demo.vercel.app/",
    link: "https://github.com/gengtzy/midtrans-payment-demo",
    techStack: [
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Tailwind", icon: "/images/tailwindcss2.svg" },
      { name: "Next.js", icon: "/images/nextjs2.svg" },
      { name: "Midtrans", icon: "/images/midtrans.svg" },
    ] as Tech[],
  },
  {
    id: 17,
    title: "MovieKu",
    category: "web",
    image: "/images/code12.png",
    description:
      "Global movie search platform powered by the OMDb API, featuring a minimalist user interface for effortless film discovery and detailed information retrieval.",
    visit: "https://simple-movie-search.vercel.app/",
    link: "https://github.com/gengtzy/Simple-Movie-Search",
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "JQuery", icon: "/images/jquery.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
      { name: "OMDb API", icon: "/images/api.svg" },
    ] as Tech[],
  },
  {
    id: 8,
    title: "Company Cafe Profile",
    category: "web",
    image: "/images/code5.png",
    description:
      "Static landing page designed to present detailed company information, ambiance, and brand identity for a local cafe.",
    link: "https://github.com/gengtzy/cafewebsite.git",
    visit: "https://lovejamucafewebsite.github.io/",
    techStack: [
      { name: "HTML5", icon: "/images/html5.svg" },
      { name: "Javascript", icon: "/images/js.svg" },
      { name: "Bootstrap", icon: "/images/bootstrap5.svg" },
    ] as Tech[],
  },
  {
    id: 15,
    title: "SI SD Gimatama",
    category: "web",
    image: "/images/code11.png",
    description:
      "Comprehensive school information system for SD Gimatama built on WordPress, serving as a digital hub for academic news, profiles, and institutional updates.",
    link: "https://github.com/gengtzy",
    visit: "https://sdgimatama.wordpress.com/",
    techStack: [{ name: "Wordpress", icon: "/images/wordpress.svg" }] as Tech[],
  },
];
