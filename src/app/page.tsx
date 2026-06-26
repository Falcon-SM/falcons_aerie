"use client"

import { useState, useEffect } from "react"
import Script from "next/script";
import styles from "./page.module.css";

const headlines = [
  "Welcome to Falcon's Aerie!",
  "はやぶさの里へようこそ!",
];

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [headlineState, setHeadlineState] = useState({
    currentIndex: 0,
    previousIndex: null as number | null,
    isAnimating: true,
  })

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 500)
    let headlineTimeout: ReturnType<typeof setTimeout> | undefined

    const headlineTimer = setInterval(
      () => {
        setHeadlineState((currentState) => ({
          currentIndex: (currentState.currentIndex + 1) % headlines.length,
          previousIndex: currentState.currentIndex,
          isAnimating: true,
        }))

        if (headlineTimeout) {
          clearTimeout(headlineTimeout)
        }

        headlineTimeout = setTimeout(() => {
          setHeadlineState((currentState) => ({
            ...currentState,
            previousIndex: null,
            isAnimating: false,
          }))
        }, 650)
      },
      10000,
    )

    return () => {
      clearInterval(timer)
      clearInterval(headlineTimer)
      if (headlineTimeout) {
        clearTimeout(headlineTimeout)
      }
    }
  }, [])

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
            <h1 className={styles.rotatingHeadline} aria-live="polite" aria-atomic="true">
              <span className={styles.headlineViewport}>
                {headlineState.previousIndex !== null && (
                  <span className={`${styles.headlineLayer} ${styles.headlineExit}`}>
                    {headlines[headlineState.previousIndex]}
                  </span>
                )}
                <span
                  key={headlineState.currentIndex}
                  className={`${styles.headlineLayer} ${styles.headlineEnter} ${
                    headlineState.isAnimating ? styles.headlineEntering : ""
                  }`}
                >
                  {headlines[headlineState.currentIndex]}
                </span>
              </span>
            </h1>
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
