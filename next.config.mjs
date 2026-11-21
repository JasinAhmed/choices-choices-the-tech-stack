/** @type {import('next').NextConfig} */
const nextConfig = {
  // Net als adapter-static + prerender in SvelteKit: een volledig statische export naar /out
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
