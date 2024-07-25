const express = require('express');
const router = express.Router();
const { connectDB } = require('../../db');

// Route to update box1
router.post('/generalIndustriesDropdownbox1', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "generalIndustriesDropdown.box1.title": title,
            "generalIndustriesDropdown.box1.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "Box1 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update box2
  router.post('/generalIndustriesDropdownbox2', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "generalIndustriesDropdown.box2.title": title,
            "generalIndustriesDropdown.box2.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "Box2 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update box3
  router.post('/generalIndustriesDropdownbox3', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "generalIndustriesDropdown.box3.title": title,
            "generalIndustriesDropdown.box3.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "Box3 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  module.exports = router;