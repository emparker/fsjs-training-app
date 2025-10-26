export default function Header({ theme, toggleTheme, sidebarOpen, setSidebarOpen }) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-2xl hover:opacity-80 transition-opacity"
          >
            ☰
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            JS Training Ground
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-2xl hover:opacity-80 transition-opacity"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <div className="text-xl">👤</div>
        </div>
      </div>
    </header>
  );
}
