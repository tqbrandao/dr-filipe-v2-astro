import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AccordionComponentApproach() {
  return (
    <Accordion type="single" collapsible className="w-[80%]" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>1 - Entendendo suas queixas e a sua história:</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Basicamente tentarei entender as suas queixas e sintomas e como foram construídos. Procuro em minhas consultas uma abordagem que englobe, além das fundamentais ferramentas da psiquiatria e neurociência, influências humanísticas como
            psicanálise e filosofia. O meu intuito com isso é ampliar o entendimento da sua experiência humana, para compreender a construção do seu sofrimento. Para isso, preciso antes de mais nada, te escutar, conhecer sua história, buscar aquilo
            que talvez você ainda não tenha expressado em palavras ou não tenha tido condições de expor.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>2 - Raciocínio clínico e Impressão Diagnóstica:</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Essa busca enriquecedora sobre você é fundamental também para o raciocínio clínico sobre seu caso. Conhecer a história será importante também para iniciarmos nossa relação médico paciente, que, somada ao conhecimento teórico baseado em
            evidências científicas, exame psíquico, experiência clínica em variados casos, me permitirá chegar a uma impressão diagnóstica. Quando necessário, exames (laboratoriais ou de imagem) poderão ser solicitados, visando elucidação de
            possíveis diagnósticos diferenciais associados e/ou acompanhamento refinado.
          </p>
          <p>
            Ressalto que essa impressão diagnóstica, sobretudo nas primeiras consultas, é uma conclusão inicial sobre seu quadro e não significa necessariamente que você será diagnosticado com um transtorno mental, pois nem todo sofrimento é
            patológico.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>3 - Encaminhamento Terapêutico:</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Dessa forma, com uma impressão técnica, mas também humana sobre você, poderemos estabelecer uma linha terapêutica. Medicamentos, quando indicados, serão prescritos com embasamento científico, estabelecendo uma previsão do tempo de uso.
            Importante lembrar que a medicalização da vida precisa ser questionada. Dessa forma, o encaminhamento terapêutico, nem sempre terá remédios como o foco principal, mas sempre terá um conjunto de orientações e estímulo a reflexão.
          </p>
          <p className="mb-4">
            As orientações visam mudanças comportamentais importantes para o seu quadro e as reflexões serão a base para te ajudar em questões e conflitos existenciais que muitas vezes estão associados aos sintomas ou os provocando. Conforme
            avaliado, poderá ser indicado em associação uma abordagem terapêutica ou psicanálise.
          </p>
          <p className="mb-4">Em geral, busca-se essas 3 primeiras etapas na primeira sessão.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>4 - Seguimento Terapêutico: </AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Essa etapa será a continuidade do tratamento definido no encaminhamento terapêutico, dando sequência no planejamento estabelecido. Portanto, essa etapa corresponde às sessões de seguimento. Muitos tratamentos psiquiátricos não possuem
            bons resultados, pois não é estabelecido um projeto terapêutico. A primeira consulta é uma visão inicial, onde o primeiro passo foi dado. Contudo, é o seguimento que determinará a trajetória da sua melhora. Ele, portanto, será
            determinante nos resultados.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
