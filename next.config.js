/** @type {import('next').NextConfig} */

module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['placeimg.com','api.lorem.space','vuzoon.com','www.complementosdelcafe.com'],
	},
	unoptimized: true,
};