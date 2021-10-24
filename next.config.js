module.exports = {
  reactStrictMode: true,
  env: {
    API_URL:
      process.env.NODE_ENV === "production"
        ? process.env.API_URL
        : process.env.DEV_API_URL,
  },
};
