export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 flex flex-col items-center justify-center font-sans p-4">
      <div className="text-center space-y-6 max-w-lg">
        {/* Logo / Brand Name */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Asia Poultry Feeds
        </h1>
        
        {/* App Title */}
        <h2 className="text-xl md:text-2xl text-gray-400 font-light">
          LC Management Database
        </h2>

        {/* Status Indicator */}
        <div className="inline-flex items-center space-x-2 bg-[#1e1e1e] border border-gray-800 px-4 py-2 rounded-full mt-8">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-300">Coming Soon</span>
        </div>
      </div>
    </div>
  );
}