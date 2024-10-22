import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AccordionComponentFAQ() {
  return (
    <Accordion type="single" collapsible className="w-[80%]  " defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Atende na modalidade on-line (Telemedicina)?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Sim. Minha experiência começa nesta modalidade desde 2021, quando terminei a residência de psiquiatria. Essa forma de atendimento é utilizada pela maioria dos psiquiatras pela conveniência, facilitando o acesso aos cuidados psiquiátricos.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Quais são as principais alterações psiquiátricas abordadas?</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
              Como aprendi com um grande professor, um psiquiatra não escolhe as alterações que trata. Meu objetivo é ajudar o paciente com seu sofrimento, independentemente da queixa.
          </p>
          <p>
              Contudo, diante da prevalência de algumas condições em relação a outras, posso dizer que as mais comuns na minha prática são: Alterações de Ansiedade (incluindo Ansiedade Generalizada, Síndrome do Pânico, Fobia Social), Depressão,
              Alterações relacionadas ao Estresse (como conflitos emocionais e o Estresse Pós-Traumático); Distúrbios de Humor (como Distúrbio Bipolar) e TDAH (Déficit de Atenção e Hiperatividade).
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Atende crianças e adolescentes? </AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Não. Minha abordagem é voltada para pessoas acima de 18 anos. Contudo, como o conceito de adolescência comporta desdobramentos, atendo também jovens entre 15 e 18 anos, cuja avaliação técnica pela continuidade da assistência é avaliada
            individualmente.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Qual o tempo da consulta? </AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Para que consiga atingir os objetivos de uma consulta centrada na sua experiência humana, sem o encaixe de um diagnóstico de forma enrijecida e um devido planejamento terapêutico, torna-se inviável uma consulta de 15 a 20 minutos.
          </p>
          <p className="mb-4">
            Prezo pelo tratamento individualizado e cauteloso, sem precipitar com qualquer intervenção medicamentosa, como tem sido tão comum em atendimentos de curto tempo. Diante disso, nossa consulta leva entre 50 minutos a 1 hora.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Qual o valor da consulta? </AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">O valor da consulta é informado no agendamento.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Terei acesso ao contato pessoal? </AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">Sim, esse é um diferencial, que a meu ver é fundamental. Estarei disponível para todos os meus pacientes em meu contato pessoal, para sanar dúvidas e necessidade que possam existir no decorrer do tratamento.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>Há retorno após as consultas? </AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Após a primeira consulta poderá ser agendado um retorno (gratuito) nos primeiros 30 dias, para sanar qualquer dúvida que possa ter surgido, para revisarmos ou realinharmos os objetivos terapêuticos e, se necessário, ajustarmos
            medicamentos.
          </p>
          <p className="mb-4">Contudo, muitas vezes, por ser dado o meu contato pessoal, muitas dúvidas são tiradas por telefone ou Whatsapp, não sendo algumas vezes necessário o retorno.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>Atende por plano de saúde? </AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            O atendimento por plano de saúde não me permite empregar a abordagem que julgo ser fundamental para o sucesso terapêutico. As consultas são exclusivamente particulares, com emissão de nota fiscal, que poderá ser utilizada para
            ressarcimento junto aos planos de saúde, caso deseje.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>Emite atestado de sanidade mental para concursos? </AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            Sim. O atestado de sanidade mental é a conclusão se o indivíduo está ou não apto (do ponto de vista mental) às funções do cargo que pleiteia. Para isso, uma avaliação psiquiátrica é realizada através de uma consulta. Para a conclusão da
            capacidade laboral são avaliados a curva vital do indivíduo, o histórico psiquiátrico e psicológico e são examinadas as funções mentais, como atitude, humor, pensamento, juízo de realidade entre outros. Toda essa avaliação está em
            conformidade com as exigências dos editais.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
