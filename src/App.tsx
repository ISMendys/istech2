import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partnership from './components/Partnership';
import Innovation from './components/Innovation';
import Contact from './components/Contact';
import { Routes, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicyBJJ';
import TermsOfService from './pages/TermsOfServiceBJJ';
import PrivacyPolicyDangerProducts from './pages/PrivacyPolicyDangerousGoods';
import TermsOfServiceDangerProducts from './pages/TermsOfServiceDangerProducts';

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Partnership />
    <Innovation />
    <Contact />
  </>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* O conteúdo principal agora é gerenciado pelas rotas */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos-de-uso" element={<TermsOfService />} />
          <Route path="/politica-de-privacidade-produtos-perigosos" element={<PrivacyPolicyDangerProducts />} />
          <Route path="/termos-de-uso-produtos-perigosos" element={<TermsOfServiceDangerProducts />} />
        </Routes>
      </main>
      
      {/* Footer (agora com o Link correto) */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} ISTECH. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4">
              {/* TROQUE <a> por <Link> */}
              <Link to="/politica-de-privacidade" className="hover:text-blue-300 transition-colors">Política de Privacidade BJJE</Link>
              <Link to="/termos-de-uso" className="hover:text-blue-300 transition-colors">Termos de Uso BJJE</Link>
              <Link to="/politica-de-privacidade-produtos-perigosos" className="hover:text-blue-300 transition-colors">Política de Privacidade Produtos Perigosos</Link>
              <Link to="/termos-de-uso-produtos-perigosos" className="hover:text-blue-300 transition-colors">Termos de Uso Produtos Perigosos</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Floating Button - Material UI Style */}
      <a 
        href="https://wa.me/554888371549?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20ISTECH"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
        style={{ 
          width: '60px', 
          height: '60px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
        }}
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="28" 
          height="28" 
          fill="currentColor" 
          viewBox="0 0 16 16"
        >
          <path 
            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" 
          />
        </svg>
      </a>
    </div>
  );
}

export default App;
