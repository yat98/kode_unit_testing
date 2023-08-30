import app from './app.js';

const PORT = 3000;

app.listen(PORT, () => {
  console.info(`Server run at http://localhost:${PORT}`);
});
