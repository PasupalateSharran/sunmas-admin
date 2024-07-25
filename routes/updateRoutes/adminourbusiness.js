const express = require('express');
const router = express.Router();
const { connectDB } = require('../../db');

// Route to update ourBusinessServices box1
router.post('/ourBusinessServices/box1', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "ourBusinessServices.box1.title": title,
            "ourBusinessServices.box1.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "ourBusinessServices box1 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update ourBusinessServices box2
  router.post('/ourBusinessServices/box2', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "ourBusinessServices.box2.title": title,
            "ourBusinessServices.box2.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "ourBusinessServices box2 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update ourBusinessServices box3
  router.post('/ourBusinessServices/box3', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "ourBusinessServices.box3.title": title,
            "ourBusinessServices.box3.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "ourBusinessServices box3 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  module.exports = router;