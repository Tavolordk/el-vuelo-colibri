import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Vuelo del Colibrí | Servicios Psicológicos",
  description:
    "Acompañamiento psicológico en línea y presencial para tu bienestar emocional y crecimiento personal.",
  icons: {
    icon: "/brand/logo-colibri.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
