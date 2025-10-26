# 🗺️ JS Training App - Development Roadmap

**Last Updated**: October 25, 2025
**Status**: Phase 2.1 COMPLETE ✓ - Frontend fully functional with mock data
**Current Focus**: Frontend polish complete, ready for backend integration (Phase 2.2)

---

## 🎯 WHERE WE ARE NOW (Quick Status)

**✅ What's Working:**
- Frontend Vite + React project set up in `/Users/emilyparker/development/js-training-app`
- Tailwind CSS v4 configured with dark mode support (`@variant dark`)
- All main components created and functional: Header, Sidebar, WelcomeScreen, TrainingScreen
- Dependencies installed: React 19, axios, react-router-dom, @tailwindcss/postcss
- Dev server running on http://localhost:5173 (when you run `npm run dev`)
- Question bank with sample data in `src/data/questionBank.js`
- Custom hook for localStorage with updater function support in `src/hooks/useLocalStorage.js`
- **Dark/Light mode toggle working correctly ✓**
- **Training mode selection with shake animation (stops after 3s) ✓**
- **Quote persistence across re-renders ✓**
- All UX improvements implemented and tested

**⚠️ Known Issues:**
- None currently - frontend is stable with mock data
- Some placeholder components exist (QuestionCard.jsx, FeedbackCard.jsx) - not being used
- Currently using mock/local data - no backend yet

**🎯 Next Immediate Steps:**
1. ~~Test the app thoroughly in browser~~ ✓ DONE
2. ~~Fix any bugs with the current frontend implementation~~ ✓ DONE
3. Begin backend setup (Phase 2.2) when ready

---

## 📊 Project Overview

### What We're Building
A full-stack JavaScript training application with:
- **Frontend**: React app with sleek UI, multiple question types, progress tracking
- **Backend**: Express.js API with MongoDB for data persistence
- **AI Integration**: Claude API for dynamic question generation
- **Features**: Streak tracking, multiple training modes, review system

### Tech Stack Summary
```
Frontend:  React + Tailwind CSS + Monaco Editor
Backend:   Node.js + Express.js + Mongoose
Database:  MongoDB Atlas
AI:        Anthropic Claude API
Deployment: Vercel (Frontend) + Render/Railway (Backend)
```

---

## 🎯 Current Status & Next Steps

### ✅ Phase 1: COMPLETE ✓
- [x] Frontend prototype built in Claude Artifacts
- [x] All UI components working with mock data
- [x] Theme toggle, mode switching, question cards functional
- [x] Extracted and moved to VS Code

### 🔄 Phase 2: IN PROGRESS (You Are Here)
**Goal**: Set up backend, connect to MongoDB, integrate with frontend

**Current Status**:
- [x] Step 1: Extract React code to VS Code ✓
- [x] Vite + React project initialized ✓
- [x] Tailwind CSS v4 configured with dark mode ✓
- [x] All React components created ✓
- [x] Core dependencies installed (axios, react-router-dom, @tailwindcss/postcss) ✓
- [x] App runs locally (npm run dev works) ✓
- [x] Fixed useLocalStorage hook to support updater functions ✓
- [x] Fixed dark/light mode toggle with Tailwind v4 `@variant dark` directive ✓
- [x] Fixed quote re-rendering issue with useState ✓
- [x] Added shake animation for training mode selection (3s duration) ✓
- [x] Verified all frontend features work with mock data ✓
- [ ] **NEXT**: Start backend folder structure (Step 2)

---

## 🏗️ Detailed Phase Breakdown

## Phase 1: Frontend Prototype ✅ COMPLETE

### Deliverables Checklist
- [x] Welcome screen with personalized greeting
- [x] Sidebar with mode selector and stats
- [x] Question card component (all 8 types)
- [x] Answer input components (multiple choice, text, code editor)
- [x] Feedback system with explanations and teaching tips
- [x] Theme toggle (dark/light mode)
- [x] Mock data for 30+ sample questions
- [x] Smooth animations and transitions

### Tech Decisions Made
- ✅ Using Tailwind CSS for styling
- ✅ React hooks for state management
- ✅ Monaco Editor for code input
- ✅ Component-based architecture

---

## Phase 2: Backend Foundation & Integration 🔄 CURRENT PHASE

**Estimated Time**: 4-6 hours  
**Priority**: HIGH - Required for data persistence

### 2.1: Project Setup (30 minutes)

#### Step 1: Extract & Organize Frontend Code
```bash
# In VS Code terminal
mkdir js-training-app
cd js-training-app

# Create frontend directory
mkdir frontend
cd frontend

# Initialize Vite React project
npm create vite@latest . -- --template react

# Install dependencies
npm install
npm install tailwindcss postcss autoprefixer
npm install axios react-router-dom
npm install @monaco-editor/react
npm install zustand  # For state management (optional, lightweight alternative to Context)

# Configure Tailwind
npx tailwindcss init -p
```

**Action Items**:
- [x] Copy all React components from Artifacts ✓
- [x] Organize into proper folder structure ✓
  ```
  js-training-app/  (Current structure)
  ├── src/
  │   ├── components/
  │   │   ├── Header.jsx ✓
  │   │   ├── Sidebar.jsx ✓
  │   │   ├── WelcomeScreen.jsx ✓
  │   │   ├── TrainingScreen.jsx ✓
  │   │   ├── QuestionCard.jsx (placeholder)
  │   │   └── FeedbackCard.jsx (placeholder)
  │   ├── data/
  │   │   └── questionBank.js ✓
  │   ├── hooks/
  │   │   └── useLocalStorage.js ✓ (with updater function support)
  │   ├── App.jsx ✓
  │   ├── main.jsx ✓
  │   └── index.css ✓ (with @variant dark and animations)
  ├── tailwind.config.js ✓
  ├── postcss.config.js ✓ (with @tailwindcss/postcss)
  └── package.json ✓
  ```
