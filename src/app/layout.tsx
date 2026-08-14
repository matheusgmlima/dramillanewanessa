import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import DadosEstruturados from "@/components/DadosEstruturados";
import { site } from "@/lib/site";
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
  metadataBase: new URL(site.url),
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
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Pinta a barra do navegador no Android com a cor da marca. */}
        <meta name="theme-color" content="#710014" />
        <DadosEstruturados />
      </head>
      <body className={`${bodoni.variable} ${jost.variable}`}>
        {/* Primeiro item do foco por teclado: sem ele, quem navega por Tab
            precisa percorrer o menu inteiro em cada visita. */}
        <a
          href="#topo"
          className="t-label sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-vinho-700 focus:px-6 focus:py-3 focus:text-creme-100"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
