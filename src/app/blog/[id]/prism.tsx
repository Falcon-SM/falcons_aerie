"use client";

import { useEffect } from "react";
import prism from "prismjs";
import "prismjs/themes/prism.css";

export default function PrismInitializer() {
  useEffect(() => {
    prism.highlightAll();
  }, []);
  return null;
}
