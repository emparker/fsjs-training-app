export const questionBank = [
  {
    id: 1,
    type: "multipleChoice",
    difficulty: "easy",
    category: "javascript",
    topic: "variables",
    question: "What keyword declares a block-scoped variable that can be reassigned?",
    options: ["var", "let", "const", "function"],
    correctAnswer: "let",
    explanation: "The 'let' keyword declares a block-scoped variable that can be reassigned, unlike 'const' which cannot be reassigned.",
    analogy: "Think of 'let' like a labeled box where you can change what's inside, while 'const' is like a sealed container.",
    teachingTip: "Show students how 'let' prevents the common 'var' pitfalls in loops and helps avoid accidental global variables."
  },
  {
    id: 2,
    type: "multipleChoice",
    difficulty: "advanced",
    category: "javascript",
    topic: "closures",
    question: "What will this code output?",
    codeSnippet: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    options: ["0 1 2", "3 3 3", "undefined undefined undefined", "Error"],
    correctAnswer: "3 3 3",
    explanation: "Because 'var' is function-scoped, all three setTimeout callbacks share the same 'i' variable. By the time they execute, the loop has finished and i equals 3.",
    analogy: "It's like three people taking photos of the same whiteboard - they all capture it at the same moment after someone has finished writing '3' on it.",
    teachingTip: "Use this example to demonstrate why 'let' is preferred in loops - it creates a new binding for each iteration."
  },
  // Add all 10 questions from the original artifact here
  // I'll include a few more for variety
  {
    id: 3,
    type: "codeCompletion",
    difficulty: "easy",
    category: "react",
    topic: "hooks",
    question: "Complete this React Hook to manage state:",
    codeSnippet: `const [count, setCount] = ________(0);`,
    correctAnswer: "useState",
    explanation: "useState is the fundamental React Hook for adding state to functional components.",
    analogy: "useState is like giving your component a memory - it remembers values between re-renders.",
    teachingTip: "Always emphasize that hooks must be called at the top level of the component, not inside conditions or loops."
  }
  // ... add the rest of the questions
];

export const motivationalQuotes = [
  "Code is like humor. When you have to explain it, it's bad. – Cory House",
  "First, solve the problem. Then, write the code. – John Johnson",
  "Experience is the name everyone gives to their mistakes. – Oscar Wilde",
  "The best way to learn is to teach. – Frank Oppenheimer",
  "Every expert was once a beginner. Keep going! 💪"
];