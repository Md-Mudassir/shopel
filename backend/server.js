import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
  res.send('running');
});

app.use('/api/products', productRoutes);

app.listen(PORT, console.log(`server started in ${process.env.NODE_ENV} on ${PORT}`));
