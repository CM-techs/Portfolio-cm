const express = require ('express');
const router = express.Router();
var {MongoClient,ObjectId}=require('mongodb')
var url = "mongodb://localhost:27017"
var client = new MongoClient(url)
client.connect()
var db =client.db("pmcube")



router.get('/',async(req,res)=>{
        try {
    const docs =await db.collection("courses").find().toArray();
    res.status(200).json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
router.get('/m',async(req,res)=>{
        try {
    const docs =await db.collection("mentors").find().toArray();
    res.status(200).json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
router.post('/',async(req,res)=>{
  try {
    var { name, standard, school, whatsapp, phone } = req.body;
    await db.collection("register").insertOne({
      name: name,
      standard:standard,
      school:school,
      whatsapp: whatsapp,
      phone: phone
    });
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
});
router.get('/student', async (req, res) => {
  try {
    const docs = await db.collection("register").find().toArray();
    res.status(200).json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
router.delete('/student/:id',async(req,res)=>{
  try {
    const { id } = req.params;
    await db.collection("register").deleteOne({_id: new ObjectId(id) });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
router.post('/c',async(req,res)=>{
  try {
    var { name, email,message } = req.body;
    await db.collection("contact").insertOne({
      name: name,
      email: email,
      message:message
    });
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Registration failed" });
  }
});
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await db.collection("admin").find({ username, password });

    if (admin) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }

  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});
router.get('/image',async(req,res)=>{
  try {
    const docs =await db.collection("Gallery").find().toArray();
    res.status(200).json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;