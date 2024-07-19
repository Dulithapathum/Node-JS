export const Server = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("ssss");
  }
};
