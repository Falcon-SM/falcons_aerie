"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
    <main className="main-content">
            <h1>お問い合わせ</h1>
            <hr className="hr-glow" />
            <p>SNSアカウント: </p>
            <ul>
                <li>GitHub: <a href="https://github.com/Falcon-SM" target="_blank">Falcon-SM</a></li>
            </ul>
            <p>ご質問やお問い合わせは、以下のフォームからお願いします。</p>
            <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfk-WduZ6utzN3wk7gjRessYqBadVRgZScX6Ni3bozf0dadaQ/viewform?embedded=true"
            width="640"
            height="714"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            </iframe>

      {/* OpenStreetMap */}
      <iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=135.22521972656253%2C33.54139466898275%2C144.61853027343753%2C37.68382032669382&amp;layer=mapnik" style={{border: "1px solid black"}}></iframe><br/><small><a href="https://www.openstreetmap.org/?#map=8/35.639/139.922">View Larger Map</a></small>
      <p style={{textAlign: "center"}}>関東地方に住んでいます。</p>
      <Link href="/" className='return-home-btn'>
         ホームに戻る
    </Link>
    </main>
    </>
  );
}