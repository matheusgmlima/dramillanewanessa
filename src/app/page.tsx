import Cabecalho from "@/components/Cabecalho";
import Hero from "@/components/Hero";
import Atendimento from "@/components/Atendimento";
import Metodo from "@/components/Metodo";
import Mentory from "@/components/Mentory";
import Consultorio from "@/components/Consultorio";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main id="topo">
        <Hero />
        <Atendimento />
        <Metodo />
        {/* A virada de público acontece aqui: creme para vinho.
            Os relatos das alunas moram dentro do Mentory, junto de quem
            eles precisam convencer. */}
        <Mentory />
        <Consultorio />
      </main>
      <Rodape />
    </>
  );
}
