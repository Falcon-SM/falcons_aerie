"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Blog() {
  const [title1, setTitle1] = useState<string>("Loading");
  const [title2, setTitle2] = useState<string>("Loading");

  useEffect(() => {
    const headers = {
      "X-MICROCMS-API-KEY": "2ozjaAVgciNDR9QUMbPr0qvOMutIpGVfkNBx"
    };

    // 1つ目
    fetch("https://uu1rg4yeag.microcms.io/api/v1/blog/daxhomv7u", { headers })
      .then((res) => res.json())
      .then((json) => {
        if (json.title) {
          setTitle1(json.title);
        }
      })
      .catch((err) => {
        console.error("記事1の取得に失敗しました:", err);
        setTitle1("タイトルの取得に失敗しました");
      });

    // 2つ目
    fetch("https://uu1rg4yeag.microcms.io/api/v1/blog/5-1tseera", { headers })
      .then((res) => res.json())
      .then((json) => {
        if (json.title) {
          setTitle2(json.title);
        }
      })
      .catch((err) => {
        console.error("記事2の取得に失敗しました:", err);
        setTitle2("タイトルの取得に失敗しました");
      });
  }, []);

  return (
    <main className="main-content">
      <h1>ブログ</h1>
      <p>
        自身の経験を元に書いたブログをここにまとめています。データはmicroCMSから引っ張ってきています。定期的に更新していく予定ですので、ぜひチェックしてください。
      </p>

      <table style={{ width: "100%", maxWidth: "800px" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left" }}>
              <p style={{ margin: 0 }}>タイトル</p>
            </th>
            <th style={{ width: "150px", textAlign: "left" }}>
              <p style={{ margin: 0 }}>執筆日</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h3 style={{ margin: 0, textAlign: "left", fontSize: "1.1rem" }}><Link href="/blog/daxhomv7u" style={{ color: "#0066cc", textDecoration: "underline" }}>
                  {title1}
                </Link></h3>
            </td>
            <td>
              <p style={{ margin: 0 }}>2026/2/28</p>
            </td>
          </tr>
          <tr>
            <td>
              <h3 style={{ margin: 0, textAlign: "left", fontSize: "1.1rem" }}><Link href="/blog/5-1tseera" style={{ color: "#0066cc", textDecoration: "underline" }}>
                  {title2}
                </Link></h3>
            </td>
            <td>
              <p style={{ margin: 0 }}>2026/4/26</p>
            </td>
          </tr>
        </tbody>
      </table>
      <Link href="/" className='return-home-btn'>
                             ホームに戻る
                        </Link>
    </main>
  );
}
