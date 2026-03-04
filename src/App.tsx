import { useState } from 'react';
import { useGameStore } from './store/gameStore';
import { LanguageProvider } from './i18n/LanguageContext';
import ComputerFrame from './components/ComputerFrame';
import MainMenu from './components/MainMenu';
import TutorialSkip from './components/TutorialSkip';
import SettlementModal from './components/SettlementModal';
import Header from './components/Header';
import EventCard from './components/EventCard';
import TradePanel from './components/TradePanel';
import GameOver from './components/GameOver';
import PhaseTransition from './components/PhaseTransition';

function GameContent() {
  const { startGame, isGameOver, stage, skipTutorial, settlementInfo, closeSettlement, showingPhaseTransition, dismissPhaseTransition } = useGameStore();
  const [showMenu, setShowMenu] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const handleNewGame = () => {
    startGame();
    setShowMenu(false);
  };

  const handleContinue = () => {
    console.log('Continue game - not implemented yet');
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSkipTutorial = () => {
    skipTutorial();
  };

  // 显示主菜单
  if (showMenu) {
    return (
      <MainMenu
        onNewGame={handleNewGame}
        onContinue={handleContinue}
        onToggleMute={handleToggleMute}
        isMuted={isMuted}
      />
    );
  }

  // Phase transition screen
  if (showingPhaseTransition) {
    return <PhaseTransition onDismiss={dismissPhaseTransition} />;
  }

  // 游戏结束
  if (isGameOver) {
    return (
      <ComputerFrame>
        <GameOver onBackToMenu={() => setShowMenu(true)} />
      </ComputerFrame>
    );
  }

  // 游戏进行中
  return (
    <ComputerFrame>
      <div className="p-4 pb-safe">
        <div className="max-w-2xl mx-auto space-y-4">
          <Header />
          <EventCard />
          <TradePanel />
        </div>
      </div>
      
      {/* 教程阶段显示跳过按钮 */}
      {stage === 'tutorial' && (
        <TutorialSkip onSkip={handleSkipTutorial} />
      )}

      {/* 结算弹窗 */}
      {settlementInfo && (
        <SettlementModal
          month={settlementInfo.month}
          priceChange={settlementInfo.priceChange}
          originalPriceChange={settlementInfo.originalPriceChange}
          profitLoss={settlementInfo.profitLoss}
          newBalance={settlementInfo.newBalance}
          onClose={closeSettlement}
        />
      )}
    </ComputerFrame>
  );
}

function App() {
  return (
    <LanguageProvider>
      <GameContent />
    </LanguageProvider>
  );
}

export default App;
