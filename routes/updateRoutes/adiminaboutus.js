const express = require('express');
const router = express.Router();
const { connectDB } = require('../../db');


router.post('/aboutUsWelcomeBox1', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB()  
      const result = await db.collection('datas').updateOne(
        {},
        { $set: { "aboutUsWelcome.box1.title": title, "aboutUsWelcome.box1.content": content } }
      );
  
      if (result.matchedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "Data not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Update aboutUsWelcome.box2
  router.post('/aboutUsWelcomeBox2', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();   
      const result = await db.collection('datas').updateOne(
        {},
        { $set: { "aboutUsWelcome.box2.title": title, "aboutUsWelcome.box2.content": content } }
      );
  
      if (result.matchedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "Data not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Update aboutUsWhyChoose
  router.post('/aboutUsWhyChoose', async (req, res) => {
    const { title, content, p1, p2, p3 } = req.body;
  
    try {
      const db = await connectDB();  
      const result = await db.collection('datas').updateOne(
        {},
        { $set: { "aboutUsWhyChoose.title": title, "aboutUsWhyChoose.content": content, "aboutUsWhyChoose.p1": p1, "aboutUsWhyChoose.p2": p2, "aboutUsWhyChoose.p3": p3 } }
      );
  
      if (result.matchedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "Data not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Update aboutUsKnowUs
  router.post('/aboutUsKnowUs', async (req, res) => {
    const { title, content1, content2, p1, p2, p3, p4 } = req.body;
  
    try {
      const db = await connectDB();    
      const result = await db.collection('datas').updateOne(
        {},
        { $set: { "aboutUsKnowUs.title": title, "aboutUsKnowUs.content1": content1, "aboutUsKnowUs.content2": content2, "aboutUsKnowUs.p1": p1, "aboutUsKnowUs.p2": p2, "aboutUsKnowUs.p3": p3, "aboutUsKnowUs.p4": p4 } }
      );
  
      if (result.matchedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "Data not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;