// index.js (Backend with Node.js and Express)
const port = 4000;
const express = require('express');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require("console");


const app = express();
app.use(express.json());
app.use(cors());



mongoose.connect('mongodb+srv://tempaco2002:bLyAEMeDuPfjWghg@cluster0.0wml6k1.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const CartItem = mongoose.model('CartItem', {
  userId: String,
  cartData: Object
});

// Add item to cart for a specific user
app.post('/api/cart/:userId', async (req, res) => {
  let cart = {};
  for(let i=0; i<300; i++){
    cart[i]=0;
  }
  try {
    const userId = req.params.userId;
    const { cartData } = cart;
    const newItem = new CartItem({ userId, cartData });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Retrieve cart items for a specific user
app.get('/api/cart/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const cartItems = await CartItem.find({ userId });
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edit cart item quantity for a specific user
app.put('/api/cart/:userId/:itemId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    const { cartData } = req.body;
    await CartItem.updateOne({ userId, _id: itemId }, { $set: { cartData } });
    res.json({ message: 'Cart item updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete item from cart for a specific user
app.delete('/api/cart/:userId/:itemId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const itemId = req.params.itemId;
    await CartItem.deleteOne({ userId, _id: itemId });
    res.json({ message: 'Cart item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post('/addtocart',async(req,res)=>{
  console.log(req.body);
})

//------------products crud
//Image storage engine
const storage = multer.diskStorage({
  destination:'./upload/images',
  filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage:storage})

//Creating upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
  res.json({
      success:1,
      image_url:`http://localhost:${port}/images/${req.file.filename}`
  })
})

//Schema for creating products
const Product = mongoose.model("Product",{
  id:{
      type:Number,
      required:true,
  },
  name:{
      type:String,
      required:true,
  },
  image:{
      type:String,
      required:true,
  },
  category:{
      type:String,
      required:true,
  },
  new_price:{
      type:Number,
      required:true,
  },
  old_price:{
      type:Number,
      required:true,
  },
  date:{
      type:Date,
      default:Date.now,
  },
  available:{
      type:Boolean,
      default:true,
  },

})

app.post('/addproduct',async(req,res)=>{
  let products = await Product.find({});
  let id;
  if(products.length>0){
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id=last_product.id+1;
  }
  else{
      id=1;
  }
  const product=new Product({
      id:id,
      name:req.body.name,
      image:req.body.image,
      category:req.body.category,
      new_price:req.body.new_price,
      old_price:req.body.old_price

  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
      success:true,
      name:req.body.name,
  })
})

//Creating API for deleting products
app.post('/removeproduct',async(req,res)=>{
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed");
  res.json({
      success:true,
      name:req.body.name
  })
})

//Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
})



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
