// Partnership.tsx
import partnershipImg from '../assets/images/partnership-img.jpg';

const Partnership = () => {
  return (
    <section id="parceria" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Parceria com a MK+ Academy
            </h2>
            
            <p className="text-gray-700 mb-6">
              Somos o parceiro tecnológico oficial da MK+ Academy, fornecendo soluções digitais que transformam a experiência educacional.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">Plataformas de aprendizado online</p>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">Sistemas integrados de gestão educacional</p>
            </div>
            
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-700">Ferramentas de colaboração digital</p>
            </div>
            
            <a 
              href="#contato" 
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              SEJA NOSSO PARCEIRO
            </a>
          </div>
          
          <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img 
              src={partnershipImg} 
              alt="Parceria ISTECH e MK+ Academy" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
