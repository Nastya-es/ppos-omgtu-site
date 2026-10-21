import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ППОС ОмГТУ — Профсоюз студентов",
  description:
    "Первичная профсоюзная организация студентов Омского государственного технического университета",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}