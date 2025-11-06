import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Languages, Headphones, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getStoryById, getLevelColor, stories } from '../data/stories';

const Story = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [showTranslation, setShowTranslation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const story = getStoryById(id);

  if (!story) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {t('Historia no encontrada', 'Story not found')}
          </h2>
          <Link to="/levels" className="text-teal-600 hover:underline">
            {t('Volver a niveles', 'Back to levels')}
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = stories.findIndex(s => s.id === story.id);
  const previousStory = currentIndex > 0 ? stories[currentIndex - 1] : null;
  const nextStory = currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const primaryText = language === 'es' ? story.text_es : story.text_en;
  const secondaryText = language === 'es' ? story.text_en : story.text_es;

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(`/level/${story.level}`)}
          className="flex items-center space-x-2 text-slate-600 hover:text-teal-600 transition mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">
            {t(`Volver a ${story.level}`, `Back to ${story.level}`)}
          </span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className={`inline-block px-4 py-2 rounded-lg ${getLevelColor(story.level)} mb-4`}>
                  <span className="font-bold text-lg">{story.level}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                  {language === 'es' ? story.title_es : story.title_en}
                </h1>
                <p className="text-xl text-slate-500">
                  {language === 'es' ? story.title_en : story.title_es}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-slate-700">
                  <Headphones className="w-5 h-5" />
                  <span className="font-medium">{t('Audio', 'Audio')}</span>
                </div>
                <button
                  onClick={togglePlay}
                  className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-5 h-5" />
                      <span>{t('Pausar', 'Pause')}</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5" />
                      <span>{t('Reproducir', 'Play')}</span>
                    </>
                  )}
                </button>
              </div>
              <div className="text-sm text-slate-500">
                {t(
                  'Audio de ejemplo no disponible. En una versión completa, aquí estarían los controles del reproductor de audio.',
                  'Sample audio not available. In a full version, the audio player controls would be here.'
                )}
              </div>
            </div>

            <div className="mb-6">
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition font-medium"
              >
                <Languages className="w-5 h-5" />
                <span>
                  {showTranslation
                    ? t('Ocultar traducción', 'Hide translation')
                    : t('Mostrar traducción', 'Show translation')}
                </span>
              </button>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6 md:p-8 mb-6">
                <p className="text-lg md:text-xl leading-relaxed text-slate-800 font-serif">
                  {primaryText}
                </p>
              </div>

              {showTranslation && (
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 md:p-8 border-2 border-slate-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Languages className="w-5 h-5 text-slate-600" />
                    <span className="font-semibold text-slate-700">
                      {t('Traducción al inglés', 'Spanish translation')}
                    </span>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed text-slate-700 font-serif italic">
                    {secondaryText}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-50 p-6 border-t border-slate-200">
            <div className="flex items-center justify-between">
              {previousStory ? (
                <Link
                  to={`/story/${previousStory.id}`}
                  className="flex items-center space-x-2 px-4 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-100 transition border border-slate-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-xs text-slate-500">
                      {t('Anterior', 'Previous')}
                    </div>
                    <div className="font-medium">
                      {language === 'es' ? previousStory.title_es : previousStory.title_en}
                    </div>
                  </div>
                </Link>
              ) : (
                <div></div>
              )}

              {nextStory ? (
                <Link
                  to={`/story/${nextStory.id}`}
                  className="flex items-center space-x-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                >
                  <div className="text-right">
                    <div className="text-xs text-teal-100">
                      {t('Siguiente', 'Next')}
                    </div>
                    <div className="font-medium">
                      {language === 'es' ? nextStory.title_es : nextStory.title_en}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
