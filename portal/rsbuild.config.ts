import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import pkg from "./package.json";
import { sponsors } from "../sponsors/src/data/index";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: pkg.name,
      remotes: {
        ads: "ads@http://localhost:3000/mf-manifest.json",
        news: "news@http://localhost:3001/mf-manifest.json",
        weather: "weather@http://localhost:3004/mf-manifest.json",
        sponsors: "sponsors@http://localhost:3002/mf-manifest.json",
      },
      shared: ["react", "react-dom"],
      dts: false,
    }),
  ],
  server: {
    port: 2000,
  },
});
