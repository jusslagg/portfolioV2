export const navigationLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#about", label: "Perfil" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export const heroOrbitIcons = [
  { label: "React", symbol: "RE", color: "#7dd3fc" },
  { label: "Next.js", symbol: "NX", color: "#ffffff" },
  { label: "TypeScript", symbol: "TS", color: "#a5b4fc" },
  { label: "Node.js", symbol: "ND", color: "#34d399" },
  { label: "AWS", symbol: "AWS", color: "#facc15" },
  { label: "Firebase", symbol: "FB", color: "#f97316" },
  { label: "GitHub", symbol: "GH", color: "#e5e7eb" },
];

export const aboutHighlights = [
  {
    title: "Control de gestión",
    copy: "Seguimiento de KPIs, prevención de desviaciones y actualización de sistemas de nómina en CAT Technologies.",
  },
  {
    title: "Automatización comercial",
    copy: "Diseño y despliegue de flujos digitales, CRMs y bases de datos para Cruz Roja Argentina.",
  },
  {
    title: "Liderazgo operativo",
    copy: "Coordinación de equipos de soporte y comunicación interna para Atento en Argentina y Uruguay.",
  },
];

export const constellationSkills = [
  {
    id: "fullstack",
    title: "Frontend & Backend",
    description: "React, Next.js, Node.js y arquitecturas escalables.",
    position: [-1.5, 1.2, -0.4],
  },
  {
    id: "agile",
    title: "Agile Delivery",
    description: "Scrum, OKRs y ciclos iterativos para acelerar releases.",
    position: [-0.4, 1.8, 0.6],
  },
  {
    id: "ai",
    title: "IA aplicada",
    description: "Integración de modelos para lectura y clasificación documental.",
    position: [1.1, 1.6, 0.3],
  },
  {
    id: "next",
    title: "Next.js Expertise",
    description: "SSR/ISR, rutas app y performance en Vercel.",
    position: [2.1, 0.4, -0.2],
  },
  {
    id: "automation",
    title: "Automatización",
    description: "Dashboards, workflows y orquestación de datos para equipos comerciales.",
    position: [1.8, -0.8, -0.6],
  },
  {
    id: "analytics",
    title: "Business Intelligence",
    description: "Seguimiento de KPIs, reporte financiero y control operativo.",
    position: [-1.9, -1.1, 0.2],
  },
  {
    id: "dash",
    title: "Dashboards & BI",
    description: "Locker Studio, Data Studio y reporting en vivo para dirección.",
    position: [0.6, -1.6, 0.9],
  },
  {
    id: "qa",
    title: "QA & Testing",
    description: "Testing funcional, regresión y control de calidad previo al go-live.",
    position: [-0.8, -1.8, -0.4],
  },
  {
    id: "comms",
    title: "Comms & Cultura",
    description: "Gestión de stakeholders, eventos y storytelling interno.",
    position: [1.9, 0.2, 0.1],
  },
  {
    id: "lead",
    title: "Liderazgo",
    description: "Equipos de hasta 15 personas, capacitación y cultura.",
    position: [0, 0.4, 0.8],
  },
  {
    id: "react",
    title: "React UI",
    description: "Portales responsivos, hooks avanzados y animaciones.",
    position: [-1.2, -0.3, 1],
  },
  {
    id: "api",
    title: "API Design",
    description: "REST/GraphQL seguros, caching y observabilidad.",
    position: [0.3, -2, -0.1],
  },
  {
    id: "perform",
    title: "Performance",
    description: "Auditorías Lighthouse, optimización Core Web Vitals.",
    position: [-2.1, 0.6, -0.2],
  },
];

export const projects = [
  {
    title: "Barbería PRO",
    summary: "Panel de gestión de clientes y barberos con búsqueda avanzada, roles y fotos en la nube.",
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase", "Cloudinary"],
    link: "https://www.linkedin.com/in/jesusgilgonzalez/",
    preview: "/peluqueria.gif",
    details:
      "Construí un panel de barbería con perfiles de barberos y clientes, agenda dinámica, búsqueda avanzada y carga de fotos en Cloudinary, todo respaldado con Firebase Auth, Firestore y roles personalizados.",
  },
  {
    title: "Inventario Dietética",
    summary: "Sistema web para controlar stock, costos y márgenes con cálculos automáticos y guardado en la nube.",
    stack: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase", "React Hook Form"],
    link: "https://www.linkedin.com/in/jesusgilgonzalez/",
    preview: "/Dietetica.gif",
    details:
      "Desarrollé un panel para dietéticas con carga masiva de productos, cálculos de márgenes y reposición automática, autenticación con Firebase y formularios validados con React Hook Form. Incluye dashboards de costos y stocks críticos en tiempo real.",
  },
  {
    title: "Dante’s Inferno – Página temática",
    summary: "Sitio estático inspirado en la Divina Comedia, con círculos del infierno ilustrados y narrativa visual.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://www.linkedin.com/in/jesusgilgonzalez/",
    preview: "/dantes.gif",
    details:
      "Página de una sola sección que recorre los anillos del Infierno de Dante. Construido únicamente con HTML5, CSS3 y JavaScript ES6 para mantener el código liviano y fácil de desplegar.",
    features: [
      "Landing de una sola sección",
      "Contenido literario y visual",
      "Diseño oscuro ambiental",
      "Código liviano sin dependencias",
      "Ideal para presentaciones y lectura",
    ],
  },
  {
    title: "NextVideojuegos",
    summary: "E-commerce de videojuegos con carrito, descuentos, carga dinámica y gestión de imágenes en la nube.",
    stack: ["Next.js", "TailwindCSS", "Firebase", "Cloudinary", "SSR", "Vercel"],
    link: "https://www.linkedin.com/in/jesusgilgonzalez/",
    preview: "/Gamesphere.gif",
    details:
      "NextVideojuegos es una tienda de videojuegos construida con Next.js (app router) y TailwindCSS. Incluye carrito persistente, cálculo de descuentos, carga de productos desde Firestore y media optimizada con Cloudinary. Desplegado en Vercel con SSR/ISR para SEO y performance.",
    features: [
      "Catálogo de videojuegos dinámico",
      "Carrito con descuentos y checkout",
      "Imágenes servidas desde Cloudinary",
      "Backend sin servidor usando Firebase",
      "Rendering híbrido (SSR + ISR) optimizado",
      "Deploy automático en Vercel (+150 deploys)",
    ],
  },
  {
    title: "Financial Tracker",
    summary: "Dashboard financiero con sueldo diario disponible, objetivo de ahorro y proyecciones historicas.",
    stack: ["Next.js", "Chart.js", "Estado Global", "Proyeccion", "Finanzas Personales"],
    link: "https://www.linkedin.com/in/jesusgilgonzalez/",
    preview: "/financial.gif",
    details: "Financial Tracker es un sistema hecho en Next.js para visualizar cuanto podes gastar por dia sin romper tu objetivo mensual. Calcula proyecciones semanales, mensuales e historicas y muestra alertas segun tu ritmo de gasto.",
    features: [
      "Ingreso de sueldo y gastos del mes",
      "Objetivo de ahorro configurable y saldo diario disponible",
      "Proyecciones semanal, mensual e historica",
      "Indicador visual de desvio",
      "Graficos minimalistas con Chart.js",
    ],
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jesusgilgonzalez/", icon: "IN" },
  { label: "Email", href: "mailto:lagg312@gmail.com", icon: "@" },
  { label: "WhatsApp", href: "https://wa.me/5491123861546", icon: "WA" },
];
