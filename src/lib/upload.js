const multer = require("multer");
const path = require("node:path");
const process = require("node:process");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const ext =
      file.originalname.split(".")[file.originalname.split(".").length - 1];
    cb(null, file.originalname.split(".")[0] + "-" + uniqueSuffix + "." + ext);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 },
});

module.exports = upload;
