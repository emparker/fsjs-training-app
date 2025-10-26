import { useState, useEffect } from 'react';

const motivationalQuotes = [
  "Code is like humor. When you have to explain it, it's bad. – Cory House",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "The best way to learn is to teach. – Frank Oppenheimer",
  "Every expert was once a beginner. Keep going! 💪"
];

const getRandomQuote = () => {
  return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
};

export default function WelcomeScreen({ stats, startTraining, currentMode }) {
  // Show shake animation when user selects a mode (not default 'random')
  const shouldShake = currentMode !== 'random';

  // Only set quote once on mount
  const [quote] = useState(() => getRandomQuote());

  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className="text-center max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">
          Good morning, Emily!
        </h2>

        {stats.currentStreak > 1 && (
          <div className="mb-6 text-2xl animate-success">
            You&apos;re on a {stats.currentStreak}-day streak! 🔥
          </div>
        )}

        <div className="mb-8 text-lg opacity-80">
          <p className="mb-4">Total days visited: {stats.totalDaysVisited}</p>
          <p className="italic">&quot;{quote}&quot;</p>
        </div>

        <button
          onClick={startTraining}
          className={`px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold text-xl rounded-xl hover:scale-105 transform transition-all shadow-xl ${
            shouldShake ? 'animate-shake-pulse' : ''
          }`}
        >
          Start Training →
        </button>
      </div>
    </div>
  );
}
