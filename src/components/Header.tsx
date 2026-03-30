import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-r from-blue-700/90 via-purple-700/70 to-cyan-700/80 border-b border-white/20 shadow-2xl rounded-b-3xl">
      
      {/* --- 装飾用のエフェクト（背景・光の反射など） --- */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/10 to-cyan-500/15 rounded-b-3xl -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-b-3xl -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent -z-10"></div>
      <div className="absolute top-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

      {/* --- メインコンテンツ --- */}
      <div className="relative container mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="font-shippori text-xl font-bold text-white drop-shadow-lg">
          <Link href="/">Falcon's Aerie</Link>
        </h1>
        
        {/* 背景が濃い色なので、文字色は白（text-white/90）にしています */}
        <nav className="space-x-6 font-sans text-white/90">
          <Link 
            href="/about" 
            className="hover:text-white hover:drop-shadow-lg transition-all duration-300"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-white hover:drop-shadow-lg transition-all duration-300"
          >
            Contact
          </Link>
        </nav>

      </div>
    </header>
  );
}