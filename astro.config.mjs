// @ts-check
import { defineConfig } from "astro/config";
import { homepage } from "./package.json";

// https://astro.build/config
export default defineConfig({
  site: homepage,
});
