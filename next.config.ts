// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['drive.google.com']
    },
    env:{
        FRONTEND_URL:process.env.FRONTEND_URL,
        BACKEND_URL:process.env.BACKEND_URL
    },
    async headers() {
        return [

            {
                source: "/event/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // อนุญาตให้โดเมนใดๆ เรียกใช้งานได้
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            },
            
            {
                source: "/ticket/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // อนุญาตให้โดเมนใดๆ เรียกใช้งานได้
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ];
    }
};

export default nextConfig;