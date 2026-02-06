"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaChevronDown } from "react-icons/fa";
import { useCallback } from "react";

type CvDropdownProps = {
  language: "en" | "hu";
  buttonLabel: string;
  openLabel: string;
  downloadLabel: string;
};

const CV_URLS: Record<CvDropdownProps["language"], string> = {
  en: "/cv_en_dark.pdf",
  hu: "/cv_en_dark.pdf",
};

const CvDropdown = ({
  language,
  buttonLabel,
  openLabel,
  downloadLabel,
}: CvDropdownProps) => {
  const url = CV_URLS[language];

  const trackClick = useCallback(
    (action: "open" | "download") => {
      try {
        if (typeof window !== "undefined") {
          const w = window as unknown as {
            dataLayer?: Array<Record<string, unknown>>;
          };

          if (w.dataLayer && Array.isArray(w.dataLayer)) {
            w.dataLayer.push({
              event: "cv_pdf_click",
              cv_language: language,
              cv_action: action,
              cv_url: url,
            });
          }
        }
      } catch {
        // ignore tracking errors
      }
    },
    [language, url]
  );

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-primary/80"
        >
          <span>{buttonLabel}</span>
          <FaChevronDown className="h-3 w-3" aria-hidden="true" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={8}
          className="z-50 min-w-[200px] rounded-md border border-white/10 bg-zinc-900/95 p-1 text-sm text-white shadow-lg backdrop-blur-md"
        >
          <DropdownMenu.Item asChild>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackClick("open")}
              className="flex cursor-pointer select-none items-center rounded-sm px-3 py-2 outline-none hover:bg-white/10"
            >
              {openLabel}
            </a>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <a
              href={url}
              download
              onClick={() => trackClick("download")}
              className="mt-0.5 flex cursor-pointer select-none items-center rounded-sm px-3 py-2 outline-none hover:bg-white/10"
            >
              {downloadLabel}
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default CvDropdown;

