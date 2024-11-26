const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
 const bcrypt = require('bcryptjs'); //bcrypt
 const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const Place = require('./models/Place.js');
const Booking = require('./models/Booking.js');
const cookieParser = require('cookie-parser');
const download = require('image-downloader');
const path = require('path');
const multer  = require('multer');
const fs = require('fs');
const app = express();

//static files
app.use(express.static(path.join(__dirname,'../client/dist')))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../client/dist/index.html'));
})
const port = process.env.PORT ||4000; 
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'shgfdjgfhjkyfkghjfkf';
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname+"/uploads"));
app.use(cors({
  credentials: true,
  origin:'http://localhost:5173',
}));

function getUserDataFromToken(req){
  return new Promise((resolve, reject) => {
   jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
     if(err) throw err;
     resolve(userData);
 
   });
   })
  
 
 }


 mongoose.connect('mongodb+srv://samsonmendonca:samsonmendonca@cluster0.kaxfl.mongodb.net/');
app.get("/test", (req, res) => {
res.json('test ok');
});
app.post("/register",async(req, res) => {
   const { name, email, password } = req.body;
   try {
    const userDoc = await User.create({
      name,
       email,
        password:bcrypt.hashSync(password,bcryptSalt),
      });
       res.json(userDoc);
   } catch (error) {
    res.status(422).json(error);
   }
   
   
});
app.post("/login",async(req, res) => {
   const {email,password} = req.body;
 const userDoc = await User.findOne({email});
 if(userDoc){
 const passOk = bcrypt.compareSync(password,userDoc.password);
 if(passOk){
  jwt.sign({email:userDoc.email,
    id:userDoc._id,
    
  },jwtSecret,{},(err,token)=>{
    if(err) throw err;
    res.cookie('token',token).json(userDoc);
  });
 } else{
  res.status(422).json('pass not ok');
 }
}else{
  res.json('not found ');

 }

});
app.get('/profile', (req,res) => {
  // mongoose.connect(process.env.MONGO_URL);
  const {token} = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name,email,_id} = await User.findById(userData.id);
      res.json({name,email,_id});
    });
  } else {
    res.json(null);
  }
});
app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true);
});

app.post('/upload-by-link', async(req, res) => {
  const {link} = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  const options = {
    url:link,
    dest: __dirname + '/uploads/' +newName,
  };
   await download.image(options);
 
  res.json(newName);
});

const photosMiddleware = multer({dest: 'uploads/'});
app.post('/upload',photosMiddleware.array('photos',100), (req, res) => {
 const uploadedFiles = [];
  for(let i = 0; i < req.files.length; i++){
    const {path,originalname} = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length-1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace('uploads\\', ''));
   
  }
  res.json(uploadedFiles);
})
app.post('/places', async(req, res) => {
  const {token} = req.cookies;
   const {title, address, photos, description,
     perks, extraInfo, checkIn, checkOut, maxGuests, price} = req.body;


  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
     const placeDoc = await Place.create({
      owner: userData.id,
      title, address:address, photos:photos, description,
       perks, extraInfo, checkIn, checkOut, maxGuests, price
    });
    res.json(placeDoc);
   


})
});
app.get('/places', async(req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const {id} = userData;
    res.json( await Place.find({owner:id}) );
  })
});

app.get('/places/:id', async(req, res) => {
  const {id} = req.params;
  res.json(await Place.findById(id));
});


app.put('/places', async(req, res) => {
const {token} = req.cookies;
const {id, title, address, photos, description,
  perks, extraInfo, checkIn, checkOut, maxGuests, price} = req.body;

  
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const placeDoc = await Place.findById(id);
    if (userData.id === placeDoc.owner.toString()) {
    placeDoc.set({
      title, address:address, photos:photos, description,
       perks, extraInfo, checkIn, checkOut, maxGuests, price
    });
    await placeDoc.save();
    res.json('ok');
    }
  })




});
app.get('/all-places',async(req, res)=>{
res.json( await Place.find() );
});
app.post('/booking',async(req,res)=>{
  const userData =  await getUserDataFromToken(req);
  
  const {place,checkIn,checkOut,numberOfGuests,name,phone,price} = req.body;

const doc = await Booking.create({place,checkIn,checkOut,numberOfGuests,
  name,phone,price,user:userData.id});
res.json(doc);
});




app.get('/bookings',async(req,res)=>{
 const userData = await getUserDataFromToken(req);
 res.json( await Booking.find({user:userData.id}).populate('place') );

});
app.get('/searchplaces/:search', async(req, res) => {
  const {search} = req.params;
  res.json(await Place.find({ address: { $regex: search } }));
});

app.listen(port);
