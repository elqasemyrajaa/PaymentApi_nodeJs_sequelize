const express = require('express');
const app = express();
const db = require('./model/index');
const routes = require('./routes/route');

app.use(express.json());
app.use('/api', routes);

db.sequelize.sync().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
