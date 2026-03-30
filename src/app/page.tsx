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
    <div>
      <header>
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
        <div/>

        <div>
          <div>
             <p>
              Welcome to Falcon&apos;s Aerie!
            </p>
            {/* Clock */}
            <div>
              <div>
                <span>
                  {currentTime.toLocaleTimeString("ja-JP", { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </span>
              </div>
              <div>
                {/* Date */}
                {currentTime.toLocaleDateString("ja-JP", { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}
              </div>
            </div>
          </div>
        </div>
      </header>

      <header>
        <div>
          <h2>
            $Whoami
          </h2>
          <p>
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
      <div>
        <h2>
          $Projects
        </h2>
        <p>
          現在、いくつかのプロジェクトを進行中です。<br />
          これらのプロジェクトは、私が個人的に興味を持っている分野や、皆さんにとって便利なツールを提供することを目的としています。<br />
          ぜひ楽しみにしていてください！<br />
        </p>
      </div>  

    </div>
  )
}
