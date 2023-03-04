/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    NEXT_APP_WeatherApikey: process.env.NEXT_APP_WeatherApikey
  }
}

module.exports = nextConfig
