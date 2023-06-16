const urls = {
  development: `https://localhost/cats`,
  production: `https://api.thecatapi.com/v1/images/search/`,
};

const url = urls[process.env.NODE_ENV || "development"];

export default url;
