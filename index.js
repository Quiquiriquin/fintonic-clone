import app from './app';
const port = 3000;
const API_USER = require('./src/routes/UserRoutes');

app.use('/api/user', API_USER);
// app.use('/', API_USER);
app.listen(port, () => console.log('Server listen 3000'));
