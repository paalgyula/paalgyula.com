"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXComponents } from "mdx/types";
import Notice from "./Notice";

// Moved from mdx-components.tsx
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold my-4 text-white">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold my-3 text-white">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-bold my-2 text-white">{children}</h3>
  ),
  p: ({ children }) => <p className="text-lg my-2 text-gray-300">{children}</p>,
  ul: ({ children }) => (
    <ul className="list-disc list-inside ml-4 text-gray-300">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside ml-4 text-gray-300">{children}</ol>
  ),
  li: ({ children }) => <li className="mb-1 text-gray-300">{children}</li>,
  a: ({ children, href }) => (
    <a href={href} className="text-blue-400 hover:underline">
      {children}
    </a>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-700 p-4 rounded-md overflow-x-auto my-4">
      {children}
    </pre>
  ),
  code: ({ children }) => (
    <code className="bg-gray-600 text-gray-100 px-1 rounded">{children}</code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-400">
      {children}
    </blockquote>
  ),
  Notice: ({ children }) => <Notice type="warning">{children}</Notice>,
};

interface MdxRemoteClientProps {
  mdxSource: MDXRemoteSerializeResult;
}

export function MdxRemoteClient({ mdxSource }: MdxRemoteClientProps) {
  return <MDXRemote {...mdxSource} components={components} />;
}
