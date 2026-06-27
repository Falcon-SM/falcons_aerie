"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    const getTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const date = String(now.getDate()).padStart(2, "0");
      const hour = String(now.getHours()).padStart(2, "0");
      const min = String(now.getMinutes()).padStart(2, "0");
      const sec = String(now.getSeconds()).padStart(2, "0");

      setTimeStr(`${year}/${month}/${date}\n${hour}:${min}:${sec}`);
    };

    getTime()
  }, []);

  return (
    <>
    <main className="main-content">
            <h1>置き場</h1>
            <p>とりあえず、足りていなかった要素をここに置こうと思います。</p>
            <p>Gitの使い方を説明した動画:</p>
            <iframe width="560" height="315" src="https://drive.google.com/file/d/1a6UIfeIJ2E0Lu_uhgqAC687sXwOX6Uaz/preview" title="Video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            
            <p>閲覧日時: {timeStr}</p>
            <Link href="/" className='return-home-btn'>
        ホームに戻る
    </Link>
    </main>
    </>
  );
}