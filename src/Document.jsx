import React from 'react';
import {
    AfterData,
    AfterRoot,
    AfterScripts,
    AfterStyles,
} from '@jaredpalmer/after';

const Document = ({ css, ids }) => {
    return (
          <html lang="pt-br">
            <head>
              <AfterStyles />
              <style
                data-emotion={`css ${ids.join(' ')}`}
                dangerouslySetInnerHTML={{ __html: css }}
              />
            </head>
            <body style={{ margin: 0 }}>
              <AfterRoot />
              <AfterData />
              <AfterScripts />
            </body>
          </html>
        );
};

Document.getInitialProps = async ({ renderPage }) => {
    const page = await renderPage();
    return { ...page };
};

export default Document;