- [x] Test that app runs locally: `npm run dev` ✓
- [x] Verify all features work (welcome screen, questions, stats, theme toggle) ✓
- [x] Fix Tailwind v4 dark mode configuration ✓
- [x] Fix localStorage hook for updater functions ✓
- [x] Fix quote persistence across re-renders ✓
- [x] Add shake animation for training mode selection ✓
- [x] All frontend bugs resolved ✓

---

#### Step 2: Backend Project Initialization (20 minutes)
```bash
# From root directory (js-training-app/)
mkdir backend
cd backend

# Initialize Node project
npm init -y

# Install core dependencies
npm install express mongoose dotenv cors

# Install dev dependencies
npm install -D nodemon

# Install Anthropic SDK (for later)
npm install @anthropic-ai/sdk
```

**Create Initial File Structure**:
```
backend/
├── src/
│   ├── models/
│   │   ├── User.js
│   │   ├── Question.js
│   │   ├── QuestionAttempt.js
│   │   └── DailyVisit.js
│   ├── routes/
│   │   ├── users.js
│   │   ├── questions.js
│   │   ├── attempts.js
│   │   └── stats.js
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── questionController.js
│   │   ├── attemptController.js
│   │   └── statsController.js
│   ├── services/
│   │   ├── aiService.js          # Claude API integration
│   │   └── questionSelector.js   # Question selection logic
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── logger.js
│   ├── config/
│   │   └── database.js
│   └── server.js
├── .env
├── .env.example
└── package.json
```

**Action Items**:
- [ ] Create folder structure
- [ ] Set up `package.json` scripts:
  ```json
  "scripts": {
    "start": "node src/server.js",
    "dev": "nodemon src/server.js"
  }
  ```

---

### 2.2: MongoDB Setup (45 minutes)

#### Step 1: Create MongoDB Atlas Account
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free tier
3. Create a new cluster (M0 Free tier)
4. Choose cloud provider and region (closest to you)
5. Wait 3-5 minutes for cluster to deploy

#### Step 2: Configure Database Access
1. **Database Access**:
   - Create database user
   - Username: `jsTrainingAdmin` (or your choice)
   - Password: Generate secure password
   - Role: `Atlas Admin` or `Read and Write to any database`
   - **SAVE CREDENTIALS SECURELY**

2. **Network Access**:
   - Click "Add IP Address"
   - For development: "Allow Access from Anywhere" (0.0.0.0/0)
   - For production: Add specific IPs later

3. **Get Connection String**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your actual password
   - Example: `mongodb+srv://jsTrainingAdmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/jsTrainingApp?retryWrites=true&w=majority`

#### Step 3: Environment Variables Setup
Create `backend/.env`:
```env
# Database
MONGODB_URI=mongodb+srv://jsTrainingAdmin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/jsTrainingApp?retryWrites=true&w=majority

# Server
PORT=5000
NODE_ENV=development

# Anthropic API (get from console.anthropic.com)
ANTHROPIC_API_KEY=sk-ant-xxxxx

# JWT (generate random string)
JWT_SECRET=your-super-secret-jwt-key-change-this

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

Create `backend/.env.example` (for version control):
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=5000
NODE_ENV=development
ANTHROPIC_API_KEY=sk-ant-xxxxx
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:5173
```

**Action Items**:
- [ ] Create MongoDB Atlas account
- [ ] Set up cluster and get connection string
- [ ] Create `.env` file with all credentials
- [ ] Add `.env` to `.gitignore`
- [ ] Test connection (next step)

---

### 2.3: Build Mongoose Models (1 hour)

#### User Model (`backend/src/models/User.js`)
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Emily'
  },
  email: {
    type: String,
    unique: true,
    sparse: true  // Optional field
  },
  preferences: {
    theme: {
      type: String,
      enum: ['dark', 'light'],
      default: 'dark'
    },
    defaultMode: {
      type: String,
      enum: ['random', 'advanced', 'mostImportant', 'easy', 'review'],
      default: 'random'
    }
  },
  stats: {
    totalDaysVisited: {
      type: Number,
      default: 0
    },
    currentStreak: {
      type: Number,
      default: 0
    },
    lastVisitDate: {
      type: Date,
      default: null
    },
    totalQuestionsAnswered: {
      type: Number,
      default: 0
    },
    correctAnswers: {
      type: Number,
      default: 0
    },
    incorrectAnswers: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

// Method to update streak
userSchema.methods.updateStreak = function() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (!this.stats.lastVisitDate) {
    // First visit
    this.stats.currentStreak = 1;
    this.stats.totalDaysVisited = 1;
  } else {
    const lastVisit = new Date(this.stats.lastVisitDate);
    lastVisit.setHours(0, 0, 0, 0);
    
    const dayDifference = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
    
    if (dayDifference === 1) {
      // Consecutive day
      this.stats.currentStreak += 1;
      this.stats.totalDaysVisited += 1;
    } else if (dayDifference > 1) {
      // Streak broken
      this.stats.currentStreak = 1;
      this.stats.totalDaysVisited += 1;
    }
    // If dayDifference === 0, same day, no change
  }
  
  this.stats.lastVisitDate = today;
};

module.exports = mongoose.model('User', userSchema);
```

#### Question Model (`backend/src/models/Question.js`)
```javascript
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['multipleChoice', 'codeCompletion', 'shortAnswer', 'codeWriting', 
           'debugging', 'analogy', 'studentQuestion', 'terminal'],
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'advanced'],
    required: true
  },
  category: {
    type: String,
    enum: ['javascript', 'react', 'mongodb', 'html', 'css', 'debugging', 'devtools', 'terminal'],
    required: true
  },
  topic: {
    type: String,
    required: true  // e.g., 'closures', 'hooks', 'promises'
  },
  question: {
    type: String,
    required: true
  },
  codeSnippet: {
    type: String,
    default: null
  },
  // For multiple choice questions
  options: [{
    type: String
  }],
  correctAnswer: {
    type: String,
    required: true
  },
  // For code questions
  expectedOutput: String,
  solutionCode: String,
  // Educational content
  explanation: {
    type: String,
    required: true
  },
  analogy: String,
  teachingTip: String,
  // Metadata
  tags: [String],
  isActive: {
    type: Boolean,
    default: true
  },
  timesAnswered: {
    type: Number,
    default: 0
  },
  timesCorrect: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for efficient querying
