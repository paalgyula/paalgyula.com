"use client";

import Head from "next/head";
import { useRef } from "react";

export default function AdminHome() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Head>
        <title>Ez itt az</title>
      </Head>
      <div>
      
      </div>
    </>
  );
}
