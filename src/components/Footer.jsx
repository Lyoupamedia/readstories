import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <footer className="bg-slate-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-slate-300">
              © 2024 {t('Historias Bilingües', 'Bilingual Stories')}
            </p>
            <p className="text-sm text-slate-400 mt-1">
              {t(
                'Aprende idiomas con historias auténticas',
                'Learn languages with authentic stories'
              )}
            </p>
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium"
          >
            <Languages className="w-4 h-4" />
            <span className="text-sm">
              {language === 'es' ? 'Cambiar a English' : 'Switch to Español'}
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
