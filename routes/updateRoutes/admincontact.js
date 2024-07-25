const express = require('express');
const router = express.Router();
const { connectDB } = require('../../db');

// Update contactHeadQuaters
router.post('/contactHeadQuarters', async (req, res) => {
  const { name, address, country, Email, phnNo } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          'contactHeadQuaters.name': name,
          'contactHeadQuaters.address': address,
          'contactHeadQuaters.country': country,
          'contactHeadQuaters.Email': Email,
          'contactHeadQuaters.phnNo': phnNo
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: "Contact Headquarters not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update contactGroupCompanies box1
router.post('/contactGroupCompaniesBox1/', async (req, res) => {
  const { name, address, city, country, Email } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "contactGroupCompanies.box1.name": name,
          "contactGroupCompanies.box1.address": address,
          "contactGroupCompanies.box1.city": city,
          "contactGroupCompanies.box1.country": country,
          "contactGroupCompanies.box1.Email": Email
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: `Contact Group Company box1 not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update contactGroupCompanies box2
router.post('/contactGroupCompaniesBox2/', async (req, res) => {
  const { name, address, city, country, Email } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "contactGroupCompanies.box2.name": name,
          "contactGroupCompanies.box2.address": address,
          "contactGroupCompanies.box2.city": city,
          "contactGroupCompanies.box2.country": country,
          "contactGroupCompanies.box2.Email": Email
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: `Contact Group Company box2 not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Update contactGroupCompanies box3
router.post('/contactGroupCompaniesBox3/', async (req, res) => {
  const { name, address, city, country, Email } = req.body;

  try {
    const db = await connectDB();
    const result = await db.collection('datas').updateOne(
      {},
      {
        $set: {
          "contactGroupCompanies.box3.name": name,
          "contactGroupCompanies.box3.address": address,
          "contactGroupCompanies.box3.city": city,
          "contactGroupCompanies.box3.country": country,
          "contactGroupCompanies.box3.Email": Email
        }
      }
    );

    if (result.modifiedCount > 0) {
      res.redirect('/admin');
    } else {
      res.status(404).json({ error: `Contact Group Company box3 not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
