import React from 'react';
import { string } from 'prop-types';

const Snippet = ({ children }) => <span className="snippet">{ children }</span>;

Snippet.displayName = 'Snippet';

Snippet.propTypes = { children: string };

export default Snippet;
