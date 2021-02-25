  import express from 'express';
import { render } from '@jaredpalmer/after';
import createEmotionServer from '@emotion/server/create-instance'
import { cache } from '@emotion/css'
import {renderToString} from 'react-dom/server';

import routes from './routes';
import Document from './Document';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const chunks = require(process.env.RAZZLE_CHUNKS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const html = await render({
        req,
        res,
        routes,
        assets,
        chunks,
        customRenderer: (node) => {
          const { extractCritical } = createEmotionServer(cache)
          const r = extractCritical(renderToString(node))
          console.log(r);
          return r;
        },
        document: Document,
      });
      res.send(html);
    } catch (error) {
      console.error(error);
      res.json({ message: error.message, stack: error.stack });
    }
  });

export default server;
