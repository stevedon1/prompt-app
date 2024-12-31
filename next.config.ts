import type { NextConfig } from "next";
import { redirect } from "next/dist/server/api-utils";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  async redirects(){
    return [
      {
        source: "/",
        destination: "/subjects",
        permanent: true
      }
    ]
  }
}