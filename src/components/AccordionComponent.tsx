import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AccordionComponent() {
  return (
    <Accordion type="single" collapsible className="w-[80%]" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Apresentação</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Olá, fico muito feliz que tenha se interessado por meu trabalho. É uma grande satisfação ter você aqui neste espaço. Penso que de alguma forma pode estar em busca da ajuda de um psiquiatra, seja para você, algum familiar ou conhecido.
            Portanto, quero te explicar como funciona meu atendimento: Procuro em minhas consultas uma abordagem que englobe, além das fundamentais ferramentas da psiquiatria e neurociência, influências humanísticas como psicanálise e filosofia. O
            meu intuito com isso é ampliar o entendimento da sua experiência humana. Ao meu ver, não adianta os árduos e dedicados anos de formação, se eu não puder no mínimo aliviar seu sofrimento.
          </p>
          <p>
            Como faço isso? Para que possa te ajudar, preciso, antes de mais nada, te escutar, conhecer sua história, buscar aquilo que talvez você ainda não tenha expressado em palavras ou não tenha tido condições de expor. Essa busca enriquecedora
            sobre você nos ajudará a chegar a um diagnóstico, ou não, pois nem todo comportamento ou sofrimento psíquico é necessariamente patológico. Dessa forma, com uma impressão técnica, mas também humana sobre você, poderemos estabelecer uma
            linha terapêutica com metas para que você atinja uma maior qualidade de vida.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Detalhes sobre as consultas</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Para que consiga atingir os objetivos de uma consulta centrada na sua experiência humana, sem o encaixe de um diagnóstico de forma enrijecida, torna-se inviável uma consulta de 15 a 20 min. Prezo pelo tratamento individualizado e
            cauteloso, sem precipitar com qualquer intervenção medicamentosa, como tem sido tão comum em atendimentos de curto tempo. Diante disso, nossa consulta leva em torno de uma hora, podendo, a depender do contexto, até mesmo ultrapassar um
            pouco esse tempo. Após a primeira consulta teremos um retorno entre 15 a 20 dias, para alinharmos objetivos terapêuticos, retirar suas dúvidas e, se necessário, ajustar medicamentos.
          </p>
          <p>
            Estarei disponível para todos os meus pacientes em meu contato pessoal, para sanar dúvidas que possam existir ao decorrer do tratamento. As consultas são exclusivamente particulares, com emissão de nota fiscal, que poderá ser utilizada
            para ressarcimento junto a planos de saúde, caso deseje.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Quem sou eu?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Eu sou o Filipe, natural de Goiânia-GO, um eterno curioso e apaixonado pela mente humana e neurociência. Dentro da medicina, minha história começou em 2010. Foi nessa época que cheguei à bela e histórica cidade de Ouro Preto para em 2016
            me formar em medicina na Universidade Federal De Ouro Preto.
          </p>
          <p className="mb-4">
            Apesar da dicotomia mente e cérebro estar em um campo de divisão didática, colocarei dessa forma para dizer que foram esses dois mundos o meu foco de entusiasmo e prazer pelo estudo médico: a psiquiatria, neurologia e neurocirurgia.
          </p>
          <p className="mb-4">
            No ano de 2018 fui aprovado na concorrida Residência Médica (MEC) de Psiquiatria do Hospital das Clínicas da Universidade Federal de Goiás. Foram 3 anos de muito estudo e aprendizado com renomados psiquiatras onde tive minha formação
            teórica e prática dessa linda especialidade da alma (do Grego: psykhé = alma + iatreía = cura).
          </p>
          <p className="mb-4">
            Minha experiência prática se solidificou além da residência, não apenas no consultório, mas também nos mais de 3 anos trabalhando em pronto socorro psiquiátrico, CAPS (Centro De atenção Psicossocial), Clínica Psiquiátrica com regime
            humanizado de internação, além de interconsultas psiquiátricas dadas para outros médicos em hospitais gerais. Ao longo da formação, tive contato com abordagens terapêuticas fundamentais que procuro lançar mão. Utilizo ferramentas
            psicanalíticas, com a arte da escuta e reflexão, quando o embasamento fisiopatológico neural ainda não estão completamente elucidados.
          </p>
          <p className="mb-4">
            Apesar da psiquiatria em minha vida, sentia que faltava ainda algo na minha formação. Diante disso, fui em busca de um desejo cuja semente havia sido plantada ainda na faculdade: a Neurocirurgia. Após muita dedicação, consegui ser
            aprovado em mais uma residência muito concorrida, iniciando em 2023 a residência médica (MEC) de Neurocirurgia do Instituto Estadual do Cérebro Paulo Niemeyer (IECPN), no Rio De Janeiro, onde estou no processo de formação para me tornar
            também um Neurocirurgião. A campo da Neurocirurgia tem contribuído muito para aquisição e aperfeiçoamento do conhecimento em Neurociência, que em parte adquirimos na Psiquiatria, mas aprofundamos com a Neurocirurgia sob uma vertente
            neurobiológica robusta. Essa contribuição se estende também no estudo de inúmeras doenças cerebrais e no uso de ferramentas propedêuticas (exame neurológico, exames de neuroimagem, EEG, entre outros) para uma avaliação ainda mais completa
            do meu paciente.
          </p>
          <p>Essa foi um pouco da história da minha formação médica até aqui. Espero contribuir com a sua busca por saúde, diminuição do sofrimento e qualidade de vida.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
