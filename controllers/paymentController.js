const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Order = require('../models/Order');

// Process payment
exports.processPayment = async (req, res) => {
  try {
    const { token, cart, total } = req.body;
    
    // Create Stripe charge
    const charge = await stripe.charges.create({
      amount: total * 100, // Convert to cents
      currency: 'usd',
      source: token,
      description: 'E-commerce purchase'
    });
    
    // Save order to database
    const order = new Order({
      user: req.userId,
      products: cart.map(item => ({
        product: item.id,
        quantity: item.quantity
      })),
      total
    });
    
    await order.save();
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};