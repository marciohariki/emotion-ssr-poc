import { css } from '@emotion/css';
import React from 'react';

const PurePinkContainer = props => (
  <div
    {...props}
    className={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      color: white;
    `}
  />
)

export default PurePinkContainer;
