import { css } from '@emotion/react';
import React from 'react';

const ReactPinkContainer = props => (
  <div
    {...props}
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      color: white;
    `}
  />
)


export default ReactPinkContainer;
