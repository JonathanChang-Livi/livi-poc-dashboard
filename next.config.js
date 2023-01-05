/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => { // webpack configurations
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'dashboard',
        remotes: {
          widget1: `widget1@https://livi-poc-widget1.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          widget2: `widget2@https://livi-poc-widget2.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          widget3: `widget3@https://livi-poc-widget3.vercel.app/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './demo': './component/dashboard',
          './widgets': './component/widget.tsx',
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  }
}

module.exports = nextConfig