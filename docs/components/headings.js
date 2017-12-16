import React from 'react';
import { string } from 'prop-types';

export const Heading1 = ({ children }) => (
  <h1 className="heading-1">{ children }</h1>
);

Heading1.displayName = 'Heading1';

Heading1.propTypes = {
  children: string
};

export const Heading2 = ({ children }) => (
  <h2 className="heading-2">{ children }</h2>
);

Heading2.displayName = 'Heading2';

Heading2.propTypes = {
  children: string
};
