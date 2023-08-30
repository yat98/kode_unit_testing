import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import { getItems } from './models.js';

const __dirname = path.dirname('./');
const app = express();

app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    defaultLayout: false,
  })
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.use(express.static('static'));

app.get('/', async (req, res) => {
  const items = await getItems();
  res.render('index', { items });
});

export default app;
