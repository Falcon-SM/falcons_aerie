"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <main className="main-content">
            <h1>これまでの活動</h1>
            <hr className="hr-collision" />
            <div className="container">
                <div className="floating">
                    <h3>令和5年度 中学生科学コンテスト 東京都知事賞 受賞</h3>
                    <p>中学1年生の時に、東京都中学生科学コンテストにて東京都知事賞を受賞しました。</p>
                </div>

                <div className="floating">
                    <h3>U-Tokyo GSC Next 萌芽コース 受講</h3>
                    <p>中学2年生の時に、U-Tokyo GSC Next 萌芽コースを受講しました。</p>
                </div>

                <div className="floating">
                    <h3>東京大学松尾岩澤研究所 GCI講座 及び DL基礎講座 修了</h3>
                    <p>中学3年生の時に、東京大学松尾岩澤研究所 GCI講座及びDL基礎講座を修了しました。</p>
                </div>

                <div className="floating">
                    <h3>セキュリティキャンプ2025 ジュニア 修了</h3>
                    <p>中学3年生の時に、セキュリティキャンプ2025 ジュニアを受講しました。
                    </p>
                </div>

                <div className="floating">
                    <h3>日経STOCKリーグ 審査委員特別賞受賞</h3>
                    <p>中学3年生の時に、日経STOCKリーグにて審査委員特別賞を受賞しました。</p>
                </div> 

                <div className="floating">
                    <h3>Apple Swift Student Challenge 2026 winner</h3>
                    <p>中学3年生の時に、Apple Swift Student Challenge 2026にてwinnerを受賞しました。</p>
                    <img src="ssc.jpg"></img>
                </div>

                <div className="floating">
                    <h3>HPDU 英語ディベート大会第7位</h3>
                    <p>中学3年生の時に、HPDU 英語ディベート大会にて第7位を獲得しました。</p>
                </div>  

                <div className="floating">
                    <h3>SecHack365 2025 トレイニー</h3>
                    <p>中学3年生の時に、SecHack365 2025 トレイニーに選ばれました。</p>
                </div>
            </div>

                        <Link href="/" className='return-home-btn'>
                 ホームに戻る
            </Link>
        </main>
    </>
  );
}