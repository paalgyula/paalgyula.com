import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter"; // Import gray-matter for frontmatter parsing

import { MdxRemoteClient } from "components/MdxRemoteClient";

// Helper function to get all MDX file paths recursively
async function getAllMdxFiles(dir: string): Promise<string[]> {
  let mdxFiles: string[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      mdxFiles = mdxFiles.concat(await getAllMdxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".mdx")) {
      mdxFiles.push(fullPath);
    }
  }
  return mdxFiles;
}

export async function generateStaticParams() {
  const docsDirectory = path.join(process.cwd(), "content", "docs");
  const allMdxPaths = await getAllMdxFiles(docsDirectory);

  const staticParams = await Promise.all(
    allMdxPaths.map(async (mdxPath) => {
      const fileContent = await fs.readFile(mdxPath, "utf8");
      const { data } = matter(fileContent);

      // Filter out drafts and unpublished documents
      if (data.published === false || data.draft === true) {
        return null; // Don't generate a page for this document
      }

      // Calculate slug relative to the docsDirectory
      const relativePath = path.relative(docsDirectory, mdxPath);
      const slug = relativePath.replace(/\.mdx$/, "").split(path.sep);
      return { slug };
    }),
  );

  // Filter out nulls from the above mapping
  return staticParams.filter(Boolean);
}

interface DocPageProps {
  params: Promise<{
    slug: string[]; // slug will be an array for catch-all routes
  }>;
}

export default async function DocPage({ params: asyncParams }: DocPageProps) {
  const params = await asyncParams;

  if (!params || typeof params !== "object") {
    throw new Error(
      `DocPage called without valid params object: ${JSON.stringify(params)}`,
    );
  }

  if (!params.slug || !Array.isArray(params.slug) || params.slug.length === 0) {
    throw new Error(
      `DocPage params.slug is invalid: ${JSON.stringify(params.slug)}`,
    );
  }

  const slugPath = params.slug.join(path.sep);
  const mdxPath = path.join(
    process.cwd(),
    "content",
    "docs",
    `${slugPath}.mdx`,
  );

  let fileContent;
  try {
    fileContent = await fs.readFile(mdxPath, "utf8");
  } catch (error) {
    console.error(`Failed to load MDX file for path: ${slugPath}`, error);
    notFound();
  }

  const { data, content } = matter(fileContent);

  // Filter out drafts and unpublished documents at render time as well
  if (data.published === false || data.draft === true) {
    notFound();
  }

  const mdxSource = await serialize(content);

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl mx-auto py-8">
        <MdxRemoteClient mdxSource={mdxSource} />
      </article>
    </div>
  );
}
