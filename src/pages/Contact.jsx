import { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {t('Contáctanos', 'Contact Us')}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t(
              '¿Tienes preguntas, sugerencias o comentarios? Nos encantaría saber de ti',
              'Do you have questions, suggestions, or comments? We would love to hear from you'
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 md:p-10 text-white">
              <h2 className="text-2xl font-bold mb-6">
                {t('Información de contacto', 'Contact Information')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t('Correo electrónico', 'Email')}
                    </h3>
                    <p className="text-teal-100">contacto@historiasbilingues.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageSquare className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      {t('Redes sociales', 'Social Media')}
                    </h3>
                    <p className="text-teal-100">
                      {t(
                        'Síguenos para actualizaciones y nuevo contenido',
                        'Follow us for updates and new content'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-teal-800 bg-opacity-50 rounded-xl">
                <p className="text-sm leading-relaxed">
                  {t(
                    'Respondemos a todos los mensajes dentro de 24-48 horas. Tu opinión es muy importante para nosotros y nos ayuda a mejorar continuamente.',
                    'We respond to all messages within 24-48 hours. Your feedback is very important to us and helps us improve continuously.'
                  )}
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {t('¡Mensaje enviado!', 'Message sent!')}
                  </h3>
                  <p className="text-slate-600">
                    {t(
                      'Gracias por contactarnos. Te responderemos pronto.',
                      'Thank you for contacting us. We will respond soon.'
                    )}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      {t('Nombre', 'Name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                      placeholder={t('Tu nombre', 'Your name')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      {t('Correo electrónico', 'Email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                      placeholder={t('tu@email.com', 'your@email.com')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      {t('Mensaje', 'Message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"
                      placeholder={t('Escribe tu mensaje aquí...', 'Write your message here...')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t('Enviar mensaje', 'Send message')}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
