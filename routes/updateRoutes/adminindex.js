const express = require('express');
const router = express.Router();
const { connectDB } = require('../../db');

// Route to update indexSlider box1
router.post('/indexSliderbox1', async (req, res) => {
  const { title, content } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "indexSlider.box1.title": title,
          "indexSlider.box1.content": content
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: "indexSlider box1 not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to update indexSlider box2
router.post('/indexSliderbox2', async (req, res) => {
  const { title, content } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "indexSlider.box2.title": title,
          "indexSlider.box2.content": content
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: "indexSlider box2 not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to update indexSlider box3
router.post('/indexSliderbox3', async (req, res) => {
  const { title, content } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "indexSlider.box3.title": title,
          "indexSlider.box3.content": content
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: "indexSlider box3 not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to update indexServices box1
router.post('/indexServicesbox1', async (req, res) => {
  const { title, content } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "indexServices.box1.title": title,
          "indexServices.box1.content": content
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: "indexServices box1 not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to update indexServices box2
router.post('/indexServicesbox2', async (req, res) => {
  const { title, content } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "indexServices.box2.title": title,
          "indexServices.box2.content": content
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: "indexServices box2 not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to update indexServices box3
router.post('/indexServicesbox3', async (req, res) => {
  const { title, content } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "indexServices.box3.title": title,
          "indexServices.box3.content": content
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: "indexServices box3 not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to update indexWeCare
router.post('/indexWeCare', async (req, res) => {
  const { title, content } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "indexWeCare.title": title,
          "indexWeCare.content": content
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: "indexWeCare not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;