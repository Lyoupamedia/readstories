import { Link } from 'react-router-dom';
import { BookOpen, Headphones, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
            {t('Aprende con historias bilingües', 'Learn with Bilingual Stories')}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              'Mejora tu español o inglés con cuentos fáciles y audio',
              'Improve your Spanish or English with easy stories and audio'
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              to="/levels"
              className="px-8 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('Leer historias', 'Read Stories')}
            </Link>
            <Link
              to="/levels"
              className="px-8 py-4 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('Escuchar audio', 'Listen to Audio')}
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {t('Historias auténticas', 'Authentic Stories')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'Lee textos interesantes adaptados a tu nivel',
                'Read interesting texts adapted to your level'
              )}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {t('Audio nativo', 'Native Audio')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'Escucha pronunciación clara de hablantes nativos',
                'Listen to clear pronunciation from native speakers'
              )}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {t('Niveles CEFR', 'CEFR Levels')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'Desde principiante (A1) hasta avanzado (C2)',
                'From beginner (A1) to advanced (C2)'
              )}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              {t('Traducción incluida', 'Translation Included')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'Compara textos en español e inglés fácilmente',
                'Easily compare texts in Spanish and English'
              )}
            </p>
          </div>
        </div>

        <div className="mt-20 bg-teal-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            {t('¿Por qué leer historias bilingües?', 'Why Read Bilingual Stories?')}
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-8">
            {t(
              'Las historias son la forma más natural de aprender un idioma. Te sumerges en contextos reales, aprendes vocabulario en uso, y desarrollas tu comprensión auditiva y lectora de manera divertida y efectiva.',
              'Stories are the most natural way to learn a language. You immerse yourself in real contexts, learn vocabulary in use, and develop your listening and reading comprehension in a fun and effective way.'
            )}
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-semibold"
          >
            {t('Aprende más', 'Learn More')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
