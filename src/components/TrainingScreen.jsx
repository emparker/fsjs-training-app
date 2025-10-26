export default function TrainingScreen({
  currentQuestion,
  userAnswer,
  setUserAnswer,
  showFeedback,
  isCorrect,
  handleSubmitAnswer,
  handleSimilarQuestion,
  handleNextQuestion
}) {
  if (!currentQuestion) return null;

  return (
    <div className="flex items-center justify-center h-full p-8">
      <div className={`w-full max-w-3xl ${showFeedback ? 'animate-flip-card' : ''}`}>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
          {!showFeedback ? (
            <>
              {/* Question */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    currentQuestion.difficulty === 'easy' ? 'bg-green-500' :
                    currentQuestion.difficulty === 'medium' ? 'bg-yellow-500' :
                    'bg-red-500'
                  } text-white`}>
                    {currentQuestion.difficulty}
                  </span>
                  <span className="text-sm opacity-60">
                    {currentQuestion.category} / {currentQuestion.topic}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {currentQuestion.question}
                </h3>

                {currentQuestion.codeSnippet && (
                  <div className="code-editor">
                    <pre className="text-teal-400 font-mono text-sm">
                      <code>{currentQuestion.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Answer Input */}
              <div className="space-y-4">
                {currentQuestion.type === 'multipleChoice' ? (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <label
                        key={index}
                        className={`block p-3 rounded-lg border-2 cursor-pointer transition-all ${
                          userAnswer === option
                            ? 'border-teal-500 bg-teal-500 bg-opacity-20'
                            : 'border-gray-300 dark:border-gray-600 hover:border-teal-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="answer"
                          value={option}
                          checked={userAnswer === option}
                          onChange={(e) => setUserAnswer(e.target.value)}
                          className="sr-only"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                ) : currentQuestion.type === 'codeWriting' ? (
                  <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="w-full h-48 p-4 font-mono text-sm rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-teal-300 border-2 border-teal-500 focus:outline-none focus:border-teal-400"
                    placeholder="Write your code here..."
                  />
                ) : (
                  <textarea
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="w-full h-32 p-4 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-teal-500 focus:outline-none focus:border-teal-400"
                    placeholder="Type your answer here..."
                  />
                )}

                <button
                  onClick={handleSubmitAnswer}
                  disabled={!userAnswer}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    userAnswer
                      ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:scale-105'
                      : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  Submit Answer
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-6 animate-success">
              {/* Feedback */}
              <div className="text-center">
                {isCorrect ? (
                  <div className="text-4xl mb-4">
                    Nailed it, Emily!
                  </div>
                ) : (
                  <div className="text-4xl mb-4">
                    Not quite! Here&apos;s the thing...
                  </div>
                )}
              </div>

              {!isCorrect && (
                <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                  <h4 className="font-semibold mb-2 text-teal-400">Correct Answer:</h4>
                  <p className="mb-4">{currentQuestion.correctAnswer}</p>

                  {currentQuestion.explanation && (
                    <>
                      <h4 className="font-semibold mb-2 text-teal-400">Explanation:</h4>
                      <p className="mb-4">{currentQuestion.explanation}</p>
                    </>
                  )}
                </div>
              )}

              {currentQuestion.analogy && (
                <div className="p-4 rounded-lg bg-blue-100 dark:bg-blue-900 dark:bg-opacity-30">
                  <h4 className="font-semibold mb-2 text-blue-400">Analogy:</h4>
                  <p>{currentQuestion.analogy}</p>
                </div>
              )}

              {currentQuestion.teachingTip && (
                <div className="p-4 rounded-lg bg-purple-100 dark:bg-purple-900 dark:bg-opacity-30">
                  <h4 className="font-semibold mb-2 text-purple-400">Teaching Tip:</h4>
                  <p>{currentQuestion.teachingTip}</p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={handleSimilarQuestion}
                  className="flex-1 py-3 px-6 rounded-lg font-semibold bg-purple-500 hover:bg-purple-600 text-white transition-colors"
                >
                  Similar Question
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="flex-1 py-3 px-6 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:scale-105 transition-all"
                >
                  Next Question
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
