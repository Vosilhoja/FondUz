import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  `./src/i18n/request.ts`
)

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/:locale/home", destination: "/:locale", permanent: true },
      { source: "/:locale/about-us", destination: "/:locale/about", permanent: true },
      { source: "/:locale/blog", destination: "/:locale/news", permanent: true },
      { source: "/:locale/faq", destination: "/:locale/faqs", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