questionSchema.index({ difficulty: 1, category: 1, isActive: 1 });

module.exports = mongoose.model('Question', questionSchema);
```

#### QuestionAttempt Model (`backend/src/models/QuestionAttempt.js`)
```javascript
const mongoose = require('mongoose');

const questionAttemptSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: false  // Might be null for AI-generated questions
  },
  // Store full question data for AI-generated questions
  questionData: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  },
  userAnswer: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true
  },
  mode: {
    type: String,
    enum: ['random', 'advanced', 'mostImportant', 'easy', 'review'],
    required: true
  },
  reviewLater: {
    type: Boolean,
    default: false
  },
  reviewedAt: {
    type: Date,
    default: null
  },
  attemptedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for efficient querying
questionAttemptSchema.index({ userId: 1, attemptedAt: -1 });
questionAttemptSchema.index({ userId: 1, reviewLater: 1 });

module.exports = mongoose.model('QuestionAttempt', questionAttemptSchema);
```

#### DailyVisit Model (`backend/src/models/DailyVisit.js`)
```javascript
const mongoose = require('mongoose');

const dailyVisitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  visitDate: {
    type: Date,
    required: true
  },
  questionsAnswered: {
    type: Number,
    default: 0
  },
  correctCount: {
    type: Number,
    default: 0
  },
  incorrectCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Ensure one document per user per day
dailyVisitSchema.index({ userId: 1, visitDate: 1 }, { unique: true });

module.exports = mongoose.model('DailyVisit', dailyVisitSchema);
```

**Action Items**:
- [ ] Create all four model files
- [ ] Review schema fields match specification
- [ ] Test models can be imported without errors

---

### 2.4: Database Configuration & Connection (30 minutes)

#### Database Config (`backend/src/config/database.js`)
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📦 Database: ${conn.connection.name}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected');
    });

  } catch (error) {
    console.error(`❌ Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
```

#### Basic Server Setup (`backend/src/server.js`)
```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic test route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'JS Training App API is running',
    timestamp: new Date().toISOString()
  });
});

// Routes (will add these next)
// app.use('/api/users', require('./routes/users'));
// app.use('/api/questions', require('./routes/questions'));
// app.use('/api/attempts', require('./routes/attempts'));
// app.use('/api/stats', require('./routes/stats'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Environment: ${process.env.NODE_ENV}`);
});
```

**Test Connection**:
```bash
cd backend
npm run dev
```

Expected output:
```
🚀 Server running on http://localhost:5000
📝 Environment: development
✅ MongoDB Connected: cluster0-shard-00-01.xxxxx.mongodb.net
📦 Database: jsTrainingApp
```

**Action Items**:
- [ ] Create database config file
- [ ] Create initial server.js
- [ ] Test server starts successfully
- [ ] Test health endpoint: `http://localhost:5000/api/health`
- [ ] Verify MongoDB connection logs appear

---

### 2.5: Build API Endpoints (2-3 hours)

This is the core of Phase 2. We'll build RESTful API endpoints for all features.

#### 2.5.1: User Routes

**Controller** (`backend/src/controllers/userController.js`)
```javascript
const User = require('../models/User');

// Get or create user (for Emily)
exports.getOrCreateUser = async (req, res) => {
  try {
    const { name } = req.body;
    
    // Find existing user or create new one
    let user = await User.findOne({ name: name || 'Emily' });
    
    if (!user) {
      user = await User.create({
        name: name || 'Emily'
      });
    }
    
    // Update streak on each visit
    user.updateStreak();
    await user.save();
    
    res.json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Update user preferences
exports.updatePreferences = async (req, res) => {
  try {
    const { userId } = req.params;
    const { theme, defaultMode } = req.body;
    
    const user = await User.findByIdAndUpdate(
      userId,
      { 
        $set: { 
          'preferences.theme': theme,
          'preferences.defaultMode': defaultMode
        }
      },
      { new: true }
    );
    
    res.json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Get user stats
exports.getUserStats = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ 
        success: false, 
        error: 'User not found' 
      });
    }
    
    res.json({
      success: true,
      stats: user.stats
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};
```

**Routes** (`backend/src/routes/users.js`)
```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST /api/users - Get or create user
router.post('/', userController.getOrCreateUser);

// PUT /api/users/:userId/preferences - Update preferences
router.put('/:userId/preferences', userController.updatePreferences);

// GET /api/users/:userId/stats - Get user stats
router.get('/:userId/stats', userController.getUserStats);

module.exports = router;
```

---

#### 2.5.2: Question Routes

**Controller** (`backend/src/controllers/questionController.js`)
```javascript
const Question = require('../models/Question');

// Get random question based on mode
exports.getQuestion = async (req, res) => {
  try {
    const { mode, userId } = req.query;
    
    // Build query based on mode
    let query = { isActive: true };
    
    switch(mode) {
      case 'easy':
        query.difficulty = 'easy';
        break;
      case 'advanced':
        query.difficulty = 'advanced';
        break;
      case 'mostImportant':
        query.tags = { $in: ['critical', 'important', 'debugging'] };
        break;
      case 'random':
      default:
        // No additional filters
        break;
    }
    
    // Get total count
    const count = await Question.countDocuments(query);
    
    if (count === 0) {
      return res.status(404).json({ 
        success: false, 
        error: 'No questions found for this mode' 
      });
    }
    
    // Get random question
    const random = Math.floor(Math.random() * count);
    const question = await Question.findOne(query).skip(random);
    
    // Increment times answered
    question.timesAnswered += 1;
    await question.save();
    
    res.json({
      success: true,
      question
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Get specific question by ID
exports.getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findById(id);
    
    if (!question) {
      return res.status(404).json({ 
        success: false, 
        error: 'Question not found' 
      });
    }
    
    res.json({
      success: true,
      question
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Create new question (for seeding or admin)
exports.createQuestion = async (req, res) => {
  try {
    const question = await Question.create(req.body);
    
    res.status(201).json({
      success: true,
      question
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};
```

