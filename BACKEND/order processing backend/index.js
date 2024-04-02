// index.js (Backend with Node.js and Express)

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

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
  try {
    const userId = req.params.userId;
    const { cartData } = req.body;
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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
