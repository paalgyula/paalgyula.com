import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

// Helper function to get all MDX files and parse their frontmatter
async function getDocsMetadata() {
  const docsDirectory = path.join(process.cwd(), "content", "docs");
  const allMdxPaths = await getAllMdxFiles(docsDirectory);

  const docsMetadata = await Promise.all(
    allMdxPaths.map(async (mdxPath) => {
      const fileContent = await fs.readFile(mdxPath, "utf8");
      const { data } = matter(fileContent);

      // Calculate slug relative to the docsDirectory
      const relativePath = path.relative(docsDirectory, mdxPath);
      const slug = relativePath.replace(/\.mdx$/, "");

      return {
        slug: slug.split(path.sep), // Store as array for Link component
        title: data.title || slug, // Use title from frontmatter or slug
        type: data.type || "unknown",
        published: data.published !== false, // Default to true if not specified
        draft: data.draft === true, // Default to false if not specified
      };
    }),
  );

  // Filter out drafts and unpublished documents
  return docsMetadata.filter((doc) => doc.published && !doc.draft);
}

// Helper function to get all MDX file paths recursively (same as before)
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

export default async function DocsIndexPage() {
  const docs = await getDocsMetadata();

  const wikiDocs = docs.filter((doc) => doc.type === "wiki");
  const tutorialDocs = docs.filter((doc) => doc.type === "tutorial");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        Documentation
      </h1>

      {wikiDocs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-white">Wiki</h2>
          <ul className="list-disc list-inside ml-4">
            {wikiDocs.map((doc) => (
              <li key={doc.slug.join("/")} className="mb-2">
                <Link
                  href={`/docs/${doc.slug.join("/")}`}
                  className="text-blue-400 hover:underline"
                >
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {tutorialDocs.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold mb-4 text-white">Tutorials</h2>
          <ul className="list-disc list-inside ml-4">
            {tutorialDocs.map((doc) => (
              <li key={doc.slug.join("/")} className="mb-2">
                <Link
                  href={`/docs/${doc.slug.join("/")}`}
                  className="text-blue-400 hover:underline"
                >
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {wikiDocs.length === 0 && tutorialDocs.length === 0 && (
        <p className="text-center text-gray-400">No documentation found.</p>
      )}
    </div>
  );
}
