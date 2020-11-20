import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
  res.send('running');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`server started in ${process.env.NODE_ENV} on ${PORT}`));