**Routes** (`backend/src/routes/questions.js`)
```javascript
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// GET /api/questions?mode=random&userId=xxx - Get question
router.get('/', questionController.getQuestion);

// GET /api/questions/:id - Get specific question
router.get('/:id', questionController.getQuestionById);

// POST /api/questions - Create question (admin/seeding)
router.post('/', questionController.createQuestion);

module.exports = router;
```

---

#### 2.5.3: Attempt Routes

**Controller** (`backend/src/controllers/attemptController.js`)
```javascript
const QuestionAttempt = require('../models/QuestionAttempt');
const Question = require('../models/Question');
const User = require('../models/User');

// Submit an answer
exports.submitAttempt = async (req, res) => {
  try {
    const { userId, questionId, userAnswer, mode, questionData } = req.body;
    
    // Get the question to check answer
    let question;
    if (questionId) {
      question = await Question.findById(questionId);
    } else if (questionData) {
      // AI-generated question
      question = questionData;
    }
    
    if (!question) {
      return res.status(404).json({ 
        success: false, 
        error: 'Question not found' 
      });
    }
    
    // Check if answer is correct
    const isCorrect = checkAnswer(userAnswer, question.correctAnswer, question.type);
    
    // Create attempt record
    const attempt = await QuestionAttempt.create({
      userId,
      questionId: questionId || null,
      questionData: questionData || null,
      userAnswer,
      isCorrect,
      mode,
      reviewLater: !isCorrect  // Auto-flag incorrect answers
    });
    
    // Update user stats
    const user = await User.findById(userId);
    user.stats.totalQuestionsAnswered += 1;
    if (isCorrect) {
      user.stats.correctAnswers += 1;
    } else {
      user.stats.incorrectAnswers += 1;
    }
    await user.save();
    
    // Update question stats (if not AI-generated)
    if (questionId) {
      if (isCorrect) {
        await Question.findByIdAndUpdate(questionId, {
          $inc: { timesCorrect: 1 }
        });
      }
    }
    
    // Prepare response
    const response = {
      success: true,
      isCorrect,
      attempt
    };
    
    // If incorrect, include teaching materials
    if (!isCorrect) {
      response.feedback = {
        correctAnswer: question.correctAnswer,
        explanation: question.explanation,
        analogy: question.analogy,
        teachingTip: question.teachingTip,
        codeSnippet: question.codeSnippet
      };
    }
    
    res.json(response);
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Helper function to check answers
function checkAnswer(userAnswer, correctAnswer, questionType) {
  // Normalize answers
  const normalized = userAnswer.trim().toLowerCase();
  const correct = correctAnswer.trim().toLowerCase();
  
  switch(questionType) {
    case 'multipleChoice':
      // Exact match (A, B, C, D)
      return normalized === correct;
    
    case 'codeCompletion':
    case 'shortAnswer':
      // Allow some flexibility
      return normalized.includes(correct) || correct.includes(normalized);
    
    case 'codeWriting':
      // This is complex - for MVP, we'll use keyword matching
      // In production, you'd want to actually run the code or use AI
      const keywords = correct.split(' ');
      return keywords.some(keyword => normalized.includes(keyword.toLowerCase()));
    
    default:
      return normalized === correct;
  }
}

// Get review later questions
exports.getReviewQuestions = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const attempts = await QuestionAttempt.find({
      userId,
      reviewLater: true
    })
    .populate('questionId')
    .sort({ attemptedAt: -1 });
    
    res.json({
      success: true,
      attempts,
      count: attempts.length
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};

// Mark question as reviewed
exports.markReviewed = async (req, res) => {
  try {
    const { attemptId } = req.params;
    
    const attempt = await QuestionAttempt.findByIdAndUpdate(
      attemptId,
      { 
        reviewLater: false,
        reviewedAt: new Date()
      },
      { new: true }
    );
    
    res.json({
      success: true,
      attempt
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};
```

**Routes** (`backend/src/routes/attempts.js`)
```javascript
const express = require('express');
const router = express.Router();
const attemptController = require('../controllers/attemptController');

// POST /api/attempts - Submit an answer
router.post('/', attemptController.submitAttempt);

// GET /api/attempts/review/:userId - Get review questions
router.get('/review/:userId', attemptController.getReviewQuestions);

// PUT /api/attempts/:attemptId/reviewed - Mark as reviewed
router.put('/:attemptId/reviewed', attemptController.markReviewed);

module.exports = router;
```

---

#### Update Server with Routes

Update `backend/src/server.js`:
```javascript
// ... existing code ...

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/questions', require('./routes/questions'));
app.use('/api/attempts', require('./routes/attempts'));

// ... rest of code ...
```

**Action Items**:
- [ ] Create all controller files
- [ ] Create all route files
- [ ] Update server.js to use routes
- [ ] Test each endpoint with Postman/Thunder Client
- [ ] Verify database operations work

---

### 2.6: Seed Database with Questions (1 hour)

