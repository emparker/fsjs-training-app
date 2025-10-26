import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import WelcomeScreen from './components/WelcomeScreen';
import TrainingScreen from './components/TrainingScreen';
import { questionBank } from './data/questionBank';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [currentMode, setCurrentMode] = useState('random');
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false); 
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  
  const [stats, setStats] = useLocalStorage('jsTrainingStats', {
    totalDaysVisited: 1,
    currentStreak: 1,
    lastVisitDate: new Date().toDateString(),
    questionsAnsweredToday: 0,
    totalQuestionsAnswered: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    reviewLater: []
  });

  // Check and update streak on mount
  useEffect(() => {
    const today = new Date().toDateString();
    if (stats.lastVisitDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const wasYesterday = stats.lastVisitDate === yesterday.toDateString();
      
      setStats(prev => ({
        ...prev,
        totalDaysVisited: prev.totalDaysVisited + 1,
        currentStreak: wasYesterday ? prev.currentStreak + 1 : 1,
        lastVisitDate: today,
        questionsAnsweredToday: 0
      }));
    }
  }, []);

  const startTraining = () => {
    selectNewQuestion();
    setCurrentScreen('training');
  };

  const selectNewQuestion = (similarTopic = null) => {
    let availableQuestions = questionBank.filter(q => !answeredQuestions.includes(q.id));
    
    if (currentMode === 'easy') {
      availableQuestions = availableQuestions.filter(q => q.difficulty === 'easy');
    } else if (currentMode === 'advanced') {
      availableQuestions = availableQuestions.filter(q => q.difficulty === 'advanced');
    } else if (currentMode === 'review') {
      availableQuestions = questionBank.filter(q => stats.reviewLater.includes(q.id));
    }
    
    if (similarTopic) {
      const topicQuestions = availableQuestions.filter(q => q.topic === similarTopic);
      if (topicQuestions.length > 0) {
        availableQuestions = topicQuestions;
      }
    }
    
    if (availableQuestions.length === 0) {
      availableQuestions = questionBank;
      setAnsweredQuestions([]);
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    setCurrentQuestion(availableQuestions[randomIndex]);
    setUserAnswer('');
    setShowFeedback(false);
  };

  const handleSubmitAnswer = () => {
    if (!userAnswer.trim()) return;
    
    const correct = checkAnswer();
    setIsCorrect(correct);
    setShowFeedback(true);
    setAnsweredQuestions(prev => [...prev, currentQuestion.id]);
    
    setStats(prev => ({
      ...prev,
      questionsAnsweredToday: prev.questionsAnsweredToday + 1,
      totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
      correctAnswers: correct ? prev.correctAnswers + 1 : prev.correctAnswers,
      incorrectAnswers: correct ? prev.incorrectAnswers : prev.incorrectAnswers + 1,
      reviewLater: correct 
        ? prev.reviewLater.filter(id => id !== currentQuestion.id)
        : [...new Set([...prev.reviewLater, currentQuestion.id])]
    }));
  };

  const checkAnswer = () => {
    const answer = userAnswer.toLowerCase().trim();
    const correct = currentQuestion.correctAnswer.toLowerCase().trim();
    
    if (currentQuestion.type === 'multipleChoice') {
      return answer === correct;
    } else if (currentQuestion.type === 'codeCompletion') {
      return answer === correct;
    } else {
      return answer.includes(correct.substring(0, 20));
    }
  };

  const handleSimilarQuestion = () => {
    selectNewQuestion(currentQuestion.topic);
  };

  const handleNextQuestion = () => {
    selectNewQuestion();
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Apply theme class to HTML element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen} 
      />
      
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar 
          sidebarOpen={sidebarOpen}
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
          stats={stats}
          selectNewQuestion={selectNewQuestion}
          currentScreen={currentScreen}
        />
        
        <main className="flex-1 overflow-y-auto">
          {currentScreen === 'welcome' ? (
            <WelcomeScreen
              stats={stats}
              startTraining={startTraining}
              currentMode={currentMode}
            />
          ) : (
            <TrainingScreen 
              currentQuestion={currentQuestion}
              userAnswer={userAnswer}
              setUserAnswer={setUserAnswer}
              showFeedback={showFeedback}
              isCorrect={isCorrect}
              handleSubmitAnswer={handleSubmitAnswer}
              handleSimilarQuestion={handleSimilarQuestion}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;