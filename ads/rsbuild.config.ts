import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: pkg.name,
      exposes: {
        "./imageCycler": "./src/components/ImageCycler.tsx",
      },
      shared: ["react", "react-dom"],
      dts: false,
    }),
  ],
  server: {
    port: 3000,
  },
});