Create seed script (`backend/src/seeds/seedQuestions.js`):
```javascript
require('dotenv').config();
const mongoose = require('mongoose');
const Question = require('../models/Question');
const connectDB = require('../config/database');

const sampleQuestions = [
  // Easy JavaScript Questions
  {
    type: 'multipleChoice',
    difficulty: 'easy',
    category: 'javascript',
    topic: 'variables',
    question: 'Which keyword declares a block-scoped variable?',
    options: ['var', 'let', 'const', 'function'],
    correctAnswer: 'let',
    explanation: 'let declares a block-scoped variable, meaning it only exists within the block it was defined in.',
    analogy: 'Think of let like a parking spot reservation - it\'s only yours in that specific parking level (block).',
    teachingTip: 'Show students the difference with a for loop - let creates a new variable for each iteration, while var doesn\'t.',
    tags: ['fundamentals', 'variables', 'scope']
  },
  {
    type: 'multipleChoice',
    difficulty: 'easy',
    category: 'javascript',
    topic: 'data-types',
    question: 'What will typeof null return?',
    options: ['null', 'undefined', 'object', 'number'],
    correctAnswer: 'object',
    explanation: 'typeof null returns "object" - this is actually a bug in JavaScript that can\'t be fixed due to backwards compatibility.',
    analogy: 'It\'s like calling a bicycle a car because of a typo in the manufacturer\'s catalog - wrong, but we\'re stuck with it!',
    teachingTip: 'Emphasize this is a famous JavaScript quirk. Use it to teach that even programming languages have bugs.',
    tags: ['fundamentals', 'data-types', 'quirks']
  },
  
  // Easy React Questions
  {
    type: 'codeCompletion',
    difficulty: 'easy',
    category: 'react',
    topic: 'hooks',
    question: 'Complete this code to create state: const [count, setCount] = ______();',
    correctAnswer: 'useState',
    explanation: 'useState is the React hook for adding state to functional components.',
    analogy: 'useState is like a memory box for your component - it remembers values between renders.',
    teachingTip: 'Start with a simple counter example. Show how the component re-renders when state changes.',
    tags: ['hooks', 'state', 'fundamentals']
  },
  {
    type: 'multipleChoice',
    difficulty: 'easy',
    category: 'react',
    topic: 'components',
    question: 'What must a React component return?',
    options: ['A function', 'JSX or null', 'A string', 'An object'],
    correctAnswer: 'JSX or null',
    explanation: 'React components must return JSX (which represents UI) or null (to render nothing).',
    analogy: 'Think of components as LEGO instruction manuals - they must show what to build (JSX) or say "build nothing" (null).',
    teachingTip: 'Show examples of both - a component returning JSX and one conditionally returning null.',
    tags: ['components', 'jsx', 'fundamentals']
  },

  // Advanced JavaScript Questions
  {
    type: 'multipleChoice',
    difficulty: 'advanced',
    category: 'javascript',
    topic: 'closures',
    question: 'What will this code log?',
    codeSnippet: 'for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}',
    options: ['0 1 2', '3 3 3', 'undefined undefined undefined', 'Error'],
    correctAnswer: '3 3 3',
    explanation: 'var is function-scoped, not block-scoped. By the time the timeouts execute, the loop has finished and i is 3.',
    analogy: 'It\'s like three people sharing one whiteboard. When they finally look at it, they all see the last thing written (3).',
    teachingTip: 'Demonstrate the fix with let, which creates a new variable for each iteration. Visual diagrams help here.',
    tags: ['closures', 'scope', 'async', 'important']
  },
  {
    type: 'debugging',
    difficulty: 'advanced',
    category: 'javascript',
    topic: 'this-keyword',
    question: 'A student\'s code is broken. What\'s wrong?',
    codeSnippet: 'const obj = {\n  name: "Emily",\n  greet: function() {\n    setTimeout(function() {\n      console.log("Hi, " + this.name);\n    }, 1000);\n  }\n};',
    correctAnswer: 'this is undefined in the setTimeout callback',
    explanation: 'The function passed to setTimeout loses the this context. Use an arrow function or .bind() to fix it.',
    analogy: 'It\'s like giving directions to someone while blindfolded - they lost their point of reference (this).',
    teachingTip: 'Show three solutions: arrow function, .bind(), and storing this in a variable. Explain when to use each.',
    tags: ['this', 'debugging', 'closures', 'critical']
  },

  // Terminal/DevTools Questions
  {
    type: 'shortAnswer',
    difficulty: 'easy',
    category: 'terminal',
    topic: 'npm',
    question: 'What command installs a package as a dev dependency?',
    correctAnswer: 'npm install --save-dev',
    explanation: 'The --save-dev flag (or -D) installs packages that are only needed during development.',
    analogy: 'Like buying tools for building a house - you need them while building, but not in the finished house.',
    teachingTip: 'Show examples of dev dependencies (testing libraries, build tools) vs regular dependencies (React, Express).',
    tags: ['npm', 'terminal', 'workflow']
  },

  // Teaching Challenge Questions
  {
    type: 'analogy',
    difficulty: 'medium',
    category: 'react',
    topic: 'props',
    question: 'How would you explain React props to a complete beginner using a real-world analogy?',
    correctAnswer: 'props are like function arguments',
    explanation: 'Props are inputs to components, just like arguments are inputs to functions. They let parent components pass data down.',
    analogy: 'Props are like order details at a restaurant - the kitchen (child component) needs to know what the customer (parent component) ordered.',
    teachingTip: 'Use the restaurant analogy, then show code side-by-side. Emphasize that props are read-only.',
    tags: ['props', 'teaching', 'analogies']
  },

  // Add 10-15 more questions covering:
  // - MongoDB queries
  // - Async/await
  // - Array methods
  // - React hooks (useEffect, useContext)
  // - Common student mistakes
  // - Debugging scenarios
  
  // ... (You'll want to add ~150 total for a good bank)
];

async function seedDatabase() {
  try {
    await connectDB();
    
    console.log('🌱 Seeding database...');
    
    // Clear existing questions
    await Question.deleteMany({});
    console.log('🗑️  Cleared existing questions');
    
    // Insert new questions
    await Question.insertMany(sampleQuestions);
    console.log(`✅ Inserted ${sampleQuestions.length} questions`);
    
    console.log('🎉 Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
```

Run seed script:
```bash
node src/seeds/seedQuestions.js
```

**Action Items**:
- [ ] Create seed script
- [ ] Add 20-30 diverse sample questions
- [ ] Run seed script
- [ ] Verify questions in MongoDB Atlas (browse collections)
- [ ] Test fetching questions via API

