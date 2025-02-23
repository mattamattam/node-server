import express, { Request, Response } from 'express';
import inventoryRoutes from './routes/inventoryRoutes';

const app = express();
const port = process.env.PORT || 3001;

app.use('/api', inventoryRoutes);

app.use((req: Request, res: Response) => {
    res.status(404).send('Ain\'t Nothin\' Here!');
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;