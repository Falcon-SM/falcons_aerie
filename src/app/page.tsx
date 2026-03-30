"use client"

import { useState, useEffect } from "react"
import Script from "next/script";

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="relative overflow-hidden">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4BZNDPJN6H"
          strategy="afterInteractive"
          async
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4BZNDPJN6H');
            `,
          }}
        />

        {/* 背景 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              はやぶさの
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 里</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Welcome to Falcon&apos;s Aerie!
            </p>
            {/* Clock */}
            <div className="text-center mt-8">
              <div className="text-6xl md:text-7xl lg:text-8xl font-light tracking-wider mb-2">
                <span className="bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                  {currentTime.toLocaleTimeString("ja-JP", { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
              </div>
              <div className="text-xl md:text-2xl text-blue-300 font-light">
                {/* Date */}
                {currentTime.toLocaleDateString("ja-JP", { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="relative bg-slate-800/40 border-b border-slate-700">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            $Whoami
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            こんにちは！はやぶさです。<br />
            このサイトでは便利なツールや遊び心のある機能を自由に楽しめるようにする予定です。<br />
            11月上旬以降、本格的に制作していきます。<br />
            どうぞよろしくお願いします。<br />
            <br />
            𝕏: <a href="https://x.com/leopard_shun?s=21" className="text-blue-400 hover:text-blue-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">@Leopard_shun</a> <br />
            GitHub: <a href="https://github.com/Falcon-SM" className="text-blue-400 hover:text-blue-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">@Falcon-SM</a>
          </p>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          $Projects
        </h2>
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          現在、いくつかのプロジェクトを進行中です。<br />
          これらのプロジェクトは、私が個人的に興味を持っている分野や、皆さんにとって便利なツールを提供することを目的としています。<br />
          ぜひ楽しみにしていてください！<br />
          <br />
          <a href="https://github.com/leopard-shun/aerie" className="text-blue-400 hover:text-blue-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
      </div>  

    </div>
  )
}
