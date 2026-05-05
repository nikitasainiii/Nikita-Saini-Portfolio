import { cpSync, existsSync, mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const staticDir = ".vercel/output/static";
const clientDir = "dist/client";

if (!existsSync(join(clientDir, "index.html"))) {
  console.error("dist/client/index.html missing — run the SPA build step after vite build.");
  process.exit(1);
}

mkdirSync(staticDir, { recursive: true });
cpSync(clientDir, staticDir, { recursive: true });

writeFileSync(
  join(".vercel/output/config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { src: "/assets/(.*)", dest: "/assets/$1" },
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/index.html" },
      ],
    },
    null,
    2
  )
);

console.log("✓ Vercel Build Output API layout written to .vercel/output");
