/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        prependData: `@import "src/assets/constant.scss";`
    }
}

module.exports = nextConfig
