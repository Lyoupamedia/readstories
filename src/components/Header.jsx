import { Link } from 'react-router-dom';
import { BookOpen, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <BookOpen className="w-8 h-8 text-teal-600" />
            <span className="text-xl font-bold text-slate-800">
              {t('Historias Bilingües', 'Bilingual Stories')}
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-slate-700 hover:text-teal-600 font-medium transition"
            >
              {t('Inicio', 'Home')}
            </Link>
            <Link
              to="/levels"
              className="text-slate-700 hover:text-teal-600 font-medium transition"
            >
              {t('Niveles', 'Levels')}
            </Link>
            <Link
              to="/about"
              className="text-slate-700 hover:text-teal-600 font-medium transition"
            >
              {t('Acerca de', 'About')}
            </Link>
            <Link
              to="/contact"
              className="text-slate-700 hover:text-teal-600 font-medium transition"
            >
              {t('Contacto', 'Contact')}
            </Link>
          </nav>

          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium"
          >
            <Languages className="w-5 h-5" />
            <span>{language === 'es' ? '🇪🇸 Español' : '🇬🇧 English'}</span>
          </button>
        </div>

        <nav className="md:hidden flex items-center space-x-6 pb-3 overflow-x-auto">
          <Link
            to="/"
            className="text-slate-700 hover:text-teal-600 font-medium transition whitespace-nowrap"
          >
            {t('Inicio', 'Home')}
          </Link>
          <Link
            to="/levels"
            className="text-slate-700 hover:text-teal-600 font-medium transition whitespace-nowrap"
          >
            {t('Niveles', 'Levels')}
          </Link>
          <Link
            to="/about"
            className="text-slate-700 hover:text-teal-600 font-medium transition whitespace-nowrap"
          >
            {t('Acerca de', 'About')}
          </Link>
          <Link
            to="/contact"
            className="text-slate-700 hover:text-teal-600 font-medium transition whitespace-nowrap"
          >
            {t('Contacto', 'Contact')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
