// Services.tsx

const Services = () => {
  return (
    <section id="servicos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções completas para transformar sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-blue-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Desenvolvimento de Software
            </h3>
            <p className="text-gray-700 mb-4">
              Aplicativos web e mobile personalizados para otimizar processos e melhorar a experiência dos seus clientes.
            </p>
            <a href="#contato" className="inline-block text-blue-700 font-semibold hover:text-blue-900">
              Solicitar orçamento →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-blue-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Consultoria em TI
            </h3>
            <p className="text-gray-700 mb-4">
              Estratégias digitais e soluções tecnológicas para aumentar a produtividade e reduzir custos operacionais.
            </p>
            <a href="#contato" className="inline-block text-blue-700 font-semibold hover:text-blue-900">
              Agendar consultoria →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-blue-700 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Suporte Técnico
            </h3>
            <p className="text-gray-700 mb-4">
              Assistência rápida e eficiente para resolver problemas técnicos e garantir o funcionamento contínuo dos seus sistemas.
            </p>
            <a href="#contato" className="inline-block text-blue-700 font-semibold hover:text-blue-900">
              Contratar suporte →
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contato" 
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 inline-block"
          >
            SOLICITE UMA PROPOSTA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
