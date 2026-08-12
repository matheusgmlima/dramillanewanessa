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
    default: "Dra. Millane Wanessa | Fisioterapeuta Dermatofuncional em Recife",
    template: "%s · Dra. Millane Wanessa",
  },
  description:
    "Fisioterapeuta dermatofuncional em Recife: acompanhamento intraoperatório, pós-operatório de cirurgia plástica, lipedema e pós-parto. Consultório no Pina. Agende sua consulta.",
  keywords: [
    "fisioterapia dermatofuncional Recife",
    "pós-operatório cirurgia plástica Recife",
    "fisioterapeuta intraoperatório Recife",
    "tratamento de lipedema Recife",
    "fisioterapia pós-parto Recife",
    "drenagem linfática pós-operatório",
    "fisioterapeuta Pina Recife",
    "Mentory Fisio",
  ],
  authors: [{ name: "Dra. Millane Wanessa" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Dra. Millane Wanessa",
    title: "Dra. Millane Wanessa | Fisioterapeuta Dermatofuncional em Recife",
    description:
      "Do centro cirúrgico até a alta: intraoperatório, pós-operatório de cirurgia plástica, lipedema e pós-parto. Consultório no Pina, Recife.",
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
