const express = require('express');
const router = express.Router();
const { connectDB } = require('../../db');

// Route to update wasteWaterTreatmentServices box1
router.post('/wasteWaterTreatmentServices/box1', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await db.connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "wasteWaterTreatmentServices.box1.title": title,
            "wasteWaterTreatmentServices.box1.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "wasteWaterTreatmentServices box1 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update wasteWaterTreatmentServices box2
  router.post('/wasteWaterTreatmentServices/box2', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await db.connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "wasteWaterTreatmentServices.box2.title": title,
            "wasteWaterTreatmentServices.box2.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "wasteWaterTreatmentServices box2 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update wasteWaterTreatmentServices box3
  router.post('/wasteWaterTreatmentServices/box3', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await db.connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "wasteWaterTreatmentServices.box3.title": title,
            "wasteWaterTreatmentServices.box3.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "wasteWaterTreatmentServices box3 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update wasteWaterTreatmentServices box4
  router.post('/wasteWaterTreatmentServices/box4', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await db.connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "wasteWaterTreatmentServices.box4.title": title,
            "wasteWaterTreatmentServices.box4.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "wasteWaterTreatmentServices box4 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update wasteWaterTreatmentServices box5
  router.post('/wasteWaterTreatmentServices/box5', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await db.connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "wasteWaterTreatmentServices.box5.title": title,
            "wasteWaterTreatmentServices.box5.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "wasteWaterTreatmentServices box5 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update wasteWaterTreatmentServices box6
  router.post('/wasteWaterTreatmentServices/box6', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await db.connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "wasteWaterTreatmentServices.box6.title": title,
            "wasteWaterTreatmentServices.box6.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "wasteWaterTreatmentServices box6 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  // Route to update wasteWaterTreatmentServices box7
  router.post('/wasteWaterTreatmentServices/box7', async (req, res) => {
    const { title, content } = req.body;
  
    try {
      const db = await db.connectDB();
      const result = await db.collection('datas').updateOne(
        {},
        {
          $set: {
            "wasteWaterTreatmentServices.box7.title": title,
            "wasteWaterTreatmentServices.box7.content": content
          }
        }
      );
  
      if (result.modifiedCount > 0) {
        res.redirect('/admin');
      } else {
        res.status(404).json({ error: "wasteWaterTreatmentServices box7 not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  module.exports = router;
  