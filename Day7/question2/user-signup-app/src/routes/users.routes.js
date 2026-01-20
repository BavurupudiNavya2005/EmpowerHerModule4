const express = require("express");
const fs = require("fs");
const path = require("path");
const cloudinary = require("../config/cloudinary.config");
const upload = require("../middleware/upload.middleware");
const uniqueEmail = require("../middleware/uniqueEmail.middleware");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

const readDB = () => JSON.parse(fs.readFileSync(dbPath, "utf-8"));
const writeDB = (data) =>
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

/* ==========================
   SIGNUP ROUTE
========================== */
router.post(
  "/signup",
  upload.single("profile"),
  uniqueEmail,
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          error: "Profile image is required"
        });
      }

      const result = await cloudinary.uploader.upload_stream(
        { resource_type: "image" },
        (error, result) => {
          if (error) {
            return res.status(500).json({ error: "Image upload failed" });
          }

          const db = readDB();

          const newUser = {
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profilePic: result.secure_url
          };

          db.users.push(newUser);
          writeDB(db);

          res.status(201).json({
            message: "User registered successfully",
            user: {
              id: newUser.id,
              name: newUser.name,
              email: newUser.email,
              profilePic: newUser.profilePic
            }
          });
        }
      );

      result.end(req.file.buffer);
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  }
);

module.exports = router;
