import { Space_Grotesk, Orbitron } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { CustomCursor } from "../components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Portfolio Jesús Gil",
  description:
    "Portfolio profesional con estética cósmica, animaciones suaves y un hero interactivo inspirado en singularidades púrpuras.",
  metadataBase: new URL("https://singularidad.dev"),
  openGraph: {
    title: "Portfolio Jesús Gil",
    description: "Experiencia digital futurista con Next.js, Three.js, GSAP y motion systems.",
    type: "website",
    url: "https://singularidad.dev",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Singularidad Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Jesús Gil",
    description: "Experiencias 3D neón con Next.js, GSAP y R3F.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${orbitron.variable} bg-[radial-gradient(circle,_#12091f,_#05030f)] text-white antialiased`}
      >
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
