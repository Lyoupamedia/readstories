import { Link } from 'react-router-dom';
import { BookOpen, Headphones } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { stories, getLevelColor, getLevelDescription } from '../data/stories';

const Levels = () => {
  const { language, t } = useLanguage();

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  const getStoriesCountByLevel = (level) => {
    return stories.filter(story => story.level === level).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            {t('Elige tu nivel', 'Choose Your Level')}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t(
              'Selecciona el nivel que mejor se adapte a tu conocimiento del idioma',
              'Select the level that best fits your language knowledge'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map(level => {
            const storyCount = getStoriesCountByLevel(level);
            return (
              <Link
                key={level}
                to={`/level/${level}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-teal-500"
              >
                <div className={`p-6 ${getLevelColor(level)} border-b-4`}>
                  <h2 className="text-3xl font-bold mb-2">{level}</h2>
                  <p className="font-medium">
                    {getLevelDescription(level, language)}
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-slate-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-5 h-5" />
                      <span className="font-medium">
                        {storyCount} {t('historias', 'stories')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Headphones className="w-5 h-5" />
                      <span className="font-medium">{t('Audio', 'Audio')}</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-semibold">
                    {t('Ver historias', 'View Stories')}
                  </button>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 bg-slate-50 rounded-xl p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            {t('Guía de Niveles CEFR', 'CEFR Level Guide')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-emerald-700 mb-2">A1 - {t('Principiante', 'Beginner')}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(
                    'Puedes entender y usar expresiones cotidianas muy básicas.',
                    'You can understand and use very basic everyday expressions.'
                  )}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-blue-700 mb-2">A2 - {t('Elemental', 'Elementary')}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(
                    'Puedes comunicarte en situaciones simples y rutinarias.',
                    'You can communicate in simple and routine situations.'
                  )}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-amber-700 mb-2">B1 - {t('Intermedio', 'Intermediate')}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(
                    'Puedes entender textos sobre temas familiares y de interés personal.',
                    'You can understand texts on familiar topics and personal interests.'
                  )}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-orange-700 mb-2">B2 - {t('Intermedio Alto', 'Upper Intermediate')}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(
                    'Puedes entender textos complejos sobre temas concretos y abstractos.',
                    'You can understand complex texts on concrete and abstract topics.'
                  )}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-rose-700 mb-2">C1 - {t('Avanzado', 'Advanced')}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(
                    'Puedes comprender textos largos y exigentes con significado implícito.',
                    'You can understand long and demanding texts with implicit meaning.'
                  )}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-slate-700 mb-2">C2 - {t('Maestría', 'Mastery')}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {t(
                    'Puedes comprender prácticamente todo lo que lees o escuchas con facilidad.',
                    'You can understand virtually everything you read or hear with ease.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Levels;
