const app = require('./app/app');
const port = process.env.PORT || '3030'


app.listen(port, () => console.log(`Server online, using port: ${port}`));
