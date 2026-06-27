"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="main-content">
                <h1>自己紹介</h1>
                <hr />
                <h2>基本情報</h2>
                <ul>
                    <li>名前: はやぶさ</li>
                    <li>年齢: 15歳</li>
                    <li>学校: 都内の高校</li>
                    <li>趣味: プログラミング, AI, サイエンス, ピアノ</li>
                </ul>

                <h2>言語 (プログラミング)</h2>
                <ul>
                    <li>C</li>
                    <li>Swift</li>
                    <li>LaTeX</li>
                    <li>Oh My Zsh</li>
                    <li>Python</li>
                    <li>Next.js</li>
                </ul>

                <h2>言語 (Duolingo)</h2>
                <ul>
                    <li>日本語 (母語)</li>
                    <li>Le Français</li>
                    <li>Русский</li>

                </ul>
                <Link href="/" className='return-home-btn'>
                     ホームに戻る
                </Link>
            </main>
        </>
    );
}