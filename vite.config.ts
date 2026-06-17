// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Allow overriding the Nitro deploy target via env so the same repo
// can deploy on Lovable (cloudflare), Netlify, or Vercel.
// Set DEPLOY_TARGET=netlify on Netlify, DEPLOY_TARGET=vercel on Vercel.
const deployTarget = process.env.DEPLOY_TARGET ?? process.env.NITRO_PRESET;

const presetMap: Record<string, string> = {
  netlify: "netlify",
  vercel: "vercel",
  cloudflare: "cloudflare_module",
};

const nitroPreset = deployTarget ? presetMap[deployTarget] ?? deployTarget : undefined;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  ...(nitroPreset ? { nitro: { preset: nitroPreset } } : {}),
});
