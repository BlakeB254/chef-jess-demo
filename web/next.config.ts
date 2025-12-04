import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // PayloadCMS requires a server (Node.js) to function. 
  // Removing 'output: export' to allow standard build.
  images: {
    unoptimized: true,
  },
};

export default withPayload(nextConfig);