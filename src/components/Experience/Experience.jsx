const Experience = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center  items-center bg-opacity-10
        w-full h-full bg-gray-600 opacity-10"
        style={{
          backgroundImage: " url('/images/website/martelo-sem.png')",
          backgroundAttachment: 'fixed', opacity: 0.7
        }} >
        <div class="font-semibold text-white sm:text-xl md:text-2xl  " >
          <div className='grid xl:grid-cols-2  space-y-3  py-20 xl:py-0'>
            <div className='leading-12 bg-opacity-70  bg-[rgb(22,29,57)]'>
              <h3 className='text-center text-2xl md:text-5xl font-bold text-opacity-100 p-10 xl:py-20
              text-white   '>Compliance</h3>
              <p className='p-4 md:px-10 md:py-6 xl:px-20 leading-12'>
                Com o Advento da Lei 12.846/13 (Lei anticorrupção Brasileira ou
                a Lei do Compliance), surgiu a importância, necessidade e
                OBRIGATORIEDADE do Setor Privado e Público de adequarem a sua
                Governança Corporativa aos requisitos atuais de Princípios
                Éticos, Transparência e Integridade, independentemente do tipo
                societário eleito pelos sócios (embora as microempresas limitadas
                ou simples tenham menos obrigatoriedades).
              </p>
              <p className='p-4 md:px-10 md:py-6 xl:px-20 leading-12'>
                Implementar, desenvolver e fazer a manutenção de um Programa de
                Compliance e Integridade, estruturado a partir da legislação e
                regulamentação é o desafio empresarial.
              </p>
              <p className='p-4 md:px-10 md:py-6 xl:px-20 leading-12'>
                Nosso enfoque é atender as empresas desde a implantação até a
                gestão e manutenção dos terceiros mitigando os riscos empresariais.
              </p>
              <h3 className='text-center text-2xl md:text-5xl p-10 xl:py-20'>Compliance Startup</h3>
              <p className='p-4 md:px-10 md:py-6 xl:px-20 leading-12'>
                Apresentar para startups a importância do compliance por meio
                de um panorama geral, contendo as regulações nacionais e
                internacionais e o impacto das mesmas em suas atividades e práticas
                diárias,bem como a obrigatoriedade de um programa de integridade
                efetivo que os façam ter vantagem competitiva frente a outros
                concorrentes.
              </p>
            </div>
          </div>
        </div >
      </div>

      <div className='p-10 xl:p-20 justify-center'>
        <h2 className='py-10 font-black text-3xl md:text-5xl'> Compliance Trabalhista</h2>
        <p className='p-2'> Compliance trabalhista tem por objetivo se
          aprofundar nos temas específicos de compliance sob a ótica das Gestão
          interna e terceiros, Relações e contratos trabalhista e Relações
          Sindicais.</p>
        <div className="" >
          <h3 className='p-2 font-semibold text-2xl'> Principais tópicos abordados:</h3>
          <ul class="list-disc pl-4">
            <li class="mb-2 ">Mapear os riscos da gestão interna e terceiros;
              relações Trabalhistas e sindicais.</li>
            <li class="mb-2">Tratar o Assédio Moral, Assédio sexual e Assédio
              Organizacional.</li>
            <li class="mb-2">Tratar Diversidade de Gênero.</li>
            <li class="mb-2">Detalhar a nova legislação trabalhista brasileira
              com olhar do Compliance – Terceirização.</li>
            <li class="mb-2">Aprofundar os conhecimentos do Compliance em RH,
              Gestão de pessoas.</li>
            <li class="mb-2">Preparar os profissionais que estão atuando em
              empresa a frente das áreas de RH, Trabalhista, Sindical para a
              gestão de Compliance visando atuação preventiva.</li>
            <li class="mb-2">Ampliar a visão do mercado com ferramentas de
              atuação direta em RH e Relações de trabalho e sindical.</li>
            <li>Fazer a diferença no mercado jurídico entregando profissionais</li>
          </ul>

          <h2 className='py-10 font-black text-5xl'> Compliance Digital</h2>
          <p className='p-2'>Compliance digital tem como objetivo desenvolver competências práticas para atuação em diversas situações de governança corporativa, no cumprimento de normas e leis DE PROTEÇÃO DE DADOS:</p>
          <h3 className='p-2 font-semibold text-2xl'> Principais tópicos abordados:</h3>
          <ul class="list-disc pl-4">
            <li class="mb-2">Contexto mundial da tecnologia e inovação e as regulamentações derivadas disso, com foco no direito digital, segurança da informação e compliance.</li>
            <li class="mb-2">Propiciar aptidão razoável da integração do direito digital com a segurança da informação e compliance.</li>
            <li class="mb-2">Estudar os pilares de programas de compliance como ponto fundamental para a estruturação de um programa específico.</li>
            <li class="mb-2">Propiciar aptidão para a estruturação de comitê de compliance digital e resposta a incidentes e gestão de crise.</li>
            <li class="mb-2">Propiciar o entendimento do papel e responsabilidades do DPO, do encarregado e do compliance officer.</li>
            <li class="mb-2">Propiciar a aptidão para a elaboração de Código de Conduta, Política de Privacidade, Termos de Uso de aplicação e plano de resposta a incidente.</li>
            <li class="mb-2">Propiciar aptidão para estabelecer e cumprir política de atualização de sistemas, softwares, hardwares e demais insumos relativos à T.I.</li>
            <li>Propiciar a aptidão para mitigar os riscos do negócio e de reputação com a implantação concreta de um programa de compliance específico digital.</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Experience;
