import { useLanguage } from '../i18n/LanguageContext';

interface PhaseTransitionProps {
  onDismiss: () => void;
}

export default function PhaseTransition({ onDismiss }: PhaseTransitionProps) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center space-y-6 animate-pulse">
        {/* T-tool Logo */}
        <div className="flex justify-center">
          <img
            src="/t-tool-logo.jpg"
            alt="T-tool"
            className="h-24 w-24 border-4 border-primary"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        {/* Phase 2 Text */}
        <div className="space-y-2">
          <div className="text-primary text-2xl font-bold tracking-wider">
            PHASE 2
          </div>
          <div className="text-gray-400 text-sm">
            {t('phase2Subtitle')}
          </div>
        </div>

        {/* Enter Button */}
        <button
          onClick={onDismiss}
          className="mt-8 px-8 py-3 bg-primary text-black border-4 border-primary hover:bg-yellow-300 text-sm font-bold tracking-wider"
        >
          {t('enterPhase2')}
        </button>
      </div>
    </div>
  );
}
