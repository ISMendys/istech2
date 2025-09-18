import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 mt-20 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Termos de Uso do Produtos Perigosos</h1>
      <p className="mb-8 text-sm text-gray-500">Última atualização: 18 de setembro de 2025</p>

      <div className="space-y-8">
        {/* Introdução */}
        <section>
          <p className="mb-4">
            Bem-vindo ao Produtos Perigosos! Estes Termos de Uso ("Termos") regem o uso do aplicativo móvel Produtos Perigosos ("Aplicativo"), desenvolvido para auxiliar motoristas, equipes de emergência e profissionais no transporte de cargas perigosas, fornecendo informações sobre rótulos, painéis de segurança, classes de risco, números de risco, infrações e contatos de emergência. Ao acessar ou usar o Aplicativo, Você concorda em cumprir e estar vinculado a estes Termos. Se Você não concordar com qualquer parte destes Termos, não use o Aplicativo.
          </p>
        </section>

        {/* 1. Aceitação dos Termos */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Aceitação dos Termos</h2>
          <p className="mb-4">
            Ao instalar, acessar ou usar o Aplicativo, Você confirma que leu, entendeu e concorda em estar vinculado a estes Termos, bem como à nossa Política de Privacidade. Estes Termos constituem um acordo legal entre Você e o Produtos Perigosos.
          </p>
        </section>

        {/* 2. Elegibilidade */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Elegibilidade</h2>
          <p className="mb-4">
            Você deve ter pelo menos 13 anos de idade para usar o Aplicativo. Se Você for menor de 18 anos, deve ter a permissão de seus pais ou responsável legal para usar o Aplicativo e concordar com estes Termos.
          </p>
        </section>

        {/* 3. Sua Conta */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Sua Conta</h2>
          <p className="mb-4">
            Para acessar certas funcionalidades do Aplicativo, Você pode precisar criar uma conta. Você é responsável por manter a confidencialidade de suas informações de conta e por todas as atividades que ocorrem sob sua conta. Você concorda em nos notificar imediatamente sobre qualquer uso não autorizado de sua conta.
          </p>
        </section>

        {/* 4. Uso do Aplicativo */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Uso do Aplicativo</h2>
          <p className="mb-3">
            O Produtos Perigosos é fornecido para seu uso pessoal e profissional, relacionado ao transporte seguro de cargas perigosas. Você concorda em não:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
            <li>Usar o Aplicativo para qualquer finalidade ilegal ou não autorizada.</li>
            <li>Interferir ou interromper a integridade ou o desempenho do Aplicativo.</li>
            <li>Tentar obter acesso não autorizado a qualquer parte do Aplicativo ou seus sistemas ou redes relacionadas.</li>
            <li>Copiar, modificar, distribuir, vender ou alugar qualquer parte do Aplicativo ou seu conteúdo, incluindo informações sobre produtos perigosos, classes de risco ou números de emergência.</li>
          </ul>
        </section>

        {/* 5. Conteúdo do Usuário */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Conteúdo do Usuário</h2>
          <p className="mb-4">
            Você é o único responsável por qualquer conteúdo que Você enviar, postar ou exibir no Aplicativo, incluindo, mas não se limitando a, sugestões enviadas por meio da seção "Sobre" ou outras interações. Você concede ao Produtos Perigosos uma licença mundial, não exclusiva, isenta de royalties, sublicenciável e transferível para usar, reproduzir, distribuir, preparar trabalhos derivados e exibir o conteúdo do usuário em conexão com o Aplicativo e os negócios do Produtos Perigosos.
          </p>
        </section>

        {/* 6. Propriedade Intelectual */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">6. Propriedade Intelectual</h2>
          <p className="mb-4">
            Todo o conteúdo, recursos e funcionalidades do Aplicativo (incluindo, mas não se limitando a, software, texto, gráficos, logotipos, ícones, imagens, informações sobre produtos perigosos, classes de risco, números de risco e sua seleção e arranjo) são de propriedade do Produtos Perigosos ou de seus licenciadores e são protegidos por leis de direitos autorais, marcas registradas e outras leis de propriedade intelectual.
          </p>
        </section>

        {/* 7. Isenção de Garantias */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Isenção de Garantias</h2>
          <p className="mb-4">
            O Aplicativo é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo, expressas ou implícitas. O Produtos Perigosos não garante que o Aplicativo será ininterrupto, livre de erros ou seguro, nem que as informações fornecidas, como números de emergência ou dados sobre produtos perigosos, estarão sempre atualizadas ou completas, embora nos esforcemos para manter a precisão e conformidade com as normas vigentes.
          </p>
        </section>

        {/* 8. Limitação de Responsabilidade */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Limitação de Responsabilidade</h2>
          <p className="mb-4">
            Em nenhuma circunstância o Produtos Perigosos será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, mas não se limitando a, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes de:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
            <li>seu acesso ou uso ou incapacidade de acessar ou usar o Aplicativo;</li>
            <li>qualquer conduta ou conteúdo de terceiros no Aplicativo;</li>
            <li>qualquer conteúdo obtido do Aplicativo, incluindo informações sobre produtos perigosos ou números de emergência;</li>
            <li>acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo, seja com base em garantia, contrato, delito (incluindo negligência) ou qualquer outra teoria legal, quer tenhamos sido informados ou não da possibilidade de tais danos.</li>
          </ul>
        </section>

        {/* 9. Indenização */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Indenização</h2>
          <p className="mb-4">
            Você concorda em defender, indenizar e isentar o Produtos Perigosos e seus licenciadores e seus respectivos funcionários, contratados, agentes, diretores e executivos de e contra todas e quaisquer reivindicações, danos, obrigações, perdas, responsabilidades, custos ou dívidas e despesas (incluindo, mas não se limitando a, honorários advocatícios), resultantes de:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
            <li>seu uso e acesso ao Aplicativo, por Você ou qualquer pessoa usando sua conta e senha;</li>
            <li>uma violação destes Termos; ou</li>
            <li>sua violação de quaisquer direitos de terceiros, incluindo, sem limitação, qualquer direito autoral, propriedade ou direito de privacidade.</li>
          </ul>
        </section>

        {/* 10. Lei Aplicável e Jurisdição */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Lei Aplicável e Jurisdição</h2>
          <p className="mb-4">
            Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, sem considerar seus conflitos de disposições legais. Qualquer disputa decorrente ou relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais localizados no Brasil.
          </p>
        </section>

        {/* 11. Alterações nos Termos */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">11. Alterações nos Termos</h2>
          <p className="mb-4">
            Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento, a nosso exclusivo critério. Se uma revisão for material, faremos esforços razoáveis para fornecer um aviso de pelo menos 30 dias antes que quaisquer novos termos entrem em vigor. O que constitui uma alteração material será determinado a nosso exclusivo critério.
          </p>
          <p className="mb-4">
            Ao continuar a acessar ou usar Nosso Aplicativo após essas revisões entrarem em vigor, Você concorda em ficar vinculado aos termos revisados. Se Você não concordar com os novos termos, no todo ou em parte, pare de usar o Aplicativo.
          </p>
        </section>

        {/* 12. Contato */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">12. Contato</h2>
          <p className="mb-3">
            Se Você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Por e-mail: suporte@produtosperigosos.com</li>
            <li>Por telefone: +55 11 9999-9999</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;