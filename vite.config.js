import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { UnifiedViteWeappTailwindcssPlugin as weappTailwindcss } from "weapp-tailwindcss/vite";

export default defineConfig({
  plugins: [
    uni(),
    weappTailwindcss({
      rem2rpx: true,
    }),
  ],
});
