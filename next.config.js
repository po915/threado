module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/member",
        permanent: true,
      },
    ]
  },
}
