"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [lang, setLang] = useState("eng");
  const [messages, setMessages] = useState({
    "not-found-title": "404 - Page Not Found",
    "not-found-button": "Go Back Home",
  });

  useEffect(() => {
    const userLang = navigator.language || (navigator as any).userLanguage;
    const currentLang = userLang.startsWith("hu") ? "hu" : "en";
    setLang(currentLang);

    fetch(`/locales/${currentLang}/common.json`)
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
      });
  }, []);

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="mb-10 p-4">
        <h1 className="text-4xl font-bold">{messages["not-found-title"]}</h1>
      </div>
      <Link
        href={`/${lang === "hu" ? "hun" : "eng"}`}
        className="px-4 py-2 bg-primary-dark text-white rounded-md hover:bg-primary-light transition-colors"
      >
        {messages["not-found-button"]}
      </Link>

      <div className="mt-10 text-center text-gray-600 max-w-md">
        This not found page is belongs to the paalgyula.com website. If you
        think this page should exist, please contact me at{" "}
        <a href="mailto:gyula@pilab.hu">gyula@pilab.hu</a> email address. I will
        check if the page can be created or not.
      </div>
    </div>
  );
}