---

### 2.7: Frontend API Integration (1-2 hours)

#### Create API Service (`frontend/src/utils/api.js`)
```javascript
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// User endpoints
export const getOrCreateUser = async (name = 'Emily') => {
  const response = await api.post('/users', { name });
  return response.data;
};

export const updateUserPreferences = async (userId, preferences) => {
  const response = await api.put(`/users/${userId}/preferences`, preferences);
  return response.data;
};

export const getUserStats = async (userId) => {
  const response = await api.get(`/users/${userId}/stats`);
  return response.data;
};

// Question endpoints
export const getQuestion = async (mode, userId) => {
  const response = await api.get('/questions', {
    params: { mode, userId }
  });
  return response.data;
};

// Attempt endpoints
export const submitAttempt = async (attemptData) => {
  const response = await api.post('/attempts', attemptData);
  return response.data;
};

export const getReviewQuestions = async (userId) => {
  const response = await api.get(`/attempts/review/${userId}`);
  return response.data;
};

export const markReviewed = async (attemptId) => {
  const response = await api.put(`/attempts/${attemptId}/reviewed`);
  return response.data;
};

export default api;
```

#### Create Environment File (`frontend/.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

#### Update Components to Use Real API
Replace mock data calls with actual API calls in your components.

Example in `App.jsx`:
```javascript
import { useEffect, useState } from 'react';
import { getOrCreateUser, getQuestion, submitAttempt } from './utils/api';

function App() {
  const [user, setUser] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Get/create user
      const userData = await getOrCreateUser('Emily');
      setUser(userData.user);
      
      // Load first question
      await loadQuestion('random');
    } catch (error) {
      console.error('Error initializing app:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadQuestion = async (mode) => {
    try {
      const questionData = await getQuestion(mode, user?._id);
      setCurrentQuestion(questionData.question);
    } catch (error) {
      console.error('Error loading question:', error);
    }
  };

  const handleSubmitAnswer = async (answer) => {
    try {
      const result = await submitAttempt({
        userId: user._id,
        questionId: currentQuestion._id,
        userAnswer: answer,
        mode: 'random'
      });
      
      // Handle result (show feedback, etc.)
      if (result.isCorrect) {
        // Show success
      } else {
        // Show feedback with teaching materials
      }
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  // ... rest of component
}
```

**Action Items**:
- [ ] Create API service file
- [ ] Add environment variables
- [ ] Replace all mock data with API calls
- [ ] Add loading states
- [ ] Add error handling
- [ ] Test full user flow end-to-end

---

### 2.8: Testing Full Stack Integration (30 minutes)

#### Manual Testing Checklist
- [ ] Start backend: `cd backend && npm run dev`
- [ ] Start frontend: `cd frontend && npm run dev`
- [ ] Test user creation (check MongoDB Atlas)
- [ ] Test question loading in each mode
- [ ] Test answer submission (correct and incorrect)
- [ ] Test streak calculation (visit on consecutive days)
- [ ] Test Review Later functionality
- [ ] Test theme toggle persists
- [ ] Test mode switching
- [ ] Verify all data saves to database

#### Common Issues & Solutions
**CORS Errors**: Check `FRONTEND_URL` in backend `.env`  
**Connection Refused**: Verify both servers running  
**Question not loading**: Check seed script ran successfully  
**Streak not updating**: Check server timezone settings

---

### 2.9: Testing Setup 🧪 (AFTER Backend Integration)

**Estimated Time**: 2-3 hours
**Priority**: MEDIUM-HIGH - Critical for reliability, but comes after core features work
**When to do this**: After Phase 2.8 (full-stack integration working)

#### Why Testing Matters
Once your backend is integrated and data flows through the system, automated tests will:
- Catch bugs before they reach production
- Give you confidence when making changes
- Document how your app should work
- Speed up development in the long run

#### 2.9.1: Component Testing with Vitest + React Testing Library

**Install Dependencies**:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

**Update `package.json` scripts**:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage"
}
```

**Create `vitest.config.js`**:
```javascript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
});
```

**Create test setup file** (`src/test/setup.js`):
```javascript
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

**Example Component Tests** (`src/components/__tests__/Header.test.jsx`):
```javascript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the app title', () => {
    render(
      <Header
        theme="dark"
        toggleTheme={() => {}}
        sidebarOpen={true}
        setSidebarOpen={() => {}}
      />
    );

    expect(screen.getByText('JS Training Ground')).toBeInTheDocument();
  });

  it('calls toggleTheme when theme button is clicked', () => {
    const toggleTheme = vi.fn();

    render(
      <Header
        theme="dark"
        toggleTheme={toggleTheme}
        sidebarOpen={true}
        setSidebarOpen={() => {}}
      />
    );

    const themeButton = screen.getByRole('button', { name: /🌙/i });
    fireEvent.click(themeButton);

    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  it('shows correct icon for light theme', () => {
    render(
      <Header
        theme="light"
        toggleTheme={() => {}}
        sidebarOpen={true}
        setSidebarOpen={() => {}}
      />
    );

    expect(screen.getByText('☀️')).toBeInTheDocument();
  });
});
```

**Example Integration Test** (`src/__tests__/App.test.jsx`):
```javascript
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import * as api from '../utils/api';

// Mock the API
vi.mock('../utils/api');

describe('App Integration', () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();

    // Mock localStorage
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn()
    };
    global.localStorage = localStorageMock;
  });

  it('loads welcome screen on initial render', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Good morning/i)).toBeInTheDocument();
    });
  });

  it('shows training screen after clicking Start Training', async () => {
    api.getQuestion.mockResolvedValue({
      question: {
        id: 1,
        question: 'What is React?',
        type: 'multipleChoice',
        options: ['A', 'B', 'C', 'D']
      }
    });

    render(<App />);

    const startButton = await screen.findByText(/Start Training/i);
    fireEvent.click(startButton);

    await waitFor(() => {
      expect(screen.getByText(/What is React/i)).toBeInTheDocument();
    });
  });
});
```

