"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const acceptLanguage = navigator.language || "";

    if (acceptLanguage.startsWith("hu")) {
      router.push("/hun");
    } else {
      router.push("/eng");
    }
  }, [router]);

  return null;
};

export default Page;
