import React from 'react';
import { string, node } from 'prop-types';

export const Table = ({ children }) => (
  <div className="table">
    { children }
  </div>
);

Table.displayName = 'Table';

Table.propTypes = {
  children: node
};

export const Row = ({ title, children }) => (
  <div className="row">
    <div className="column-1">
      <p>{ title }</p>
    </div>
    <div className="column-2">
      { children }
    </div>
  </div>
);

Row.displayName = 'Row';

Row.propTypes = {
  title: string,
  children: node,
};
