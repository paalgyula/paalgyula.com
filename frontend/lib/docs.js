import { statSync } from "fs";
import fs from "fs/promises";
import matter from "gray-matter";
import path, { join } from "path";
import remarkFrontmatter from "remark-frontmatter";
import { unified } from "unified";
import remarkParse from "remark-parse";

const docsDirectory = join(process.cwd(), "pages/tutorials");

async function walk(dir) {
  let files = await fs.readdir(dir);
  files = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) return walk(filePath);
      else if (stats.isFile()) return filePath;
    })
  );

  return files
    .reduce((all, folderContents) => all.concat(folderContents), [])
    .filter((f) => f.endsWith(".mdx"));
}

export async function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(docsDirectory, `${realSlug}.mdx`);
  const fileContents = await fs.readFile(fullPath, "utf8");

  return {
    slug: realSlug,
    meta: JSON.stringify({}),
    content: "",
  };
}

export async function getAllDocs() {
  const files = await walk(docsDirectory);

  const docs = [];

  await Promise.all(
    files.map(async (fp) => {
      const slug = fp.replace(/^.*tutorials\//, "");

      const doc = await getDocBySlug(slug);

      docs.push(doc);
    })
  );

  return docs;
}
