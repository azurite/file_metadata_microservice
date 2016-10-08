module.exports = function(req, res) {
  if(req.file) {
    res.json({
      size: req.file.size
    });
  }
  else {
    res.json({
      error: "Sorry something went wrong with the upload"
    });
  }
};
