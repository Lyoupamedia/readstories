import { BookOpen, Target, Heart, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {t('Acerca de Historias Bilingües', 'About Bilingual Stories')}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {t(
              'Nuestra misión es hacer el aprendizaje de idiomas accesible, divertido y efectivo para todos',
              'Our mission is to make language learning accessible, fun, and effective for everyone'
            )}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-8 h-8 text-teal-600" />
            <h2 className="text-2xl font-bold text-slate-800">
              {t('Nuestra Misión', 'Our Mission')}
            </h2>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            {t(
              'Creemos que las historias son la forma más natural y efectiva de aprender un idioma. A través de narrativas auténticas y contextos reales, los estudiantes pueden sumergirse en el idioma objetivo mientras disfrutan de contenido interesante y significativo.',
              'We believe that stories are the most natural and effective way to learn a language. Through authentic narratives and real contexts, students can immerse themselves in the target language while enjoying interesting and meaningful content.'
            )}
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            {t(
              'Nuestro objetivo es proporcionar recursos de alta calidad que ayuden a personas de todos los niveles a mejorar sus habilidades lingüísticas de manera práctica y entretenida.',
              'Our goal is to provide high-quality resources that help people of all levels improve their language skills in a practical and entertaining way.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {t('Contenido Auténtico', 'Authentic Content')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'Historias escritas por hablantes nativos que reflejan el uso real del idioma',
                'Stories written by native speakers that reflect real language use'
              )}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {t('Aprendizaje Divertido', 'Fun Learning')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'Aprende de forma natural mientras disfrutas de historias interesantes y cautivadoras',
                'Learn naturally while enjoying interesting and captivating stories'
              )}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              {t('Para Todos los Niveles', 'For All Levels')}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {t(
                'Desde principiantes absolutos hasta estudiantes avanzados, hay contenido para todos',
                'From absolute beginners to advanced students, there is content for everyone'
              )}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {t('¿Por qué funciona este método?', 'Why does this method work?')}
          </h2>
          <ul className="space-y-3 text-lg text-slate-700">
            <li className="flex items-start space-x-3">
              <span className="text-teal-600 font-bold mt-1">✓</span>
              <span>
                {t(
                  'Aprendes vocabulario en contexto, no palabras aisladas',
                  'You learn vocabulary in context, not isolated words'
                )}
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-teal-600 font-bold mt-1">✓</span>
              <span>
                {t(
                  'Desarrollas comprensión auditiva con audio de hablantes nativos',
                  'You develop listening comprehension with audio from native speakers'
                )}
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-teal-600 font-bold mt-1">✓</span>
              <span>
                {t(
                  'Mejoras tu lectura de forma natural y progresiva',
                  'You improve your reading naturally and progressively'
                )}
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-teal-600 font-bold mt-1">✓</span>
              <span>
                {t(
                  'Absorbes gramática y estructuras sin memorización forzada',
                  'You absorb grammar and structures without forced memorization'
                )}
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-teal-600 font-bold mt-1">✓</span>
              <span>
                {t(
                  'Te mantienes motivado con contenido interesante y relevante',
                  'You stay motivated with interesting and relevant content'
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