**Action Items**:
- [ ] Install Vitest and testing libraries
- [ ] Create vitest config
- [ ] Create test setup file
- [ ] Write tests for key components (Header, Sidebar, WelcomeScreen)
- [ ] Write integration test for main user flow
- [ ] Run tests: `npm test`
- [ ] Aim for 70%+ coverage on critical paths

---

#### 2.9.2: End-to-End Testing with Playwright

**Install Playwright**:
```bash
npm install -D @playwright/test
npx playwright install
```

**Create `playwright.config.js`**:
```javascript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
```

**Example E2E Test** (`e2e/training-flow.spec.js`):
```javascript
import { test, expect } from '@playwright/test';

test.describe('Training Flow', () => {
  test('user can complete a full training session', async ({ page }) => {
    // Go to app
    await page.goto('/');

    // Verify welcome screen
    await expect(page.getByText(/Good morning/i)).toBeVisible();

    // Click start training
    await page.getByRole('button', { name: /Start Training/i }).click();

    // Verify question appears
    await expect(page.getByRole('heading', { level: 3 })).toBeVisible();

    // Select an answer (for multiple choice)
    await page.getByRole('radio').first().click();

    // Submit answer
    await page.getByRole('button', { name: /Submit Answer/i }).click();

    // Verify feedback appears
    await expect(
      page.getByText(/Nailed it|Not quite/i)
    ).toBeVisible();

    // Click next question
    await page.getByRole('button', { name: /Next Question/i }).click();

    // Verify new question loads
    await expect(page.getByRole('heading', { level: 3 })).toBeVisible();
  });

  test('sidebar shows correct stats', async ({ page }) => {
    await page.goto('/');

    // Check sidebar stats are visible
    await expect(page.getByText(/Total Days:/i)).toBeVisible();
    await expect(page.getByText(/Current Streak:/i)).toBeVisible();
    await expect(page.getByText(/Accuracy:/i)).toBeVisible();
  });

  test('theme toggle works', async ({ page }) => {
    await page.goto('/');

    // Click theme toggle
    await page.getByRole('button', { name: /🌙|☀️/i }).click();

    // Verify theme changed (check for dark or light class on html)
    const html = page.locator('html');
    await expect(html).toHaveClass(/dark|light/);
  });

  test('mode switching changes questions', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /Start Training/i }).click();

    // Switch to easy mode
    await page.getByRole('button', { name: /Easy/i }).click();

    // Verify question still loads
    await expect(page.getByRole('heading', { level: 3 })).toBeVisible();
  });
});
```

**Run E2E Tests**:
```bash
# Run all tests
npx playwright test

# Run with UI
npx playwright test --ui

# Run specific test
npx playwright test training-flow

# Debug mode
npx playwright test --debug
```

**Action Items**:
- [ ] Install Playwright
- [ ] Create playwright config
- [ ] Write E2E test for main training flow
- [ ] Write E2E test for theme toggle
- [ ] Write E2E test for mode switching
- [ ] Run tests locally: `npx playwright test`
- [ ] Generate test report: `npx playwright show-report`

---

#### 2.9.3: API Testing (Backend)

**Install Dependencies** (in backend folder):
```bash
cd backend
npm install -D jest supertest
```

**Create `jest.config.js`** (backend):
```javascript
module.exports = {
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
};
```

**Example API Test** (`backend/src/__tests__/users.test.js`):
```javascript
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server'); // Export your express app
const User = require('../models/User');

describe('User API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_TEST_URI);
  });

  afterAll(async () => {
    await User.deleteMany({});
    await mongoose.connection.close();
  });

  describe('POST /api/users', () => {
    it('creates a new user', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({ name: 'Test User' })
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.user.name).toBe('Test User');
    });

    it('returns existing user if already exists', async () => {
      // Create user first
      await request(app)
        .post('/api/users')
        .send({ name: 'Emily' });

      // Try to create again
      const res = await request(app)
        .post('/api/users')
        .send({ name: 'Emily' })
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.user.name).toBe('Emily');
    });
  });
});
```

**Action Items**:
- [ ] Install Jest and Supertest
- [ ] Create Jest config
- [ ] Set up test database (separate from dev)
- [ ] Write API tests for user endpoints
- [ ] Write API tests for question endpoints
- [ ] Write API tests for attempt endpoints
- [ ] Run backend tests: `npm test`

---

#### 2.9.4: CI/CD Integration (Optional - for later)

**GitHub Actions Example** (`.github/workflows/test.yml`):
```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run unit tests
        run: npm test

      - name: Run E2E tests
        run: npx playwright test

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
```

**Action Items**:
- [ ] Create GitHub Actions workflow
- [ ] Configure CI to run on push
- [ ] Set up test database for CI
- [ ] Add status badge to README

---

#### Testing Best Practices

1. **Test Pyramid**:
   - Lots of unit tests (fast, cheap)
   - Some integration tests (medium speed)
   - Few E2E tests (slow, expensive)

2. **What to Test**:
   - ✅ User flows (can they complete a question?)
   - ✅ Critical business logic (streak calculation, answer validation)
   - ✅ Edge cases (empty states, error handling)
   - ❌ Implementation details (internal state, private methods)
   - ❌ Third-party libraries (they have their own tests)

3. **Test Organization**:
   - Keep tests close to the code they test
   - Use descriptive test names
   - Follow Arrange-Act-Assert pattern
   - Mock external dependencies

---

## Phase 3: AI Integration 🤖 NEXT PHASE

**Estimated Time**: 2-3 hours  
**Priority**: MEDIUM - Enhances experience but not required for MVP

### 3.1: Anthropic API Setup

#### Install SDK
```bash
cd backend
npm install @anthropic-ai/sdk
```

#### Create AI Service (`backend/src/services/aiService.js`)
```javascript
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function generateSimilarQuestion(originalQuestion) {
  try {
    const prompt = `You are generating a training question for a JavaScript instructor.

