import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Headphones, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getStoriesByLevel, getLevelColor, getLevelDescription } from '../data/stories';

const LevelStories = () => {
  const { level } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  const stories = getStoriesByLevel(level);

  if (!stories || stories.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {t('No se encontraron historias', 'No stories found')}
          </h2>
          <Link to="/levels" className="text-teal-600 hover:underline">
            {t('Volver a niveles', 'Back to levels')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/levels')}
          className="flex items-center space-x-2 text-slate-600 hover:text-teal-600 transition mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">{t('Volver a niveles', 'Back to levels')}</span>
        </button>

        <div className="mb-8">
          <div className={`inline-block px-6 py-3 rounded-lg ${getLevelColor(level)} mb-4`}>
            <h1 className="text-3xl font-bold">{level}</h1>
          </div>
          <p className="text-xl text-slate-600">
            {getLevelDescription(level, language)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {stories.map(story => (
            <Link
              key={story.id}
              to={`/story/${story.id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden border-2 border-transparent hover:border-teal-500"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                      {language === 'es' ? story.title_es : story.title_en}
                    </h2>
                    <p className="text-slate-500 text-sm">
                      {language === 'es' ? story.title_en : story.title_es}
                    </p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${getLevelColor(story.level)}`}>
                    {story.level}
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {language === 'es' ? story.text_es : story.text_en}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{t('Leer', 'Read')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Headphones className="w-4 h-4" />
                      <span>{t('Escuchar', 'Listen')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>~3 min</span>
                    </div>
                  </div>
                  <span className="text-teal-600 font-semibold hover:underline">
                    {t('Leer más →', 'Read more →')}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelStories;
