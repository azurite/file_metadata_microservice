module.exports = function() {
  return function(req, res) {
    res.status(404);
    res.json({
      status: 404,
      message: "This isn't the page you are looking for"
    });
  };
};
