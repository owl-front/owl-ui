import { Config } from "@stencil/core";
import { less } from "@stencil/less";

export const config: Config = {
  namespace: "owl-ui",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  plugins: [
    less({
      injectGlobalPaths: ["src/styles/var.less", "src/styles/global.less"],
    }),
  ],
};