Original question topic: ${originalQuestion.topic}
Difficulty: ${originalQuestion.difficulty}
Category: ${originalQuestion.category}

Generate a SIMILAR but DIFFERENT question that tests the same concept in a new way.

Return ONLY valid JSON (no markdown):
{
  "question": "...",
  "type": "${originalQuestion.type}",
  "codeSnippet": "..." or null,
  "options": ["A", "B", "C", "D"] (if multiple choice),
  "correctAnswer": "...",
  "explanation": "...",
  "analogy": "...",
  "teachingTip": "..."
}`;

    const message = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        { role: 'user', content: prompt }
      ],
    });

    const responseText = message.content[0].text;
    const questionData = JSON.parse(responseText);
    
    return {
      ...questionData,
      difficulty: originalQuestion.difficulty,
      category: originalQuestion.category,
      topic: originalQuestion.topic,
      tags: ['ai-generated', ...originalQuestion.tags]
    };
  } catch (error) {
    console.error('Error generating question:', error);
    throw error;
  }
}

module.exports = {
  generateSimilarQuestion
};
```

#### Add Route for Similar Questions
In `backend/src/routes/questions.js`:
```javascript
const aiService = require('../services/aiService');

// POST /api/questions/similar - Generate similar question
router.post('/similar', async (req, res) => {
  try {
    const { questionId } = req.body;
    const originalQuestion = await Question.findById(questionId);
    
    const newQuestion = await aiService.generateSimilarQuestion(originalQuestion);
    
    res.json({
      success: true,
      question: newQuestion
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});
```

#### Frontend Integration
Add to `frontend/src/utils/api.js`:
```javascript
export const getSimilarQuestion = async (questionId) => {
  const response = await api.post('/questions/similar', { questionId });
  return response.data;
};
```

Wire up "Similar Question" button to call this endpoint.

**Action Items**:
- [ ] Get Anthropic API key from console.anthropic.com
- [ ] Add to backend `.env`
- [ ] Create AI service
- [ ] Add similar question route
- [ ] Test AI generation
- [ ] Connect frontend button
- [ ] Add caching to reduce API costs

---

## Phase 4: Polish & Advanced Features 🎨

**Estimated Time**: 2-3 hours  
**Priority**: LOW - Nice-to-haves

### Features to Add:
- [ ] Better answer validation for code questions
- [ ] Progress analytics dashboard
- [ ] Export/import questions
- [ ] Question difficulty adaptation based on performance
- [ ] Animations and micro-interactions
- [ ] Better mobile responsiveness
- [ ] Keyboard shortcuts
- [ ] Daily email reminders (optional)

---

## Phase 5: Deployment 🚀

**Estimated Time**: 1-2 hours  
**Priority**: HIGH - Get it live!

### 5.1: Backend Deployment (Render/Railway)

#### Using Render.com
1. Push code to GitHub
2. Connect GitHub to Render
3. Create new "Web Service"
4. Set environment variables
5. Deploy!

#### Environment Variables to Set:
```
MONGODB_URI=your-atlas-connection-string
ANTHROPIC_API_KEY=your-api-key
JWT_SECRET=your-secret
FRONTEND_URL=https://your-frontend-url.vercel.app
NODE_ENV=production
```

### 5.2: Frontend Deployment (Vercel)

```bash
cd frontend

# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable
vercel env add VITE_API_URL
# Enter your backend URL: https://your-backend.onrender.com/api
```

### 5.3: Post-Deployment Testing
- [ ] Test live URL
- [ ] Verify database connections
- [ ] Test all features in production
- [ ] Check mobile responsiveness
- [ ] Monitor for errors

---

## 📊 Progress Tracking

### Weekly Goals
**Week 1**: Complete Phase 1 & 2 (Frontend + Backend)  
**Week 2**: Complete Phase 3 (AI Integration)  
**Week 3**: Polish + Deploy

### Daily Checklist Template
```
Today's Date: _______
Time Spent: _______
Phase: _______

Completed:
- [ ] 
- [ ] 
- [ ] 

Blockers:
- 

Tomorrow's Focus:
- 
- 
```

---

## 🆘 Troubleshooting Guide

### Common Issues

**MongoDB Connection Failed**
- Check connection string
- Verify IP whitelist in Atlas
- Check firewall settings

**CORS Errors**
- Verify `FRONTEND_URL` in backend `.env`
- Check CORS middleware configuration
- Restart backend server

**Questions Not Loading**
- Verify seed script ran
- Check MongoDB Atlas for data
- Test API endpoint directly

**AI Generation Failing**
- Verify API key is correct
- Check API quota/billing
- Look at error messages in logs

---

## 🎓 Learning Resources

As you build, reference these:
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Mongoose Docs](https://mongoosejs.com/docs/guide.html)
- [React + Vite](https://vitejs.dev/guide/)
- [Anthropic API Docs](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)

---

## ✅ Definition of Done

### Phase 2 Complete When:
- [ ] Backend server running
- [ ] MongoDB connected
- [ ] All API endpoints working
- [ ] Frontend consuming real API
- [ ] User can complete full question flow
- [ ] Data persists across sessions
- [ ] Streak calculation works

### Entire Project Complete When:
- [ ] All features from spec working
- [ ] App deployed and accessible online
- [ ] Emily can use it daily to prepare for teaching
- [ ] Code is clean and documented
- [ ] No critical bugs

---

## 🚀 Quick Start (When Resuming Work)

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev

# Terminal 3 - MongoDB Compass (optional)
# Connect to your Atlas cluster to view data visually
```

**Check Health**: Visit `http://localhost:5000/api/health`  
**Access App**: Visit `http://localhost:5173`

---

**You've got this, Emily! 💪 Follow this roadmap step-by-step, and you'll have an amazing app to prepare you for teaching. Use Claude Code in VS Code for help with each phase. Good luck!** 🎓✨
