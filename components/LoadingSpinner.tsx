
'use client';

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="w-16 h-16 border-4 border-purple-500/20 rounded-full animate-spin">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
        </div>
        
        {/* Inner eye */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-5 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 rounded-full relative overflow-hidden animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-black rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <span className="text-purple-300 text-sm font-medium animate-pulse">Loading...</span>
        </div>
      </div>
    </div>
  );
}
