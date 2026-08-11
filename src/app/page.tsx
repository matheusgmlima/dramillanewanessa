import Cabecalho from "@/components/Cabecalho";
import Hero from "@/components/Hero";
import Atendimento from "@/components/Atendimento";
import Metodo from "@/components/Metodo";
import Mentory from "@/components/Mentory";
import Consultorio from "@/components/Consultorio";
import Depoimentos from "@/components/Depoimentos";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main id="topo">
        <Hero />
        <Atendimento />
        <Metodo />
        {/* A virada de público acontece aqui: creme → vinho. */}
        <Mentory />
        <Consultorio />
        <Depoimentos />
      </main>
      <Rodape />
    </>
  );
}
