"use client"

import { useState, useEffect } from "react"
// ホームページコンポーネント
export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  // コンポーネントがマウントされた後にタイマーを設定
  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => setCurrentTime(new Date()), 1000) // 1秒ごとに時間を更新
    return () => clearInterval(timer) // クリーンアップ関数
  }, [])

  // クライアント側でのみレンダリング
  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* ヘッダーセクション */}
      <header className="relative overflow-hidden">
        {/* 背景のグラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="animate-fade-in-up">
            {/* サイトタイトル */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              はやぶさの
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 里</span>
            </h1>
            {/* サブタイトル */}
            <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Welcome to Falcon's Aerie!
            </p>
            {/* 豪華な時計の表示 */}
            <div className="text-center mt-8">
              <div className="text-6xl md:text-7xl lg:text-8xl font-light tracking-wider mb-2">
                <span className="bg-gradient-to-r from-teal-300 via-blue-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                  {/* 時刻の表示（時、分、秒を含む） */}
                  {currentTime.toLocaleTimeString("ja-JP", { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
              </div>
              <div className="text-xl md:text-2xl text-blue-300 font-light">
                {/* 日付の表示（年、月、日、曜日を含む） */}
                {currentTime.toLocaleDateString("ja-JP", { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="relative bg-slate-800/40 border-b border-slate-700">
        <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          お知らせ
        </h2>
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          初めまして！はやぶさです。<br />
          このサイトでは便利なツールや遊び心のある機能を自由に楽しめるようにする予定です。<br />
          どうぞよろしくお願いします。<br />
          <br />
          Xアカウントもフォローしてね！ 👉 <a href="https://x.com/leopard_shun?s=21" className="text-blue-400 hover:text-blue-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">@Leopard_shun</a>
          </p>
          </div>
      </header>

    </div>
  )
}
