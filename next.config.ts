import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  serverExternalPackages:["pino","pino-pretty"],
  /* config options here */
  eslint:{
    ignoreDuringBuilds:true
  },
  typescript:{
    ignoreBuildErrors:true
  },
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
   
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
    
      },

    ],
  }
};

export default nextConfig;
