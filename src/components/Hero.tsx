// Hero.tsx
import heroBg from '../assets/images/hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-blue-900/80"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Soluções Tecnológicas para seu Negócio
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Desenvolvimento de software, consultoria e suporte técnico para impulsionar sua empresa
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="#servicos" 
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl"
          >
            <span className="relative z-10 font-bold text-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              CONHEÇA NOSSOS SERVIÇOS
            </span>
            <div className="absolute inset-0 -translate-y-full bg-gradient-to-r from-blue-500 to-blue-700 transition-transform duration-300 group-hover:translate-y-0"></div>
          </a>
          
          <a 
            href="#contato" 
            className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-green-500 to-green-700 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-green-500/25 hover:shadow-xl"
          >
            <span className="relative z-10 font-bold text-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              FALE CONOSCO AGORA
            </span>
            <div className="absolute inset-0 -translate-y-full bg-gradient-to-r from-green-400 to-green-600 transition-transform duration-300 group-hover:translate-y-0"></div>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#servicos" className="text-white">
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
