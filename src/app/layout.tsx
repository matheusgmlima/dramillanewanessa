import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

/**
 * Bodoni Moda: didone de alto contraste, escolhida por ser a fonte livre
 * mais próxima do logotipo dela — não por ser "a fonte de luxo padrão".
 * Jost: geométrica leve, espelha a tagline "FISIOTERAPIA DERMATOFUNCIONAL".
 */
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://millanewanessa.com.br"),
  title: {
    default: "Dra. Millane Wanessa | Fisioterapia Dermatofuncional em Recife",
    template: "%s · Dra. Millane Wanessa",
  },
  description:
    "Fisioterapia dermatofuncional em Recife: pós-operatório de cirurgia plástica, lipedema e pós-parto. 13 anos de experiência clínica. Agende sua consulta.",
  keywords: [
    "fisioterapia dermatofuncional Recife",
    "pós-operatório cirurgia plástica Recife",
    "tratamento de lipedema Recife",
    "fisioterapia pós-parto Recife",
    "drenagem linfática pós-operatório",
    "Mentory Fisio",
  ],
  authors: [{ name: "Dra. Millane Wanessa" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dra. Millane Wanessa",
    title: "Dra. Millane Wanessa | Fisioterapia Dermatofuncional em Recife",
    description:
      "Pós-operatório de cirurgia plástica, lipedema e pós-parto. 13 anos de experiência clínica em Recife.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodoni.variable} ${jost.variable}`}>{children}</body>
    </html>
  );
}
