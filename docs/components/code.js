import React from 'react';
import { node, string } from 'prop-types';

export const BlueSyntax = ({ children }) => <span className="blue-syntax">{ children }</span>;
export const OrangeSyntax = ({ children }) => <span className="orange-syntax">{ children }</span>;
export const CommentSyntax = ({ children }) => <span className="comment-syntax">{ children }</span>;

BlueSyntax.displayName = 'BlueSyntax';
OrangeSyntax.displayName = 'OrangeSyntax';
CommentSyntax.displayName = 'CommentSyntax';

BlueSyntax.propTypes = {
  children: string
};

OrangeSyntax.propTypes = Object.assign({}, BlueSyntax.propTypes);
CommentSyntax.propTypes = Object.assign({}, BlueSyntax.propTypes);

const Code = (props) => (
  <pre className="pre">
    <code className="code">
      { props.children }
    </code>
  </pre>
);

Code.displayName = 'Code';

Code.propTypes = {
  children: node
};

export default Code;
