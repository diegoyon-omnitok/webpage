import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Raíz real del proyecto (evita que Turbopack resuelva módulos desde carpetas padre, p. ej. Desktop) */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
    resolveAlias: {
      tailwindcss: path.join(projectRoot, "node_modules/tailwindcss"),
    },
  },
};

export default nextConfig;
