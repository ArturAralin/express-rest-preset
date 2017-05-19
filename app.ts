import * as express from 'express';
import * as api from './common/api-endpoint';
import RootRouter from './lib/routes/index';

const app = express();

app.use(api.default);
app.use(RootRouter);

app.listen(3030, () => {
  console.log('Started');
});
