const express = require('express');
const router = express.Router();
const { connectDB } = require('../../db');


// Route to update oilAndGasServices box1
router.post('/oilAndGasServices/box1', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "oilAndGasServices.box1.title": title,
            "oilAndGasServices.box1.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "oilAndGasServices box1 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update oilAndGasServices box2
  router.post('/oilAndGasServices/box2', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "oilAndGasServices.box2.title": title,
            "oilAndGasServices.box2.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "oilAndGasServices box2 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update oilAndGasServices box3
  router.post('/oilAndGasServices/box3', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "oilAndGasServices.box3.title": title,
            "oilAndGasServices.box3.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "oilAndGasServices box3 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update oilAndGasBenefits
  router.post('/oilAndGasBenefits', async (req, res) => {
    const { title, content, p1, p2, p3, p4 } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "oilAndGasBenefits.title": title,
            "oilAndGasBenefits.content": content,
            "oilAndGasBenefits.p1": p1,
            "oilAndGasBenefits.p2": p2,
            "oilAndGasBenefits.p3": p3,
            "oilAndGasBenefits.p4": p4
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "oilAndGasBenefits not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update oilAndGasDropdown box1
  router.post('/oilAndGasDropdown/box1', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "oilAndGasDropdown.box1.title": title,
            "oilAndGasDropdown.box1.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "oilAndGasDropdown box1 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update oilAndGasDropdown box2
  router.post('/oilAndGasDropdown/box2', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "oilAndGasDropdown.box2.title": title,
            "oilAndGasDropdown.box2.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "oilAndGasDropdown box2 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update oilAndGasDropdown box3
  router.post('/oilAndGasDropdown/box3', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "oilAndGasDropdown.box3.title": title,
            "oilAndGasDropdown.box3.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "oilAndGasDropdown box3 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  module.exports = router;