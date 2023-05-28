/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    env: {
      VITE_APP_EMAILJS_SERVICE_ID: process.env.VITE_APP_EMAILJS_SERVICE_ID,
      VITE_APP_EMAILJS_TEMPLATE_ID: process.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      VITE_APP_EMAILJS_PUBLIC_KEY: process.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    },
  };
