// Innovation.tsx
import innovationImg from '../assets/images/innovation-img.jpg';

const Innovation = () => {
  return (
    <section id="inovacao" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Inovação Tecnológica
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções de ponta para manter sua empresa à frente da concorrência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img 
              src={innovationImg} 
              alt="Inovação na ISTECH" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Pesquisa e Desenvolvimento
              </h3>
              <p className="text-gray-700">
                Investimos constantemente em novas tecnologias para oferecer soluções inovadoras que impulsionam o crescimento do seu negócio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-bold text-blue-800 mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Eventos e Colaborações
              </h3>
              <p className="text-gray-700">
                Participamos ativamente de eventos como a STUM, compartilhando conhecimento e colaborando com líderes do setor tecnológico.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="#contato" 
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                INOVE COM A ISTECH
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
