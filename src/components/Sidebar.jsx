export default function Sidebar({ sidebarOpen, currentMode, setCurrentMode, stats, selectNewQuestion, currentScreen }) {
  const accuracy = stats.totalQuestionsAnswered > 0
    ? Math.round((stats.correctAnswers / stats.totalQuestionsAnswered) * 100)
    : 0;

  const modes = ['random', 'advanced', 'mostimportant', 'easy', 'reviewlater'];
  const modeLabels = {
    random: 'Random',
    advanced: 'Advanced',
    mostimportant: 'Most Important',
    easy: 'Easy',
    reviewlater: 'Review Later'
  };

  return (
    <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-hidden`}>
      <div className="p-4 space-y-6">
        {/* Mode Selector */}
        <div>
          <h3 className="font-semibold mb-3 text-teal-400">Training Modes</h3>
          <div className="space-y-2">
            {modes.map((mode) => (
              <button
                key={mode}
                onClick={() => {
                  setCurrentMode(mode);
                  // Only fetch new question if already on training screen
                  if (currentScreen === 'training') {
                    selectNewQuestion();
                  }
                }}
                className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                  currentMode === mode
                    ? 'bg-teal-500 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {modeLabels[mode]}
                {mode === 'reviewlater' && stats.reviewLater.length > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {stats.reviewLater.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div>
          <h3 className="font-semibold mb-3 text-teal-400">Your Stats</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Total Days:</span>
              <span className="font-bold">{stats.totalDaysVisited}</span>
            </div>
            <div className="flex justify-between">
              <span>Current Streak:</span>
              <span className="font-bold streak-fire">
                {stats.currentStreak} 🔥
              </span>
            </div>
            <div className="flex justify-between">
              <span>Today:</span>
              <span className="font-bold">{stats.questionsAnsweredToday}</span>
            </div>
            <div className="flex justify-between">
              <span>Accuracy:</span>
              <span className="font-bold">{accuracy}%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
