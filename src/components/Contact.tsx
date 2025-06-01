import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setFormStatus({
        isSubmitting: true,
        isSuccess: false,
        isError: false,
        message: 'Enviando mensagem...'
      });
      
      // Enviar para o webhook do Discord
      const webhookUrl = 'https://discordapp.com/api/webhooks/1164042622185254972/jEPajNP-EC2MaUtLvrhrjDsROcFObuBi6H9vAvWu4aySoBZaMXELCyS_bF75QLv0Qry1';
      
      const message = {
        content: "Novo contato do site ISTECH:",
        embeds: [{
          title: "Detalhes do Contato",
          color: 3447003, // Azul
          fields: [
            {
              name: "Nome",
              value: formData.name,
              inline: true
            },
            {
              name: "Email",
              value: formData.email,
              inline: true
            },
            {
              name: "Telefone",
              value: formData.phone || "Não informado",
              inline: true
            },
            {
              name: "Mensagem",
              value: formData.message
            }
          ],
          timestamp: new Date().toISOString()
        }]
      };
      
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message)
      });
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          isSuccess: false,
          message: ''
        }));
      }, 5000);
      
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp.'
      });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5548988802642?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20ISTECH', '_blank');
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar sua empresa com nossas soluções tecnológicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg relative">
            <h3 className="text-2xl font-semibold text-blue-800 mb-6">Envie-nos uma mensagem</h3>
            
            {formStatus.isSuccess && (
              <div className="mb-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded animate-fadeIn">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <p className="font-medium">{formStatus.message}</p>
                </div>
              </div>
            )}
            
            {formStatus.isError && (
              <div className="mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <p className="font-medium">{formStatus.message}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={formStatus.isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={formStatus.isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={formStatus.isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  disabled={formStatus.isSubmitting}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 flex justify-center items-center ${formStatus.isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    ENVIANDO...
                  </>
                ) : 'ENVIAR MENSAGEM'}
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaPhone className="text-blue-700 mt-1 mr-4 text-xl" />
                  <div>
                    <h4 className="font-medium text-gray-900">Telefone</h4>
                    <p className="text-gray-700">(48) 98880-2642</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-700 mt-1 mr-4 text-xl" />
                  <div>
                    <h4 className="font-medium text-gray-900">E-mail</h4>
                    <p className="text-gray-700">contato@istech.com.br</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-700 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4">Atendimento imediato?</h3>
              <p className="mb-6">
                Converse agora mesmo com um de nossos consultores e receba uma proposta personalizada para sua empresa.
              </p>
              <button
                onClick={openWhatsApp}
                className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                <FaWhatsapp className="mr-2 text-2xl" />
                FALAR NO WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
